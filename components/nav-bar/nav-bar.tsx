import Link from "next/link";
import React, { useState } from "react";
import styles from "./nav-bar.module.scss";
import { Logo, Menu } from "../icons";
import { pageLinks, socialMedias } from "@/global";
import { SOCIALS_TITLE, THINGS_TITLE } from "@/contents/global";
import { useMediaMatch } from "@/hooks/use-media-match/use-media-match";

const NavBar = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  const isMobile = useMediaMatch("(min-width: 43.75rem)");

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
          className={isSocialLinks ? styles["social-medias"] : styles["pages"]}
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
    <header className={`${styles.header} ${toggle && styles["nav-open"]}`}>
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

      <nav
        aria-hidden={toggle}
        className={`${isMobile ? styles["nav-menu"] : styles["nav-modal"]} ${
          toggle && styles.open
        }`}
      >
        <div className={styles.info}>
          {renderNavSection(THINGS_TITLE, pageLinks, "things")}
          {renderNavSection(SOCIALS_TITLE, socialMedias, "social")}
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
