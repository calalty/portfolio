import { navLinks } from "@/contents/navLinks";
import Link from "next/link";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Menu } from "./menu";

const NavBar = () => {
  return (
    <nav className="w-full absolute top-0 flex items-center px-4 justify-between mx-auto z-50 py-4">
      <motion.div
        className="flex w-full justify-between"
        initial={{ x: -500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <Link
          href={"/"}
          className="flex items-center text-3xl type-heading uppercase font-black text-outline text-[#f3f4f6]"
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          ㋡
        </Link>

        <button>
          <Menu additionalClassName="stroke-[#2b303b]" />
        </button>
      </motion.div>
    </nav>
  );
};

export default NavBar;
