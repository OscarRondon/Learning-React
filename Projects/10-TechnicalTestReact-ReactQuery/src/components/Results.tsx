import { useUser } from '../hooks/useUser'

export const Results = () => {
  const { users } = useUser()

  return <h3>Results {users.length}</h3>
}
