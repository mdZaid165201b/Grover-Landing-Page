import React from "react";
import GirlWithOrange from "../assets/Girl with Orange.png";
const Favorites = () => {
  return (
    <main className="w-screen flex justify-center items-center h-full my-10 ">
      <div className="w-[80%] flex">
        <div className="w-[55%] flex justify-center items-center px-20">
          <div className="flex justify-end">
            <img src={GirlWithOrange} alt="Girl with Orange Image" />
          </div>
        </div>
        <div className="w-[45%] flex justify-start my-20">
          <div className="flex flex-col justify-start mt-20 mx-10">
            <div className="text-[#03A66B] tracking-wide font-semibold">
              <h1 className="">Why Choose Us</h1>
            </div>
            <div className="w-[400px] h-fit flex justify-start text-4xl text-[#2E2E2E] tracking-wide font-bold mt-5">
              <h1>Find Favorites and Discover New Ones</h1>
            </div>
            <div className="w-[400px] my-5 text-[#676767] font-semibold">
              <p>
                At vero eos et accusamus et iusto odio dignissimos ducimus
                blanditiis praesen voluptatum deleniti.
              </p>
            </div>
            <button className="bg-[#F86061] w-fit px-4 py-3 text-white rounded-md hover:bg-[#c73535] duration-200 my-9">
              Explore Now
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Favorites;
