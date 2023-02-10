import { useCallback, useMemo, useRef, useState } from 'react'
import { searchMovie } from '../services/movies'

export function useMovies ({ inputMovie, sort }) {
  const [mappedMovies, setmappedMovies] = useState([])
  const prevSearch = useRef(inputMovie)

  const getMovies = useCallback(
    async ({ inputMovie }) => {
      if (inputMovie === prevSearch.current) return
      prevSearch.current = inputMovie
      const newMovies = await searchMovie(inputMovie)
      setmappedMovies(newMovies)
    }, [])

  // const sortedMovies = sort ? [...mappedMovies].sort((a, b) => a.title.localeCompare(b.title)) : mappedMovies
  const sortedMovies = useMemo(() => {
    return sort ? [...mappedMovies].sort((a, b) => a.title.localeCompare(b.title)) : mappedMovies
  }, [sort, mappedMovies])

  return { mappedMovies: sortedMovies, getMovies }
}
