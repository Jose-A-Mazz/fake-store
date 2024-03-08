import styles from "./Home.module.css";
import techCard from "../assets/tech-display-card.jpg";
import womanCard from "../assets/woman-display-card.jpg";
import { useRouteLoaderData } from "react-router-dom";
import { ItemsCarousel } from "../Components/ItemsCarousel";
import { Coupon } from "../Components/Coupon";
import NavBar from "../Components/Navbar";
import { Footer } from "../Components/Footer";
import { useEffect } from "react";
import { MainHeader } from "../Components/MainHeader";
import { useRef, useState } from "react";
import { current } from "@reduxjs/toolkit";
import { useQuery } from "@tanstack/react-query";
import { queryClient } from "../utils/fetchAllProducts";
import { fetchHomePageData } from "../utils/fetchHomePageData";
import Bento from "../Components/Bento";

export const Home = () => {
  const ref = useRef();
  // const { featuredItems } = useRouteLoaderData("home-page-category-data");
  let scrollStarted = false;

  const { data, error, isError, isLoading } = useQuery({
    staleTime: 20000,
    queryKey: ["products", "home-products"],
    queryFn: fetchHomePageData,
  });

  console.log(data);

  useEffect(() => {
    function eventFn() {
      if (scrollY > 300 && !scrollStarted) {
        ref.current.style.top = `${scrollY}px`;

        setTimeout(() => {
          ref.current.style.top = 0;
          ref.current.style.position = "sticky";
          ref.current.style.transition = "none";
          ref.current.style.boxShadow = "0px 1px 2px 3px rgba(0,0,0,0.1)";
          scrollStarted = true;
        }, 500);
      }

      if (scrollY === 0 && scrollStarted) {
        ref.current.style.position = "relative";
        ref.current.style.transition = "all 600ms ease";
        ref.current.style.boxShadow = "none";
        scrollStarted = false;
      }
    }

    window.addEventListener("scroll", eventFn);
  }, [scrollStarted]);

  return (
    <>
      <NavBar ref={ref} />
      <main>
        {!isLoading && <MainHeader images={data.imagesUrl} />}
        <Bento itemsByCategory={data.itemsByCategory} />
        <section className={styles["featured-items-section"]}>
          <h2 id="intersecting-element">What People are Buying</h2>
          {!isLoading && <ItemsCarousel items={data.featuredItems} />}
        </section>
        <section id="card-section" className={styles["display-card-section"]}>
          <div className={styles["card-container"]}>
            <img
              src={techCard}
              alt="electronics card"
              className={styles["display-card"]}
            />
            <div className={styles["image-text"]}>
              <h2>Your Next Tech Upgrade</h2>
              <button>See our products</button>
            </div>
          </div>
          <div className={styles["card-container"]}>
            <img
              src={womanCard}
              alt="women card"
              className={styles["display-card"]}
            />
            <div className={styles["image-text"]}>
              <h2>Stay Beautiful, Be Beautiful</h2>
              <button>See our products</button>
            </div>
          </div>
        </section>
        <section className={styles["coupon-section"]}>
          <Coupon />
        </section>
      </main>
      <Footer />

      {/* Create Footer */}
    </>
  );
};

export async function loader() {
  await queryClient.prefetchQuery({
    queryKey: ["products", "home-products"],
    queryFn: fetchHomePageData,
  });

  return null;
}
