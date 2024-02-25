import { Link } from "react-router-dom";
import cartImg from "../assets/Cart.svg";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import { notificationActions } from "../store/notificationSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

export default function Cart() {
  const dispatch = useDispatch();
  const totalItems = useSelector((state) => state.cart.totalItems);
  const itemAdded = useSelector((state) => state.notification.itemAdded);

  return (
    <>
      <Link className="cart-link" to="/cart">
        <motion.div
          className="logo-container"
          animate={{ scale: itemAdded ? 1.1 : 1 }}
          transition={{
            ease: "linear",
            type: "spring",
            duration: 0.2,
            bounce: 0.8,
          }}
          onAnimationComplete={() =>
            dispatch(notificationActions.deActivateItemAdded())
          }
        >
          <p className="cart-counter">{totalItems}</p>

          <div className="cart-divider"></div>
          <img className="cart-logo" src={cartImg} alt="shopping cart image" />
        </motion.div>
      </Link>
    </>
  );
}
