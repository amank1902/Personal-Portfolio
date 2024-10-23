"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I am currently a final year student pursuing{" "}
        <span className="font-medium">BTech </span> from{" "}
        <span className="font-medium">IIIT Bhagalpur</span>{" "}
        <span className="font-normal">and</span>{" "}
        <span className="font-medium">I love programming</span>.{" "}
        <span className="font-normal">I am working on improving my skills as a full stack developer.</span>{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          React, ExpressJS, Node.js, and MongoDB
        </span>
        . Currently, I'm working towards completing my degree and am eager to find a{" "}
        <span className="font-medium">full-time </span> software development position where I can further develop my skills and contribute to impactful projects.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games and watching movies. I also enjoy{" "}
        <span className="font-medium">learning new things</span>.
      </p>
    </motion.section>
  );
}
