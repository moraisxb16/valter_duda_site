"use client";

import {
  motion,
  useInView,
  useReducedMotion,
  type HTMLMotionProps,
  type Variants,
} from "framer-motion";
import { useRef, type ReactNode } from "react";
import { fadeUp, viewport as defaultViewport } from "@/lib/motion";

type InViewBlockProps = {
  children: ReactNode;
  className?: string;
  variants?: Variants;
  /** Opções do Intersection Observer (via useInView do Framer Motion) */
  viewport?: typeof defaultViewport;
} & Omit<HTMLMotionProps<"div">, "children" | "variants">;

/**
 * Bloco que anima quando entra na viewport usando `useInView` (Intersection Observer).
 * Útil quando `whileInView` no pai não é suficiente ou para lógica customizada.
 */
export function InViewBlock({
  children,
  className,
  variants = fadeUp,
  viewport = defaultViewport,
  ...rest
}: InViewBlockProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, {
    once: viewport.once ?? true,
    margin: typeof viewport.margin === "string" ? viewport.margin : undefined,
    amount: viewport.amount ?? 0.2,
  });
  const reduce = useReducedMotion();

  return (
    <motion.div
      ref={ref}
      {...rest}
      className={className}
      variants={variants}
      initial="hidden"
      animate={reduce || inView ? "visible" : "hidden"}
    >
      {children}
    </motion.div>
  );
}
