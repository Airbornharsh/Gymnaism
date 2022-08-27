import { createContext } from "react";

const Context = createContext({
  user: {
    isLogged: false,
    setIsLogged: () => {},
    isLogging: false,
    setIsLogging: () => {},
  },
  userdata: {
    userData: {},
    setUserData: () => {},
  },
  util: {
    loader: "",
    setLoader: () => {},
  },
});

export default Context;
