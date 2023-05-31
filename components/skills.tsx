import {
  contentful,
  jest,
  next,
  optimizley,
  playwright,
  sass,
  storybook,
  typescript,
  angular,
  react,
} from "@/assets";
import { useMediaMatch } from "@/hooks/use-media-match/use-media-match";
import Image from "next/image";
import CircularProgress from "./circular-progress";

export const Skills = ({}) => {
  const isTablet = useMediaMatch("(max-width: 650px)");
  const skills = [
    {
      image: react,
      name: "REACT",
      percentage: 90,
    },
    {
      image: jest,
      name: "JEST",
      percentage: 60,
    },
    {
      image: storybook,
      name: "STORYBOOK",
      percentage: 65,
    },
    {
      image: sass,
      name: "SASS",
      percentage: 75,
    },
    {
      image: playwright,
      name: "PLAYWRIGHT",
      percentage: 50,
    },
    {
      image: typescript,
      name: "TYPESCRIPT",
      percentage: 85,
    },
    {
      image: optimizley,
      name: "OPTIMIZLEY",
      percentage: 40,
    },
    {
      image: next,
      name: "NEXT",
      percentage: 55,
    },
    {
      image: contentful,
      name: "CONTENTFUL",
      percentage: 70,
    },
    {
      image: angular,
      name: "ANGULAR",
      percentage: 82.5,
    },
  ];
  return (
    <div
      className={`flex space-y-8 relative min-h-screen md:text-left mx-auto bg-[#222227] items-center ${
        isTablet ? "px-7 justify-center" : "px-14 justify-between "
      }`}
    >
      <div>
        <h2 className="m text-[white] m-auto lg:text-[3vw] sm:text-[2.5rem] text-[4vh] font-light">
          <span className="text-[#aab2d1]">✔</span> MY SKILLS
        </h2>

        <ul className="flex flex-wrap mt-10">
          {skills.map(({ image, name, percentage }) => (
            <div key={name} className="relative m-4">
              <CircularProgress
                percentage={percentage}
                size={200}
                strokeWidth={12.5}
              />
              <li className="bg-[#00000050] p-10 text-center flex-shrink-0 w-[200px] h-[200px] rounded-full flex flex-col items-center justify-center">
                <Image
                  className="object-fit w-auto h-16 mx-auto"
                  src={image}
                  alt=""
                />
                <p className="mt-8">{name}</p>
              </li>
            </div>
          ))}

          {/* <div className="bg-[#00000050] p-10 ">
            <li></li>
          </div> */}
        </ul>
      </div>
    </div>
  );
};
