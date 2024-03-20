import React, { useEffect, useRef, useState } from "react";
import { SlMagnifier } from "react-icons/sl";
import useSort from "../hooks/useSortAndSearch";
import SearchResultsDialog from "../Components/SearchResultsDialog";

export const SearchBar = ({ items, inNavBar }) => {
  const {
    searchHandler,
    categoryState: { searchedItemsArray },
  } = useSort(items || []);
  const searchBox = useRef();
  const [searchBoxPosition, setSearchBoxPosition] = useState({
    top: 0,
    left: 0,
  });

  useEffect(() => {
    if (searchBox.current) {
      setSearchBoxPosition({
        top: searchBox.current.getBoundingClientRect().bottom,
        left: searchBox.current.getBoundingClientRect().left,
      });
    }
  }, [searchBox.current]);

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
      <SearchResultsDialog
        items={searchedItemsArray}
        position={searchBoxPosition}
      >
        <SearchResultsDialog.List>
          <SearchResultsDialog.Label />
        </SearchResultsDialog.List>
      </SearchResultsDialog>
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
