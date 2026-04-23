import type { Transition, Variants } from "framer-motion";

/** Curva próxima de ease-out “premium” (Apple / Linear) */
export const easeOutExpo: [number, number, number, number] = [0.16, 1, 0.3, 1];

export const duration = {
  fast: 0.32,
  base: 0.45,
  slow: 0.6,
} as const;

export function transition(
  reduce: boolean | null,
  t: Partial<Transition> = {},
): Transition {
  if (reduce) return { duration: 0.01 };
  return {
    duration: duration.base,
    ease: easeOutExpo,
    ...t,
  };
}

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: duration.base, ease: easeOutExpo },
  },
};

export const fadeUpBlur: Variants = {
  hidden: { opacity: 0, y: 14, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: duration.slow, ease: easeOutExpo },
  },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.08,
    },
  },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: duration.base, ease: easeOutExpo },
  },
};

export const staggerTight: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.045, delayChildren: 0.06 },
  },
};

export const viewport = {
  once: true,
  margin: "-12% 0px -8% 0px",
  amount: 0.2,
} as const;

/** Jornada de scroll (data-journey nas seções da home) */
export const journey = {
  impact: "impact",
  structure: "structure",
  credibility: "credibility",
  depth: "depth",
  authority: "authority",
  trust: "trust",
  conversion: "conversion",
} as const;
