import Carousel from "./Carousel";
import shopImage from "../assets/main-image.jpg";
import femaleModel from "../assets/female-model-main.jpg";
import electronicsImage from "../assets/electronic-main.jpg";
import styles from "./MainHeader.module.css";
import { useEffect } from "react";

const images = [shopImage, femaleModel, electronicsImage];

export function MainHeader() {
  return <Carousel images={images} />;
}
