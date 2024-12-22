import React from "react";
import { motion } from "framer-motion";

function MarqueeRow({ imageURL, direction }) {
  return (
    <motion.div
      initial={{ x: direction === "left" ? "0" : "-100%" }}
      animate={{ x: direction === "left" ? "-100%" : "0%" }}
      transition={{ ease: "linear", duration: 50, repeat: Infinity }}
      className="flex flex-shrink-0 gap-20 py-6"
    >
      {imageURL.map((url, index) => (
        <img key={index} className="h-7 w-20" src={url} alt={`logo-${index}`} />
      ))}
    </motion.div>
  );
}

function Marquee({ images }) {
  return (
    <div className="py-10 w-full bg-black overflow-hidden">
      {images.map((imageSet, index) => (
        <div key={index} className="relative flex gap-10">
          <MarqueeRow
            imageURL={imageSet}
            direction={index % 2 === 0 ? "left" : "right"}
          />
          <MarqueeRow
            imageURL={imageSet}
            direction={index % 2 === 0 ? "left" : "right"}
          />
        </div>
      ))}
    </div>
  );
}

export default Marquee;