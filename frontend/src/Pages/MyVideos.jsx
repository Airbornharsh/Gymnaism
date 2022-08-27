import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { v1 as uuidv1 } from "uuid";
import VideoElement from "../Components/MyVideos/VideoElement";
import Context from "../Context/Context";
import NavBar from "../Layout/NavBar";

const MyVideos = () => {
  const UserDataCtx = useContext(Context).userdata;

  const Navigate = useNavigate();

  return (
    <div className="bg-Color5 min-h-[100vh]">
      <NavBar />
      <div className="flex flex-col items-center justify-center pt-[6rem] ">
        <h3 className="text-[3rem] mb-[4rem] font-semibold">My Videos</h3>
        <ul className="flex flex-wrap justify-start w-[100vw] max-w-[80rem] items-end">
          {UserDataCtx.userData.videos &&
            UserDataCtx.userData.videos.map((videoId) => {
              return <VideoElement key={uuidv1()} videoId={videoId} />;
            })}
        </ul>
      </div>
    </div>
  );
};

export default MyVideos;
