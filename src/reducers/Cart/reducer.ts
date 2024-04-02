/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-case-declarations */
import { produce } from "immer";

import { NavigateFunction } from "react-router-dom";
import { ActionTypes } from "./action";
import { CoffeesItens, FormCartInputs, Order } from "../../types/Cart.types";

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
      return produce(state, (draft) => {
        draft.cart.push(action.payload.item);
      });

    case ActionTypes.REMOVE_ITEM_TO_CART:
      return produce(state, (draft) => {
        const findIndexRemove = draft.cart.findIndex(
          (item) => item.id === action.payload.itemId
        );
        if (findIndexRemove != -1) draft.cart.splice(findIndexRemove, 1);
      });

    case ActionTypes.INCREMENT_ITEM_QUANTITY_TO_CART:
      return produce(state, (draft) => {
        const findIndexIncrement = draft.cart.findIndex(
          (item) => item.id === action.payload.itemId
        );
        if (findIndexIncrement != -1) {
          draft.cart[findIndexIncrement].quantity! += 1;
        }
      });

    case ActionTypes.DECREMENT_ITEM_QUANTITY_TO_CART:
      return produce(state, (draft) => {
        const findIndexDecrement = draft.cart.findIndex(
          (item) => item.id === action.payload.itemId
        );
        if (
          findIndexDecrement != -1 &&
          draft.cart[findIndexDecrement].quantity! > 1
        ) {
          draft.cart[findIndexDecrement].quantity! -= 1;
        }
      });

    default:
      return state;
  }
}
