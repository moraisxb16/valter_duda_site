"use client";

import { useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

function easeOutCubic(t: number) {
  return 1 - (1 - t) ** 3;
}

type Props = {
  end: number;
  prefix?: string;
  className?: string;
};

/**
 * Conta de 0 até `end` quando entra na viewport (uma vez).
 */
export function AnimatedCounter({ end, prefix = "", className = "" }: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15% 0px" });
  const [value, setValue] = useState(0);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    setReduceMotion(
      window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    );
  }, []);

  useEffect(() => {
    if (!inView) return;
    if (reduceMotion) {
      setValue(end);
      return;
    }

    const durationMs = 1100;
    const start = performance.now();

    const tick = (now: number) => {
      const t = Math.min((now - start) / durationMs, 1);
      setValue(Math.round(end * easeOutCubic(t)));
      if (t < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [inView, end, reduceMotion]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {value}
    </span>
  );
}
