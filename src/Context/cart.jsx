import { createContext, useReducer } from 'react'

// Create Context
export const CartContext = createContext()
//
const initialState = []

const reducer = (state, action) => {
  const { type: actionType, payload: actionPayload } = action

  switch (actionType) {
    case 'ADD_TO_CART':{
      const { id } = actionPayload
      const productIndex = state.findIndex(item => item.id === id)
      if (productIndex >= 0) {
        const newState = structuredClone(state)
        newState[productIndex].quantity += 1
        return newState
      }
      return [
        ...state,
        {
          ...actionPayload,
          quantity: 1
        }
      ]
    }
    //
    case 'LESS_TO_CART':{
      const { id } = actionPayload
      const productIndex = state.findIndex(item => item.id === id)
      const newState = structuredClone(state)
      newState[productIndex].quantity -= 1
      return newState
    }

    //
    case 'REMOVE':{
      const { id } = actionPayload
      return state.filter(item => item.id !== id)
    }
    //
    case 'CLEAR_CART':{
      return initialState
    }
    //
  }
  return state
}

// Create Provider
export function CartProvider ({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState)
  //
  const addToCart = product => dispatch({
    type: 'ADD_TO_CART',
    payload: product
  })
  //
  const lessToCart = product => dispatch({
    type: 'LESS_TO_CART',
    payload: product
  })
  //
  const remove = product => dispatch({
    type: 'REMOVE',
    payload: product
  })
  //
  const clearCart = () => dispatch({
    type: 'CLEAR_CART'
  })
  //
  return (
    <CartContext.Provider value={{
      cart: state,
      addToCart,
      remove,
      clearCart,
      lessToCart
    }}
    >
      {children}
    </CartContext.Provider>
  )
}
