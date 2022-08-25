import RoutesContainer from "./Routes";
import { API, Auth } from "aws-amplify";
import { useContext, useEffect, useState } from "react";
import Context from "./Context/Context";
import Loader from "./utils/Loader";

function App() {
  const UserDataCtx = useContext(Context).userdata;
  const [loader, setLoader] = useState(false);
  const UtilCtx = useContext(Context).util;

  UtilCtx.setLoader(loader);

  useEffect(() => {
    const check = async () => {
      setLoader(true);
      try {
        console.log("Started");
        await Auth.currentAuthenticatedUser();
        const userdata = await API.get("user", "/userdata");
        console.log("Ended");
        setUserData(userdata);
        // Navigate("/");
        setLoader(false);
        // UserDataCtx.setUserData(userdata);
        // UserDataCtx.setCreatedAt(userdata.createdAt);
        // UserDataCtx.setEmailId(userdata.emailId);
        // UserDataCtx.setFirstName(userdata.firstName);
        // UserDataCtx.setLastName(userdata.lastName);
        // UserDataCtx.setMembershipId(userdata.membershipId);
        // UserDataCtx.setOrders(userdata.orders);
        // UserDataCtx.setPhoneNumber(userdata.phoneNumber);
        // UserDataCtx.setProfileS3(userdata.profilePhotoS3);
        // UserDataCtx.setVideos(userdata.setUserId);
        // UserDataCtx.setWorkouts(userdata.setVideos);
        // UserDataCtx.setEmailId(userdata.setWorkouts);
      } catch (e) {
        console.log(e);
      }
    };

    check();
  }, []);

  const [userData, setUserData] = useState(UserDataCtx);  

  UserDataCtx.setUserData(userData);

  return (
    <div className="App">
      <Loader />
      <RoutesContainer />
    </div>
  );
}

export default App;
