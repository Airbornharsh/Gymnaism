import { API } from "aws-amplify";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const CourseElement = (props) => {
  const [courseData, setCourseData] = useState({});
  const [loader, setLoader] = useState(false);

  const Navigate = useNavigate();

  useEffect(() => {
    setLoader(true);
    const done = async () => {
      try {
        const data = await API.get(
          "user",
          `/membership/course/${props.courseId}`
        );
        setCourseData(data);
        setLoader(false);
      } catch (e) {
        console.log(e);
      }
    };
    done();
  }, [props.courseId]);

  return (
    <li className="bg-Color6 w-[14rem] h-[18rem] rounded-lg shadow-xl flex flex-col justify-between items-center relative mb-16 mx-4 hover:scale-105 hover:shadow-2xl">
      {loader ? (
        <div className="absolute bg-[rgba(0,0,0,0.2)] rounded-lg z-20 flex justify-center items-center w-[14rem] h-[18rem]">
          <span className="loader">
            <AiOutlineLoading3Quarters
              size="5rem"
              color="#46AF72"
              className="ml-2 rotation"
            />
          </span>
        </div>
      ) : (
        <div className="bg-Color6 w-[14rem] h-[18rem] rounded-lg shadow-xl flex flex-col justify-between items-center relative  ">
          <div className="flex flex-col items-center justify-start mt-3 ">
            <h3 className="text-[1.3rem] font-semibold text-Color1">
              {courseData.name}
            </h3>
            <p className="w-[80%] mt-1 text-Color4 overflow-hidden h-[10rem]">
              {courseData.description}
            </p>
            <p className="w-[80%] text-[0.7rem] absolute bottom-14">
              By {courseData.by}
            </p>
          </div>
          <button
            className="px-5 py-[0.25rem] rounded-md  bg-Color1 text-Color5 mb-3"
            onClick={() => {
              Navigate(`/mycourses/${courseData.courseId}`);
            }}
          >
            VIEW
          </button>
        </div>
      )}
    </li>
  );
};

export default CourseElement;
