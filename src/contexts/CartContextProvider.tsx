/* eslint-disable @typescript-eslint/no-unused-vars */
import { ReactNode, createContext, useEffect, useReducer } from "react";
// import { CoffeesItens } from "../mocks/data";
import { cartReducer } from "../reducers/Cart/reducer";
import { CoffeesItens, Order } from "../types/Cart.types";
import {
  addItemToCart,
  decrementItemQuantityToCart,
  incrementItemQuantityToCart,
  removeItemToCart,
} from "../reducers/Cart/action";
// import { useNavigate } from "react-router-dom";

interface CartContextType {
  cart?: CoffeesItens[];
  orders?: Order[];
  addNewItensOfCart: (item: CoffeesItens) => void;
  removeItemOfCart: (itemId: CoffeesItens["id"]) => void;
  incrementQuantity: (itemId: CoffeesItens["id"]) => void;
  decrementQuantity: (itemId: CoffeesItens["id"]) => void;
  // checkout: (order: OrderInfo) => void
}

export const CartContext = createContext({} as CartContextType);

interface CartContextProviderProps {
  children: ReactNode;
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  // const navigate = useNavigate();

  const [cartState, dispatch] = useReducer(
    cartReducer,
    {
      cart: [],
      orders: [],
    },
    (cartState) => {
      const setStoredStateAsJSON = localStorage.getItem(
        "@coffee-delivery:cart-state-1.0.0"
      );
      if (setStoredStateAsJSON) {
        return JSON.parse(setStoredStateAsJSON);
      }

      return cartState;
    }
  );

  const { cart, orders } = cartState;

  useEffect(() => {
    const stateJson = JSON.stringify(cartState);
    localStorage.setItem("@coffee-delivery:cart-state-1.0.0", stateJson);
  }, [cartState]);

  function addNewItensOfCart(item: CoffeesItens) {
    dispatch(addItemToCart(item));
  }

  function removeItemOfCart(itemId: CoffeesItens["id"]) {
    dispatch(removeItemToCart(itemId));
  }

  function incrementQuantity(itemId: CoffeesItens["id"]) {
    dispatch(incrementItemQuantityToCart(itemId));
  }
  function decrementQuantity(itemId: CoffeesItens["id"]) {
    dispatch(decrementItemQuantityToCart(itemId));
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        orders,
        addNewItensOfCart,
        removeItemOfCart,
        incrementQuantity,
        decrementQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
