import React from "react";
import Strawberry from "../assets/strawberry.png";
import { BsFillPlayFill } from "react-icons/bs";
import PersonImage from "../assets/Header Image.png"
const Hero = () => {
  return (
    <main className="w-screen flex justify-center items-center h-[600px]">
      <div className="w-full sm:w-[80%] h-full flex flex-col sm:flex-row ">
        <div className="w-[55%] h-full  flex flex-col p-6 sm:p-10">
          <div className="bg-[#FDECEC] w-[200px] sm:w-fit px-4 py-2 sm:py-2 rounded-full font-poppins flex justify-center items-center">
            <h1 className="text-[#F55556] text-sm sm:text-lg ">More than Faster</h1>
            <img
              src={Strawberry}
              alt="Strawberry Image"
              className="flex justify-center items-center shadow-lg drop-shadow-2xl  shadow-red-400/40 mx-3"
            />
          </div>
          <div className="w-full [text-shadow:1px_1px_2px_var(--tw-shadow-color)] shadow-[#2E2E2E] text-[#2E2E2E] flex flex-wrap sm:flex-col pr-24 mt-10">
            <h1 className="text-4xl sm:text-7xl font-extrabold    ">Groceries </h1>
            <h1 className="text-4xl sm:text-7xl font-extrabold mx-2 sm:mx-0">
              {"   "}
              delivered in as little as{" "}
              <span className="text-[#F55556] font-semibold [text-shadow:2px_2px_2px_var(--tw-shadow-color)] shadow-black/40">
                2 hours
              </span>
            </h1>
          </div>
          <div className="pr-10 sm:pr-24 my-8 sm:mx-4 font-medium text-[#676767] w-screen sm:w-[600px]">
            <p>
              Grocen atssures fresh grocery every morning to your family without
              getting out in this pandemic.
            </p>
          </div>
          <div className="my-3 flex">
            <div className="w-fit">
              <button className="bg-[#F86061] px-10 py-0 sm:px-4 sm:py-3  text-white rounded-md hover:bg-[#c73535] duration-200">
                Order Now
              </button>
            </div>
            <div className="sm:w-[300px]  flex justify-center items-center mx-10 hover:text-[#ae863b] cursor-pointer group">
              <div className="w-[45px] h-[45px] sm:w-[40px] sm:h-[40px] bg-white drop-shadow-md  shadow-black rounded-full flex justify-center items-center group-hover:bg-[#140e03] duration-200">
                <BsFillPlayFill className="text-[#FDC55E]  " />
              </div>
              <h1 className="text-[#363636] mx-3 text-lg  group-hover:text-[#131212]">Order Process</h1>
            </div>
          </div>
        </div>
        <div className="h-full sm:w-[45%]">
          <div className="w-screen  sm:w-full h-full flex justify-center items-center -my-16 sm:my-0 relative">
            <img src={PersonImage} alt="personImage" />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
