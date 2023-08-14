import { workArray } from "@/global";
import React, { useState } from "react";
import styles from "./work.module.scss";
import { WorkIllustration } from "../icons";
import { ABOUT_PARAGRAPH, OVER_THE_YEARS } from "./work-content";

export default function Work() {
  const [hoveredWork, setHoveredWork] = useState<number | null>(null);

  return (
    <div id="work" className={styles.wrapper}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#f3f2f9"
          fill-opacity="1"
          d="M0,224L26.7,208C53.3,192,107,160,160,149.3C213.3,139,267,149,320,138.7C373.3,128,427,96,480,106.7C533.3,117,587,171,640,165.3C693.3,160,747,96,800,74.7C853.3,53,907,75,960,90.7C1013.3,107,1067,117,1120,149.3C1173.3,181,1227,235,1280,224C1333.3,213,1387,139,1413,101.3L1440,64L1440,0L1413.3,0C1386.7,0,1333,0,1280,0C1226.7,0,1173,0,1120,0C1066.7,0,1013,0,960,0C906.7,0,853,0,800,0C746.7,0,693,0,640,0C586.7,0,533,0,480,0C426.7,0,373,0,320,0C266.7,0,213,0,160,0C106.7,0,53,0,27,0L0,0Z"
        ></path>
      </svg>
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
              <li
                key={index}
                onMouseEnter={() => setHoveredWork(index)}
                onMouseLeave={() => setHoveredWork(null)}
              >
                <a href={`/${title}`}>
                  <div className={styles.links}>
                    <div>
                      <h4
                        className={`${
                          hoveredWork === index
                            ? styles["show-arrow"]
                            : styles["hide-arrow"]
                        } ${styles.arrow} font-sans`}
                      >
                        →
                      </h4>
                    </div>
                    <h4
                      className={`${
                        hoveredWork === index
                          ? styles["show-heading"]
                          : styles["hide-heading"]
                      }  ${styles.heading} type-heading`}
                    >
                      {title}
                    </h4>
                    <p>{description}</p>
                  </div>
                </a>
              </li>
            ))}
          </ul>
          <p>{ABOUT_PARAGRAPH}</p>
        </div>
      </div>
    </div>
  );
}
