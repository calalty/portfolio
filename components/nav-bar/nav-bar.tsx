import Link from "next/link";
import React from "react";
import styles from "./nav-bar.module.scss";
import { Logo, Menu } from "../icons";

const NavBar = ({
  handleOnClick,
  toggle,
}: {
  handleOnClick: () => void;
  toggle: boolean;
}) => {
  return (
    <nav className={styles.nav}>
      <div>
        <Link
          href={"/"}
          className="flex items-center text-3xl type-heading uppercase font-black text-outline text-[#f3f4f6]"
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          <Logo additionalClassName={styles.logo} />
        </Link>
      </div>
      <button onClick={handleOnClick}>
        <Menu transform={toggle} />
      </button>
    </nav>
  );
};

export default NavBar;
