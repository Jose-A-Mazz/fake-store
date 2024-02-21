import { useRef } from "react";
import { useState, useEffect, useCallback } from "react";

export default function Carousel({ images }) {
  const slide = useRef();
  const [indexOfImage, setIndexOfImage] = useState(0);
  const [carouselStarted, setCarouselStarted] = useState(false);

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
          {images.map((image) => (
            <div
              style={{
                backgroundImage: `url(${image.url})`,
                ...styleObject,
              }}
            ></div>
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
              >
                .
              </button>
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
