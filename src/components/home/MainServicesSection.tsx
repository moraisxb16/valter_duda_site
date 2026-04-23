"use client";

import { Bot, Globe, Server } from "lucide-react";
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

const pillars = [
  {
    title: "Infraestrutura & TI",
    subtitle: "Arquitetura cloud-native escalável",
    icon: Server,
    accent: "from-sky-500 to-cyan-500",
  },
  {
    title: "Sites & Digital",
    subtitle: "Plataformas web de alta performance",
    icon: Globe,
    accent: "from-indigo-500 to-violet-500",
  },
  {
    title: "IA & Automação",
    subtitle: "Machine learning e inteligência artificial",
    icon: Bot,
    accent: "from-fuchsia-500 to-pink-500",
  },
] as const;

const pillarItems = [
  [
    "AWS / Azure Cloud",
    "Kubernetes & Docker",
    "Banco de dados",
    "Segurança",
    "CI/CD Pipeline",
    "Backup & DR",
  ],
  [
    "React / Next.js",
    "E-commerce",
    "Performance",
    "SEO técnico",
    "Integrações API",
    "CDN & cache",
  ],
  [
    "LLMs & GPT",
    "AI Agents",
    "Chatbots IA",
    "Automação 24h",
    "Data pipeline",
    "Governança de dados",
  ],
] as const;

const line = {
  hidden: { opacity: 0, y: 14, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: duration.base, ease: easeOutExpo },
  },
};

/** Card “pilares”: default sóbrio; hover com frame, glow e overlay (CSS + group). */
function PillarCard({
  pillar,
  items,
  isIa,
}: {
  pillar: (typeof pillars)[number];
  items: readonly string[];
  isIa: boolean;
}) {
  return (
    <div className="group relative h-full">
      <div
        className={[
          "pillar-card relative isolate flex h-full flex-col overflow-hidden rounded-2xl",
          "border border-white/[0.08]",
          "bg-white/[0.04] backdrop-blur-[10px]",
          "p-6 sm:p-7",
          "shadow-none",
          "transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]",
          "motion-reduce:transition-colors motion-reduce:duration-200",
          /* Cantos “frame” — opacidade animada no hover */
          "before:pointer-events-none before:absolute before:left-3 before:top-3 before:z-[5] before:h-5 before:w-5 before:border-l-2 before:border-t-2 before:opacity-0 before:transition-opacity before:duration-300 before:ease-[cubic-bezier(0.4,0,0.2,1)]",
          "after:pointer-events-none after:absolute after:bottom-3 after:right-3 after:z-[5] after:h-5 after:w-5 after:border-r-2 after:border-b-2 after:opacity-0 after:transition-opacity after:duration-300 after:ease-[cubic-bezier(0.4,0,0.2,1)]",
          isIa
            ? "before:border-fuchsia-400/85 after:border-cyan-400/85"
            : "before:border-[#00eaff]/80 after:border-[#00eaff]/80",
          /* Hover: elevação + glow + borda ativa */
          "group-hover:-translate-y-1.5 group-hover:scale-[1.02]",
          "motion-reduce:group-hover:translate-y-0 motion-reduce:group-hover:scale-100",
          "group-hover:before:opacity-100 group-hover:after:opacity-100",
          isIa
            ? "group-hover:border-fuchsia-400/25 group-hover:shadow-[0_0_0_1px_rgba(140,0,255,0.22),0_0_40px_rgba(140,0,255,0.18),0_0_72px_rgba(0,200,255,0.12)]"
            : "group-hover:border-cyan-400/20 group-hover:shadow-[0_0_0_1px_rgba(0,200,255,0.2),0_0_30px_rgba(0,200,255,0.15),0_0_60px_rgba(0,200,255,0.1)]",
        ].join(" ")}
      >
        {/* Overlay de fundo no hover */}
        <div
          className={[
            "pointer-events-none absolute inset-0 z-0 rounded-2xl opacity-0 transition-opacity duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:opacity-100",
            isIa
              ? "bg-[linear-gradient(135deg,rgba(140,0,255,0.26),rgba(0,200,255,0.16))]"
              : "bg-[radial-gradient(circle_at_0%_0%,rgba(0,200,255,0.08),transparent_60%)]",
          ].join(" ")}
          aria-hidden
        />

        <div className="relative z-10 flex flex-1 flex-col">
          <div
            className={[
              "relative inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br text-white",
              "shadow-md ring-1 ring-white/10",
              "transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]",
              "motion-reduce:transition-shadow",
              "group-hover:scale-110",
              pillar.accent,
              isIa
                ? "group-hover:shadow-[0_0_26px_rgba(192,52,255,0.35),0_0_18px_rgba(0,200,255,0.22)]"
                : "group-hover:shadow-[0_0_22px_rgba(0,200,255,0.32)]",
            ].join(" ")}
          >
            <pillar.icon className="h-6 w-6" strokeWidth={2} aria-hidden />
          </div>

          <h3 className="font-display mt-5 text-lg font-bold tracking-tight text-white transition-colors duration-300 group-hover:text-slate-50 sm:text-xl">
            {pillar.title}
          </h3>
          <p className="mt-2 text-sm font-medium text-slate-400 transition-colors duration-300 group-hover:text-slate-300">
            {pillar.subtitle}
          </p>

          <ul className="mt-6 space-y-2.5 text-left text-sm font-medium text-slate-300">
            {items.map((item) => (
              <li key={item} className="flex gap-2.5">
                <span
                  className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400/70 transition-all duration-300 group-hover:bg-cyan-300/90 group-hover:shadow-[0_0_8px_rgba(34,211,238,0.35)]"
                  aria-hidden
                />
                <span className="transition-colors duration-300 group-hover:text-slate-200">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export function MainServicesSection() {
  const reduce = useReducedMotion();

  return (
    <Section
      id="solucoes"
      aria-labelledby="solucoes-heading"
      dataJourney="structure"
      className="relative z-20 border-t border-white/[0.06] !py-24 sm:!py-32 lg:!py-36"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(0,198,255,0.06),transparent_55%)]"
        aria-hidden
      />
      <Container className="relative z-10">
        <motion.div
          initial={reduce ? false : "hidden"}
          whileInView="visible"
          viewport={viewport}
          variants={staggerContainer}
          className="mx-auto max-w-3xl text-center"
        >
          <motion.p
            variants={staggerItem}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-300/90 backdrop-blur-md"
          >
            System architecture
          </motion.p>
          <motion.h2
            variants={staggerItem}
            id="solucoes-heading"
            className="font-display mt-6 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]"
          >
            <span className="text-gradient-cyber text-gradient-cyber-animated">
              Três frentes,
            </span>{" "}
            <span className="text-white">um time ao seu lado</span>
          </motion.h2>
          <motion.p
            variants={line}
            className="mt-6 text-base font-medium leading-relaxed text-slate-400 sm:text-lg"
          >
            Stack tecnológico completo para empresas que precisam{" "}
            <span className="text-cyan-400">
              escalar com performance e segurança
            </span>
            .
          </motion.p>
        </motion.div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3 lg:gap-8">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={
                reduce ? false : { opacity: 0, y: 28, filter: "blur(8px)" }
              }
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={viewport}
              transition={{
                duration: duration.base,
                delay: reduce ? 0 : i * 0.1,
                ease: easeOutExpo,
              }}
              className="h-full"
            >
              <PillarCard
                pillar={pillar}
                items={pillarItems[i]}
                isIa={i === 2}
              />
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
