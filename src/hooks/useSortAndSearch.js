import { useReducer, useEffect, useState } from "react"

const initialState = {
    sortType: "",
    searchedItemsArray: []
}

export default function useSort(items) {

    const [categoryState, dispatcher] = useReducer(categoryReducer, initialState)
    const [searchInput, setSearchInput] = useState("")

    useEffect(() => {

        let timer = setTimeout(() => {

            dispatcher({ type: "SEARCH", value: { searchInput, array: items } })
        }, 500)


        return () => clearTimeout(timer)
    }, [searchInput, items])

    function searchHandler(e) {
        setSearchInput(e.target.value);

    }

    function categoryReducer(state, action) {


        if (action.type === "SEARCH") {


            let searchQuery = action.value.searchInput.toLowerCase()
            let array = [...action.value.array]
            let searchedItemsArray = [];

            //tratar de implentar algoritmo de palabras completas. Hasta ahora si pongo "mens"
            //me busca también "womens"
            searchedItemsArray = array.filter(item => {

                // let inDescription = item.description.includes(searchQuery);

                let inCategory = item.category.toLowerCase().includes(searchQuery);
                let inTitle = item.title.toLowerCase().includes(searchQuery);

                if (inCategory || inTitle) return item

            })

            return {
                ...state,
                searchedItemsArray,
            }


        }

        if (action.type === "SORTING") {
            const sortType  = action.value
            return {
                ...state,
                sortType
            }
        }

        else if (action.type === "REMOVE SORT") {
            return {
                ...state,
                sortType: ""
            }
        }



    }

    function toSort(sortType, array) {

        switch (sortType) {
            case "more expensive":
                array.sort((a, b) => b.price - a.price)
                break;
            case "cheapest":
                array.sort((a, b) => a.price - b.price)
                break;
            case "rating":
                array.sort((a, b) => b.rating.rate - a.rating.rate)
                break;
            default:
                
                return array
        }
    }


    function sortingHandler(sortType) {
        dispatcher({
            type: "SORTING", value: sortType,
            
        })
    }

    return {
        sortingHandler,
        toSort,
        categoryState,
        searchHandler,

    }
}
