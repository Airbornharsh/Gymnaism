import { API } from "aws-amplify";
import React, { useContext, useEffect, useState } from "react";
import { v1 as uuid1 } from "uuid";
import Context from "../../Context/Context";
import pic from "../../utils/Photo/videoCheck.jpg";

const Videos = () => {
  const [videos, setVideos] = useState([]);
  const UtilCtx = useContext(Context).util;
  const UserDataCtx = useContext(Context).userdata;

  useEffect(() => {
    const data = async () => {
      try {
        const videosData = await API.get("any", "/videos");
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
      <ul className="flex flex-wrap w-[100vw] max-w-[80rem] items-end justify-start">
        {videos.map((video) => {
          return (
            <li
              key={uuid1()}
              className="bg-Color6 w-[14rem] h-[18rem] rounded-lg shadow-xl flex flex-col justify-between items-center relative mb-16 mx-4"
            >
              <div className="flex flex-col items-center justify-start ">
                <img src={pic} alt="vI" className="h-[9rem] object-cover" />
                <h3 className="text-[1.3rem] font-semibold text-Color4 pt-7">
                  {video.name}
                </h3>
                <p className="absolute top-[9.6rem] right-1 font-thin">
                  {video.duration}
                </p>
              </div>
              <button
                className="px-5 py-[0.25rem] rounded-md  bg-Color1 text-Color5 mb-3"
                onClick={async () => {
                  console.log("Started");
                  UtilCtx.setLoader(true);

                  try {
                    const TempData = UserDataCtx.userData;
                    let i = 0;
                    console.log(TempData.videos.length);
                    for (let j = 0; j < TempData.videos.length; j++) {
                      if (TempData.videos[j] === video.videoId) {
                        i = 1;
                      }
                    }

                    if (i === 0) {
                      const data = await API.put("user", "/userdata/videos", {
                        body: {
                          videoId: video.videoId,
                        },
                      });
                      console.log(data);
                      const TempVideos = [...TempData.videos, video.videoId];
                      TempData.videos = TempVideos;
                      UserDataCtx.setUserData(TempData);
                    } else {
                      alert("It is Already Added");
                    }

                    UtilCtx.setLoader(false);
                  } catch (e) {
                    UtilCtx.setLoader(false);
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

export default Videos;
