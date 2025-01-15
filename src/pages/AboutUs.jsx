import React from "react";

const AboutUs = () => {
  return (
    <div className="flex flex-col w-screen h-screen pt-10 bg-[#151518]">
      <div className="flex items-center pl-10">
        <div className="w-px h-12 bg-gray-400 mx-4"></div>
        <h2 className="text-3xl font-[Font2]">WHAT WE'RE ALL ABOUT</h2>
      </div>

      <h1 className="pt-16 text-7xl text-center font-[Font1] leading-none">
        Forging Ideas into{" "}
        <span className="text-transparent bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text">
          Digital Reality.
        </span>
      </h1>

      <h3 className="pt-12 text-4xl text-center font-[Font7] leading-normal px-14">
        Transforming ideas into reality with{" "}
        <span className="px-1 rounded-sm bg-zinc-800">innovative design</span>,{" "}
        <span className="px-1 rounded-sm bg-zinc-800">branding</span> and{" "}
        <span className="px-1 rounded-sm bg-zinc-800">
          cutting-edge technology
        </span>
        .
      </h3>
    </div>
  );
};

export default AboutUs;
