import React from "react";
import styles from "./CategoryPage.module.css";
import { useLoaderData, useLocation, Link, useNavigation } from "react-router-dom";
import { ProductCard } from "../Components/ProductCard";
import { Dashboard } from "../Components/Dashboard";
import useSort from "../hooks/useSortAndSearch";
import { useSelector } from "react-redux";

export const CategoryPage = () => {
  let categoryItems = [];
  const items = useLoaderData();
  const { sortingHandler, categoryState, dispatcher, toSort, searchHandler } = useSort(items)
  const location = useLocation();
  let navigation = useNavigation()

  const pathString = location.pathname.replace("%20", " ").split("/");
  pathString.splice(0, 1, "Home");
  const breadCrumb = pathString

  if (navigation.state === "loading" && categoryState.sortType !== "") {
    dispatcher({ type: "REMOVE SORT" })
  }


  if (categoryState.searchedItemsArray.length > 0) {
    categoryItems = [...categoryState.searchedItemsArray];
  } else {
    categoryItems = [...items];
  }

  if (categoryState.sortType !== "") {
    toSort(categoryState.sortType, categoryItems)
  }


  return (
    <React.Fragment>
      <div
        className={styles["bread-crumb-outer-container"]}
        style={{ height: "50px", marginTop: "150px" }}
      >
        <ul className={styles["bread-crumb-inner-container"]}>
          {breadCrumb.map((navItem, index) => (
            <li key={navItem}><Link to={`/${index === 0 ? "" : navItem.toLowerCase()}`}>{`${navItem}${index < breadCrumb.length - 1 ? "  >" : ""
              }`}</Link></li>
          ))}
        </ul>
      </div>
      <Dashboard items={items} onSort={sortingHandler} currentlySorted={categoryState.sortType} searchHandler={searchHandler} />
      <ul className={styles["items-list"]}>
        {categoryItems.map((item) => (
          <Link key={item.title} to={`${item.id}`}><ProductCard item={item} /></Link>
        ))}
      </ul>
    </React.Fragment>
  );
};

export async function loader({ params }) {
  console.log(params)
  let currentCategory = params.category;

  const response = fetch(
    "https://fakestoreapi.com/products/category/" + currentCategory
  );

  return response;
}
