import { API } from "aws-amplify";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Footer from "../Layout/Footer";
import NavBar from "../Layout/NavBar";
import Return from "../utils/Svgs/Return.svg";
import VideoElement from "../Components/VideoElement";

const Course = () => {
  const [course, setCourse] = useState({ videos: [] });
  const { courseId } = useParams();
  console.log(courseId);

  const Navigate = useNavigate();

  useEffect(() => {
    const done = async () => {
      try {
        const courseData = await API.get("any", `/course/${courseId}`);
        setCourse(courseData);
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
    <div className="bg-Color1 flex flex-col justify-center items-center">
      <NavBar />
      <div className="min-h-[100vh] w-[90vw] max-w-[80rem] flex flex-col justify-start items-start pt-20">
        <h2 className="text-Color3 text-[3rem]">Fat Loosen</h2>
        <p className="text-Color4 pl-1">{course.description}</p>

        <ul className="flex flex-col justify-center items-center pt-8">
          {course.videos.map((video) => {
            return <VideoElement key={video.videoId} videoId={video.videoId} />;
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
