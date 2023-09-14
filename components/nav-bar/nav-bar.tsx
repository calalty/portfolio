import Link from "next/link";
import React, { useState } from "react";
import styles from "./nav-bar.module.scss";
import { Logo, Menu } from "../icons";
import { pageLinks, socialMedias } from "@/global";
import { SOCIALS_TITLE, THINGS_TITLE } from "@/contents/global";

const NavBar = () => {
  const [toggle, setToggle] = useState<boolean>(false);

  const handleOnClick = () => {
    setToggle(!toggle);
  };

  const renderNavSection = (
    title: string,
    links: { href: string; value: string }[],
    type: "social" | "things"
  ) => {
    const isSocialLinks = type === "social";
    return (
      <div className={isSocialLinks ? styles.social : styles.contact}>
        <span className={styles["modal-title"]}>{title}</span>
        <ul
          className={
            isSocialLinks ? styles["social-medias"] : styles["external-pages"]
          }
        >
          {links.map(({ href, value }) => (
            <li key={value}>
              <a href={href}>
                <span className="font-sans"> {isSocialLinks ? "↗" : "→"}</span>
                {value}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <header className={styles.header}>
      <Link
        className={styles["home-nav"]}
        href={"/"}
        onClick={() => {
          window.scrollTo(0, 0);
        }}
      >
        <Logo />
      </Link>

      <button onClick={handleOnClick}>
        <Menu transform={toggle} />
      </button>

      <nav className={`${styles.nav} ${toggle && styles.open}`}>
        <div className={styles.info}>
          {renderNavSection(THINGS_TITLE, pageLinks, "things")}
          {renderNavSection(SOCIALS_TITLE, socialMedias, "social")}
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
