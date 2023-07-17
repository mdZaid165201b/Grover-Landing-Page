import React from "react";
import Logo from "../assets/logo.png";
import { IoIosSearch } from "react-icons/io";
import { BsBasket2Fill } from "react-icons/bs";

const Navbar = () => {
  return (
    <nav className="w-screen flex justify-center h-[100px] ">
      <div className="w-[80%] flex justify-between items-center">
        <div className="flex justify-center items-center cursor-pointer">
          <img src={Logo} alt="logo" />
        </div>
        <div className="w-[700px] h-[70px] flex justify-between items-center">
          <ul className="w-full flex justify-between items-center font-semibold px-24">
            <li className="drop-shadow-2xl shadow-black shadow-2xl">
              <a
                href="#"
                className="text-[#F55253] font-poppins hover:text-[#c13c3c] duration-200"
              >
                Home
              </a>
            </li>
            <li className=" drop-shadow-2xl shadow-black shadow-2xl">
              <a
                href="#"
                className="text-[#4D4D4D] font-poppins hover:text-[#c13c3c] duration-200"
              >
                Menu
              </a>
            </li>
            <li className=" drop-shadow-2xl shadow-black shadow-2xl">
              <a
                href="#"
                className="text-[#4D4D4D] font-poppins hover:text-[#c13c3c] duration-200"
              >
                Service
              </a>
            </li>
            <li className=" drop-shadow-2xl shadow-black shadow-2xl">
              <a
                href="#"
                className="text-[#4D4D4D] font-poppins hover:text-[#c13c3c] duration-200"
              >
                Shop
              </a>
            </li>
          </ul>
        </div>
        <div className="w-[300px] h-[70px] flex justify-center items-center">
          <div className="flex items-center">
            <IoIosSearch className="text-[#8B8B8B] absolute ml-3" />
            <input
              type="text"
              placeholder="Search"
              autoComplete={false}
              className="font-poppins w-full rounded-lg px-10 py-2 text-black placeholder-[#232323] outline-none transition focus:border-gray-400 active:border-primary disabled:cursor-default shadow-xl shadow-black/5 disabled:bg-[#F5F7FD]"
            />
            <div className="mx-5 h-[2rem] bg-black/10 w-[2px]"></div>
            <div className="h-[70px] flex justify-center items-center relative cursor-pointer group">
              <BsBasket2Fill size={30} className="text-[#3C3737] group-hover:text-[#2a2828] duration-200"/>
              <div className="w-[30px] h-[30px] bg-[#F54B4B] rounded-full absolute bottom-12 -right-5 p-3 shadow-lg drop-shadow-md shadow-red-600/50 text-white flex justify-center items-center group-hover:shadow-red-600/80 group-hover:bg-[#e53939] duration-200 ">2</div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
