import { FC } from "react";
import { RouterProvider } from "react-router-dom";
import router from "./routers/router";

type AppProps = {};

const App: FC<AppProps> = () => {
  return <RouterProvider router={router} />;
};

export default App;
