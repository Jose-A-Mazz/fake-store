import { useLoaderData, Link } from "react-router-dom";
import { ProductCard } from "../Components/ProductCard";
import { Dashboard } from "../Components/Dashboard";
import { useSelector } from "react-redux";
import { useReducer } from "react";
import useSortAndSearch from "../hooks/useSortAndSearch";
import styles from "./ListOfCategories.module.css"



export const ListOfCategories = () => {
  // const searchResults = useSelector(state => state.search.filteredArray)
  const items = useLoaderData();
  const {sortingHandler, categoryState, searchHandler, toSort} = useSortAndSearch(items)
  let itemsArray = [];


  if (categoryState.searchedItemsArray.length > 0) {
    itemsArray = categoryState.searchedItemsArray;
  } else {
    itemsArray = [...items];
  }

  if (categoryState.sortType !== "") {
    toSort(categoryState.sortType, itemsArray)
  }


  return (
    <>
      <div style={{ height: "200px" }}>

      </div>
      <Dashboard items={items} onSort={sortingHandler} currentlySorted={categoryState.sortType} searchHandler={searchHandler}/>
      <ul className={styles["items-list"]}>

        {itemsArray.map((item) => (
          <Link key={item.title} to={`${item.category}/${item.id}`} ><li><ProductCard item={item} /> </li></Link>
        ))}
      </ul>
    </>
  );
}



export async function loader() {

  let array = []

  const urls = [
    "https://fakestoreapi.com/products/category/men's clothing",
    "https://fakestoreapi.com/products/category/women's clothing",
    "https://fakestoreapi.com/products/category/jewelery",
    "https://fakestoreapi.com/products/category/electronics",
  ];

  const mappedUrls = urls.map(async (url) => {
    const response = await fetch(url);
    const data = await response.json()

    return data

  });



  const results = await Promise.all(mappedUrls);

  results.forEach(result => array.push(...result))

  return array;
}





