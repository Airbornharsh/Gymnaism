import React, { useContext } from "react";
import { v1 as uuidv1 } from "uuid";
import CourseElement from "../Components/MyCourses/CourseElement";
import Context from "../Context/Context";
import NavBar from "../Layout/NavBar";

const MyCourses = () => {
  const UserDataCtx = useContext(Context).userdata;

  return (
    <div>
      <NavBar />
      <div className="flex flex-col items-center justify-center pt-[6rem]">
        <h3 className="text-[3rem] mb-[4rem] font-semibold">My Courses</h3>
        <ul className="flex flex-wrap justify-around w-[100vw] max-w-[80rem] items-end">
          {(UserDataCtx.userData.courses || []).map((courseId) => {
            return <CourseElement key={uuidv1()} courseId={courseId} />;
          })}
        </ul>
      </div>
    </div>
  );
};

export default MyCourses;
