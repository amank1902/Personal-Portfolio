"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import SectionHeading from "./section-heading";

// Tech skills data with icons from CDN
const techSkills = [
  {
    key: "J",
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    color: "#f0db4f",
    description: "Core language for web development",
  },
  {
    key: "R",
    name: "React.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    color: "#61dafb",
    description: "UI library for building interfaces",
  },
  {
    key: "N",
    name: "Node.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    color: "#6cc24a",
    description: "JavaScript runtime for backend",
  },
  {
    key: "H",
    name: "HTML",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    color: "#e34c26",
    description: "Markup language for web pages",
  },
  {
    key: "C",
    name: "CSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    color: "#563d7c",
    description: "Styling language for web design",
  },
  {
    key: "M",
    name: "MongoDB",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    color: "#47a248",
    description: "NoSQL database solution",
  },
  {
    key: "G",
    name: "Git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    color: "#f1502f",
    description: "Version control system",
  },
  {
    key: "T",
    name: "TailwindCSS",
    icon: "https://cdn.simpleicons.org/tailwindcss/38bdf8",
    color: "#38bdf8",
    description: "Utility-first CSS framework",
  },
  {
    key: "E",
    name: "Express.js",
    icon: "https://cdn.simpleicons.org/express/000000",
    color: "#000000",
    description: "Web framework for Node.js",
  },
  {
    key: "S",
    name: "MySQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    color: "#4479a1",
    description: "Relational database system",
  },
  {
    key: "A",
    name: "AWS S3",
    icon: "https://upload.wikimedia.org/wikipedia/commons/b/bc/Amazon-S3-Logo.svg",
    color: "#ff9900",
    description: "Cloud storage service",
  },
  {
    key: "D",
    name: "Docker",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    color: "#2496ed",
    description: "Container platform",
  },
  {
    key: "P",
    name: "C++",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
    color: "#00599c",
    description: "High-performance programming language",
  },
  {
    key: "U",
    name: "Ruby on Rails",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rails/rails-plain.svg",
    color: "#cc0000",
    description: "Web application framework",
  },
  {
    key: "F",
    name: "Flutter",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
    color: "#02569b",
    description: "Cross-platform mobile framework",
  },
  {
    key: "B",
    name: "Bootstrap",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
    color: "#7952b3",
    description: "CSS framework for responsive design",
  },
  {
    key: "I",
    name: "GitHub",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    color: "#181717",
    description: "Code hosting & collaboration",
  },
  {
    key: "K",
    name: "C Language",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
    color: "#a8b9cc",
    description: "System programming language",
  },
];

export default function TechKeyboard() {
  const { ref } = useSectionInView("Skills", 0.5);
  const [hoveredKey, setHoveredKey] = useState<string | null>(null);
  const [pressedKey, setPressedKey] = useState<string | null>(null);

  // Handle keyboard press
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const key = e.key.toUpperCase();
      const skill = techSkills.find((s) => s.key === key);
      if (skill) {
        setPressedKey(key);
      }
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      const key = e.key.toUpperCase();
      const skill = techSkills.find((s) => s.key === key);
      if (skill) {
        setPressedKey(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  const hoveredSkill = techSkills.find((s) => s.key === hoveredKey);
  const pressedSkill = techSkills.find((s) => s.key === pressedKey);
  const displayedSkill = pressedSkill || hoveredSkill;

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-[60rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>My Tech Stack</SectionHeading>
      
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.175 }}
        className="mb-8"
      >
        <p className="text-gray-600 dark:text-gray-400 mb-2">
          Hover over a key or press it on your keyboard
        </p>
      </motion.div>

      {/* Display area for hovered/pressed key */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
        className="mb-12 h-32 flex items-center justify-center"
      >
        {displayedSkill ? (
          <motion.div
            key={displayedSkill.key}
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            exit={{ scale: 0, rotate: 180 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-white dark:bg-white/10 shadow-lg"
          >
            <img
              src={displayedSkill.icon}
              alt={displayedSkill.name}
              className="w-16 h-16"
              style={{
                filter: displayedSkill.icon.includes("simpleicons") || displayedSkill.icon.includes("wikipedia")
                  ? "none"
                  : displayedSkill.color === "#000000" || displayedSkill.color === "#181717"
                  ? "brightness(0) invert(1)"
                  : "brightness(1)",
              }}
            />
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                {displayedSkill.name}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {displayedSkill.description}
              </p>
            </div>
          </motion.div>
        ) : (
          <div className="text-gray-400 dark:text-gray-600">
            Press a key to see details
          </div>
        )}
      </motion.div>

      {/* Keyboard Grid */}
      <div className="grid grid-cols-4 sm:grid-cols-6 gap-3 max-w-3xl mx-auto">
        {techSkills.map((skill, index) => (
          <motion.button
            key={skill.key}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.05 * index,
              type: "spring",
              stiffness: 260,
              damping: 20,
            }}
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.95 }}
            onMouseEnter={() => setHoveredKey(skill.key)}
            onMouseLeave={() => setHoveredKey(null)}
            className={`
              relative aspect-square p-4 rounded-xl
              bg-white dark:bg-white/10
              border-2 transition-all duration-200
              shadow-lg hover:shadow-xl
              group
              ${
                pressedKey === skill.key
                  ? "border-blue-500 scale-95 dark:border-blue-400"
                  : hoveredKey === skill.key
                  ? "border-gray-400 dark:border-gray-500"
                  : "border-gray-200 dark:border-white/20"
              }
            `}
            style={{
              boxShadow:
                pressedKey === skill.key || hoveredKey === skill.key
                  ? `0 0 20px ${skill.color}40`
                  : undefined,
            }}
          >
            {/* Key letter in corner */}
            <div className="absolute top-1 left-2 text-xs font-mono text-gray-400 dark:text-gray-500">
              {skill.key}
            </div>

            {/* Tech icon */}
            <div className="flex items-center justify-center h-full">
              <img
                src={skill.icon}
                alt={skill.name}
                className="w-10 h-10 sm:w-12 sm:h-12 transition-transform group-hover:scale-110"
                style={{
                  filter: skill.icon.includes("simpleicons") || skill.icon.includes("wikipedia")
                    ? "none"
                    : skill.color === "#000000" || skill.color === "#181717"
                    ? "brightness(0) invert(1)"
                    : "brightness(1)",
                }}
              />
            </div>

            {/* Tooltip on hover */}
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
              <div className="bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 text-xs px-2 py-1 rounded whitespace-nowrap">
                {skill.name}
              </div>
            </div>
          </motion.button>
        ))}
      </div>
    </section>
  );
}
