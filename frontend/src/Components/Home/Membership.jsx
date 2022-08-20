import React from "react";

const Membership = () => {
  return (
    <div className="flex flex-col items-center justify-center pt-[6rem]">
      <h3 className="text-[3rem] mb-[5rem] font-semibold">MemberShip</h3>
      <ul className="flex flex-wrap justify-around w-[100vw] max-w-[80rem] items-end">
        <li className="bg-Color1 h-[23rem] flex flex-col justify-between rounded-xl shadow-2xl items-center py-4 px-14 w-[20rem] overflow-hidden">
          <div className="flex flex-col items-center justify-center">
            <h4 className="font-semibold text-[1.4rem] text-Color2 mb-3">
              Starter
            </h4>
            <ul className="flex flex-col items-start list-disc marker:text-Color3 text-Color4">
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
        <li className="bg-Color1 h-[28.75rem] flex flex-col justify-between rounded-xl shadow-2xl items-center py-4 px-14 w-[25rem] overflow-hidden translate-y-[0.5rem]">
          <div className="flex flex-col items-center justify-center">
            <h4 className="font-semibold text-[1.4rem] text-Color2 mb-3">
              Premium
            </h4>
            <ul className="flex flex-col items-start list-disc marker:text-Color3 text-Color4">
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
        <li className="bg-Color1 h-[23rem] flex flex-col justify-between rounded-xl shadow-2xl items-center py-4 px-14 w-[20rem] overflow-hidden">
          <div className="flex flex-col items-center justify-center">
            <h4 className="font-semibold text-[1.4rem] text-Color2 mb-3">
              Standard
            </h4>
            <ul className="flex flex-col items-start list-disc marker:text-Color3 text-Color4">
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
