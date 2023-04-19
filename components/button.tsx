import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { peaking } from "@/assets";

type Button = {
  text: string;
};

export const Button = ({ text }: Button) => {
  // const [isHovering, setIsHovering] = useState(false);

  return (
    <div className="relative flex justify-end mt-4">
      <div className="flex justify-center">
        {/* <Image
          className={`m-auto absolute lg:w-[112px] z-0  ${
            isHovering
              ? "-top-[61px] transition-all duration-500"
              : "top-[0] transition-all duration-500"
          }`}
          src={peaking}
          alt=""
        /> */}
        <button
          className="border border-[#eef1fb] rounded-full py-1 z-10"
          // onMouseEnter={() => setIsHovering(true)}
          // onMouseLeave={() => setIsHovering(false)}
        >
          <span className="uppercase text-[#eef1fb] lg:text-[2.5vw] sm:text-[30px] text-[3vh] mx-2 ">
            {text}
          </span>
        </button>
      </div>
    </div>
  );
};

export default Button;
