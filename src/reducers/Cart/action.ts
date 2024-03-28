/* eslint-disable @typescript-eslint/no-explicit-any */

import { CoffeesItens } from "../../Types/Cart.types";

export enum ActionTypes {
  ADD_ITEM_TO_CART = "ADD_ITEM_TO_CART",
  REMOVE_ITEM_TO_CART = "REMOVE_ITEM_TO_CART",
  INCREMENT_ITEM_QUANTITY_TO_CART = "INCREMENT_ITEM_QUANTITY_TO_CART",
  DECREMENT_ITEM_QUANTITY_TO_CART = "DECREMENT_ITEM_QUANTITY_TO_CART",
  CHECKOUT_CART = "CHECKOUT_CART",
}

export function addItemToCart(item: CoffeesItens) {
  return {
    type: ActionTypes.ADD_ITEM_TO_CART,
    payload: {
      item,
    },
  };
}

export function removeItemToCart() {}

export function incrementItemQuantityToCart() {}

export function decrementItemQuantityToCart() {}
