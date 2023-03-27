import { me } from "@/assets";
import Image from "next/image";
import React from "react";
import BackgroundCircles from "./background-circles";
import { motion } from "framer-motion";
export const Hero = () => {
  return (
    <div className="h-screen relative flex flex-col items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <div className="mt-36">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.5,
            delay: 1.5,
          }}
        >
          <Image
            width={100}
            height={100}
            className="m-auto rounded-full"
            src={me}
            alt=""
          />
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1.5,
            ease: [0, 0.71, 0.2, 1.01],
            scale: {
              type: "spring",
              damping: 5,
              stiffness: 100,
              restDelta: 0.001,
            },
          }}
          style={{ lineHeight: "normal" }}
          className="stretch-font text-[64px] mt-6"
        >
          WEBSSITES <br /> THAT{" "}
          <span
            style={{ WebkitTextStroke: "0px" }}
            className="wave-container stretch-font text-[#48F3DB]"
          >
            WOOW.
            <div className="wave-wrapper"></div>
            <div className="wave"></div>
          </span>
        </motion.h1>
      </div>
    </div>
  );
};

export default Hero;
