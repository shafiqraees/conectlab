import { useEffect, useState } from "react";
import React from "react";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import Home from "./pages/home/home";
import { Route, Routes } from "react-router-dom";
import ProductEngineering from "./pages/productEngineering/productEngineering";
import SaasProduct from "./pages/saasProductDevelopment/saasProduct";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product-engineering" element={<ProductEngineering />} />
        <Route
          path="/services/saas-product-development"
          element={<SaasProduct />}
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
