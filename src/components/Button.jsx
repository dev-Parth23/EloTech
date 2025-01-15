import React from "react";
import { GoArrowRight } from "react-icons/go";

const Button = ({ title }) => {
  return (
    <a href="/contact"
    className="flex items-center gap-4 px-4 py-2 bg-[#EBFD40] rounded-full hover:bg-white delay-100 ease-in-out">
    <h3 className="text-lg font-[Font2] font-medium text-black">{title}</h3>
    <span className="p-3 bg-black rounded-full text-[#ffffff]"><GoArrowRight /></span>
    </a>
  );
};

export default Button;