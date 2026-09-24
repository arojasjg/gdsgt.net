/**
 * Lead intake endpoint: POST /api/leads
 *
 * Delivers form submissions to every configured channel:
 *   Email (LEADS_EMAIL_TO, default info@gdsgt.net) via
 *     SMTP_HOST / SMTP_PORT / SMTP_USER / SMTP_PASS (e.g. the Plesk mail server), or
 *     RESEND_API_KEY
 *   GDSONE_LEADS_URL (+ GDSONE_API_KEY)  GDS ONE ERP/CRM lead endpoint
 *   LEADS_WEBHOOK_URL                    generic JSON POST (Sheets, Make, Zapier, n8n)
 * Returns 503 when no channel is configured so the client can fall back to WhatsApp.
 */

import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export const runtime = 'nodejs';

const SOURCES = ['custom_software', 'partner_application', 'contact'] as const;
type Source = (typeof SOURCES)[number];

const SOURCE_LABELS: Record<Source, string> = {
  custom_software: 'Software a la medida',
  partner_application: 'Solicitud de partner',
  contact: 'Contacto',
};

const MAX_FIELDS = 30;
const MAX_VALUE_LENGTH = 2000;

// Basic per-IP rate limit (per server instance)
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 10;
const hits = new Map<string, number[]>();

function rateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) || []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 5000) hits.clear();
  return recent.length > MAX_PER_WINDOW;
}

function escapeHtml(value: string): string {
  return value.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!);
}

function cleanFields(input: unknown): Record<string, string> | null {
  if (!input || typeof input !== 'object' || Array.isArray(input)) return null;
  const entries = Object.entries(input as Record<string, unknown>).slice(0, MAX_FIELDS);
  const fields: Record<string, string> = {};
  for (const [key, raw] of entries) {
    if (!/^[a-z0-9_]{1,40}$/i.test(key)) continue;
    const value = Array.isArray(raw) ? raw.map(String).join(', ') : raw == null ? '' : String(raw);
    fields[key] = value.slice(0, MAX_VALUE_LENGTH).trim();
  }
  return fields;
}

async function sendWebhook(url: string, lead: object): Promise<boolean> {
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(lead),
  });
  return res.ok;
}

function buildEmail(source: Source, fields: Record<string, string>, meta: Record<string, string>) {
  const rows = Object.entries({ ...fields, ...meta })
    .map(([k, v]) => `<tr><td style="padding:4px 12px 4px 0;color:#555"><b>${escapeHtml(k)}</b></td><td style="padding:4px 0">${escapeHtml(v).replace(/\n/g, '<br>')}</td></tr>`)
    .join('');
  const text = Object.entries({ ...fields, ...meta }).map(([k, v]) => `${k}: ${v}`).join('\n');
  const name = fields.name || fields.contact_name || fields.company || fields.company_name || '';
  return {
    subject: `Nuevo lead: ${SOURCE_LABELS[source]}${name ? ` – ${name}` : ''}`,
    html: `<h2>${escapeHtml(SOURCE_LABELS[source])}</h2><table>${rows}</table>`,
    text,
    replyTo: fields.email || undefined,
  };
}

async function sendSmtp(to: string[], email: ReturnType<typeof buildEmail>): Promise<boolean> {
  const port = Number(process.env.SMTP_PORT || 465);
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port,
    secure: port === 465,
    auth: process.env.SMTP_USER ? { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS } : undefined,
  });
  await transporter.sendMail({
    from: process.env.LEADS_EMAIL_FROM || process.env.SMTP_USER,
    to,
    replyTo: email.replyTo,
    subject: email.subject,
    html: email.html,
    text: email.text,
  });
  return true;
}

async function sendResend(apiKey: string, to: string[], email: ReturnType<typeof buildEmail>): Promise<boolean> {
  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      from: process.env.LEADS_EMAIL_FROM || 'GDS Web <onboarding@resend.dev>',
      to,
      reply_to: email.replyTo,
      subject: email.subject,
      html: email.html,
      text: email.text,
    }),
  });
  return res.ok;
}

/** Normalized lead for GDS ONE: common fields on top, full form under `fields`. */
async function sendGdsOne(url: string, source: Source, fields: Record<string, string>, meta: Record<string, string>): Promise<boolean> {
  const headers: Record<string, string> = { 'Content-Type': 'application/json' };
  if (process.env.GDSONE_API_KEY) {
    headers.Authorization = `Bearer ${process.env.GDSONE_API_KEY}`;
    // Some Apache/PHP setups drop Authorization; the ERP also accepts this header
    headers['X-Web-Leads-Token'] = process.env.GDSONE_API_KEY;
  }
  const res = await fetch(url, {
    method: 'POST',
    headers,
    body: JSON.stringify({
      origin: 'www.gdsgt.net',
      source,
      source_label: SOURCE_LABELS[source],
      name: fields.name || fields.contact_name || '',
      company: fields.company || fields.company_name || '',
      email: fields.email || '',
      phone: fields.phone || '',
      country: fields.country || '',
      message: fields.details || fields.why_partner || fields.message || '',
      fields,
      ...meta,
    }),
  });
  return res.ok;
}

export async function POST(request: Request) {
  const ip = request.headers.get('x-forwarded-for')?.split(',')[0].trim() || request.headers.get('x-real-ip') || 'unknown';
  if (rateLimited(ip)) {
    return NextResponse.json({ ok: false, error: 'rate_limited' }, { status: 429 });
  }

  let body: any;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: 'invalid_json' }, { status: 400 });
  }

  // Honeypot: bots fill hidden fields. Pretend success.
  if (body?.hp) {
    return NextResponse.json({ ok: true });
  }

  const source = body?.source as Source;
  const fields = cleanFields(body?.fields);
  if (!SOURCES.includes(source) || !fields || Object.keys(fields).length === 0) {
    return NextResponse.json({ ok: false, error: 'invalid_payload' }, { status: 400 });
  }

  const meta = {
    lang: body?.lang === 'en' ? 'en' : 'es',
    page: String(body?.page || '').slice(0, 300),
    received_at: new Date().toISOString(),
  };

  const webhookUrl = process.env.LEADS_WEBHOOK_URL;
  const gdsOneUrl = process.env.GDSONE_LEADS_URL;
  const resendKey = process.env.RESEND_API_KEY;
  const emailTo = (process.env.LEADS_EMAIL_TO || 'info@gdsgt.net').split(',').map((s) => s.trim()).filter(Boolean);
  const email = buildEmail(source, fields, meta);

  const deliveries: Promise<boolean>[] = [];
  const attempt = (channel: string, send: () => Promise<boolean>) =>
    deliveries.push(
      send().catch((err) => {
        console.error(`[leads] ${channel} delivery failed`, err instanceof Error ? err.message : err);
        return false;
      })
    );

  if (process.env.SMTP_HOST) attempt('smtp', () => sendSmtp(emailTo, email));
  else if (resendKey) attempt('resend', () => sendResend(resendKey, emailTo, email));
  if (gdsOneUrl) attempt('gdsone', () => sendGdsOne(gdsOneUrl, source, fields, meta));
  if (webhookUrl) attempt('webhook', () => sendWebhook(webhookUrl, { source, ...meta, ...fields }));

  if (deliveries.length === 0) {
    return NextResponse.json({ ok: false, error: 'not_configured' }, { status: 503 });
  }

  const results = await Promise.all(deliveries);
  if (!results.some(Boolean)) {
    console.error('[leads] all delivery channels failed', { source });
    return NextResponse.json({ ok: false, error: 'delivery_failed' }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
