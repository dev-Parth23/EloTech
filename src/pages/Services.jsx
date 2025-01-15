import video1 from "../assets/vid1.mp4";
import video2 from "../assets/vid2.mp4";
import Service from "./Service";

import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  useEffect(() => {
    gsap.fromTo(
      "#videos",
      {
        opacity: 0,
        y: 120,
      },
      {
        opacity: 1,
        y: -25,
        ease: "power2.out",
        scrollTrigger: {
          trigger: "#videos",
          start: "top 90%",
          end: "bottom 90%",
          scrub: 5,
          markers: false,
        },
      }
    );
  }, []);

  return (
    <div className="bg-[#151518] w-screen flex flex-col gap-12 items-center">
      {/* Heading */}
      <div id="Heading" className="w-screen pt-10 px-14 flex flex-col">
        <h1 className="uppercase text-border text-6xl font-[Font1]">
          Featured
        </h1>
        <h1 className="uppercase text-9xl font-[Font1] text-[#EBFD40] ">
          Services
        </h1>
      </div>

      {/* Video Section */}
      <div id="videos" className="flex px-20 gap-16">
        <video
          autoPlay
          muted
          loop
          className="h-96 rounded-2xl hover:scale-95 transition-transform duration-300"
          src={video1}
        ></video>
        <video
          autoPlay
          muted
          loop
          className="h-96 rounded-lg hover:scale-95 transition-transform duration-300"
          src={video2}
        ></video>
      </div>

      {/* Service Component */}
      <Service />
    </div>
  );
};

export default Services;