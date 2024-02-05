import {createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: { filteredArray: []},
  reducers: {
    search(state, action) {
     
        let searchQuery = action.payload.searchInput.toLowerCase()
        let array = [...action.payload.mainArray]

        //tratar de implentar algoritmo de palabras completas. Hasta ahora si pongo "mens"
        //me busca también "womens"
        state.filteredArray = array.filter(item => {

            // let inDescription = item.description.includes(searchQuery);

            let inCategory = item.category.toLowerCase().includes(searchQuery);
            let inTitle = item.title.toLowerCase().includes(searchQuery);

            if(inCategory || inTitle){
                return item
            }


        


        })

        

    },

  },
});

const searchActions = searchSlice.actions;

export { searchActions };
export {searchSlice}

