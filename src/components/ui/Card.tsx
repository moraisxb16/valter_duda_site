"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { easeOutExpo, duration } from "@/lib/motion";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export function Card({ children, className = "" }: CardProps) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={`rounded-3xl border border-slate-200/70 bg-gradient-to-br from-white via-white to-slate-50/95 p-8 shadow-[0_4px_6px_-1px_rgba(15,23,42,0.06),0_20px_50px_-20px_rgba(14,165,233,0.12)] ring-1 ring-slate-900/[0.04] backdrop-blur-sm lg:p-10 ${className}`}
      whileHover={
        reduce
          ? undefined
          : {
              y: -6,
              scale: 1.03,
              boxShadow:
                "0 28px 56px -16px rgba(15, 23, 42, 0.14), 0 0 56px -12px rgba(16, 185, 129, 0.22), 0 0 0 1px rgba(139, 92, 246, 0.12)",
              borderColor: "rgba(167, 243, 208, 0.75)",
            }
      }
      whileTap={reduce ? undefined : { scale: 0.995 }}
      transition={{ duration: duration.fast, ease: easeOutExpo }}
    >
      {children}
    </motion.div>
  );
}
