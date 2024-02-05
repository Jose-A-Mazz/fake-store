import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  cartItems: {},
  totalAmount: 0,
  totalItems: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      if (state.cartItems[`${action.payload.title}`]) {
        //cart Item exists
        let existingCartItem = state.cartItems[`${action.payload.title}`];
        existingCartItem.qty += 1;
        existingCartItem.amount = existingCartItem.qty * existingCartItem.price;
        state.totalAmount += existingCartItem.price;
        state.totalItems += 1;
      } else {
        //cart Item is new
        let cartItem = {
          ...action.payload,
          qty: 1,
          amount: action.payload.price * 1,
        };
        if (cartItem.title.length > 40) {
          cartItem["trimmedTitle"] = cartItem.title.slice(0, 40) + "…";
        }
        state.cartItems[`${cartItem.title}`] = cartItem;
        state.totalAmount += cartItem.amount;
        state.totalItems += 1;
      }
    },
  },
});
const cartSliceActions = cartSlice.actions;
export { cartSliceActions };
export { cartSlice };
