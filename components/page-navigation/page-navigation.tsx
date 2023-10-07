import { sections } from "@/global";
import styles from "./page-navigation.module.scss";
import { useEffect, useState } from "react";
import { useActiveSection } from "@/hooks/use-active-section/use-active-section";

export const PageNavigation = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const { activeSectionIndex } = useActiveSection();

  const handleOnClick = (index: number) => {
    setActiveIndex(index);

    const targetSection = document.getElementById(sections[index]);

    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    setActiveIndex(activeSectionIndex);
  }, [activeSectionIndex]);

  return (
    <nav className={styles["page-navigation"]} aria-label="Main navigation">
      <ul>
        {sections.map((value, index) => (
          <li key={value}>
            <button
              onClick={() => handleOnClick(index)}
              type="button"
              aria-label={`Go to the ${value} page`}
              className={`${activeIndex === index && styles["current"]} ${
                activeIndex === 2 && styles["alt-button"]
              }`}
            ></button>
          </li>
        ))}
      </ul>
    </nav>
  );
};
