import { Button } from '@mui/material'
import { useQuestionStore } from '../store/questions'

const LIMIT_QUESTIONS = 5

export function Start () {

  const fetchQuestions = useQuestionStore(state => state.fetchQuestions)

  const handleClick = () => {
    void fetchQuestions(LIMIT_QUESTIONS)

  }

  return (
    <Button onClick={() => { handleClick() }} variant='contained'>Start</Button>
  )
}
