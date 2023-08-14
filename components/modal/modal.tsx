import { socialMedias } from "@/global";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const Modal = ({ active }) => {
  const headings = ["Home", "Work", "Contact"];

  const socialMedias = [
    { title: "github", url: "https://www.facebook.com" },
    { title: "instagram", url: "https://www.twitter.com" },
    { title: "linkedIn", url: "https://www.linkedin.com" },
  ];

  return (
    <div
      className={`w-full h-screen fixed top-0 left-0 z-40 pt-32 sm:px-12 md:px-24 xl:px-60 md:pt-60 px-4 flex flex-col duration-500 ${
        active ? "bg-gray-100 pointer-events-auto" : "pointer-events-none"
      } `}
    >
      <div className="flex flex-col">
        {headings.map((header, index) => (
          <motion.div key={header} className="overflow-hidden relative">
            <motion.li
              initial={{ translateY: -100, opacity: 0 }}
              animate={{
                translateY: active ? 0 : -100,
                opacity: active ? 1 : 0,
              }}
              transition={{
                duration: 0.5,
                delay: active && 1.1,
              }}
              className="font-black uppercase type-heading text-3xl sm:text-6xl mt-4 flex items-center"
            >
              <Link href="#">
                {" "}
                <span className="font-thin sm:text-lg text-sm mr-2">{`0${
                  index + 1
                }.`}</span>
                {header}
              </Link>
            </motion.li>
          </motion.div>
        ))}
        <ul className="grid sm:text-2xl text-lg grid-cols-2 w-fit mt-6">
          {socialMedias.map((socialMedia, index) => (
            <motion.div key={index} className="overflow-hidden relative mt-4">
              <motion.li
                initial={{ translateY: -100, opacity: 0 }}
                animate={{
                  translateY: active ? 0 : -100,
                  opacity: active ? 1 : 0,
                }}
                transition={{
                  duration: 0.5,
                  delay: active && 1.1,
                }}
              >
                <a href={socialMedia.url}>
                  <span>↗</span> {socialMedia.title}
                </a>
              </motion.li>
            </motion.div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Modal;
