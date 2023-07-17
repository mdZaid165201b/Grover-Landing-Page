import React from "react";
import ShippingTruck from "../assets/ShippingTruck.png";

const FeatureCard = ({ icon, title, desc, middle, key }) => {
  return (
    <div className="relative mx-5" key={key}>
        <div className={`${middle && "bg-[#FE6A6A] sm:w-[250px] sm:h-[270px] md:w-[300px] md:h-[320px] absolute left-8 transfom -rotate-[3deg]"} rounded-md shadow-sm shadow-black/40`}></div>
      <div className="-z-40 flex flex-col justify-center items-center sm:w-[250px] sm:h-[270px] lg:h-[310px] lg:w-[300px] bg-white rounded-lg shadow-sm drop-shadow-sm shadow-black/10">
        <img src={icon} alt="shippingtruck" />
        <h1 className="text-[#2E2E2E] font-semibold tracking-wide text-lg">
          {title}
        </h1>
        <div className="flex justify-center text-center mx-5 my-4 text-[#676767]">
          <p>{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
