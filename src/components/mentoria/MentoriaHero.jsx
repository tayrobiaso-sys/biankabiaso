// src/components/mentoria/MentoriaHero.jsx
export function MentoriaHero() {
  return (
    <section className="w-full bg-biaso-dark border-b border-biaso-gold/10">
      <div className="max-w-4xl mx-auto px-6 py-24 flex flex-col gap-10">

        {/* Badge de escassez */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 border border-biaso-gold/30 px-4 py-2">
            <div className="w-1.5 h-1.5 rounded-full bg-biaso-gold animate-pulse" />
            <span className="text-[10px] tracking-[.18em] uppercase text-biaso-gold">
              20 vagas · Lançamento 01/05
            </span>
          </div>
        </div>

        {/* Headline */}
        <div className="flex flex-col gap-2">
          <h1 className="font-serif text-[48px] sm:text-[64px] font-light leading-[1.05] text-biaso-white">
            A mentoria que vai mudar
          </h1>
          <h1 className="font-serif text-[48px] sm:text-[64px] font-light leading-[1.05] text-biaso-gold italic">
            a forma como o mundo
          </h1>
          <h1 className="font-serif text-[48px] sm:text-[64px] font-light leading-[1.05] text-biaso-white">
            te vê.
          </h1>
        </div>

        {/* Divisor */}
        <div className="w-12 h-px bg-biaso-gold/40" />

        {/* Subheadline */}
        <p className="text-[16px] text-biaso-white/50 leading-relaxed max-w-xl">
          Um grupo pequeno e selecionado para aplicar ao vivo a Tríade da Autoridade
          Feminina — com acompanhamento direto da Bianka Biaso. Do tipo de corpo ao
          posicionamento, da imagem à presença.
        </p>

        {/* Detalhes rápidos */}
        <div className="flex flex-wrap gap-x-10 gap-y-4">
          {[
            { label: 'Formato',      val: 'Ao vivo — online' },
            { label: 'Grupo',        val: 'Máximo 20 pessoas' },
            { label: 'Início',       val: '01 de maio de 2026' },
            { label: 'Investimento', val: 'R$ 997 — lançamento' },
          ].map(d => (
            <div key={d.label} className="flex flex-col gap-1">
              <span className="text-[9px] tracking-[.18em] uppercase text-biaso-gold/50">
                {d.label}
              </span>
              <span className="text-[14px] text-biaso-white/70">
                {d.val}
              </span>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 pt-2">
          <a
            href="#lista-espera"
            className="self-start bg-biaso-gold text-biaso-dark text-[11px] font-medium tracking-[.1em] uppercase px-8 py-4 hover:bg-biaso-gold2 transition-colors duration-150"
          >
            Quero garantir minha vaga
          </a>
          <a
            href="#o-que-e"
            className="self-start border border-biaso-gold/20 text-biaso-white/40 text-[11px] tracking-[.1em] uppercase px-8 py-4 hover:border-biaso-gold/40 hover:text-biaso-white/60 transition-all duration-150"
          >
            Entender o método
          </a>
        </div>

        {/* Nota de urgência */}
        <p className="text-[12px] text-biaso-white/20 leading-relaxed max-w-sm">
          As vagas da lista de espera têm acesso exclusivo 24h antes da abertura
          ao público geral. Inscrições encerram quando as vagas acabarem.
        </p>

      </div>
    </section>
  )
}