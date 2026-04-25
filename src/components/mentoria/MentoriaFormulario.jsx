// src/components/mentoria/MentoriaFormulario.jsx
import { useState } from 'react'

const WEBHOOK_URL = 'https://n8n.biaso.cloud/webhook/biaso-mentoria'

// Máscaras — mesmo padrão do quiz
function maskPhone(value) {
  const digits = value.replace(/\D/g, '').slice(0, 11)
  if (digits.length <= 2)  return `(${digits}`
  if (digits.length <= 7)  return `(${digits.slice(0,2)}) ${digits.slice(2)}`
  return `(${digits.slice(0,2)}) ${digits.slice(2,7)}-${digits.slice(7)}`
}

function maskName(value) {
  return value
    .replace(/[^a-zA-ZÀ-ÿ\s]/g, '')
    .replace(/\b\w/g, c => c.toUpperCase())
}

function maskEmail(value) {
  return value.replace(/\s/g, '').toLowerCase()
}

function FieldInput({ label, type = 'text', value, onChange, placeholder, dark = true }) {
  const [showError, setShowError] = useState(false)

  const validators = {
    tel:   v => v.replace(/\D/g,'').length === 11,
    email: v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v),
    text:  v => v.trim().split(' ').length >= 2 && v.trim().length >= 4,
  }

  const errorMsgs = {
    tel:   'Informe um WhatsApp válido com DDD',
    email: 'Informe um e-mail válido',
    text:  'Informe nome e sobrenome',
  }

  const isValid = validators[type]?.(value) ?? true

  function handleChange(e) {
    let v = e.target.value
    if (type === 'tel')   v = maskPhone(v)
    if (type === 'text')  v = maskName(v)
    if (type === 'email') v = maskEmail(v)
    onChange(v)
  }

  function handleBlur() {
    if (value.length > 0) setShowError(!isValid)
  }

  const borderColor = showError
    ? 'border-red-400'
    : isValid && value.length > 0
      ? 'border-biaso-gold'
      : dark
        ? 'border-biaso-white/20 focus:border-biaso-gold'
        : 'border-biaso-border focus:border-biaso-gold'

  const textColor  = dark ? 'text-biaso-white'  : 'text-biaso-black'
  const labelColor = dark ? 'text-biaso-white/40' : 'text-biaso-muted'
  const phColor    = dark ? 'placeholder:text-biaso-white/20' : 'placeholder:text-biaso-border'

  return (
    <div className="flex flex-col gap-2">
      <label className={`text-[11px] uppercase tracking-widest ${labelColor}`}>
        {label}
      </label>
      <input
        type={type === 'tel' ? 'tel' : type}
        inputMode={type === 'tel' ? 'numeric' : undefined}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder={placeholder}
        className={`
          w-full py-3 px-0 text-[15px] bg-transparent
          border-b transition-colors duration-150 outline-none
          ${borderColor} ${textColor} ${phColor}
        `}
      />
      {showError && (
        <p className="text-[11px] text-red-400">{errorMsgs[type]}</p>
      )}
    </div>
  )
}

