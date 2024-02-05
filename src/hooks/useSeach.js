import {useEffect, useState} from "react"
import { useDispatch } from "react-redux"
import { searchActions } from "../store/searchSlice";
import { useParams } from "react-router-dom";

export function useSearch(itemsArray) {
    const params = useParams()
const dispatch = useDispatch();
const [searchInput, setSearchInput] = useState("")

    useEffect(()=>{

        let timer = setTimeout(() => {
           
          dispatch(searchActions.search({searchInput, mainArray: itemsArray}))
        }, 500)
  
  
        return () => clearTimeout(timer)
      }, [searchInput, dispatch, itemsArray, params.category])
  
      function searchHandler(e) {
        setSearchInput(e.target.value);
  
      }
  

      return {
        searchHandler,
        dispatch
      }

}