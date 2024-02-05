import { Link, NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
import cartImg from "../assets/Cart.svg";
import { useSelector } from "react-redux";

export default function Navbar() {
  const totalItems = useSelector((state) => state.cart.totalItems);

  return (
    <nav className={styles.nav}>
      <div className={styles["title-container"]}>
        <h1>New Century Stores</h1>
      </div>

      <ul className={styles.list}>
        <li>
          <NavLink
            end
            to="/categories"
            className={({ isActive }) => (isActive ? styles.active : undefined)}
          >
            All Categories
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/categories/electronics"
            className={({ isActive }) => (isActive ? styles.active : undefined)}
          >
            Electronics
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/categories/jewelery"
            className={({ isActive }) => (isActive ? styles.active : undefined)}
          >
            Jewelery
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/categories/men's clothing"
            className={({ isActive }) => (isActive ? styles.active : undefined)}
          >
            Men's Clothing
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/categories/women's clothing"
            className={({ isActive }) => (isActive ? styles.active : undefined)}
          >
            Women's Clothing
          </NavLink>
        </li>
      </ul>
      <Link className={styles["cart-link"]} to="/cart">
        <div className={styles["logo-container"]}>
          <p className={styles["cart-counter"]}>{totalItems}</p>

          <div className={styles["cart-divider"]}></div>
          <img
            className={styles["cart-logo"]}
            src={cartImg}
            alt="shopping cart image"
          />
        </div>
      </Link>
    </nav>
  );
}
