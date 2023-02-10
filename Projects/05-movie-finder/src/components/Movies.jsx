function ListOfMovies ({ movies }) {
  return (
    movies.map(movie => (
      <li key={movie.id}>
        <h3>{movie.title}</h3>
        <p>{movie.year}</p>
        <img src={movie.poster} alt={movie.title} />
      </li>
    ))
  )
}

function NoMoviesResults () {
  return (
    <h3>Your search has none results...</h3>
  )
}

export function Movies ({ movies }) {
  const hasMovies = movies?.length
  return (
    hasMovies ? <ListOfMovies movies={movies} /> : <NoMoviesResults />

  )
}
