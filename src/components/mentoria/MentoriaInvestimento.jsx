// src/components/mentoria/MentoriaInvestimento.jsx
export function MentoriaInvestimento() {
  const depoimentos = [
    {
      texto: 'A Bianka tem um olhar cirúrgico. Em minutos ela identificou o que eu levei anos tentando entender sobre o meu próprio corpo.',
      nome:  'Poliani F.',
      cidade: 'Coromandel, MG',
    },
    {
      texto: 'Nunca pensei que uma consultoria de imagem pudesse mudar minha postura profissional. Hoje entro em reunião diferente.',
      nome:  'Fabricia S.',
      cidade: 'Uberlândia, MG',
    },
    {
      texto: 'O método dela não é sobre moda. É sobre se reconhecer. Eu me vi de outra forma depois da consultoria.',
      nome:  'Viviane L.',
      cidade: 'Coromandel, MG',
    },
    {
      texto: 'Parei de comprar por impulso. Hoje sei exatamente o que funciona para mim — e por quê.',
      nome:  'Maria E.',
      cidade: 'Patos de Minas, MG',
    },
  ]

  const incluso = [
    '4 encontros ao vivo — 2h cada',
    'Análise do seu tipo de corpo',
    'Guia Imagem é Estratégia (acesso vitalício)',
    'Comunidade privada do grupo',
    'Gravações de todos os encontros',
    'Suporte por 30 dias após o encerramento',
  ]

  return (
    <section className="w-full bg-biaso-white border-t border-biaso-border">
      <div className="max-w-4xl mx-auto px-6 py-20 flex flex-col gap-16">

        {/* Depoimentos */}
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <div className="w-6 h-px bg-biaso-gold" />
              <span className="text-[10px] tracking-[.2em] uppercase text-biaso-gold">
                Quem já passou pelo método
              </span>
            </div>
            <h2 className="font-serif text-[34px] font-light leading-[1.2] text-biaso-black max-w-lg">
              Resultados de quem já trabalhou com a Bianka
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {depoimentos.map((d, i) => (
              <div
                key={i}
                className="flex flex-col gap-5 bg-biaso-cream p-7 border border-biaso-border"
              >
                <span className="font-serif text-[40px] leading-none text-biaso-gold/25 select-none -mb-2">
                  "
                </span>
                <p className="font-serif text-[17px] font-light italic leading-[1.65] text-biaso-black flex-1">
                  {d.texto}
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-biaso-border">
                  <div className="w-7 h-7 bg-biaso-border flex-shrink-0" />
                  <div className="flex flex-col gap-0.5">
                    <span className="text-[12px] font-medium text-biaso-black">
                      {d.nome}
                    </span>
                    <span className="text-[10px] tracking-[.08em] uppercase text-biaso-muted">
                      {d.cidade}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Investimento */}
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <div className="w-6 h-px bg-biaso-gold" />
              <span className="text-[10px] tracking-[.2em] uppercase text-biaso-gold">
                Investimento
              </span>
            </div>
            <h2 className="font-serif text-[34px] font-light leading-[1.2] text-biaso-black max-w-lg">
              Tudo isso por um único investimento
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-biaso-border">

            {/* Preço */}
            <div className="flex flex-col gap-6 bg-biaso-dark px-8 py-10">
              <div className="flex flex-col gap-2">
                <span className="text-[10px] tracking-[.18em] uppercase text-biaso-gold/60">
                  Preço de lançamento
                </span>
                <div className="flex items-end gap-3">
                  <span className="font-serif text-[52px] font-light leading-none text-biaso-gold">
                    R$ 997
                  </span>
                </div>
                <span className="text-[12px] text-biaso-white/25 line-through">
                  De R$ 1.997
                </span>
              </div>
              <div className="flex flex-col gap-2 pt-4 border-t border-biaso-gold/10">
                <span className="text-[10px] tracking-[.14em] uppercase text-biaso-white/30">
                  Condições
                </span>
                <p className="text-[13px] text-biaso-white/45 leading-relaxed">
                  À vista ou em até 12x no cartão.
                  Preço válido somente para o lançamento — sobe após o encerramento das vagas.
                </p>
              </div>
              <div className="flex items-center gap-2 mt-auto">
                <div className="w-1.5 h-1.5 rounded-full bg-biaso-gold animate-pulse" />
                <span className="text-[10px] tracking-[.14em] uppercase text-biaso-gold/60">
                  Vagas limitadas — 20 no total
                </span>
              </div>
            </div>

            {/* Incluso */}
            <div className="flex flex-col gap-5 bg-biaso-cream px-8 py-10">
              <span className="text-[10px] tracking-[.18em] uppercase text-biaso-muted">
                Tudo incluso
              </span>
              <div className="flex flex-col gap-0">
                {incluso.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 py-3.5 border-b border-biaso-border last:border-0"
                  >
                    <span className="font-serif text-[16px] text-biaso-gold/60 flex-shrink-0 mt-0.5">
                      —
                    </span>
                    <span className="text-[13px] text-biaso-black/70 leading-relaxed">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Garantia */}
          <div className="flex items-start gap-5 border border-biaso-border p-6">
            <div className="w-10 h-10 border border-biaso-gold/30 flex items-center justify-center flex-shrink-0">
              <div className="w-4 h-4 border border-biaso-gold/40" />
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[12px] font-medium text-biaso-black">
                Compromisso de resultado
              </span>
              <p className="text-[12px] text-biaso-muted leading-relaxed">
                Se após o primeiro encontro você sentir que a mentoria não é para você,
                devolvemos 100% do investimento. Sem burocracia.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}