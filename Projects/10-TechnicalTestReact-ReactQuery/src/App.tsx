import './App.css'
import { useEffect, useRef, useMemo } from 'react'
import { useReducerApp } from './hooks/useReducerApp'
import { SortBy, type User } from './types/user.d'
import { UsersList } from './components/UsersList'

const fetchUsers = async (page: number) => {
  return await fetch(`https://randomuser.me/api/?page=${page}&results=10&seed=orondon`)
    .then(async apiResult => {
      if (!apiResult.ok) {
        throw new Error('Something went wrong')
      }
      return await apiResult.json()
    })
    .then(jsonResult => jsonResult.results as User[])
}

function App () {
  const {
    users,
    showColors,
    sorting,
    filterCountry,
    loading,
    error,
    currentPage,
    resetState,
    setUsers,
    setShowColors,
    setSorting,
    setFilterCountry,
    setLoading,
    setError,
    setCurrentPage
  } = useReducerApp()

  const originalUsers = useRef<User[]>([])

  const toggleColors = () => { setShowColors(!showColors) }

  const toggleSortByCountry = () => {
    const newSortingValue = sorting === SortBy.NONE ? SortBy.COUNTRY : SortBy.NONE
    setSorting(newSortingValue)
  }

  const handleDeleteUser = (email: string) => {
    const filteredUsers = users.filter(user => user.email !== email)
    setUsers(filteredUsers)
  }

  const handleReset = () => { resetState(originalUsers.current) }

  const handleChangeSort = (sortby: SortBy) => {
    setSorting(sortby)
  }

  useEffect(() => {
    setLoading(true)
    setError(false)

    fetchUsers(currentPage)
      .then(users => {
        setUsers(users)
        if (currentPage === 1) originalUsers.current = users
      })
      .catch(err => {
        setError(true)
        console.log(err)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [currentPage])

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
      <header>
        <button onClick={toggleColors}>Toggle colors</button>
        <button onClick={toggleSortByCountry}>{sorting === SortBy.COUNTRY ? 'Unsort by country' : 'Sort by country'}</button>
        <button onClick={handleReset}>Reset State</button>
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
        {loading && <p>Loading...</p>}
        {!loading && error && <p>Error Ocurred.</p>}
        {!loading && !error && users.length === 0 && <p>No users found.</p>}
        {!loading && !error &&
          <button type='button'
            onClick={() => { setCurrentPage(currentPage + 1) }}
            style={{ marginTop: '30px' }}
            >Next Page</button>
        }
      </main>
    </>
  )
}

export default App
