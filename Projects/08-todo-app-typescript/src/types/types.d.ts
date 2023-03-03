import { type TODO_FILTERS } from '../commons/consts'

export interface Todo {
  id: string
  tittle: string
  completed: boolean
}

export type TodoId = Pick<Todo, 'id'>
export type TodoTittle = Pick<Todo, 'tittle'>
export type TodoCompleted = Pick<Todo, 'completed'>

export type listOdTodos = Todo[]

export type FilterValues = typeof TODO_FILTERS[keyof typeof TODO_FILTERS]
