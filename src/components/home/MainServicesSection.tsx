"use client";

import { Bot, Globe, Server } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import {
  easeOutExpo,
  duration,
  staggerContainer,
  staggerItem,
  staggerTight,
  viewport,
} from "@/lib/motion";

const pillars = [
  {
    title: "Infraestrutura & TI",
    description: "Gestão completa da infraestrutura",
    icon: Server,
    accent: "from-sky-600 via-cyan-500 to-teal-500",
    ring: "ring-sky-200/50",
  },
  {
    title: "Sites & Presença Digital",
    description: "Experiências rápidas, claras e conversoras",
    icon: Globe,
    accent: "from-violet-600 via-indigo-500 to-sky-500",
    ring: "ring-violet-200/40",
  },
  {
    title: "IA & Automação",
    description: "Operação mais inteligente, 24 horas por dia",
    icon: Bot,
    accent: "from-emerald-600 via-teal-500 to-cyan-500",
    ring: "ring-emerald-200/50",
  },
] as const;

const pillarItems = [
  [
    "Terceirização de TI",
    "Redes e servidores",
    "Segurança de dados",
    "Backup",
    "Monitoramento",
    "Firewall e VPN",
    "Suporte técnico",
  ],
  [
    "Sites institucionais",
    "Landing pages",
    "SEO",
    "Analytics",
    "Performance",
    "Mobile first",
    "Integrações",
    "Hospedagem",
  ],
  [
    "Atendimento automático 24h",
    "Chatbots inteligentes",
    "CRM",
    "Automação de processos",
    "Monitoramento automático",
    "IA suporte",
    "Dashboards",
    "Redução de custos",
  ],
] as const;

const line = {
  hidden: { opacity: 0, y: 14, filter: "blur(5px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: duration.base, ease: easeOutExpo },
  },
};

export function MainServicesSection() {
  const reduce = useReducedMotion();

  return (
    <Section
      id="solucoes"
      aria-labelledby="solucoes-heading"
      dataJourney="structure"
      className="relative z-20 -mt-12 rounded-t-[2rem] border-t border-slate-200/70 bg-white pt-10 shadow-[0_-28px_70px_-32px_rgba(15,23,42,0.14)] sm:-mt-16 sm:rounded-t-[2.25rem] lg:pt-12"
    >
      <Container>
        <motion.div
          initial={reduce ? false : "hidden"}
          whileInView="visible"
          viewport={viewport}
          variants={staggerContainer}
        >
          <motion.h2
            variants={staggerItem}
            id="solucoes-heading"
            className="font-display max-w-3xl text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl lg:text-[2.5rem]"
          >
            Três frentes, um time ao seu lado
          </motion.h2>
          <motion.p
            variants={line}
            className="mt-5 max-w-2xl text-base font-medium leading-relaxed text-slate-600 sm:text-lg"
          >
            Unimos infraestrutura estável, presença digital de alto impacto e
            IA aplicada para gerar eficiência real no dia a dia.
          </motion.p>
        </motion.div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3 lg:gap-8">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={
                reduce
                  ? false
                  : { opacity: 0, y: 20, filter: "blur(5px)" }
              }
              whileInView={{
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
              }}
              viewport={viewport}
              transition={{
                duration: duration.base,
                delay: reduce ? 0 : i * 0.08,
                ease: easeOutExpo,
              }}
            >
              <Card className="flex h-full flex-col !rounded-2xl !p-6 shadow-md sm:!p-6 lg:!p-7">
                <div
                  className={`inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${pillar.accent} text-white shadow-md ring-1 ${pillar.ring}`}
                >
                  <pillar.icon className="h-5 w-5" strokeWidth={2} aria-hidden />
                </div>
                <h3 className="font-display mt-4 text-lg font-bold tracking-tight text-slate-900 sm:text-xl">
                  {pillar.title}
                </h3>
                <p className="mt-2 text-sm font-medium leading-snug text-slate-600">
                  {pillar.description}
                </p>
                <motion.ul
                  className="mt-5 space-y-2 text-sm font-medium leading-snug text-slate-700"
                  variants={staggerTight}
                  initial={reduce ? false : "hidden"}
                  whileInView="visible"
                  viewport={viewport}
                >
                  {pillarItems[i].map((item) => (
                    <motion.li
                      key={item}
                      variants={staggerItem}
                      className="flex gap-2"
                    >
                      <span
                        className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-sky-500 to-emerald-500"
                        aria-hidden
                      />
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </motion.ul>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
