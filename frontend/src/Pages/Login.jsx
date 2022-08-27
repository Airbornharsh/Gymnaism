import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { API, Auth } from "aws-amplify";
import Context from "../Context/Context";
import Return from "../utils/Svgs/Return.svg";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const UserCtx = useContext(Context).user;
  const UtilCtx = useContext(Context).util;
  const UserDataCtx = useContext(Context).userdata;
  // const [isValid, setIsValid] = useState(false);

  const Navigate = useNavigate();

  if (UserCtx.isLogged) {
    Navigate("/");
  }

  const validateForm = () => {
    return email.length > 0 && password.length > 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    UtilCtx.setLoader(true);

    try {
      await Auth.signIn(email, password);
      const userdata = await API.get("user", "/userdata");
      UserDataCtx.setUserData(userdata);
      UserCtx.setIsLogged(true);
      UtilCtx.setLoader(false);
      Navigate("/");
    } catch (e) {
      console.log(e);
      UtilCtx.setLoader(false);
    }
  };

  const ReturnNavigation = () => {
    Navigate("/");
  };

  return (
    <div className="flex items-center justify-center w-screen h-screen bg-Color1">
      <div className="min-w-[15rem] rounded-md w-[25rem] max-w-[30rem] z-10">
        <div className="flex flex-col items-center justify-center mt-12"></div>
        <form
          className="flex flex-col items-center pt-3 pb-5"
          onSubmit={handleSubmit}
        >
          <ul>
            <li className="flex flex-col">
              <label
                htmlFor="email"
                className="text-[0.9rem] font-bold w-[20rem] pl-1 text-Color5"
              >
                Email Address
              </label>
              <input
                autoFocus
                type="email"
                className="p-2 text-black rounded bg-Color5 w-[20rem] h-10 mb-4"
                placeholder="Email Address"
                autoComplete="current-password"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </li>
            <li className="flex flex-col">
              <label
                htmlFor="email"
                className="text-[0.9rem] font-bold w-[20rem] pl-1 text-Color5"
              >
                Password
              </label>
              <input
                type="password"
                className="p-2 rounded text-black bg-Color5 w-[20rem] h-10 mb-4"
                placeholder="Password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </li>
          </ul>
          <button
            className="bg-Color3 py-[0.25rem] px-2 rounded text-center font-semibold text-Color1 w-[5rem]"
            disabled={!validateForm()}
            onClick={handleSubmit}
          >
            Sign In
          </button>
          <p className="text-black text-[0.7rem] pt-2">
            <Link to="/user/reset/password" className="text-Color4">
              {" "}
              Forgotten Your Password
            </Link>
          </p>

          <p className="text-Color6 text-[0.7rem] pt-2">
            I Don't Have a Account!
            <Link to="/signup" className="text-Color4">
              {" "}
              Sign Up
            </Link>
          </p>
        </form>
      </div>
      <button
        className="py-[0.15rem] px-1 rounded text-center font-semibold text-Color1 w-[5rem] bg-Color6 flex justify-center items-center absolute top-3 left-3"
        onClick={ReturnNavigation}
      >
        <img src={Return} alt="return" />
      </button>
    </div>
  );
};

export default Login;
