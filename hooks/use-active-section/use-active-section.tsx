import { sections } from "@/global";
import { useEffect, useState } from "react";

type Section = {
  activeSectionValue: string;
  activeSectionIndex: number;
};

export const useActiveSection = () => {
  const [activeSection, setActiveSection] = useState<Section>({
    activeSectionValue: sections[0],
    activeSectionIndex: 0,
  });

  const getActiveSection = () => {
    const viewportHeight = window.innerHeight;

    for (
      let activeSectionIndex = 0;
      activeSectionIndex < sections.length;
      activeSectionIndex++
    ) {
      const section = sections[activeSectionIndex];
      const element = document.getElementById(section);
      if (!element) continue;

      const rect = element.getBoundingClientRect();

      if (
        rect.top <= viewportHeight * 0.5 &&
        rect.bottom >= viewportHeight * 0.5
      ) {
        return { activeSectionValue: section, activeSectionIndex };
      }
    }

    return { activeSectionValue: sections[0], activeSectionIndex: 0 };
  };

  useEffect(() => {
    function handleScroll() {
      const newActiveSection = getActiveSection();
      setActiveSection(newActiveSection);
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return activeSection;
};
