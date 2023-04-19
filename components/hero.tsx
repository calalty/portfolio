import { me } from "@/assets";
import Image from "next/image";
import React from "react";
import BackgroundCircles from "./background-circles";
import { motion, Variants } from "framer-motion";
import { WavyText } from "./wavy-text";
import { Button } from "./button";
import MusicPlayer from "./music-player";
export const Hero = () => {
  return (
    // <div className="h-screen relative flex flex-col items-center justify-center text-center overflow-hidden">
    //   <BackgroundCircles />
    //   <div className="mt-44">
    //     <motion.div
    //       initial={{ opacity: 0, scale: 0 }}
    //       animate={{ opacity: 1, scale: 1 }}
    //       transition={{
    //         duration: 0.5,
    //         delay: 1.5,
    //       }}
    //     >
    //       <Image
    //         width={100}
    //         height={100}
    //         className="m-auto rounded-full"
    //         src={me}
    //         alt=""
    //       />
    //     </motion.div>
    //     <WavyText letters={Array.from("SOFTWARE ENGINEER")} />

    //     <motion.h1
    //       initial={{ opacity: 0, scale: 0 }}
    //       animate={{ opacity: 1, scale: 1 }}
    //       transition={{
    //         duration: 1.5,
    //         delay: 3.25,
    //       }}
    //       style={{ lineHeight: "normal" }}
    //       className="stretch-font text-[64px]"
    //     >

    //     </motion.h1>
    //   </div>
    // </div

    //  <span className="wave-container uppercase tracking-[0.5rem] text-[20px] mx-2 text-[#aab2d1]">
    //       software engineer
    //       <div className="wave-wrapper" />
    //       <motion.div
    //         initial={{ opacity: 0, width: 0, x: -25 }}
    //         animate={{ opacity: 0.75, width: "100%", x: 0 }}
    //         transition={{
    //           duration: 1.5,
    //           delay: 4.5,
    //         }}
    //         className="wave -z-10"
    //       />
    //     </span>

    <div className="h-screen flex flex-col justify-end">
      <div className="flex-shrink-0 sm:mb-6 mb-4 lg:-mb-[3rem]">
        <MusicPlayer />
      </div>
      <div className="lg:justify-between justify-end items-end px-7 max-w-full flex flex-wrap">
        <section className="text lg:flex-none max-w-full flex-0">
          <p className="mt-2 lg:text-[2.5vw] sm:text-[30px] text-[2.5vh] migra-font text-[#aab2d1]">
            developer
          </p>
          <div className="lg:text-[18vw] text-[#eef1fb] sm:text-[11rem] text-[17vh] lg:leading-[20vw] sm:leading-[12rem]  leading-[19vh] tusker-font">
            HELLO<span className="tusker-font text-[#aab2d1]">,</span>
            <br />I AM CAL<span className="tusker-font text-[#aab2d1]">!</span>
          </div>
        </section>
        <div>
          <section className="max-w-[650px] text-end mb-6">
            <p className="lg:text-[2vw] sm:text-[26px] text-[2.5vh] indent-16">
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
