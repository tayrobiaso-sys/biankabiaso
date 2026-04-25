// src/components/mentoria/MentoriaParaQuem.jsx
export function MentoriaParaQuem() {
  const paraQuem = [
    {
      destaque: 'Quer resultado visível em pouco tempo',
      resto: '— não daqui a seis meses. Quer sair da mentoria sabendo exatamente o que funciona para o seu corpo.',
    },
    {
      destaque: 'Está em um momento de transição',
      resto: '— nova fase profissional, pessoal ou física — e quer que a imagem acompanhe quem ela está se tornando.',
    },
    {
      destaque: 'Cansa de comprar e se arrepender',
      resto: '— guarda-roupa cheio, mas nada funciona de verdade. Quer clareza antes de investir mais.',
    },
    {
      destaque: 'Quer posicionamento através da imagem',
      resto: '— entende que o que veste é uma declaração — e quer que essa declaração trabalhe a seu favor.',
    },
    {
      destaque: 'Busca acompanhamento real, não conteúdo gravado',
      resto: '— quer a Bianka olhando para o seu caso, dando feedback direto e respondendo suas dúvidas ao vivo.',
    },
  ]

  const naoParaQuem = [
    'Quem busca tendências de moda sem estratégia',
    'Quem não está disposta a aplicar o que aprender',
    'Quem espera resultados sem comprometimento com o processo',
  ]

  const incluso = [
    {
      icone: '—',
      titulo: '4 encontros ao vivo com a Bianka',
      desc: 'Sessões de 2h cada, com conteúdo, exercícios práticos e espaço para perguntas em tempo real.',
    },
    {
      icone: '—',
      titulo: 'Análise do seu tipo de corpo',
      desc: 'Diagnóstico personalizado aplicado ao vivo — não um resultado genérico de quiz, mas uma leitura técnica real.',
    },
    {
      icone: '—',
      titulo: 'Guia Imagem é Estratégia',
      desc: 'Acesso vitalício ao guia completo — o primeiro pilar da Tríade em formato de estudo.',
    },
    {
      icone: '—',
      titulo: 'Comunidade privada do grupo',
      desc: 'Acesso ao grupo das mentoradas para troca, dúvidas e suporte entre os encontros.',
    },
    {
      icone: '—',
      titulo: 'Suporte por 30 dias após o encerramento',
      desc: 'A Bianka permanece disponível por 30 dias para dúvidas e acompanhamento da aplicação.',
    },
    {
      icone: '—',
      titulo: 'Gravações dos encontros',
      desc: 'Acesso às gravações de todos os encontros para revisar no seu tempo.',
    },
  ]

  return (
    <section className="w-full bg-biaso-dark border-t border-biaso-gold/10">
      <div className="max-w-4xl mx-auto px-6 py-20 flex flex-col gap-16">

        {/* Para quem é */}
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <div className="w-6 h-px bg-biaso-gold" />
              <span className="text-[10px] tracking-[.2em] uppercase text-biaso-gold">
                Para quem é
              </span>
            </div>
            <h2 className="font-serif text-[34px] font-light italic leading-[1.2] text-biaso-white max-w-lg">
              Para a mulher que quer resultado — não conteúdo
            </h2>
          </div>

          <div className="flex flex-col">
            {paraQuem.map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-5 py-5 border-b border-biaso-gold/10 first:border-t first:border-biaso-gold/10 group"
              >
                <span className="font-serif text-[20px] text-biaso-gold/50 leading-none mt-0.5 flex-shrink-0 group-hover:text-biaso-gold transition-colors duration-150">
                  —
                </span>
                <p className="text-[14px] text-biaso-white/50 leading-relaxed">
                  <strong className="text-biaso-white/85 font-normal">
                    {item.destaque}
                  </strong>
                  {' '}{item.resto}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Não é para quem */}
        <div className="flex flex-col gap-5 border border-biaso-gold/10 p-8">
          <span className="text-[10px] tracking-[.2em] uppercase text-biaso-white/30">
            Esta mentoria não é para quem
          </span>
          <div className="flex flex-col gap-3">
            {naoParaQuem.map((item, i) => (
              <div key={i} className="flex items-start gap-4">
                <span className="text-biaso-white/20 text-[14px] mt-0.5 flex-shrink-0">×</span>
                <p className="text-[13px] text-biaso-white/25 leading-relaxed">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* O que está incluso */}
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <div className="w-6 h-px bg-biaso-gold" />
              <span className="text-[10px] tracking-[.2em] uppercase text-biaso-gold">
                O que está incluso
              </span>
            </div>
            <h2 className="font-serif text-[34px] font-light leading-[1.2] text-biaso-white max-w-lg">
              Tudo o que você precisa para transformar sua imagem
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-biaso-gold/10">
            {incluso.map((item, i) => (
              <div
                key={i}
                className="flex flex-col gap-3 bg-biaso-dark p-7"
              >
                <div className="flex items-center gap-3">
                  <span className="font-serif text-[18px] text-biaso-gold/50">
                    {item.icone}
                  </span>
                  <h3 className="text-[13px] font-medium text-biaso-white/80 leading-snug">
                    {item.titulo}
                  </h3>
                </div>
                <p className="text-[12px] text-biaso-white/35 leading-relaxed pl-7">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}