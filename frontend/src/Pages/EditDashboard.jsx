import { API, Auth, Storage } from "aws-amplify";
import React, { useContext, useEffect, useState, useRef } from "react";
import { BsFillPencilFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import Context from "../Context/Context";

const EditDashboard = () => {
  const UserDataCtx = useRef(useContext(Context).userdata);
  const UtilCtx = useRef(useContext(Context).util);
  const [firstName, setFirstName] = useState(
    UserDataCtx.current.userData.firstName
  );
  const [lastName, setLastName] = useState(
    UserDataCtx.current.userData.lastName
  );
  const [phoneNumber, setPhoneNumber] = useState(
    UserDataCtx.current.userData.phoneNumber
  );
  const [gender, setGender] = useState(UserDataCtx.current.userData.gender);
  const [address, setAddress] = useState(UserDataCtx.current.userData.address);
  const [profilePhotoUrl, setProfilePhotoUrl] = useState(
    UserDataCtx.current.userData.profilePhotoS3
  );
  const file = useRef();

  const Navigate = useNavigate();

  useEffect(() => {
    UtilCtx.current.setLoader(true);

    const checkNew = async () => {
      try {
        const data1 = await Auth.currentSession();
        console.log(data1);
        if (data1.idToken.payload.identities[0].providerName === "Google") {
          const data = await API.post("user", "/userdata", {
            body: {
              emailId: data1.idToken.payload.email,
              firstName: data1.idToken.payload.given_name,
              lastName: data1.idToken.payload.family_name,
              profilePhotoUrl: data1.idToken.payload.picture,
            },
          });

          UserDataCtx.current.setUserData(data);
        }
      } catch (e) {
        console.log(e);
      }
    };

    const onLoad = async () => {
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
        UtilCtx.current.setLoader(false);
      } catch (e) {
        console.log(e);
        UtilCtx.current.setLoader(false);
      }
    };

    if (!UserDataCtx.current.userData.emailId) {
      checkNew();
    }

    if (UserDataCtx.current.userData.profilePhotoS3) {
      onLoad();
    } else if (UserDataCtx.current.userData.profilePhotoUrl) {
      setProfilePhotoUrl(UserDataCtx.current.userData.profilePhotoUrl);
    }

    UtilCtx.current.setLoader(false);
  }, []);

  const UpdateHandler = async (e) => {
    e.preventDefault();

    UtilCtx.current.setLoader(true);

    try {
      await API.put("user", "/userdata/basic", {
        body: {
          firstName: firstName,
          lastName: lastName,
          phoneNumber: phoneNumber,
          gender: gender,
          address: address,
        },
      });
      //Saving The Data in Context
      const TempData = UserDataCtx.current.userData;
      TempData.firstName = firstName;
      TempData.lastName = lastName;
      TempData.phoneNumber = phoneNumber;
      TempData.gender = gender;
      TempData.address = address;
      UserDataCtx.current.setUserData(TempData);
      UtilCtx.current.setLoader(false);
      Navigate("/");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="flex justify-center w-screen h-screen bg-Color1">
      <form className="w-[80vw] max-w-[70rem] mt-[10rem] flex flex-col items-center">
        <span className="relative">
          <span className="absolute right-0 z-30 cursor-pointer">
            <input
              type="file"
              ref={file}
              className="cursor-pointer w-[1rem] h-[1rem] absolute z-20 opacity-0"
              onChange={async (event) => {
                UtilCtx.current.setLoader(true);

                file.current = event.target.files[0];
                setProfilePhotoUrl(URL.createObjectURL(file.current));
                const filename = `${Date.now()}-${file.current.name}`;

                try {
                  const profilePhotoS3 = file.current
                    ? await Storage.put(`${filename}`, file.current, {
                        level: "private",
                        region: "us-east-1",
                        bucket:
                          "harsh-gym-mediastack-useraccessbucketc6094d94-pqxiz1l38rl2",
                      })
                    : null;

                  await API.put("user", "/userdata/profilephoto", {
                    body: {
                      profilePhotoS3: profilePhotoS3.key,
                    },
                  });

                  if (UserDataCtx.current.userData.profilePhotoS3) {
                    await Storage.remove(
                      UserDataCtx.current.userData.profilePhotoS3,
                      {
                        level: "private",
                        region: "us-east-1",
                        bucket:
                          "harsh-gym-mediastack-useraccessbucketc6094d94-pqxiz1l38rl2",
                      }
                    );
                  }
                  const TempData = UserDataCtx.current.userData;
                  TempData.profilePhotoS3 = profilePhotoS3.key;
                  UserDataCtx.current.setUserData(TempData);
                  UtilCtx.current.setLoader(false);
                } catch (e) {
                  console.log(e);
                  UtilCtx.current.setLoader(false);
                }
              }}
            />
            <BsFillPencilFill color="#46AF72" />
          </span>

          <img
            src={profilePhotoUrl}
            alt="profile"
            className="w-40 h-40 rounded-[50%] object-cover"
          />
        </span>

        <ul className="flex flex-wrap items-start justify-center">
          <li className="flex flex-col my-5 mx-7">
            <label className="text-Color3 ">First Name</label>
            <input
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
              className="w-[15rem] pl-1 rounded-sm text-Color4"
            />
          </li>
          <li className="flex flex-col my-5 mx-7">
            <label className="text-Color3 ">Last Name</label>
            <input
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value);
              }}
              className="w-[15rem] pl-1 rounded-sm text-Color4"
            />
          </li>
          <li className="flex flex-col my-5 mx-7">
            <label className="text-Color3 ">Phone Number</label>
            <input
              value={phoneNumber}
              onChange={(e) => {
                setPhoneNumber(e.target.value);
              }}
              className="w-[15rem] pl-1 rounded-sm text-Color4"
            />
          </li>
          <li className="flex flex-col my-5 mx-7">
            <label className="text-Color3 ">Gender</label>
            <input
              value={gender}
              onChange={(e) => {
                setGender(e.target.value);
              }}
              className="w-[15rem] pl-1 rounded-sm text-Color4"
            />
          </li>
          <li className="flex flex-col my-5 mx-7">
            <label className="text-Color3 ">Address</label>
            <input
              value={address}
              onChange={(e) => {
                setAddress(e.target.value);
              }}
              className="w-[15rem] pl-1 rounded-sm text-Color4"
            />
          </li>
        </ul>
        <button
          className="bg-Color3 py-[0.25rem] px-2 rounded text-center font-semibold text-Color1 w-[5rem] mt-8"
          onClick={UpdateHandler}
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default EditDashboard;
