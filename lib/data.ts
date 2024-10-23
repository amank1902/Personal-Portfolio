import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import netflixImg from "@/public/netflix.png";
import xImg from "@/public/x.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Indian Institute of Information Technology Bhagalpur",
    location: "Bachelor of Technology",
    description:
      "I am a final year BTech student pursuing a comprehensive curriculum in Computer Science Engineering with a focus on software development, data structures, algorithms, and system design. ",
    icon: React.createElement(LuGraduationCap),
    date: "2021-2025",
  },
  {
    title: "12th Class",
    location: "Tomar Children School",
    description:
      "I completed my senior secondary education from here and achieved 94%",
    icon: React.createElement(LuGraduationCap),
    date: "2019 - 2020",
  },
] as const;

export const projectsData = [
  {
    title: "Netflix Clone",
    description:
      "This project is built using the MERN stack and Tailwind CSS, features user authentication, movie/series trailers, and a sleek UI for an enhanced viewing experience.",
    tags: ["React", "MongoDB", "Tailwind", "NodeJS"],
    imageUrl: netflixImg,
    url: "https://netflix-2-ckyx.vercel.app/"
  },
  {
    title: "Twitter Clone",
    description:
    "This project is developed using the MERN stack and Tailwind CSS, offers real-time tweets, user authentication, and an intuitive interface, mimicking the core functionality of Twitter.",
    tags: ["React", "MongoDB", "Tailwind", "NodeJS", "React Query"],
    imageUrl: xImg,
    url: "https://social-app-iorx.onrender.com/"
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",,
  "React",
  "Node.js",
  "Git",
  "BootStrap",
  "MongoDB",
  "Redux",
  "Express",
  "PostgreSQL",
] as const;
