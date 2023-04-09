import React from "react";
// import Mask from "../assets/Mask-group.png";

function Mid() {
  return (
    <div className="bg-[#EDFEFF] w-full h-[550px]">
      <div className=" ">
        <div className=" grid grid-cols-1 justify-items-center text-center space-y-10">
          <div className="md:w-[750px] w-[500px]">
            <p className="md:text-[44px] text-2xl font-bold mt-10 leading-snug">
              A powerful online engagement tool that’s intuitive and simple to
              use.
            </p>
          </div>
          <div className="md:max-w-[447px] max-w-[440px]">
            <p className=" text-gray-500">
              With stellar one-click reports and unmatched support, see how
              Circle will make a difference in your business.
            </p>
          </div>

          <button className="h-10 px-4 py-2 bg-cyan-500 text-white active:scale-90 transition duration-150 shadow-md hover:shadow-xl">
            {`Get Started Free >`}
          </button>
          {/* <div className="absolute top-96 left-60 w-full text-center">
          <img className="w-[974px]" src={Mask} alt="Rectangle" />
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Mid;
