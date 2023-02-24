import { Link } from '../Link'
export function AboutPage () {
  return (
    <>
      <h1>About</h1>
      <div>
        <img src='https://avatars.githubusercontent.com/u/63406119?s=400&u=98b7d8ab09f295bd97fc512c1ddda80999a5bf57&v=4' alt='My picture' />
        <p>My name is Oscar and this is a React Router clone</p>
      </div>
      <Link to='/'>Go to Home</Link>
    </>
  )
}
