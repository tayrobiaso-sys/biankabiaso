// QuizIntro.jsx — label em gold, fontes maiores
import { Button } from '../ui/Button'

export function QuizIntro({ onStart }) {
  return (
    <div className="space-y-8">
      <div className="space-y-5">
        <p className="text-[11px] uppercase tracking-widest text-biaso-gold">
          Bianka Biaso
        </p>
        <h1 className="text-[26px] font-medium leading-snug">
          Descubra seu tipo de corpo<br />
          e vista-se com estratégia
        </h1>
        <p className="text-[15px] text-biaso-muted leading-relaxed">
          Em menos de três minutos, você entende a arquitetura
          do seu corpo e recebe orientações precisas para
          vestir-se com autoridade.
        </p>
      </div>

      <Button onClick={onStart}>Iniciar</Button>

      <p className="text-[13px] text-biaso-muted text-center leading-relaxed">
        Não existe resultado melhor ou pior — existe o que é seu.
      </p>
    </div>
  )
}