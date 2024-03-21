/* eslint-disable @typescript-eslint/no-explicit-any */
export interface Item {
  id: string;
  quantity: number;
}

// export interface Order extends OrderInfo {
//   id: number
//   items: Item[]
// }

interface CartState {
  cart: Item[];
  orders: Array<object>;
}

export function cartReducer(state: CartState, action: any) {
  switch (action.type) {
    default:
      return state;
  }
}
