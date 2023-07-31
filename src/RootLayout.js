import React from "react";
import Header from "./components/Layout/Header/Header";
import SideBar from "./components/Layout/SideBar/SideBar";
import { Outlet } from "react-router";
import "./App.css";

function RootLayout() {
  return (
    <div className="app">
      <Header />
      <div className="app__body">
        <SideBar />
        <Outlet />
      </div>
    </div>
  );
}

export default RootLayout;
