import { ResumeDetails } from "@/components/resume-details/resume-details";
import styles from "../styles/resume.module.scss";

import { ResumeProfile } from "@/components/resume-profile/resume-profile";

export default function Resume() {
  return (
    <section className={styles.container}>
      <ResumeProfile />
      <ResumeDetails />
    </section>
  );
}
