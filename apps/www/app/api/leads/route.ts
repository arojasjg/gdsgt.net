/**
 * Lead intake endpoint: POST /api/leads
 *
 * Delivers form submissions to every configured channel:
 *   LEADS_WEBHOOK_URL   JSON POST (Google Apps Script → Sheets, Make, Zapier, n8n, CRM)
 *   RESEND_API_KEY      email via Resend, with LEADS_EMAIL_TO (comma-separated)
 *                       and optional LEADS_EMAIL_FROM
 * Returns 503 when no channel is configured so the client can fall back to WhatsApp.
 */

import { NextResponse } from 'next/server';

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

async function sendEmail(apiKey: string, to: string[], source: Source, fields: Record<string, string>, meta: Record<string, string>) {
  const rows = Object.entries({ ...fields, ...meta })
    .map(([k, v]) => `<tr><td style="padding:4px 12px 4px 0;color:#555"><b>${escapeHtml(k)}</b></td><td style="padding:4px 0">${escapeHtml(v).replace(/\n/g, '<br>')}</td></tr>`)
    .join('');
  const name = fields.name || fields.contact_name || fields.company || fields.company_name || '';
  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      from: process.env.LEADS_EMAIL_FROM || 'GDS Web <onboarding@resend.dev>',
      to,
      reply_to: fields.email || undefined,
      subject: `Nuevo lead: ${SOURCE_LABELS[source]}${name ? ` – ${name}` : ''}`,
      html: `<h2>${escapeHtml(SOURCE_LABELS[source])}</h2><table>${rows}</table>`,
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
  const resendKey = process.env.RESEND_API_KEY;
  const emailTo = (process.env.LEADS_EMAIL_TO || '').split(',').map((s) => s.trim()).filter(Boolean);

  const deliveries: Promise<boolean>[] = [];
  if (webhookUrl) deliveries.push(sendWebhook(webhookUrl, { source, ...meta, ...fields }).catch(() => false));
  if (resendKey && emailTo.length) deliveries.push(sendEmail(resendKey, emailTo, source, fields, meta).catch(() => false));

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
