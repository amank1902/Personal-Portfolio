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
        I am a recent{" "}
        <span className="font-medium">B.Tech Computer Science Engineering graduate</span> from{" "}
        <span className="font-medium">IIIT Bhagalpur</span>{" "}
        <span className="font-normal">with a passion for</span>{" "}
        <span className="font-medium">software development</span>.{" "}
        <span className="font-normal">I specialize in full-stack development and continuously enhance my technical expertise across modern web technologies.</span>{" "}
        <span className="italic">What drives me most in programming</span> is the
        analytical problem-solving process. I find great satisfaction in{" "}
        <span className="underline">architecting elegant solutions</span> to
        complex challenges. My core technical stack
        is{" "}
        <span className="font-medium">
          React, ExpressJS, Node.js, and MongoDB
        </span>
        .
      </p>
      
      <p className="mb-3">
        I am currently working as an{" "}
        <span className="font-medium">SDE Intern at Equal (MoneyOne)</span>, where I'm gaining valuable experience in backend development, API integration, and system optimization while contributing to impactful fintech solutions.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        games and watching movies. I also enjoy{" "}
        <span className="font-medium">learning new things</span>.
      </p>
    </motion.section>
  );
}
