import { Button } from '../ui/Button'

export function QuizIntro({ onStart }) {
  return (
    <div className="flex flex-col gap-5 pb-10">

      <p className="text-[11px] tracking-[.12em] uppercase text-biaso-muted">
        Consultoria de imagem
      </p>

      <h1 className="text-[28px] font-light leading-[1.25] tracking-[-0.01em] text-biaso-black"
          style={{ fontFamily: '"DM Serif Display", serif' }}>
        Descubra seu<br />
        tipo de corpo<br />
        <em className="italic text-biaso-muted">e vista-se com<br />estratégia</em>
      </h1>

      <div className="w-6 h-px bg-biaso-border" />

      <p className="text-[13px] text-biaso-muted leading-[1.8]">
        Em menos de três minutos, você entende a arquitetura
        do seu corpo e recebe orientações precisas para
        vestir-se com autoridade.
      </p>

      <div className="pt-4 flex flex-col gap-3">
        <Button onClick={onStart}>Iniciar</Button>
        <p className="text-[11px] text-biaso-border-hover text-center tracking-[.02em]">
          Não existe resultado melhor ou pior — existe o que é seu.
        </p>
      </div>

    </div>
  )
}