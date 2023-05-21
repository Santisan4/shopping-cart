import { createContext } from 'react'

import { useCartReducer } from '../hooks/useCartReducer'

export const CartContext = createContext()

export function CartProvider ({ children }) {
  const { state, addToCart, removeFromCart, clearCart, lessProduct } = useCartReducer()

  return (
    <CartContext.Provider value={{
      cart: state,
      clearCart,
      addToCart,
      removeFromCart,
      lessProduct
    }} >
      {children}
    </CartContext.Provider>
  )
}
