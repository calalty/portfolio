import React from "react";
import { ExperienceType } from "./experience.type";
import styles from "./experience.module.scss";
import { syneHeading } from "@/global/fonts";
export const Experience = ({
  jobTitle,
  company,
  startDate,
  endDate,
  responsibilities,
}: ExperienceType) => (
  <div className={styles.experience}>
    <header>
      <h3 className={syneHeading.className}>
        {company} <span> - {jobTitle}</span>
      </h3>
      <span>
        {startDate} - {endDate}
      </span>
    </header>

    <ul>
      {responsibilities.map(({ category, details }) => (
        <li key={category}>
          <span>{category}:</span>
          <ul>
            {details.map((detail, index) => (
              <li key={index}>{detail}</li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  </div>
);
