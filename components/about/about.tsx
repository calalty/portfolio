import {
  CODING_PARAGRAPH,
  CODING_TITLE,
  LIFE_PARAGRAPH,
  LIFE_TITLE,
} from "@/contents/global";
import { PatternV1, PatternV2 } from "../icons";
import styles from "./about.module.scss";
import { useMediaMatch } from "@/hooks/use-media-match/use-media-match";

export default function About() {
  const isMobile = useMediaMatch("(min-width: 43.75rem)");

  const renderArticle = (title, paragraph, type: "life" | "coding") => (
    <article className={styles.description}>
      <div>
        <h2>{title}</h2>
        <p>{paragraph}</p>
      </div>
      {isMobile && type === "life" ? <PatternV1 /> : <PatternV2 />}
    </article>
  );

  return (
    <section id="about" data-section="about" className={styles.container}>
      <div className={styles.content}>
        {renderArticle(LIFE_TITLE, LIFE_PARAGRAPH, "life")}
        {renderArticle(CODING_TITLE, CODING_PARAGRAPH, "coding")}
      </div>
    </section>
  );
}
