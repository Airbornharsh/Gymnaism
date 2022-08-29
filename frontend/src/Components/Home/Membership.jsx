import React from "react";

const Membership = () => {
  return (
    <div className="flex flex-col items-center justify-center pt-[6rem] ">
      <h3 className="text-[3rem] mb-[5rem] font-semibold">MemberShip</h3>
      <ul className="flex flex-wrap justify-around w-[90vw] max-w-[75rem] items-end">
        <li className="bg-Color1 h-[20.5rem] flex flex-col justify-between rounded-xl shadow-2xl items-center py-4 px-14 w-[18rem] overflow-hidden mb-6 mx-4">
          <div className="flex flex-col items-center justify-center">
            <h4 className="font-semibold text-[1.4rem] text-Color2 mb-3">
              Starter
            </h4>
            <ul className="flex flex-col items-start list-disc h-[12rem]  marker:text-Color3 text-Color4 text-[0.9rem]">
              <li>Limited Video Lectures Lted Video Lec Video Lectures </li>
              <li>Limited Video Lectures Access</li>
              <li>Limited Video Lectures Access</li>
              <li>Limited Video Lectures Access</li>
            </ul>
          </div>
          <button className="px-2 py-1 font-semibold rounded-md bg-Color3">
            Rs 700/mo
          </button>
        </li>
        <li className="bg-Color1 h-[26rem] flex flex-col justify-between rounded-xl shadow-2xl items-center py-4 px-14 w-[22rem] overflow-hidden translate-y-[0.5rem] mx-4 mb-6">
          <div className="flex flex-col items-center justify-center">
            <h4 className="font-semibold text-[1.4rem] text-Color2 mb-3">
              Premium
            </h4>
            <ul className="flex flex-col items-start list-disc text-[0.9rem] marker:text-Color3 text-Color4">
              <li>Limited Video Lectures Lted Video Lec Video Lectures </li>
              <li>Limited Video Lectures Access</li>
              <li>Limited Video Lectures Access</li>
              <li>Limited Video Lectures Access</li>
            </ul>
          </div>
          <button className="px-2 py-1 font-semibold rounded-md bg-Color3">
            Rs 2000/mo
          </button>
        </li>
        <li className="bg-Color1 h-[20.5rem] flex flex-col justify-between rounded-xl mx-4 shadow-2xl items-center py-4 px-14 w-[18rem] mb-6 overflow-hidden">
          <div className="flex flex-col items-center justify-center">
            <h4 className="font-semibold text-[1.4rem] text-Color2 mb-3">
              Standard
            </h4>
            <ul className="flex flex-col items-start list-disc text-[0.9rem] marker:text-Color3 text-Color4">
              <li>Limited Video Lectures Lted Video Lec Video Lectures </li>
              <li>Limited Video Lectures Access</li>
              <li>Limited Video Lectures Access</li>
              <li>Limited Video Lectures Access</li>
            </ul>
          </div>
          <button className="px-2 py-1 font-semibold rounded-md bg-Color3">
            Rs 1400/mo
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Membership;
