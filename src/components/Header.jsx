import React from "react";
import Button from "./Button";

const Header = () => {
  return (
    <nav className="flex justify-between items-center w-full h-24 px-8 backdrop-blur-lg">
      <div className="w-1/5">
        <a href="/home" className="text-3xl font-[Font1] tracking-wider text-white uppercase">
          Elo.Tech</a>
      </div>

      <div className="flex justify-between gap-10 ml-72 font-[Font2] text-center">
        <a href="/about" className="text-lg font-medium hover:underline underline-offset-8">
          About</a>
        <a href="/services" className="text-lg font-medium hover:underline underline-offset-8">
          Services</a>
        <a href="/services" className="text-lg font-medium text-nowrap hover:underline underline-offset-8">
          Team</a>
        <a href="/projects" className="text-lg font-medium hover:underline underline-offset-8">
          Projects</a>
      </div>
      <Button title="Contact" />
    </nav>
  );
};

export default Header;