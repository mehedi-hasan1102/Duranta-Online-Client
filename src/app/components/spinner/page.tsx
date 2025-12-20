"use client";

import React from "react";

interface SpinnerProps {
  size?: number;
  className?: string; // Optional extra class for styling
}

const Spinner: React.FC<SpinnerProps> = ({ size = 40, className = "" }) => {
  return (
    <div
      className={`flex justify-center items-center ${className}`}
      style={{ width: size, height: size }}
    >
      <div
        className="border-4 border-t-cyan-400 border-b-gray-700 border-l-gray-700 border-r-gray-700 rounded-full animate-spin"
        style={{ width: size, height: size }}
      ></div>
    </div>
  );
};

export default Spinner;
