// import useSWR from 'swr'
import { useEffect, useRef } from 'react'
import useSWRInfinite from 'swr/infinite'
import { getTopStories } from '../services/hacker-news'
import Story from '../componets/Story'

export default function TopStories () {

  // const fetcher = () => getTopStories(1, 10)
  // const { data, error, isLoading } = useSWR('stories', fetcher)


  const fetcherKey = (index: number) => `stories/${index + 1}` // key for result caching
  const fetcher = (key: string) => {
    const [, page] = key.split('/')
    return getTopStories(Number(page), 10)

  }
  const { data, error, isLoading, setSize } = useSWRInfinite(fetcherKey, fetcher)

  const stories = data?.flat()

  useEffect(() => {
    document.title = 'Hacker News - Technical test USA'
  }, [])

  const observableEl = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    // use intersection observer to detect end of the page scroll
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !isLoading) {
        setSize((prevSize) => prevSize + 1)
      }
    }, {
      rootMargin: '100px'
    })

    if (observableEl.current == null) {
      return
    }

    observer.observe(observableEl.current)

    return () => {
      observer.disconnect()
    }
  }, [isLoading, setSize])


  return (
    <>
      <ul style={{ listStyle: 'none' }}>
        {error !== undefined && <li>Something went wrong...</li>}
        {stories?.map((id: number, index: number) => (
          <li key={id}>
            <Story
              id={id}
              index={index}
            />
          </li>
        ))}
      </ul>

      <span ref={observableEl} />

      {/* <button type='button' onClick={() => { setSize(size + 1) }}>Load more</button> */}
    </>
  )
}
