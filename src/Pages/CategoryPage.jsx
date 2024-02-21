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

export const CategoryPage = () => {
  const params = useParams();
  console.log(params.category);
  let categoryItems = [];
  const { data, isError, isLoading, error } = useQuery({
    queryKey: ["products", { category: params.category }],
    queryFn: ({ signal }) =>
      fetchAllProducts({ signal, category: params.category }),
  });

  const { sortingHandler, categoryState, dispatcher, toSort, searchHandler } =
    useSort(data || []);
  const location = useLocation();
  let navigation = useNavigation();

  const pathString = location.pathname.replace("%20", " ").split("/");
  pathString.splice(0, 1, "Home");
  const breadCrumb = pathString;

  if (navigation.state === "loading" && categoryState.sortType !== "") {
    dispatcher({ type: "REMOVE SORT" });
  }

  if (categoryState.searchedItemsArray.length > 0) {
    categoryItems = [...categoryState.searchedItemsArray];
  } else {
    categoryItems = !data ? [] : [...data];
  }

  if (categoryState.sortType !== "") {
    toSort(categoryState.sortType, categoryItems);
  }

  return (
    <React.Fragment>
      {isLoading && <LoadingIndicator isLoading={isLoading} />}
      {!isLoading && (
        <>
          <div
            className={styles["bread-crumb-outer-container"]}
            style={{ height: "50px", marginTop: "150px" }}
          >
            <ul className={styles["bread-crumb-inner-container"]}>
              {breadCrumb.map((navItem, index) => (
                <li key={navItem}>
                  <Link
                    to={`/${index === 0 ? "" : navItem.toLowerCase()}`}
                  >{`${navItem}${
                    index < breadCrumb.length - 1 ? "  >" : ""
                  }`}</Link>
                </li>
              ))}
            </ul>
          </div>
          <Dashboard
            items={data}
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
        </>
      )}
    </React.Fragment>
  );
};
