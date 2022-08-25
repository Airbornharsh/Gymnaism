import { API } from "aws-amplify";
import React, { useEffect, useState } from "react";

const CourseElement = (props) => {
  const [courseData, setCourseData] = useState({
    by: "Santosh Pati",
    courseId: "course3",
    description: "This is a course where you can gain Muscles",
    imageS3: "",
    name: "Fat Loosen",
    page: 1,
    videos: [],
  });

  // useEffect(() => {
  //   const done = async () => {
  //     try {
  //       const data = await API.get(
  //         "user",
  //         `/membership/course/${props.courseId}`
  //       );
  //       console.log(data);
  //     } catch (e) {
  //       console.log(e);
  //     }
  //   };
  //   done();
  // }, [props.courseId]);

  return <li>{props.courseId}</li>;
};

export default CourseElement;
