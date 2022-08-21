import RoutesContainer from "./Routes";
import { API, Auth } from "aws-amplify";
import { useContext, useEffect, useState } from "react";
import Context from "./Context/Context";

function App() {
  const [userData, setUserData] = useState({});
  const UserDataCtx = useContext(Context).userdata;

  UserDataCtx.setUserData(userData);

  useEffect(() => {
    const check = async () => {
      try {
        await Auth.currentAuthenticatedUser();
        const userdata = await API.get("user", "/userdata");
        console.log(userdata);
        setUserData(userdata);
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
      } catch (e) {}
    };

    check();
  },[]);

  return (
    <div className="App">
      <RoutesContainer />
    </div>
  );
}

export default App;
