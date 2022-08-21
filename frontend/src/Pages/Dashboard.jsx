import React, { useContext } from "react";
import Context from "../Context/Context";
import dashboard from "../utils/Photo/dashboard.png";

const Dashboard = () => {
  const UserDataCtx = useContext(Context).userdata;

  return (
    <div className="flex items-center justify-center w-screen h-screen bg-Color1">
      <img src={dashboard} alt="dashboard" className="w-[38rem]" />
      <div className="h-[30rem] w-[24rem] bg-Color5 rounded-lg shadow-2xl mx-[10rem] flex flex-col items-center relative">
        <img
          src="https://images.pexels.com/photos/1308881/pexels-photo-1308881.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="Profile"
          className="w-[6rem] mt-4 h-[6rem] rounded-[10%] object-cover"
        />
        <ul className="flex flex-col justify-start w-[85%] mt-5">
          <li className="flex">
            <p className="text-Color4">
              <b className="mr-2 text-Color1">First Name:</b>
              {UserDataCtx.userData.firstName}
            </p>
          </li>
          <li className="flex mt-2">
            <p className="text-Color4">
              <b className="mr-2 text-Color1">Last Name:</b>
              {UserDataCtx.userData.lastName}
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
              {UserDataCtx.userData.phoneNumber}
            </p>
          </li>
          <li className="flex mt-2">
            <b className="text-Color1">Email Id:</b>
            <p className="ml-2 text-Color4">{UserDataCtx.userData.emailId}</p>
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
             {UserDataCtx.userData.membershipId}
            </p>
          </li>
        </ul>
        <button
          className="bg-Color3 py-[0.25rem] px-2 rounded text-center font-semibold text-Color1 w-[7rem] absolute bottom-4"
          //   onClick={handleSubmit}
        >
          Edit Profile
        </button>
      </div>
    </div>
  );
};

export default Dashboard;