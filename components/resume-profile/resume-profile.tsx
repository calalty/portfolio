import { coolstatue } from "@/assets";
import {
  CORE_TECHNOLOGIES_TITLE,
  FULL_NAME,
  MANCHESTER_UK,
  OTHERS_TITLE,
  SOFTWARE_ENGINEER,
} from "@/contents/global";
import Image from "next/image";
import React from "react";
import styles from "./resume-profile.module.scss";
import { coreTechnologies, others } from "@/global";

export const ResumeProfile = () => {
  const fullName = FULL_NAME.split(" ");
  const firstName = fullName[0];
  const lastName = fullName[1];

  return (
    <aside className={styles["resume-profile"]}>
      <Image src={coolstatue} width={500} height={500} alt="" />
      <h1>
        {firstName} <br /> {lastName}
      </h1>
      <p className={styles.role}>{SOFTWARE_ENGINEER}</p>

      <p className={styles.location}>{MANCHESTER_UK}</p>
      <div className={styles.skills}>
        <h3>{CORE_TECHNOLOGIES_TITLE}</h3>
        <ul>
          {coreTechnologies.map((value) => (
            <li key={value}>{value}</li>
          ))}
        </ul>
      </div>

      <div className={styles.skills}>
        <h3>{OTHERS_TITLE}</h3>
        <ul>
          {others.map((value) => (
            <li key={value}>{value}</li>
          ))}
        </ul>
      </div>
    </aside>
  );
};