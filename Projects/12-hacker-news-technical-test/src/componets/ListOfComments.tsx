import useSWR from 'swr'
import { CommentLoader } from '../componets/CommentLoader'
import { getItemInfo } from '../services/hacker-news'
import { getRelativeTime } from '../utils/getRelativeTime'

interface Props {
  ids: number[]
}

const Comment = (props: {
  id: number
}) => {
  const { id } = props
  const { data, isLoading } = useSWR(`/comment/${id}`, () => getItemInfo(id))

  if (isLoading) {
    return <CommentLoader />
  }

  const { by, text, time, kids } = data
  const relativeTime = getRelativeTime(time)

  return (
    <>
      <details open>
        <summary>
          <small>
            <span>{by}</span>
            <span> · </span>
            <span>{relativeTime}</span>
          </small>
        </summary>

        <p>{text}</p>
      </details>

      {kids?.length > 0 && <ListOfComments ids={kids.slice(0, 10)} />}
    </>
  )
}

export function ListOfComments ({ ids }: Props) {
  return (
    <ul style={{ listStyle: 'none' }}>
      {
        ids.map(id => (
          <li key={id}>
            <Comment id={id} />
          </li>)
        )
      }
    </ul>
  )
}
