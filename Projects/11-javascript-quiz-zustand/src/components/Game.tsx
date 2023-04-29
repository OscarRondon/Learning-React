import { useQuestionStore } from '../store/questions'
import { type Question as QuestionType } from '../types/commonTypes.d'

const Question = ({ info }: { info: QuestionType }) => {
  return null
}

export function Game () {
  const questions = useQuestionStore(state => state.questions)
  const currentQuestion = useQuestionStore(state => state.currentQuestion)

  const questionInfo = questions[currentQuestion]

  return (
    <>
      <Question info={questionInfo} />
    </>
  )
}
