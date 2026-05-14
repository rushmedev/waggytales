"use client";

import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";
import { useEffect } from "react";

export default function ScrollProgress() {
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();

  const progressScale = useSpring(scrollYProgress, {
    stiffness: shouldReduceMotion ? 1000 : 130,
    damping: shouldReduceMotion ? 1000 : 30,
    mass: 0.2,
  });

  useEffect(() => {
    const root = document.documentElement;

    const syncViewportTopOffset = () => {
      const viewportTopOffset = window.visualViewport?.offsetTop ?? 0;
      root.style.setProperty("--wt-viewport-offset-top", `${Math.max(0, viewportTopOffset)}px`);
    };

    syncViewportTopOffset();

    const viewport = window.visualViewport;
    viewport?.addEventListener("resize", syncViewportTopOffset);
    viewport?.addEventListener("scroll", syncViewportTopOffset);
    window.addEventListener("resize", syncViewportTopOffset);

    return () => {
      viewport?.removeEventListener("resize", syncViewportTopOffset);
      viewport?.removeEventListener("scroll", syncViewportTopOffset);
      window.removeEventListener("resize", syncViewportTopOffset);
    };
  }, []);

  return <motion.div className="wt-scroll-progress" style={{ scaleX: progressScale }} />;
}
