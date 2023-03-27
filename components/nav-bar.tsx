import { navLinks } from "@/contents/navLinks";
import Link from "next/link";
import React, { useState } from "react";
import { animate, motion } from "framer-motion";

const NavBar = () => {
  const [isActive, setIsActive] = useState(" ");
  const [toggle, setToggle] = useState<boolean>();

  return (
    <nav className="w-full flex items-center p-5 fixed top-0 z-20 justify-between mx-auto">
      <motion.div
        initial={{ x: -500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <Link
          href={"#"}
          className="flex flex-col items-center leading-[5px] text-[12px]"
          onClick={() => {
            setIsActive("");
            window.scrollTo(0, 0);
          }}
        >
          <span className="stretch-font">CCAALL</span>
          <br />
          <span className="stretch-font text-[7px]"> AALLTTOONN</span>
        </Link>
      </motion.div>

      <motion.ul
        initial={{ x: 500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{
          duration: 1}}
        className="list-none hidden sm:flex flex-row gap-10"
      >
        {navLinks.map((link) => (
          <li
            key={link.title}
            className="text-base cursor-point cursor-pointer"
            onClick={() => setIsActive(link.title)}
          >
            <a className="stretch-font text-[12px]" href={`#${link.title}`}>
              {link.title}
            </a>
          </li>
        ))}
      </motion.ul>

      <motion.div
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
      </motion.div>
    </nav>
  );
};

export default NavBar;
