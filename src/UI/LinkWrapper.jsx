import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function LinkWrapper({ item, children }) {
  let url = "/categories/";
  item ? (url += item.category + "/" + item.id) : url;

  return (
    <Link className="item-link" to={url}>
      <motion.li
        className="search-result-item"
        key={item?.title || Math.random()}
        whileHover={{ boxShadow: "0px 0px 5px 2px rgba(0,0,0,0.1)", y: -3 }}
      >
        {children}
      </motion.li>
    </Link>
  );
}
