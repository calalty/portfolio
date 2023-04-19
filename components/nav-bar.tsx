import { navLinks } from "@/contents/navLinks";
import Link from "next/link";
import React, { useState } from "react";
import { motion } from "framer-motion";

const NavBar = () => {
  const [isActive, setIsActive] = useState(" ");
  const [toggle, setToggle] = useState<boolean>();

  return (
    <nav
      className="w-full flex items-center px-10 fixed top-0 justify-between mx-auto backdrop-blur-sm bg-[rgba(19,19,19,.15)] border-b border-b-[#ffffff50] z-50 pt-4 pb-3
    "
    >
      <motion.div
        initial={{ x: -500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <Link
          href={"#"}
          className="flex items-center"
          onClick={() => {
            setIsActive("");
            window.scrollTo(0, 0);
          }}
        >
          <span className="tusker-font text-[2rem] leading-[2rem]">CAL</span>
          <span className="tusker-font text-[1.5rem] leading-[1.5rem] underline underline-offset-3">
            {" "}
            ALTON
          </span>
        </Link>
      </motion.div>

      <motion.ul
        initial={{ x: 500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{
          duration: 1,
        }}
        className="list-none hidden sm:flex flex-row gap-10"
      >
        {navLinks.map((link) => (
          <li
            key={link.title}
            className="text-base cursor-point cursor-pointer"
            onClick={() => setIsActive(link.title)}
          >
            <a
              className="text-[14px] font-light text-white opacity-75"
              href={`#${link.title}`}
            >
              {link.title}
            </a>
          </li>
        ))}
      </motion.ul>

      {/* <motion.div
        initial={{ x: 500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="sm:hidden flex flex-1 justify-end items-center"
      >
        <button
          onClick={() => setToggle(!toggle)}
          className="object-contain cursor-pointer text-[10px]"
        >
          {toggle ? (
            <span className="stretch-font">
              MMEE <br />
              NNUU
            </span>
          ) : (
            <span className="stretch-font">
              SSHH <br />
              UUTT
            </span>
          )}
        </button>
      </motion.div> */}
    </nav>
  );
};

export default NavBar;
