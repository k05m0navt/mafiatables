import React, { FC } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

type LayoutProps = {};

const Layout: FC<LayoutProps> = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default Layout;
