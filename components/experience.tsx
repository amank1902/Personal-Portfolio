"use client";

import React from "react";
import SectionHeading from "./section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/theme-context";
import { motion } from "framer-motion";

export default function Experience() {
  const { ref } = useSectionInView("Experience", 0.5);
  const { theme } = useTheme();

  return (
    <section id="experience" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>My Experience</SectionHeading>
      <VerticalTimeline lineColor="">
        {experiencesData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              contentStyle={{
                background:
                  theme === "light" 
                    ? "linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)" 
                    : "linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.03) 100%)",
                boxShadow: theme === "light" 
                  ? "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)" 
                  : "0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -1px rgba(0, 0, 0, 0.2)",
                border: theme === "light" 
                  ? "1px solid rgba(148, 163, 184, 0.2)" 
                  : "1px solid rgba(255, 255, 255, 0.1)",
                textAlign: "left",
                padding: "1.5rem 2rem",
                borderRadius: "1rem",
              }}
              contentArrowStyle={{
                borderRight:
                  theme === "light"
                    ? "0.4rem solid #cbd5e1"
                    : "0.4rem solid rgba(255, 255, 255, 0.2)",
              }}
              date={item.date}
              icon={item.icon}
              iconStyle={{
                background:
                  theme === "light" 
                    ? "linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)" 
                    : "linear-gradient(135deg, rgba(59, 130, 246, 0.8) 0%, rgba(29, 78, 216, 0.6) 100%)",
                color: "#fff",
                fontSize: "1.5rem",
                boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.2)",
              }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-xl font-bold !mt-0 bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-400 dark:to-blue-600 bg-clip-text text-transparent">
                  {item.title}
                </h3>
                <p className="!mt-1 !mb-3 text-sm font-medium text-gray-600 dark:text-gray-400 flex items-center gap-1">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                  {item.location}
                </p>
                <div className="!mt-3 !font-normal text-sm leading-relaxed text-gray-700 dark:text-white/70">
                  {item.description.split('\n\n').map((paragraph, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1, duration: 0.4 }}
                      className={`${idx > 0 ? "mt-3" : ""} group/para relative pl-4 border-l-2 border-blue-200 dark:border-blue-900 hover:border-blue-500 dark:hover:border-blue-500 transition-colors duration-300`}
                    >
                      <motion.div
                        className="absolute left-0 top-0 w-0.5 h-full bg-gradient-to-b from-blue-500 to-blue-600 origin-top"
                        initial={{ scaleY: 0 }}
                        whileInView={{ scaleY: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 + 0.2, duration: 0.6 }}
                      />
                      <span className="group-hover/para:text-gray-900 dark:group-hover/para:text-white transition-colors duration-300">
                        {paragraph}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}
