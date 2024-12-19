import React from "react";
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";
import styles from "./Layout.module.css";

function Layout() {
  return (
    <div className={styles["layout"]}>
      <Header />
      <Outlet />
    </div>
  );
}

export default Layout;
