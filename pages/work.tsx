import { codenation, pets, talktalk } from "@/assets";
import { workArray } from "@/global";
import Image from "next/image";
import React, { useState } from "react";

export default function Work() {
  const [hoveredWork, setHoveredWork] = useState<number | null>(null);

  return (
    <div
      id="work"
      className="w-full overflow-hidden h-screen bg-gray-200 md:pl-24 md:pt-60 xl:pl-60 flex flex-col md:flex-row"
    >
      <div className="h-full flex flex-col w-full md:w-2/4 pr-6 px-4 sm:pr-12 justify-center md:justify-start">
        <div className="flex items-baseline overflow-hidden">
          <h2 className="font-bold uppercase text-left type-heading w-full overflow-hidden m-0 text-[2.5rem]">
            Work
          </h2>
          <h5 className="text-[1.5rem]">{workArray.length}</h5>
        </div>
        <hr className="mt-4 w-full border-b-0 border-[#2b303b]" />
        <ul>
          {workArray.map(({ title, description }, index) => (
            <li
              key={index}
              onMouseEnter={() => setHoveredWork(index)}
              onMouseLeave={() => setHoveredWork(null)}
            >
              <a href={`/${title}`}>
                <div className="flex flex-row justify-between relative py-[1.5rem] border-b border-[#2b303b] text-[1.25rem] items-baseline">
                  <div className="absolute overflow-hidden">
                    <h4
                      className={`${
                        hoveredWork === index
                          ? "translate-x-[0]"
                          : "translate-x-[-100%]"
                      } transition-all duration-[500ms] relative font-sans`}
                    >
                      →
                    </h4>
                  </div>
                  <h4
                    className={`${
                      hoveredWork === index
                        ? "translate-x-[1.75rem]"
                        : "transform-none"
                    } transition-all duration-[500ms] type-heading uppercase font-bold`}
                  >
                    {title}
                  </h4>
                  <p className="text-[1rem]">{description}</p>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="h-full flex justify-center flex-col w-full md:w-2/4 relative">
        <div className="rounded-tl-3xl rounded-tr-3xl md:rounded-tr-none h-full w-full bg-gray-100 absolute overflow-hidden opacity-100 transform-none">
          {workArray.map(({ img }, index) => (
            <div
              key={index}
              className={` ${
                hoveredWork === index ? "opacity-100" : "opacity-0"
              } transition-all duration-[500ms] h-full w-full overflow-hidden absolute`}
            >
              <div
                className={`${
                  hoveredWork === index ? "scale-110" : "transform-none"
                } transition-all duration-[500ms] relative h-full w-full`}
              >
                <Image
                  alt=""
                  className={`w-full h-full inset-0 rounded-tl-3xl absolute object-cover`}
                  src={img}
                  style={{ objectPosition: "50% 50%" }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
