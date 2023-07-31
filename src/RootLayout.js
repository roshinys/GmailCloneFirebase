import React from "react";
import Header from "./components/Layout/Header/Header";
import SideBar from "./components/Layout/SideBar/SideBar";
import { Outlet } from "react-router";

function RootLayout() {
  return (
    <div>
      <Header />
      <SideBar />
      <Outlet />
    </div>
  );
}

export default RootLayout;
