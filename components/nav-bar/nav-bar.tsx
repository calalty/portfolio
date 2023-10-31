import Link from "next/link";
import React, { useEffect, useState } from "react";
import styles from "./nav-bar.module.scss";
import { Logo, Menu } from "../icons";
import { mailLink, resumeLink, socialMedias } from "@/global";
import { MAIL_TITLE, SOCIALS_TITLE, THINGS_TITLE } from "@/contents/global";
import { useMediaMatch } from "@/hooks/use-media-match/use-media-match";
import { LinkType } from "@/global/global.type";
import { LinksType } from "../links/links.type";
import Links from "../links/links";

const NavBar = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  const isDesktop = useMediaMatch("(min-width: 43.75rem)");
  const { href, value } = mailLink;
  const handleOnClick = () => {
    setToggle(!toggle);
  };

  useEffect(() => {
    if (toggle && !isDesktop) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [toggle, isDesktop]);

  const renderNavSection = (
    title: string,
    links: LinkType[],
    type: "social" | "things"
  ) => {
    const isSocialLinks = type === "social";
    return (
      <div className={isSocialLinks ? styles.social : styles.contact}>
        <span className={styles["modal-title"]}>{title}</span>
        <Links
          additionalClassName={
            isSocialLinks ? styles["social-medias"] : styles["pages"]
          }
          arrowType={isSocialLinks ? "skewed" : "straight"}
          links={links}
        />
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
          {renderNavSection(THINGS_TITLE, [resumeLink(isDesktop)], "things")}
          {renderNavSection(
            MAIL_TITLE,
            [{ href, value, target: "_blank" }],
            "things"
          )}
          {renderNavSection(SOCIALS_TITLE, socialMedias, "social")}
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
