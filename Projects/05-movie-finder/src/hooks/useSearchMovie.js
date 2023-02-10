import { useEffect, useRef, useState } from 'react'

export function useSearchMovie ({ movieName }) {
  const [inputMovie, setImputMovie] = useState('')
  const [inputMovieError, setImputMovieError] = useState(null)
  const isFisrtInput = useRef(true)

  useEffect(() => {
    if (isFisrtInput.current) {
      isFisrtInput.current = inputMovie === ''
      return
    }

    if (inputMovie.length < 3) {
      setImputMovieError('The search musth have at least 3 chars')
      return
    }

    setImputMovieError(null)
  }, [inputMovie])

  const updateMovieName = (movieName) => {
    setImputMovie(movieName)
    if (isFisrtInput) isFisrtInput.current = movieName === ''
  }

  return { inputMovie, inputMovieError, updateMovieName }
}
