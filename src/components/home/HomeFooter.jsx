// src/components/home/HomeFooter.jsx
export function HomeFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="w-full bg-biaso-dark border-t border-biaso-gold/10">
      <div className="max-w-6xl mx-auto px-6 py-10">

        {/* Linha principal */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8 mb-8 pb-8 border-b border-biaso-gold/10">

          {/* Logo + tagline */}
          <div className="flex flex-col gap-2">
            <span className="text-[12px] font-medium tracking-[.22em] uppercase text-biaso-white/80">
              Bianka Biaso
            </span>
            <span className="text-[11px] text-biaso-white/30 leading-relaxed max-w-xs">
              Imagem é estratégia. Posicionamento começa no espelho.
            </span>
          </div>

          {/* Links */}
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-10">
            <div className="flex flex-col gap-3">
              <span className="text-[9px] tracking-[.16em] uppercase text-biaso-gold/50">
                Navegação
              </span>
              <a href="/quiz"    className="text-[11px] text-biaso-white/35 hover:text-biaso-gold transition-colors">Quiz gratuito</a>
              <a href="#metodo"  className="text-[11px] text-biaso-white/35 hover:text-biaso-gold transition-colors">O Método</a>
              <a href="#mentoria"className="text-[11px] text-biaso-white/35 hover:text-biaso-gold transition-colors">Mentoria</a>
            </div>

            <div className="flex flex-col gap-3">
              <span className="text-[9px] tracking-[.16em] uppercase text-biaso-gold/50">
                Contato
              </span>
              <a
                href="https://instagram.com/biankabiaso"
                target="_blank"
                rel="noreferrer"
                className="text-[11px] text-biaso-white/35 hover:text-biaso-gold transition-colors"
              >
                Instagram
              </a>
              <a
                href="https://wa.me/5534999892837"
                target="_blank"
                rel="noreferrer"
                className="text-[11px] text-biaso-white/35 hover:text-biaso-gold transition-colors"
              >
                WhatsApp
              </a>
              <a
                href="mailto:contato@biankabiaso.com.br"
                className="text-[11px] text-biaso-white/35 hover:text-biaso-gold transition-colors"
              >
                E-mail
              </a>
            </div>
          </div>
        </div>

        {/* Linha de rodapé */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <span className="text-[10px] text-biaso-white/20 tracking-wide">
            © {year} Bianka Biaso. Todos os direitos reservados.
          </span>
          <span className="text-[10px] text-biaso-white/15 tracking-wide">
            biankabiaso.com.br
          </span>
        </div>

      </div>
    </footer>
  )
}