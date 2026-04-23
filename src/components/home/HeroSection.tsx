"use client";

import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { Code2, Cloud, Shield, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { WhatsAppGlyph } from "@/components/ui/WhatsAppGlyph";
import { Container } from "@/components/ui/Container";
import { whatsappHref } from "@/lib/constants";
import { easeOutExpo, duration } from "@/lib/motion";

const getLoadContainer = (reduce: boolean | null) => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren: reduce ? 0 : 0.11,
      delayChildren: reduce ? 0 : 0.06,
    },
  },
});

const loadItem = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: duration.slow, ease: easeOutExpo },
  },
};

const titleVariant = {
  hidden: { opacity: 0, y: 26, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: easeOutExpo },
  },
};

const chips = [
  { label: "Web 3.0 Ready", icon: Code2 },
  { label: "Cloud Native", icon: Cloud },
  { label: "Security First", icon: Shield },
] as const;

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, 48]);
  const parallaxOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0.35]);

  return (
    <section
      ref={sectionRef}
      id="inicio"
      data-journey="impact"
      className="relative flex min-h-[min(100svh,900px)] flex-col justify-center overflow-hidden pt-6"
    >
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{
          y: reduce ? 0 : parallaxY,
          opacity: reduce ? 1 : parallaxOpacity,
        }}
      >
        <div
          className="absolute left-1/2 top-[18%] h-[min(520px,55vw)] w-[min(900px,120vw)] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(0,198,255,0.12)_0%,rgba(142,45,226,0.08)_45%,transparent_70%)] blur-3xl"
        />
      </motion.div>

      <Container className="relative z-10 flex w-full flex-1 flex-col justify-center px-5 py-20 text-center sm:px-8 sm:py-24 lg:py-28">
        <motion.div
          className="mx-auto flex max-w-[52rem] flex-col items-center"
          initial={reduce ? false : "hidden"}
          animate="visible"
          variants={getLoadContainer(reduce)}
        >
          <motion.p
            variants={loadItem}
            className="motion-safe:animate-badge-pulse inline-flex items-center gap-2 rounded-full border border-cyan-400/35 bg-slate-950/60 px-4 py-2 text-[10px] font-bold uppercase leading-tight tracking-[0.18em] text-cyan-300 shadow-[0_0_24px_rgba(0,198,255,0.2)] backdrop-blur-md sm:text-[11px]"
          >
            <Sparkles
              className="h-3.5 w-3.5 shrink-0 text-cyan-400 sm:h-4 sm:w-4"
              strokeWidth={2}
              aria-hidden
            />
            Next-generation technology platform
          </motion.p>

          <motion.h1
            variants={reduce ? loadItem : titleVariant}
            className="font-display mt-10 max-w-[48rem] text-balance text-[clamp(2.35rem,4.5vw+1rem,3.85rem)] font-extrabold leading-[1.06] tracking-[-0.035em] text-white sm:mt-12 sm:text-[clamp(2.6rem,4.2vw+1rem,4.5rem)]"
          >
            Automatize, escale e fortaleça sua empresa{" "}
            <span className="text-gradient-cyber text-gradient-cyber-animated">
              com tecnologia e IA
            </span>
          </motion.h1>

          <motion.p
            variants={loadItem}
            className="mt-8 max-w-[40rem] text-pretty text-base font-medium leading-[1.75] text-slate-400 sm:mt-10 sm:text-lg"
          >
            Infraestrutura cloud, desenvolvimento web e inteligência artificial{" "}
            <span className="text-cyan-400">
              para levar sua operação ao próximo nível
            </span>
            .
          </motion.p>

          <motion.div
            variants={loadItem}
            className="mt-10 flex flex-wrap items-center justify-center gap-3 sm:mt-12"
          >
            {chips.map((c) => (
              <motion.div
                key={c.label}
                whileHover={
                  reduce ? undefined : { scale: 1.04, y: -2 }
                }
                whileTap={reduce ? undefined : { scale: 0.98 }}
                transition={{ duration: 0.2, ease: easeOutExpo }}
                className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2.5 text-xs font-semibold text-slate-200 shadow-[0_0_20px_rgba(0,198,255,0.06)] backdrop-blur-md sm:text-sm"
              >
                <c.icon
                  className="h-4 w-4 text-cyan-400/90"
                  strokeWidth={2}
                  aria-hidden
                />
                {c.label}
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={loadItem}
            className="mt-12 flex w-full max-w-xl flex-col items-stretch justify-center gap-4 sm:mt-14 sm:flex-row sm:items-center"
          >
            <Button
              href={whatsappHref()}
              variant="cyber"
              className="w-full justify-center sm:w-auto"
              icon={<WhatsAppGlyph />}
              aria-label="Iniciar projeto no WhatsApp"
              showArrow
            >
              Iniciar projeto
            </Button>
            <motion.a
              href="#solucoes"
              className="inline-flex w-full items-center justify-center rounded-xl border border-white/15 bg-white/[0.04] px-8 py-3.5 text-base font-semibold text-slate-100 shadow-none backdrop-blur-md transition-colors duration-300 hover:border-cyan-400/35 hover:bg-white/[0.08] sm:w-auto sm:py-4"
              whileHover={reduce ? undefined : { scale: 1.02 }}
              whileTap={reduce ? undefined : { scale: 0.98 }}
              transition={{ duration: 0.2, ease: easeOutExpo }}
            >
              Explorar soluções
            </motion.a>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
