// src/components/home/SobreSection.jsx
export function SobreSection() {
  const numeros = [
    { val: '14',  label: 'anos de experiência em moda e imagem' },
    { val: '+1k', label: 'mulheres transformadas' },
    { val: '3',   label: 'pilares do método Biaso' },
    { val: '1',   label: 'propósito — imagem como poder' },
  ]

  return (
    <section id="sobre" className="w-full bg-biaso-dark border-t border-biaso-gold/10">
      <div className="max-w-6xl mx-auto">

        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[560px]">

          {/* Coluna esquerda — foto */}
          <div className="relative hidden lg:flex bg-biaso-dark2 items-center justify-center overflow-hidden min-h-[560px] border-r border-biaso-gold/8">

            <img
              src="/images/Bianka2.png"
              alt="Bianka Biaso"
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
            <div className="flex flex-col items-center gap-4">
              <div className="w-16 h-16 border border-biaso-gold/15 flex items-center justify-center">
                <div className="w-8 h-8 border border-biaso-gold/20" />
              </div>
              <span className="text-[9px] tracking-[.16em] uppercase text-biaso-gold/20">
                Foto da Bianka — ambiente
              </span>
            </div>

            {/* Gradiente direito */}
            <div className="absolute top-0 right-0 bottom-0 w-24 bg-gradient-to-r from-transparent to-biaso-dark" />

          </div>

          {/* Coluna direita — texto */}
          <div className="flex flex-col justify-center px-6 lg:px-16 py-20 lg:py-0 gap-8">

            {/* Eyebrow */}
            <div className="flex items-center gap-3">
              <div className="w-6 h-px bg-biaso-gold" />
              <span className="text-[10px] tracking-[.2em] uppercase text-biaso-gold">
                Quem é Bianka Biaso
              </span>
            </div>

            {/* Headline */}
            <h2 className="font-serif text-[34px] font-light leading-[1.2] text-biaso-white">
              14 anos construindo autoridade através da imagem
            </h2>

            {/* Texto */}
            <div className="flex flex-col gap-4">
              <p className="text-[14px] text-biaso-white/50 leading-relaxed">
                De Coromandel para o Brasil. Com 15 anos já trabalhava com moda.
                Com 16, fundou o primeiro ateliê de aluguel de vestidos compartilhados
                da sua cidade. Morou em Dublin, se formou em Direito, e escolheu o
                que sempre soube que era seu.
              </p>
              <p className="text-[14px] text-biaso-white/50 leading-relaxed">
                Hoje é referência em consultoria de imagem e moda sob medida para
                mulheres que entendem que posicionamento começa no espelho.
              </p>
            </div>

            {/* Números */}
            <div className="grid grid-cols-2 gap-4 pt-6 border-t border-biaso-gold/10">
              {numeros.map(n => (
                <div key={n.val} className="flex flex-col gap-1">
                  <span className="font-serif text-[32px] font-light text-biaso-gold leading-none">
                    {n.val}
                  </span>
                  <span className="text-[10px] tracking-[.08em] uppercase text-biaso-white/25 leading-relaxed">
                    {n.label}
                  </span>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}