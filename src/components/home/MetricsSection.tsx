"use client";

import { useRef } from "react";
import { Activity, Brain, Users } from "lucide-react";
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
    end: 12,
    suffix: "+",
    label: "ANOS",
    desc: "Experiência em tech",
    icon: Activity,
    gradient: "from-cyan-400 via-sky-400 to-blue-600",
    iconBg: "from-sky-500 to-blue-600",
  },
  {
    end: 80,
    suffix: "+",
    label: "CLIENTES",
    desc: "Projetos entregues",
    icon: Users,
    gradient: "from-violet-400 via-fuchsia-400 to-pink-500",
    iconBg: "from-violet-500 to-fuchsia-600",
  },
  {
    end: 99,
    suffix: "%",
    label: "UPTIME",
    desc: "Disponibilidade alvo",
    icon: Brain,
    gradient: "from-fuchsia-400 via-pink-500 to-rose-500",
    iconBg: "from-fuchsia-500 to-pink-600",
  },
] as const;

export function MetricsSection() {
  const reduce = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [16, -16]);

  return (
    <Section
      ref={sectionRef}
      dataJourney="credibility"
      className="relative overflow-hidden bg-slate-50 py-24 sm:py-32 lg:py-36"
    >
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white via-slate-50 to-white"
        style={{ y: reduce ? 0 : y }}
      />
      <Container className="relative z-10">
        <div className="grid gap-10 md:grid-cols-3 md:gap-8 lg:gap-10">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={reduce ? false : { opacity: 0, y: 22, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={viewport}
              transition={{
                duration: duration.base,
                delay: reduce ? 0 : i * 0.1,
                ease: easeOutExpo,
              }}
              whileHover={
                reduce
                  ? undefined
                  : {
                      y: -8,
                      transition: { duration: 0.35, ease: easeOutExpo },
                    }
              }
              className="group relative flex flex-col rounded-3xl border border-slate-200/90 bg-white p-8 shadow-[0_24px_60px_-28px_rgba(15,23,42,0.12)] sm:p-10"
            >
              <div
                className={`mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${s.iconBg} text-white shadow-[0_12px_40px_-12px_rgba(14,165,233,0.45)] ring-2 ring-white/30`}
              >
                <s.icon className="h-7 w-7" strokeWidth={1.65} aria-hidden />
              </div>
              <p className="font-display flex flex-wrap items-baseline gap-0.5 text-5xl font-extrabold tracking-tight sm:text-6xl">
                <span
                  className={`bg-gradient-to-r ${s.gradient} bg-clip-text text-transparent [filter:drop-shadow(0_0_20px_rgba(0,198,255,0.12))]`}
                >
                  <AnimatedCounter end={s.end} />
                </span>
                <span className="text-slate-900">{s.suffix}</span>
              </p>
              <p className="mt-2 text-xs font-bold uppercase tracking-[0.2em] text-slate-900">
                {s.label}
              </p>
              <p className="mt-3 text-sm font-medium text-slate-500">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
