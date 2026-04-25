// src/components/home/StripSection.jsx
export function StripSection() {
  const pilares = ['Imagem', 'Posicionamento', 'Presença']

  return (
    <div className="w-full bg-biaso-gold overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 py-4 flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
        {pilares.map((p, i) => (
          <div key={p} className="flex items-center gap-8">
            <span className="text-[10px] font-medium tracking-[.2em] uppercase text-biaso-dark">
              {p}
            </span>
            {i < pilares.length - 1 && (
              <div className="w-1 h-1 rounded-full bg-biaso-dark/25" />
            )}
          </div>
        ))}
        <div className="w-px h-4 bg-biaso-dark/20 hidden sm:block" />
        <span className="text-[10px] tracking-[.16em] uppercase text-biaso-dark/60 hidden sm:block">
          A Tríade da Autoridade Feminina
        </span>
      </div>
    </div>
  )
}