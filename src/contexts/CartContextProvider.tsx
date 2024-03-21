/* eslint-disable @typescript-eslint/no-unused-vars */
import { ReactNode, createContext, useReducer } from "react";
// import { CoffeesItensProps } from "../mocks/data";
import { cartReducer } from "../reducers/Cart/reducer";

interface CartContextType {
  cart?: Array<object>;
  orders?: Array<object>;
  // add: (item: Item) => void
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
  console.log("oi");

  const [cartState, dispatch] = useReducer(
    cartReducer,
    {
      cart: [],
      orders: [{}],
    },
    (cartState) => {
      const storedStateAsJSON = localStorage.getItem(
        "@coffee-delivery:cart-state-1.0.0"
      );

      if (storedStateAsJSON) {
        return JSON.parse(storedStateAsJSON);
      }

      return cartState;
    }
  );

  const { cart, orders } = cartState;

  return (
    <CartContext.Provider
      value={{
        cart,
        orders,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
