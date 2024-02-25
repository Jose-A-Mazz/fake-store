import { useLoaderData } from "react-router-dom";
import { useDispatch } from "react-redux";
import Navbar from "../Components/Navbar";
import styles from "./ProductDetail.module.css";
import { cardsSourceData } from "../assets/cardImagesData";
import checkIcon from "../assets/check-icon.svg";
import shippingIcon from "../assets/shipping-icon.svg";
import { cartSliceActions } from "../store/cartSlice";
import { useEffect, useState } from "react";
import starFilled from "../assets/star-filled.svg";
import halfFilledStar from "../assets/half-filled-star.svg";
import starEmpty from "../assets/star-empty.svg";

export const ProductDetail = () => {
  const [stars, setStars] = useState([]);
  const dispatch = useDispatch();
  let isClothingCategory = false;
  const productData = useLoaderData();
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

  const { rate } = productData.rating;
  const intRate = Math.floor(rate);
  console.log(rate);
  const isDecimal = rate !== intRate;

  const rating = [...Array(5)].map((_, i) => {
    if (isDecimal && intRate + 1 === i + 1) {
      const decimal = rate - intRate;
      return (
        <span>
          {decimal.toFixed(1) > 0.5 ? (
            <img className={styles["star-icon"]} src={starFilled} />
          ) : (
            <img className={styles["star-icon"]} src={halfFilledStar} />
          )}
        </span>
      );
    }
    return i + 1 <= rate ? (
      <span>
        <img className={styles["star-icon"]} src={starFilled} />
      </span>
    ) : (
      <span>
        <img className={styles["star-icon"]} src={starEmpty} />
      </span>
    );
  });

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
                {rate} {rating}
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
              className={styles["add-to-cart"]}
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
