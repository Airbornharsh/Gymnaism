import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Context from "../../Context/Context";
import pic from "../../utils/Svgs/Tredmill.svg";

const Header = () => {
  const UserCtx = useContext(Context).user;
  const UserDataCtx = useContext(Context).userdata;

  const Navigate = useNavigate();

  const SignUpNavigation = () => {
    Navigate("/signup");
  };

  const LoginNavigation = () => {
    Navigate("/login");
  };

  return (
    <div className="bg-Color1 min-h-[calc(100vh-5.5rem)] flex justify-center items-center max1000:flex-col">
      <img src={pic} alt="tredMill" className="max-w-[30rem] w-[50vw] mr-20 pb-10 max1000:mr-0 max800:w-[80vw]" />
      <div className="ml-[5rem] pb-10 max1000:m-0 max1000:ml-0">
        <p className="font-medium text-Color2 max400:text-[0.8rem] BalooDa2Font">TIME TO LEVEL UP THE FITNESS</p>
        <p className="text-Color4 text-[2.8rem] w-[25rem] max400:text-[2rem] max1000:w-[90vw] BubblegumSansFont">
          Exercise is the Key to a Healthy Lifestyle
        </p>
        <div className="mt-6">
          {!UserCtx.isLogged ? (
            <div>
              <button
                className="bg-Color3 ml-3 py-[0.25rem] px-2 rounded text-center font-semibold text-Color1 w-[5rem] max500:ml-0"
                onClick={LoginNavigation}
              >
                Login
              </button>
              <button
                className="bg-Color3 ml-12 py-[0.25rem] px-2 rounded text-center font-semibold text-Color1 w-[5rem] max500:ml-2"
                onClick={SignUpNavigation}
              >
                Sign Up
              </button>
            </div>
          ) : (
            <span className="flex ">
              <pre className="font-sans text-2xl font-semibold text-Color5 max400:text-xl ">
                Hello{" "}
              </pre>
              <p className="font-sans text-2xl font-semibold text-Color3 max400:text-xl ">
                {UserDataCtx.userData &&
                  UserDataCtx.userData.firstName}
              </p>
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
