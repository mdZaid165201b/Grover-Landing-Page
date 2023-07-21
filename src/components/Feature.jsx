import React from "react";
import FeatureCard from "./FeatureCard";
import ShippingTruck from "../assets/ShippingTruck.png";
import DollarHand from "../assets/DollarHand.png";
import MessageLock from "../assets/MessageIcon.png";

const Feature = () => {
  const featureData = [
    {
      icon: ShippingTruck,
      title: "Free Shipping",
      desc: "Enjoy Order in a hand using the fresness of groceries.",
      middle: false
    },
    {
      icon: DollarHand,
      title: "15 days returns",
      desc: "Order in a handy way using the freshness of the groceries.",
      middle: true
    },
    {
      icon: MessageLock,
      title: "Secure Checkout",
      desc: "If you get rotten items - return immediately to us.",
      middle: false
    },
  ];
  return (
    <main className="w-screen flex justify-center items-center h-full my-32 sm:my-10 bg-[#FEF5F5] ">
      <div className="w-full px-5 sm:px-0 sm:w-[80%] flex sm:h-[700px]  ">
        <div className="w-full mt-10 sm:mt-14">
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-[#F54748] font-semibold tracking-wide text-lg">
              What we Serve
            </h1>
            <div className="w-[350px] flex justify-center items-center text-center">
              <h1 className="font-bold text-[#2E2E2E] text-2xl leading-10">
                Fruit And Vegetable Delivered To Your Home
              </h1>
            </div>
          </div>
          <div className="w-full flex  justify-center my-7">
            <div className="w-full sm:w-[80%] h-full flex flex-col sm:flex-row gap-5 justify-between sm:p-5 ">
              {featureData.map((current, index) => (
                <FeatureCard icon={current.icon} title={current.title} desc={current.desc} middle={current.middle} key={index}/>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Feature;
