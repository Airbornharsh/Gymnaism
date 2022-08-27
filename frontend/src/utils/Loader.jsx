import React, { useContext } from "react";
import Context from "../Context/Context";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const Loader = () => {
  const UtilCtx = useContext(Context).util;

  return (
    <div>
      {UtilCtx.loader && (
        <div className="fixed top-0 left-0 h-[100vh] w-screen bg-[rgba(0,0,0,0.4)] z-40 flex justify-center items-center">
          <span className="loader">
            <AiOutlineLoading3Quarters
              size="5rem"
              color="#46AF72"
              className="ml-2 rotation"
            />
          </span>
        </div>
      )}
    </div>
  );
};

export default Loader;
