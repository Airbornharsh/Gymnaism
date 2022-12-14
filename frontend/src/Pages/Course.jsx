import { API } from "aws-amplify";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { v1 as uuid1 } from "uuid";
import Footer from "../Layout/Footer";
import NavBar from "../Layout/NavBar";
import Return from "../utils/Svgs/Return.svg";
import VideoElement from "../Components/VideoElement";
import Context from "../Context/Context";

const Course = () => {
  const [course, setCourse] = useState({ videos: [] });
  const UtilCtx = useContext(Context).util;
  const [loader, setLoader] = useState(false);
  const { courseId } = useParams();

  const Navigate = useNavigate();

  UtilCtx.setLoader(loader);

  useEffect(() => {
    const done = async () => {
      setLoader(true);
      try {
        const courseData = await API.get("any", `/course/${courseId}`);
        setCourse(courseData);
        setLoader(false);
      } catch (e) {
        console.log(e);
      }
    };

    done();
  }, [courseId]);

  const ReturnNavigation = () => {
    Navigate("/");
  };

  return (
    <div className="flex flex-col bg-Color1">
      <NavBar />
      <div className="min-h-[100vh] w-[90vw] max-w-[80rem] flex flex-col justify-start items-start pt-20 ml-[10rem]">
        <h2 className="text-Color3 text-[3rem]">Fat Loosen</h2>
        <p className="pl-1 text-Color4">{course.description}</p>

        <ul className="flex flex-col items-center justify-center pt-8">
          {course.videos.map((videoId) => {
            return (
              <VideoElement key={uuid1()} videoId={videoId} Access="false" />
            );
          })}
        </ul>
        <button
          className="py-[0.15rem] px-1 rounded text-center font-semibold text-Color1 w-[5rem] bg-Color6 flex justify-center items-center absolute top-24 left-3"
          onClick={ReturnNavigation}
        >
          <img src={Return} alt="return" />
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default Course;
