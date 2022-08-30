import { API, Storage } from "aws-amplify";
import React, { useContext, useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Footer from "../Layout/Footer";
import NavBar from "../Layout/NavBar";
import Return from "../utils/Svgs/Return.svg";
import Context from "../Context/Context";

const MyVideo = () => {
  const [video, setVideo] = useState({});
  const [videoUrl, setVideoUrl] = useState("");
  const UtilCtx = useRef(useContext(Context).util);
  const { videoId } = useParams();

  const Navigate = useNavigate();

  useEffect(() => {
    const done = async () => {
      UtilCtx.current.setLoader(true);
      try {
        const videoData = await API.get("user", `/membership/video/${videoId}`);
        const videoUrl = await Storage.get(`video/${videoData.videoS3}`, {
          level: "public",
          region: "ap-south-1",
          bucket: "harshairborn-gymnaism-me-useraccessbucketc6094d94-jlf4r2t4q6wz",
        });
        setVideo(videoData);
        setVideoUrl(videoUrl);
        UtilCtx.current.setLoader(false);
      } catch (e) {
        console.log(e);
      }
    };

    done();
  }, [videoId]);

  const ReturnNavigation = () => {
    Navigate("/myvideos");
  };

  return (
    <div className="flex flex-col bg-Color1">
      <NavBar />
      <div className="min-h-[100vh] w-[90vw] max-w-[80rem] flex flex-col justify-start items-start pt-20 ml-[10rem]">
        {videoUrl && (
          // <iframe src={videoUrl} frameborder="0" title={video.name} />
          <video src={videoUrl} autoPlay controls className="w-[80%] h-[45%]" />
        )}
        <h2 className="text-Color3 text-[1.4rem] font-semibold mt-5">
          {video.name}
        </h2>
        <p className="pl-1 text-Color4">{video.description}</p>
        <button
          className="py-[0.15rem] px-1 rounded text-center font-semibold text-Color1 w-[5rem] bg-Color6 flex justify-center items-center absolute top-24 left-3 z-30"
          onClick={ReturnNavigation}
        >
          <img src={Return} alt="return" />
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default MyVideo;
