"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState, type PropsWithChildren } from "react";

type RevealSectionProps = PropsWithChildren<{
  className?: string;
  id?: string;
  delay?: number;
}>;

export default function RevealSection({
  children,
  className,
  id,
  delay = 0,
}: RevealSectionProps) {
  const shouldReduceMotion = useReducedMotion();
  const [skipInViewAnimation, setSkipInViewAnimation] = useState(() => {
    if (typeof window === "undefined") {
      return false;
    }

    const navEntry = window.performance.getEntriesByType("navigation")[0] as
      | PerformanceNavigationTiming
      | undefined;

    return navEntry?.type === "back_forward";
  });

  useEffect(() => {
    function handlePageShow(event: PageTransitionEvent) {
      if (event.persisted) {
        setSkipInViewAnimation(true);
      }
    }

    window.addEventListener("pageshow", handlePageShow);
    return () => {
      window.removeEventListener("pageshow", handlePageShow);
    };
  }, []);

  const disableReveal = shouldReduceMotion || skipInViewAnimation;

  return (
    <motion.section
      id={id}
      className={className}
      initial={disableReveal ? false : { opacity: 0, y: 18 }}
      whileInView={disableReveal ? {} : { opacity: 1, y: 0 }}
      animate={disableReveal ? { opacity: 1, y: 0 } : undefined}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
    >
      {children}
    </motion.section>
  );
}
