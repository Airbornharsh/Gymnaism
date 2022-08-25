import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import Context from "./Context/Context";
import AboutUs from "./Pages/AboutUs";
import Course from "./Pages/Course";
import Dashboard from "./Pages/Dashboard";
import EditDashboard from "./Pages/EditDashboard";
import Features from "./Pages/Features";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import MyCourses from "./Pages/MyCourses";
import MyVideos from "./Pages/MyVideos";
import Profile from "./Pages/Profile";
import Reviews from "./Pages/Reviews";
import SignUp from "./Pages/SignUp";

const RoutesContainer = () => {
  const UserDataCtx = useContext(Context).userdata;

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
      <Route path={`/myvideos`} element={<MyVideos />} />
      {/* <Route
        path={`/dashboard/${UserDataCtx.userData.userId}`}
        element={<Dashboard />}
      />
      <Route
        path={`/dashboard/edit/${UserDataCtx.userData.userId}`}
        element={<EditDashboard />}
      /> */}
      <Route path="/Course/:courseId" element={<Course />} />
    </Routes>
  );
};

export default RoutesContainer;
