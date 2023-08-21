import Link from "next/link";
import styles from "./hero.module.scss";
import { pageLinks, socialMedias } from "@/global";
import { useMediaMatch } from "@/hooks/use-media-match/use-media-match";
import {
  DESCRIPTION,
  FULL_NAME,
  HELLO_INTRO,
  PETS_AT_HOME,
} from "./hero-content";
import { Github, Instagram, Linkedin, Portrait } from "../icons";
import { PageNavigation } from "../page-navigation/page-navigation";

export default function Hero({ toggle }) {
  const isMobile = useMediaMatch("(max-width: 37.5rem)");
  const socials = [
    {
      name: "instagram",
      value: <Instagram additionalClassName={styles["socials-icon"]} />,
      url: "https://www.instagram.com/calalton/?hl=en",
    },
    {
      name: "github",
      value: <Github additionalClassName={styles["socials-icon"]} />,
      url: "https://github.com/calalty/",
    },
    {
      name: "linkedin",
      value: <Linkedin additionalClassName={styles["socials-icon"]} />,
      url: "https://www.linkedin.com/in/callum-alton-562521160/",
    },
  ];

  return (
    <section id="hero" data-section="hero" className={styles.container}>
      <div className={styles["primary-content"]}>
        <div className={styles["inner-content"]}>
          <div>
            <h1 className="type-heading">
              <span className={styles["text-outline"]}>{HELLO_INTRO}</span>{" "}
              <br />
              {FULL_NAME}
            </h1>
            <p>
              {DESCRIPTION}
              <span>{PETS_AT_HOME}</span>.
            </p>
          </div>

          {!isMobile && <Portrait />}
        </div>

        <div>
          <PageNavigation />
          <ul className={styles.links}>
            {pageLinks.map(({ href, value }) => (
              <li className={styles["link-wrapper"]} key={value}>
                <Link href={href}>
                  <span className={`${styles.arrow} font-sans`}>→</span>
                  <span className={styles.link}>{value}</span>
                </Link>
                <div className={styles["link-underline"]}></div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {isMobile && (
        <div className={styles.portrait}>
          <Portrait />
        </div>
      )}
    </section>
  );
}
