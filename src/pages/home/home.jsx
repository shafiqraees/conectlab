import React from "react";
import DigitalProject from "../../components/digitalProjectSection1/digitalproject";
import AgileDevelopment from "../../components/agileDevelopment/agileDevlopment";
import WhatDoYouNeed from "../../components/whatDoYouNeed/whatDoYouNeed";
import ProductsWebuild from "../../components/productsWeBuild/productsWebuild";
import OurCapabilities from "../../components/ourCapabilities/ourCapabailities";
import Carousell from "../../components/carousel/carousel";

const Home = () => {
  return (
    <div>
      <DigitalProject />
      <AgileDevelopment />
      <WhatDoYouNeed />
      <ProductsWebuild />
      <OurCapabilities />
      <Carousell />
    </div>
  );
};

export default Home;
