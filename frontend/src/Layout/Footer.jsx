import React from "react";

const Footer = () => {
  return (
    <div className="bg-Color1 min-h-[18rem] pt-[4.5rem] overflow-hidden text-Color4 flex justify-center">
      <ul className="flex justify-around items-start w-[90vw] max-w-[80rem] flex-wrap">
        <li className="px-4 pb-4 grow-1">
          <h3 className="mb-2 font-semibold text-Color2">GYMNAISM</h3>
          <p className="w-[10rem]">
            We Provide you all Necessary things in online and offline mode to
            make you fit
          </p>
        </li>
        <li className="flex flex-col items-center px-4 pb-4">
          <h3 className="mb-2 font-semibold text-Color2">Useful Links</h3>
          <ul className="flex flex-col justify-around">
            <li>Products</li>
            <li>Products</li>
            <li>Products</li>
            <li>Products</li>
          </ul>
        </li>
        <li className="flex flex-col items-center px-4 pb-4">
          <h3 className="mb-2 font-semibold text-Color2">Useful Links</h3>
          <ul className="flex flex-col justify-around">
            <li>Products</li>
            <li>Products</li>
            <li>Products</li>
            <li>Products</li>
          </ul>
        </li>
        <li className="flex flex-col justify-center px-4 pb-4">
          <h3 className="font-semibold text-Color2">Contact Us</h3>
          <div className="relative">
            <input className="bg-Color1 border-[1px] h-10 w-[18rem]" />
            <button className="bg-Color3 w-16 h-10 absolute right-0  border-[1px] text-[1.3rem] text-Color1">
              {"--->"}
            </button>
          </div>
          <ul className="flex justify-around w-[16rem]">
            <li>T</li>
            <li>F</li>
            <li>L</li>
            <li>I</li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
