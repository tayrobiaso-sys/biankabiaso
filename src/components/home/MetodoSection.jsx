// src/components/home/MetodoSection.jsx
export function MetodoSection() {
  const pilares = [
    {
      num: '01',
      name: 'Imagem é Estratégia',
      desc: 'O corpo, o look, a técnica. Como a roupa constrói ou destrói sua autoridade visual antes de você falar.',
      tag: 'Disponível agora',
      tagAtivo: true,
    },
    {
      num: '02',
      name: 'Posicionamento é Estratégia',
      desc: 'Os arquétipos femininos e como moldam o respeito, o poder e a percepção do mundo sobre você.',
      tag: 'Em breve',
      tagAtivo: false,
    },
    {
      num: '03',
      name: 'Presença é Estratégia',
      desc: 'Como você ocupa um espaço e usa o corpo para comandar ambientes antes mesmo de falar.',
      tag: 'Em breve',
      tagAtivo: false,
    },
  ]

  return (
    <section id="metodo" className="w-full bg-biaso-white border-t border-biaso-border">
      <div className="max-w-6xl mx-auto px-6 py-20">

        {/* Header da seção */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <div className="w-6 h-px bg-biaso-gold" />
              <span className="text-[10px] tracking-[.2em] uppercase text-biaso-gold">
                O Método Biaso
              </span>
            </div>
            <h2 className="font-serif text-[36px] font-light leading-[1.2] text-biaso-black max-w-sm">
              A Tríade da Autoridade Feminina
            </h2>
          </div>
          <p className="text-[13px] text-biaso-muted leading-relaxed max-w-xs">
            Três camadas. Um método completo de transformação da mulher através da imagem.
          </p>
        </div>

        {/* Colunas */}
        <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-biaso-border">
          {pilares.map(p => (
            <div key={p.num} className="flex flex-col gap-5 px-0 sm:px-8 py-8 sm:py-0 first:pl-0 last:pr-0">

              {/* Número decorativo */}
              <span className="font-serif text-[56px] font-light leading-none text-biaso-border select-none">
                {p.num}
              </span>

              {/* Nome */}
              <h3 className="text-[13px] font-medium tracking-wide text-biaso-black leading-snug">
                {p.name}
              </h3>

              {/* Descrição */}
              <p className="text-[13px] text-biaso-muted leading-relaxed flex-1">
                {p.desc}
              </p>

              {/* Tag de status */}
              <span className={`
                self-start text-[9px] tracking-[.14em] uppercase pb-0.5
                border-b
                ${p.tagAtivo
                  ? 'text-biaso-gold border-biaso-gold'
                  : 'text-biaso-muted/40 border-biaso-border'
                }
              `}>
                {p.tag}
              </span>

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}