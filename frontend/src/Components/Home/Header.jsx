import React from "react";
import { useNavigate } from "react-router-dom";
import pic from "../../utils/Svgs/Tredmill.svg";

const Header = () => {
  const Navigate = useNavigate();

  const SignUpNavigation = () => {
    Navigate("/signup");
  };

  const LoginNavigation = () => {
    Navigate("/login");
  };

  return (
    <div className="bg-Color1 h-[calc(100vh-5.5rem)] flex justify-center items-center">
      <img src={pic} alt="tredMill" className="max-w-[35rem] w-[50vw] mr-20" />
      <div className="ml-[6rem]">
        <p className="font-medium text-Color2">TIME TO LEVEL UP THE FITNESS</p>
        <p className="text-Color4 text-[2.8rem] w-[25rem]">
          Exercise is the Key to a Healthy Lifestyle
        </p>
        <div className="mt-6">
          {true ? (
            <div>
              <button
                className="bg-Color3 ml-3 py-[0.25rem] px-2 rounded text-center font-semibold text-Color1 w-[5rem]"
                onClick={LoginNavigation}
              >
                Login
              </button>
              <button
                className="bg-Color3 ml-12 py-[0.25rem] px-2 rounded text-center font-semibold text-Color1 w-[5rem]"
                onClick={SignUpNavigation}
              >
                Sign Up
              </button>
            </div>
          ) : (
            <p></p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
