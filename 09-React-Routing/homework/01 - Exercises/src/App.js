import React from "react";

import Home from "./components/Home/Home.jsx";
import NavBar from "./components/NavBar/NavBar.jsx";
import Shipping from "./components/Shipping/Shipping.jsx";
import Discounts from "./components/Discounts/Discounts.jsx";
import CardDetail from "./components/CardDetail/CardDetail.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function App() {
  return <div>
    <NavBar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/shipping" element={<Shipping/>}/>
      <Route path="/discounts" element={<Discounts/>}/>
      <Route path="/cruises/:id" element={<CardDetail/>}/>
      
    </Routes>

  </div>;

}
