// src/pages/QuizPage.jsx — sem o <div>QUIZ OK</div>
import { useQuiz, STEPS } from '../hooks/useQuiz'
import { QuizLayout }   from '../components/quiz/QuizLayout'
import { QuizIntro }    from '../components/quiz/QuizIntro'
import { QuizQuestion } from '../components/quiz/QuizQuestion'
import { QuizCapture }  from '../components/quiz/QuizCapture'
import { QuizResult }   from '../components/quiz/QuizResult'
import { questions }    from '../data/questions'

export function QuizPage() {
  const q = useQuiz()

  return (
    <QuizLayout progress={q.progress}>
      {q.step === STEPS.INTRO    && <QuizIntro onStart={q.goNext} />}
      {q.step === STEPS.QUESTION && (
        <QuizQuestion
          question={questions[q.currentQ]}
          answer={q.answers[q.currentQ]}
          onSelect={(oi) => q.selectAnswer(q.currentQ, oi)}
          onNext={q.goNext}
          onBack={q.goBack}
        />
      )}
      {q.step === STEPS.CAPTURE  && (
        <QuizCapture
            lead={q.lead}
            onChange={q.setLead}
            answers={q.answers}
            onSubmit={q.goNext}
            onBack={q.goBack}
        />
      )}
      {q.step === STEPS.RESULT   && (
        <QuizResult
          result={q.result}
          nome={q.lead.nome}
          onReset={q.reset}
        />
      )}
    </QuizLayout>
  )
}