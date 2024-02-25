import React, { useEffect } from "react";
import styles from "./ProductCard.module.css";
import { motion } from "framer-motion";
import { useState } from "react";

export const ProductCard = ({ item }) => {
  return (
    <motion.div
      transition={{ type: "spring" }}
      whileHover={{ boxShadow: "0px 0px 5px 6px rgba(0,0,0,0.1)", y: -3 }}
      className={styles["product-card"]}
      key={item.id}
    >
      <div className={styles["product-card-image-container"]}>
        <img className={styles["product-image"]} src={item.image} alt="" />
      </div>
      <div className={styles["product-info"]}>
        <p className={styles["discount-paragraph"]}>At Discount</p>
        <p className={styles["product-price-text"]}>{`$ ${item.price}`}</p>
        <p className={styles["product-title-text"]}>{`${item.title}`}</p>
        <p className={styles["product-shiping-text"]}>Fast Shipping</p>
      </div>
    </motion.div>
  );
};
