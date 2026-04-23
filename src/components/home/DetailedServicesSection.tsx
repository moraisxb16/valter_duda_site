"use client";

import {
  Activity,
  BarChart3,
  Bot,
  Brain,
  CloudCog,
  Cpu,
  Database,
  Globe,
  LayoutTemplate,
  Lock,
  Network,
  Search,
  Server,
  Shield,
  Workflow,
  Zap,
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import {
  easeOutExpo,
  duration,
  staggerItem,
  staggerTight,
  viewport,
} from "@/lib/motion";

const columns = [
  {
    title: "Infraestrutura",
    icon: Server,
    headerBg: "from-sky-500 to-blue-600",
    bottomBar: "from-cyan-400 to-blue-600",
    items: [
      { icon: CloudCog, label: "Cloud AWS/Azure" },
      { icon: Network, label: "Kubernetes & Docker" },
      { icon: Database, label: "Banco de dados" },
      { icon: Shield, label: "Segurança" },
      { icon: Workflow, label: "CI/CD Pipeline" },
      { icon: Activity, label: "Backup & DR" },
    ],
  },
  {
    title: "Sites & Web",
    icon: Globe,
    headerBg: "from-violet-500 to-indigo-600",
    bottomBar: "from-blue-500 to-fuchsia-500",
    items: [
      { icon: Cpu, label: "React/Next.js" },
      { icon: LayoutTemplate, label: "Landing Pages" },
      { icon: Zap, label: "Performance" },
      { icon: Search, label: "SEO Strategy" },
      { icon: BarChart3, label: "API Integration" },
      { icon: CloudCog, label: "CDN & Cache" },
    ],
  },
  {
    title: "IA & Automação",
    icon: Bot,
    headerBg: "from-fuchsia-500 to-pink-600",
    bottomBar: "from-fuchsia-400 to-pink-500",
    items: [
      { icon: Bot, label: "Chatbots IA" },
      { icon: Brain, label: "AI Agents" },
      { icon: Cpu, label: "LLMs & GPT" },
      { icon: Activity, label: "ML Models" },
      { icon: Workflow, label: "Data Pipeline" },
      { icon: Lock, label: "AI Security" },
    ],
  },
] as const;

export function DetailedServicesSection() {
  const reduce = useReducedMotion();

  return (
    <Section
      dataJourney="depth"
      className="relative !bg-slate-50 !py-24 sm:!py-32 lg:!py-40"
      aria-labelledby="servicos-detalhados"
    >
      <Container>
        <motion.div
          initial={reduce ? false : "hidden"}
          whileInView="visible"
          viewport={viewport}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: reduce ? 0 : 0.08 } },
          }}
          className="text-center"
        >
          <motion.h2
            variants={{
              hidden: { opacity: 0, y: 18 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.55, ease: easeOutExpo },
              },
            }}
            id="servicos-detalhados"
            className="font-display text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl"
          >
            Serviços em detalhe
          </motion.h2>
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 12 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: duration.base, ease: easeOutExpo },
              },
            }}
            className="mx-auto mt-5 max-w-2xl text-base font-medium leading-relaxed text-slate-600 sm:text-lg"
          >
            Stack completo para transformar sua operação digital
          </motion.p>
        </motion.div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3 lg:gap-10">
          {columns.map((col, i) => (
            <motion.div
              key={col.title}
              initial={
                reduce ? false : { opacity: 0, y: 22, filter: "blur(6px)" }
              }
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={viewport}
              transition={{
                duration: duration.slow,
                delay: reduce ? 0 : i * 0.1,
                ease: easeOutExpo,
              }}
              whileHover={
                reduce
                  ? undefined
                  : {
                      y: -8,
                      scale: 1.02,
                      boxShadow:
                        "0 28px 60px -24px rgba(15, 23, 42, 0.14), 0 0 0 1px rgba(0, 198, 255, 0.08)",
                    }
              }
              className="group/card relative flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200/90 bg-white p-8 shadow-[0_24px_60px_-28px_rgba(15,23,42,0.12)] sm:p-9"
            >
              <div
                className={`pointer-events-none absolute inset-x-0 bottom-0 h-[3px] bg-gradient-to-r ${col.bottomBar} opacity-90`}
                aria-hidden
              />
              <div className="flex items-start gap-4 border-b border-slate-100 pb-6">
                <div
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${col.headerBg} text-white shadow-[0_12px_28px_-8px_rgba(14,165,233,0.45)]`}
                >
                  <col.icon className="h-6 w-6" strokeWidth={1.85} aria-hidden />
                </div>
                <div className="min-w-0 text-left">
                  <h3 className="font-display text-xl font-bold tracking-tight text-slate-900">
                    {col.title}
                  </h3>
                </div>
              </div>
              <motion.ul
                className="mt-6 flex flex-col gap-1"
                variants={staggerTight}
                initial={reduce ? false : "hidden"}
                whileInView="visible"
                viewport={viewport}
              >
                {col.items.map((item) => (
                  <motion.li
                    key={item.label}
                    variants={staggerItem}
                    className="flex items-center gap-3 rounded-xl px-2 py-2.5 text-[15px] font-medium text-slate-800 transition-colors duration-200 hover:bg-slate-50"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-slate-100/90 text-slate-500 opacity-80 ring-1 ring-slate-200/80 group-hover/card:text-slate-700">
                      <item.icon className="h-4 w-4" aria-hidden />
                    </span>
                    {item.label}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
