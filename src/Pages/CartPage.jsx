import styles from "./CartPage.module.css";
import Navbar from "../Components/Navbar";
import CartItem from "../Components/CartItem";
import { useSelector } from "react-redux";
import { useEffect } from "react";

export default function CartPage() {
  const cartData = useSelector((state) => state.cart);
  const { cartItems } = cartData;
  let { totalAmount } = cartData;

  return (
    <>
      <Navbar />
      <main className={styles["cart-page"]}>
        <section className={styles["cart-section"]}>
          <ul>
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
        </section>
        <section className={styles["checkout-section"]}>
          <header>
            <h2>Shopping Cart Summary</h2>
          </header>
          <div className={styles["checkout-body"]}>
            <table>
              <tr>
                <td>Products ({`${Object.keys(cartItems).length}`})</td>
                <td>{(totalAmount * 1).toFixed(2)}</td>
              </tr>
            </table>
            <button className={styles["checkout-btn"]}>
              Procceed to Checkout
            </button>
          </div>
        </section>
      </main>
    </>
  );
}
