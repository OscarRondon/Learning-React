import { type Todo as TodoType, type TodoId, type listOdTodos } from '../types/types'
import { Todo } from './Todo'

interface Porps {
  todos: listOdTodos
  onRemoveTodo: ({ id }: TodoId) => void
  onToggleCompleteTodo: ({ id, completed }: Pick<TodoType, 'id' | 'completed'>) => void
}

export const Todos: React.FunctionComponent<Porps> = ({ todos, onRemoveTodo, onToggleCompleteTodo }) => {
  return (
        <ul className="todo-list">
            {
                todos.map(todo => (
                    <li key={todo.id} className={`${todo.completed ? 'completed' : ''}`}>
                        <Todo
                            key={todo.id}
                            id = {todo.id}
                            tittle = {todo.tittle}
                            completed= {todo.completed}
                            onRemoveTodo = {onRemoveTodo}
                            onToggleCompleteTodo = {onToggleCompleteTodo}
                        />
                    </li>
                ))
            }
        </ul>
  )
}
