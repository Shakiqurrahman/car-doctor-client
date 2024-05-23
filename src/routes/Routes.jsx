import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import HomePage from "../pages/HomePage";

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
        path: "/blog",
        element: <h1>Blog Page</h1>
      },
      {
        path: "/contact",
        element: <h1>Contact Page</h1>
      },
    ]
  },
  {
    path: "*",
    element: <h1>404 Not Found</h1>
  }
]) 