import { API } from "aws-amplify";

const UserDataContextUpdater = async () => {
  let userdata;
  try {
    userdata = await API.get("user", "/userdata");
    console.log(userdata);
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
  return userdata;
};

export default UserDataContextUpdater;
