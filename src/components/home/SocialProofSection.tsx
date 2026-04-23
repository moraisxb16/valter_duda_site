"use client";

import { useRef } from "react";
import { Globe2, Users, Award } from "lucide-react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { easeOutExpo, duration, viewport } from "@/lib/motion";

const stats = [
  {
    kind: "count" as const,
    end: 12,
    suffix: "anos",
    label: "de experiência em tecnologia",
    icon: Award,
  },
  {
    kind: "count" as const,
    end: 80,
    suffix: "clientes",
    label: "atendidos com excelência",
    icon: Users,
  },
  {
    kind: "text" as const,
    line1: "América",
    line2: "do Sul",
    label: "atuação regional consolidada",
    icon: Globe2,
  },
] as const;

export function SocialProofSection() {
  const reduce = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const yParallax = useTransform(scrollYProgress, [0, 1], [20, -20]);

  return (
    <Section
      ref={sectionRef}
      dataJourney="credibility"
      className="relative overflow-hidden border-y border-slate-200/80 bg-gradient-to-r from-slate-50 via-white to-emerald-50/50"
    >
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-0 bg-gradient-to-br from-sky-100/40 via-transparent to-emerald-100/35"
        style={{ y: reduce ? 0 : yParallax }}
      />
      <Container className="relative z-10">
        <div className="grid gap-8 md:grid-cols-3">
          {stats.map((s, i) => (
            <motion.div
              key={`${s.kind}-${s.label}`}
              initial={reduce ? false : { opacity: 0, y: 18, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={viewport}
              transition={{
                duration: duration.base,
                delay: reduce ? 0 : i * 0.08,
                ease: easeOutExpo,
              }}
              whileHover={
                reduce
                  ? undefined
                  : { y: -6, transition: { duration: 0.32, ease: easeOutExpo } }
              }
              className="flex gap-5 rounded-3xl border border-slate-200/70 bg-white/90 p-8 shadow-[0_20px_50px_-24px_rgba(15,23,42,0.1),0_0_0_1px_rgba(255,255,255,0.8)_inset] backdrop-blur-lg md:p-9"
            >
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-600 via-teal-500 to-emerald-500 text-white shadow-lg ring-2 ring-white/40">
                <s.icon className="h-7 w-7" strokeWidth={1.75} aria-hidden />
              </div>
              <div>
                {s.kind === "count" ? (
                  <p className="font-display text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
                    <AnimatedCounter end={s.end} prefix="+" />{" "}
                    <span className="text-lg font-bold text-emerald-600 sm:text-xl">
                      {s.suffix}
                    </span>
                  </p>
                ) : (
                  <p className="font-display text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
                    {s.line1}{" "}
                    <span className="text-lg font-bold text-emerald-600 sm:text-xl">
                      {s.line2}
                    </span>
                  </p>
                )}
                <p className="mt-2 text-sm font-medium leading-relaxed text-slate-600">
                  {s.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
