"use client";

import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();

  const progressScale = useSpring(scrollYProgress, {
    stiffness: shouldReduceMotion ? 1000 : 130,
    damping: shouldReduceMotion ? 1000 : 30,
    mass: 0.2,
  });

  return <motion.div className="wt-scroll-progress" style={{ scaleX: progressScale }} />;
}
