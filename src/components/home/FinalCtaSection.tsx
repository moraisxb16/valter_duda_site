"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { WhatsAppGlyph } from "@/components/ui/WhatsAppGlyph";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { whatsappHref } from "@/lib/constants";
import { easeOutExpo, duration, viewport } from "@/lib/motion";

export function FinalCtaSection() {
  const reduce = useReducedMotion();

  return (
    <Section
      id="contato"
      dataJourney="conversion"
      aria-labelledby="cta-final-heading"
      className="relative overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-sky-50"
    >
      <motion.div
        className="pointer-events-none absolute right-0 top-0 h-64 w-64 translate-x-1/3 -translate-y-1/3 rounded-full bg-emerald-300/30 blur-3xl"
        aria-hidden
        initial={false}
        animate={
          reduce
            ? undefined
            : { scale: [1, 1.06, 1], opacity: [0.35, 0.45, 0.35] }
        }
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <div
        className="pointer-events-none absolute bottom-0 left-0 h-56 w-56 -translate-x-1/3 translate-y-1/3 rounded-full bg-sky-300/30 blur-3xl"
        aria-hidden
      />

      <Container className="relative">
        <motion.div
          className="mx-auto max-w-3xl rounded-3xl border border-slate-200/70 bg-white/85 p-10 text-center shadow-[0_28px_80px_-32px_rgba(15,23,42,0.18)] backdrop-blur-xl sm:p-14"
          initial={
            reduce
              ? false
              : { opacity: 0, y: 24, scale: 0.97, filter: "blur(8px)" }
          }
          whileInView={{
            opacity: 1,
            y: 0,
            scale: 1,
            filter: "blur(0px)",
          }}
          viewport={viewport}
          transition={{ duration: 0.55, ease: easeOutExpo }}
        >
          <h2
            id="cta-final-heading"
            className="font-display text-balance text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl"
          >
            Vamos transformar sua operação com tecnologia?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg font-medium leading-relaxed text-slate-600">
            Fale com um especialista no WhatsApp e receba orientação objetiva
            sobre o melhor caminho para o seu cenário.
          </p>
          <motion.div
            className="mt-8 flex justify-center"
            initial={reduce ? false : { opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ delay: reduce ? 0 : 0.12, duration: 0.4, ease: easeOutExpo }}
          >
            <Button
              href={whatsappHref()}
              className="px-8 py-4 text-base"
              icon={<WhatsAppGlyph />}
              aria-label="Falar no WhatsApp"
              pulseGlow
              showArrow
            >
              Falar no WhatsApp
            </Button>
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
}
