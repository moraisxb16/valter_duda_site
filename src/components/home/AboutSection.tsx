"use client";

import { Award, Cpu, Shield, Target } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { whatsappHref } from "@/lib/constants";
import { easeOutExpo, duration, viewport } from "@/lib/motion";

const mini = [
  {
    title: "Excelência",
    sub: "Certificações tech",
    icon: Award,
    bg: "from-sky-500 to-blue-600",
  },
  {
    title: "Precisão",
    sub: "Entregas no prazo",
    icon: Target,
    bg: "from-violet-500 to-indigo-600",
  },
  {
    title: "Inovação",
    sub: "Stack moderna",
    icon: Cpu,
    bg: "from-fuchsia-500 to-pink-600",
  },
  {
    title: "Segurança",
    sub: "Compliance total",
    icon: Shield,
    bg: "from-rose-500 to-orange-500",
  },
] as const;

export function AboutSection() {
  const reduce = useReducedMotion();

  return (
    <Section
      id="sobre"
      dataJourney="trust"
      aria-labelledby="sobre-heading"
      className="relative !bg-slate-50 !py-24 sm:!py-32 lg:!py-40"
    >
      <Container>
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center lg:gap-16">
          <motion.div
            initial={reduce ? false : { opacity: 0, x: -22 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewport}
            transition={{ duration: duration.slow, ease: easeOutExpo }}
          >
            <h2
              id="sobre-heading"
              className="font-display text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl"
            >
              Sobre nós
            </h2>
            <p className="mt-8 text-lg leading-relaxed text-slate-600">
              Com mais de{" "}
              <strong className="font-semibold text-slate-900">+12 anos</strong>{" "}
              desenvolvendo soluções digitais em{" "}
              <strong className="font-semibold text-slate-900">
                tecnologia e inovação
              </strong>
              .
            </p>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              Nossa equipe é formada por{" "}
              <strong className="font-semibold text-slate-900">
                engenheiros certificados
              </strong>
              . Trabalhamos com{" "}
              <strong className="font-semibold text-slate-900">
                metodologia ágil
              </strong>
              , construindo soluções{" "}
              <strong className="font-semibold text-slate-900">
                enterprise-grade
              </strong>{" "}
              em infraestrutura, web e IA.
            </p>
            <div className="mt-10">
              <Button
                href={whatsappHref()}
                variant="cyber"
                className="justify-center"
                showArrow
                aria-label="Conhecer a equipe no WhatsApp"
              >
                Conhecer equipe
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={reduce ? false : { opacity: 0, x: 22, filter: "blur(8px)" }}
            whileInView={{
              opacity: 1,
              x: 0,
              filter: "blur(0px)",
            }}
            viewport={viewport}
            transition={{
              duration: duration.slow,
              delay: reduce ? 0 : 0.08,
              ease: easeOutExpo,
            }}
            className="grid grid-cols-2 gap-4 sm:gap-5"
          >
            {mini.map((m, i) => (
              <motion.div
                key={m.title}
                initial={reduce ? false : { opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewport}
                transition={{
                  delay: reduce ? 0 : 0.06 + i * 0.05,
                  duration: 0.45,
                  ease: easeOutExpo,
                }}
                whileHover={
                  reduce ? undefined : { y: -4, scale: 1.02 }
                }
                className="rounded-2xl border border-slate-200/90 bg-white p-5 shadow-[0_16px_40px_-24px_rgba(15,23,42,0.1)] sm:p-6"
              >
                <div
                  className={`flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${m.bg} text-white shadow-md`}
                >
                  <m.icon className="h-5 w-5" strokeWidth={2} aria-hidden />
                </div>
                <p className="font-display mt-4 text-base font-bold text-slate-900">
                  {m.title}
                </p>
                <p className="mt-1 text-sm font-medium text-slate-500">{m.sub}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
