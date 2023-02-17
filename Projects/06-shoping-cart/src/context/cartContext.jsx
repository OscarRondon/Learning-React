import { createContext, useReducer/*, useState */ } from 'react'
import { initialCarState, cartReducer } from '../reducers/cartReducer'

export const CartContext = createContext()

export function CartProvider ({ children }) {
  // const [cart, setCart] = useState([]) it was replaced for the useReducer()
  const [state, dispatch] = useReducer(cartReducer, initialCarState)
  const addToCart = product => dispatch({ type: 'ADD_TO_CART', payload: product })
  const removeFromCart = product => dispatch({ type: 'REMOVE_FROM_CART', payload: product })
  const clearCart = product => dispatch({ type: 'CLEAR_CART' })

  /*

  it was move to a reducer

  const addToCart = (product) => {
    const producCartIndex = cart.findIndex(item => item.id === product.id)
    if (producCartIndex >= 0) {
      const newCart = structuredClone(cart)
      newCart[producCartIndex].quantity += 1
      return setCart(newCart)
    }
    setCart(prevState => ([...prevState, { ...product, quantity: 1 }]))
  }

  const removeFromCart = (product) => {
    setCart(prevState => prevState.filter(item => item.id !== product.id))
  }

  const clearCart = () => {
    setCart([])
  }

  */

  return (
    <CartContext.Provider value={{
      cart: state,
      addToCart,
      removeFromCart,
      clearCart
    }}
    >
      {children}
    </CartContext.Provider>
  )
}
