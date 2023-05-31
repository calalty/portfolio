import NavBar from "@/components/nav-bar";
import { Hero } from "@/components/hero";
import React, { useCallback, useEffect, useRef, useState } from "react";
import About from "@/pages/about";
import { codenation, petsathome, talktalk } from "@/assets";
import { useMediaMatch } from "@/hooks/use-media-match/use-media-match";
import { Skills } from "@/components/skills";
import { Projects } from "@/components/projects";

export default function Home() {
  // const [selectedModal, setSelectedModal] = useState<number | null>(null);
  // const [imageStyle, setImageStyle] = useState({
  //   maxWidth: "100%",
  //   maxHeight: "100%",
  //   objectFit: "contain",
  //   zIndex: 20,
  // });

  // const isTablet = useMediaMatch("(max-width: 650px)");

  // const imageRefs = useRef([]);

  // const handleModalClick = (id: number) => {
  //   if (selectedModal === id) {
  //     setSelectedModal(null);
  //     updateImageStyle(false, null); // pass null as the second argument
  //   } else {
  //     setSelectedModal(id);
  //     updateImageStyle(true, id); // pass the id value as the second argument
  //   }
  // };

  // const handleModalClose = () => {
  //   setSelectedModal(null);
  // };

  // const updateImageStyle = (show: boolean, id: number | null) => {
  //   if (show && imageRefs?.current[id]) {
  //     const rect = imageRefs.current[id].getBoundingClientRect();
  //     const screenWidth = window.innerWidth;
  //     const screenHeight = window.innerHeight;
  //     const offsetWidth = 0.2 * screenWidth;
  //     const offsetHeight = 0.2 * screenHeight;
  //     const translateX =
  //       (screenWidth - rect.width) / 2 - rect.left + offsetWidth;
  //     const translateY = (screenHeight - rect.height) / 2 - rect.top;
  //     const tabletTranslateX = (screenWidth - rect.width) / 2 - rect.left;
  //     const tabletTranslateY =
  //       (screenHeight - rect.height) / 2 - rect.top + offsetHeight;
  //     const scale =
  //       Math.min(screenWidth / rect.width, screenHeight / rect.height) * 0.5;
  //     const newImageStyle = {
  //       ...imageStyle,
  //       transition: "transform 1s ease",
  //       transform:
  //         show && !isTablet
  //           ? `translate(${translateX}px, ${translateY}px) scale(${scale}, ${scale})`
  //           : `translate(${tabletTranslateX}px, ${tabletTranslateY}px)`,
  //     };
  //     setImageStyle(newImageStyle);
  //   } else {
  //     setImageStyle({
  //       maxWidth: "100%",
  //       maxHeight: "100%",
  //       objectFit: "contain",
  //       zIndex: 20,
  //     });
  //   }
  // };

  // const imageModals = [
  //   {
  //     id: 0,
  //     imageMarginRight: "-5vw",
  //     textAlign: "text-end",
  //     gridImgColumn: 2,
  //     gridTextColumn: 1,
  //     gridRow: 1,
  //     company: "CODE NATION",
  //     role: "Apprentice Engineer",
  //     src: codenation,
  //     alt: "Code Nation",
  //     about:
  //       "After I dropped out of college, I decided to explore other opportunities. Coding caught my interest, and I began to teach myself the basics. I then applied for an apprenticeship at CodeNation, which I was fortunate enough to be accepted into. During my time there, I gained invaluable experience and knowledge in various programming languages and tools, including HTML, CSS, JS, Jest testing, CSharp, and databases like MongoDB. Thanks to CodeNation, I was able to pursue a career in the field of software development.",
  //   },
  //   {
  //     id: 1,
  //     textAlign: "text-left",
  //     gridImgColumn: 1,
  //     gridTextColumn: 2,
  //     gridRow: 2,
  //     company: "TALKTALK",
  //     role: "Junior Engineer",
  //     src: talktalk,
  //     alt: "TalkTalk",
  //     about:
  //       "During my apprenticeship, I joined TalkTalk, a respected tech organization, and sharpened my coding skills. Angular enabled me to develop dynamic web applications with ease, while TypeScript's advanced features and SCSS's flexibility improved my expertise. Optimizely testing and Contentful's content management system enhanced my skills. Participating in agile development practices boosted my understanding of efficient and collaborative team workflows. Overall, TalkTalk's experience broadened my skillset, and I am excited to apply my knowledge to any organization in need of a skilled and adaptable web development professional.",
  //   },
  //   {
  //     id: 2,
  //     imageMarginLeft: "-5vw",
  //     textAlign: "text-end",
  //     gridImgColumn: 2,
  //     gridTextColumn: 1,
  //     gridRow: 3,
  //     company: "PETS AT HOME",
  //     role: "Software Engineer",
  //     src: petsathome,
  //     alt: "Pets at Home",
  //     about:
  //       "After experiencing the TalkTalk debacle, I felt compelled to learn a new tech stack, React. Fortunately, I landed a job at Pets at Home, where I was tasked with building their brand new website. It felt like starting a new start-up, with a greenfield project full of excitement. Since then, I've remained with the company and have learned React, Cypress testing, and Playwright testing for acceptance tests. In addition, I gained knowledge about Storybook, where I was able to build some of the components that will be used on the new website. The journey has been fulfilling, and I'm excited to see where my newfound skills will take me next.",
  //   },
  // ];

  return (
    <>
      {/* {selectedModal === null && <NavBar />} */}

      <div className="painting bg-cover bg-no-repeat bg-center">
        <section className="bg-[#38384199] snap-start z-10">
          <Hero />
        </section>
      </div>
      {/* <section className="snap-center">
        <About />
      </section>

      <section className="snap-center">
        <Experience
          imageRefs={imageRefs}
          imageStyle={imageStyle}
          selectedModal={selectedModal}
          onModalClick={handleModalClick}
          onModalClose={handleModalClose}
          imageModals={imageModals}
        />
      </section> */}

      {/* <section>
        <Skills />
      </section>

      <section>
        <Projects />
      </section> */}
    </>
  );
}
