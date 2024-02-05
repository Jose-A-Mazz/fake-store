import { sortSlice } from "./sortSlice";
import { searchSlice } from "./searchSlice";
import { configureStore } from "@reduxjs/toolkit";
import { cartSlice } from "./cartSlice";

const store = configureStore({
  reducer: { cart: cartSlice.reducer},
});

export default store;
