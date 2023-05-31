/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { motion } from "framer-motion";
import { callum } from "@/assets";
import Image from "next/image";
import { styles } from "../styles/styles";
export const About = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row -hue-rotate-15 brightness-110  px-6 sm:px-12 pt-20 pb-12 md:pt-0 md:px-0 md:pb-0">
      <div className="xl:w-[75%] md:w-[50%] md:px-6 md:pt-[15rem] xl:pl-[15rem]">
        <h2 className={styles.sectionHeadText}>ABOUT</h2>
        <motion.p className={`${styles.sectionSubText} mb-6 xl:w-[75%]`}>
          I'm a software engineer passionate about exploring AI's potential. My
          goal is to create innovative apps and websites that enhance people's
          lives. I aspire to be a digital nomad and work remotely while
          traveling the world. Let's collaborate to develop creative and
          functional digital solutions.
        </motion.p>

        <a className={styles.sectionSubText}>
          <span>↓ </span>resume
        </a>
      </div>

      <div className="w-full xl:w-[25%] md:w-[50%] relative md:h-0">
        <div className="pt-0 mb-6 md:mb-0 relative xl:pt-[177%] md:pt-[133%] h-[calc(100vw-2*1rem)] md:h-0 md:pl-6">
          <Image
            className="w-full h-full object-cover border-transparent md:rounded-none md:rounded-bl-[3rem] rounded-[3rem] absolute inset-0"
            alt=""
            src={callum}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
