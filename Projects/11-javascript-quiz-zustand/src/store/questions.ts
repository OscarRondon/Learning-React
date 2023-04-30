import { create } from 'zustand'
import { type Question } from '../types/commonTypes.d'
import confetti from 'canvas-confetti'
import { persist, devtools } from 'zustand/middleware'

interface State {
  questions: Question[]
  currentQuestion: number
  fetchQuestions: (limit: number) => Promise<void>
  selectAnswer: (questionId: number, answerIndex: number) => void
  goNextQuestion: () => void
  goPreviousQuestion: () => void
  reset: () => void
}

// Middleware
// para usarlo se debe envolver el useQuestionStore en el logger asi como se hizo con el persist logger(persist(...
/*
const logger = (config) => (set, get, api) => {
  return config(
    (...args) => {
      set(...args)
      console.log('voy')
      console.log('cofig', { config })
      console.log('arg', ...args)
      console.log('api', api)
      console.log('get', get())
    },
    get,
    api
  )
}
*/

export const useQuestionStore = create<State>()(devtools(persist((set, get) => {

  return {
    questions: [],
    currentQuestion: 0,



    fetchQuestions: async (limit: number) => {

      const response = await fetch('http://localhost:5173/data.json')
      const json = await response.json()

      const questions = json.sort(() => Math.random() - 0.5).slice(0, limit)
      set({ questions }, false, 'Fetch_Questions')

    },

    selectAnswer: (questionId: number, answerIndex: number) => {

      const { questions } = get()
      // usar el structuredClone para clonar el objeto
      const newQuestions = structuredClone(questions)
      // encontramos el índice de la pregunta
      const questionIndex = newQuestions.findIndex(q => q.id === questionId)
      // obtenemos la información de la pregunta
      const questionInfo = newQuestions[questionIndex]
      // averiguamos si el usuario ha seleccionado la respuesta correcta
      const isCorrectUserAnswer = questionInfo.correctAnswer === answerIndex

      if (isCorrectUserAnswer) void confetti()

      // cambiar esta información en la copia de la pregunta
      newQuestions[questionIndex] = {
        ...questionInfo,
        isCorrectUserAnswer,
        userSelectedAnswer: answerIndex
      }
      // actualizamos el estado
      set({ questions: newQuestions })
    },

    goNextQuestion: () => {
      const { currentQuestion, questions } = get()
      const nextQuestion = currentQuestion + 1
      if (nextQuestion < questions.length) set({ currentQuestion: nextQuestion })
    },

    goPreviousQuestion: () => {
      const { currentQuestion } = get()
      const prevQuestion = currentQuestion - 1
      if (prevQuestion >= 0) set({ currentQuestion: prevQuestion })
    },

    reset: () => {
      set({ currentQuestion: 0, questions: [] })
    }

  }

}, { name: 'questions' })))
