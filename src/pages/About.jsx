import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import video1 from "../assets/vid1.mp4"; // Ensure this is the correct path

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const video1Ref = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const video1Element = video1Ref.current;
    const containerElement = containerRef.current;

    // Creating GSAP timeline with ScrollTrigger
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: containerElement,    // Trigger animation based on the container
        start: "top 100%",            // When the top of the container reaches the bottom of the viewport
        end: "+=150%",                // End animation after scrolling through 150% of container height
        scrub: 1,                     // Sync the animation with scroll position
        pin: true,                    // Pin the container while scrolling
        ease: "power1.out",           // Ease function for smooth animation
      },
    });

    // From the initial scale and opacity, animate to full scale and opacity
    timeline.fromTo(
      video1Element,
      { scale: 0.5, opacity: 0.5 },  // Initial state: smaller and semi-transparent
      { scale: 1, opacity: 1, duration: 1, ease: "power2.out" }  // End state: full size and visible
    );
  }, []);

  return (
    <div ref={containerRef} className="relative h-screen w-full bg-black flex justify-center items-center">
      {/* Video Element */}
      <video
        ref={video1Ref}
        src={video1}
        autoPlay
        muted
        loop
        className="w-1/2 h-auto object-cover"  // Adjust size for better visibility
      ></video>
    </div>
  );
};

export default About;
