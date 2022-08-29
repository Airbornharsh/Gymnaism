import React, { useState, useEffect } from "react";
import { API } from "aws-amplify";
import pic from "../../utils/Svgs/Tredmill.svg";
import addSvg from "../../utils/Svgs/+.svg";

const Workouts = () => {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    const data = async () => {
      try {
        const workoutsData = await API.get("any", "/workouts");
        setWorkouts(workoutsData);
      } catch (e) {
        console.log(e);
      }
    };

    data();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center pt-[6rem] pb-24">
      <h3 className="text-[3rem] mb-[4rem] font-semibold">Workouts</h3>
      <ul className="flex flex-wrap justify-center w-[90vw] max-w-[75rem] items-end bg-Color6 px-8">
        {workouts.map((workout) => {
          return (
            <li
              key={workout.videoId}
              className="bg-Color6 w-[14rem] h-[18rem] rounded-lg shadow-xl flex flex-col justify-between items-center relative mb-16 mx-4"
            >
              <div className="flex flex-col items-center justify-start mt-3">
                <img src={pic} alt="vI" className="h-[9rem] object-cover" />
                <h3 className="text-[1.3rem] font-semibold text-Color4 pt-7">
                  {workout.name}
                </h3>
                <p className="absolute top-[9.6rem] right-1 font-thin">
                  {workout.duration}
                </p>
              </div>
              <button className="px-5 py-[0.25rem] rounded-md  bg-Color1 text-Color5 mb-3">
                ADD
              </button>
            </li>
          );
        })}
        <li className="bg-Color4 w-[12rem] h-[13.6rem] shadow-md flex flex-col  items-center relative mb-16 mx-4 mt-12">
          <img src={pic} alt="workout" className="pt-2 h-14" />
          <div className="pt-2 text-Color5">
            <p className="text-[2.5rem]">34</p>
            <p className="text-[1.4rem]">MIN</p>
          </div>
          <p className="absolute bottom-2 text-[1.5rem] font-semibold text-Color1">
            PULL UP
          </p>
        </li>
        <li className="bg-Color4 w-[12rem] h-[13.6rem] shadow-md flex flex-col  items-center relative mb-16 mx-4 mt-12">
          <img src={pic} alt="workout" className="pt-2 h-14" />
          <div className="pt-2 text-Color5">
            <p className="text-[2.5rem]">34</p>
            <p className="text-[1.4rem]">MIN</p>
          </div>
          <p className="absolute bottom-2 text-[1.5rem] font-semibold text-Color1">
            PULL UP
          </p>
        </li>
        <li className="bg-Color4 w-[12rem] h-[13.6rem] shadow-md flex flex-col  items-center relative mb-16 mx-4 mt-12">
          <img src={pic} alt="workout" className="pt-2 h-14" />
          <div className="pt-2 text-Color5">
            <p className="text-[2.5rem]">34</p>
            <p className="text-[1.4rem]">MIN</p>
          </div>
          <p className="absolute bottom-2 text-[1.5rem] font-semibold text-Color1">
            PULL UP
          </p>
        </li>
        <li className="bg-Color4 w-[12rem] h-[13.6rem] shadow-md flex flex-col  items-center relative mb-16 mx-4 mt-12">
          <img src={pic} alt="workout" className="pt-2 h-14" />
          <div className="pt-2 text-Color5">
            <p className="text-[2.5rem]">34</p>
            <p className="text-[1.4rem]">MIN</p>
          </div>
          <p className="absolute bottom-2 text-[1.5rem] font-semibold text-Color1">
            PULL UP
          </p>
        </li>
        <li className="bg-Color4 w-[12rem] h-[13.6rem] shadow-md flex flex-col  items-center relative mb-16 mx-4 mt-12">
          <img src={pic} alt="workout" className="pt-2 h-14" />
          <div className="pt-2 text-Color5">
            <p className="text-[2.5rem]">34</p>
            <p className="text-[1.4rem]">MIN</p>
          </div>
          <p className="absolute bottom-2 text-[1.5rem] font-semibold text-Color1">
            PULL UP
          </p>
        </li>
        <li className="bg-Color4 w-[12rem] h-[13.6rem] shadow-md flex flex-col  items-center relative mb-16 mx-4 mt-12">
          <img src={pic} alt="workout" className="pt-2 h-14" />
          <div className="pt-2 text-Color5">
            <p className="text-[2.5rem]">34</p>
            <p className="text-[1.4rem]">MIN</p>
          </div>
          <p className="absolute bottom-2 text-[1.5rem] font-semibold text-Color1">
            PULL UP
          </p>
        </li>
        <li className="bg-Color4 w-[12rem] h-[13.6rem] shadow-md flex flex-col justify-center items-center relative mb-16 mx-4 mt-12">
          <img src={addSvg} alt="add" />
        </li>
      </ul>
    </div>
  );
};

export default Workouts;
