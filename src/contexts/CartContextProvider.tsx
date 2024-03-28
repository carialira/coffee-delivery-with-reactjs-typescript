/* eslint-disable @typescript-eslint/no-unused-vars */
import { ReactNode, createContext, useEffect, useReducer } from "react";
// import { CoffeesItens } from "../mocks/data";
import { cartReducer } from "../reducers/Cart/reducer";
import { CoffeesItens, Order } from "../Types/Cart.types";
import { addItemToCart } from "../reducers/Cart/action";

interface CartContextType {
  cart?: CoffeesItens[];
  orders?: Order[];
  addNewItensOfCart: (item: CoffeesItens) => void;
  // remove: (itemId: Item['id']) => void
  // decrementQuantity: (itemId: Item['id']) => void
  // incrementQuantity: (itemId: Item['id']) => void
  // checkout: (order: OrderInfo) => void
}

export const CartContext = createContext({} as CartContextType);

interface CartContextProviderProps {
  children: ReactNode;
}

export function CartContextProvider({ children }: CartContextProviderProps) {
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
    localStorage.setItem('@coffee-delivery:cart-state-1.0.0"', stateJson);
  }, [cartState]);

  function addNewItensOfCart(item: CoffeesItens) {
    dispatch(addItemToCart(item));
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        orders,
        addNewItensOfCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
