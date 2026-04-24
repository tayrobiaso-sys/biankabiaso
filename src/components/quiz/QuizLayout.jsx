import { ProgressBar } from '../ui/ProgressBar'

export function QuizLayout({ progress, children }) {
  return (
    <div className="min-h-screen bg-biaso-dark flex flex-col">

      {/* Header — warm dark com logo em cream */}
      <header className="flex items-center justify-between px-6 py-5 border-b border-biaso-gold/10">
        <span className="text-[11px] font-medium tracking-[.2em] uppercase text-biaso-white/80">
          Bianka Biaso
        </span>
        <span className="text-[10px] tracking-[.15em] uppercase text-biaso-gold/60">
          Consultoria de Imagem
        </span>
      </header>

      {/* Progress bar — gold fill */}
      <ProgressBar value={progress} />

      {/* Conteúdo — card cream centralizado */}
      <div className="flex-1 flex items-center justify-center px-5 py-12">
        <div className="w-full max-w-quiz bg-biaso-white px-8 py-10">

          {/* Animação de entrada a cada step */}
          <div
            key={progress}
            className="animate-in fade-in slide-in-from-bottom-1 duration-200"
          >
            {children}
          </div>

        </div>
      </div>

      {/* Footer mínimo */}
      <footer className="py-5 text-center border-t border-biaso-gold/10">
        <span className="text-[10px] tracking-[.12em] uppercase text-biaso-white/20">
          biankabiaso.com.br
        </span>
      </footer>

    </div>
  )
}