import React from "react";
import Dell from "../assets/Dell.svg";
import Shell from "../assets/Shell.svg";
import Yamaha from "../assets/Yamaha.svg";
import Biocon from "../assets/Biocon.svg";
import Capgemini from "../assets/Capgemini.svg";
import Birla from "../assets/Birla.svg";
import Vector from "../assets/Vector.svg";
import People from "../assets/People.svg";
import rectangle1 from "../assets/rectangle1.svg";
import rectangle2 from "../assets/rectangle2.svg";
import rectangle3 from "../assets/rectangle3.svg";
import rectangle4 from "../assets/rectangle4.svg";
import rectangle5 from "../assets/rectangle5.svg";
import rectangle6 from "../assets/rectangle6.svg";
import img1 from "../assets/img1.svg";
import img2 from "../assets/img2.svg";
import img3 from "../assets/img3.svg";
import img4 from "../assets/img4.svg";
import img5 from "../assets/img5.svg";
import img6 from "../assets/img6.svg";
import file from "../assets/file.svg";
import file1 from "../assets/file1.svg";
import file2 from "../assets/file2.svg";
import file3 from "../assets/file3.svg";
import img7 from "../assets/img7.svg";
import img8 from "../assets/img8.svg";
import img9 from "../assets/img9.svg";
import img10 from "../assets/img10.svg";
import img11 from "../assets/img11.svg";
import img12 from "../assets/img12.svg";
import img13 from "../assets/img13.svg";
import paypal from "../assets/paypal.svg";
import arrow1 from "../assets/arrow1.svg";
import arrow2 from "../assets/arrow2.svg";
import play from "../assets/play.svg";
import LinkedIn from "../assets/linkedIn.svg";
import Twitter from "../assets/twitter.svg";

