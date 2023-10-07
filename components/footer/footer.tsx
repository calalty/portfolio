import { mailLink, resumeLink, socialMedias } from "@/global";
import Links from "../links/links";
import styles from "./footer.module.scss";
import { COPYRIGHT_CALLUM_ALTON } from "@/contents/global";
import { useMediaMatch } from "@/hooks/use-media-match/use-media-match";

export const Footer = () => {
  const year = new Date().getFullYear();
  const isDesktop = useMediaMatch("(min-width: 43.75rem)");

  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        <Links
          additionalClassName={styles.links}
          arrowType="skewed"
          links={socialMedias}
          theme="light"
        />

        <div className={styles.right}>
          <span className={styles.copyright}>
            {COPYRIGHT_CALLUM_ALTON} {year}
          </span>

          <Links
            additionalClassName={styles.links}
            links={[resumeLink(isDesktop), mailLink]}
            arrowType="straight"
            theme="light"
          />
        </div>
      </div>
    </footer>
  );
};
