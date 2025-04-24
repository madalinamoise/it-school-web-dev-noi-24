import { ADD_TO_CART, CLEAR_CART, REMOVE_FROM_CART } from "./actions";

export default function cartReducer(state, action) {
  switch (action.type) {
    case ADD_TO_CART: {
      // [{
      //     id:4,
      //     quantity:5
      //   },
      //   {
      //     id:5,
      //     quantity:2
      //   }
      //   ] --> de dorit
      //  [4,4,4,4,4,5,5] ---> avem
      const isInCart = state.find((product) => product.id === action.payload);

      if (isInCart) {
        return state.map((product) =>
          product.id === action.payload
            ? { ...product, quantity: product.quantity + 1 }
            : product
        );
      }
      return [...state, { id: action.payload, quantity: 1 }];
    }

    case REMOVE_FROM_CART: {
      return state.filter((product) => product.id !== action.payload);
    }

    case CLEAR_CART: {
      return [];
    }
    default: {
      return state;
    }
  }
}
