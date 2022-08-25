import React, { useEffect, useState } from "react";
import { API } from "aws-amplify";
import videoPreview from "../utils/Photo/videoPreview.png";

const VideoElement = (props) => {
  const [videoData, setVideoData] = useState({});

  useEffect(() => {
    const done = async () => {
      try {
        const videoData = await API.get("any", `/video/${props.videoId}`);
        console.log(videoData);
        setVideoData(videoData);
      } catch (e) {
        console.log(e);
      }
    };
    done();
  }, [props.videoId]);

  return (
    <li
      key={props.videoId}
      className="w-[90vw] max-w-[70rem] bg-Color5 h-24 flex items-center"
    >
      <img src={videoPreview} alt="Video Preview" className="h-24 w-36 " />
      <div className="flex flex-col items-start ml-3 w-[78%] max-w-[]">
        <h3 className="text-Color3 text-[1.5rem]"> {videoData.name}</h3>
        <p className="h-12 pr-5 overflow-hidden text-Color4">
          {videoData.description}
        </p>
      </div>
      <span className="w-[0.15rem] h-16 bg-Color3"></span>
      <span className="flex flex-col items-center justify-center ml-5">
        <p>{videoData.duration}</p>
        <p className="text-[1.3rem]">MIN</p>
      </span>
    </li>
  );
};

export default VideoElement;
