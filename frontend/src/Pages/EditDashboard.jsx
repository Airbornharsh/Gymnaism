import { API } from "aws-amplify";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Context from "../Context/Context";
import UserDataContextUpdater from "../utils/UserDataContextUpdater";

const EditDashboard = () => {
  const UserDataCtx = useContext(Context).userdata;
  const [firstName, setFirstName] = useState(UserDataCtx.userData.firstName);
  const [lastName, setLastName] = useState(UserDataCtx.userData.lastName);
  const [phoneNumber, setPhoneNumber] = useState(
    UserDataCtx.userData.phoneNumber
  );
  const [gender, setGender] = useState("Male");
  const [address, setAddress] = useState(
    "611 N 2nd St,Philadelphia, Pennsylvania,United States"
  );

  const Navigate = useNavigate();

  const UpdateHandler = async (e) => {
    e.preventDefault();

    try {
      await API.put("user", "/userdata/basic", {
        body: {
          firstName: firstName,
          lastName: lastName,
          phoneNumber: phoneNumber,
        },
      });
      UserDataContextUpdater();
      Navigate("/");
    } catch (e) {}
  };

  return (
    <div className="flex justify-center w-screen h-screen bg-Color1">
      <form className="w-[80vw] max-w-[70rem] mt-[10rem] flex flex-col items-center">
        <ul className="flex flex-wrap items-start justify-center">
          <li className="flex flex-col my-5 mx-7">
            <label className="text-Color3 ">First Name</label>
            <input
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
              className="w-[15rem] pl-1 rounded-sm text-Color4"
            />
          </li>
          <li className="flex flex-col my-5 mx-7">
            <label className="text-Color3 ">Last Name</label>
            <input
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value);
              }}
              className="w-[15rem] pl-1 rounded-sm text-Color4"
            />
          </li>
          <li className="flex flex-col my-5 mx-7">
            <label className="text-Color3 ">Phone Number</label>
            <input
              value={phoneNumber}
              onChange={(e) => {
                setPhoneNumber(e.target.value);
              }}
              className="w-[15rem] pl-1 rounded-sm text-Color4"
            />
          </li>
          <li className="flex flex-col my-5 mx-7">
            <label className="text-Color3 ">Gender</label>
            <input
              value={gender}
              onChange={(e) => {
                setGender(e.target.value);
              }}
              className="w-[15rem] pl-1 rounded-sm text-Color4"
            />
          </li>
          <li className="flex flex-col my-5 mx-7">
            <label className="text-Color3 ">Address</label>
            <input
              value={address}
              onChange={(e) => {
                setAddress(e.target.value);
              }}
              className="w-[15rem] pl-1 rounded-sm text-Color4"
            />
          </li>
        </ul>
        <button
          className="bg-Color3 py-[0.25rem] px-2 rounded text-center font-semibold text-Color1 w-[5rem] mt-8"
          onClick={UpdateHandler}
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default EditDashboard;
