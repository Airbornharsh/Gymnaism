import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { API, Auth } from "aws-amplify";
import Context from "../Context/Context";
import Return from "../utils/Svgs/Return.svg";

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmationCode, setConfirmationCode] = useState("");
  const [newUser, setNewUser] = useState(null);
  const UserCtx = useContext(Context);

  const Navigate = useNavigate();

  const validateForm = () => {
    // return (
    //   firstName.length > 0 &&
    //   lastName.length > 0 &&
    //   phoneNumber.length > 0 &&
    //   email.length > 0 &&
    //   password.length > 0 &&
    //   password === confirmPassword
    // );
    return true;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const newUserCheck = await Auth.signUp({
        username: email,
        password: password,
      });
      setNewUser(newUserCheck);
    } catch (e) {
      alert(e.message);
    }
  };

  const handleConfirmationSubmit = async (event) => {
    event.preventDefault();
    try {
      await Auth.confirmSignUp(email, confirmationCode);
      await Auth.signIn(email, password);
      const data = await API.post("user", "/userdata", {
        body: {
          emailId: email,
          firstName: firstName,
          lastName: lastName,
          phoneNumber: phoneNumber,
          profilePhotoS3: "Photo",
        },
      });
      console.log(data);
      UserCtx.setIsLogged(true);
      Navigate("/");
    } catch (e) {
      // alert(e);
    }
  };

  const ReturnNavigation = () => {
    Navigate("/");
  };

  const renderForm = () => {
    return (
      <div>
        <div className="min-w-[15rem] rounded-md w-[25rem] max-w-[30rem] z-10">
          <form
            className="flex flex-col items-center pt-3 pb-5"
            onSubmit={handleSubmit}
          >
            <ul>
              <li className="flex flex-col">
                <label
                  htmlFor="First Name"
                  className="text-[0.9rem] font-bold w-[20rem] pl-1 text-Color4"
                >
                  First Name
                </label>
                <input
                  autoFocus
                  type="text"
                  className="p-2 text-black rounded bg-Color5 w-[20rem] h-10 mb-4"
                  placeholder="First Name"
                  value={firstName}
                  onChange={(e) => {
                    setFirstName(e.target.value);
                  }}
                />
              </li>
              <li className="flex flex-col">
                <label
                  htmlFor="Last Name"
                  className="text-[0.9rem] font-bold w-[20rem] pl-1 text-Color4"
                >
                  Last Name
                </label>
                <input
                  autoFocus
                  type="text"
                  className="p-2 text-black rounded bg-Color5 w-[20rem] h-10 mb-4"
                  placeholder="Last Name"
                  autoComplete="current-password"
                  value={lastName}
                  onChange={(e) => {
                    setLastName(e.target.value);
                  }}
                />
              </li>
              <li className="flex flex-col">
                <label
                  htmlFor="Phone Number"
                  className="text-[0.9rem] font-bold w-[20rem] pl-1 text-Color4"
                >
                  Phone Number
                </label>
                <input
                  autoFocus
                  type="number"
                  className="p-2 text-black rounded bg-Color5 w-[20rem] h-10 mb-4"
                  placeholder="Phone Number"
                  autoComplete="current-password"
                  value={phoneNumber}
                  onChange={(e) => {
                    setPhoneNumber(e.target.value);
                  }}
                />
              </li>
              <li className="flex flex-col">
                <label
                  htmlFor="email"
                  className="text-[0.9rem] font-bold w-[20rem] pl-1 text-Color4"
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
                  className="text-[0.9rem] font-bold w-[20rem] pl-1 text-Color4"
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
              <li className="flex flex-col">
                <label
                  htmlFor="Password"
                  className="text-[0.9rem] font-bold w-[20rem] pl-1 text-Color4"
                >
                  Confirm Password
                </label>
                <input
                  type="password"
                  className="p-2 rounded text-black bg-Color5 w-[20rem] h-10 mb-4"
                  placeholder="Password"
                  value={confirmPassword}
                  onChange={(e) => {
                    setConfirmPassword(e.target.value);
                  }}
                />
              </li>
            </ul>
            <button
              className="bg-Color3 py-[0.25rem] px-2 rounded text-center font-semibold text-Color1 w-[5rem]"
              disabled={!validateForm()}
              onClick={handleSubmit}
            >
              Sign Up
            </button>
            <p className="text-Color6 text-[0.7rem] pt-2">
              I Don't Have a Account!
              <Link to="/login" className="text-Color4">
                {" "}
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    );
  };

  const renderConfirmationForm = () => {
    return (
      <div>
        <div className=" min-w-[15rem] rounded-md w-[25rem] max-w-[30rem] z-10">
          <form
            className="flex flex-col items-center py-12"
            onSubmit={handleConfirmationSubmit}
          >
            <ul>
              <li className="flex flex-col">
                <label
                  htmlFor="email"
                  className="text-[0.9rem] text-Color5 font-bold w-[20rem] pl-1"
                >
                  Confirmation Code
                </label>
                <input
                  type="tel"
                  className="p-2 rounded text-black bg-Color6 w-[20rem] h-10 mb-4"
                  placeholder="Confirm Password"
                  value={confirmationCode}
                  onChange={(e) => {
                    setConfirmationCode(e.target.value);
                  }}
                />
              </li>
            </ul>
            <p className="text-Color4 text-[0.75rem] pb-2">
              Please check your email for the code.
            </p>
            <button
              className="bg-Color3 py-[0.25rem] px-2 rounded text-center font-semibold text-Color1"
              onClick={handleConfirmationSubmit}
            >
              Confirm Code
            </button>
          </form>
        </div>
      </div>
    );
  };

  return (
    <div className="flex items-center justify-center w-screen h-screen bg-Color1">
      {!newUser ? renderForm() : renderConfirmationForm()}
      <button
        className="py-[0.15rem] px-1 rounded text-center font-semibold text-Color1 w-[5rem] bg-Color6 flex justify-center items-center absolute top-3 left-3"
        onClick={ReturnNavigation}
      >
        <img src={Return} alt="return" />
      </button>
    </div>
  );
};

export default SignUp;
