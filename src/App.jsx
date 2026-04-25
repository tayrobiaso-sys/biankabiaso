import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { QuizPage }     from './pages/QuizPage'
import { HomePage }     from './pages/HomePage'
import { MentoriaPage } from './pages/MentoriaPage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"         element={<HomePage />} />
        <Route path="/quiz"     element={<QuizPage />} />
        <Route path="/mentoria" element={<MentoriaPage />} />
      </Routes>
    </BrowserRouter>
  )
}