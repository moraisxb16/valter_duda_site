"use client";

import { Zap } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/Button";
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
      className="relative overflow-hidden border-t border-white/[0.06] !bg-[#020617] !py-28 sm:!py-36 lg:!py-44"
    >
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[min(560px,90vw)] w-[min(900px,95vw)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(0,198,255,0.14)_0%,rgba(142,45,226,0.12)_40%,transparent_68%)] blur-3xl"
        aria-hidden
      />
      <motion.div
        className="pointer-events-none absolute right-0 top-0 h-72 w-72 translate-x-1/4 -translate-y-1/4 rounded-full bg-fuchsia-600/20 blur-3xl"
        aria-hidden
        animate={
          reduce
            ? undefined
            : { scale: [1, 1.08, 1], opacity: [0.25, 0.38, 0.25] }
        }
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <Container className="relative z-10">
        <motion.div
          className="mx-auto max-w-3xl text-center"
          initial={
            reduce ? false : { opacity: 0, y: 28, scale: 0.97, filter: "blur(8px)" }
          }
          whileInView={{
            opacity: 1,
            y: 0,
            scale: 1,
            filter: "blur(0px)",
          }}
          viewport={viewport}
          transition={{ duration: 0.6, ease: easeOutExpo }}
        >
          <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-violet-300/90 backdrop-blur-md">
            Initialize connection
          </p>
          <h2
            id="cta-final-heading"
            className="font-display mt-8 text-balance text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-[3.25rem] lg:leading-[1.08]"
          >
            Vamos transformar sua{" "}
            <span className="text-gradient-cyber text-gradient-cyber-animated">
              operação com tecnologia?
            </span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg font-medium leading-relaxed text-slate-400">
            Entre em contato e descubra como nossa{" "}
            <span className="font-semibold text-cyan-400">
              stack tecnológica enterprise
            </span>{" "}
            pode elevar sua empresa ao próximo nível.
          </p>

          <motion.div
            className="relative mx-auto mt-12 inline-flex"
            initial={reduce ? false : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ delay: reduce ? 0 : 0.12, duration: 0.45, ease: easeOutExpo }}
          >
            <span
              className="pointer-events-none absolute -inset-3 rounded-2xl border border-white/15"
              aria-hidden
            />
            <span
              className="pointer-events-none absolute -left-1 -top-1 h-4 w-4 border-l-2 border-t-2 border-cyan-400/70"
              aria-hidden
            />
            <span
              className="pointer-events-none absolute -bottom-1 -right-1 h-4 w-4 border-b-2 border-r-2 border-fuchsia-400/70"
              aria-hidden
            />
            <Button
              href={whatsappHref()}
              variant="cyber"
              className="relative px-10 py-4 text-base"
              icon={<Zap className="h-5 w-5 text-white" aria-hidden />}
              aria-label="Iniciar conversa no WhatsApp"
              showArrow
            >
              Iniciar conversa
            </Button>
          </motion.div>

          <p className="mt-8 flex items-center justify-center gap-2 text-sm font-medium text-cyan-500/80">
            <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.8)]" />
            Conexão segura e criptografada
          </p>
        </motion.div>
      </Container>
    </Section>
  );
}
