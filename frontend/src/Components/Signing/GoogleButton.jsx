import { Auth } from "aws-amplify";
import React, { useContext } from "react";
import { BsGoogle } from "react-icons/bs";
import Context from "../../Context/Context";

const GoogleButton = () => {
  const UserCtx = useContext(Context).user;
  const UtilCtx = useContext(Context).util;

  const handleClick = async () => {
    UtilCtx.setLoader(true);
    try {
      const data = await Auth.federatedSignIn({
        provider: "Google",
      });
      UserCtx.setIsLogged(true);
      UtilCtx.setLoader(false);
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <span
      className={`flex items-center justify-center font-bold text-white bg-[#46AF72] rounded h-10 mb-3 relative w-[20rem] cursor-pointer`}
      onClick={handleClick}
    >
      <BsGoogle size={"1.6rem"} className="absolute left-3" />
      <button className="px-2 py-1" type="submit">
        Google
      </button>
    </span>
  );
};

export default GoogleButton;
