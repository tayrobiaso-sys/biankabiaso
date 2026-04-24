// QuizResult.jsx — fontes maiores, acento em gold
import { Button } from '../ui/Button'

export function QuizResult({ result, nome, onReset }) {
  if (!result) return null

  return (
    <div className="space-y-8">

      <div className="space-y-3">
        <p className="text-[11px] uppercase tracking-widest text-biaso-gold">
          Seu resultado
        </p>
        <h2 className="text-[26px] font-medium leading-snug">
          {nome ? `${nome}, seu tipo é ${result.type}` : result.type}
        </h2>
        <p className="text-[15px] text-biaso-muted">
          {result.sub}
        </p>
      </div>

      <div className="w-7 h-px bg-biaso-gold opacity-50" />

      <p className="text-[15px] text-biaso-muted leading-relaxed">
        {result.text}
      </p>

      <div className="border border-biaso-border p-5 space-y-3">
        <p className="text-[11px] uppercase tracking-widest text-biaso-muted">
          Princípios para o seu tipo
        </p>
        <div className="flex flex-col divide-y divide-biaso-border">
          {result.princ.map((p, i) => (
            <p
              key={i}
              className="text-[14px] text-biaso-muted leading-relaxed py-3.5 first:pt-0 last:pb-0"
            >
              {p}
            </p>
          ))}
        </div>
      </div>

      <div className="bg-biaso-dark p-6 space-y-3">
        <p className="text-[11px] uppercase tracking-widest text-biaso-gold">
          Aprofunde seu método
        </p>
        <p className="text-[14px] text-biaso-white leading-relaxed opacity-80">
          O guia <em>Imagem é Estratégia</em> traz a técnica completa
          para o seu tipo de corpo — da escolha das peças ao checklist
          de alfaiataria. Acesso vitalício por R$97.
        </p>
      </div>

      <div className="space-y-4">
        <Button
          variant="gold"
          onClick={() =>
            window.open('https://pay.hotmart.com/K103647871T?off=gbi0aw0h', '_blank')
          }
        >
          Quero o guia completo
        </Button>
        <button
          onClick={onReset}
          className="w-full text-[13px] text-biaso-muted hover:text-biaso-black transition-colors text-center"
        >
          Refazer o quiz
        </button>
      </div>

    </div>
  )
}