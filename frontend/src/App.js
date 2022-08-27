import RoutesContainer from "./Routes";
import { API, Auth } from "aws-amplify";
import { useContext, useEffect, useRef, useState } from "react";
import Context from "./Context/Context";
import Loader from "./utils/Loader";

function App() {
  const [render, setRender] = useState(false);
  const UserCtx = useRef(useContext(Context).user);
  const UtilCtx = useRef(useContext(Context).util);
  const UserDataCtx = useRef(useContext(Context).userdata);


  useEffect(() => {
    const check = async () => {
      setRender(false);
      UtilCtx.current.setLoader(true);
      try {
        await Auth.currentAuthenticatedUser();
        const userdata = await API.get("user", "/userdata");
        UserDataCtx.current.setUserData(userdata);
        UserCtx.current.setIsLogged(true);
        UtilCtx.current.setLoader(false);
        setRender(true);
      } catch (e) {
        console.log(e);
        UserDataCtx.current.setUserData({});
        UtilCtx.current.setLoader(false);
        setRender(true);
      }
    };

    check();
  }, []);

  return (
    <div className="App">
      <Loader />
      {render && <RoutesContainer />}
    </div>
  );
}

export default App;
