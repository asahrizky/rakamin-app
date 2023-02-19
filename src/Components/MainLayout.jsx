import React from "react";
import { Outlet } from "react-router-dom";
import Products from "../Pages/products";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

export default function MainLayout() {
  return (
    <div>
      <Navbar />
      <Products />
      <Outlet />
      <Footer />
    </div>
  );
}
