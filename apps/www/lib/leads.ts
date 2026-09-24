/**
 * Client helper to send a form submission to /api/leads.
 * Resolves to true only when at least one delivery channel accepted it.
 */
export async function submitLead(
  source: 'custom_software' | 'partner_application' | 'contact',
  fields: Record<string, string | string[]>,
  lang: string,
  honeypot = ''
): Promise<boolean> {
  try {
    const res = await fetch('/api/leads', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ source, fields, lang, page: window.location.pathname, hp: honeypot }),
      keepalive: true,
    });
    return res.ok;
  } catch {
    return false;
  }
}
