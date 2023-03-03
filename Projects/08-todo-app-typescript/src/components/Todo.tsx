import { type TodoId, type Todo as TodoType } from '../types/types'

interface Props extends TodoType {
  onRemoveTodo: ({ id }: TodoId) => void
  onToggleCompleteTodo: ({ id, completed }: Pick<TodoType, 'id' | 'completed'>) => void
}

export const Todo: React.FunctionComponent<Props> = ({ id, tittle, completed, onRemoveTodo, onToggleCompleteTodo }) => {
  return (
        <div className="viwe">
            <input type="checkbox" title="Completed" className="toggle" checked={completed} onChange={(): void => { onToggleCompleteTodo({ id, completed }) }} />
            <label>{tittle}
            </label>
            <button id="btn_delete" title="Delete" className="destroy" onClick={() => { onRemoveTodo({ id }) }} />
        </div>
  )
}
