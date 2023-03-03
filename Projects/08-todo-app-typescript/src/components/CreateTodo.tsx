import { useState } from 'react'
import { type TodoTittle } from '../types/types'

interface Props {
  saveTodo: ({ tittle }: TodoTittle) => void
}

export const CreateTodo: React.FunctionComponent<Props> = ({ saveTodo }) => {
  const [inputValue, setInputValue] = useState('')

  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>): void => {
    evt.preventDefault()
    saveTodo({ tittle: inputValue })
    setInputValue('')
  }

  return (
    <form onSubmit={handleSubmit}>
        <input
            type="text"
            placeholder="New task"
            className="new-todo"
            value={inputValue}
            onChange={(e) => { setInputValue(e.target.value) }}
            autoFocus
        />
    </form>
  )
}
