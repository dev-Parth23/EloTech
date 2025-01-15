import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiExternalLink } from "react-icons/fi";
import Project from "../components/Project";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
    useEffect(() => {

    // for the frames coming from down on scroll
    gsap.fromTo("#frames",{
        opacity: 0,
        y: 120,
      },
      {
        opacity: 1,
        y: -25,
        ease: "power4.out",
        scrollTrigger: {
          trigger: "#frames",
          start: "top 65%",
          end: "bottom 75%",
          scrub: 5,
          markers: false,
        },
      }
    );
  }, []);

  return (
    <div className="bg-[#151518] w-screen flex flex-col items-center justify-center">
      {/* Heading */}
      <div id="Heading" className="pt-20 text-center px-14">
        <h1 className="uppercase text-border text-8xl font-[Font7]">
          Projects
        </h1>
        <h3 className="uppercase font-[Font3] text-sm pt-5 ">
          Check out our latest & greatest
        </h3>
      </div>

      {/* Frames */}
      <div id="frames" className="w-[70%] h-[110vh] my-12 flex gap-4 overflow-hidden">
        {/* Left */}
        <div className="relative w-1/2 h-full">
          <img
            className="object-cover w-full h-full rounded-md grayscale hover:grayscale-0 hover:sc"
            src="https://ik.imagekit.io/hfrhxebxv/Elanine_Assets/Compressed/michela-ampolo-7tDGb3HrITg-unsplash%20(1).jpg"
            alt="left long image"
          />
          <div className="absolute top-[5%] left-[20%] transform -translate-x-1/2 -translate-y-1/2 text-black text-4xl font-[Font1]">
            2024
          </div>
          <div className="flex items-center gap-5 absolute top-[95%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 ">
            <div className="text-[#EBFD40] text-4xl font-[Font5] text-nowrap">
              Sun Chem Pvt Ltd
            </div>
            <a
              className="text-2xl text-[#EBFD40]"
              target="blank"
              href="https://www.origins.com/?srsltid=AfmBOorqIHkj30OmdbnvRXTLh8y5HF3lHXt9BHXjeexWfD4HmDUBukEb"
            >
              <FiExternalLink />
            </a>
          </div>
        </div>

        {/* Right */}
        <div className="flex flex-col w-1/2 h-full gap-4">
          {/* top image */}
          <div className="relative w-full overflow-hidden rounded-md h-3/5">
            <img
              className="grayscale hover:grayscale-0 hover:scale-95"
              src="https://ik.imagekit.io/hfrhxebxv/Elanine_Assets/Compressed/new_qGPaxOUf4-min%20(1).png"
              alt="right top image"
            />

            {/* Content */}
            <div className="absolute top-[12%] left-[20%] transform -translate-x-1/2 -translate-y-1/2 text-black text-4xl font-[Font1]">
              2023
            </div>
            <div className="flex items-center gap-5 absolute top-[90%] left-[40%] transform -translate-x-1/2 -translate-y-1/2 ">
              <div className="text-[#EBFD40] text-4xl font-[Font5] text-nowrap">
                What The Flex{" "}
              </div>
              <a
                className="text-2xl text-[#EBFD40]"
                target="blank"
                href="https://wtflex.in/"
              >
                <FiExternalLink />
              </a>
            </div>
          </div>

          {/* Bottom image */}
          <div className="relative w-full h-full overflow-hidden rounded-md">
            <img
              className="grayscale hover:grayscale-0 hover:scale-95"
              src="https://ik.imagekit.io/foogrshml/386913709_830177562142567_9153314572612622706_n.jpg?updatedAt=1701344130623"
              alt="right bottom image"
            />
            {/* Content */}
            <div className="absolute top-[12%] left-[20%] transform -translate-x-1/2 -translate-y-1/2 text-black text-4xl font-[Font1]">
              2023
            </div>
            <div className="flex items-center gap-5 absolute top-[90%] left-[30%] transform -translate-x-1/2 -translate-y-1/2 ">
              <div className="text-[#EBFD40] text-4xl font-[Font5] text-nowrap">
                Stickerly{" "}
              </div>
              <a
                className="text-2xl text-[#EBFD40]"
                target="blank"
                href="https://stickerly.shop/?srsltid=AfmBOoqRczZWiqADUW2-_-Cju2B6tCcNx43L-zVXs4CjB8dIzk52Cpn9"
              >
                <FiExternalLink />
              </a>
            </div>
          </div>
        </div>
      </div>

      <Project />
    </div>
  );
};

export default Projects;
