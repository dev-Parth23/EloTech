import React from "react";

const AboutUs = () => {
  return (
    <div className="bg-black h-screen w-screen px-20 pt-10 flex flex-col">
      <h2 className="font-[Font2] text-3xl">WHAT WE'RE ALL ABOUT</h2>

      <h1 className="font-[Font1] text-center text-7xl pt-16 leading-none">
        Forging Ideas into{" "}
        <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
          Digital Reality.
        </span>
      </h1>

      <h3 className="font-[Font7] leading-normal text-center text-4xl pt-12">
        Transforming ideas into reality with{" "}
        <span className="bg-zinc-800 px-1 rounded-sm">innovative design</span>,{" "}
        <span className="bg-zinc-800 px-1 rounded-sm">branding</span> and{" "}
        <span className="bg-zinc-800 px-1 rounded-sm">cutting-edge technology</span>.
      </h3>
    </div>
  );
};

export default AboutUs;