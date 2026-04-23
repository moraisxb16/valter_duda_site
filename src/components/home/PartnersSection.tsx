"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import {
  easeOutExpo,
  duration,
  staggerContainer,
  staggerItem,
  viewport,
} from "@/lib/motion";

const partners = [
  { name: "Microsoft", hint: "Nuvem & produtividade" },
  { name: "AWS", hint: "Infraestrutura global" },
  { name: "Google", hint: "Dados & IA" },
  { name: "Dell", hint: "Hardware empresarial" },
  { name: "Fortinet", hint: "Cibersegurança" },
] as const;

export function PartnersSection() {
  const reduce = useReducedMotion();

  return (
    <Section
      id="parceiros"
      dataJourney="authority"
      aria-labelledby="parceiros-heading"
      className="relative overflow-hidden border-y border-white/5 bg-slate-950 text-slate-100"
    >
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-40"
        aria-hidden
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(56,189,248,0.25), transparent), radial-gradient(ellipse 60% 40% at 100% 50%, rgba(139,92,246,0.12), transparent)",
        }}
      />
      <Container className="relative z-10">
        <motion.div
          initial={reduce ? false : "hidden"}
          whileInView="visible"
          viewport={viewport}
          variants={staggerContainer}
          className="text-center"
        >
          <motion.h2
            variants={staggerItem}
            id="parceiros-heading"
            className="font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl"
          >
            Ecossistema de parceiros
          </motion.h2>
          <motion.p
            variants={staggerItem}
            className="mx-auto mt-6 max-w-2xl text-lg font-medium leading-relaxed text-slate-400"
          >
            Trabalhamos com as principais plataformas do mercado para entregar
            soluções robustas, seguras e escaláveis.
          </motion.p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {partners.map((p, i) => (
            <motion.div
              key={p.name}
              initial={reduce ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{
                duration: duration.base,
                delay: reduce ? 0 : 0.1 + i * 0.06,
                ease: easeOutExpo,
              }}
              whileHover={
                reduce
                  ? undefined
                  : { y: -6, scale: 1.02, transition: { duration: 0.28 } }
              }
              className="group flex min-h-[140px] flex-col items-center justify-center rounded-3xl border border-white/10 bg-white/[0.05] px-6 py-10 text-center shadow-[0_20px_50px_-28px_rgba(0,0,0,0.6)] backdrop-blur-md transition-[filter,background-color,border-color] duration-500 grayscale hover:grayscale-0 hover:border-emerald-400/25 hover:bg-white/[0.09]"
            >
              <span className="font-display text-2xl font-extrabold tracking-tight text-white transition group-hover:text-emerald-300">
                {p.name}
              </span>
              <span className="mt-3 text-xs font-medium uppercase tracking-wider text-slate-500 transition group-hover:text-slate-300">
                {p.hint}
              </span>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
