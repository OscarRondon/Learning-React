import { useCatImage } from './hooks/useCatImage'
import { useCatFact } from './hooks/useCatFact'

export function App () {
  const { fact, refreshRandomFact } = useCatFact()
  const { imageUrl } = useCatImage({ fact })

  async function handleClick () {
    refreshRandomFact()
  }

  return (
    <>
      <main>
        <h1>Kittens App!!</h1>
        <button onClick={handleClick}>Get new fact</button>
        {fact && <p>{fact}</p>}
        {imageUrl && <img src={imageUrl} alt='cat' />}
      </main>
    </>
  )
}
