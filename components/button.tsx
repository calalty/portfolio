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
      className={`relative inline-block text-[2rem] border ${
        primary ? "border-[#2b303b]" : "bg-[#2b303b]"
      } ${additionalClassName} rounded-[1.5rem] px-4 py-1`}
    >
      <span
        className={`${hovered ? "opacity-0" : "opacity-100"} ${
          primary ? "text-[#2b303b]" : "text-[#f8f8f7]"
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
                primary ? "text-[#2b303b]" : "text-[#f8f8f7]"
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
