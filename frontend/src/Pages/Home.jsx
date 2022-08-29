import React from "react";
import Footer from "../Layout/Footer";
import NavBar from "../Layout/NavBar";
import why1 from "../utils/Svgs/1.svg";
import why2 from "../utils/Svgs/2.svg";
import why3 from "../utils/Svgs/3.svg";
import why4 from "../utils/Svgs/4.svg";
import Membership from "../Components/Home/Membership";
import Courses from "../Components/Home/Courses";
import Header from "../Components/Home/Header";

const Home = () => {

  // const data = [{
  //   name: "Equipments",
  //   src: why4,
  // description:"We provide almost all of the equipments you need for your
  // training"}]
  
  return (
    <div>
      <NavBar />
      <Header />
      <div className="bg-Color5">
        <div className="flex flex-col items-center justify-center pt-[6rem]">
          <h3 className="text-[3rem] mb-24 font-semibold max500:text-[2rem]">Why To Join Us?</h3>
          <ul className="flex flex-wrap justify-around w-[90vw] max-w-[70rem] items-start">
            <li className="w-[11rem] flex flex-col justify-center items-start mb-5 ">
              <img src={why4} className="h-[5.5rem] mb-2" alt="Gym" />
              <h5 className="font-semibold text-[1.3rem] mb-2">Equipments</h5>
              <p>
                We provide almost all of the equipments you need for your
                training
              </p>
            </li>
            <li className="w-[11rem] flex flex-col justify-center items-start mb-5">
              <img src={why3} className="h-[5.5rem] mb-2" alt="Gym" />
              <h5 className="font-semibold text-[1.3rem] mb-2">
                Online Videos
              </h5>
              <p>We provide you online videos for gyming at Home or anywhere</p>
            </li>

            <li className="w-[11rem] flex flex-col justify-center items-start mb-5">
              <img src={why1} className="h-[5.5rem] mb-2" alt="Gym" />
              <h5 className="font-semibold text-[1.3rem] mb-2">
                Personal Trainer
              </h5>
              <p>
                There will be personal Trainer at our offline centre for you
              </p>
            </li>
            <li className="mb-5 w-[11rem] flex flex-col justify-center items-start">
              <img src={why2} className="h-[5.5rem] mb-2" alt="Gym" />
              <h5 className="font-semibold text-[1.3rem] mb-2">
                Steam and Sauna
              </h5>
              <p>
                We provide Sauna which will help you relax your body after
                WorkOut
              </p>
            </li>
          </ul>
        </div>
        <Membership />
        <Courses />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
