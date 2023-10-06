import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="px-4 py-2 flex justify-between items-center h-24 text-white m-auto m-w-[1240px]">
      <h1 className="w-full flex text-3xl font-bold text-[#00df9a]">REACT</h1>
      <ul className="hidden md:flex">
        <li className="p-4 cursor-pointer">Home</li>
        <li className="p-4 cursor-pointer">Company</li>
        <li className="p-4 cursor-pointer">Resources</li>
        <li className="p-4 cursor-pointer">About</li>
        <li className="p-4 cursor-pointer ">Contact</li>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {nav ? (
          <i style={{ fontSize: "25px" }} className="fa-solid fa-xmark"></i>
        ) : (
          <i style={{ fontSize: "25px" }} className="fa-solid fa-bars"></i>
        )}
      </div>
      {nav && (
        <div className="fixed top-[100px] left-0 w-[60%] h-24 border-r border-gray-700  ">
          <ul className="uppercase bg-white ease-in-out duration-500">
            <li className="p-4 border-b border-gray-600 cursor-pointer">Home</li>
            <li className="p-4 border-b border-gray-600 cursor-pointer">Company</li>
            <li className="p-4 border-b border-gray-600 cursor-pointer">Resources</li>
            <li className="p-4 border-b border-gray-600 cursor-pointer">About</li>
            <li className="p-4 border-b border-gray-600 cursor-pointer">Contact</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default NavBar;
