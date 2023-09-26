import Link from "next/link";
import styles from "./hero.module.scss";
import { pageLinks } from "@/global";
import { useMediaMatch } from "@/hooks/use-media-match/use-media-match";
import { DESCRIPTION, FULL_NAME, HELLO_INTRO } from "../../contents/global";
import { Portrait } from "../icons";
import { PageNavigation } from "../page-navigation/page-navigation";
import { syneHeadingBoldest } from "@/global/fonts";

export default function Hero({ toggle }) {
  const isMobile = useMediaMatch("(max-width: 37.5rem)");
  const slicedPageLinks = pageLinks.slice(1, 3);

  return (
    <section id="hero" data-section="hero" className={styles.container}>
      <div className={styles["primary-content"]}>
        <div className={styles["inner-content"]}>
          <div>
            <h1 className={syneHeadingBoldest.className}>
              <span className={styles["text-outline"]}>{HELLO_INTRO}</span>
              <br />
              {FULL_NAME}
            </h1>
            <p>{DESCRIPTION}</p>
          </div>

          {!isMobile && <Portrait />}
        </div>

        <div>
          <PageNavigation />
          <ul className={styles.links}>
            {slicedPageLinks.map(({ href, value }) => (
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
