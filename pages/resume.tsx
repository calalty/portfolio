import { Portrait } from "@/components/icons";
import styles from "../styles/resume.module.scss";
import Image from "next/image";
import { coolstatue } from "@/assets";
import { Experience } from "@/components/experience/experience";
import { coreTechnologies, experienceData, others } from "@/global";

export default function Resume() {
  return (
    <section className={styles.container}>
      <aside className={styles["resume-profile"]}>
        <div className={styles["resume-profile-wrapper"]}>
          <Image src={coolstatue} width={500} height={500} alt="" />
          <h1>
            Callum <br /> Alton
          </h1>
          <p className={styles.role}>SOFTWARE ENGINEER</p>

          <p className={styles.role}>MANCHESTER, UK</p>
          <div className={styles.skills}>
            <h3>Core Technologies:</h3>
            <ul>
              {coreTechnologies.map((value) => (
                <li key={value}>{value}</li>
              ))}
            </ul>
          </div>

          <div className={styles.skills}>
            <h3>Others:</h3>
            <ul>
              {others.map((value) => (
                <li key={value}>{value}</li>
              ))}
            </ul>
          </div>
        </div>
      </aside>

      <article className={styles["resume-details"]}>
        <section className={styles.profile}>
          <h2>Profile</h2>
          <p>
            Experienced front-end developer with a strong foundation in building
            interactive web applications using React and TypeScript. Eager to
            explore the captivating synergy of AI and back-end technologies, my
            passion for innovation drives me to expand my skill set and
            contribute to pioneering projects that seamlessly blend cutting-edge
            frontend design with powerful backend functionalities.
          </p>
        </section>
        <section className={styles.experience}>
          <h2>Experience</h2>
          <p>
            I have worked in a small number of diverse projects within the early
            stages of my career, I have adeptly navigated through various
            complexities and technologies, each contributing to my growth as an
            accomplished front-end developer:
          </p>

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
      </article>
    </section>
  );
}
