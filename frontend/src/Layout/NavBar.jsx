import { Auth, Storage } from "aws-amplify";
import React, { useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Context from "../Context/Context";
import profile from "../utils/Photo/profile.png";

const NavBar = () => {
  const [homeActive, setHomeActive] = useState(
    "text-Color2 border-b-2 border-Color3"
  );
  const [featuresActive, setFeaturesActive] = useState("");
  const [reviewsActive, setReviewsActive] = useState("");
  const [aboutUsActive, setAboutUsActive] = useState("");
  const UserCtx = useContext(Context).user;
  const UserDataCtx = useRef(useContext(Context).userdata);
  const [navHandle, setNavHandle] = useState(false);
  const [profilePhotoUrl, setProfilePhotoUrl] = useState(
    UserDataCtx.current.userData.profilePhotoS3
  );

  const Navigate = useNavigate();

  const Active =
    "BalooDa2Font text-Color2 border-b-2 border-Color3 UpperNav font-medium";
  const Inactive = "text-Color4";
  const NavHandleHover =
    "bg-Color5 w-[15rem] flex justify-center items-center py-3 border-b-2 border-Color3 cursor-pointer hover:bg-Color3";

  useEffect(() => {
    if (window.location.pathname === "/") {
      setHomeActive(Active);
      setFeaturesActive(Inactive);
      setReviewsActive(Inactive);
      setReviewsActive(Inactive);
    } else if (window.location.pathname === "/features") {
      setHomeActive(Inactive);
      setFeaturesActive(Active);
      setReviewsActive(Inactive);
      setAboutUsActive(Inactive);
    } else if (window.location.pathname === "/reviews") {
      setHomeActive(Inactive);
      setFeaturesActive(Inactive);
      setReviewsActive(Active);
      setAboutUsActive(Inactive);
    } else if (window.location.pathname === "/aboutus") {
      setHomeActive(Inactive);
      setFeaturesActive(Inactive);
      setReviewsActive(Inactive);
      setAboutUsActive(Active);
    }

    const onLoad = async () => {
      if (UserDataCtx.current.userData.profilePhotoS3) {
        try {
          const profilePhotoUrl = await Storage.get(
            `${UserDataCtx.current.userData.profilePhotoS3}`,
            {
              level: "private",
              region: "us-east-1",
              bucket:
                "harsh-gym-mediastack-useraccessbucketc6094d94-pqxiz1l38rl2",
            }
          );
          setProfilePhotoUrl(profilePhotoUrl);
        } catch (e) {
          console.log(e);
        }
      } else if (UserDataCtx.current.userData.profilePhotoUrl) {
        setProfilePhotoUrl(UserDataCtx.current.userData.profilePhotoUrl);
      }
    };

    onLoad();
  }, []);

  const DisplayNavHandle = () => {
    if (window.innerWidth >= 800) {
      if (navHandle === true) {
        setNavHandle(false);
      } else {
        setNavHandle(true);
      }
    }
  };

  const ProfileHandler = () => {
    Navigate(`/dashboard`);
  };

  const ChangeEmailHandler = () => {
    Navigate("/changeemail");
  };

  const MyCoursesHandler = () => {
    Navigate("/mycourses");
  };

  const MyVideosHandler = () => {
    Navigate("/myvideos");
  };

  const LogOutHandler = async () => {
    try {
      await Auth.signOut();
      UserCtx.setIsLogged(false);
      UserDataCtx.setUserData({});
      Navigate("/");
    } catch (e) {
      console.log(e);
    }
  };

  const HomeNavigation = () => {
    Navigate("/");
  };

  const FeaturesNavigation = () => {
    Navigate("/features");
  };

  const ReviewsNavigation = () => {
    Navigate("/reviews");
  };

  const AboutUsNavigation = () => {
    Navigate("/aboutus");
  };

  const SignUpNavigation = () => {
    Navigate("/signup");
  };

  return (
    <div className="bg-Color1 h-[5.5rem] flex justify-center">
      <div className="w-[90vw] max-w-[80rem] flex justify-between items-center">
        <div className="flex items-center">
          <h2
            className="text-Color2 text-[1.5rem] text-center ml-8 cursor-pointer max800:ml-2 max800:text-[1.2rem] NunitoFont"
            onClick={HomeNavigation}
          >
            GYMNAISM
          </h2>
          <span className="bg-Color3 ml-7 w-[0.1rem] h-16 max800:h-12 max800:ml-3"></span>
        </div>
        <div className="mr-2">
          <ul className="flex justify-between items-center text-[1rem] font-semibold w-[60vw] max-w-[45rem] text-Color4 ">
            <li
              className={`${homeActive} cursor-pointer max800:hidden hover:text-Color2 hover:border-b-2 hover:border-Color3 transition-none `}
              onClick={HomeNavigation}
            >
              Home
            </li>
            <li
              className={`${featuresActive} cursor-pointer max800:hidden hover:text-Color2 hover:border-b-2 hover:border-Color3  transition-none `}
              onClick={FeaturesNavigation}
            >
              Featuress
            </li>
            <li
              className={`${reviewsActive} cursor-pointer max800:hidden hover:text-Color2 hover:border-b-2 hover:border-Color3  transition-none `}
              onClick={ReviewsNavigation}
            >
              Reviews
            </li>
            <li
              className={`${aboutUsActive} cursor-pointer max800:hidden hover:text-Color2 hover:border-b-2 hover:border-Color3  transition-none `}
              onClick={AboutUsNavigation}
            >
              About Us
            </li>
            <li>
              {/* {!UserCtx.isLogged ? (
                <button
                  className="bg-Color3 py-[0.22rem] px-[0.3rem] rounded font-semibold text-Color1  max800:absolute max800:right-4 max800:top-7 "
                  onClick={SignUpNavigation}
                >
                  Get Started
                </button>
              ) : ( */}
              <div
                className="bg-Color3 rounded-[50%] w-12 h-12 relative cursor-pointer max800:absolute max800:right-4 max800:top-7 max800:w-9 max800:h-9"
                onClick={() => {
                  if (navHandle === true) {
                    setNavHandle(false);
                  } else {
                    setNavHandle(true);
                  }
                }}
                onMouseEnter={DisplayNavHandle}
                onMouseLeave={DisplayNavHandle}
              >
                <img
                  src={profilePhotoUrl || profile}
                  alt="profile"
                  className="w-12 h-12 rounded-[50%] max800:w-9 max800:h-9"
                />

                {navHandle && (
                  <ul className="absolute flex flex-col items-center justify-center border-black top-10 right-1 text-Color1 z-30 shadow-[0_0px_10px_0.1px_rgba(7,41,51,0.3)] shadow-Color1">
                    <li
                      className={`hidden max800:flex ${NavHandleHover}`}
                      onClick={HomeNavigation}
                    >
                      Home
                    </li>
                    <li
                      className={`hidden max800:flex ${NavHandleHover}`}
                      onClick={FeaturesNavigation}
                    >
                      Features
                    </li>
                    <li
                      className={`hidden max800:flex ${NavHandleHover}`}
                      onClick={ReviewsNavigation}
                    >
                      Reviews
                    </li>
                    <li
                      className={`hidden max800:flex ${NavHandleHover}`}
                      onClick={AboutUsNavigation}
                    >
                      About Us
                    </li>
                    {UserCtx.isLogged ? (
                      <ul>
                        <li
                          className={`${NavHandleHover}`}
                          onClick={ProfileHandler}
                          hidden={UserCtx.isLogged}
                        >
                          Dashboard
                        </li>
                        <li
                          className={`${NavHandleHover}`}
                          onClick={ChangeEmailHandler}
                        >
                          Change Email
                        </li>
                        <li
                          className={`${NavHandleHover}`}
                          onClick={MyCoursesHandler}
                        >
                          My Courses
                        </li>
                        <li
                          className={`${NavHandleHover}`}
                          onClick={MyVideosHandler}
                        >
                          My Videos
                        </li>
                        <li
                          className={`${NavHandleHover}`}
                          onClick={LogOutHandler}
                        >
                          Log Out
                        </li>
                      </ul>
                    ) : (
                      <li
                        className="bg-Color5 w-[15rem] flex justify-center items-center py-3 "
                        onClick={SignUpNavigation}
                      >
                        Sign Up
                      </li>
                    )}
                  </ul>
                )}
              </div>
              {/* )} */}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
