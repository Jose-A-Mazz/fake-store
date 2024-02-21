import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./utils/fetchAllProducts";
import { RootLayout } from "./Pages/RootLayout";
import { Home, loader as homePageLoader } from "./Pages/Home";
import {
  ListOfCategories,
  loader as categoryLoader,
} from "./Pages/ListOfCategories";
import {
  CategoryPage,
  // loader as categoryPageLoader,
} from "./Pages/CategoryPage";
import { CategoryLayout } from "./Pages/CategoryLayout";
import {
  ProductDetail,
  loader as productDetailLoader,
} from "./Pages/ProductDetail";
import CartPage from "./Pages/CartPage";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const router = createBrowserRouter([
  {
    path: "",
    id: "home-page-category-data",
    loader: homePageLoader,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "categories",
        element: <CategoryLayout />,
        children: [
          {
            index: true,
            loader: categoryLoader,
            element: <ListOfCategories />,
          },
          {
            path: ":category",
            element: <CategoryPage />,
          },
        ],
      },
      {
        path: "/categories/:category/:productId",
        loader: productDetailLoader,
        element: <ProductDetail />,
      },

      {
        path: "/cart",
        element: <CartPage />,
      },
    ],
  },
]);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
