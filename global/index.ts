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
  { value: "IG", href: "https://www.instagram.com/calalton/?hl=en" },
  { value: "LI", href: "https://www.linkedin.com/in/callum-alton-562521160/" },
  { value: "GH", href: "https://github.com/calalty" },
];

export const myInterests: string[] = [
  "frontend",
  "artificial intelligence",
  "backend",
  "new tech",
  "new businesses",
  "startups",
  "money",
  "roast potatoes",
];

export const resumeLink = (isMobile?: boolean) => ({
  href: isMobile ? "/resume" : pdfUrl,
  value: "My Resume",
  target: "_blank",
});

export const pageLinks = [
  { href: "/work", value: "My Work" },
  { href: "/contact", value: "Contact Me" },
];

export const mailLink = { href: "mailto:hello@calalton.com", value: "My Mail" };

export const sections: string[] = ["hero", "about", "work", "contact"];

export const experienceData: ExperienceType[] = [
  {
    jobTitle: "Software Engineer",
    company: "Pets at Home",
    startDate: "September 2022",
    endDate: "Present",
    responsibilities: [
      {
        title: "Project Involvement",
        description:
          "I played a significant role in a new project right from its inception. This experience allowed me to gain valuable insights into the entire development process, from its early stages to its successful completion.",
      },
      {
        title: "UI Component Design",
        description:
          "I had the responsibility of creating intricate user interface components using the Storybook framework. This involved designing complex elements that greatly enhanced the overall user experience.",
      },
      {
        title: "Next.js Implementation",
        description:
          "I utilized Next.js to optimize the project's structure. This strategic approach improved the project's performance, SEO ranking, and user engagement, resulting in a more satisfying digital experience.",
      },
      {
        title: "Collaboration and Data Integration",
        description:
          "I worked closely with the Director of Development and backend developers to ensure seamless data integration. This collaboration optimized the way frontend components consumed data and aligned it effectively with the Product Information Management (PIM) system.",
      },
      {
        title: "Enhanced Application Security",
        description:
          "I took steps to strengthen our application's security and reliability. I achieved this by implementing automated testing using Playwright, which ensured a dependable and steadfast user experience.",
      },
      {
        title: "Design Collaboration",
        description:
          "I collaborated closely with the design team to ensure that our development work aligned seamlessly with the envisioned product direction. This resulted in a visually appealing and user-centric end product.",
      },
      {
        title: "Automated Testing Expertise",
        description:
          "Proficient in automated testing, specializing in Playwright for web application testing. Successfully transitioned from Cypress to Playwright for improved compatibility with Azure, enhancing the efficiency and reliability of testing processes.",
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
        title: "Apprenticeship Completion",
        description:
          "I successfully completed a Level 4 apprenticeship program, showcasing my unwavering commitment to continuous learning and professional growth.",
      },
      {
        title: "Content Management",
        description:
          "Proficiently managing content using Contentful was a key aspect of my role. I streamlined content workflows, making the process more efficient and effective.",
      },
      {
        title: "A/B Testing",
        description:
          "I conducted A/B tests using Optimizely, which played a pivotal role in enhancing user experiences and supporting data-driven decision-making.",
      },
      {
        title: "Effective Communication",
        description:
          "Facilitating communication across various departments was crucial to our projects' success. I engaged with developers, UX designers, QA professionals, scrum masters, and product owners to ensure alignment and synergy.",
      },
      {
        title: "Active Agile Participation",
        description:
          "I actively contributed to essential agile meetings, including sprint stand-up, refinement, retrospective, and review. This demonstrated my dedication to iterative development and effective teamwork.",
      },
      {
        title: "Accessibility Initiatives",
        description:
          "I took charge of accessibility initiatives in the Service Centre, implementing automated tests to measure and improve accessibility standards, ensuring that our digital products were more inclusive.",
      },
      {
        title: "Code Deployment Management",
        description:
          "Managing code deployment and releases through Azure and Github was a critical responsibility. I ensured a seamless transition of new features into the master branch, maintaining application stability.",
      },
      {
        title: "Comprehensive Testing",
        description:
          "Designing comprehensive test cases and scripts while maintaining robust test coverage was part of my role. This ensured the integrity of our code and the stability of our applications.",
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
        title: "Coding Bootcamp Experience",
        description:
          "I embarked on a transformative 12-week coding bootcamp, immersing myself in a dynamic curriculum that covered various technologies. From JavaScript to C# and Node.js, this experience significantly enhanced my technical skills.",
      },
      {
        title: "Hands-On Projects",
        description:
          "To apply my theoretical knowledge, I undertook hands-on projects spanning diverse domains. From creating a versatile calculator and an engaging dice game to working with APIs in projects like Rick & Morty API and Weather API, these experiences solidified my practical command over various tech stacks.",
      },
      {
        title: "Apprenticeship Journey",
        description:
          "I honed my skills as an apprentice software engineer, navigating complexities and challenges inherent to real-world development scenarios. This journey was a testament to my commitment to continual growth and excellence in the software engineering domain.",
      },
      {
        title: "Online Learning",
        description:
          "I enriched my learning through live online classes, engaging with experts and fellow learners to expand my understanding and perspectives on various technologies.",
      },
    ],
  },
];

export const coreTechnologies: string[] = [
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
  "React Query",
  "App Insights",
  "NextAuth"
];

export const others: string[] = [
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

export const pdfUrl: string = "/pdfs/CallumAltonPortfolio.pdf";
