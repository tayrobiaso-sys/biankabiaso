// src/components/home/HomeNav.jsx
import { useNavigate } from 'react-router-dom'

export function HomeNav() {
  const navigate = useNavigate()

  return (
    <header className="w-full border-b border-biaso-gold/10 bg-biaso-dark">
      <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">

        {/* Logo */}
        <button
          onClick={() => navigate('/')}
          className="text-[12px] font-medium tracking-[.22em] uppercase text-biaso-white/90 hover:text-biaso-white transition-colors duration-150"
        >
          Bianka Biaso
        </button>

        {/* Links — desktop */}
        <nav className="hidden sm:flex items-center gap-8">
          <a
            href="/#metodo"
            className="text-[10px] tracking-[.14em] uppercase text-biaso-white/40 hover:text-biaso-gold transition-colors duration-150"
          >
            Método
          </a>
          <a
            href="/#sobre"
            className="text-[10px] tracking-[.14em] uppercase text-biaso-white/40 hover:text-biaso-gold transition-colors duration-150"
          >
            Sobre
          </a>
          <button
            onClick={() => navigate('/mentoria')}
            className="text-[10px] tracking-[.14em] uppercase text-biaso-white/40 hover:text-biaso-gold transition-colors duration-150"
          >
            Mentoria
          </button>
          <button
            onClick={() => navigate('/quiz')}
            className="text-[10px] tracking-[.14em] uppercase text-biaso-dark bg-biaso-gold px-5 py-2.5 font-medium hover:bg-biaso-gold2 transition-colors duration-150"
          >
            Fazer o quiz
          </button>
        </nav>

        {/* Mobile — só o CTA */}
        <button
          onClick={() => navigate('/quiz')}
          className="sm:hidden text-[10px] tracking-[.14em] uppercase text-biaso-dark bg-biaso-gold px-4 py-2 font-medium"
        >
          Quiz
        </button>

      </div>
    </header>
  )
}