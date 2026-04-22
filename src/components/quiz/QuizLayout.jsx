// QuizLayout.jsx — versão corrigida e completa
export function QuizLayout({ progress, children }) {
  return (
    <div className="min-h-screen bg-biaso-white flex flex-col">

      {/* Header fixo com wordmark e progress */}
      <header className="px-8 pt-12 pb-0 flex-shrink-0">
        <p className="text-[11px] tracking-[.22em] uppercase text-biaso-black text-center mb-5">
          Bianka Biaso
        </p>
        <div className="w-full h-px bg-biaso-border relative">
          <div
            className="absolute top-0 left-0 h-px bg-biaso-black transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </header>

      {/* Conteúdo central */}
      <main className="flex-1 flex flex-col justify-center px-8">
        <div key={progress} className="w-full max-w-quiz mx-auto">
          {children}
        </div>
      </main>

    </div>
  )
}

function ProgressBar({ value }) {
  return (
    <div className="w-full h-px bg-biaso-border">
      <div
        className="h-px bg-biaso-black transition-all duration-500"
        style={{ width: `${value}%` }}
      />
    </div>
  )
}