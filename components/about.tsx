/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { motion } from "framer-motion";
import { meditating } from "@/assets";
import Image from "next/image";
import { WavyText } from "./wavy-text";

export const About = () => {
  return (
    <div className="flex space-y-8 flex-col relative min-h-screen text-center md:text-left lg:flex-row px-7 justify-center mx-auto items-center bg-[#222227] py-36">
      <div className="px-0 md:pr-12 lg:max-w-[65%]">
        <h2 className="mb-10 text-[#eef1fb] w-fit m-auto border-b-4 border-[#aab2d1] lg:text-[10vw] lg:leading-[11vw] sm:text-[6rem] sm:leading-[7rem] text-[9vh] leading-[10vh] tusker-font text-center">
          ABOUT ME<span className="tusker-font text-[#aab2d1]"> .</span>
        </h2>
        <motion.p className="lg:text-[2vw] sm:text-[26px] text-[2.5vh] indent-16 text-left ">
          I AM A SOFTWARE ENGINEER WITH A PASSION FOR EXPLORING THE LIMITLESS
          POTENTIAL OF AI 🤖 MY GOAL IS TO CREATE INNOVATIVE APPS AND WEBSITES
          THAT MAKE PEOPLE'S LIVES EASIER AND MORE ENJOYABLE 🕺🏻 AS I CONTINUE TO
          LEARN AND GROW, I ASPIRE TO BECOME A DIGITAL NOMAD AND WORK REMOTELY
          WHILE TRAVELING THE WORLD 🌍 I AM EXCITED ABOUT THE POSSIBILITIES OF
          COLLABORATING WITH OTHER INDIVIDUALS, STARTUPS, AND COMPANIES TO
          DEVELOP DIGITAL SOLUTIONS THAT ARE BOTH CREATIVE AND FUNCTIONAL 📈
        </motion.p>
      </div>

      <Image
        className="sm:mt-0 mt-6 flex-shrink-0 w-56 object-contain md:w-64 xl:w-[350px] float"
        alt=""
        src={meditating}
      />
    </div>
  );
};

export default About;
