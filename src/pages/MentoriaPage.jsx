// src/pages/MentoriaPage.jsx
import { HomeNav }              from '../components/home/HomeNav'
import { HomeFooter }           from '../components/home/HomeFooter'
import { MentoriaHero }         from '../components/mentoria/MentoriaHero'
import { MentoriaOQue }         from '../components/mentoria/MentoriaOQue'
import { MentoriaParaQuem }     from '../components/mentoria/MentoriaParaQuem'
import { MentoriaInvestimento } from '../components/mentoria/MentoriaInvestimento'
import { MentoriaFormulario }   from '../components/mentoria/MentoriaFormulario'

export function MentoriaPage() {
  return (
    <div className="min-h-screen bg-biaso-dark flex flex-col">
      <HomeNav />

      <main className="flex-1">
        <MentoriaHero />
        <MentoriaOQue />
        <MentoriaParaQuem />
        <MentoriaInvestimento />
        <MentoriaFormulario />
      </main>

      <HomeFooter />
    </div>
  )
}