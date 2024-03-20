import { Link } from "react-router-dom";
import cartImg from "../assets/Cart.svg";
import { useSelector } from "react-redux";
import { AnimatePresence, motion } from "framer-motion";
import { notificationActions } from "../store/notificationSlice";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { createPortal } from "react-dom";
import CartSlider from "./CartSlider";

export default function Cart() {
  const dispatch = useDispatch();
  const [showCart, setShowCart] = useState(false);
  const totalItems = useSelector((state) => state.cart.totalItems);
  const itemAdded = useSelector((state) => state.notification.itemAdded);

  const closeHandler = () => {
    setShowCart(false);
  };

  useEffect(() => {
    const scrollTop = scrollY;
    if (showCart) {
      window.onscroll = () => {
        window.scroll({ top: scrollTop });
      };
    } else {
      window.onscroll = () => {};
    }
  }, [showCart]);

  return (
    <>
      <motion.div
        onClick={() => {
          setShowCart((prev) => !prev);
        }}
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

      {showCart &&
        createPortal(
          <CartSlider onClose={closeHandler} />,
          document.getElementById("cart-slider-box")
        )}
    </>
  );
}
