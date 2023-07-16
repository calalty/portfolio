import { coolstatue, splash } from "@/assets";
import Image from "next/image";
import Circle from "../components/circle";
import Arrow from "../components/arrow";

export default function Hero() {
  return (
    <div className="h-screen">
      <div className="flex items-center justify-center h-full relative bg-gray-100">
        <div className="sm:px-12 md:px-24 px-4 flex justify-between w-full lg:flex-row flex-col max-w-[90rem]">
          <div>
            <div className="border-b-[1px] pb-4 border-[#2b303b] relative">
              <h1 className="uppercase z-10 type-heading text-3xl sm:text-5xl relative font-black">
                SOFTWARE <br /> ENGINEER.
              </h1>
              <p className=" relative z-10 mt-4 max-w-[45ch] text-base sm:text-xl">
                I am{" "}
                <span className="text-red-500 font-bold">Callum Alton</span>, a
                software engineer from Manchester currently working with{" "}
                <span className="text-red-500 font-bold">Pets at Home</span>. I
                like to craft frontend projects with great user experiences.
              </p>
            </div>

            <div className="flex flex-row text-base sm:text-xl mt-4">
              <a href="#work" className="inline-block mr-8">
                <span className="align-bottom font-sans">→</span>
                <span className="ml-2">my work</span>
              </a>
              <a href="#contact" className="inline-block">
                <span className="align-bottom font-sans">→</span>
                <span className="ml-2">contact me</span>
              </a>
            </div>
          </div>
          <div className="relative flex lg:flex-col flex-row">
            <div className="relative w-fit ml-auto lg:block flex justify-center items-center">
              <h2 className="sm:text-3xl text-2xl uppercase italic z-50 relative text-center lg:max-w-full max-w-[12ch]">
                I Am{" "}
                <span className="type-heading font-black italic border-b-[1px] border-[#2b303b]">
                  Not{" "}
                </span>
                This One
              </h2>
              <Arrow additionalClassName="absolute z-30 right-[-25px] top-[36px] bg-transparent transform -scale-y-100 rotate-[70deg]" />
              <Circle additionalClassName="absolute top-[-0.5rem] z-40 right-[-1.25rem] bg-gray-100" />
            </div>

            <Image
              className="z-30 bg-transparent relative w-64 sm:w-80 lg:w-[450px] ml-auto mt-8 sm:mt-0"
              src={coolstatue}
              alt=""
              width={0}
              height={0}
            />

            
            <Image
              className="absolute z-10 bg-transparent inset-0 ml-8 w-56 sm:w-96 lg:w-[750px] hidden lg:flex"
              src={splash}
              alt=""
              width={750}
              height={750}
            />
          </div>
        </div>
        <div className="bg-gray-200 w-full h-[25%] absolute bottom-0"></div>
      </div>
    </div>
  );
}
