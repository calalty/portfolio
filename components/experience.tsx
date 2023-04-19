import { WavyText } from "./wavy-text";
import { talktalk, petsathome, codenation } from "@/assets";
import { ExperienceCard } from "./experienceCard";

export const Experience = () => {
  const experienceCard = [
    {
      image: codenation,
      title: "Apprentice Software Engineer",
      company: "CodeNation",
      tech: ["#JS", "#CSS", "#HTML", "#CSHARP", "#MONGODB", "#NODEJS"],
      started: "2020",
      ended: "2021",
      summary:
        "When I dropped out of college to find my passion, I discovered CodeNation and realized that software development was my calling. At CodeNation, I delved into the world of full stack development and honed my skills, learning how to create  applications from the ground up. Completing the apprenticeship scheme not only gave me valuable experience, but also allowed me to earn certification for my achievements. Thanks to CodeNation, I now have the confidence and skills necessary to tackle any challenge that comes my way in the field of software development.",
    },
    {
      image: talktalk,
      title: "Junior Software Engineer",
      company: "TalkTalk",
      tech: [
        "#TS",
        "#SCSS",
        "#HTML",
        "#ANGULAR",
        "#OPTIMIZELY",
        "#REGEX",
        "#JEST",
      ],
      started: "2020",
      ended: "2022",
      summary:
        "Thanks to CodeNation, I was able to secure interviews with TalkTalk, and after several rounds,  I landed a position as a junior developer. During my tenure at TalkTalk, I gained invaluable experience working with the Angular stack, as well as developing my skills in SCSS/SASS and content management systems such as Optimizely. In addition, I had the opportunity to learn about the SCRUM process, which gave me a  better understanding of how agile development teams work. My time at TalkTalk allowed me to further develop my skills and build a solid foundation for my career in software development. ",
    },
    {
      image: petsathome,
      title: "Mid Level Software Engineer",
      company: "Pets at Home",
      tech: ["#TS", "#SCSS", "#REACT", "#NEXT", "#OPTIMIZELY", "#PLAYWRIGHT"],
      started: "2022",
      summary:
        "After my time at TalkTalk, I was ready for a new challenge and wanted to explore a new tech stack, so I turned to Pets at Home. They were building a new team for their rebrand and I was fortunate enough to be part of it from the very beginning. During   my time here, I have honed my skills in React and TypeScript,    which are the primary technologies used in the development of the  new Pets at Home website. I have also had the opportunity to work with exciting new tech such as Next.js and Storybook, which have allowed us to build and display complex components more efficiently. Being a part of this team has allowed me to grow as a developer and continue to learn from my talented colleagues. I'm excited to see where this journey takes me next!",
    },
  ];
  return (
    <div className="h-screen flex relative flex-col w-screen overflow-hidden justify-evenly mx-auto md:flex-row items-center pt-[200px]">
  
    </div>
  );
};
