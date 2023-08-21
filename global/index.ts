import { codenation, pets, talktalk } from "@/assets";
import { ExperienceType } from "@/components/experience/experience.type";

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

export const socialMedias = [
  { title: "IG", url: "#" },
  { title: "LI", url: "#" },
  { title: "GH", url: "#" },
];

export const myInterests = [
  "frontend",
  "artificial intelligence",
  "backend",
  "new tech",
  "new businesses",
  "startups",
  "money",
  "roast potatoes",
];

export const pageLinks = [
  { href: "/work", value: "My Work" },
  { href: "/contact", value: "Contact Me" },
];

export const externalPageLinks = [
  { href: "/", value: "My Projects" },
  { href: "/", value: "My Resume" },
  { href: "/", value: "My Mail" },
];

export const sections = ["hero", "about", "work", "contact"];

export const experienceData: ExperienceType[] = [
  {
    jobTitle: "Software Engineer",
    company: "Pets at Home",
    startDate: "September 2022",
    endDate: "Present",
    responsibilities: [
      {
        title: "Immersed in Project Evolution",
        description:
          "As an integral part of a greenfield project, I've had the privilege of witnessing its inception and evolution, gaining profound insights into its foundational processes and witnessing its completion.",
      },
      {
        title: "Crafting Complex Components with Finesse",
        description:
          "My role involved architecting intricate components within the Storybook framework, employing the atomic design methodology. Notably, I've had the pleasure of creating high-complexity organisms, showcasing my mastery in constructing sophisticated UI elements.",
      },
      {
        title: "Mastering Next.js for Optimal Project Structure",
        description:
          "I've undertaken an immersive exploration of Next.js, strategically molding aspects of the project's structure to harness its routing capabilities. I've orchestrated server-side rendering in instances where it can enhance performance, SEO, and user engagement, thereby elevating the overall digital experience.",
      },
      {
        title: "Collaborative Leadership and Backend Synergy",
        description:
          "Operating closely with the Director of Development, who oversees a holistic spectrum encompassing backend, web, app, and architecture, I singularly undertook the development of the product page under stringent timelines. My proactive collaboration with backend developers ensured seamless data integration, optimizing frontend data consumption and harmonizing it effectively with the Product Information Management (PIM) system.",
      },
      {
        title: "Elevating Application Integrity through Automation",
        description:
          "I've been instrumental in fortifying our application's security and robustness by implementing automated testing, leveraging Playwright as our chosen tool. This initiative underscores my commitment to delivering a dependable and steadfast user experience.",
      },
      {
        title: "Design-Driven Collaborations",
        description:
          "My engagement extended to close collaboration with the design team, playing a pivotal role in shaping the product's trajectory. This relationship ensured that our craftsmanship aligned seamlessly with the envisioned product direction, resulting in an aesthetically appealing and user-centric end product.",
      },
    ],
  },
  {
    jobTitle: "Junior Engineer",
    company: "TalkTalk",
    startDate: "June 2020",
    endDate: "September 2022",
    responsibilities: [
      {
        title: "Apprenticeship Achievement",
        description:
          "Successfully completed a Level 4 apprenticeship, showcasing a steadfast commitment to learning and growth.",
      },
      {
        title: "Content Mastery with Contentful",
        description:
          "Proficiently operate within Contentful, a robust content management system, demonstrating a knack for streamlining content workflows.",
      },
      {
        title: "Optimizely Expertise for Seamless Experimentation",
        description:
          "Leverage Optimizely as a regular tool, orchestrating A/B tests on websites with precision to enhance user experiences and inform data-driven decisions.",
      },
      {
        title: "Cross-Functional Communication",
        description:
          "Facilitate effective communication across departments, engaging with developers, UX designers, QA professionals, scrum masters, and product owners to drive alignment and synergy.",
      },
      {
        title: "Agile Participation",
        description:
          "Actively contribute to essential agile meetings, such as sprint stand-up, refinement, retrospective, and review, demonstrating a commitment to iterative development and teamwork.",
      },
      {
        title: "Accessibility Advocate",
        description:
          "Spearhead Accessibility initiatives in the Service Centre, taking charge of implementing automated tests to measure and enhance accessibility standards.",
      },
      {
        title: "Holistic Agile Engagement",
        description:
          "Embrace multifaceted responsibilities by occasionally taking on the role of QA within an agile squad, exemplifying adaptability and dedication to a well-rounded approach.",
      },
      {
        title: "Flawless Code Deployment",
        description:
          "Execute seamless code deployment and releases through Azure and Github, ensuring a seamless transition of new features into the master branch.",
      },
      {
        title: "End-to-End Test Ownership",
        description:
          "Expertly design comprehensive test cases and scripts while maintaining robust test coverage, assuring code integrity and application stability.",
      },
    ],
  },
  {
    jobTitle: "Apprentice Engineer",
    company: "CodeNation",
    startDate: "April 2020",
    endDate: "June 2020",
    responsibilities: [
      {
        title: "Immersive 12-Week Coding Camp",
        description:
          "Embarked on a transformative 12-week coding bootcamp, immersing myself in a dynamic curriculum that encompassed a comprehensive array of technologies, ranging from JavaScript, C#, and Node.js to other front-end and back-end marvels, all designed to sculpt my technical prowess.",
      },
      {
        title: "Projects",
        description:
          "Transcending theoretical knowledge, I took on hands-on learning by building multifaceted projects that spanned a variety of domains. From crafting a versatile calculator and a captivating dice game to harnessing the power of APIs in projects like Rick & Morty API and Weather API, these experiences solidified my practical command over diverse tech stacks",
      },
      {
        title: "Apprenticeship Advancement",
        description:
          "Honed my skills as an apprentice software engineer, navigating complexities and challenges inherent to real-world development scenarios. This journey has been a testament to my commitment to continual growth and excellence in the software engineering domain.",
      },
      {
        title: "Elevated Learning through Live Online Sessions",
        description:
          "Navigated a rich tapestry of knowledge through live online classes, engaging with experts and fellow learners to enrich my understanding and perspectives on various technologies.",
      },
    ],
  },
];

export const coreTechnologies = [
  "Javascript",
  "Typescript",
  "CSS",
  "SASS",
  "React",
  "Next.js",
  "Playwright",
  "Optimizely",
  "Zustand",
  "Storybook",
];

export const others = [
  "Automation testing.",
  "Responsive web design.",
  "Performance optimization.",
  "Search engine optimization.",
  "Building core components in Storybook",
  "Communicating backend data structure.",
  "Self-motivated, and strive to achieve by any means necessary.",
  "Collaborate effectively with others. I employ a collaborative approach, evaluating team dynamics before contributing my thoughts and ideas to enhance teamwork.",
  "Continuous drive to innovate and enhance processes for swifter and more efficient outcomes.",
  "Uncovering unexpected and imaginative solutions that set me apart.",
];
