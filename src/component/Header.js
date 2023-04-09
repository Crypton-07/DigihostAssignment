import React from "react";
import logo from "../assets/logo.svg";

function Header() {
  // flex items-center justify-between px-24 lg:px-36 mt-4 font-normal text-sm cursor-pointer
  return (
    <div class="grid space-y-4 grid-cols-3 justify-items-center m-10 ">
      <div class="flex flex-col justify-between space-y-2 md:space-y-0 md:flex md:flex-row  md:items-center  md:justify-evenly list-none md:space-x-10 md:text-lg">
        <li>Features</li>
        <li>Pricing</li>
        <li>Testimonials</li>
        <li>Resources</li>
      </div>
      <div class="">
        <img class="w-20 h-20" src={logo} alt="logo" />
      </div>
      <div class="text-sm md:text-lg flex flex-col justify-between md:flex md:flex-row md:items-center md:space-x-10 list-none md:px-10 cursor-pointer">
        <li>Company</li>
        <li>Contact</li>
        <button class="px-6 py-1 border-cyan-500 border-2 hover:bg-cyan-500 hover:text-white transition duration-200 ease-in">
          Login
        </button>
      </div>
    </div>
  );
}

export default Header;
