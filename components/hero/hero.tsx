import Link from "next/link";
import { motion } from "framer-motion";
import styles from "./hero.module.scss";
import { pageLinks } from "@/global";
import { Portrait } from "@/components/portrait";
import { useMediaMatch } from "@/hooks/use-media-match/use-media-match";
import {
  DESCRIPTION,
  FULL_NAME,
  HELLO_INTRO,
  PETS_AT_HOME,
} from "./hero-content";

export default function Hero({ toggle }) {
  const isMobile = useMediaMatch("(max-width: 37.5rem)");

  return (
    <section className={styles.container}>
      <div className={styles["primary-content"]}>
        <div className={styles["inner-content"]}>
          <div>
            <motion.h1
              initial={{ translateY: -96, opacity: 0 }}
              animate={{
                translateY: toggle ? -96 : 0,
                opacity: toggle ? 0 : 1,
              }}
              transition={{
                duration: 0.5,
                delay: !toggle && 1,
              }}
              className="type-heading"
            >
              <span className={styles["text-outline"]}>{HELLO_INTRO}</span>{" "}
              <br />
              {FULL_NAME}
            </motion.h1>
            <motion.p
              initial={{ translateY: -96, opacity: 0 }}
              animate={{
                translateY: toggle ? -96 : 0,
                opacity: toggle ? 0 : 1,
              }}
              transition={{ duration: 0.5, delay: !toggle && 1.05 }}
            >
              {DESCRIPTION}
              <span>{PETS_AT_HOME}</span>.
            </motion.p>
          </div>

          {!isMobile && <Portrait />}
        </div>

        <ul>
          {pageLinks.map(({ href, value, arrow }) => (
            <motion.li
              key={value}
              initial={{ translateY: -96, opacity: 0 }}
              animate={{
                translateY: toggle ? -96 : 0,
                opacity: toggle ? 0 : 1,
              }}
              transition={{ duration: 0.5, delay: !toggle && 1.1 }}
            >
              <Link href={href}>
                <span className={styles.arrow}>{arrow}</span>
                <span className={styles.link}>{value}</span>
              </Link>
            </motion.li>
          ))}
        </ul>
      </div>

      {isMobile && (
        <div className={styles.portrait}>
          <Portrait />
        </div>
      )}
    </section>
  );
}
