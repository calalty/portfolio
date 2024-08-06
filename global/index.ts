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
        category: "Greenfield Project Development",
        details: [
          "Joined Pets At Home during the early stages of a greenfield project, contributing to the development of a new web application.",
          "Built and designed foundational components using Storybook for consistent UI development.",
          "Developed pages with Next.js, utilizing React Query for efficient data fetching and Axios for API integration.",
          "Implemented global state management using Zustand, ensuring seamless state sharing across the application.",
          "Following the launch in June 2024, led efforts that resulted in a 3% increase in web conversions and a 25-35% rise in app sales.",
        ],
      },
      {
        category: "Technical Solution Design",
        details: [
          "Collaborated closely with the Director of Development and backend team to architect the Product Detail Page (PDP).",
          "Engaged in high-level communication to structure backend data for optimal frontend consumption.",
        ],
      },
      {
        category: "Mentorship & Team Development",
        details: [
          "Mentored new team members by familiarizing them with the repo structure and introducing best practices aligned with our technology stack.",
          "Promoted the use of global state management to reduce prop drilling, thereby simplifying component communication and enhancing code maintainability.",
        ],
      },
      {
        category: "Process Improvement & Automation",
        details: [
          "Passionate about workflow optimization, led initiatives to automate routine processes.",
          "Developing an automation system that sends updates to Microsoft Teams channels upon pull request merges, detailing the squad name, task number, PR link, and pipeline status. This automation reduced interruptions for developers and streamlined communication for delivery leads.",
        ],
      },
      {
        category: "Automated Testing",
        details: [
          "Implemented automated testing using Playwright, significantly improving our bug detection capabilities.",
          "Wrote test suites to ensure robust assurance, reducing manual testing efforts and increasing deployment confidence.",
          "Utilized Jest for unit testing across the codebase, maintaining high standards of code and performance.",
        ],
      },
      {
        category: "Rapid Skill Advancement",
        details: [
          "Quickly advanced from a junior to a mid-level role within a few months, demonstrating a strong commitment to professional growth.",
        ],
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
        category: "Professional Development & Apprenticeship",
        details: [
          "Successfully completed a Level 4 apprenticeship program, showcasing commitment to continuous learning and professional growth.",
          "Actively contributed to agile meetings, including sprint stand-ups, refinements, retrospectives, and reviews, demonstrating commitment to iterative development and teamwork.",
        ],
      },
      {
        category: "Testing & Optimization",
        details: [
          "Conducted A/B tests using Optimizely, enhancing user experiences and supporting data-driven decision-making.",
          "Designed comprehensive test cases and scripts, maintaining robust test coverage.",
        ],
      },
      {
        category: "Communication & Collaboration",
        details: [
          "Facilitated communication across departments, engaging with developers, UX designers, QA professionals, scrum masters, and product owners to ensure project alignment.",
          "Managed code deployment and releases through Azure and GitHub, ensuring seamless transitions of new features and maintaining application stability.",
        ],
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
        category: "Bootcamp Experience & Project Work",
        details: [
          "Completed a 12-week coding bootcamp, enhancing technical skills in JavaScript, C#, Node.js, and other technologies.",
          "Undertook practical projects, including creating a calculator, dice game, and working with APIs such as the Weather API.",
        ],
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
  "NextAuth",
  "Git",
  "CI/CD Pipelines (e.g., GitHub Actions, Azure)",
];

export const others: string[] = [
  "Automation testing.",
  "Responsive web design.",
  "Performance optimization.",
  "Search engine optimization (SEO).",
  "Building core components in Storybook.",
  "Communicating backend data structure.",
  "Problem-solving.",
  "Adaptability.",
  "Project management tools (e.g., Jira, Azure).",
  "Code review practices.",
  "Security awareness.",
  "API design and integration (RESTful APIs).",
  "SQL/NoSQL databases.",
];

export const personalQualities: string[] = [
  "Self-motivated and strive to achieve by any means necessary.",
  "Collaborate effectively with others, evaluating team dynamics to enhance teamwork.",
  "Innovative and imaginative solutions.",
  "Strong work ethic with a focus on delivering results and meeting deadlines.",
];

export const pdfUrl: string = "/pdfs/CallumAltonPortfolio.pdf";
