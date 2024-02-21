import React from "react";
import styles from "./CategoriesSection.module.css";

export const CategoriesSection = () => {
  return (
    <>
      <div className={styles["category-card"]}>
        <h3>Women</h3>
      </div>
      <div className={styles["category-card"]}>
      <h3>Electronics</h3>
      </div>
      <div className={styles["category-card"]}>
      <h3>Men</h3>
      </div>
      <div className={styles["category-card"]}>
      <h3>Jewelery</h3>
      </div>
    </>
  );
};
