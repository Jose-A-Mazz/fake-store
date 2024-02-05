import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { RootLayout, loader as homePageLoader } from "./Pages/RootLayout";
import { Home } from "./Pages/Home";
import {
  ListOfCategories,
  loader as categoryLoader,
} from "./Pages/ListOfCategories";
import {
  CategoryPage,
  loader as categoryPageLoader,
} from "./Pages/CategoryPage";
import { CategoryLayout } from "./Pages/CategoryLayout";
import { ProductDetail, loader as productDetailLoader } from "./Pages/ProductDetail";
import CartPage from "./Pages/CartPage"

const router = createBrowserRouter([
  {
    path: "/",
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
            loader: categoryPageLoader,
        
          },

        ]
      },
  {
    path: "/categories/:category/:productId",
    loader: productDetailLoader,
    element: <ProductDetail />

  },

  {
    path: "/cart",
    element: <CartPage />

  }
]}])

function App() {
  return <RouterProvider router={router} />;
}

export default App;
