import { useEffect } from 'react'
import useSWR from 'swr'
import { getItemInfo } from '../services/hacker-news'
import { ListOfComments } from '../componets/ListOfComments'


export default function Detail (props: { params: { id: string } }) {
  const { params: { id } } = props
  const fetcher = () => getItemInfo(Number(id))
  const { data, isLoading } = useSWR('itemInfo', fetcher)

  const { kids, title }: { kids: number[], title: string } = data ?? {}
  const commentIds = kids?.slice(0, 10) ?? []

  useEffect(() => {
    document.title = `Hacker News - ${title}`
  }, [title])

  return (
    <div>
      {
        isLoading
          ? <p>Loading...</p>
          : <ListOfComments ids={commentIds} />
      }
    </div>
  )
}
