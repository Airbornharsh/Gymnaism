import { Storage } from "aws-amplify";
import React, { useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Context from "../Context/Context";
import dashboard from "../utils/Photo/dashboard.png";

const Dashboard = () => {
  const UserDataCtx = useRef(useContext(Context).userdata);
  const UtilCtx = useRef(useContext(Context).util);
  const [profilePhotoUrl, setProfilePhotoUrl] = useState(
    UserDataCtx.current.userData.profilePhotoS3
  );

  const Navigate = useNavigate();

  const editDashboardHandler = () => {
    Navigate(`/dashboard/edit`);
  };

  useEffect(() => {
    UtilCtx.current.setLoader(true);

    const onLoad = async () => {
      try {
        const profilePhotoUrl = await Storage.get(
          `${UserDataCtx.current.userData.profilePhotoS3}`,
          {
            level: "private",
            region: "us-east-1",
            bucket:
              "harsh-gym-mediastack-useraccessbucketc6094d94-pqxiz1l38rl2",
          }
        );
        setProfilePhotoUrl(profilePhotoUrl);
        UtilCtx.current.setLoader(false);
      } catch (e) {
        console.log(e);
        UtilCtx.current.setLoader(false);
      }
    };

    onLoad();
  }, []);

  return (
    <div className="flex items-center justify-center w-screen h-screen bg-Color1">
      <img src={dashboard} alt="dashboard" className="w-[38rem]" />
      <div className="h-[30rem] w-[24rem] bg-Color5 rounded-lg shadow-2xl mx-[10rem] flex flex-col items-center relative">
        <img
          src={profilePhotoUrl}
          alt="profile"
          className="w-[6rem] mt-4 h-[6rem] rounded-[10%] object-cover"
        />
        <ul className="flex flex-col justify-start w-[85%] mt-5">
          <li className="flex">
            <p className="text-Color4">
              <b className="mr-2 text-Color1">First Name:</b>
              {UserDataCtx.current.userData.firstName}
            </p>
          </li>
          <li className="flex mt-2">
            <p className="text-Color4">
              <b className="mr-2 text-Color1">Last Name:</b>
              {UserDataCtx.current.userData.lastName}
            </p>
          </li>
          <li className="flex mt-2">
            <p className="text-Color4">
              <b className="mr-2 text-Color1">Gender:</b>
              Male
            </p>
          </li>
          <li className="flex mt-2">
            <p className="text-Color4">
              <b className="mr-2 text-Color1">Phone Number:</b>
              {UserDataCtx.current.userData.phoneNumber}
            </p>
          </li>
          <li className="flex mt-2">
            <b className="text-Color1">Email Id:</b>
            <p className="ml-2 text-Color4">
              {UserDataCtx.current.userData.emailId}
            </p>
          </li>
          <li className="flex mt-2">
            <b className="text-Color1">Address:</b>
            <p className="ml-2 text-Color4">
              611 N 2nd St,Philadelphia, Pennsylvania,United States
            </p>
          </li>
          <li className="flex mt-2">
            <b className="text-Color1">Membership:</b>
            <p className="ml-2 text-Color4">
              {UserDataCtx.current.userData.membershipId}
            </p>
          </li>
          <li className="flex mt-2">
            <b className="text-Color1">Joined At:</b>
            <p className="ml-2 text-Color4">
              {new Date(
                UserDataCtx.current.userData.createdAt
              ).toLocaleDateString("en-us", {
                weekday: "long",
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </p>
          </li>
        </ul>
        <button
          className="bg-Color3 py-[0.25rem] px-2 rounded text-center font-semibold text-Color1 w-[7rem] absolute bottom-4"
          onClick={editDashboardHandler}
        >
          Edit Profile
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
