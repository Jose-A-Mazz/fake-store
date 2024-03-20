import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function SearchResultItem({ item }) {
  return (
    <Link className="item-link" to={`categories/${item.category}/${item.id}`}>
      <motion.li
        className="search-result-item"
        key={item.title}
        whileHover={{ boxShadow: "0px 0px 5px 2px rgba(0,0,0,0.1)", y: -3 }}
      >
        <div
          style={{
            textAlign: "center",
            padding: "1rem",
            position: "relative",
          }}
        >
          <img
            style={{ maxWidth: "50px", maxHeight: "50px" }}
            src={item.image}
            alt={item.title}
          />
          <p
            style={{
              position: "absolute",
              bottom: "0",
              left: "50%",
              transform: "translateX(-50%)",
              border: "none",
              color: "white",
              margin: "0",
              width: "60%",
              backgroundColor: "var(--shipping-color)",
              fontSize: "10px",
            }}
          >
            Free Shipping
          </p>
        </div>
        <div className="result-item-body">
          <p>{item.category}</p>
          <h5>
            {item.title.length > 20
              ? item.title.slice(0, 20) + "..."
              : item.title}
          </h5>
          <p style={{ fontWeight: "bolder", fontSize: "15px" }}>
            ${item.price}
          </p>
        </div>
      </motion.li>
    </Link>
  );
}

export default SearchResultItem;
