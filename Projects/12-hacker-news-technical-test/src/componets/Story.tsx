
import { Link } from 'wouter'
import useSWR from 'swr'
import { getItemInfo } from '../services/hacker-news'
import { storyLink, story, storyFooter, storyHeader, storyTitle } from '../styles/Story.css'
import { StoryLoader } from './storyLoader'
import { getRelativeTime } from '../utils/getRelativeTime'

interface Props {
  id: number
  index: number
}

export default function Story ({ id, index }: Props) {

  const fetcher = () => getItemInfo(id)
  const { data, isLoading } = useSWR(`story/${id}`, fetcher)

  if (isLoading) return <StoryLoader />

  const { by, kids, score, time, title, url } = data

  const relativeTime = getRelativeTime(time)

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
        <Link className={storyLink} href={`/article/${id}`}>{relativeTime}</Link>
        <Link className={storyLink} href={`/article/${id}`}>{kids?.length ?? 0} comments</Link>
      </footer>
    </article>
  )
}
