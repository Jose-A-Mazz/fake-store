import React, { useEffect, useMemo, useRef, useState } from "react";
import "../App.css";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { sortActions } from "../store/sortSlice";
import closeIcon from "../assets/close.svg";
import { useSearch } from "../hooks/useSeach";
import useUpperCase from "../hooks/useUpperCase";
import NavCategories from "./NavCategories";
import { SearchBar } from "../UI/SearchBar";

export const Dashboard = ({
  items,
  onSort,
  currentlySorted,
  searchHandler,
}) => {
  const params = useParams();
  const categoryTitle = useUpperCase(params.category);
  const select = useRef();
  const [sorting, setSorting] = useState(false);

  function sortingHandler(e) {
    setSorting(true);
    onSort(e.target.value);
  }

  function overrideSorting() {
    setSorting(false);
    select.current.value = "";
  }

  return (
    <article className="dashboard">
      <h2 style={{ padding: ".3rem 1rem" }}>
        {categoryTitle || "All Categories"}
      </h2>
      <NavCategories />
      <select
        ref={select}
        onChange={sortingHandler}
        name="sorting-options"
        id="sort-by"
      >
        <option value="">Choose</option>
        <option value="cheapest">Cheapest</option>
        <option value="more expensive">More Expensive</option>
        <option value="rating">Rating</option>
      </select>
      <SearchBar onChange={searchHandler} />
      <span
        className={!sorting ? "override-sorting" : ""}
        onClick={overrideSorting}
      >
        {currentlySorted}
        <img className="close-icon" src={closeIcon} alt="close icon" />
      </span>
    </article>
  );
};
