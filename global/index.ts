import { codenation, pets, talktalk } from "@/assets";

export const workArray = [
  {
    title: "CodeNation",
    description: "Apprenticeship",
    img: codenation,
    project: [
      { title: "Category", description: ["Apprenticeship", "Bootcamp"] },
      { title: "Year", description: ["2020 - 2021"] },
      {
        title: "Tech",
        description: ["A", "Little", "Bit", "Of", "Everything"],
      },
    ],
    work: "After quitting college, I dedicated myself to exploring my creative side and eventually discovered software development. I invested all my time in learning code and joined CodeNation's bootcamp in 2020. Through the program, I honed my full-stack development skills while simultaneously completing my apprenticeship.",
  },
  {
    title: "TalkTalk",
    description: "Broadband",
    img: talktalk,
    project: [
      { title: "Category", description: ["Broadband", "Fibre Optic"] },
      { title: "Year", description: ["2021 - 2022"] },
      {
        title: "Tech",
        description: [
          "Angular",
          "Typescript",
          "Jest",
          "SASS",
          "Optimizely",
          "Cypress",
        ],
      },
    ],
    work: "After completing my bootcamp, I continued my apprenticeship at TalkTalk, where I worked on rebuilding their website's service desk section. My role involved enhancing the customer experience by developing features that helped users identify and resolve issues with their broadband service.",
  },
  {
    title: "Pets at Home",
    description: "Retail",
    img: pets,
    project: [
      { title: "Category", description: ["Retail", "Pets"] },
      { title: "Year", description: ["2022 - Present"] },
      {
        title: "Tech",
        description: [
          "React",
          "Typescript",
          "Jest",
          "SASS",
          "NextJS",
          "Playwright",
        ],
      },
    ],
    work: "Seeking a new adventure and an opportunity to learn a new tech stack, I joined Pets at Home. Being part of a greenfield project, I've been involved from the beginning, gaining valuable insights into the complexities of building a new development team and all the necessary components involved.",
  },
];
