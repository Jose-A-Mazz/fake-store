import { createSlice, createAction } from "@reduxjs/toolkit";
import { cartSliceActions } from "./cartSlice";
const addToCart = cartSliceActions.addToCart;

const initialState = {
  itemAdded: false,
};

const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    deActivateItemAdded(state, action) {
      state.itemAdded = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(addToCart, (state, action) => {
      state.itemAdded = true;
    });
  },
});

export default notificationSlice;
export const { actions: notificationActions } = notificationSlice;
