import { createBrowserRouter } from "react-router-dom";
import CheckoutPage from "../pages/CheckoutPage";
import HomePage from "../pages/HomePage";
import ServicesPage from "../pages/ServicesPage";
import Layout from "./Layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/about",
        element: <h1>About Page</h1>,
      },
      {
        path: "/services",
        element: <h1>Services Page</h1>,
      },
      {
        path: "/service-details/:id",
        element: <ServicesPage />,
      },
      {
        path: "/checkout/:id",
        element: <CheckoutPage />,
        loader: ({ params }) =>
          fetch(`http://localhost:8000/api/services/${params.id}`),
      },
      {
        path: "/blog",
        element: <h1>Blog Page</h1>,
      },
      {
        path: "/contact",
        element: <h1>Contact Page</h1>,
      },
    ],
  },
  {
    path: "*",
    element: <h1>404 Not Found</h1>,
  },
]);
