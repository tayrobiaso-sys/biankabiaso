// src/components/home/DepoimentosSection.jsx
export function DepoimentosSection() {
  const depoimentos = [
    {
      texto: 'Pela primeira vez na vida entendi por que algumas roupas não funcionam para o meu corpo. Simples assim.',
      nome:  'Elisangela C.',
      tipo:  'Tipo Ampulheta',
    },
    {
      texto: 'O método da Bianka não é sobre moda. É sobre saber quem você é e fazer o mundo ver isso.',
      nome:  'Viviane L.',
      tipo:  'Tipo Triangular',
    },
    {
      texto: 'Entrei na consultoria com o guarda-roupa errado e saí sabendo exatamente o que precisa mudar — e por quê.',
      nome:  'Joice R.',
      tipo:  'Tipo Oval',
    },
    {
      texto: 'Comprava roupas o tempo todo e nunca me sentia bem. Hoje compro menos e me sinto muito mais.',
      nome:  'Andreia F.',
      tipo:  'Tipo Retilínea',
    },
  ]

  return (
    <section className="w-full bg-biaso-cream border-t border-biaso-border">
      <div className="max-w-6xl mx-auto px-6 py-20">

        {/* Header */}
        <div className="flex flex-col gap-3 mb-12">
          <div className="flex items-center gap-3">
            <div className="w-6 h-px bg-biaso-gold" />
            <span className="text-[10px] tracking-[.2em] uppercase text-biaso-gold">
              O que dizem as clientes
            </span>
          </div>
          <h2 className="font-serif text-[34px] font-light leading-[1.2] text-biaso-black">
            Resultados que falam por si
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {depoimentos.map((d, i) => (
            <div
              key={i}
              className="flex flex-col gap-5 bg-biaso-white p-7 border border-biaso-border"
            >
              {/* Aspas */}
              <span className="font-serif text-[36px] leading-none text-biaso-gold/30 select-none -mb-2">
                "
              </span>

              {/* Texto */}
              <p className="font-serif text-[17px] font-light italic leading-[1.65] text-biaso-black flex-1">
                {d.texto}
              </p>

              {/* Autora */}
              <div className="flex items-center gap-3 pt-4 border-t border-biaso-border">
                <div className="w-7 h-7 bg-biaso-cream border border-biaso-border flex-shrink-0" />
                <div className="flex flex-col gap-0.5">
                  <span className="text-[12px] font-medium text-biaso-black">
                    {d.nome}
                  </span>
                  <span className="text-[10px] tracking-[.1em] uppercase text-biaso-muted">
                    {d.tipo}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}