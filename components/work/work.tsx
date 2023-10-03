import { workArray } from "@/global";
import React, { useEffect, useState, useRef } from "react";
import styles from "./work.module.scss";
import { WorkIllustration } from "../icons";
import { ABOUT_PARAGRAPH_1, OVER_THE_YEARS } from "@/contents/global";
import { syneHeading, syneHeadingBoldest } from "@/global/fonts";

export function WorkItem({ title, description, currentIndex, index, onHover }) {
  const showArrowStyle =
    index === currentIndex ? styles["show-arrow"] : styles["hide-arrow"];

  const showHeadingStyle =
    index === currentIndex ? styles["show-heading"] : styles["hide-heading"];

  return (
    <li onMouseEnter={() => onHover(index)} onMouseLeave={() => onHover(null)}>
      <a href={`/${title}`}>
        <div className={styles.links}>
          <div>
            <h3
              className={`${showArrowStyle} ${styles.arrow} ${syneHeading.className} font-sans`}
            >
              →
            </h3>
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
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (!isHovered) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % workArray.length);
      }, 2500);
    } else {
      clearInterval(intervalRef.current);
    }

    return () => clearInterval(intervalRef.current); // Clear the interval on unmount
  }, [currentIndex, isHovered]);

  const handleHover = (index) => {
    setIsHovered(index !== null);

    if (index !== null) {
      setCurrentIndex(index);
    }
  };

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
                currentIndex={currentIndex}
                index={index}
                onHover={handleHover}
              />
            ))}
          </ul>
          <p>{ABOUT_PARAGRAPH_1}</p>
        </div>
      </div>
    </section>
  );
}
