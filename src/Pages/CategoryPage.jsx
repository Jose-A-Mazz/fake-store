import React from "react";
import styles from "./CategoryPage.module.css";
import {
  useLoaderData,
  useLocation,
  Link,
  useNavigation,
  useParams,
} from "react-router-dom";
import { ProductCard } from "../Components/ProductCard";
import { Dashboard } from "../Components/Dashboard";
import useSort from "../hooks/useSortAndSearch";
import { useSelector } from "react-redux";
import { useQuery } from "@tanstack/react-query";
import { fetchAllProducts, queryClient } from "../utils/fetchAllProducts";
import LoadingIndicator from "../Components/LoadingIndicator";
import { fetchHomePageData } from "../utils/fetchHomePageData";
import { current } from "@reduxjs/toolkit";
import usePathString from "../hooks/usePathString";

export const CategoryPage = () => {
  const params = useParams();
  const breadCrumb = usePathString();
  let categoryItems = [];
  const { data, isError, isLoading, error } = useQuery({
    queryKey: ["products", "home-products"],
    queryFn: fetchHomePageData,
  });

  const currentItems = data.itemsByCategory.filter(
    (item) => item.category === params.category
  )[0].items;

  const { sortingHandler, categoryState, dispatcher, toSort, searchHandler } =
    useSort(currentItems || []);
  let navigation = useNavigation();

  if (navigation.state === "loading" && categoryState.sortType !== "") {
    dispatcher({ type: "REMOVE SORT" });
  }

  if (categoryState.searchedItemsArray.length > 0) {
    categoryItems = [...categoryState.searchedItemsArray];
  } else {
    categoryItems = !currentItems ? [] : [...currentItems];
  }

  if (categoryState.sortType !== "") {
    toSort(categoryState.sortType, categoryItems);
  }

  return (
    <>
      {isLoading && <LoadingIndicator isLoading={isLoading} />}
      {!isLoading && (
        <>
          <div
            className={styles["bread-crumb-outer-container"]}
            style={{ height: "50px", marginTop: "150px" }}
          >
            <ul className={styles["bread-crumb-inner-container"]}>
              {breadCrumb}
            </ul>
          </div>
          <div style={{ display: "flex", columnGap: "5%", width: "100%" }}>
            <Dashboard
              items={currentItems}
              onSort={sortingHandler}
              currentlySorted={categoryState.sortType}
              searchHandler={searchHandler}
            />
            <ul className={styles["items-list"]}>
              {categoryItems.map((item) => (
                <Link key={item.title} to={`${item.id}`}>
                  <ProductCard item={item} />
                </Link>
              ))}
            </ul>
          </div>
        </>
      )}
    </>
  );
};
