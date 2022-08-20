import React from "react";
import Videos from "../Components/Features/Videos";
import Workouts from "../Components/Features/Workouts";
import Footer from "../Layout/Footer";
import NavBar from "../Layout/NavBar";

const Features = () => {
  return (
    <div>
      <NavBar />
      <div className="min-h-screen bg-Color5">
        <Videos />
        <Workouts />
      </div>
      <Footer />
    </div>
  );
};

export default Features;
