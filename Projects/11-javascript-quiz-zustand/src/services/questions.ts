export async function getAllQuestions (limit: number) {
  const response = await fetch('http://localhost:5173/data.json')
  const json = await response.json()
  return json
}
