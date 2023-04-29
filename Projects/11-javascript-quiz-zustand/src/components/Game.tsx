import { useQuestionStore } from '../store/questions'
import { type Question as QuestionType } from '../types/commonTypes.d'
import { Card, List, ListItem, ListItemButton, ListItemText, Typography } from '@mui/material'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { gradientDark } from 'react-syntax-highlighter/dist/esm/styles/hljs'

const Question = ({ info }: { info: QuestionType }) => {

  const selectAnswer = useQuestionStore(state => state.selectAnswer)
  // const userSelectedAnswer = useQuestionStore(state => state.userSelectedAnswer)

  const createHandleClick = (answerIndex: number) => () => {
    selectAnswer(info.id, answerIndex)
  }

  const getBackgroundColor = (info: QuestionType, index: number) => {
    const { userSelectedAnswer, correctAnswer } = info
    // usuario no ha seleccionado nada todavía
    if (userSelectedAnswer == null) return 'transparent'
    // si ya selecciono pero la solución es incorrecta
    if (index !== correctAnswer && index !== userSelectedAnswer) return 'transparent'
    // si esta es la solución correcta
    if (index === correctAnswer) return 'green'
    // si esta es la selección del usuario pero no es correcta
    if (index === userSelectedAnswer) return 'red'
    // si no es ninguna de las anteriores
    return 'transparent'
  }

  return (
    <Card variant='outlined' sx={{ bgcolor: '#222', p: 2, textAlign: 'left', marginTop: 4, maxWidth: '100%' }}>

      <Typography variant='h5'>
        {info.question}
      </Typography>

      <SyntaxHighlighter language='javascript' style={gradientDark}>
        {info.code}
      </SyntaxHighlighter>

      <List sx={{ bgcolor: '#333' }} disablePadding>
        {info.answers.map((answer, index) => (
          <ListItem key={index} disablePadding divider>
            <ListItemButton
              disabled={info.userSelectedAnswer != null}
              onClick={createHandleClick(index)}
              sx={{
                backgroundColor: getBackgroundColor(info, index)
              }}
            >
              <ListItemText primary={answer} sx={{ textAlign: 'center' }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

    </Card>
  )
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
