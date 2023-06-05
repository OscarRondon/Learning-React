import useSWR from 'swr'
import { getTopStories } from '../services/hacker-news'
import Story from '../componets/Story'

export default function TopStories () {

  const fetcher = () => getTopStories(1, 3)
  const { data, error, isLoading } = useSWR('stories', fetcher)

  return (
    <>
      <ul style={{ listStyle: 'none' }}>
        {isLoading && <li>Loading...</li>}
        {error !== undefined && <li>Something went wrong...</li>}
        {data?.map((id: number, index: number) => (
          <li key={id}>
            <Story
              id={id}
              index={index}
            />
          </li>
        ))}
      </ul>
    </>
  )
}
