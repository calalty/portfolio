import { useMediaMatch } from "@/hooks/use-media-match/use-media-match";

export const Projects = () => {
  const isTablet = useMediaMatch("(max-width: 650px)");

  return (
    <div
      className={`flex flex-col relative h-screen text-center md:text-left lg:flex-row mx-auto items-center bg-[#222227] justify-evenly ${
        isTablet ? "px-7" : "px-14"
      }`}
    >
      <div className="px-0 md:pr-12 lg:max-w-[65%]">
        <h2 className="mb-10 text-[white] m-auto lg:text-[3vw] sm:text-[2.5rem] text-[4vh] font-light">
          <span className="text-[#aab2d1]">☯</span> PROJECTS
        </h2>
        <p className="uppercase lg:text-[2vw] sm:text-[26px] text-[2.5vh] text-left ">
          COMING SOON...
        </p>
      </div>
    </div>
  );
};
