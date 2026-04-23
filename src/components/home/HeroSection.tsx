"use client";

import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { WhatsAppGlyph } from "@/components/ui/WhatsAppGlyph";
import { Container } from "@/components/ui/Container";
import { whatsappHref } from "@/lib/constants";
import { easeOutExpo, duration } from "@/lib/motion";

const getLoadContainer = (reduce: boolean | null) => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren: reduce ? 0 : 0.1,
      delayChildren: reduce ? 0 : 0.04,
    },
  },
});

const loadItem = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: duration.slow, ease: easeOutExpo },
  },
};

const titleVariant = {
  hidden: { opacity: 0, y: 22, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.65, ease: easeOutExpo },
  },
};

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const dotsY = useTransform(scrollYProgress, [0, 1], [0, 24]);

  return (
    <section
      ref={sectionRef}
      data-journey="impact"
      className="hero-reference-base relative flex min-h-[min(100svh,880px)] flex-col justify-center overflow-hidden"
    >
      <motion.div
        className="hero-reference-dots pointer-events-none absolute inset-0 z-0 opacity-[0.85]"
        style={{ y: reduce ? 0 : dotsY }}
        aria-hidden
      />

      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-32 bg-gradient-to-t from-white via-white/80 to-transparent"
        aria-hidden
      />

      <Container className="relative z-10 flex w-full flex-1 flex-col justify-center px-5 py-20 text-center sm:px-8 sm:py-24 lg:py-28">
        <motion.div
          className="mx-auto flex max-w-[52rem] flex-col items-center"
          initial={reduce ? false : "hidden"}
          animate="visible"
          variants={getLoadContainer(reduce)}
        >
          <motion.p
            variants={loadItem}
            className="inline-flex items-center gap-2 rounded-full border border-cyan-200/90 bg-white/90 px-4 py-2 text-[10px] font-bold uppercase leading-tight tracking-[0.16em] text-cyan-700 shadow-sm sm:text-[11px]"
          >
            <Sparkles
              className="h-3.5 w-3.5 shrink-0 text-cyan-500 sm:h-4 sm:w-4"
              strokeWidth={2}
              aria-hidden
            />
            A tecnologia que move sua empresa para o próximo nível
          </motion.p>

          <motion.h1
            variants={reduce ? loadItem : titleVariant}
            className="font-display mt-10 max-w-[48rem] text-balance text-[clamp(2.25rem,4.2vw+1rem,3.75rem)] font-extrabold leading-[1.08] tracking-[-0.03em] text-slate-900 sm:mt-12 sm:text-[clamp(2.5rem,4vw+1.1rem,4.25rem)]"
          >
            Automatize, escale e fortaleça sua empresa{" "}
            <span className="bg-gradient-to-r from-cyan-500 via-teal-500 to-teal-600 bg-clip-text text-transparent">
              com tecnologia e IA
            </span>
          </motion.h1>

          <motion.p
            variants={loadItem}
            className="mt-8 max-w-[40rem] text-pretty text-base font-normal leading-[1.75] text-slate-500 sm:mt-10 sm:text-lg"
          >
            Infraestrutura e desenvolvimento web e inteligência artificial para
            levar sua operação ao próximo nível
          </motion.p>

          <motion.div
            variants={loadItem}
            className="mt-12 flex w-full max-w-xl flex-col items-stretch justify-center gap-4 sm:mt-14 sm:flex-row sm:items-center"
          >
            <Button
              href={whatsappHref()}
              variant="cyan"
              className="w-full justify-center sm:w-auto"
              icon={<WhatsAppGlyph />}
              aria-label="Falar no WhatsApp"
              showArrow
            >
              Falar no WhatsApp
            </Button>
            <motion.a
              href="#solucoes"
              className="inline-flex w-full items-center justify-center rounded-[14px] border border-slate-200/95 bg-white px-8 py-3.5 text-base font-semibold text-slate-800 shadow-sm transition-colors duration-300 hover:bg-slate-50 sm:w-auto sm:py-4"
              whileHover={reduce ? undefined : { scale: 1.02 }}
              whileTap={reduce ? undefined : { scale: 0.98 }}
              transition={{ duration: 0.2, ease: easeOutExpo }}
            >
              Ver serviços
            </motion.a>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
