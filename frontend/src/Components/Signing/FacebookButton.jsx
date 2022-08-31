import React, { useContext } from "react";
import { Auth } from "aws-amplify";
import { BsFacebook } from "react-icons/bs";
import Context from "../../Context/Context";

const FacebookButton = () => {
  const UserCtx = useContext(Context).user;
  const UtilCtx = useContext(Context).util;

  const handleClick = async () => {
    UtilCtx.setLoader(true);

    try {
      const response = await Auth.federatedSignIn({ provider: "Facebook" });
      // const response = await Auth.federatedSignIn({ provider: "" });
      console.log(response);
      UtilCtx.setLoader(false);
      UserCtx.setIsLogged(true);
    } catch (e) {
      UtilCtx.setLoader(false);
      console.log(e);
    }
  };

  return (
    <span
      className={`flex items-center justify-center font-bold text-white bg-[#46AF72] rounded h-10 relative w-[20rem] cursor-pointer`}
      onClick={handleClick}
    >
      <BsFacebook size={"1.6rem"} className="absolute left-3" />
      <button className="px-2 py-1 " type="submit">
        Facebook
      </button>
    </span>
  );
};

export default FacebookButton;
