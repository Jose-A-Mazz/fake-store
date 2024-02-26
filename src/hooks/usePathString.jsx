import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
export default function usePathString() {
  const location = useLocation();

  const pathString = location.pathname.replace("%20", " ").split("/");
  pathString.splice(0, 1, "Home");

  const breadCrumb = pathString.map((navItem, index) => {
    let path = "";
    if (index <= 1) {
      path = index === 0 ? "../.." : "..";
    }

    const upperCaseItem =
      navItem.charAt(0).toUpperCase() + navItem.slice(1, undefined);

    return (
      <li key={navItem}>
        <Link to={!path ? "." : path}>
          {index < pathString.length - 1 ? `${upperCaseItem} >` : upperCaseItem}
        </Link>
      </li>
    );
  });

  return breadCrumb;
}
