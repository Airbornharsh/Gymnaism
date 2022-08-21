import { API } from "aws-amplify";
import React, { useEffect, useState } from "react";
import pic from "../../utils/Photo/videoCheck.jpg";

const Videos = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const data = async () => {
      try {
        const videosData = await API.get("any", "/videos");
        console.log(videosData);
        setVideos(videosData);
      } catch (e) {
        console.log(e);
      }
    };

    data();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center pt-[6rem]">
      <h3 className="text-[3rem] mb-[4rem] font-semibold">Videos</h3>
      <ul className="flex flex-wrap w-[100vw] max-w-[80rem] items-endjustify-start">
        {videos.map((video) => {
          return (
            <li
              key={video.videoId}
              className="bg-Color6 w-[14rem] h-[18rem] rounded-lg shadow-xl flex flex-col justify-between items-center relative mb-16 mx-4"
            >
              <div className="flex flex-col items-center justify-start mt-3">
                <img src={pic} alt="vI" className="h-[9rem] object-cover" />
                <h3 className="text-[1.3rem] font-semibold text-Color4 pt-7">
                  {video.name}
                </h3>
                <p className="absolute top-[9.6rem] right-1 font-thin">
                  {video.duration}
                </p>
              </div>
              <button className="px-5 py-[0.25rem] rounded-md  bg-Color1 text-Color5 mb-3">
                ADD
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Videos;
