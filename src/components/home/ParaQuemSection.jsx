// src/components/home/ParaQuemSection.jsx
import { useNavigate } from 'react-router-dom'

export function ParaQuemSection() {
  const navigate = useNavigate()

  const itens = [
    { destaque: 'Sentida antes de falar',         resto: '— a mulher que entra numa sala e já impõe presença sem dizer uma palavra.' },
    { destaque: 'Cansada de não ter o que usar',  resto: '— guarda-roupa cheio, mas nada funciona para a reunião importante.' },
    { destaque: 'Pronta para parar de comprar por impulso', resto: '— e começar a investir em peças que trabalham para você.' },
    { destaque: 'Em uma nova fase da vida',        resto: '— e quer que a imagem acompanhe quem ela se tornou.' },
    { destaque: 'Prestes a um momento importante', resto: '— casamento, formatura, mudança de carreira — e quer estar impecável.' },
    { destaque: 'Consciente de que posicionamento começa no espelho', resto: '— e está pronta para trabalhar isso com método.' },
  ]

  return (
    <section className="w-full bg-biaso-dark border-t border-biaso-gold/10">
      <div className="max-w-6xl mx-auto px-6 py-20">

        {/* Header */}
        <div className="flex flex-col gap-3 mb-12">
          <div className="flex items-center gap-3">
            <div className="w-6 h-px bg-biaso-gold" />
            <span className="text-[10px] tracking-[.2em] uppercase text-biaso-gold">
              Para quem é
            </span>
          </div>
          <h2 className="font-serif text-[36px] font-light italic leading-[1.2] text-biaso-white max-w-lg">
            Para a mulher que sabe que imagem é poder
          </h2>
        </div>

        {/* Lista */}
        <div className="flex flex-col">
          {itens.map((item, i) => (
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

        {/* CTA inline */}
        <div className="mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-5">
          <button
            onClick={() => navigate('/quiz')}
            className="bg-biaso-gold text-biaso-dark text-[11px] font-medium tracking-[.1em] uppercase px-7 py-4 hover:bg-biaso-gold2 transition-colors duration-150"
          >
            Descobrir meu tipo de corpo — grátis
          </button>
          <span className="text-[11px] text-biaso-white/20 leading-relaxed">
            3 minutos. Resultado personalizado. Sem custo.
          </span>
        </div>

      </div>
    </section>
  )
}