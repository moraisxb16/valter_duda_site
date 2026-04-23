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
      className="pointer-events-none fixed left-0 right-0 top-0 z-[100] h-[2px] origin-left bg-gradient-to-r from-cyan-400 via-blue-500 to-fuchsia-600 shadow-[0_0_12px_rgba(0,198,255,0.45)]"
      style={{ scaleX }}
      aria-hidden
    />
  );
}
