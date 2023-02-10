import { useCallback, useRef, useState } from 'react'
import './App.css'
import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'
import { useSearchMovie } from './hooks/useSearchMovie'
import debounce from 'just-debounce-it'

function App () {
  /* */
  const [sort, setSort] = useState(false)
  const { inputMovie, inputMovieError, updateMovieName } = useSearchMovie('')
  const { mappedMovies, getMovies } = useMovies({ inputMovie, sort })

  const countRender = useRef(0)
  countRender.current++
  // console.log(countRender)

  const debouncedGetMovies = useCallback(
    debounce(inputMovie => {
      getMovies({ inputMovie })
    }, 500)
    , [])

  const handleSubmit = (event) => {
    event.preventDefault()
    // const data = new window.FormData(event.target)
    // console.log(JSON.stringify(Object.fromEntries(data)))
    getMovies({ inputMovie })
  }

  const inputMovieChangeHandler = (event) => {
    const newValue = event.target.value
    updateMovieName(newValue)
    // getMovies({ inputMovie: newValue })
    debouncedGetMovies(newValue)
  }

  const handleSort = () => {
    setSort(!sort)
  }

  return (
    <div className='page'>
      <header className='header'>
        <h1>Movie Searcher!</h1>
        <form id='formSearch' name='formSearch' className='form' onSubmit={handleSubmit}>
          <input
            id='inputMovie'
            name='inputMovie'
            type='text'
            placeholder='Avengers | Spider-Man | Ironman'
            value={inputMovie}
            onChange={inputMovieChangeHandler}
          />
          <input type='checkbox' onChange={handleSort} checked={sort} />
          <button type='submit'>Search</button>
        </form>
      </header>
      <main className='content'>
        <h2>Results...</h2>
        <p style={{ color: 'red' }}>{inputMovieError}</p>
        <ul className='movies'>
          <Movies movies={mappedMovies} />
        </ul>
      </main>
    </div>
  )
}

export default App
