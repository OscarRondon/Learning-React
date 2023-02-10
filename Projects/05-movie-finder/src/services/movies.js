const API_KEY = '85da2731'

export const searchMovie = async (search) => {
  if (search === '') return
  const URL_API = `https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`
  try {
    // setResponseMovies(moviesResult)
    const response = await fetch(URL_API)
    const json = await response.json()
    const movies = json.Search

    return movies?.map(movie => ({
      id: movie.imdbID,
      title: movie.Title,
      year: movie.Year,
      poster: movie.Poster
    }))
  } catch (ex) {
    throw new Error(`Error sevices > movies.js > SearchMovie: fetch: ${ex}`)
  }
  /*
  fetch(URL_API)
    .then(response => response.json())
    .then(json => { movies = json })
    */
}
