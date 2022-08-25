import { API } from "aws-amplify";
import React, { useEffect, useState } from "react";

const VideoElement = (props) => {
  const [courseData, setCourseData] = useState({});

//   useEffect(() => {
//     const done = async () => {
//       try {
//         const data = await API.get(
//           "user",
//           `/membership/video/${props.courseId}`
//         );
//         console.log(data);
//       } catch (e) {
//         console.log(e);
//       }
//     };
//     done();
//   }, [props.courseId]);

  return <li>{props.videoId}</li>;
};

export default VideoElement;
