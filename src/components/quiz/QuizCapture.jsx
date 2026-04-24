import { useState } from 'react'
import { Button }     from '../ui/Button'
import { FieldInput } from '../ui/FieldInput'
import { submitLead } from '../../services/submitLead'
import { computeResult } from '../../data/results'

export function QuizCapture({ lead, onChange, answers, onSubmit, onBack }) {
  const [loading, setLoading] = useState(false)

  // ✅ agora baseado em validação real
  const valid = lead.nomeValid && lead.whatsappValid && lead.emailValid

  async function handleSubmit() {
    if (!valid) return

    setLoading(true)

    const result = computeResult(answers)

    try {
      await submitLead({ lead, answers, result })
    } catch (e) {
      console.error('[submitLead]', e)
    } finally {
      setLoading(false)
      onSubmit()
    }
  }

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <p className="text-[11px] uppercase tracking-widest text-biaso-gold">
          Quase lá
        </p>
        <h2 className="text-[22px] font-medium">
          Seu resultado está pronto
        </h2>
        <p className="text-[15px] text-biaso-muted leading-relaxed">
          Insira seus dados para receber a análise do seu tipo
          de corpo diretamente no WhatsApp.
        </p>
      </div>

      <div className="flex flex-col gap-7">
        <FieldInput
          label="Nome"
          value={lead.nome}
          onChange={(v, valid) =>
            onChange({ ...lead, nome: v, nomeValid: valid })
          }
          placeholder="Como prefere ser chamada"
        />

        <FieldInput
          label="WhatsApp"
          type="tel"
          value={lead.whatsapp}
          onChange={(v, valid) =>
            onChange({ ...lead, whatsapp: v, whatsappValid: valid })
          }
          placeholder="(00) 00000-0000"
        />

        <FieldInput
          label="E-mail"
          type="email"
          value={lead.email}
          onChange={(v, valid) =>
            onChange({ ...lead, email: v, emailValid: valid })
          }
          placeholder="seu@email.com.br"
        />
      </div>

      <div className="space-y-4">
        <Button onClick={handleSubmit} disabled={!valid || loading}>
          {loading ? 'Aguarde...' : 'Ver meu resultado'}
        </Button>

        <p className="text-[13px] text-biaso-muted text-center">
          Seus dados são confidenciais e não serão compartilhados.
        </p>

        <button
          onClick={onBack}
          disabled={loading}
          className="text-[13px] text-biaso-muted hover:text-biaso-black transition-colors"
        >
          Voltar
        </button>
      </div>
    </div>
  )
}