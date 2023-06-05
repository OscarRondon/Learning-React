
import { Link } from 'wouter'
import useSWR from 'swr'
import { getItemInfo } from '../services/hacker-news'
import { storyLink, story, storyFooter, storyHeader, storyTitle } from '../styles/Story.css'

interface Props {
  id: number
  index: number
}

export default function Story ({ id, index }: Props) {

  const fetcher = () => getItemInfo(id)
  const { data, error, isLoading } = useSWR(`story/${id}`, fetcher)

  if (isLoading) return <p>Loading...</p>

  const { by, kids, score, time, title, url } = data

  let domain = ''
  try {
    domain = new URL(url).hostname.replace('www.', '')
  } catch {
    domain = url
  }

  return (
    <article className={story}>
      <header className={storyHeader}>
        <small>{index + 1} . </small>
        <a
          className={storyTitle}
          href={url}
          target='_blank'
          rel='noopener noreferrer'
        >
          {title}
        </a>
        <a
          className={storyLink}
          href={url}
          target='_blank'
          rel='noopener noreferrer'
        >
          ({domain})
        </a>
      </header>
      <footer className={storyFooter}>
        <small>{score} points</small>
        <Link className={storyLink} href={`/article/${id}`}>by: {by}</Link>
        <Link className={storyLink} href={`/article/${id}`}>Posted {time} Ago</Link>
        <Link className={storyLink} href={`/article/${id}`}>{kids?.length ?? 0} comments</Link>
      </footer>
    </article>
  )
}
