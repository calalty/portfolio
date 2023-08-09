import { navLinks } from "@/contents/navLinks";
import Link from "next/link";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Menu } from "./menu";
import styles from "../styles/nav-bar.module.scss";
import { Logo } from "./logo";

const NavBar = ({
  handleOnClick,
  toggle,
}: {
  handleOnClick: () => void;
  toggle: boolean;
}) => {
  return (
    <nav className={styles.nav}>
      <motion.div
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
          <Logo additionalClassName={styles.logo} />
        </Link>
      </motion.div>
      <button onClick={handleOnClick}>
        <Menu transform={toggle} />
      </button>
    </nav>
  );
};

export default NavBar;
