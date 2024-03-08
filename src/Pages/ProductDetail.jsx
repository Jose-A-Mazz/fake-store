import { useLoaderData } from "react-router-dom";
import { useDispatch } from "react-redux";
import Navbar from "../Components/Navbar";
import styles from "./ProductDetail.module.css";
import { cardsSourceData } from "../assets/cardImagesData";
import checkIcon from "../assets/check-icon.svg";
import shippingIcon from "../assets/shipping-icon.svg";
import { cartSliceActions } from "../store/cartSlice";
import { useEffect, useState } from "react";
import "../App.css";
import useStarGenerator from "../hooks/useStarGenerator.jsx";

export const ProductDetail = () => {
  const dispatch = useDispatch();
  let isClothingCategory = false;
  const productData = useLoaderData();
  const rating = useStarGenerator(productData.rating);
  let miniatures = [];
  let i = 0;
  while (i < 4) {
    miniatures.push(
      <img className={styles["miniature-img"]} src={productData.image} />
    );

    i++;
  }

  if (
    productData.category === "men's clothing" ||
    productData.category === "women's clothing"
  ) {
    isClothingCategory = true;
  }

  return (
    <>
      <Navbar />
      <main className={styles["product-detail-page"]}>
        <section className={styles["product-main-container"]}>
          <div className={styles["product-img-main-container"]}>
            <div className={styles["product-miniature-container"]}>
              {miniatures}
            </div>
            <div className={styles["product-img-container"]}>
              <img className={styles.image} src={productData.image} />
            </div>
          </div>
          <div className={styles["product-info"]}>
            <h1>{productData.title}</h1>
            <div className={styles.rating}>
              <span>
                {productData.rating.rate} {rating}
              </span>
              <span>({productData.rating.count})</span>
            </div>
            <p className={styles.price}>{`$ ${productData.price}`}</p>
            <div className={styles["card-img"]}>
              <span>Up to 3 Interest-Free Installments</span>
              <img src={cardsSourceData[0]} />
              <img src={cardsSourceData[1]} />
            </div>
            <div className={styles["shipping-items-container"]}>
              <img
                src={shippingIcon}
                className={styles["product-icon"]}
                alt=""
              />
              <p className={styles["shipping-text"]}>
                This item qualifies for free shipping
              </p>
            </div>
            {isClothingCategory && (
              <div className={styles["size-chart"]}>
                <p className={styles["size-text"]}>Size:</p>
                <div className={styles["size-circle"]}>S</div>
                <div className={styles["size-circle"]}>M</div>
                <div className={styles["size-circle"]}>L</div>
                <div className={styles["size-circle"]}>XL</div>
              </div>
            )}
            <div className={styles["stock-and-qty"]}>
              <div className={styles["in-stock"]}>
                <img
                  src={checkIcon}
                  className={styles["product-icon"]}
                  alt="check-icon"
                />
                <p>In Stock</p>
              </div>
              <select name="qty-select" id="qty">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
            </div>
            <button
              onClick={dispatch.bind(
                null,
                cartSliceActions.addToCart(productData)
              )}
              className="add-to-cart"
            >
              Add to Cart
            </button>
          </div>
        </section>
      </main>
    </>
  );
};

export async function loader({ params, request }) {
  const productId = params.productId;

  const response = await fetch(
    "https://fakestoreapi.com/products/" + productId
  );
  const data = await response.json();
  return data;
}
