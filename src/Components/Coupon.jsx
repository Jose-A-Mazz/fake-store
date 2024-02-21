import React from 'react'
import styles from "./Coupon.module.css"

export const Coupon = () => {
  return (
    <article className={styles.coupon}>
     
     <h2>
        GET 10% OFF ON ANY PURCHASE
     </h2>
     <p>Using our launch coupon</p>
     <div className={styles["coupon-code-box"]}>
     <p className={styles["coupon-code"]}>
        STORE2024
     </p>
     </div>
    </article>
  )
}