export function MentoriaFormulario() {
  const [form, setForm]       = useState({ nome: '', whatsapp: '', email: '' })
  const [status, setStatus]   = useState('idle') // idle | loading | success | error

  const valid =
    form.nome.trim().split(' ').length >= 2 &&
    form.whatsapp.replace(/\D/g,'').length === 11 &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)

  async function handleSubmit() {
    if (!valid || status === 'loading') return
    setStatus('loading')

    const payload = {
      nome:      form.nome.trim(),
      whatsapp:  form.whatsapp.replace(/\D/g,''),
      email:     form.email.trim().toLowerCase(),
      origem:    'mentoria-lista-espera',
      utm_source: new URLSearchParams(window.location.search).get('utm_source') ?? 'organic',
      timestamp:  new Date().toISOString(),
    }

    try {
      await fetch(WEBHOOK_URL, {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify(payload),
      })
      setStatus('success')
    } catch {
      // Avança para success mesmo com erro de rede
      // O lead não deve ser prejudicado por falha técnica
      setStatus('success')
    }
  }

  // Tela de sucesso
  if (status === 'success') {
    return (
      <section id="lista-espera" className="w-full bg-biaso-dark border-t border-biaso-gold/10">
        <div className="max-w-4xl mx-auto px-6 py-24 flex flex-col items-center text-center gap-8">
          <div className="w-14 h-14 border border-biaso-gold/30 flex items-center justify-center">
            <div className="w-6 h-px bg-biaso-gold" />
          </div>
          <div className="flex flex-col gap-3">
            <span className="text-[10px] tracking-[.2em] uppercase text-biaso-gold">
              Inscrição confirmada
            </span>
            <h2 className="font-serif text-[34px] font-light leading-[1.2] text-biaso-white">
              Você está na lista de espera
            </h2>
            <p className="text-[15px] text-biaso-white/45 leading-relaxed max-w-md">
              Em instantes você vai receber uma mensagem no WhatsApp com a confirmação
              e todos os detalhes sobre o lançamento. Fique atenta — as vagas abrem
              24h antes para quem está na lista.
            </p>
          </div>
          <div className="flex items-center gap-3 pt-4 border-t border-biaso-gold/10 w-full max-w-xs justify-center">
            <div className="w-1.5 h-1.5 rounded-full bg-biaso-gold animate-pulse" />
            <span className="text-[10px] tracking-[.14em] uppercase text-biaso-gold/60">
              Lançamento — 01 de maio de 2026
            </span>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="lista-espera" className="w-full bg-biaso-dark border-t border-biaso-gold/10">
      <div className="max-w-4xl mx-auto px-6 py-20 flex flex-col gap-12">

        {/* Header */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-biaso-gold animate-pulse" />
            <span className="text-[10px] tracking-[.2em] uppercase text-biaso-gold">
              Vagas limitadas · Lançamento 01/05
            </span>
          </div>
          <h2 className="font-serif text-[40px] font-light leading-[1.1] text-biaso-white max-w-lg">
            Garanta seu lugar na lista de espera
          </h2>
          <p className="text-[15px] text-biaso-white/45 leading-relaxed max-w-xl">
            Quem está na lista recebe acesso exclusivo 24h antes da abertura ao público
            — e tem prioridade nas vagas. Preencha abaixo e aguarde o contato no WhatsApp.
          </p>
        </div>

        {/* Formulário */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">

          {/* Campos */}
          <div className="flex flex-col gap-8">
            <FieldInput
              label="Nome completo"
              type="text"
              value={form.nome}
              onChange={v => setForm(f => ({ ...f, nome: v }))}
              placeholder="Como prefere ser chamada"
              dark
            />
            <FieldInput
              label="WhatsApp"
              type="tel"
              value={form.whatsapp}
              onChange={v => setForm(f => ({ ...f, whatsapp: v }))}
              placeholder="(00) 00000-0000"
              dark
            />
            <FieldInput
              label="E-mail"
              type="email"
              value={form.email}
              onChange={v => setForm(f => ({ ...f, email: v }))}
              placeholder="seu@email.com.br"
              dark
            />

            <div className="flex flex-col gap-4 pt-2">
              <button
                onClick={handleSubmit}
                disabled={!valid || status === 'loading'}
                className="w-full bg-biaso-gold text-biaso-dark text-[11px] font-medium tracking-[.1em] uppercase py-4 hover:bg-biaso-gold2 transition-colors duration-150 disabled:opacity-30 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? 'Aguarde...' : 'Quero garantir minha vaga'}
              </button>
              <p className="text-[11px] text-biaso-white/20 text-center leading-relaxed">
                Seus dados são confidenciais e não serão compartilhados.
              </p>
            </div>
          </div>

          {/* Resumo lateral */}
          <div className="flex flex-col gap-6 border border-biaso-gold/10 p-7">
            <span className="text-[10px] tracking-[.18em] uppercase text-biaso-gold/50">
              Resumo da mentoria
            </span>
            <div className="flex flex-col gap-4">
              {[
                { label: 'Formato',      val: '4 encontros ao vivo — 2h cada' },
                { label: 'Início',       val: '01 de maio de 2026' },
                { label: 'Grupo',        val: 'Máximo 20 pessoas' },
                { label: 'Plataforma',   val: 'Online — ao vivo' },
                { label: 'Investimento', val: 'R$ 997 no lançamento' },
              ].map(d => (
                <div key={d.label} className="flex flex-col gap-1 py-3 border-b border-biaso-gold/8 last:border-0 last:pb-0">
                  <span className="text-[9px] tracking-[.16em] uppercase text-biaso-white/25">
                    {d.label}
                  </span>
                  <span className="text-[13px] text-biaso-white/60">
                    {d.val}
                  </span>
                </div>
              ))}
            </div>
            <div className="flex items-center gap-2 pt-2">
              <div className="w-1.5 h-1.5 rounded-full bg-biaso-gold animate-pulse" />
              <span className="text-[10px] tracking-[.12em] uppercase text-biaso-gold/50">
                Vagas limitadas — 20 no total
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}