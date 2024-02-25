import { Link, NavLink } from "react-router-dom";
import "../App.css";
import { useEffect, forwardRef } from "react";
import { motion } from "framer-motion";
import Cart from "./Cart";

const NavBar = forwardRef(function NavBar(props, ref) {
  return (
    <nav className="nav" ref={ref}>
      <div className="title-container">
        <Link to="/">
          <h1 style={{ color: "black" }}>New Century Stores</h1>
        </Link>
      </div>

      <ul className="list">
        <li layoutId="nav-link">
          <NavLink
            end
            to="/categories"
            className={({ isActive }) => (isActive ? "active" : undefined)}
          >
            All Categories
          </NavLink>
        </li>
        <li layoutId="nav-link">
          <NavLink
            to="/categories/electronics"
            className={({ isActive }) => (isActive ? "active" : undefined)}
          >
            Electronics
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/categories/jewelery"
            className={({ isActive }) => (isActive ? "active" : undefined)}
          >
            Jewelery
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/categories/men's clothing"
            className={({ isActive }) => (isActive ? "active" : undefined)}
          >
            Men's Clothing
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/categories/women's clothing"
            className={({ isActive }) => (isActive ? "active" : undefined)}
          >
            Women's Clothing
          </NavLink>
        </li>
      </ul>
      <Cart />
    </nav>
  );
});

export default NavBar;
