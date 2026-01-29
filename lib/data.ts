import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import sociomediaImg from "@/public/sociomedia.png";
import threadnestImg from "@/public/threadnest.png";

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
    name: "Education",
    hash: "#education",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const educationData = [
  {
    title: "Indian Institute of Information Technology Bhagalpur",
    location: "Bachelor of Technology in Computer Science Engineering",
    description:
      "I have completed my B.Tech degree in Computer Science Engineering with a comprehensive curriculum focused on software development, data structures, algorithms, and system design. ",
    icon: React.createElement(LuGraduationCap),
    date: "2021-2025",
  },
  {
    title: "Senior Secondary Education (Class XII)",
    location: "Tomar Children School",
    description:
      "Completed my senior secondary education with a focus on Science stream, achieving 94% marks and building a strong foundation in Mathematics, Physics, and Chemistry.",
    icon: React.createElement(LuGraduationCap),
    date: "2020",
  },
] as const;

export const experiencesData = [
  {
    title: "Equal (MoneyOne) – SDE Intern",
    location: "Hyderabad",
    description:
      "At Equal, architected a robust PDF analytics workflow integrating the Equal API, enabling secure PDF uploads, S3 storage, real-time status tracking, and user-facing reporting. I improved reliability by synchronizing database status fields with external analytics provider responses.\n\nAdditionally, developed an automated MIS metrics aggregation system that collects, backfills, and stores business metrics using dynamic SQL queries, enabling real-time and historical dashboard reporting.\n\n Also designed and implemented a storage optimization solution by migrating XML payloads from RDS to Amazon S3 with a structured prefix strategy and built an efficient retrieval system leveraging RDS metadata, achieving approximately $5,000 per month in AWS cost savings.",
    icon: React.createElement(CgWorkAlt),
    date: "July 2025 - Present",
  },
  {
    title: "Testline – Software Engineer Intern",
    location: "Remote",
    description:
      "At Testline, engineered a scalable and high-performance testing interface for allmocktest.com, ensuring smooth question transitions, optimized state management, and an intuitive UI using React.js.\n\n On the backend, developed logic in Ruby on Rails to parse syllabus content, dynamically generate exams and sections, and serve structured data to the frontend, reducing manual configuration.\n\n Enhanced the Flutter application by implementing LaTeX rendering, developing complete streak functionality with dedicated pages, and improving the onboarding flow, which significantly boosted user engagement and overall UX.",
    icon: React.createElement(CgWorkAlt),
    date: "Feb 2025 - June 2025",
  },
] as const;

export const projectsData = [
  {
    title: "SocioMedia",
    description:
      "This project is built with the MERN stack, featuring user authentication, post creation, and an interactive UI. Users can like, comment, and update profiles for a seamless social experience.",
    tags: ["React", "MongoDB", "Express", "NodeJS"],
    imageUrl: sociomediaImg,
    url: "https://github.com/amank1902/Social-Media"
  },
  {
    title: "ThreadNest",
    description:
    "This project is built with React.js, featuring user authentication, posting, replying, liking posts, and profile management with Cloudinary integration for profile picture updates.",
    tags: ["React", "MongoDB", "NodeJS", "Cloudinary", "React Query"],
    imageUrl: threadnestImg,
    url: "https://github.com/amank1902/ThreadNest"
  },
] as const;

export const skillsData = [
  "JavaScript",
  "C",
  "C++",
  "HTML",
  "CSS",
  "React.js",
  "Node.js",
  "Express.js",
  "Ruby on Rails",
  "Flutter",
  "MongoDB",
  "MySQL",
  "Git",
  "GitHub",
  "Bootstrap",
  "TailwindCSS",
  "AWS S3",
] as const;