function Midlle() {
  return (
    <div>
      <div className="lg:max-w-6xl mx-[auto]">
        <div className="text-center mt-56">
          <button className="px-6 text-cyan-500 bg-cyan-50 py-4 rounded-full shadow-md font-bold my-3">
            Our Customers
          </button>
          <p className="mt-10 text-4xl tracking-wider">
            Trusted by <span className="font-bold">100,000+ customers in</span>{" "}
            90+ countries
          </p>
        </div>
        <div className="grid grid-cols-2 justify-items-center space-y-4 md:space-y-0 md:flex md:items-center md:flex-grow md:justify-between mt-20 cursor-pointer">
          <div>
            <img src={Capgemini} alt="copmanies" />
          </div>
          <div>
            <img src={Yamaha} alt="copmanies" />
          </div>
          <div>
            <img src={Biocon} alt="copmanies" />
          </div>
          <div>
            <img src={Dell} alt="copmanies" />
          </div>
          <div>
            <img src={Birla} alt="copmanies" />
          </div>
          <div>
            <img src={Shell} alt="copmanies" />
          </div>
        </div>
        <div className="grid grid-cols-1 justify-items-center space-y-4 md:flex md:items-center md:justify-between mt-20">
          <div className="flex items-center space-x-2">
            <img src={Vector} alt="" />
            <p>
              <span className="text-cyan-500">18281</span> signed up last month
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <img src={Vector} alt="" />
            <p>
              <span className="text-cyan-500">GDPR- & CCPA</span>-ready
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <img src={Vector} alt="" />
            <p>
              <span className="text-cyan-500">Leader@G2</span> Summer
            </p>
          </div>
        </div>
        <div className="border-b border-gray-200 w-full mt-8 pt-2" />

        <div className="grid grid-cols-1 justify-items-center sm:grid-cols-2 mt-10 gap-10">
          <div className="my-[auto] text-center mx-auto md:text-left">
            <p className="text-sm p-2 w-28 h-[auto] mx-auto md:mx-0  rounded-full bg-cyan-50 text-cyan-500">
              OUR PROMISE
            </p>
            <h1 className="mt-6 text-2xl p-2">
              Tool <span className="font-semibold">built for people.</span>{" "}
            </h1>
            <p className="text-lg mt-4 text-gray-500 p-2">
              Whether you want to edit your Google Docs, resolve Jira issues, or
              collaborate over Zoom. Circle has 100+ integrations with tools you
              already use and love.
            </p>
            <button className="px-2 text-xl py-4 m-4 sm:mt-14 bg-cyan-500 text-white active:scale-90 transition duration-150 shadow-md hover:shadow-xl">
              {`Get Started Free`}
            </button>
          </div>
          <div className="float-right">
            <img
              className="rounded-xl w-52 md:w-full"
              src={People}
              alt="people"
            />
          </div>
        </div>
        <div className="border-b border-gray-200 w-full mt-8 pt-2" />
        <div className="mt-20">
          <div className="text-center">
            <button className="px-6 text-cyan-500 bg-cyan-50 py-4 rounded-full shadow-md font-bold my-3">
              Awards
            </button>
            <p className="mt-10 text-4xl">
              An <span className="font-bold">award winning</span> platform,{" "}
              <span className="font-bold">loved by customers</span>.
            </p>
          </div>
        </div>

        {/* 3rd section */}

        <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 justify-items-center">
          <div className="relative my-10">
            <div>
              <img src={rectangle1} alt="any" />
            </div>
            <div className="absolute top-[20%] left-[30%] text-center w-24">
              <img src={img1} alt="" />
              <p className="text-xs font-bold mt-4">
                Market leader across 18 categories
              </p>
            </div>
          </div>
          <div className="relative my-10">
            <div>
              <img src={rectangle2} alt="any" />
            </div>
            <div className="absolute top-[20%] left-[30%] text-center w-24 ">
              <img src={img2} alt="" />
              <p className="text-xs font-bold mt-4">
                Most loved SaaS tool in 2021
              </p>
            </div>
          </div>
          <div className="relative my-10">
            <div>
              <img src={rectangle3} alt="any" />
            </div>
            <div className="absolute top-[25%] left-[30%] text-center w-24">
              <img src={img3} alt="" />
              <p className="text-xs font-bold mt-4">Category leader in 2022</p>
            </div>
          </div>
          <div className="relative my-10">
            <div>
              <img src={rectangle4} alt="any" />
            </div>
            <div className="absolute top-[25%] left-[30%] text-center w-24">
              <img className="w-24" src={img4} alt="" />
              <p className="text-xs font-bold mt-4">
                Most recommended tool in 2021
              </p>
            </div>
          </div>
          <div className="relative my-10">
            <div>
              <img src={rectangle5} alt="any" />
            </div>
            <div className="absolute top-[20%] left-[30%] text-center w-24">
              <img src={img5} alt="" />
              <p className="text-xs font-bold mt-4">
                Champion in survey tool 2022
              </p>
            </div>
          </div>
          <div className="relative my-10">
            <div>
              <img src={rectangle6} alt="any" />
            </div>
            <div className="absolute top-[20%] left-[30%] text-center w-24">
              <img src={img6} alt="" />
              <p className="text-xs font-bold mt-4">
                Top performer spring 2021
              </p>
            </div>
          </div>
        </div>
        <div className="border-b border-gray-200 w-full mt-8 pt-2" />

        {/* 4th Section */}
        <div className="mt-20">
          <div className="text-center">
            <button className="px-4 text-cyan-500 bg-cyan-50 py-3 rounded-full font-bold my-3 text-sm">
              BUILT FOR PEOPLE
            </button>
            <p className="mt-10 text-4xl">
              <span className="font-bold">Easy</span> for beginners.
              <span className="font-bold">Powerful</span> for experts.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 justify-items-center mt-20 text-lg border-b-cyan-600 border-b-2 ">
          <div className="flex items-center space-x-2 my-4">
            <img src={file} alt="" />
            <p className="text-cyan-500">Create</p>
          </div>
          <div className="flex items-center space-x-2 my-4">
            <img src={file1} alt="" />
            <p className="text-gray-300">Distribute</p>
          </div>
          <div className="flex items-center space-x-2 my-4">
            <img src={file2} alt="" />
            <p className="text-gray-300">Collect</p>
          </div>
          <div className="flex items-center space-x-2">
            <img src={file3} alt="" />
            <p className="text-gray-300">Analyze</p>
          </div>
        </div>
      </div>
      <div className="bg-[#EDFEFF]">
        <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center md:justify-items-end place-items-center lg:max-w-6xl md:max-w-4xl mx-auto h-[650px] md:h-[550px]">
          <div className="mt-4 text-center md:text-left">
            <p className="text-3xl font-medium lea p-2">Create</p>
            <h1 className="mt-6 text-xl p-2 font-medium">
              Advanced research software
            </h1>
            <p className="text-base mt-4 text-gray-500 p-2 ">
              Whether you want to edit your Google Docs, resolve Jira issues, or
              collaborate over Zoom. Circle has 100+ integrations with tools you
              already use and love.
            </p>
            <button className="px-8 text-lg py-3 m-4 sm:mt-14 bg-cyan-500 text-white active:scale-90 transition duration-150 shadow-md hover:shadow-xl">
              {`Get Started Free`}
            </button>
          </div>
          <div className="mt-10">
            <img
              className="rounded-xl w-[462px] h-[287px]"
              src={img7}
              alt="people"
            />
          </div>
        </div>
      </div>
      {/* 5th section */}
      <div className="lg:max-w-6xl mx-[auto] my-24 md:my-32 relative">
        <div className="flex items-center flex-col md:flex-row mx-auto">
          <div className="my-6 ">
            <h6 className="text-cyan-500 text-sm bg-cyan-50 w-24 text-center rounded-full my-4">
              Testimonials
            </h6>
            <p className="w-36 text-3xl leading-10 my-4 text-left">
              See how customers <span className="font-bold">drive impact</span>
            </p>
            <button className="px-8 text-lg py-3 sm:mt-14 bg-cyan-500 text-white active:scale-90 transition duration-150 shadow-md hover:shadow-xl">
              {`See case studies`}
            </button>
          </div>
          <div className="px-20 relative md:left-20">
            <img src={img8} alt="any" />
            <div className="absolute top-[40%] left-[45%] md:top-[40%] w-full md:left-[45%]">
              <img src={play} alt="any" />
            </div>
          </div>
        </div>
        <div className="w-[358px] h-[239px] bg-[#EDFEFF] p-2 md:absolute sm:left-[55%] sm:top-[30%] mx-auto my-8 md:my-0">
          <img className="w-20 h-14" src={paypal} alt="" />
          <p className="text-sm leading-6 font-light w-[296px]">
            "I used to have a bunch of different tools I had to pay for, with
            Circle you get everything in one bundle."
          </p>
          <p className="text-sm font-light mt-2">
            <span className="font-medium">Michel Dedrick</span> <br /> Senior
            Conversion Optimizer
          </p>
        </div>
        <div className="absolute flex w-14 justify-between right-[0%] top-[0%]">
          <img
            className="active:scale-50 transition duration-100 ease-in"
            src={arrow1}
            alt="any"
          />
          <img
            className="active:scale-50 transition duration-100 ease-in"
            src={arrow2}
            alt="any"
          />
        </div>
        <div className="border-b border-gray-200 w-full my-32 pt-2" />
      </div>

      {/* 6th section */}
      <div className="lg:max-w-6xl mx-[auto]">
        <div className="grid grid-cols-1 justify-items-center sm:grid-cols-2 gap-10 mx-auto">
          <div className="my-auto text-center md:text-left">
            <p className="text-[28px] ">
              Looking for a <span className="font-bold">solution</span> for your
              business?
            </p>
            <p className="my-4">
              Check out Sogolytics enterprise feedback and experience management
              platform.
            </p>
            <button className="px-3 text-xl py-2 sm:mt-14 bg-cyan-500 text-white active:scale-90 transition duration-150 shadow-md hover:shadow-xl">
              {`Learn more`}
            </button>
            <button className="px-3 text-xl ml-10 py-2 sm:mt-14 border border-cyan-500 text-cyan-500 active:scale-90 transition duration-150 shadow-md">
              {`Schedule a consultation`}
            </button>
          </div>
          <div className="float-right">
            <img className="rounded-xl w-[350px] " src={img9} alt="people" />
          </div>
        </div>
      </div>
      <div className="border-b border-gray-200 w-full my-20 pt-2" />

      {/* 7th Sectioin */}
      <div className="lg:max-w-6xl mx-[auto]">
        <div className="text-center">
          <button className="px-4 text-cyan-500 bg-cyan-50 py-2 rounded-full font-bold my-3 text-sm">
            Resources
          </button>
          <p className="mt-10 text-4xl">
            <span className="font-bold">Stay</span> in the{" "}
            <span className="font-bold">know</span>
          </p>
        </div>
        <div className="grid grid-cols-1 space-y-6 sm:space-y-4 md:space-y-0  sm:grid-cols-2 md:grid-cols-3 justify-items-center my-20">
          <div className="shadow-md">
            <div className="mx-10 w-[250px] h-[500px]">
              <img className="mt-10" src={img10} alt="" />
              <h4 className="font-semibold my-4">
                Excepteur sint occaecat cupidatat non proident
              </h4>
              <p className="text-sm text-gray-500">
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit, sed quia consequuntur magni dolores eosNeque porro
                quisquam est, qui dolorem ipsum quia dolor sit amet,
                consectetur, adipisci veli
              </p>
              <button className="px-2 text-xl py-2 my-6 sm:mt-14 bg-[#0CBBC7] text-white active:scale-90 transition duration-150 shadow-md hover:shadow-xl">
                {`Learn more`}
              </button>
            </div>
          </div>
          <div className="shadow-md">
            <div className="mx-10 w-[250px] h-[500px]">
              <img className="mt-10" src={img11} alt="" />
              <h4 className="font-semibold my-4">
                Excepteur sint occaecat cupidatat non proident
              </h4>
              <p className="text-sm text-gray-500">
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit, sed quia consequuntur magni dolores eosNeque porro
                quisquam est, qui dolorem ipsum quia dolor sit amet,
                consectetur, adipisci veli
              </p>
              <button className="px-2 text-xl py-2 my-6 sm:mt-14 bg-[#0CBBC7] text-white active:scale-90 transition duration-150 shadow-md hover:shadow-xl">
                {`Learn more`}
              </button>
            </div>
          </div>
          <div className="shadow-md">
            <div className="mx-10 w-[250px] h-[500px]">
              <img className="mt-10" src={img12} alt="" />
              <h4 className="font-semibold my-4">
                Excepteur sint occaecat cupidatat non proident
              </h4>
              <p className="text-sm text-gray-500">
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit, sed quia consequuntur magni dolores eosNeque porro
                quisquam est, qui dolorem ipsum quia dolor sit amet,
                consectetur, adipisci veli
              </p>
              <button className="px-2 text-xl py-2 my-6 sm:mt-14 bg-[#0CBBC7] text-white active:scale-90 transition duration-150 shadow-md hover:shadow-xl">
                {`Learn more`}
              </button>
            </div>
          </div>
        </div>
      </div>
      <footer className="bg-[#232323] h-full w-full pb-10">
        <div className="lg:max-w-6xl mx-[auto] ">
          <div className="grid md:grid-cols-2 sm:grid-cols-1 justify-items-center mx-auto">
            {/* left */}
            <div className="text-center my-auto relative">
              <img className="my-20 w-56" src={img13} alt="any" />
              <p className="absolute top-[48%] text-xs text-white leading-3 tracking-wider">
                Made with lots of ❤️ in San Frasisco
              </p>
            </div>
            {/* right */}
            <div className="space-x-14 flex justify-evenly">
              <div className="my-20">
                <h1 className="text-2xl text-white font-semibold my-6">
                  Products
                </h1>
                <div className="list-none text-sm text-gray-500 space-y-4">
                  <li>Delta</li>
                  <li>Sigma</li>
                  <li>Zeta</li>
                  <li>Alpha</li>
                  <li>Acumen</li>
                </div>
              </div>
              <div className="my-20">
                <h1 className="text-2xl text-white font-semibold my-6">
                  Resources
                </h1>
                <div className="list-none text-sm text-gray-500 space-y-4">
                  <li>Help</li>
                  <li>Training Videos</li>
                  <li>Webinars</li>
                  <li>Request a Demo</li>
                  <li>Create Surveys</li>
                  <li>Quiz Maker</li>
                </div>
              </div>
              <div className="my-20">
                <h1 className="text-2xl text-white font-semibold my-6">
                  Company
                </h1>
                <div className="list-none text-sm text-gray-500 space-y-4">
                  <li>About Us</li>
                  <li>Careers</li>
                  <li>Team</li>
                  <li>Contact Us</li>
                </div>
              </div>
            </div>
          </div>
          <div className="border-b border-gray-200 w-full pt-2" />
          <div className="grid grid-cols-1 sm:grid sm:grid-cols-1 space-y-4 md:space-y-0 md:grid-cols-3 justify-items-center mt-14">
            <div className="text-gray-400 text-center">
              <p>Copyright 2022 Circle. All rights reserved.</p>
            </div>
            <div className=" flex md:flex md:justify-between space-x-4 md:items-center">
              <img src={LinkedIn} alt="" />
              <img src={Twitter} alt="" />
            </div>
            <div className="flex justify-between items-center list-none text-xs space-x-1 text-gray-400">
              <li>
                Privacy Policy <span className="ml-1">|</span>
              </li>
              <li>
                Data & Security <span className="ml-1">|</span>
              </li>
              <li>
                Terms of Service <span className="ml-1">|</span>
              </li>
              <li>Data & Security </li>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Midlle;
