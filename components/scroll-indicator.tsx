"use client";

import { motion, useScroll } from "framer-motion";

export default function ScrollIndicator() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-400 via-emerald-500 to-green-600 origin-left z-[1000]"
      style={{ scaleX: scrollYProgress }}
    />
  );
}
