import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient();

export async function fetchAllProducts({ signal, category }) {
  let url = "https://fakestoreapi.com/products";

  console.log(category);
  if (category) {
    url = "https://fakestoreapi.com/products/category/" + category;
  }

  console.log(url);

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Couldnt fetch Products");
  }

  const data = await response.json();

  console.log(data);

  return data;
}
