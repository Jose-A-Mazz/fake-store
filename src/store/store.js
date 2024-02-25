import { sortSlice } from "./sortSlice";
import { searchSlice } from "./searchSlice";
import { configureStore } from "@reduxjs/toolkit";
import { cartSlice } from "./cartSlice";
import notificationSlice from "./notificationSlice";

const store = configureStore({
  reducer: { cart: cartSlice.reducer, notification: notificationSlice.reducer },
});

export default store;
