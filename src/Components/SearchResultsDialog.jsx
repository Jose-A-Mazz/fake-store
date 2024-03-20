import React, { createContext, useEffect, useState } from "react";
import SearchResultItem from "./SearchResultItem";
import { useContext } from "react";
import SeeAllCategoriesItem from "../UI/SeeAllCategoriesItem";

const ctx = createContext();

const SearchResultsDialog = ({
  children,
  items,
  position: searchBoxPosition,
}) => {
  const [hideBar, setHideBar] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 5 && window.scrollY <= 600) {
        setHideBar(true);
      } else {
        if (!hideBar) return;
        setHideBar(false);
      }
    });
  }, [hideBar]);

  return (
    <ctx.Provider value={{ items, searchBoxPosition, hideBar }}>
      {children}
    </ctx.Provider>
  );
};

export default SearchResultsDialog;

function Label() {
  return (
    <p
      style={{
        color: "var( --shipping-color)",
        flexBasis: "100%",
        margin: "0 0 5px 0",
        fontWeight: "bolder",
      }}
    >
      Search Results
    </p>
  );
}

function List({ children }) {
  const {
    items,
    searchBoxPosition: { top, left },
    hideBar,
  } = useContext(ctx);

  if (items.length === 0) return;

  return (
    <div
      style={{
        width: "clamp(200px, 40vw, 500px)",
        position: "absolute",
        top: top + "px",
        left: left + "px",
        backgroundColor: "white",
        boxShadow: "1px 2px 5px 6px rgba(0,0,0,0.1)",
        padding: "2%",
        display: hideBar ? "none" : "block",
      }}
    >
      {children}
      <ul className="search-results-list">
        {items
          .map((items, index) => {
            if (index > 3) return;
            return <SearchResultItem item={items} />;
          })
          .concat(<SeeAllCategoriesItem />)}
      </ul>
    </div>
  );
}

SearchResultsDialog.List = List;
SearchResultsDialog.Label = Label;
