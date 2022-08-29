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
    if (UserDataCtx.current.userData.profilePhotoS3) {
      onLoad();
    } else if (UserDataCtx.current.userData.profilePhotoUrl) {
      setProfilePhotoUrl(UserDataCtx.current.userData.profilePhotoUrl);
    }

    UtilCtx.current.setLoader(false);
  }, []);

  return (
    <div className="flex items-center justify-center w-screen h-screen bg-Color1 ">
      <img
        src={dashboard}
        alt="dashboard"
        className="w-[38rem] max1100:hidden"
      />
      <div className="min-h-[30rem] w-[24rem] bg-Color5 rounded-lg shadow-2xl mx-[5rem] flex flex-col items-center relative max500:mx-5 pb-16">
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
              {UserDataCtx.current.userData.gender}
            </p>
          </li>
          <li className="flex mt-2">
            <p className="text-Color4">
              <b className="mr-2 text-Color1">Phone Number:</b>
              {UserDataCtx.current.userData.phoneNumber}
            </p>
          </li>
          <li className="flex mt-2 w-[90%] overflow-auto">
            <p className=" text-Color4">
              <b className="text-Color1">Email Id: </b>
              {UserDataCtx.current.userData.emailId}
            </p>
          </li>
          <li className="flex mt-2">
            <p className=" text-Color4">
              <b className="text-Color1">Address: </b>
              {UserDataCtx.current.userData.address}
            </p>
          </li>
          <li className="flex mt-2">
            <p className="text-Color4">
              <b className="text-Color1">Membership: </b>
              {UserDataCtx.current.userData.membershipId}
            </p>
          </li>
          <li className="flex mt-2">
            <p className=" text-Color4">
              <b className="text-Color1">Joined At: </b>
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
