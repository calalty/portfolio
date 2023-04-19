import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Tilt from "react-parallax-tilt";
export interface ExperienceCardProps {
  image: any;
  title: string;
  company: string;
  tech: string[];
  summary: string;
  started: string;
  ended?: string;
}

export const ExperienceCard: React.FC<ExperienceCardProps> = ({
  company,
  image,
  tech,
  title,
  started,
  ended,
  summary,
}) => {
  return (
    <Tilt
      glareEnable={true}
      glareMaxOpacity={0.5}
      scale={1}
      glareColor="#aab2d1"
      glarePosition="all"
      glareBorderRadius="8px"
      className="flex flex-col m-auto flex-shrink-0 rounded-lg items-center w-[500px] md:w-[600px] xl:w-[800px] cursor-pointer"
    >
      <article className="overflow-hidden green-pink-gradient shadow-card w-full rounded-lg  p-[1px]">
        <div className="bg-[#383841] rounded-lg py-5 px-12 pt-10">
          <motion.div
            transition={{ duration: 1.2 }}
            initial={{ y: -100, opacity: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center"
          >
            <Image className="w-32 h-32 rounded-full" src={image} alt="" />
          </motion.div>
          <div className="px-4 text-center">
            <h4 className="text-2xl font-light py-4 mt-2 stretch-font-basic border-b">
              {title}
            </h4>
            <p className="text-2xl pt-4 ">{company}</p>
            <p className="font-light mt-2">
              {started} - {ended && ended}
            </p>
            <p className="my-4">{summary}</p>
            <div className="flex flex-wrap  justify-center">
              {tech?.map((tag) => (
                <a className="mx-1 violet-text-gradient my-1 " key={tag}>
                  {tag}
                </a>
              ))}
            </div>
          </div>
        </div>
      </article>
    </Tilt>
  );
};
