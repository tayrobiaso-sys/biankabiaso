// src/components/mentoria/MentoriaOQue.jsx
export function MentoriaOQue() {
  const cards = [
    {
      num: '01',
      titulo: 'Diagnóstico do seu tipo de corpo',
      desc: 'Identificamos a arquitetura do seu corpo com precisão — silhueta, proporções, pontos de força e como trabalhar cada um deles com intenção.',
    },
    {
      num: '02',
      titulo: 'Estratégia de guarda-roupa',
      desc: 'Do que eliminar ao que comprar, passando pelo que já funciona e você não sabia. Um plano concreto, não uma lista genérica de tendências.',
    },
    {
      num: '03',
      titulo: 'Posicionamento através da imagem',
      desc: 'Como cada escolha visual comunica algo sobre quem você é — e como alinhar essa comunicação com o que você quer transmitir profissionalmente e pessoalmente.',
    },
    {
      num: '04',
      titulo: 'Presença e autoridade visual',
      desc: 'Como você entra numa sala, como se porta, como usa o corpo para liderar ambientes. A roupa certa no corpo certo — e a postura que completa tudo.',
    },
  ]

  return (
    <section id="o-que-e" className="w-full bg-biaso-white border-t border-biaso-border">
      <div className="max-w-4xl mx-auto px-6 py-20 flex flex-col gap-14">

        {/* Header */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="w-6 h-px bg-biaso-gold" />
            <span className="text-[10px] tracking-[.2em] uppercase text-biaso-gold">
              O que é a mentoria
            </span>
          </div>
          <h2 className="font-serif text-[36px] font-light leading-[1.2] text-biaso-black max-w-lg">
            14 anos de método aplicado em grupo — ao vivo, com a Bianka
          </h2>
          <p className="text-[15px] text-biaso-muted leading-relaxed max-w-2xl">
            Não é um curso gravado que você assiste no seu tempo. É um espaço ao vivo
            onde a Bianka trabalha com você e com o grupo — com olhar técnico, feedback
            preciso e o mesmo método que ela aplica nas suas clientes presenciais há 14 anos.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-biaso-border">
          {cards.map(c => (
            <div
              key={c.num}
              className="flex flex-col gap-5 bg-biaso-white p-8"
            >
              <span className="font-serif text-[48px] font-light leading-none text-biaso-border select-none">
                {c.num}
              </span>
              <h3 className="text-[14px] font-medium text-biaso-black leading-snug">
                {c.titulo}
              </h3>
              <p className="text-[13px] text-biaso-muted leading-relaxed">
                {c.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Formato */}
        <div className="flex flex-col sm:flex-row gap-px bg-biaso-border">
          {[
            { label: 'Encontros',   val: '4 sessões ao vivo' },
            { label: 'Duração',     val: '2h cada encontro' },
            { label: 'Plataforma',  val: 'Online — ao vivo' },
            { label: 'Grupo',       val: 'Máximo 20 pessoas' },
          ].map(f => (
            <div
              key={f.label}
              className="flex-1 flex flex-col gap-2 bg-biaso-cream px-6 py-5"
            >
              <span className="text-[9px] tracking-[.18em] uppercase text-biaso-muted">
                {f.label}
              </span>
              <span className="font-serif text-[20px] font-light text-biaso-black">
                {f.val}
              </span>
            </div>
          ))}
        </div>

        {/* CTA inline */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 pt-2">
          <a
            href="#lista-espera"
            className="bg-biaso-dark text-biaso-white text-[11px] font-medium tracking-[.1em] uppercase px-8 py-4 hover:bg-biaso-dark2 transition-colors duration-150"
          >
            Quero entrar na lista de espera
          </a>
          <span className="text-[11px] text-biaso-muted">
            Acesso exclusivo 24h antes da abertura ao público.
          </span>
        </div>

      </div>
    </section>
  )
}