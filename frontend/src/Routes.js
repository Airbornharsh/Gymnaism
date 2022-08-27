import React from "react";
import { Route, Routes } from "react-router-dom";
import AboutUs from "./Pages/AboutUs";
import Course from "./Pages/Course";
import Dashboard from "./Pages/Dashboard";
import EditDashboard from "./Pages/EditDashboard";
import Features from "./Pages/Features";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import MyCourse from "./Pages/MyCourse";
import MyCourses from "./Pages/MyCourses";
import MyVideo from "./Pages/MyVideo";
import MyVideos from "./Pages/MyVideos";
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
      <Route path={`/dashboard`} element={<Dashboard />} />
      <Route path={`/dashboard/edit`} element={<EditDashboard />} />
      <Route path={`/mycourses`} element={<MyCourses />} />
      <Route path={`/mycourses/:courseId`} element={<MyCourse />} />
      <Route path={`/myvideos`} element={<MyVideos />} />
      <Route path={`/myvideos/:videoId`} element={<MyVideo />} />
      <Route path="/course/:courseId" element={<Course />} />
    </Routes> 
  );
};

export default RoutesContainer;
