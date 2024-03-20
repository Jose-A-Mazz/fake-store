import { useLoaderData } from "react-router-dom";
import { useDispatch } from "react-redux";
import Navbar from "../Components/Navbar";
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
  if (
    productData.category === "men's clothing" ||
    productData.category === "women's clothing"
  ) {
    isClothingCategory = true;
  }

  return (
    <>
      <Navbar />
      <main className="product-detail-main">
        <section className="product-main-container">
          <div className="product-miniature-container">
            <div className="miniature-inner-container">
              <img className="miniature-img" src={productData.image} />
            </div>
          </div>
          <div className="product-img-container">
            <img className="image" src={productData.image} />
          </div>

          <div className="product-info">
            <div>
              <p className="category-product-detail">{productData.category}</p>
              <h1>{productData.title}</h1>
            </div>
            <div className="price-stars-section">
              <div className="rating">
                <span>{productData.rating.rate}</span>
                <div className="stars">{rating}</div>
                <span>({productData.rating.count})</span>
              </div>
              <p className="price">{`$ ${productData.price}`}</p>
            </div>
            <span className="original-tag">New Century Store Original</span>
            <div className="shipping-items-container">
              <img src={shippingIcon} className="product-icon" alt="" />
              <p className="shipping-text">
                This item qualifies for free shipping
              </p>
            </div>

            {isClothingCategory && (
              <div className="size-chart">
                <div className="size-circle">S</div>
                <div className="size-circle">M</div>
                <div className="size-circle">L</div>
                <div className="size-circle">XL</div>
              </div>
            )}
            <select className="product-detail-select">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
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
