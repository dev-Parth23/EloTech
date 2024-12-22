import React from "react";
import Button from "./Button";

const Header = ({title}) => {
  return (
    <nav className="h-24 w-full backdrop-blur-lg flex justify-between items-center px-8">
      <div className="w-1/5">
        <a href="/home" className="uppercase text-3xl font-[Font1] tracking-wider text-white">
          Elo.Tech
        </a>
      </div>

      <div className="gap-14 ml-72 flex flex-nowrap font-[Font2] text-center justify-between">
        <a href="/about" className="text-lg font-medium hover:underline underline-offset-8">About</a>
        <a href="/services"className="text-lg font-medium hover:underline underline-offset-8">Services</a>
        <a href="/projects" className="text-lg font-medium hover:underline underline-offset-8">Our Work</a>
      </div>
      <Button title="Contact" />
    </nav>
  );
};

export default Header;
