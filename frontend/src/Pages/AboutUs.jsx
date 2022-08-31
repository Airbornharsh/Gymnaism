import React from "react";
import Footer from "../Layout/Footer";
import NavBar from "../Layout/NavBar";
import profilePhoto from "../utils/Photo/profilePhoto.png";

const AboutUs = () => {
  return (
    <div className="bg-Color5">
      <NavBar />
      <div className="flex flex-col items-center ">
        <div className="min-h-screen  w-[90vw] max-w-[90rem]">
          <div className="flex flex-wrap items-center justify-around px-8 pt-24">
            <div className="BubblegumSansFont text-[2rem] max400:text-[1.5rem]">
              <span>
                <p>Hey Guys</p>
              </span>
              <span className="flex">
                <p>I am </p>
                <pre className="BubblegumSansFont text-Color3">
                  {" "}
                  Harsh Keshri
                </pre>
              </span>
              <span className="flex">
                <p>The Owner of </p>
                <pre className="BubblegumSansFont text-Color3"> GYMNAISM</pre>
              </span>
            </div>
            <img
              src={profilePhoto}
              alt="ProfilePhoto"
              className="w-[20rem] max800:mt-10 mx-8"
            />
          </div>
          <div className="flex flex-col items-center justify-center py-[6rem] ">
            <h3 className="text-[3rem] mb-[5rem] font-semibold">Trainer</h3>
            <ul className="w-[100%]">
              <li className="flex flex-row-reverse flex-wrap items-center justify-around px-12 pt-4">
                <div className="BubblegumSansFont text-[2rem] max400:text-[1.5rem]">
                  <span>
                    <h2 className="text-Color3">NRUSINGH PRASAD SWAIN</h2>
                    <p className="max-w-[30rem] text-[1.4rem]">
                      You may hate every minute of your training, but you
                      shouldn’t quit. You will suffer now but you will live the
                      rest of your life as a champion.
                    </p>
                  </span>
                </div>
                <img
                  src={profilePhoto}
                  alt="ProfilePhoto"
                  className="w-[17rem] max800:mt-10 mx-8"
                />
              </li>
              <li className="flex flex-wrap items-center justify-around px-12 pt-20">
                <div className="BubblegumSansFont text-[2rem] max400:text-[1.5rem]">
                  <span>
                    <h2 className="text-Color3">NRUSINGH PRASAD SWAIN</h2>
                    <p className="max-w-[30rem] text-[1.4rem]">
                      You may hate every minute of your training, but you
                      shouldn’t quit. You will suffer now but you will live the
                      rest of your life as a champion.
                    </p>
                  </span>
                </div>
                <img
                  src={profilePhoto}
                  alt="ProfilePhoto"
                  className="w-[17rem] max800:mt-10 mx-8"
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
