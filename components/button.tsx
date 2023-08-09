import React, { useState } from "react";

export const Button = ({
  value,
  primary,
  additionalClassName,
}: {
  value: string;
  primary?: boolean;
  additionalClassName?: string;
}) => {
  const marqueeArray = [...Array(10).fill(value)];
  const [hovered, setHovered] = useState<boolean>(false);

  return (
    <button
      className={`relative inline-block text-[2rem] border text-base sm:text-xl ${
        primary ? "border-[#2b303b]" : "border-[#aab2d1]"
      } ${additionalClassName} rounded-[1.5rem] px-4 py-1`}
    >
      <span
        className={`${hovered ? "opacity-0" : "opacity-100"} ${
          primary ? "text-[#2b303b]" : "text-[#aab2d1]"
        } transition-all`}
      >
        {value}
      </span>
      <div className="absolute inset-0 w-full overflow-hidden">
        <div
          className="flex relative marquee w-fit"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          {marqueeArray.map((value, index) => (
            <span
              key={index}
              className={`text-center px-2 py-1 whitespace-nowrap ${
                primary ? "text-[#2b303b]" : "text-[#aab2d1]"
              }`}
            >
              {value}
            </span>
          ))}
        </div>
      </div>
    </button>
  );
};

export default Button;
