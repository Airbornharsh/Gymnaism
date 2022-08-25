import { API } from "aws-amplify";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Context from "../../Context/Context";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const UtilCtx = useContext(Context).util;
  const Navigate = useNavigate();

  useEffect(() => {
    const data = async () => {
      try {
        const coursesData = await API.get("any", "/courses");
        setCourses(coursesData);
      } catch (e) {
        console.log(e);
      }
    };

    data();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center pt-[6rem]">
      <h3 className="text-[3rem] mb-[4rem] font-semibold">Courses</h3>
      <ul className="flex flex-wrap justify-around w-[100vw] max-w-[80rem] items-end">
        {courses.map((course) => {
          return (
            <li
              key={course.courseId}
              className="bg-Color6 w-[14rem] h-[18rem] rounded-lg shadow-xl flex flex-col justify-between items-center relative mb-16 mx-4"
            >
              <div
                className="flex flex-col items-center justify-start mt-3 "
                onClick={() => {
                  Navigate(`/course/${course.courseId}`);
                }}
              >
                <h3 className="text-[1.3rem] font-semibold text-Color1">
                  {course.name}
                </h3>
                <p className="w-[80%] mt-1 text-Color4 overflow-hidden h-[10rem]">
                  {course.description}
                </p>
                <p className="w-[80%] text-[0.7rem] absolute bottom-14">
                  By {course.by}
                </p>
              </div>
              <button
                className="px-5 py-[0.25rem] rounded-md  bg-Color1 text-Color5 mb-3"
                onClick={async () => {
                  console.log("Started");
                  UtilCtx.setLoader(true);
                  try {
                    const data = await API.put("user", "/userdata/courses", {
                      body: {
                        courseId: course.courseId,
                      },
                    });
                    console.log(data);
                    UtilCtx.setLoader(false);
                  } catch (e) {
                    console.log(e);
                  }
                }}
              >
                ADD
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Courses;
