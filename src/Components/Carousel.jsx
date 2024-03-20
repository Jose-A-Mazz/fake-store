import { useRef } from "react";
import { useState, useEffect, useCallback } from "react";

export default function Carousel({ images }) {
  const slide = useRef();
  const [indexOfImage, setIndexOfImage] = useState(0);
  const [carouselStarted, setCarouselStarted] = useState(false);
  let messages = [
    "All our Products",
    "Women's Clothing",
    "Electronic Items",
    "Men's Clothing",
  ];

  const styleObject = {
    height: "80vh",
    width: "100%",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "relative",
    flex: "0 0 auto",
  };

  useEffect(() => {
    const sliderInterval = setInterval(moveRight, 4000);

    return () => {
      clearInterval(sliderInterval);
    };
  }, [indexOfImage]);

  function moveLeft() {
    setIndexOfImage((prevIndex) => {
      if (prevIndex === 0) return images.length - 1;
      return prevIndex - 1;
    });
  }

  function moveRight() {
    setIndexOfImage((prevIndex) => {
      if (prevIndex === images.length - 1) return 0;
      return prevIndex + 1;
    });
  }
  return (
    <>
      <div className="hero">
        <div
          ref={slide}
          className="inner-container"
          style={{
            transition: "all 300ms ease-in-out",
            transform: `translateX(-${indexOfImage * 100}%)`,
          }}
        >
          {images.map((image, index) => (
            <div
              className="slide"
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url(${image.url})`,
                ...styleObject,
              }}
            >
              <div className="slide-message">
                <h2 className="slide-title">{messages[index]}</h2>
                <button className="shop-now">Shop Now →</button>
              </div>
            </div>
          ))}
        </div>
        <button onClick={moveLeft} className="carousel-next">
          &lt;
        </button>
        <button onClick={moveRight} className="carousel-prev">
          &gt;
        </button>
        <div className="dot-points-container">
          {images.map((image, index) => {
            return (
              <button
                onClick={() => setIndexOfImage(index)}
                key={image.url}
                className={
                  index === indexOfImage ? "dot-btn current-img-btn" : "dot-btn"
                }
              ></button>
            );
          })}
        </div>
      </div>
    </>
  );
}

{
  /* <div className="pointers-box">
  {images.map((img, index) => {
    return <div key={img} id={index} className="pointer"></div>;
  })}
</div> */
}
