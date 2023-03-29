import { me } from "@/assets";
import Image from "next/image";
import React from "react";
import BackgroundCircles from "./background-circles";
import { motion, Variants } from "framer-motion";
import { WavyText } from "./wavy-text";
export const Hero = () => {
  return (
    <div className="h-screen relative flex flex-col items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <div className="mt-44">
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
        <WavyText letters={Array.from("SOFTWARE ENGINEER")} />

        <motion.h1
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1.5,
            delay: 3.25,
          }}
          style={{ lineHeight: "normal" }}
          className="stretch-font text-[64px]"
        >
          WEBSSITES <br /> THAT{" "}
          <span className="wave-container stretch-font text-[#aab2d1]">
            WOOW.
            <div className="wave-wrapper" />
            <motion.div
              initial={{ opacity: 0, width: 0, x: -25 }}
              animate={{ opacity: 0.75, width: "100%", x: 0 }}
              transition={{
                duration: 1.5,
                delay: 4.5,
              }}
              className="wave -z-10"
            />
          </span>
        </motion.h1>
      </div>
    </div>
  );
};

export default Hero;
