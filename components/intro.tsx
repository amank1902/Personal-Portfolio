"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import dynamic from "next/dynamic";

const ThreeBackground = dynamic(() => import("./three-background"), {
  ssr: false,
});

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="mb-20 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem] relative"
    >
      <ThreeBackground />
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
            }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="relative">
              <Image
                src="https://res.cloudinary.com/darh8nmmg/image/upload/v1729661598/photo_zoidhq.png?fit=crop&w=368&h=368&q=100"
                alt="Aman Kumar"
                width="192"
                height="192"
                quality="95"
                priority={true}
                className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl dark:border-gray-800"
              />
              <motion.div 
                className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-400/20 to-purple-400/20 dark:from-blue-500/30 dark:to-purple-500/30"
                animate={{ 
                  opacity: [0.5, 0.8, 0.5],
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </div>
          </motion.div>

          <motion.span
            className="absolute bottom-0 right-0 text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
            whileHover={{ scale: 1.2, rotate: 20 }}
          >
            👋
          </motion.span>
        </div>
      </div>

      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: "spring",
          stiffness: 80,
          damping: 15,
          delay: 0.15,
        }}
      >
        <span className="font-bold">Hello, I'm Aman Kumar.</span>
        <br />
        A <span className="font-bold">Software Development Engineer</span> specializing in
        <br />
        <span className="italic font-semibold text-gray-700 dark:text-gray-300">full-stack development</span>.
      </motion.h1>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-3 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link
            href="#contact"
            className="group bg-gradient-to-r from-gray-900 to-gray-800 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none hover:shadow-lg active:scale-105 transition-all dark:from-white dark:to-gray-100 dark:text-gray-900"
            onClick={() => {
              setActiveSection("Contact");
              setTimeOfLastClick(Date.now());
            }}
          >
            Contact me here{" "}
            <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
          </Link>
        </motion.div>

        <motion.a
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none hover:shadow-lg active:scale-105 transition-all cursor-pointer borderBlack dark:bg-white/10 backdrop-blur-sm"
          href="/Resume.pdf"
          download
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.25, type: "spring", stiffness: 100 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Download Resume{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </motion.a>

        <div className="flex gap-2">
          <motion.a
            className="bg-white p-4 text-gray-700 hover:text-blue-600 flex items-center gap-2 rounded-full hover:shadow-lg active:scale-105 transition-all cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60 dark:hover:text-blue-400"
            href="http://www.linkedin.com/in/aman-kumar-2671aa258"
            target="_blank"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 100 }}
            whileHover={{ scale: 1.15, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
          >
            <BsLinkedin />
          </motion.a>

          <motion.a
            className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full hover:text-gray-950 hover:shadow-lg active:scale-105 transition-all cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60 dark:hover:text-white"
            href="https://github.com/amank1902"
            target="_blank"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, type: "spring", stiffness: 100 }}
            whileHover={{ scale: 1.15, rotate: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaGithubSquare />
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}
