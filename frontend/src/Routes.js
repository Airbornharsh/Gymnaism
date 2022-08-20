import React from "react";
import { Route, Routes } from "react-router-dom";
import AboutUs from "./Pages/AboutUs";
import Features from "./Pages/Features";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Reviews from "./Pages/Reviews";
import SignUp from "./Pages/SignUp";

const RoutesContainer = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/features" element={<Features />} />
      <Route path="/reviews" element={<Reviews />} />
      <Route path="/aboutus" element={<AboutUs />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
};

export default RoutesContainer;
