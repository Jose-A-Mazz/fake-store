import { Link, NavLink, useLocation } from "react-router-dom";
import "../App.css";
import { useEffect, forwardRef } from "react";
import { motion } from "framer-motion";
import Cart from "./Cart";
import { SearchBar } from "../UI/SearchBar";

const NavBar = forwardRef(function NavBar(props, ref) {
  const location = useLocation();
  const { items } = props;
  return (
    <nav className="nav" ref={ref}>
      <div className="title-container">
        <Link to="/">
          <h1 style={{ color: "black" }}>New Century Stores</h1>
        </Link>
        <ul className="list">
          <li>
            <NavLink className="" to="/categories">
              All Categories
            </NavLink>
          </li>
          <li>
            <NavLink className="" to="/categories">
              Featured Products
            </NavLink>
          </li>
        </ul>
      </div>
      {location.pathname === "/" && <SearchBar items={items} inNavBar={true} />}
      <Cart />
    </nav>
  );
});

export default NavBar;
