/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { motion, Variants } from "framer-motion";
import { snoop } from "@/assets";
import Image from "next/image";
import { WavyText } from "./wavy-text";

export const About = () => {
  return (
    <div className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <WavyText
        absolute="absolute top-24 "
        letters={Array.from("INTRODUCTION")}
      />

      <Image
        className="-mb-[8rem] md:mb-0 flex-shrink-0 w-56 h-56 object-contain md:w-64 md:h-95 xl:w-[350px] xl:h-[450px]"
        alt=""
        src={snoop}
      />

      <div className="space-y-8 px-0 md:px-10">
        <motion.h1 style={{ lineHeight: "normal" }} className="text-[48px] ">
          <span className="wave-container stretch-font text-[#aab2d1]">
            HHi,
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
        <motion.p className="text-[1.5rem] text-left leading-10 indent-16">
          I AM A SOFTWARE ENGINEER WITH A PASSION FOR EXPLORING THE LIMITLESS
          POTENTIAL OF AI 🤖 MY GOAL IS TO CREATE INNOVATIVE APPS AND WEBSITES
          THAT MAKE PEOPLE'S LIVES EASIER AND MORE ENJOYABLE 🕺🏻 AS I CONTINUE TO
          LEARN AND GROW, I ASPIRE TO BECOME A DIGITAL NOMAD AND WORK REMOTELY
          WHILE TRAVELING THE WORLD 🌍 I AM EXCITED ABOUT THE POSSIBILITIES OF
          COLLABORATING WITH OTHER INDIVIDUALS, STARTUPS, AND COMPANIES TO
          DEVELOP DIGITAL SOLUTIONS THAT ARE BOTH CREATIVE AND FUNCTIONAL 📈
        </motion.p>
      </div>
    </div>
  );
};

export default About;
