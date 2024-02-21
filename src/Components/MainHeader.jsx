import Carousel from "./Carousel";
import shopImage from "../assets/main-image.jpg";
import femaleModel from "../assets/female-model-main.jpg";
import maleModel from "../assets/male-model-main.jpg";
import electronicsImage from "../assets/electronic-main.jpg";
import styles from "./MainHeader.module.css";
import { useEffect } from "react";

// const images = [shopImage, femaleModel, electronicsImage, maleModel];

console.log(shopImage);

export function MainHeader({ images }) {
  console.log(images);
  return <Carousel images={images} />;
}
