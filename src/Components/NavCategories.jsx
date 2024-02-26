import { NavLink } from "react-router-dom";
export default function NavCategories() {
  return (
    <ul className="dashboard-nav-list">
      <li>
        <NavLink
          to="/categories/electronics"
          className={({ isActive }) => (isActive ? "activeLink" : undefined)}
        >
          Electronics
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/categories/jewelery"
          className={({ isActive }) => (isActive ? "activeLink" : undefined)}
        >
          Jewelery
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/categories/men's clothing"
          className={({ isActive }) => (isActive ? "activeLink" : undefined)}
        >
          Men's Clothing
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/categories/women's clothing"
          className={({ isActive }) => (isActive ? "activeLink" : undefined)}
        >
          Women's Clothing
        </NavLink>
      </li>
    </ul>
  );
}
