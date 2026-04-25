// src/components/home/ManifestoSection.jsx
export function ManifestoSection() {
  return (
    <section className="w-full bg-biaso-white border-b border-biaso-border">
      <div className="max-w-3xl mx-auto px-6 py-24 flex flex-col items-center text-center gap-6">

        {/* Aspas decorativas */}
        <span className="font-serif text-[80px] leading-none text-biaso-gold/30 select-none -mb-4">
          "
        </span>

        {/* Citação */}
        <blockquote className="font-serif text-[24px] sm:text-[28px] font-light italic leading-[1.55] text-biaso-black max-w-2xl">
          Roupa não é vaidade. É a primeira linguagem que o mundo lê sobre
          você — antes de qualquer palavra.
        </blockquote>

        {/* Linha divisória */}
        <div className="w-8 h-px bg-biaso-gold mt-2" />

        {/* Autora */}
        <span className="text-[10px] tracking-[.2em] uppercase text-biaso-muted">
          Bianka Biaso
        </span>

      </div>
    </section>
  )
}