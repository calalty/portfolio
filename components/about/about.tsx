import { PatternV1, PatternV2 } from "../icons";
import styles from "./about.module.scss";
import { useMediaMatch } from "@/hooks/use-media-match/use-media-match";

export default function About() {
  const isMobile = useMediaMatch("(min-width: 43.75rem)");

  return (
    <section id="about" data-section="about" className={styles.container}>
      <div className={styles.content}>
        <article className={styles.description}>
          <div>
            <h2>LIFE</h2>
            <p>
              My primary ambition is to travel the world while engaging in
              coding. Alongside this, I harbor a strong desire to expand my
              knowledge in backend development and, more recently, AI. Beyond
              coding, I find fulfillment in practicing martial arts such as
              kickboxing and boxing. Interestingly, it is during these moments
              of physical activity that my creativity and ideas flow freely,
              transcending the confines of the workplace.
            </p>
          </div>
          {isMobile && <PatternV1 />}
        </article>

        <article className={styles.description}>
          <div>
            <h2>CODING</h2>
            <p>
              I have honed my skills in frontend development. However, with my
              web portfolio now live, I am driven to explore the intricacies of
              other areas. With an unwavering focus on efficiency and
              forward-looking solutions, I am poised to embark on a journey of
              endless possibilities in the world of coding.
            </p>
          </div>
          {isMobile && <PatternV2 />}
        </article>
      </div>
    </section>
  );
}
