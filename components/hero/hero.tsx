import styles from "./hero.module.scss";
import { useMediaMatch } from "@/hooks/use-media-match/use-media-match";
import {
  DESCRIPTION,
  FULL_NAME,
  HELLO_INTRO,
  SOCIALS_TITLE,
} from "../../contents/global";
import { Portrait } from "../icons";
import { PageNavigation } from "../page-navigation/page-navigation";
import { syneHeadingBoldest } from "@/global/fonts";
import Links from "../links/links";
import { socialMedias } from "@/global";

export default function Hero() {
  const isMobile = useMediaMatch("(max-width: 37.5rem)");

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

        <div className={styles['links-wrapper']}>
          <PageNavigation />

          <span className={styles["links-title"]}>{SOCIALS_TITLE}</span>
          <Links
            additionalClassName={styles.links}
            arrowType="skewed"
            links={socialMedias}
          />
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
