import { useEffect } from 'react'

export default function SearchPage ({ routeParams }) {
  useEffect(() => {
    document.title = `Has buscado ${routeParams.query}`
  }, [])

  return (
    <h1>You has search {routeParams.query} !!!</h1>
  )
}
