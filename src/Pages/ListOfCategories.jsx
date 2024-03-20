import { useLoaderData, Link } from "react-router-dom";
import { ProductCard } from "../Components/ProductCard";
import { Dashboard } from "../Components/Dashboard";
import { CSSProperties } from "react";
import useSortAndSearch from "../hooks/useSortAndSearch";
import styles from "./ListOfCategories.module.css";
import { useQuery } from "@tanstack/react-query";
import { queryClient } from "../utils/fetchAllProducts";
import { fetchHomePageData } from "../utils/fetchHomePageData";
import { motion } from "framer-motion";
import LoadingIndicator from "../Components/LoadingIndicator";
import CategoryWrapper from "../UI/CategoryWrapper";

export const ListOfCategories = () => {
  const { data, error, isError, isLoading } = useQuery({
    querykey: ["products", "home-products"],
    queryFn: fetchHomePageData,
    staleTime: 10000,
  });

  let products;

  if (data) products = data.products;

  const { sortingHandler, categoryState, searchHandler, toSort } =
    useSortAndSearch(products || []);

  let itemsArray = [];

  if (categoryState.searchedItemsArray.length > 0) {
    itemsArray = categoryState.searchedItemsArray;
  } else {
    itemsArray = !products ? [] : [...products];
  }

  if (categoryState.sortType !== "") {
    toSort(categoryState.sortType, itemsArray);
  }

  return (
    <>
      {isLoading && <LoadingIndicator isLoading={isLoading} />}
      {!isLoading && (
        <>
          <div style={{ height: "200px" }}></div>
          <CategoryWrapper>
            <Dashboard
              items={products}
              onSort={sortingHandler}
              currentlySorted={categoryState.sortType}
              searchHandler={searchHandler}
            />
            <ul className={styles["items-list"]}>
              {itemsArray.map((item) => (
                <Link key={item.title} to={`${item.category}/${item.id}`}>
                  <motion.li layout>
                    <ProductCard item={item} />{" "}
                  </motion.li>
                </Link>
              ))}
            </ul>{" "}
          </CategoryWrapper>
        </>
      )}
    </>
  );
};

export async function loader() {
  // promise resolves before loading the page
  //response data is stored in the cache
  //so no need to use useLoader as the cached data returned by useQuery hook
  //will contain the data returned by fetchQuery

  return queryClient.fetchQuery({
    queryKey: ["products", "home-products"],
    queryFn: fetchHomePageData,
  });
}
