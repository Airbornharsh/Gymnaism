import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { API, Auth } from "aws-amplify";
import Context from "../Context/Context";
import Return from "../utils/Svgs/Return.svg";

const ChangeEmail = () => {
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");

  const [isSendingCode, setIsSendingCode] = useState(true);
  const [confirmingCode, setConfirmingCode] = useState(false);

  const UtilCtx = useContext(Context).util;
  const UserDataCtx = useContext(Context).userdata;

  const Navigate = useNavigate();

  const validateCodeForm = () => {
    return code.length > 0;
  };

  const validateEmailForm = () => {
    return email.length > 0;
  };

  const sendingCodeFn = async (event) => {
    event.preventDefault();

    UtilCtx.setLoader(true);

    try {
      const currentUser = await Auth.currentAuthenticatedUser();
      await Auth.updateUserAttributes(currentUser, { email: email });
      setIsSendingCode(false);
      setConfirmingCode(true);
      UtilCtx.setLoader(false);
    } catch (e) {
      alert(e);
      UtilCtx.setLoader(false);
    }
  };

  const ConfirmingCodeFn = async (event) => {
    event.preventDefault();

    UtilCtx.setLoader(true);

    try {
      await Auth.verifyCurrentUserAttributeSubmit("email", code);
      await API.put("user", "/userdata/emailid", {
        body: {
          emailId: email,
        },
      });
      setConfirmingCode(false);
      const TempData = UserDataCtx.userData;
      TempData.emailId = email;
      UserDataCtx.setUserData(TempData);
      UtilCtx.setLoader(false);
    } catch (e) {
      alert(e);
      UtilCtx.setLoader(false);
    }
  };

  const ReturnNavigation = () => {
    Navigate("/");
  };

  return (
    <div>
      {isSendingCode ? (
        <div className="flex items-center justify-center w-screen h-screen bg-Color1">
          <div className="min-w-[15rem] rounded-md w-[25rem] max-w-[30rem] z-10">
            <div className="flex flex-col items-center justify-center mt-12"></div>
            <form className="flex flex-col items-center pt-3 pb-5">
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
              </ul>
              <button
                className="bg-Color3 py-[0.25rem] px-2 rounded text-center font-semibold text-Color1 w-[6.2rem]"
                disabled={!validateEmailForm()}
                onClick={sendingCodeFn}
              >
                Send Code
              </button>
            </form>
          </div>
          <button
            className="py-[0.15rem] px-1 rounded text-center font-semibold text-Color1 w-[5rem] bg-Color6 flex justify-center items-center absolute top-3 left-3"
            onClick={ReturnNavigation}
          >
            <img src={Return} alt="return" />
          </button>
        </div>
      ) : (
        <div>
          {confirmingCode && (
            <div className="flex items-center justify-center w-screen h-screen bg-Color1">
              <div className="min-w-[15rem] rounded-md w-[25rem] max-w-[30rem] z-10">
                <div className="flex flex-col items-center justify-center mt-12"></div>
                <form className="flex flex-col items-center pt-3 pb-5">
                  <ul>
                    <li className="flex flex-col">
                      <label
                        htmlFor="text"
                        className="text-[0.9rem] font-bold w-[20rem] pl-1 text-Color5"
                      >
                        Email Address
                      </label>
                      <input
                        autoFocus
                        type="number"
                        className="p-2 text-black rounded bg-Color5 w-[20rem] h-10 mb-4"
                        placeholder="Code"
                        value={code}
                        onChange={(e) => {
                          setCode(e.target.value);
                        }}
                      />
                    </li>
                  </ul>
                  <button
                    className="bg-Color3 py-[0.25rem] px-2 rounded text-center font-semibold text-Color1 w-[6.2rem]"
                    disabled={!validateCodeForm()}
                    onClick={ConfirmingCodeFn}
                  >
                    Send Code
                  </button>
                </form>
              </div>
              <button
                className="py-[0.15rem] px-1 rounded text-center font-semibold text-Color1 w-[5rem] bg-Color6 flex justify-center items-center absolute top-3 left-3"
                onClick={ReturnNavigation}
              >
                <img src={Return} alt="return" />
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ChangeEmail;
