import { coolstatue } from "@/assets";
import Image from "next/image";
import Blob from "@/components/blob";
import Link from "next/link";

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
              <Link href="/work" className="inline-block mr-8">
                <span className="align-bottom font-sans">→</span>
                <span className="ml-2">my work</span>
              </Link>
              <Link href="/contact" className="inline-block">
                <span className="align-bottom font-sans">→</span>
                <span className="ml-2">contact me</span>
              </Link>
            </div>
          </div>
          <div className="relative flex lg:flex-col flex-row mt-8 lg:mt-0">
            {/* <div className="absolute lg:relative  w-fit ml-auto lg:block justify-center items-center left-0 right-0 hidden sm:flex">
              <h2 className="sm:text-3xl text-2xl uppercase italic z-50 relative text-center lg:max-w-full max-w-[12ch]">
                I Am This One
              </h2>
              <Arrow additionalClassName="absolute z-30 lg:right-[-25px] lg:top-[36px] top-[5rem] right-[1.5rem]  bg-transparent transform -scale-y-100 rotate-[70deg]" />
              <Circle additionalClassName="absolute top-8 right-4 lg:top-[-0.5rem] z-40 lg:right-[-1.25rem] bg-gray-100" />
            </div> */}

            <div className="relative m-auto sm:m-0 sm:ml-auto">
              <Image
                className="z-30 bg-transparent relative w-60 sm:w-80 xl:w-96"
                src={coolstatue}
                alt=""
                width={0}
                height={0}
              />
              <Blob additionalClassName="absolute z-10 inset-0 w-full my-auto h-auto fill-[#E5E7EB]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
