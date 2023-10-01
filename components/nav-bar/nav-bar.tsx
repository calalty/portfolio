import Link from "next/link";
import React, { useCallback, useEffect, useState } from "react";
import styles from "./nav-bar.module.scss";
import { Logo, Menu } from "../icons";
import { mail, pageLinks, socialMedias } from "@/global";
import { MAIL_TITLE, SOCIALS_TITLE, THINGS_TITLE } from "@/contents/global";
import { useMediaMatch } from "@/hooks/use-media-match/use-media-match";

const NavBar = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  const isDesktop = useMediaMatch("(min-width: 43.75rem)");
  const { href, value } = mail;
  const handleOnClick = () => {
    setToggle(!toggle);
  };

  useEffect(() => {
    if (toggle) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [toggle]);

  const renderNavSection = (
    title: string,
    links: { href: string; value: string; target?: string }[],
    type: "social" | "things"
  ) => {
    const isSocialLinks = type === "social";
    return (
      <div className={isSocialLinks ? styles.social : styles.contact}>
        <span className={styles["modal-title"]}>{title}</span>
        <ul
          className={isSocialLinks ? styles["social-medias"] : styles["pages"]}
        >
          {links.map(({ href, value, target }) => (
            <li key={value}>
              <a href={href} target={target}>
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

      <button aria-expanded={toggle} onClick={handleOnClick}>
        <Menu transform={toggle} />
      </button>

      <nav
        aria-hidden={toggle}
        className={`${isDesktop ? styles["nav-menu"] : styles["nav-modal"]} ${
          toggle && styles.open
        }`}
      >
        <div className={styles.info}>
          {renderNavSection(THINGS_TITLE, pageLinks(isDesktop), "things")}
          <div className={styles.mail}>
            <span className={styles["modal-title"]}>{MAIL_TITLE}</span>
            <a target="_blank" rel="nofollow" href={href}>
              <span className="font-sans">→</span>
              {value}
            </a>
          </div>
          {renderNavSection(SOCIALS_TITLE, socialMedias, "social")}
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
