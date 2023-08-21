import Link from "next/link";
import React, { useState } from "react";
import styles from "./nav-bar.module.scss";
import { Logo, Menu } from "../icons";
import { externalPageLinks, socialMedias } from "@/global";

const NavBar = () => {
  const [toggle, setToggle] = useState<boolean>(false);

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
        <Logo additionalClassName={styles.logo} />
      </Link>

      <button onClick={handleOnClick}>
        <Menu transform={toggle} />
      </button>

      <nav className={`${styles.nav} ${toggle && styles.open}`}>
        <div className={styles.info}>
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
            <span className={styles.socials}>SOCIALS</span>
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
