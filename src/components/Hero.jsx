import React from "react";
import Strawberry from "../assets/strawberry.png";
import { BsFillPlayFill } from "react-icons/bs";
import PersonImage from "../assets/Header Image.png"
const Hero = () => {
  return (
    <main className="w-screen flex justify-center items-center h-[700px] border my-10">
      <div className="w-[80%] flex h-[700px]">
        <div className="w-[55%] h-fullflex flex-col p-10">
          <div className="bg-[#FDECEC] w-fit px-4 py-2 rounded-full font-poppins flex justify-center items-center">
            <h1 className="text-[#F55556] text-lg ">More than Faster</h1>
            <img
              src={Strawberry}
              alt="Strawberry Image"
              className="flex justify-center items-center shadow-lg drop-shadow-2xl  shadow-red-400/40 mx-3"
            />
          </div>
          <div className="w-full [text-shadow:1px_1px_2px_var(--tw-shadow-color)] shadow-[#2E2E2E] text-[#2E2E2E] flex flex-col pr-24 mt-10">
            <h1 className="text-7xl font-extrabold    ">Groceries </h1>
            <h1 className="text-7xl font-extrabold ">
              {" "}
              delivered in as little as{" "}
              <span className="text-[#F55556] font-semibold [text-shadow:2px_2px_2px_var(--tw-shadow-color)] shadow-black/40">
                2 hours
              </span>
            </h1>
          </div>
          <div className="pr-24 my-8 mx-4 font-medium text-[#676767] w-[600px]">
            <p>
              Grocen atssures fresh grocery every morning to your family without
              getting out in this pandemic.
            </p>
          </div>
          <div className="my-3 flex">
            <button className="bg-[#F86061] px-4 py-3 text-white rounded-md hover:bg-[#c73535] duration-200">
              Order Now
            </button>
            <div className="flex justify-center items-center mx-5 hover:text-[#ae863b] cursor-pointer group">
              <div className="w-[40px] h-[40px] bg-white drop-shadow-md  shadow-black rounded-full flex justify-center items-center group-hover:bg-[#140e03] duration-200">
                <BsFillPlayFill className="text-[#FDC55E]  " />
              </div>
              <h1 className="text-[#363636] mx-3 text-lg  group-hover:text-[#131212]">Order Process</h1>
            </div>
          </div>
        </div>
        <div className="w-[45%] h-full flex justify-center items-center">
            <img src={PersonImage} alt="personImage" />
        </div>
      </div>
    </main>
  );
};

export default Hero;
