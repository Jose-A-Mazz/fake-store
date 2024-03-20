import React, { createContext, useEffect, useState } from "react";
import SearchResultItem from "./SearchResultItem";
import { useContext } from "react";

const ctx = createContext();

const SearchResultsDialog = ({ children, items }) => {
  return <ctx.Provider value={{ items }}>{children}</ctx.Provider>;
};

export default SearchResultsDialog;

function List({ top, left }) {
  const { items } = useContext(ctx);
  return (
    <div
      style={{
        width: "clamp(200px, 40vw, 500px)",
        position: "absolute",
        top: top + "px",
        left: left + "px",
        backgroundColor: "white",
        padding: "2%",
      }}
    >
      <ul className="search-results-list">
        {items.map((items) => (
          <SearchResultItem item={items} />
        ))}
      </ul>
    </div>
  );
}

SearchResultsDialog.List = List;
