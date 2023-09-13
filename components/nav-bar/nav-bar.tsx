import Link from "next/link";
import React, { useState } from "react";
import styles from "./nav-bar.module.scss";
import { Logo, Menu } from "../icons";
import { externalPageLinks, socialMedias } from "@/global";
import { useActiveSection } from "@/hooks/use-active-section/use-active-section";

const NavBar = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  const { activeSectionIndex } = useActiveSection();

  const handleOnClick = () => {
    setToggle(!toggle);
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
          <span className={styles["modal-title"]}>THINGS</span>
          <ul className={styles["external-pages"]}>
            {externalPageLinks.map(({ href, value }) => (
              <li key={value}>
                <a href={href}>
                  <span className="font-sans">→</span> {value}
                </a>
              </li>
            ))}
          </ul>
          <div className={styles.contact}>
            <span className={styles["modal-title"]}>SOCIALS</span>
            <ul className={styles["social-medias"]}>
              {socialMedias.map(({ title, url }) => (
                <li key={title}>
                  <a href={url}>
                    <span className="font-sans">↗</span> {title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
