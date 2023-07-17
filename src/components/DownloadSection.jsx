import React from "react";
import Mobile from "../assets/Mobile.png";
import AppleIcon from "../assets/App.png";
import PlayStoreIcon from "../assets/playstore.png";

const DownloadSection = () => {
  return (
    <main className="w-screen flex justify-center items-center h-full my-10 bg-[#FEF5F5] ">
      <div className="w-[80%] flex h-[700px] ">
        <div className="w-[45%] flex justify-center items-center">
          <img src={Mobile} alt="Mobile" />
        </div>
        <div className="w-[45%] flex justify-start">
          <div className="flex flex-col justify-center mx-10">
            <div className="text-[#F54748] tracking-wide font-semibold">
              <h1 className="">Download Our App</h1>
            </div>
            <div className="w-[400px] h-fit flex justify-start text-4xl text-[#2E2E2E] tracking-wide font-bold mt-5">
              <h1>Get the Groceries app order more easily.</h1>
            </div>
            <div className="w-[400px] my-5 text-[#676767] font-semibold">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut.
              </p>
            </div>
            <div className="flex justify-between w-[400px]">
            <div className="w-[200px] border border-[#EEDCDC] flex justify-between px-5 py-2 rounded-md group cursor-pointer">
                <img src={AppleIcon} alt="Apple Icon" />
                <div className="mx-4 flex justify-center items-center tracking-wide font-semibold text-[#2E2E2E] group-hover:text-[#939292] duration-200">
                  <h1>App Store</h1>
                </div>
              </div>
              <div className="w-fit border border-[#EEDCDC] flex justify-between px-5 py-2 rounded-md group cursor-pointer">
                <img src={PlayStoreIcon} alt="Apple Icon" />
                <div className="mx-4 flex justify-center items-center tracking-wide font-semibold text-[#2E2E2E] group-hover:text-[#939292] duration-200">
                  <h1>Play Store</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default DownloadSection;
