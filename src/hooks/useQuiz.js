import { useState, useCallback } from 'react'
import { questions } from '../data/questions'
import { computeResult } from '../data/results'

export const STEPS = {
  INTRO:    'intro',
  QUESTION: 'question',
  CAPTURE:  'capture',
  RESULT:   'result',
}

export function useQuiz() {
  const [step, setStep]       = useState(STEPS.INTRO)
  const [currentQ, setQ]      = useState(0)
  const [answers, setAnswers]  = useState(Array(questions.length).fill(null))
  const [lead, setLead]        = useState({ nome: '', whatsapp: '', email: '' })
  const [result, setResult]    = useState(null)

  const selectAnswer = useCallback((qi, oi) => {
    setAnswers(prev => {
      const next = [...prev]
      next[qi] = oi
      return next
    })
  }, [])

  const goNext = useCallback(() => {
    if (step === STEPS.INTRO) {
      setStep(STEPS.QUESTION); setQ(0)
    } else if (step === STEPS.QUESTION) {
      if (currentQ < questions.length - 1) setQ(q => q + 1)
      else setStep(STEPS.CAPTURE)
    } else if (step === STEPS.CAPTURE) {
      setResult(computeResult(answers))
      setStep(STEPS.RESULT)
    }
  }, [step, currentQ, answers])

  const goBack = useCallback(() => {
    if (step === STEPS.QUESTION && currentQ > 0) setQ(q => q - 1)
    else if (step === STEPS.QUESTION) setStep(STEPS.INTRO)
    else if (step === STEPS.CAPTURE) {
      setStep(STEPS.QUESTION); setQ(questions.length - 1)
    }
  }, [step, currentQ])

  const progress =
    step === STEPS.INTRO     ? 0 :
    step === STEPS.QUESTION  ? ((currentQ + 1) / questions.length) * 100 :
    step === STEPS.CAPTURE   ? 92 : 100

  return {
    step, STEPS, currentQ, answers, lead, result, progress,
    selectAnswer, goNext, goBack, setLead,
    totalQ: questions.length,
    reset: () => { setStep(STEPS.INTRO); setQ(0)
                   setAnswers(Array(questions.length).fill(null))
                   setLead({ nome: '', whatsapp: '', email: '' })
                   setResult(null) }
  }
}