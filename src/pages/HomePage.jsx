// src/pages/HomePage.jsx
import { HomeNav }            from '../components/home/HomeNav'
import { HomeFooter }         from '../components/home/HomeFooter'
import { HeroSection }        from '../components/home/HeroSection'
import { StripSection }       from '../components/home/StripSection'
import { ManifestoSection }   from '../components/home/ManifestoSection'
import { SobreSection }       from '../components/home/SobreSection'
import { MetodoSection }      from '../components/home/MetodoSection'
import { ParaQuemSection }    from '../components/home/ParaQuemSection'
import { DepoimentosSection } from '../components/home/DepoimentosSection'
import { CtasSection }        from '../components/home/CtasSection'

export function HomePage() {
  return (
    <div className="min-h-screen bg-biaso-dark flex flex-col">
      <HomeNav />

      <main className="flex-1">
        <HeroSection />
        <StripSection />
        <ManifestoSection />
        <SobreSection />
        <MetodoSection />
        <ParaQuemSection />
        <DepoimentosSection />
        <CtasSection />
      </main>

      <HomeFooter />
    </div>
  )
}