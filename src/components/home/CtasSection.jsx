// src/components/home/CtasSection.jsx
import { useNavigate } from 'react-router-dom'

export function CtasSection() {
  const navigate = useNavigate()

  return (
    <section id="mentoria" className="w-full border-t border-biaso-gold/10">
      <div className="grid grid-cols-1 lg:grid-cols-2">

        {/* Card 1 — Quiz gratuito */}
        <div className="flex flex-col gap-7 bg-biaso-dark px-8 sm:px-14 py-16 lg:py-20 border-b lg:border-b-0 lg:border-r border-biaso-gold/10">

          <div className="flex flex-col gap-3">
            <span className="text-[10px] tracking-[.2em] uppercase text-biaso-gold">
              Gratuito — 3 minutos
            </span>
            <h3 className="font-serif text-[32px] font-light leading-[1.2] text-biaso-white">
              Descubra seu tipo de corpo
            </h3>
          </div>

          <p className="text-[14px] text-biaso-white/45 leading-relaxed">
            Entenda a arquitetura do seu corpo e receba orientações precisas
            para se vestir com autoridade — direto no seu WhatsApp.
          </p>

          <div className="flex items-center gap-3">
            <div className="w-6 h-px bg-biaso-gold/30" />
            <span className="text-[11px] text-biaso-white/25">
              Acesso imediato. Resultado personalizado. Sem custo.
            </span>
          </div>

          <button
            onClick={() => navigate('/quiz')}
            className="self-start bg-biaso-gold text-biaso-dark text-[11px] font-medium tracking-[.1em] uppercase px-8 py-4 hover:bg-biaso-gold2 transition-colors duration-150"
          >
            Fazer o quiz agora
          </button>

        </div>

        {/* Card 2 — Mentoria */}
        <div className="flex flex-col gap-7 bg-biaso-dark2 px-8 sm:px-14 py-16 lg:py-20">

          <div className="flex flex-col gap-3">
            <span className="text-[10px] tracking-[.2em] uppercase text-biaso-gold">
              Mentoria em grupo — vagas limitadas
            </span>
            <h3 className="font-serif text-[32px] font-light leading-[1.2] text-biaso-white">
              Trabalhe o método ao vivo com a Bianka
            </h3>
          </div>

          <p className="text-[14px] text-biaso-white/45 leading-relaxed">
            Um grupo pequeno e selecionado para aplicar a Tríade da Autoridade
            Feminina na prática — com acompanhamento direto da Bianka.
          </p>

          <div className="flex flex-col gap-3 py-5 border-y border-biaso-gold/10">
            <div className="flex items-center justify-between">
              <span className="text-[11px] text-biaso-white/30 tracking-wide">Investimento</span>
              <div className="flex items-center gap-3">
                <span className="text-[11px] text-biaso-white/20 line-through">R$ 1.997</span>
                <span className="font-serif text-[22px] font-light text-biaso-gold">R$ 997</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[11px] text-biaso-white/30 tracking-wide">Vagas</span>
              <span className="text-[11px] text-biaso-gold/70">Limitadas — lista de espera aberta</span>
            </div>
          </div>

          <button
            onClick={() => navigate('/mentoria')}
            className="self-start border border-biaso-gold/30 text-biaso-white/60 text-[11px] font-medium tracking-[.1em] uppercase px-8 py-4 hover:border-biaso-gold hover:text-biaso-white transition-all duration-150"
          >
            Entrar na lista de espera
          </button>

        </div>

      </div>
    </section>
  )
}