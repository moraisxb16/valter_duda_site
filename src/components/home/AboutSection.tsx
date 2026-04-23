"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { easeOutExpo, duration, viewport } from "@/lib/motion";

export function AboutSection() {
  const reduce = useReducedMotion();

  return (
    <Section
      id="sobre"
      dataJourney="trust"
      aria-labelledby="sobre-heading"
      className="bg-gradient-to-br from-slate-900 via-slate-900 to-sky-950 text-white"
    >
      <Container>
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <motion.div
            initial={reduce ? false : { opacity: 0, x: -18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewport}
            transition={{ duration: duration.slow, ease: easeOutExpo }}
          >
            <h2
              id="sobre-heading"
              className="font-display text-4xl font-extrabold tracking-tight sm:text-5xl"
            >
              Sobre nós
            </h2>
            <p className="mt-8 text-lg font-normal leading-relaxed text-slate-300">
              Empresa com mais de 12 anos de experiência em tecnologia, focada
              em infraestrutura, desenvolvimento web e IA.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-slate-300">
              Nosso trabalho é traduzir complexidade em operação simples: menos
              incidentes, mais velocidade de entrega e decisões guiadas por
              dados.
            </p>
          </motion.div>
          <motion.div
            initial={reduce ? false : { opacity: 0, x: 18, filter: "blur(6px)" }}
            whileInView={{
              opacity: 1,
              x: 0,
              filter: "blur(0px)",
            }}
            viewport={viewport}
            transition={{
              duration: duration.slow,
              delay: reduce ? 0 : 0.1,
              ease: easeOutExpo,
            }}
            className="rounded-2xl border border-white/10 bg-white/5 p-8 shadow-xl shadow-sky-900/20 backdrop-blur-md"
          >
            <dl className="grid gap-6 sm:grid-cols-2">
              <div>
                <dt className="text-sm font-medium text-slate-400">
                  Foco principal
                </dt>
                <dd className="mt-1 text-base font-semibold text-white">
                  Infraestrutura + Web + IA
                </dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-slate-400">
                  Relacionamento
                </dt>
                <dd className="mt-1 text-base font-semibold text-white">
                  Próximo, técnico e transparente
                </dd>
              </div>
              <div className="sm:col-span-2">
                <dt className="text-sm font-medium text-slate-400">
                  Como começamos
                </dt>
                <dd className="mt-1 text-base font-semibold text-white">
                  Diagnóstico rápido, plano claro e execução com acompanhamento
                  contínuo.
                </dd>
              </div>
            </dl>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
