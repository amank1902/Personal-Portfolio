import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import netflixImg from "@/public/sociomedia.png";
import xImg from "@/public/threadnest.png";

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
    title: "SocioMedia",
    description:
      "This project is built with the MERN stack, featuring user authentication, post creation, and an interactive UI. Users can like, comment, and update profiles for a seamless social experience.",
    tags: ["React", "MongoDB", "Express", "NodeJS"],
    imageUrl: netflixImg,
    url: "https://github.com/amank1902/Social-Media"
  },
  {
    title: "ThreadNest",
    description:
    "This project is built with React.js, featuring user authentication, posting, replying, liking posts, and profile management with Cloudinary integration for profile picture updates.",
    tags: ["React", "MongoDB", "Cloudinary", "NodeJS", "React Query"],
    imageUrl: xImg,
    url: "https://github.com/amank1902/ThreadNest"
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
  "Express.js",
  "MySQL",
] as const;
