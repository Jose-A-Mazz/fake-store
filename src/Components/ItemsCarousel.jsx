import React, { useState, useCallback, useEffect } from "react";
import { ProductCard } from "./ProductCard";
import styles from "./ItemsCarousel.module.css";

export const ItemsCarousel = ({ items }) => {
  const [allItems, setAllItems] = useState([]);
  const [carouselStarted, setCarouselStarted] = useState(false);
  const [clickCounter, setClickCounter] = useState(0);
  const [showButtons, setShowButtons] = useState(false);
  const moveAllItems = useCallback(() => {
    let directionality = -100;
    if (clickCounter === items.length - 1) {
      directionality = 100;
    }

    allItems.forEach((item) => {
      item.style.transform = `translateX(${directionality * clickCounter}%)`;
    });
  }, [clickCounter, allItems]);

  function moveLeft() {
    setClickCounter((prev) => prev + 1);
  }

  function moveRight() {
    setClickCounter((prev) => prev - 1);
  }

  useEffect(() => {
    if (carouselStarted)
      setAllItems(document.querySelectorAll("#inner-container > div"));
  }, [carouselStarted]);

  useEffect(() => {
    if (!carouselStarted) {
      setCarouselStarted(true);
    } else {
      moveAllItems();
    }
  }, [moveAllItems]);

  function displayButtons() {
    setShowButtons(true);
  }

  function hideButtons() {
    setShowButtons(false);
  }

  return (
    <div className={styles["carousel-outer-container"]}>
      <div
        id="inner-container"
        className={styles["carousel-inner-container"]}
        onMouseOver={displayButtons}
        onMouseOut={hideButtons}
      >
        <div className={styles["carousel-slider"]}>
          {items.slice(0, 4).map((item) => (
            <ProductCard item={item} key={item.title} />
          ))}
        </div>
        <div className={styles["carousel-slider"]}>
          {items.slice(4, undefined).map((item) => (
            <ProductCard item={item} key={item.title} />
          ))}
        </div>
        <button
        onClick={moveRight}
        disabled={clickCounter === 0 ? true : false}
          className={styles["carousel-next"]}
          style={{ display: showButtons ? "block" : "none" }}
        >
          &lt;
        </button>
        <button
          onClick={moveLeft}
          disabled={clickCounter === allItems.length - 1 ? true : false}
          className={styles["carousel-prev"]}
          style={{ display: showButtons ? "block" : "none" }}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};
