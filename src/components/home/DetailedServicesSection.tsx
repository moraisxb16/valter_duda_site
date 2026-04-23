"use client";

import {
  Activity,
  BarChart3,
  Bot,
  CloudCog,
  Cpu,
  Database,
  Globe,
  Headphones,
  LayoutDashboard,
  Lock,
  Radar,
  Search,
  Server,
  ShieldCheck,
  Smartphone,
  Workflow,
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
    subtitle: "Estabilidade, segurança e previsibilidade",
    icon: Server,
    items: [
      { icon: CloudCog, label: "Cloud & servidores" },
      { icon: ShieldCheck, label: "Postura de segurança" },
      { icon: Database, label: "Backup e continuidade" },
      { icon: Radar, label: "Monitoramento proativo" },
      { icon: Headphones, label: "Suporte especializado" },
    ],
  },
  {
    title: "Sites",
    subtitle: "Presença digital que converte",
    icon: Globe,
    items: [
      { icon: LayoutDashboard, label: "Sites institucionais" },
      { icon: Smartphone, label: "Mobile first" },
      { icon: Search, label: "SEO técnico" },
      { icon: BarChart3, label: "Analytics" },
      { icon: Activity, label: "Performance web" },
    ],
  },
  {
    title: "IA",
    subtitle: "Automação com governança",
    icon: Bot,
    items: [
      { icon: Bot, label: "Chatbots inteligentes" },
      { icon: Workflow, label: "Automação de processos" },
      { icon: Cpu, label: "IA aplicada ao suporte" },
      { icon: LayoutDashboard, label: "Dashboards" },
      { icon: Lock, label: "Dados com responsabilidade" },
    ],
  },
] as const;

export function DetailedServicesSection() {
  const reduce = useReducedMotion();

  return (
    <Section
      dataJourney="depth"
      className="bg-white"
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
        >
          <motion.h2
            variants={{
              hidden: { opacity: 0, clipPath: "inset(0 8% 0 0)" },
              visible: {
                opacity: 1,
                clipPath: "inset(0 0% 0 0)",
                transition: { duration: 0.55, ease: easeOutExpo },
              },
            }}
            id="servicos-detalhados"
            className="font-display text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl"
          >
            Serviços em detalhe
          </motion.h2>
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: duration.base, ease: easeOutExpo },
              },
            }}
            className="mt-6 max-w-2xl text-lg font-medium leading-relaxed text-slate-600"
          >
            Organizamos nossa entrega em três pilares para facilitar decisões e
            priorização — com o mesmo padrão de qualidade em cada frente.
          </motion.p>
        </motion.div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {columns.map((col, i) => (
            <motion.div
              key={col.title}
              initial={
                reduce
                  ? false
                  : { opacity: 0, y: 18, x: i === 1 ? 0 : i === 0 ? -10 : 10 }
              }
              whileInView={{ opacity: 1, y: 0, x: 0 }}
              viewport={viewport}
              transition={{
                duration: duration.slow,
                delay: reduce ? 0 : i * 0.11,
                ease: easeOutExpo,
              }}
              whileHover={
                reduce
                  ? undefined
                  : {
                      y: -6,
                      scale: 1.02,
                      boxShadow:
                        "0 22px 44px -14px rgba(15, 23, 42, 0.1), 0 0 0 1px rgba(45, 212, 191, 0.12)",
                    }
              }
              className={`h-full rounded-3xl border border-slate-200/80 p-8 shadow-[0_16px_48px_-20px_rgba(15,23,42,0.1)] transition-colors hover:border-emerald-300/50 sm:p-10 ${
                i % 2 === 0
                  ? "bg-gradient-to-br from-slate-50/95 to-white"
                  : "bg-gradient-to-br from-white to-sky-50/40"
              }`}
            >
              <div className="flex items-start gap-5">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-slate-800 via-slate-900 to-violet-950 text-white shadow-lg ring-2 ring-white/20">
                  <col.icon className="h-6 w-6" strokeWidth={1.75} aria-hidden />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-display text-xl font-bold tracking-tight text-slate-900">
                    {col.title}
                  </h3>
                  <p className="mt-2 text-sm font-medium text-slate-600">
                    {col.subtitle}
                  </p>
                </div>
              </div>
              <motion.ul
                className="mt-10 space-y-4"
                variants={staggerTight}
                initial={reduce ? false : "hidden"}
                whileInView="visible"
                viewport={viewport}
              >
                {col.items.map((item) => (
                  <motion.li
                    key={item.label}
                    variants={staggerItem}
                    className="flex items-center gap-3 text-[15px] font-medium text-slate-800"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-white to-slate-50 text-sky-600 shadow-md ring-1 ring-slate-200/90">
                      <item.icon className="h-[18px] w-[18px]" aria-hidden />
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
