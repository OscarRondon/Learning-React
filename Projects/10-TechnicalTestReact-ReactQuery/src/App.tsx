import './App.css'
import { /* useEffect,  useRef, */ useMemo } from 'react'
import { useReducerApp } from './hooks/useReducerApp'
import { SortBy } from './types/user.d'
import { UsersList } from './components/UsersList'
import { useUser } from './hooks/useUser'
import { Results } from './components/Results'


function App () {

  const {
    isError,
    isLoading,
    users,
    refetch,
    fetchNextPage,
    hasNextPage
  } = useUser()

  const {
    showColors,
    sorting,
    filterCountry,
    setShowColors,
    setSorting,
    setFilterCountry
  } = useReducerApp()

  // const originalUsers = useRef<User[]>([])

  const toggleColors = () => { setShowColors(!showColors) }

  const toggleSortByCountry = () => {
    const newSortingValue = sorting === SortBy.NONE ? SortBy.COUNTRY : SortBy.NONE
    setSorting(newSortingValue)
  }

  const handleDeleteUser = (email: string) => {
  }

  const handleReset = () => {
    void refetch()
  }

  const handleChangeSort = (sortby: SortBy) => {
    setSorting(sortby)
  }

  const filteredUsers = useMemo(() => {
    return typeof filterCountry === 'string' && filterCountry.length > 0
      ? users.filter(user => {
        return user.location.country.toLocaleLowerCase().includes(filterCountry.toLocaleLowerCase())
      })
      : users
  }, [users, filterCountry])

  const sortedUsers = useMemo(() => {
    switch (sorting) {
      case SortBy.NONE:{
        return filteredUsers
      }
      case SortBy.NAME:{
        return filteredUsers.toSorted((a, b) => {
          return a.name.first.localeCompare(b.name.first)
        })
      }
      case SortBy.LAST_NAME:{
        return filteredUsers.toSorted((a, b) => {
          return a.name.last.localeCompare(b.name.last)
        })
      }
      case SortBy.COUNTRY:{
        return filteredUsers.toSorted((a, b) => {
          return a.location.country.localeCompare(b.location.country)
        })
      }
      default: {
        return filteredUsers
      }
    }
  }, [filteredUsers, sorting])

  return (
    <>
      <h1>React Technical Test </h1>
      <Results/>
      <header>
        <button onClick={toggleColors}>Toggle colors</button>
        <button onClick={toggleSortByCountry}>{sorting === SortBy.COUNTRY ? 'Unsort by country' : 'Sort by country'}</button>
        <button onClick={handleReset} >Reset State</button>
        <input placeholder='Filter by Country' onChange={(e) => { setFilterCountry(e.target.value) }} autoComplete='false' />
      </header>
      <main>
        {users.length > 0 &&
          <UsersList
            users={sortedUsers}
            showColors={showColors}
            deleteUser={handleDeleteUser}
            chageSorting={handleChangeSort}
          />
        }
        {isLoading && <p>Loading...</p>}
        {!isLoading && isError && <p>Error Ocurred.</p>}
        {!isLoading && !isError && users.length === 0 && <p>No users found.</p>}
        {!isLoading && !isError && hasNextPage === true &&
          <button type='button'
            onClick={() => { void fetchNextPage() }}
            style={{ marginTop: '30px' }}
            >Next Page</button>
        }
        {!isLoading && !isError && hasNextPage === false && <p>There is no more results</p>}
      </main>
    </>
  )
}

export default App
