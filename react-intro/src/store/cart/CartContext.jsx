import { createContext, useContext, useEffect, useReducer } from "react";
import { ADD_TO_CART, REMOVE_FROM_CART } from "./actions";
import cartReducer from "./reducer";

export const CartContext = createContext();

const getCartFromLocalStorage = () => {
  const storedCart = localStorage.getItem("cart");
  return storedCart ? JSON.parse(storedCart) : [];
};

export const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, [], getCartFromLocalStorage);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const getTotalCartQuantity = () => {
    // let totalQuantity = 0;
    // cart.forEach(
    //   (product) => (totalQuantity = totalQuantity + product.quantity)
    // );

    // return totalQuantity;

    return Array.from(cart).reduce((acc, curr) => acc + curr.quantity, 0);
  };

  const addToCart = (id) => dispatch({ type: ADD_TO_CART, payload: id });
  const removeFromCart = (id) =>
    dispatch({
      type: REMOVE_FROM_CART,
      payload: id,
    });

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, getTotalCartQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
