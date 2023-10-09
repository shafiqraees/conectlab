import { useEffect, useState } from 'react';
import React from "react";
import Navbar from './components/navbar/navbar';
import DigitalProject from './components/digitalProjectSection1/digitalproject';
import AgileDevelopment from './components/agileDevelopment/agileDevlopment';
import WhatDoYouNeed from './components/whatDoYouNeed/whatDoYouNeed';
import ProductsWebuild from './components/productsWeBuild/productsWebuild';
import OurCapabilities from './components/ourCapabilities/ourCapabailities';
import Carousel from './components/carousel/carousel'
import Footer from './components/footer/footer';
function App() {
  return (
    <>
      <Navbar />
      <DigitalProject />
      <AgileDevelopment />
      <WhatDoYouNeed />
      <ProductsWebuild />
      <OurCapabilities />
      <Carousel />
      <Footer/>
    </>
  )
}

export default App
