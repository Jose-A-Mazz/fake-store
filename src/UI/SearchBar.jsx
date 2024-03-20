import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { createPortal } from "react-dom";
import { SlMagnifier } from "react-icons/sl";
import useSort from "../hooks/useSortAndSearch";
import SearchResultItem from "../Components/SearchResultItem";
import SearchResultsDialog from "../Components/SearchResultsDialog";

export const SearchBar = ({ items, inNavBar }) => {
  const {
    searchHandler,
    categoryState: { searchedItemsArray },
  } = useSort(items || []);
  const searchBox = useRef();

  useEffect(() => {});

  return (
    <>
      <div
        ref={searchBox}
        className={`navbar-search-bar-container ${
          searchedItemsArray.length > 0 ? "search-box-active" : ""
        }`}
      >
        <SlMagnifier />

        <input
          onChange={searchHandler}
          type="text"
          placeholder={inNavBar ? "Search a Product..." : "Filter item"}
          className={inNavBar ? "navbar-search-bar" : "dashboard-search-bar"}
        />
      </div>
      {inNavBar && (
        <SearchResultsDialog items={searchedItemsArray}>
          <SearchResultsDialog.List />
        </SearchResultsDialog>
      )}
    </>
  );
};

// const { scrollY } = useScroll();
// const [scrollPosition, setScrollPosition] = useState(0);

// useMotionValueEvent(scrollY, "change", (latest) => {
//   setScrollPosition(latest);
// });

// useEffect(() => {
//   setStyle({
//     position: "fixed",
//     display: scrollPosition > 5 && scrollPosition < 600 ? "none" : "flex",
//     top: 0 + searchBox.current.getBoundingClientRect().bottom + "px",
//     left: `${searchBox.current.getBoundingClientRect().left}px`,
//     borderStyle: "none",
//     padding: "1rem 2rem",
//     backgroundColor: "white",
//     boxShadow: "7px 10px 10px 5px rgba(0, 0, 0, 0.1)",
//     zIndex: "10000",
//   });
// }, [scrollPosition]);
