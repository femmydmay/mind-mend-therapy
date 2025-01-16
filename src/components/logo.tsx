'use client'
import React from "react";
import { motion } from "framer-motion";

interface LogoProps {
  width?: number;
  height?: number;
  circleColor?: string;
  circle2color?: string;
  textColor?: string;
}

export const Logo: React.FC<LogoProps> = ({ width = 200, height = 100, textColor="white" }) => {
  return (
    <motion.svg
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      width={width}
      height={height}
      viewBox="0 0 150 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-labelledby="logoTitle logoDesc"
      role="img"
    >
      <title id="logoTitle">mind-mind logo</title>
      <desc id="logoDesc">
        Two interconnected circles representing minds with the text mind-mind
        below
      </desc>

      <motion.circle
        cx="60"
        cy="40"
        r="20"
        fill="#0A9EE5"
        fillOpacity="0.7"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      />
      <motion.circle
        cx="90"
        cy="40"
        r="20"
        fill="#00D4D4"
        fillOpacity="0.7"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      />

      <motion.text
        x="75"
        y="75"
        fontFamily="Arial, sans-serif"
        fontSize="18"
        fontWeight="bold"
        fill={textColor}
        textAnchor="middle"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        mind-mind
      </motion.text>
    </motion.svg>
  );
};
