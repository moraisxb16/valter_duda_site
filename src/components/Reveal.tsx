"use client";

import { motion, useInView, useReducedMotion, type Variants } from "framer-motion";
import { useRef, type ReactNode } from "react";
import { duration, easeOutExpo, viewport as defaultViewport } from "@/lib/motion";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Atraso em ms (compatível com versão anterior) */
  delayMs?: number;
  /** Entrada com leve blur → nítido */
  blur?: boolean;
};

/**
 * Scroll reveal com **useInView** (Intersection Observer via Framer Motion).
 */
export function Reveal({
  children,
  className = "",
  delayMs = 0,
  blur = false,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, {
    once: defaultViewport.once,
    margin:
      typeof defaultViewport.margin === "string"
        ? defaultViewport.margin
        : undefined,
    amount: defaultViewport.amount,
  });
  const reduce = useReducedMotion();

  const transition = {
    duration: reduce ? 0.01 : duration.base,
    ease: easeOutExpo,
    delay: reduce ? 0 : delayMs / 1000,
  };

  const variants: Variants = blur
    ? {
        hidden: { opacity: 0, y: 16, filter: "blur(6px)" },
        visible: {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          transition,
        },
      }
    : {
        hidden: { opacity: 0, y: 16 },
        visible: { opacity: 1, y: 0, transition },
      };

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={variants}
      initial="hidden"
      animate={reduce || inView ? "visible" : "hidden"}
    >
      {children}
    </motion.div>
  );
}
