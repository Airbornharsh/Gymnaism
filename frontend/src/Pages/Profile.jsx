// import React, { useContext, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { API } from "aws-amplify";
// import { AiFillEdit } from "react-icons/ai";
// import { FcUpload } from "react-icons/fc";
// import Return from "../utils/Svgs/Return.svg";
// import Context from "../Context/Context";
// import UserDataContextUpdater from "../utils/UserDataContextUpdater";

// const Profile = () => {
//   const UserDataCtx = useContext(Context).userdata;

//   const [firstName, setFirstName] = useState(UserDataCtx.userData.firstName);
//   const [lastName, setLastName] = useState(UserDataCtx.userData.lastName);
//   const [phoneNumber, setPhoneNumber] = useState(
//     UserDataCtx.userData.phoneNumber
//   );
//   const [emailId, setEmailId] = useState(UserDataCtx.userData.emailId);

//   const [firstNameActive, setFirstNameActive] = useState(true);
//   const [lastNameActive, setLastNameActive] = useState(true);
//   const [phoneNumberActive, setPhoneNumberActive] = useState(true);
//   const [emailIdActive, setEmailIdActive] = useState(true);
//   const Navigate = useNavigate();

//   const firstNameEditClickedHandler = () => {
//     setFirstNameActive(false);
//   };

//   const firstNameUpdateHandler = async () => {
//     if (firstName !== UserDataCtx.userData.firstName) {
//       try {
//         const data = await API.put("user", "/userdata/firstname", {
//           body: {
//             firstName: firstName,
//           },
//         });
//         setFirstNameActive(true);
//         UserDataCtx.setUserData(UserDataContextUpdater());
//       } catch (e) {
//         console.log(e);
//       }
//     }
//   };

//   const lastNameEditClickedHandler = () => {
//     setLastNameActive(false);
//   };

//   const lastNameUpdateHandler = async () => {
//     if (lastName !== UserDataCtx.userData.lastName) {
//       try {
//         await API.put("user", "/userdata/lastname", {
//           body: {
//             lastName: lastName,
//           },
//         });
//         setLastNameActive(true);
//         UserDataCtx.setUserData(UserDataContextUpdater());
//       } catch (e) {
//         console.log(e);
//       }
//     }
//   };

//   const phoneNumberEditClickedHandler = () => {
//     setPhoneNumberActive(false);
//   };

//   const phoneNumberUpdateHandler = async () => {
//     if (phoneNumber !== UserDataCtx.userData.phoneNumber) {
//       try {
//         await API.put("user", "/userdata/phoneumber", {
//           body: {
//             phoneNumber: phoneNumber,
//           },
//         });
//         setPhoneNumberActive(true);
//         UserDataCtx.setUserData(UserDataContextUpdater());
//       } catch (e) {
//         console.log(e);
//       }
//     }
//   };

//   const emailIdEditClickedHandler = () => {
//     setEmailIdActive(false);
//   };

//   const emailIdUpdateHandler = async () => {
//     if (emailId !== UserDataCtx.userData.emailId) {
//       try {
//         await API.put("user", "/userdata/emailid", {
//           body: {
//             emailId: emailId,
//           },
//         });
//         setEmailIdActive(true);
//         UserDataCtx.setUserData(UserDataContextUpdater());
//       } catch (e) {
//         console.log(e);
//       }
//     }
//   };

//   const ReturnNavigation = () => {
//     Navigate("/");
//   };

