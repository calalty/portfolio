import { me } from "@/assets";
import Image from "next/image";
import React from "react";
import BackgroundCircles from "./circular-progress";
import { motion, Variants } from "framer-motion";
import { WavyText } from "./wavy-text";
import { Button } from "./button";
import MusicPlayer from "./music-player";
export const Hero = () => {
  return (
    <div className="h-screen flex flex-col justify-end overflow-hidden">
      <div className="flex-shrink-0 sm:mb-6 mb-4 lg:-mb-[3rem]">
        <MusicPlayer />
      </div>
      <div className="md:justify-between justify-end items-end px-7 max-w-full flex flex-wrap md:flex-nowrap">
        <section className="text md:flex-none max-w-full flex-0">
          <p className="mt-2 md:text-[2.5vw] sm:text-[30px] text-[2.5vh] migra-font text-[#aab2d1]">
            developer
          </p>
          <div className="md:text-[18vw] text-[#eef1fb] sm:text-[11rem] text-[17vh] tusker-font">
            HELLO<span className="tusker-font text-[#aab2d1]">,</span>
            <br />I AM CAL<span className="tusker-font text-[#aab2d1]">!</span>
          </div>
        </section>
        <div>
          <section className="max-w-[650px] text-end mb-6">
            <p className="md:text-[2vw] sm:text-[26px] text-[2.5vh] indent-16">
              I AM A DEVELOPER AND AN AI ENTHUSIAST BASED IN THE UK. I LOVE
              MINIMAL AND BRUTALIST DESIGN. I LOVE TECH, SPORT AND NATURE.
            </p>
            <Button text="Contact me" />
          </section>
        </div>
      </div>
    </div>
  );
};

export default Hero;
