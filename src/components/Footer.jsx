import React from "react";
import Navigator from "./Navigator";

const Footer = () => {
  const data = [
    {
      id: 1,
      heading: "Get in Touch",
      data1: "parthsinghal23.cs@gmail.com",
      data2: "cctvagra1@gmail.com",
    },
    {
      id: 2,
      heading: "Contact",
      data1: "LinkedIn",
      data2: "Instagram",
    },
    {
      id: 3,
      heading: "Services",
      data1: "Web/App Development",
      data2: "UX/UI Design",
      data3: "Animations",
    },
    {
      id: 4,
      heading: "Ventures",
      data1: "Parth Info Solutions",
      data2: "Shri BABA Sales",
      data3: "Shri DURGA Sales",
    },
  ];
  return (
    <div className="w-screen h-screen pt-10 flex flex-col items-center justify-center">
      <div className="w-[90vw] h-[25%] bg-[#151518] flex justify-between pl-20 gap-32">
        <div className="w-1/3 flex gap-3">
          <div className="border uppercase shrink-0 border-white w-fit rounded-full h-fit px-3 py-2">
            Year Founded
          </div>
          <h2 className="font-medium text-7xl pt-8 font-[font7]">
            <span className="hover:mix-blend-color-burn transition duration-300">
              2
            </span>
            <span className="hover:mix-blend-color-burn transition duration-300">
              0
            </span>
            <span className="hover:mix-blend-color-burn transition duration-300">
              2
            </span>
            <span className="hover:mix-blend-color-burn transition duration-300">
              5
            </span>
          </h2>
        </div>
        <div className="w-2/3 flex gap-3">
          <div className="border uppercase border-white w-fit rounded-full h-fit px-3 py-2">
            Location{" "}
          </div>
          <h2 className="font-medium text-7xl pt-8 font-[font7]">
            <span className="hover:mix-blend-color-burn transition duration-300">
              A
            </span>
            <span className="hover:mix-blend-color-burn transition duration-300">
              g
            </span>
            <span className="hover:mix-blend-color-burn transition duration-300">
              r
            </span>
            <span className="hover:mix-blend-color-burn transition duration-300">
              a,
            </span>
            <span className="hover:mix-blend-color-burn transition duration-300">
              {" "}
            </span>
            <span className="hover:mix-blend-color-burn transition duration-300">
              I
            </span>
            <span className="hover:mix-blend-color-burn transition duration-300">
              N
            </span>
            <span className="hover:mix-blend-color-burn transition duration-300">
              D
            </span>
            <span className="hover:mix-blend-color-burn transition duration-300">
              I
            </span>
            <span className="hover:mix-blend-color-burn transition duration-300">
              A
            </span>
          </h2>
        </div>
      </div>

      {/* Bottom box shape */}
      <div className="w-[90vw] h-[75%] bg-[#EBFD40] rounded-t-lg overflow-hidden text-black">
        <div className="w-full flex justify-around h-fit py-7">
          {data.map((item, index) => (
            <div key={index} className="flex flex-col gap-2">
              <h2 className="font-[font1] text-[#ff0749]">{item.heading}</h2>
              <div className="flex flex-col gap-1 font-[font5] text-[#222222]">
                <h2 className="hover:mix-blend-hard-light transition duration-300">
                  {item.data1}
                </h2>
                <h2 className="hover:mix-blend-hard-light transition duration-300">
                  {item.data2}
                </h2>
                <h2 className="hover:mix-blend-hard-light transition duration-300">
                  {item.data3}
                </h2>
              </div>
            </div>
          ))}
        </div>
        <Navigator />
      </div>
    </div>
  );
};

export default Footer;
