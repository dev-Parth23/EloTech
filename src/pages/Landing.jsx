import React, { useState, useEffect } from "react";
import Header from "../components/Header"; // Import the Header component
import video from "../assets/bg.mp4";
import { GoArrowDown } from "react-icons/go";

const Landing = () => {
  const [textIndex, setTextIndex] = useState(0);
  const textArray = [
    "Innovative, Invincible",
    "Excellence, Exceptional",
    "Dynamic, Driven",
    "Empowered, Efficient",
    "Resilient, Reliable",
    "Unified, Unstoppable",
    "Creative, Cutting-edge",
    "Futuristic, Flexible",
    "Optimized, Outstanding",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex + 1) % textArray.length);
    }, 1500); // Change text every 1.5 seconds

    return () => clearInterval(interval); // Cleanup the interval on unmount
  }, []);

  return (
    <div className="relative w-full h-screen">
      <div  className="absolute top-0 left-0 w-full h-full z-0">
        <video
          className="object-cover w-full h-full"
          autoPlay
          muted
          loop
          src={video}
        />
      </div>

      <div className="absolute w-full h-full bg-black opacity-40 z-10"></div>
      <div className="absolute w-full z-20">
        <Header />
      </div>

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 text-center text-white">
        <h1 className="text-6xl text-white font-[font1] text-nowrap font-bold transition-all duration-1000 ease-in-out">
          {textArray[textIndex]}
        </h1>
      </div>
      <div className="absolute top-[85%] left-[75%] flex gap-3 items-center animate-[bounce_1s_ease-in-out_infinite]">
        <span className="bg-black text-[#ffffff] rounded-full p-3">
          <GoArrowDown />
        </span>
        <h4 className="text-black font-[Font1] font-medium">Scroll to Explore</h4>
      </div>
    </div>
  );
};

export default Landing;
