import { useReducer } from 'react'
import { SortBy, type User } from '../types/user.d'

interface StateApp {
  users: User[]
  showColors: boolean
  sorting: SortBy
  filterCountry: string | null
  loading: boolean
  error: boolean
  currentPage: number
}

  type ActionApp = { type: 'RESET_STATE', payload: User[] }
  | { type: 'SET_USERS', payload: User[] }
  | { type: 'TOGGLE_COLORS', payload: boolean }
  | { type: 'TOGGLE_SORT_BY_COUNTRY', payload: SortBy }
  | { type: 'FILTER_BY_COUNTRY', payload: string | null }
  | { type: 'LOADING', payload: boolean }
  | { type: 'ERROR', payload: boolean }
  | { type: 'SET_CURRENT_PAGE', payload: number }

const initialAppState: StateApp = {
  users: [],
  showColors: false,
  sorting: SortBy.NONE,
  filterCountry: null,
  loading: false,
  error: false,
  currentPage: 1
}

function reducerApp (state: StateApp, action: ActionApp): StateApp {
  const { type } = action

  switch (type) {
    case 'RESET_STATE': {
      return { ...initialAppState, users: action.payload }
    }
    case 'SET_USERS': {
      return { ...state, users: state.currentPage === 1 ? action.payload : state.users.concat(action.payload) }
    }
    case 'TOGGLE_COLORS': {
      return { ...state, showColors: action.payload }
    }
    case 'TOGGLE_SORT_BY_COUNTRY': {
      return { ...state, sorting: action.payload }
    }
    case 'FILTER_BY_COUNTRY': {
      return { ...state, filterCountry: action.payload }
    }
    case 'LOADING': {
      return { ...state, loading: action.payload }
    }
    case 'ERROR': {
      return { ...state, error: action.payload }
    }
    case 'SET_CURRENT_PAGE': {
      return { ...state, currentPage: action.payload }
    }
    default: return state
  }
}

export const useReducerApp = () => {
  const [{
    users,
    showColors,
    sorting,
    filterCountry,
    loading,
    error,
    currentPage
  }, dispatch] = useReducer(reducerApp, initialAppState)

  const resetState = (users: User[]) => {
    dispatch({ type: 'RESET_STATE', payload: users })
  }

  const setUsers = (users: User[]) => {
    dispatch({ type: 'SET_USERS', payload: users })
  }

  const setShowColors = (showColors: boolean) => {
    dispatch({ type: 'TOGGLE_COLORS', payload: showColors })
  }

  const setSorting = (sorting: SortBy) => {
    dispatch({ type: 'TOGGLE_SORT_BY_COUNTRY', payload: sorting })
  }

  const setFilterCountry = (filterCountry: string | null) => {
    dispatch({ type: 'FILTER_BY_COUNTRY', payload: filterCountry })
  }

  const setLoading = (loading: boolean) => {
    dispatch({ type: 'LOADING', payload: loading })
  }

  const setError = (error: boolean) => {
    dispatch({ type: 'ERROR', payload: error })
  }

  const setCurrentPage = (page: number) => {
    dispatch({ type: 'SET_CURRENT_PAGE', payload: page })
  }

  return {
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
  }
}
