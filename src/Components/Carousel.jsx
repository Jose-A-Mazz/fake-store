import { useRef } from "react";
import { useState, useEffect, useCallback } from "react";

export default function Carousel({ images }) {
  const slide = useRef();
  const [clickCounter, setClickCounter] = useState(1);
  const [carouselStarted, setCarouselStarted] = useState(false);
  const [innerContainerStyles, setInnerContainerStyles] = useState({
    transition: "all 250ms ease-out",
    transform: "translateX(-100%)",
  });
  const [allImages, setAllImages] = useState(createImageSlider(images));

  function createImageSlider(images) {
    let setOfImages = [...images];
    setOfImages.push(setOfImages[0]);
    setOfImages.unshift(setOfImages[setOfImages.length - 2]);
    return setOfImages;
  }

  const styleObject = {
    height: "80vh",
    width: "100%",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "relative",
    flex: "0 0 auto",
  };

  const resetCarouselLeft = useCallback(() => {
    setInnerContainerStyles({
      transition: "none",
      transform: `translateX(${-(allImages.length - 2) * 100}%)`,
    });
  }, []);

  const resetCarouselRight = useCallback(() => {
    setInnerContainerStyles({
      transition: "none",
      transform: `translateX(${
        -(allImages.length - (allImages.length - 1)) * 100
      }%)`,
    });
  }, []);

  useEffect(() => {
    const slidingInterval = setInterval(moveLeft, 4000);
    return () => {
      clearInterval(slidingInterval);
    };
  }, [clickCounter]);

  useEffect(() => {
    if (!carouselStarted) {
      setCarouselStarted(true);
    } else {
      console.log(clickCounter);
      slide.current.removeEventListener(
        "transitionend",
        resetCarouselLeft,
        false
      );

      slide.current.removeEventListener(
        "transitionend",
        resetCarouselRight,
        false
      );
      setInnerContainerStyles({
        transition: "all  250ms ease-out",
        transform: `translateX(${clickCounter * -100}%)`,
      });

      if (clickCounter === 0) {
        slide.current.addEventListener(
          "transitionend",
          resetCarouselLeft,
          false
        );
      }

      if (clickCounter === allImages.length - 1) {
        slide.current.addEventListener(
          "transitionend",
          resetCarouselRight,
          false
        );
      }
    }
  }, [clickCounter]);

  function moveLeft() {
    if (clickCounter === 0) {
      setClickCounter(allImages.length - 3);
    } else if (clickCounter === allImages.length - 1) {
      setClickCounter(0);
    } else {
      setClickCounter((clickCounter) => clickCounter - 1);
    }
  }

  function moveRight() {
    if (clickCounter === allImages.length - 1) {
      setClickCounter(allImages.length - 3);
    } else if (clickCounter === 0) {
      setClickCounter(allImages.length - 1);
    } else {
      setClickCounter((clickCounter) => clickCounter + 1);
    }
  }
  return (
    <>
      <div className="hero">
        <div
          ref={slide}
          className="inner-container"
          style={innerContainerStyles}
        >
          {allImages.map((image) => (
            <div
              style={{ backgroundImage: `url(${image})`, ...styleObject }}
            ></div>
          ))}
        </div>
        <button onClick={moveLeft} className="carousel-next">
          &lt;
        </button>
        <button onClick={moveRight} className="carousel-prev">
          &gt;
        </button>
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
