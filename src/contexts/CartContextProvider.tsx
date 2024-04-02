import { ReactNode, createContext, useEffect, useReducer } from "react";
import { cartReducer } from "../reducers/Cart/reducer";
import { CoffeesItens, FormCartInputs, Order } from "../types/Cart.types";
import {
  addItemToCart,
  checktoutToCart,
  decrementItemQuantityToCart,
  incrementItemQuantityToCart,
  removeItemToCart,
} from "../reducers/Cart/action";
import { useNavigate } from "react-router-dom";

interface CartContextType {
  cart?: CoffeesItens[];
  orders?: Order[];
  addNewItensOfCart: (item: CoffeesItens) => void;
  removeItemOfCart: (itemId: CoffeesItens["id"]) => void;
  incrementQuantity: (itemId: CoffeesItens["id"]) => void;
  decrementQuantity: (itemId: CoffeesItens["id"]) => void;
  checkoutCart: (order: FormCartInputs) => void;
}

export const CartContext = createContext({} as CartContextType);

interface CartContextProviderProps {
  children: ReactNode;
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const navigate = useNavigate();

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

  function checkoutCart(order: FormCartInputs) {
    dispatch(checktoutToCart(order, navigate));
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
        checkoutCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
