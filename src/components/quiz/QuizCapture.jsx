import { useState } from 'react'
import { Button }     from '../ui/Button'
import { FieldInput } from '../ui/FieldInput'
import { submitLead } from '../../services/submitLead'
import { computeResult } from '../../data/results'

export function QuizCapture({ lead, onChange, answers, onSubmit, onBack }) {
  const [loading, setLoading] = useState(false)

  const valid = lead.nome.trim() && lead.whatsapp.trim() && lead.email.trim()

  async function handleSubmit() {
    if (!valid) return
    setLoading(true)

    const result = computeResult(answers) // calcula aqui, garantido

    try {
      await submitLead({ lead, answers, result })
    } catch (e) {
      console.error('[submitLead]', e)
    } finally {
      setLoading(false)
      onSubmit() // avança independente de erro
    }
  }

  return (
    <div className="space-y-8">
      <div className="space-y-3">
        <p className="text-[11px] uppercase tracking-widest text-biaso-muted">
          Quase lá
        </p>
        <h2 className="text-[20px] font-medium">
          Seu resultado está pronto
        </h2>
        <p className="text-sm text-biaso-muted leading-relaxed">
          Insira seus dados para receber a análise do seu tipo
          de corpo diretamente no WhatsApp.
        </p>
      </div>

      <div className="flex flex-col gap-6">
        <FieldInput
          label="Nome"
          value={lead.nome}
          onChange={v => onChange({ ...lead, nome: v })}
          placeholder="Como prefere ser chamada"
        />
        <FieldInput
          label="WhatsApp"
          type="tel"
          value={lead.whatsapp}
          onChange={v => onChange({ ...lead, whatsapp: v })}
          placeholder="(00) 00000-0000"
        />
        <FieldInput
          label="E-mail"
          type="email"
          value={lead.email}
          onChange={v => onChange({ ...lead, email: v })}
          placeholder="seu@email.com.br"
        />
      </div>

      <div className="space-y-3">
        <Button onClick={handleSubmit} disabled={!valid || loading}>
          {loading ? 'Aguarde...' : 'Ver meu resultado'}
        </Button>
        <p className="text-[11px] text-biaso-muted text-center">
          Seus dados são confidenciais e não serão compartilhados.
        </p>
        <button
          onClick={onBack}
          disabled={loading}
          className="text-[12px] text-biaso-muted hover:text-biaso-black transition-colors"
        >
          Voltar
        </button>
      </div>
    </div>
  )
}