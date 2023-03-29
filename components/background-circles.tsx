import React from "react";
import { motion } from "framer-motion";
const BackgroundCircles = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
        scale: [1, 2, 2, 3, 1],
        borderRadius: ["20%", "20%", "50%", "80%", "20%"],
      }}
      transition={{ duration: 1.5 }}
      className="absolute flex justify-center items-center -z-20"
    >
      <div className="absolute border border-[#aab2d1] rounded-full h-[100px] w-[100px] opacity-75 animate-ping"></div>
      <div className="absolute border border-[#ffffff25] rounded-full h-[300px] w-[300px]"></div>
      <div className="absolute border border-[#aab2d1] rounded-full h-[450px] w-[450px] opacity-25 animate-pulse"></div>
      <div className="absolute border border-[#ffffff25] rounded-full h-[600px] w-[600px]"></div>
    </motion.div>
  );
};

export default BackgroundCircles;
