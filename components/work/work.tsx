import { workArray } from "@/global";
import React, { useState } from "react";
import styles from "./work.module.scss";
import { WorkIllustration } from "../icons";
import { ABOUT_PARAGRAPH_1, OVER_THE_YEARS } from "@/contents/global";
import { syneHeading, syneHeadingBoldest } from "@/global/fonts";

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
            <h3 className={`${showArrowStyle} ${styles.arrow} font-sans`}>→</h3>
          </div>
          <h3 className={`${showHeadingStyle} ${syneHeading.className}`}>
            {title}
          </h3>
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
            <h2 className={syneHeadingBoldest.className}>{OVER_THE_YEARS}</h2>
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
          <p>{ABOUT_PARAGRAPH_1}</p>
        </div>
      </div>
    </section>
  );
}
