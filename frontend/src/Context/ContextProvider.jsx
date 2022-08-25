import React, { useState } from "react";
import Context from "./Context";

const ContextProvider = (props) => {
  const [isLogged, setIsLogged] = useState(false);
  const [isLogging, setIsLogging] = useState(false);
  // const [createdAt, setCreatedId] = useState(null);
  // const [emailId, setEmailId] = useState("harshkeshri1234567@gmail.com");
  // const [firstName, setFirstName] = useState("Harsh");
  // const [lastName, setLastName] = useState("Keshri");
  // const [membershipId, setMembershipId] = useState(null);
  // const [orders, setOrders] = useState([]);
  // const [phoneNumber, setPhoneNumber] = useState(7767776776);
  // const [profilePhotoS3, setProfileS3] = useState(
  //   "https://images.pexels.com/photos/1308881/pexels-photo-1308881.jpeg?auto=compress&cs=tinysrgb&w=600"
  // );
  // const [userId, setUserId] = useState(
  //   "us-east-1:72d7c414-f098-4616-92cc-8adeccc7d195"
  // );
  // const [videos, setVideos] = useState([]);
  // const [workouts, setWorkouts] = useState([]);
  const [userData, setUserData] = useState({
    courses: ["course1"],
    // videos: ["video1"],
  });
  const [loader, setLoader] = useState(false);
  // const [courses, setCourses] = useState([]);

  const setIsLoggedFn = (data) => {
    setIsLogged(data);
  };

  const setIsLoggingFn = (data) => {
    setIsLogging(data);
  };

  // const setCreatedAtFn = (data) => {
  //   setCreatedId(data);
  // };

  // const setEmailIdFn = (data) => {
  //   setEmailId(data);
  // };

  // const setFirstNameFn = (data) => {
  //   setFirstName(data);
  // };

  // const setLastNameFn = (data) => {
  //   setLastName(data);
  // };

  // const setMembershipIdFn = (data) => {
  //   setMembershipId(data);
  // };

  // const setOrdersFn = (data) => {
  //   setOrders(data);
  // };

  // const setPhoneNumberFn = (data) => {
  //   setPhoneNumber(data);
  // };

  // const setProfileS3Fn = (data) => {
  //   setProfileS3(data);
  // };

  // const setVideosFn = (data) => {
  //   setVideos(data);
  // };

  // const setWorkoutsFn = (data) => {
  //   setWorkouts(data);
  // };

  // const setUserIdFn = (data) => {
  //   setUserId(data);
  // };

  // const setCoursesFn = (data) => {
  //   setCourses(data);
  // };

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
      // createdAt: createdAt,
      // setCreatedAt: setCreatedAtFn,
      // emailId: emailId,
      // setEmailId: setEmailIdFn,
      // firstName: firstName,
      // setFirstName: setFirstNameFn,
      // lastName: lastName,
      // setLastName: setLastNameFn,
      // membershipId: membershipId,
      // setMembershipId: setMembershipIdFn,
      // orders: orders,
      // setOrders: setOrdersFn,
      // phoneNumber: phoneNumber,
      // setPhoneNumber: setPhoneNumberFn,
      // profilePhotoS3: profilePhotoS3,
      // setProfileS3: setProfileS3Fn,
      // userId: userId,
      // setUserId: setUserIdFn,
      // videos: videos,
      // setVideos: setVideosFn,
      // workouts: workouts,
      // setWorkouts: setWorkoutsFn,
      // courses: courses,
      // setCourses: setCoursesFn,
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
