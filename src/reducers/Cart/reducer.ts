/* eslint-disable no-case-declarations */
import { NavigateFunction } from "react-router-dom";
import { ActionTypes } from "./action";
import { CoffeesItens, FormCartInputs, Order } from "../../Types/Cart.types";

/* eslint-disable @typescript-eslint/no-explicit-any */

export type Actions =
  | {
      type: ActionTypes.ADD_ITEM_TO_CART;
      payload: {
        item: CoffeesItens;
      };
    }
  | {
      type:
        | ActionTypes.DECREMENT_ITEM_QUANTITY_TO_CART
        | ActionTypes.INCREMENT_ITEM_QUANTITY_TO_CART
        | ActionTypes.REMOVE_ITEM_TO_CART;
      payload: {
        itemId: CoffeesItens["id"];
      };
    }
  | {
      type: ActionTypes.CHECKOUT_CART;
      payload: {
        order: FormCartInputs;
        callback: NavigateFunction;
      };
    };

// export interface Item extends CoffeesItens {
//   id: string;
//   quantity: number;
// }

interface CartState {
  cart: CoffeesItens[];
  orders: Order[];
}

export function cartReducer(state: CartState, action: any) {
  switch (action.type) {
    case ActionTypes.ADD_ITEM_TO_CART:
      let newCart = [...state.cart];
      // if (action.payload.item.quantity > 1) {
      //   action.payload.item.price =
      //     action.payload.item.price * action.payload.item.quantity;
      // }
      newCart = [...newCart, { ...action.payload.item }];

      return { ...state, cart: newCart };

    default:
      return state;
  }
}
