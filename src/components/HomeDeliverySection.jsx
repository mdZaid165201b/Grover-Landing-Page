import React from "react";
import Chef from "../assets/Chef.png"
const HomeDeliverySection = () => {
  return (
    <main className="w-screen flex justify-center items-center h-full my-5 ">
      <div className="w-[80%] flex ">
        
        <div className="w-[55%] flex justify-center my-20">
          <div className="flex flex-col justify-start mt-20 mx-10">
            <div className="text-[#F9BA45] tracking-wide font-semibold">
              <h1 className="uppercase">Home Delivery</h1>
            </div>
            <div className="w-[400px] h-fit flex justify-start text-4xl text-[#2E2E2E] tracking-wide font-bold mt-5">
              <h1>Sit at Home We Will Take Care Your Order</h1>
            </div>
            <div className="w-[400px] my-5 text-[#676767] font-semibold">
              <p>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos.
              </p>
            </div>
            <button className="border border-[#F86061] w-fit px-4 py-3 text-[#F86061] hover:bg-[#F86061] hover:text-white rounded-md duration-200 my-9">
              Explore Now
            </button>
          </div>
        </div>
        <div className="w-[45%] flex justify-center items-center px-20">
          <div className="flex justify-end">
            <img src={Chef} alt="Men Chef"/>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HomeDeliverySection;
