import { workArray } from "@/global";
import React, { useState } from "react";
import styles from "./work.module.scss";
import { WorkIllustration } from "../icons";
import { ABOUT_PARAGRAPH, OVER_THE_YEARS } from "./work-content";

export function WorkItem({ title, description, index }) {
  const [hoveredWork, setHoveredWork] = useState<number | null>(null);
  const isHoveredWorkEqualToIndex = hoveredWork === index;
  const showArrowStyle = isHoveredWorkEqualToIndex
    ? styles["show-arrow"]
    : styles["hide-arrow"];
  const showHeadingStyle = isHoveredWorkEqualToIndex
    ? styles["show-heading"]
    : styles["hide-heading"];

  return (
    <li
      onMouseEnter={() => setHoveredWork(index)}
      onMouseLeave={() => setHoveredWork(null)}
    >
      <a href={`/${title}`}>
        <div className={styles.links}>
          <div>
            <h4 className={`${showArrowStyle} ${styles.arrow} font-sans`}>→</h4>
          </div>
          <h4 className={`${showHeadingStyle} ${styles.heading} type-heading`}>
            {title}
          </h4>
          <p>{description}</p>
        </div>
      </a>
    </li>
  );
}

export default function Work() {
  return (
    <section data-section="work" id="work" className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles["coding-image"]}>
          <WorkIllustration />
        </div>
        <div className={styles["work-container"]}>
          <div className={styles.title}>
            <h2>{OVER_THE_YEARS}</h2>
          </div>
          <ul>
            {workArray.map(({ title, description }, index) => (
              <WorkItem
                key={title}
                title={title}
                description={description}
                index={index}
              />
            ))}
          </ul>
          <p>{ABOUT_PARAGRAPH}</p>
        </div>
      </div>
    </section>
  );
}
