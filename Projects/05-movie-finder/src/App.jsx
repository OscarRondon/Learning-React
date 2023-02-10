import './App.css'
import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'

function App () {
  const { mappedMovies } = useMovies()
  return (
    <div className='page'>
      <header className='header'>
        <h1>Movie Searcher!</h1>
        <form className='form'>
          <input type='text' placeholder='Avengers | Spider-Man | Ironman' />
          <button type='submit'>Search</button>
        </form>
      </header>
      <main className='content'>
        <h2>Results...</h2>
        <ul>
          <Movies movies={mappedMovies} />
        </ul>
      </main>
    </div>
  )
}

export default App
