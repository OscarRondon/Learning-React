const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
const CAT_IMAGE_API = 'https://cataas.com'

export const getRandomFact = () => {
  return fetch(CAT_ENDPOINT_RANDOM_FACT)
    .then(resp => {
      if (!resp.ok) throw new Error(resp)
      return resp.json()
    })
    .then(data => {
      const { fact } = data
      return fact
    })
    .catch(ex => { console.log({ ex }) })
}

export const getFactImage = (fact) => {
  const CAT_ENDPOINT_IMAGE_URL = `${CAT_IMAGE_API}/cat/says/${fact.split(' ')[0]}?size=50&color=red&json=true`
  return fetch(CAT_ENDPOINT_IMAGE_URL)
    .then(resp => resp.json())
    .then(response => {
      let { url } = response
      url = url !== '' ? `${CAT_IMAGE_API}${url}` : ''
      return url
    })
    .catch(ex => console.log({ ex }))
}
