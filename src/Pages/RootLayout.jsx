import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import { Footer } from "../Components/Footer";

export const RootLayout = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export async function loader() {
  let array = [];

  const urls = [
    "https://fakestoreapi.com/products/category/men's clothing",
    "https://fakestoreapi.com/products/category/women's clothing",
    "https://fakestoreapi.com/products/category/jewelery",
    "https://fakestoreapi.com/products/category/electronics",
  ];

  const mappedUrls = urls.map(async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    let randomX = Math.floor(Math.random() * (data.length - 1 - 0) + 0);

    let randomY = Math.floor(Math.random() * (data.length - 1 - 0) + 0);

    while (randomX === randomY) {
      randomY = Math.floor(Math.random() * (data.length - 1 - 0) + 0);
    }

    array.push(data[randomX], data[randomY]);
    return;
  });

  const results = await Promise.all(mappedUrls);

  return { featuredItems: array };
}
