// Toma el boton de agregar carrito y se ejecutará esta acción
import { useState } from "react";

const initialState = {
  cart: [],
  toggleOrders: false,

};

const useInitialState = () => {
  const [state, setState] = useState(initialState);

  const addToCart = (payload) => {
    setState({
      ...state,
      cart: [...state.cart, payload]
    });
  };

  const removeFromCart = (payload) => {
    setState({
      ...state,
      cart: state.cart.filter((item) => item.id !== payload.id)

    })};

  const changeToggle = () => {
    setState({
      ...state,
      toggleOrders: !state.toggleOrders
  })};

  return {
    state,
    addToCart,
    removeFromCart,
    changeToggle
  }

}

export default useInitialState;