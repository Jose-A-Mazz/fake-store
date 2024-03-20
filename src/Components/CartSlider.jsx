import { AnimatePresence, motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { cartSliceActions } from "../store/cartSlice";
import CartItem from "./CartItem";
import { useEffect } from "react";
import { useState } from "react";

export default function CartSlider({ onClose }) {
  const cartData = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [scrollTop, setScrollTop] = useState(0);
  const { cartItems } = cartData;
  let { totalAmount } = cartData;
  const totalItems = Object.keys(cartItems).length;

  useEffect(() => {
    setScrollTop(window.scrollY);
  }, [scrollTop]);

  return (
    <motion.div
      style={{ top: scrollTop }}
      transition={{ type: "spring" }}
      className="cart-slider"
      initial={{ right: "100%" }}
      animate={{ right: 0 }}
      exit={{ right: "-100%" }}
    >
      <div className="cart-top-section">
        <h2 className="cart-slider-title">My Cart ({totalItems})</h2>
        <div className="cart-top-buttons">
          <button onClick={() => onClose()} className="cart-slider-btn">
            Close
          </button>
          <button
            onClick={() => dispatch(cartSliceActions.removeAllItems())}
            className="cart-slider-btn clear-cart"
          >
            Clear Clart
          </button>
        </div>
      </div>
      <AnimatePresence>
        {totalItems === 0 && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="no-items-text"
          >
            Your Cart is Empty
          </motion.p>
        )}
      </AnimatePresence>
      <ul className="cart-items-list">
        {Object.keys(cartItems).map((itemId) => {
          return (
            <CartItem
              price={cartItems[itemId].price}
              title={cartItems[itemId].title}
              amount={cartItems[itemId].amount}
              trimmedTitle={cartItems[itemId].trimmedTitle}
              image={cartItems[itemId].image}
              qty={cartItems[itemId].qty}
            />
          );
        })}
      </ul>
      <footer className="cart-footer">
        <p className="cart-total-price-text">
          Subtotal: {(totalAmount * 1).toFixed(2)}
        </p>
        <button className="cart-slider-btn checkout-btn">Checkout</button>
      </footer>
    </motion.div>
  );
}
