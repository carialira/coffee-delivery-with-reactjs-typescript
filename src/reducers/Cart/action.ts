/* eslint-disable @typescript-eslint/no-explicit-any */

import { NavigateFunction } from "react-router-dom";
import { CoffeesItens, FormCartInputs } from "../../types/Cart.types";

export enum ActionTypes {
  ADD_ITEM_TO_CART = "ADD_ITEM_TO_CART",
  REMOVE_ITEM_TO_CART = "REMOVE_ITEM_TO_CART",
  INCREMENT_ITEM_QUANTITY_TO_CART = "INCREMENT_ITEM_QUANTITY_TO_CART",
  DECREMENT_ITEM_QUANTITY_TO_CART = "DECREMENT_ITEM_QUANTITY_TO_CART",
  CHECKOUT_CART = "CHECKOUT_CART",
}

export function addItemToCart(item: CoffeesItens) {
  if (item.quantity) {
    const calc = item.price * item.quantity;
    item.totalPrice = calc;
  }
  return {
    type: ActionTypes.ADD_ITEM_TO_CART,
    payload: {
      item,
    },
  };
}

export function removeItemToCart(itemId: CoffeesItens["id"]) {
  return {
    type: ActionTypes.REMOVE_ITEM_TO_CART,
    payload: {
      itemId,
    },
  };
}

export function incrementItemQuantityToCart(itemId: CoffeesItens["id"]) {
  return {
    type: ActionTypes.INCREMENT_ITEM_QUANTITY_TO_CART,
    payload: {
      itemId,
    },
  };
}

export function decrementItemQuantityToCart(itemId: CoffeesItens["id"]) {
  return {
    type: ActionTypes.DECREMENT_ITEM_QUANTITY_TO_CART,
    payload: {
      itemId,
    },
  };
}

export function checktoutToCart(
  order: FormCartInputs,
  callback: NavigateFunction
) {
  return {
    type: ActionTypes.CHECKOUT_CART,
    payload: {
      order,
      callback,
    },
  };
}
