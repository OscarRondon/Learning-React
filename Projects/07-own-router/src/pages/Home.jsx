import { Link } from '../Link'

export function HomePage () {
  return (
    <>
      <h1>Home</h1>
      <p>Example page for react router creation from scratch!!!</p>
      <Link to='/about'>Go to About</Link>
    </>
  )
}
