import { createSlice } from "@reduxjs/toolkit";

const sortSlice = createSlice({
  name: "sortAndFilter",
  initialState: { sortedArray: [], currentlySorted: "", priceFilter: 0},
  reducers: {

    sortToggler(state, action) {
     
      
    state.currentlySorted =  action.payload;
    },

    filter(state, action) {

      state.priceFilter = action.payload;


    },

    disableSorting(state, action) {
      state.sortedArray = [];
      state.currentlySorted = "";
    },
  },
});

const sortActions = sortSlice.actions;

export { sortActions };
export { sortSlice };
