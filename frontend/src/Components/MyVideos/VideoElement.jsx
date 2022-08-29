import { API } from "aws-amplify";
import React, {  useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { v1 as uuid1 } from "uuid";
import pic from "../../utils/Photo/videoCheck.jpg";

const VideoElement = (props) => {
  const [videoData, setVideoData] = useState({ name: "" });

  const Navigate = useNavigate();

  useEffect(() => {
    const done = async () => {
      try {
        const data = await API.get(
          "user",
          `/membership/video/${props.videoId}`
        );
        setVideoData(data);
      } catch (e) {
        console.log(e);
      }
    };
    done();
  }, [props.videoId]);

  return (
    <li
      key={uuid1()}
      className="bg-Color6 w-[14rem] h-[18rem] rounded-lg shadow-xl flex flex-col justify-between items-center relative mb-16 mx-4"
    >
      <div className="flex flex-col items-center justify-start ">
        <img src={pic} alt="vI" className="h-[9rem] object-cover" />
        <h3 className="text-[1.3rem] font-semibold text-Color4 pt-7">
          {videoData.name}
        </h3>
        <p className="absolute top-[9.6rem] right-1 font-thin">
          {videoData.duration}
        </p>
      </div>
      <button
        className="px-5 py-[0.25rem] rounded-md  bg-Color1 text-Color5 mb-3"
        onClick={async () => {
          Navigate(`/myvideos/${props.videoId}`);
        }}
      >
        Watch
      </button>
    </li>
  );
};

export default VideoElement;
