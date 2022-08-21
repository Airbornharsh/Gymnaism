import React from "react";
import { Route, Routes } from "react-router-dom";
import AboutUs from "./Pages/AboutUs";
import Course from "./Pages/Course";
import Dashboard from "./Pages/Dashboard";
import Features from "./Pages/Features";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Profile from "./Pages/Profile";
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
      <Route path="/profile" element={<Profile />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/Course/:courseId" element={<Course />} />
    </Routes>
  );
};

export default RoutesContainer;
