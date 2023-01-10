import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../layouts";
import links from "./links";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <div>Error</div>,
    children: [
      {
        path: links.Home.path,
        element: <div>{links.Home.name}</div>,
      },
      {
        path: links.Login.path,
        element: <div>{links.Login.name}</div>,
      },
      {
        path: links.Scoreboard.path,
        element: <div>{links.Scoreboard.name}</div>,
      },
    ],
  },
]);

export default router;
