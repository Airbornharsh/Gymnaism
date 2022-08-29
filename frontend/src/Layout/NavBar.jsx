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

  useEffect(() => {
    if (window.location.pathname === "/") {
      setHomeActive("text-Color2 border-b-2 border-Color3");
      setFeaturesActive("text-Color4");
      setReviewsActive("text-Color4");
      setReviewsActive("text-Color4");
    } else if (window.location.pathname === "/features") {
      setHomeActive("text-Color4");
      setFeaturesActive("text-Color2 border-b-2 border-Color3");
      setReviewsActive("text-Color4");
      setAboutUsActive("text-Color4");
    } else if (window.location.pathname === "/reviews") {
      setHomeActive("text-Color4");
      setFeaturesActive("text-Color4");
      setReviewsActive("text-Color2 border-b-2 border-Color3");
      setAboutUsActive("text-Color4");
    } else if (window.location.pathname === "/aboutus") {
      setHomeActive("text-Color4");
      setFeaturesActive("text-Color4");
      setReviewsActive("text-Color4");
      setAboutUsActive("text-Color2 border-b-2 border-Color3");
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
    if (navHandle === true) {
      setNavHandle(false);
    } else {
      setNavHandle(true);
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
            className="text-Color2 text-[1.5rem] text-center ml-8 cursor-pointer max800:ml-2 max800:text-[1.2rem]"
            onClick={HomeNavigation}
          >
            GYMNAISM
          </h2>
          <span className="bg-Color3 ml-7 w-[0.1rem] h-16 max800:h-12 max800:ml-3"></span>
        </div>
        <div className="mr-8">
          <ul className="flex justify-between items-center text-[1rem] font-semibold w-[60vw] max-w-[45rem] text-Color4 ">
            <li
              className={`${homeActive} cursor-pointer max800:hidden`}
              onClick={HomeNavigation}
            >
              Home
            </li>
            <li
              className={`${featuresActive} cursor-pointer max800:hidden`}
              onClick={FeaturesNavigation}
            >
              Featuress
            </li>
            <li
              className={`${reviewsActive} cursor-pointer max800:hidden`}
              onClick={ReviewsNavigation}
            >
              Reviews
            </li>
            <li
              className={`${aboutUsActive} cursor-pointer max800:hidden`}
              onClick={AboutUsNavigation}
            >
              About Us
            </li>
            <li >
              {!UserCtx.isLogged ? (
                <button
                  className="bg-Color3 py-[0.22rem] px-[0.3rem] rounded font-semibold text-Color1  max800:absolute max800:right-4 max800:top-7 "
                  onClick={SignUpNavigation}
                >
                  Get Started
                </button>
              ) : (
                <div
                  className="bg-Color3 rounded-[50%] w-12 h-12 relative cursor-pointer max800:absolute max800:right-4 max800:top-7 max800:w-9 max800:h-9"
                  onClick={DisplayNavHandle}
                >
                  <img
                    src={profilePhotoUrl || profile}
                    alt="profile"
                    className="w-12 h-12 rounded-[50%] max800:w-9 max800:h-9"
                  />
                  {navHandle && (
                    <ul className="absolute flex flex-col items-center justify-center border-black top-12 right-3 text-Color1">
                      <li
                        className="bg-Color5 w-[15rem] flex justify-center items-center py-3 border-b-2 border-Color3 cursor-pointer"
                        onClick={ProfileHandler}
                      >
                        Dashboard
                      </li>
                      <li
                        className="bg-Color5 w-[15rem] flex justify-center items-center py-3 border-b-2 border-Color3 cursor-pointer"
                        onClick={ChangeEmailHandler}
                      >
                        Change Email
                      </li>
                      <li
                        className="bg-Color5 w-[15rem] flex justify-center items-center py-3 border-b-2 border-Color3 cursor-pointer"
                        onClick={MyCoursesHandler}
                      >
                        My Courses
                      </li>
                      <li
                        className="bg-Color5 w-[15rem] flex justify-center items-center py-3 border-b-2 border-Color3 cursor-pointer"
                        onClick={MyVideosHandler}
                      >
                        My Videos
                      </li>
                      <li
                        className="bg-Color5 w-[15rem] flex justify-center items-center py-3 "
                        onClick={LogOutHandler}
                      >
                        Log Out
                      </li>
                    </ul>
                  )}
                </div>
              )}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
