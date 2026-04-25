// src/components/home/HeroSection.jsx
import { useNavigate } from 'react-router-dom'

export function HeroSection() {
  const navigate = useNavigate()

  return (
    <section className="w-full bg-biaso-dark">
      <div className="max-w-6xl mx-auto">

        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">

          {/* Coluna esquerda — texto */}
          <div className="flex flex-col justify-center px-6 lg:px-16 py-20 lg:py-0 gap-8">

            {/* Eyebrow */}
            <div className="flex items-center gap-3">
              <div className="w-6 h-px bg-biaso-gold" />
              <span className="text-[10px] tracking-[.2em] uppercase text-biaso-gold">
                Consultoria de Imagem
              </span>
            </div>

            {/* Headline */}
            <div className="flex flex-col gap-1">
              <h1 className="font-serif text-[52px] sm:text-[60px] font-light leading-[1.05] text-biaso-white">
                Imagem é
              </h1>
              <h1 className="font-serif text-[52px] sm:text-[60px] font-light leading-[1.05] text-biaso-gold italic">
                estratégia.
              </h1>
              <h1 className="font-serif text-[52px] sm:text-[60px] font-light leading-[1.05] text-biaso-white/60">
                Sempre foi.
              </h1>
            </div>

            {/* Subtítulo */}
            <p className="text-[15px] text-biaso-white/50 leading-relaxed max-w-sm">
              Descubra o seu tipo de corpo e aprenda a se vestir com autoridade
              — independente de tamanho, fase de vida ou guarda-roupa atual.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                onClick={() => navigate('/quiz')}
                className="bg-biaso-gold text-biaso-dark text-[11px] font-medium tracking-[.1em] uppercase px-7 py-4 hover:bg-biaso-gold2 transition-colors duration-150"
              >
                Descobrir meu tipo de corpo — grátis
              </button>
              <a
                href="#mentoria"
                className="border border-biaso-gold/25 text-biaso-white/40 text-[11px] tracking-[.1em] uppercase px-7 py-4 text-center hover:border-biaso-gold/50 hover:text-biaso-white/70 transition-all duration-150"
              >
                Conhecer a mentoria
              </a>
            </div>

            {/* Social proof mínimo */}
            <div className="flex items-center gap-6 pt-2 border-t border-biaso-gold/10">
              <div className="flex flex-col gap-0.5">
                <span className="font-serif text-[22px] font-light text-biaso-gold">14</span>
                <span className="text-[9px] tracking-[.12em] uppercase text-biaso-white/25">anos de experiência</span>
              </div>
              <div className="w-px h-8 bg-biaso-gold/10" />
              <div className="flex flex-col gap-0.5">
                <span className="font-serif text-[22px] font-light text-biaso-gold">+1k</span>
                <span className="text-[9px] tracking-[.12em] uppercase text-biaso-white/25">mulheres transformadas</span>
              </div>
              <div className="w-px h-8 bg-biaso-gold/10" />
              <div className="flex flex-col gap-0.5">
                <span className="font-serif text-[22px] font-light text-biaso-gold">MG</span>
                <span className="text-[9px] tracking-[.12em] uppercase text-biaso-white/25">para o Brasil</span>
              </div>
            </div>

          </div>

          {/* Coluna direita — foto */}
          <div className="relative hidden lg:flex bg-biaso-dark2 items-end justify-center overflow-hidden min-h-[600px]">

            <img
              src="/images/Bianka1.png"
              alt="Bianka Biaso — Consultora de Imagem"
              className="absolute inset-0 w-full h-full object-cover object-top"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
              <div className="w-16 h-16 border border-biaso-gold/15 flex items-center justify-center">
                <div className="w-8 h-8 border border-biaso-gold/20" />
              </div>
              <span className="text-[9px] tracking-[.16em] uppercase text-biaso-gold/20">
                Foto editorial da Bianka
              </span>
            </div>

            {/* Gradiente inferior — onde a foto vai fundir com o fundo */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-biaso-dark to-transparent" />

            {/* Linha decorativa vertical */}
            <div className="absolute left-0 top-16 bottom-16 w-px bg-biaso-gold/8" />

          </div>

        </div>

      </div>
    </section>
  )
}