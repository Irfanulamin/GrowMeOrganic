import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Features from "./components/pages/Features";
import PrivateRoute from "./components/utils/PrivateRoute";
import HomePage from "./components/pages/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/features",
    element: (
      <PrivateRoute>
        <Features />
      </PrivateRoute>
    ),
    loader: () => fetch("https://jsonplaceholder.typicode.com/posts"),
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
