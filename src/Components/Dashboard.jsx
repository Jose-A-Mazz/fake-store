import React, { useEffect, useMemo, useRef, useState } from "react";
import styles from "./Dashboard.module.css";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { sortActions } from "../store/sortSlice";
import closeIcon from "../assets/close.svg";
import { useSearch } from "../hooks/useSeach";

export const Dashboard = ({ items, onSort, currentlySorted, searchHandler}) => {
  const params = useParams();
  const select = useRef();
  const [sorting, setSorting] = useState(false);

  function sortingHandler(e) {
    setSorting(true);
    onSort(e.target.value)
  }

  function overrideSorting() {
    setSorting(false);
    select.current.value = "";
  }

  return (
    <div className={styles["dashboard"]}>
      <label className={styles["dashboard-label"]} htmlFor="sort-by">
        Sort by
      </label>

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
      <input
        onChange={searchHandler}
        type="text"
        placeholder="Search..."
        className={styles["dashboard-search-bar"]}
      />
      <span
        className={!sorting ? styles["override-sorting"] : ""}
        onClick={overrideSorting}
      >
        {currentlySorted}
        <img
          className={styles["close-icon"]}
          src={closeIcon}
          alt="close icon"
        />
      </span>
    </div>
  );
};
