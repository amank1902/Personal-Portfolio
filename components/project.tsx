"use client";

import { useRef } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { FiExternalLink, FiCheckCircle } from "react-icons/fi";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  url,
  features
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className="group mb-3 sm:mb-8 last:mb-0"
    >
      <a href={url} target='_blank' rel="noopener noreferrer">
        <section className="bg-gradient-to-br from-gray-50 to-gray-100 max-w-[42rem] border border-black/5 rounded-xl overflow-hidden sm:pr-8 relative sm:min-h-[22rem] hover:shadow-xl transition-all duration-300 sm:group-even:pl-8 dark:from-white/5 dark:to-white/10 dark:border-white/10 dark:hover:from-white/10 dark:hover:to-white/15">
          <div className="pt-5 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                {title}
              </h3>
              <FiExternalLink className="opacity-0 group-hover:opacity-100 transition-opacity text-gray-600 dark:text-gray-400" />
            </div>
            
            <p className="mt-1 text-sm leading-relaxed text-gray-600 dark:text-white/60">
              {description}
            </p>
            
            {features && features.length > 0 && (
              <ul className="mt-3 space-y-1.5">
                {features.slice(0, 3).map((feature, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-2 text-xs text-gray-600 dark:text-white/50"
                  >
                    <FiCheckCircle className="mt-0.5 text-green-600 dark:text-green-400 flex-shrink-0" size={14} />
                    <span>{feature}</span>
                  </motion.li>
                ))}
              </ul>
            )}
            
            <ul className="flex flex-wrap mt-auto pt-4 gap-2">
              {tags.map((tag, index) => (
                <motion.li
                  whileHover={{ scale: 1.05 }}
                  className="bg-gradient-to-r from-gray-800 to-gray-900 px-3 py-1.5 text-[0.65rem] font-medium uppercase tracking-wider text-white rounded-lg shadow-sm dark:from-white/10 dark:to-white/5 dark:text-white/80"
                  key={index}
                >
                  {tag}
                </motion.li>
              ))}
            </ul>
          </div>

          <Image
            src={imageUrl}
            alt="Project I worked on"
            quality={95}
            className="absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl
          transition 
          group-hover:scale-[1.04]
          group-hover:-translate-x-3
          group-hover:translate-y-3
          group-hover:-rotate-2

          group-even:group-hover:translate-x-3
          group-even:group-hover:translate-y-3
          group-even:group-hover:rotate-2

          group-even:right-[initial] group-even:-left-40"
          />
        </section>
      </a>
    </motion.div>
  );
}
