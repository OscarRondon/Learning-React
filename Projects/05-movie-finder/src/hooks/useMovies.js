import moviesResult from '../mocks/json-with-results.json'

export function useMovies () {
  const movies = moviesResult.Search

  const mappedMovies = movies?.map(movie => ({
    id: movie.imdbID,
    title: movie.Title,
    year: movie.year,
    poster: movie.Poster
  }))

  return { mappedMovies }
}
