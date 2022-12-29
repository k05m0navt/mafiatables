import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../layouts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <div>Error</div>,
    children: [
      {
        path: "/",
        element: <div>Home</div>,
      },
    ],
  },
]);

export default router;
