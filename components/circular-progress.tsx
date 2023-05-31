import { color } from "framer-motion";
import React, { useEffect, useState } from "react";

const CircularProgress = ({ size, strokeWidth, percentage }) => {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    setProgress(percentage);
  }, [percentage]);
  const viewBox = `0 0 ${size} ${size}`;
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * Math.PI * 2;
  const dash = (progress * circumference) / 100;
  return (
    <div className="absolute">
      <svg width={size} height={size} viewBox={viewBox}>
        <circle
          fill="none"
          stroke="#ffffff25"
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={`${strokeWidth}px`}
        />
        <circle
          fill="none"
          stroke={
            (percentage <= 50 && "#E4B363") || (percentage <= 100 && "#6B7F5C")
          }
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={`${strokeWidth}px`}
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
          strokeDasharray={[dash, circumference - dash]}
          strokeLinecap="round"
          style={{ transition: "all 2s" }}
        />
      </svg>
    </div>
  );
};

export default CircularProgress;
