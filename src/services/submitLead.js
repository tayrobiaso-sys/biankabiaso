const WEBHOOK_URL = import.meta.env.VITE_N8N_WEBHOOK_URL

export async function submitLead({ lead, answers, result }) {
  const payload = {
    nome:       lead.nome.trim(),
    whatsapp:   lead.whatsapp.replace(/\D/g, ''),
    email:      lead.email.trim().toLowerCase(),
    tipo_corpo: result.type,
    tipo_codigo: result.type.split(' ').pop().charAt(0), // "A" | "T" | "I" | "R" | "O"
    respostas:  answers,
    utm_source: new URLSearchParams(window.location.search).get('utm_source') ?? 'organic',
    utm_medium: new URLSearchParams(window.location.search).get('utm_medium') ?? null,
    utm_campaign: new URLSearchParams(window.location.search).get('utm_campaign') ?? null,
    timestamp:  new Date().toISOString(),
  }
    console.log('[submitLead] URL:', WEBHOOK_URL)
    console.log('[submitLead] payload:', payload)
  const res = await fetch(WEBHOOK_URL, {
    method:  'POST',
    headers: { 'Content-Type': 'application/json' },
    body:    JSON.stringify(payload),
  })

  if (!res.ok) throw new Error(`Webhook error: ${res.status}`)
  return payload
}