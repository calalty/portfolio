import { codenation, petsathome, talktalk } from "@/assets";
import { useMediaMatch } from "@/hooks/use-media-match/use-media-match";
import { styles } from "../styles/styles";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Arrow from "@/icons/arrow";

export const Experience = () => {
  const [selectedModal, setSelectedModal] = useState<number | null>(null);
  const [imageStyle, setImageStyle] = useState({
    maxWidth: "100%",
    maxHeight: "100%",
    objectFit: "contain",
    zIndex: 20,
  });

  const isMobile = useMediaMatch("(max-width: 500px)");
  const isTablet = useMediaMatch("(max-width: 650px)");

  const imageRefs = useRef([]);

  const handleModalClick = (id: number) => {
    if (selectedModal === id) {
      setSelectedModal(null);
      updateImageStyle(false, null);
    } else {
      setSelectedModal(id);
      updateImageStyle(true, id);
    }
  };

  const handleModalClose = () => {
    setSelectedModal(null);
  };

  useEffect(() => {
    selectedModal !== null
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "scroll");
  });

  const updateImageStyle = (show: boolean, id: number | null) => {
    if (show && imageRefs?.current[id]) {
      const rect = imageRefs.current[id].getBoundingClientRect();
      const screenWidth = window.innerWidth;
      const screenHeight = window.innerHeight;
      const offsetHeight = 0.2 * screenHeight;
      const offsetWidth = 0.2 * screenWidth;
      const translateX =
        (screenWidth - rect.width) / 2 -
        rect.left +
        (!isTablet ? offsetWidth : 0);
      const translateY =
        (screenHeight - rect.height) / 2 -
        rect.top +
        (isTablet ? offsetHeight : 0);
      const newImageStyle = {
        ...imageStyle,
        transition: "transform 1s ease",
        transform:
          show &&
          `translate(${translateX}px, ${translateY}px) scale(${
            isTablet ? "1" : "1.15"
          })`,
      };
      setImageStyle(newImageStyle);
    } else {
      setImageStyle({
        maxWidth: "100%",
        maxHeight: "100%",
        objectFit: "contain",
        zIndex: 20,
      });
    }
  };

  const imageModals = [
    {
      id: 0,
      imageMarginRight: "-5vw",
      textAlign: "text-end",
      gridImgColumn: 2,
      gridTextColumn: 1,
      gridRow: 1,
      company: "CODE NATION",
      role: "Apprentice Engineer",
      src: codenation,
      alt: "Code Nation",
      about:
        "Code Nation is a pioneering training provider specialising in Coding, Software Development, Cyber Security, Computer Science, Data Analytics, and XR - Courses and Bootcamps.",
      time: "2020 - 2021",
    },
    {
      id: 1,
      textAlign: "text-left",
      gridImgColumn: 1,
      gridTextColumn: 2,
      gridRow: 2,
      company: "TALKTALK",
      role: "Junior Engineer",
      src: talktalk,
      alt: "TalkTalk",
      about:
        "Talktalk is a telecommunications company that provides broadband, fixed line and mobile telephony, and TV services.",
      time: "2021 - 2022",
    },
    {
      id: 2,
      imageMarginLeft: "-5vw",
      textAlign: "text-end",
      gridImgColumn: 2,
      gridTextColumn: 1,
      gridRow: 3,
      company: "PETS AT HOME",
      role: "Software Engineer",
      src: petsathome,
      alt: "Pets at Home",
      about:
        "Pets at Home is a British pet supplies retailer selling pet products including food, toys, bedding, medication, accessories and pets.",
      time: "2022 - Present",
    },
  ];

  return (
    <div
      className={`${[styles.container, styles.paddingX, styles.paddingY].join(
        " "
      )} min-h-screen flex-col`}
    >
      <div>
        <h2 className={styles.sectionHeadText}>
          <span className="text-[#aab2d1]">✸</span> MY EXPERIENCE
        </h2>
        <div
          className="grid mt-6"
          style={{
            gridAutoRows: isMobile ? "60vmin" : "40vmin",
            gridTemplateColumns: isTablet ? "repeat(1, 100%)" : "",
          }}
        >
          {imageModals.map(
            (
              {
                id,
                alt,
                src,
                gridImgColumn,
                gridRow,
                gridTextColumn,
                company,
                role,
                textAlign,
                about,
                time,
              },
              index
            ) => (
              <>
                {!isTablet && (
                  <div
                    className="px-8 self-center"
                    style={{
                      gridColumnStart: `${gridTextColumn}`,
                      gridRowStart: `${gridRow}`,
                    }}
                  >
                    <div className={`uppercase font-light ${textAlign}`}>
                      <h2
                        className={`text-[#eef1fb] tusker-font ${styles.sectionHeadTightText}`}
                      >
                        {company}
                      </h2>
                      <p className={styles.sectionSubTextTiny}>{role}</p>
                    </div>
                  </div>
                )}
                <div
                  className="my-[1vw] min-h-[195px] transition-opacity duration-1000"
                  style={{
                    gridColumnStart: `${isTablet ? 1 : gridImgColumn}`,
                    gridRowStart: `${isTablet ? index + 1 : gridRow}`,
                  }}
                >
                  <div
                    className="w-full h-full block overflow-hidden relative transition duration-1000"
                    style={id === selectedModal ? imageStyle : {}}
                    ref={(el) => (imageRefs.current[id] = el)}
                    onClick={() => handleModalClick(id)}
                  >
                    <div
                      className={`${
                        id === selectedModal
                          ? ""
                          : "filter grayscale hover:scale-125 cursor-pointer"
                      } w-full h-full bg-white bg-cover transition duration-1000`}
                    >
                      <Image
                        alt={alt}
                        className={`object-cover relative transform-none w-full h-full`}
                        src={src}
                      />
                    </div>
                  </div>
                </div>
                {id === selectedModal && (
                  <div
                    className={`fixed top-0 left-0 w-full h-full bg-[#222227] flex justify-start z-10 sm:items-center items-start  ${
                      id === selectedModal ? "pl-[2rem]" : "pl-[15vw]"
                    }`}
                    onClick={handleModalClose}
                  >
                    <div
                      className={`mt-[5vh] sm:mt-0 font-light text-left max-w-[40ch]`}
                    >
                      <Arrow />
                      <p className={`${styles.sectionSubTextTiny} mb-2`}>
                        {time}
                      </p>
                      <h2
                        className={`text-[#eef1fb] tusker-font ${styles.sectionHeadTightText}`}
                      >
                        {company}
                      </h2>

                      <section className="inline-flex">
                        <p className={styles.sectionSubText}>{about}</p>
                      </section>
                    </div>
                  </div>
                )}
              </>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Experience;
