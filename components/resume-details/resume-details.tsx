import React from "react";
import styles from "./resume-details.module.scss";
import { Download, Linkedin } from "../icons";
import {
  EXPERIENCE_PARAGRAPH,
  EXPERIENCE_TITLE,
  PROFILE_DESCRIPTION,
  PROFILE_SECOND_PARAGRAPH,
  PROFILE_TITLE,
} from "@/contents/global";
import { Experience } from "../experience/experience";
import { experienceData, pdfUrl } from "@/global";
import { syneHeading } from "@/global/fonts";

export const ResumeDetails = () => {
  return (
    <article className={styles["resume-details"]}>
      <div className={styles.download}>
        <Linkedin additionalClassName={styles.linkedin} />
        <a target="_blank" href={pdfUrl} rel="noopener noreferrer">
          <span>
            <Download />
          </span>
          Download
        </a>
      </div>
      <div className={styles["resume-details-wrapper"]}>
        <section className={styles.profile}>
          <div>
            <h2 className={syneHeading.className}>{PROFILE_TITLE}</h2>
          </div>
          <p>{PROFILE_DESCRIPTION}</p>
          <br />
        </section>
        <section className={styles.experience}>
          <h2 className={syneHeading.className}>{EXPERIENCE_TITLE}</h2>
          <p>{EXPERIENCE_PARAGRAPH}</p>

          {experienceData.map(
            ({ company, endDate, jobTitle, responsibilities, startDate }) => (
              <Experience
                key={company}
                company={company}
                endDate={endDate}
                jobTitle={jobTitle}
                responsibilities={responsibilities}
                startDate={startDate}
              />
            )
          )}
        </section>
      </div>
    </article>
  );
};
