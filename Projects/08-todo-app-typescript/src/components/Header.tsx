import { type TodoTittle } from '../types/types'
import { CreateTodo } from './CreateTodo'

interface Props {
  onAddTodo: ({ tittle }: TodoTittle) => void
}

export const Header: React.FunctionComponent<Props> = ({ onAddTodo }) => {
  return (
        <header className="header">
            <h1>Todo</h1>
            <CreateTodo saveTodo={onAddTodo} />
        </header>
  )
}
