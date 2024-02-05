import styles from "./Home.module.css";
import techCard from "../assets/tech-display-card.jpg";
import womanCard from "../assets/woman-display-card.jpg";
import { useRouteLoaderData } from "react-router-dom";
import { ItemsCarousel } from "../Components/ItemsCarousel";
import { Coupon } from "../Components/Coupon";
import Navbar from "../Components/Navbar";
import { Footer } from "../Components/Footer";
import { useEffect } from "react";
import { MainHeader } from "../Components/MainHeader";
import { useRef } from "react";

export const Home = () => {
  const { featuredItems } = useRouteLoaderData("home-page-category-data");
  const intersectingElement = useRef();

  useEffect(() => {
    let options = {
      root: null,
      rootMargin: "0px",
      threshold: 0,
    };

    const callback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log("Hello");
        }
      });
    };

    let observer = new IntersectionObserver(callback, options);

    observer.observe(intersectingElement.current);
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <MainHeader />
        <section className={styles["featured-items-section"]}>
          <h2 ref={intersectingElement}>What People are Buying</h2>
          <ItemsCarousel items={featuredItems} />
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
