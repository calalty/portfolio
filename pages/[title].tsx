import { workArray } from "@/global";
import Image from "next/image";
import styles from "../styles/company.module.scss";
import { syneHeading, syneHeadingBoldest } from "@/global/fonts";

export async function getStaticPaths() {
  const paths = workArray.map(({ title }) => ({
    params: { title },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const workItem = workArray.find((item) => item.title === params.title);

  return {
    props: {
      workItem,
    },
  };
}

export default function TitlePage({ workItem }) {
  return (
    <section className={styles.container} id="title">
      <div className={styles["image-container"]}>
        <Image alt="" src={workItem?.img} />
      </div>
      <div className={styles["primary-content"]}>
        <div className={styles.title}>
          <h2 className={syneHeadingBoldest.className}>{workItem?.title}</h2>
          <hr />
        </div>
        <div className={styles["table-container"]}>
          <table>
            <tbody>
              {workItem?.project.map(({ title, description }, index) => (
                <tr key={title}>
                  <td>
                    <h4 className={syneHeading.className}>{title}</h4>
                  </td>

                  <td key={title + index}>
                    <ul>
                      {description.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className={styles["work-description"]}>
            <p>{workItem?.work}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
