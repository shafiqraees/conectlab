import { useEffect, useState } from 'react';
import React from "react";
import Navbar from './components/navbar/navbar';
import DigitalProject from './components/digitalProjectSection1/digitalproject';
import AgileDevelopment from './components/agileDevelopment/agileDevlopment';
function App() {
  return (
    <>
   <Navbar/>
   <DigitalProject/>
   <AgileDevelopment/>
    </>
  )
}

export default App
