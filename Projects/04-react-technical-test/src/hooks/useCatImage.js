import { useEffect, useState } from 'react'
import { getFactImage } from '../services/facts'

export function useCatImage ({ fact }) {
  const [imageUrl, setImageUrl] = useState()

  useEffect(() => {
    if (!fact) return
    getFactImage(fact).then(newFactImage => setImageUrl(newFactImage))
  }, [fact])

  return { imageUrl }
}
