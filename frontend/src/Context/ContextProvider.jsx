import React, { useState } from "react";
import Context from "./Context";

const ContextProvider = (props) => {
  const [isLogged, setIsLogged] = useState(false);
  const [isLogging, setIsLogging] = useState(false);
  const [userData, setUserData] = useState({});
  const [loader, setLoader] = useState(false);

  const setIsLoggedFn = (data) => {
    setIsLogged(data);
  };

  const setIsLoggingFn = (data) => {
    setIsLogging(data);
  };

  const setUserDataFn = (data) => {
    setUserData(data);
  };

  const setLoaderFn = (data) => {
    setLoader(data);
  };

  const ContextData = {
    user: {
      isLogged: isLogged,
      setIsLogged: setIsLoggedFn,
      isLogging: isLogging,
      setIsLogging: setIsLoggingFn,
    },
    userdata: {
      userData: userData,
      setUserData: setUserDataFn,
    },
    util: {
      loader: loader,
      setLoader: setLoaderFn,
    },
  };

  return (
    <Context.Provider value={ContextData}>{props.children}</Context.Provider>
  );
};

export default ContextProvider;
