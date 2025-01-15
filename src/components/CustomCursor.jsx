import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;

    const moveCursor = (e) => {
      const { clientX, clientY } = e;

      gsap.to(cursor, {
        x: clientX,
        y: clientY,
        duration: 0.6,
      });

      gsap.to(follower, {
        x: clientX,
        y: clientY,
        duration: 0.2,
        ease: "bounce.out",
      });
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <div className="relative">
      {/* Cursor */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-4 h-4 bg-blue-500 rounded-full pointer-events-none z-50"
        style={{ transform: "translate(-50%, -50%)" }}
      ></div>

      {/* Follower */}
      <div
        ref={followerRef}
        className="fixed top-0 left-0 w-10 h-10 bg-blue-500 bg-opacity-30 rounded-full pointer-events-none z-40"
        style={{ transform: "translate(-50%, -50%)" }}
      ></div>
    </div>
  );
};

export default CustomCursor;