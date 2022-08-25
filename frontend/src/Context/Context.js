import { createContext } from "react";

const Context = createContext({
  user: {
    isLogged: false,
    setIsLogged: () => {},
    isLogging: false,
    setIsLogging: () => {},
  },
  userdata: {
    createdAt: null,
    setCreatedAt: () => {},
    emailId: "harshkeshri1234567@gmail.com",
    setEmailId: () => {},
    firstName: "Harsh",
    setFirstName: () => {},
    lastName: "Keshri",
    setLastName: () => {},
    membershipId: null,
    setMembershipId: () => {},
    orders: [],
    setOrders: () => {},
    phoneNumber: "7767776776",
    setPhoneNumber: () => {},
    profilePhotoS3:
      "https://images.pexels.com/photos/1308881/pexels-photo-1308881.jpeg?auto=compress&cs=tinysrgb&w=600",
    setProfileS3: () => {},
    userId: "us-east-1:72d7c414-f098-4616-92cc-8adeccc7d195",
    setUserId: () => {},
    videos: [],
    setVideos: () => {},
    workouts: [],
    setWorkouts: () => {},
    courses: [],
    setCourses: () => {},
    userData: {},
    setUserData: () => {},
  },
  util: {
    loader: "",
    setLoader: () => {},
  },
});

export default Context;
