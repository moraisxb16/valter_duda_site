"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  AwsLogo,
  DellLogo,
  FirebaseLogo,
  GoogleLogo,
  MicrosoftLogo,
} from "@/components/partners/PartnerLogos";
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
  {
    name: "Microsoft",
    hint: "Nuvem & produtividade",
    Logo: MicrosoftLogo,
  },
  {
    name: "AWS",
    hint: "Infraestrutura global",
    Logo: AwsLogo,
  },
  {
    name: "Google",
    hint: "Dados & IA",
    Logo: GoogleLogo,
  },
  {
    name: "Dell",
    hint: "Hardware empresarial",
    Logo: DellLogo,
  },
  {
    name: "Firebase",
    hint: "Apps em tempo real",
    Logo: FirebaseLogo,
  },
] as const;

/** 80×48px — logos com object-fit via SVG + max w/h (sem dimensão fixa no SVG no layout). */
function PartnerLogoBox({ Logo }: { Logo: (typeof partners)[number]["Logo"] }) {
  return (
    <div
      className="partner-logo-box flex h-12 w-20 shrink-0 items-center justify-center"
      aria-hidden
    >
      <Logo />
    </div>
  );
}

export function PartnersSection() {
  const reduce = useReducedMotion();

  return (
    <Section
      id="parceiros"
      dataJourney="authority"
      aria-labelledby="parceiros-heading"
      className="relative overflow-hidden border-y border-slate-200/80 !bg-white !py-24 text-slate-900 sm:!py-32 lg:!py-36"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-50/80 via-white to-white"
        aria-hidden
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
            className="font-display text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl"
          >
            Ecossistema de parceiros
          </motion.h2>
          <motion.p
            variants={staggerItem}
            className="mx-auto mt-5 max-w-2xl text-base font-medium leading-relaxed text-slate-600 sm:text-lg"
          >
            Trabalhamos com as melhores tecnologias do mercado.
          </motion.p>
        </motion.div>

        <div
          className="mt-14 grid gap-6"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
          }}
        >
          {partners.map((p, i) => (
            <motion.div
              key={p.name}
              initial={reduce ? false : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{
                duration: duration.base,
                delay: reduce ? 0 : 0.08 + i * 0.05,
                ease: easeOutExpo,
              }}
              className="h-full min-w-0"
            >
              <div className="group flex h-full min-h-[168px] flex-col items-center justify-center gap-3 rounded-xl border border-slate-200/90 bg-white p-6 text-center shadow-none transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] hover:-translate-y-1 hover:bg-slate-50 hover:shadow-[0_10px_25px_rgba(0,0,0,0.08)] motion-reduce:hover:translate-y-0 motion-reduce:hover:shadow-none">
                <PartnerLogoBox Logo={p.Logo} />
                <span className="text-sm font-semibold text-slate-900">
                  {p.name}
                </span>
                <span className="text-xs font-medium leading-snug text-slate-500">
                  {p.hint}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
