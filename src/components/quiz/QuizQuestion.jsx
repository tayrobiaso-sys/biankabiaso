// QuizQuestion.jsx — fontes maiores, selected em gold
import { Button } from '../ui/Button'

export function QuizQuestion({ question, answer, onSelect, onNext, onBack }) {
  return (
    <div className="space-y-8">

      <div className="space-y-4">
        <p className="text-[11px] uppercase tracking-widest text-biaso-gold">
          {question.label}
        </p>
        <h2 className="text-[20px] font-medium leading-snug">
          {question.text}
        </h2>
      </div>

      <div className="flex flex-col gap-2.5">
        {question.opts.map((opt, i) => (
          <button
            key={i}
            onClick={() => onSelect(i)}
            className={`
              w-full text-left px-4 py-4
              text-[15px] leading-relaxed border
              transition-all duration-150
              ${answer === i
                ? 'border-biaso-gold text-biaso-black bg-biaso-cream'
                : 'border-biaso-border text-biaso-muted hover:border-biaso-border-hover hover:text-biaso-black'
              }
            `}
          >
            {opt.txt}
          </button>
        ))}
      </div>

      <div className="flex items-center justify-between pt-1">
        <button
          onClick={onBack}
          className="text-[13px] text-biaso-muted hover:text-biaso-black transition-colors"
        >
          Voltar
        </button>
        <Button
          onClick={onNext}
          disabled={answer === null}
          fullWidth={false}
          className="px-8"
        >
          Continuar
        </Button>
      </div>

    </div>
  )
}