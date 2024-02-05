import React from 'react'
import styles from "./ProductCard.module.css"

export const ProductCard = ({item}) => {
  return (
    <div className={styles["product-card"]} key={item.id}>
    <div className={styles["product-card-image-container"]}>
      <img className={styles["product-image"]} src={item.image} alt="" />
    </div>
    <div className={styles["product-info"]}>
      <p className={styles["discount-paragraph"]}>At Discount</p>
    <p className={styles["product-price-text"]}>{`$ ${item.price}`}</p>
    <p className={styles["product-title-text"]}>{`${item.title}`}</p>
    <p className={styles["product-shiping-text"]}>Fast Shipping</p>
    </div>
    </div>
  )
}
