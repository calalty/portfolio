import { workArray } from "@/global";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "../styles/company.module.scss";

export default function TitlePage({ toggle }) {
  const router = useRouter();
  const { title } = router.query;

  const workItem = workArray.find((item) => item.title === title);

  if (!workItem) {
    return <div>Work item not found</div>;
  }

  return (
    <section className={styles.container}>
      <div className={styles["image-container"]}>
        <Image alt="" src={workItem.img} />
      </div>
      <div className={styles["primary-content"]}>
        <div className={styles.title}>
          <h2 className="type-heading">{workItem.title}</h2>
          <hr />
        </div>
        <div className={styles["table-container"]}>
          <table>
            <tbody>
              {workItem.project.map(({ title, description }, index) => (
                <tr key={title}>
                  <td>
                    <h4 className="type-heading">{title}</h4>
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
            <p>{workItem.work}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
