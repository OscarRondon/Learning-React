import { Container, Stack, Typography } from '@mui/material'
import './App.css'
import { JavaScriptLogo } from './components/SVGIcons'
import { Start } from './components/Start'
import { useQuestionStore } from './store/questions'

function App () {

  const questions = useQuestionStore(state => state.questions)

  return (
    <main>
      <Container maxWidth='sm'>
        <Stack direction='row' gap={2}>
          <JavaScriptLogo />
          <Typography variant='h2' component='h1'>
            JavaScript Quiz!!
          </Typography>
        </Stack>
        <Start />
      </Container>
    </main>
  )
}

export default App
