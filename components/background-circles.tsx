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
      className="absolute flex justify-center items-center"
    >
      <div className="absolute border border-[#48F3DB] rounded-full h-[100px] w-[100px] animate-ping"></div>
      <div className="absolute border border-[#48F3DB50] rounded-full h-[200px] w-[200px]"></div>
      <div className="absolute border border-[#ffffff25] rounded-full h-[400px] w-[400px]"></div>
      <div className="absolute border border-[#48F3DB] rounded-full h-[550px] w-[550px] opacity-25 animate-pulse"></div>
      <div className="absolute border border-[#ffffff25] rounded-full h-[700px] w-[700px]"></div>
    </motion.div>
  );
};

export default BackgroundCircles;