//   return (
//     <div className="flex flex-col items-center justify-start w-screen h-screen bg-Color1">
//       <span className="bg-Color3 w-[10rem] h-[10rem] rounded-[50%] mt-[10rem]">
//         <img
//           src="https://images.pexels.com/photos/1308881/pexels-photo-1308881.jpeg?auto=compress&cs=tinysrgb&w=600"
//           alt="profile"
//           className="w-[10rem] h-[10rem] rounded-[50%] object-cover"
//         />
//       </span>
//       <div className="mt-[7rem]">
//         <ul className="flex flex-wrap">
//           <li className="relative px-10">
//             <h5 className="pb-1 text-Color3">First Name </h5>
//             {/* <input
//               type="text"
//               className="bg-Color5 border-b-2 border-Color3 w-[17rem] pl-2 h-8 rounded-sm"
//             /> */}
//             <span className="cursor-pointer">
//               {firstNameActive ? (
//                 <div>
//                   <input
//                     type="text"
//                     className="bg-Color5 border-b-2 border-Color3 w-[17rem] pl-2 h-8 rounded-sm"
//                     value={UserDataCtx.userData.firstName}
//                     onChange={() => {
//                       setFirstNameActive(false);
//                     }}
//                   />
//                   <AiFillEdit
//                     color="#46AF72"
//                     onClick={firstNameEditClickedHandler}
//                     className="absolute right-11 top-8"
//                   />
//                 </div>
//               ) : (
//                 <div>
//                   <input
//                     type="text"
//                     className="bg-Color5 border-b-2 border-Color3 w-[17rem] pl-2 h-8 rounded-sm"
//                     onChange={(e) => {
//                       setFirstName(e.target.value);
//                     }}
//                     value={firstName}
//                   />
//                   <FcUpload
//                     size="1.5rem"
//                     color="#46AF72"
//                     onClick={firstNameUpdateHandler}
//                     className="absolute right-10 top-8"
//                   />
//                 </div>
//               )}
//             </span>
//           </li>
//           <li className="relative px-10">
//             <h5 className="pb-1 text-Color3">Last Name </h5>
//             {/* <input
//               type="text"
//               className="bg-Color5 border-b-2 border-Color3 w-[17rem] pl-2 h-8 rounded-sm"
//             /> */}
//             <span className="cursor-pointer">
//               {lastNameActive ? (
//                 <div>
//                   <input
//                     type="text"
//                     className="bg-Color5 border-b-2 border-Color3 w-[17rem] pl-2 h-8 rounded-sm"
//                     value={UserDataCtx.userData.lastName}
//                     onChange={() => {
//                       setLastNameActive(false);
//                     }}
//                   />
//                   <AiFillEdit
//                     color="#46AF72"
//                     onClick={lastNameEditClickedHandler}
//                     className="absolute right-11 top-8"
//                   />
//                 </div>
//               ) : (
//                 <div>
//                   <input
//                     type="text"
//                     className="bg-Color5 border-b-2 border-Color3 w-[17rem] pl-2 h-8 rounded-sm"
//                     onChange={(e) => {
//                       setLastName(e.target.value);
//                     }}
//                     value={lastName}
//                   />
//                   <FcUpload
//                     size="1.5rem"
//                     color="#46AF72"
//                     onClick={lastNameUpdateHandler}
//                     className="absolute right-10 top-8"
//                   />
//                 </div>
//               )}
//             </span>
//           </li>
//           <li className="relative px-10">
//             <h5 className="pb-1 text-Color3">First Name </h5>
//             {/* <input
//               type="text"
//               className="bg-Color5 border-b-2 border-Color3 w-[17rem] pl-2 h-8 rounded-sm"
//             /> */}
//             <span className="cursor-pointer">
//               {phoneNumberActive ? (
//                 <div>
//                   <input
//                     type="text"
//                     className="bg-Color5 border-b-2 border-Color3 w-[17rem] pl-2 h-8 rounded-sm"
//                     value={UserDataCtx.userData.phoneNumber}
//                     onChange={() => {
//                       setPhoneNumberActive(false);
//                     }}
//                   />
//                   <AiFillEdit
//                     color="#46AF72"
//                     onClick={phoneNumberEditClickedHandler}
//                     className="absolute right-11 top-8"
//                   />
//                 </div>
//               ) : (
//                 <div>
//                   <input
//                     type="text"
//                     className="bg-Color5 border-b-2 border-Color3 w-[17rem] pl-2 h-8 rounded-sm"
//                     onChange={(e) => {
//                       setPhoneNumber(e.target.value);
//                     }}
//                     value={phoneNumber}
//                   />
//                   <FcUpload
//                     size="1.5rem"
//                     color="#46AF72"
//                     onClick={phoneNumberUpdateHandler}
//                     className="absolute right-10 top-8"
//                   />
//                 </div>
//               )}
//             </span>
//           </li>
//           <li className="relative px-10">
//             <h5 className="pb-1 text-Color3">First Name </h5>
//             {/* <input
//               type="text"
//               className="bg-Color5 border-b-2 border-Color3 w-[17rem] pl-2 h-8 rounded-sm"
//             /> */}
//             <span className="cursor-pointer">
//               {emailIdActive ? (
//                 <div>
//                   <input
//                     type="text"
//                     className="bg-Color5 border-b-2 border-Color3 w-[17rem] pl-2 h-8 rounded-sm"
//                     value={UserDataCtx.userData.emailId}
//                     onChange={() => {
//                       setEmailIdActive(false);
//                     }}
//                   />
//                   <AiFillEdit
//                     color="#46AF72"
//                     onClick={emailIdEditClickedHandler}
//                     className="absolute right-11 top-8"
//                   />
//                 </div>
//               ) : (
//                 <div>
//                   <input
//                     type="text"
//                     className="bg-Color5 border-b-2 border-Color3 w-[17rem] pl-2 h-8 rounded-sm"
//                     onChange={(e) => {
//                       setEmailId(e.target.value);
//                     }}
//                     value={emailId}
//                   />
//                   <FcUpload
//                     size="1.5rem"
//                     color="#46AF72"
//                     onClick={emailIdUpdateHandler}
//                     className="absolute right-10 top-8"
//                   />
//                 </div>
//               )}
//             </span>
//           </li>
//         </ul>
//       </div>

//       <button
//         className="py-[0.15rem] px-1 rounded text-center font-semibold text-Color1 w-[5rem] bg-Color6 flex justify-center items-center absolute top-3 left-3"
//         onClick={ReturnNavigation}
//       >
//         <img src={Return} alt="return" />
//       </button>
//     </div>
//   );
// };

// export default Profile;
