"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    mass: 0.15,
  });

  return (
    <motion.div
      className="pointer-events-none fixed left-0 right-0 top-0 z-[100] h-[2px] origin-left bg-gradient-to-r from-sky-500/90 via-emerald-500/90 to-teal-500/90"
      style={{ scaleX }}
      aria-hidden
    />
  );
}
