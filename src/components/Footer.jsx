import React from "react";
import Logo from "../assets/logo.png";
const Footer = () => {
  return (
    <main className="w-screen flex justify-center items-center h-full mt-10">
      <div className="w-[80%] flex justify-center h-[500px]">
        <div className="w-[40%] flex my-10">
          <div className="flex flex-col justify-center">
            <div className="">
              <img src={Logo} alt="Logo" />
            </div>
            <div className="w-[400px] text-[#676767] tracking-wide my-5">
              <p>
                Fast delivery, which is active all over the world, serves with
                many transportation vehicles.
              </p>
            </div>
            <div className="flex flex-col justify-end">
            <p className="text-[#8C8C8C]">All Rights Reserved @ BESNIK 2021</p>
            </div>
          </div>
        </div>
        <div className="w-[40%] flex flex-col justify-center my-10 px-20">
          <div className="w-full flex justify-center my-10">
            <h1 className="font-bold text-3xl text-[#2E2E2E] tracking-wide">
              Subscribe to Latest News
            </h1>
          </div>
          <div className="w-full rounded-full ">
            <input
              type="text"
              className="w-full outline-none px-7 py-3 shadow-md drop-shadow-md shadow-black/5 rounded-full"
              placeholder="Enter Email"
            />
            <div className="w-full flex justify-center">
              <button className="bg-[#F86061] w-fit px-4 py-3 text-white rounded-md hover:bg-[#c73535] duration-200 my-9 tracking-wider">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Footer;
