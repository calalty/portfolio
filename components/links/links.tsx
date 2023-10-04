import Link from "next/link";
import styles from "./links.module.scss";
import { LinksType } from "./links.type";

export default function Links({
  links,
  arrowType,
  additionalClassName,
}: LinksType) {
  return (
    <ul className={`${styles.links} ${additionalClassName}`}>
      {links.map(({ href, value, target }) => (
        <li className={styles["link-wrapper"]} key={value}>
          <Link href={href} target={target}>
            <span className={`${styles.arrow} font-sans`}>
              {arrowType === "skewed" ? "↗" : "→"}
            </span>
            <span className={styles.link}>{value}</span>
          </Link>
          <div className={styles["link-underline"]}></div>
        </li>
      ))}
    </ul>
  );
}
