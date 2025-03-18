import React, { useState } from "react";
import axios from "axios";
import { IoCarSportOutline } from "react-icons/io5";

const Explore = () => {
  return (
    <div className="">
      <div className="w-[90%] mx-auto bg-transparent text-black flex justify-between items-center">
        <div id="left" className="w-[30%] flex flex-col gap-2">
          <h4 className="text-center text-[#afb0b1]">Our Vehicle</h4>
          <h2 className="text-center font-semibold text-3xl">
            Explore Our Brands
          </h2>
        </div>
        <div
          id="right"
          className="w-[40%] flex flex-col gap-[.5em] font-medium"
        >
          <div className="flex justify-between">
            <h5 className="text-red-500">Body Type</h5>
            <h5>By Budget</h5>
            <h5>Fuel Type</h5>
          </div>
          <hr />

          <div className="flex justify-between">
            {["Hatchback", "Sedan", "SUV", "MUV"].map((type, index) => (
              <span
                key={index}
                className={`flex align-middle justify-center items-center gap-3 ${
                  index === 0 ? "text-red-500" : ""
                }`}
              >
                <IoCarSportOutline />
                <h5>{type}</h5>
              </span>
            ))}
          </div>
        </div>
      </div>
      <div
        id="cards"
        className="mt-10 w-[90%] mx-auto h-[60vh] bg-red-300 justify-between flex"
      >
        <div className="h-full w-[28%] flex flex-col">
          <div className="w-full h-[80%]">
            <img
              src="https://img.autocarpro.in/autocarpro/ef645ec4-5266-484a-ad9e-83489e31d48c_ScorpioN.png?w=735&h=490&q=80"
              alt=""
            />
          </div>
          <div className="flex justify-between">
            <div>Mahindra Scorpio N</div>
            <button className="bg-black text-white p-3 rounded-3xl">
              Buy Now
            </button>{" "}
          </div>
        </div>
        <div className="h-full w-[28%] flex flex-col">
          <div className="w-full h-[80%]">
            <img
              src="https://img.autocarpro.in/autocarpro/ef645ec4-5266-484a-ad9e-83489e31d48c_ScorpioN.png?w=735&h=490&q=80"
              alt=""
            />
          </div>
          <div className="flex justify-between">
            <div>Mahindra Scorpio N</div>
            <button className="bg-black text-white p-3 rounded-3xl">
              Buy Now
            </button>{" "}
          </div>
        </div>
        <div className="h-full w-[28%] flex flex-col">
          <div className="w-full h-[80%]">
            <img
              src="https://img.autocarpro.in/autocarpro/ef645ec4-5266-484a-ad9e-83489e31d48c_ScorpioN.png?w=735&h=490&q=80"
              alt=""
            />
          </div>
          <div className="flex justify-between">
            <div>Mahindra Scorpio N</div>
            <button className="bg-black text-white p-3 rounded-3xl">
              Buy Now
            </button>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;
