"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/Button";
import { NavLink } from "@/components/ui/NavLink";
import { Container } from "@/components/ui/Container";
import { whatsappHref } from "@/lib/constants";
import { easeOutExpo } from "@/lib/motion";

const nav = [
  { href: "#inicio", label: "Início" },
  { href: "#sobre", label: "Sobre" },
  { href: "#solucoes", label: "Serviços" },
  { href: "#parceiros", label: "Parceiros" },
  { href: "#contato", label: "Contato" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [compact, setCompact] = useState(false);
  const lastY = useRef(0);
  const { scrollY } = useScroll();

  useEffect(() => {
    lastY.current = window.scrollY;
  }, []);

  useMotionValueEvent(scrollY, "change", (y) => {
    setScrolled(y > 16);
    const prev = lastY.current;
    const dir = y > prev ? "down" : "up";
    lastY.current = y;
    if (y < 32) setCompact(false);
    else if (dir === "down" && y > 72) setCompact(true);
    else if (dir === "up") setCompact(false);
  });

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const dense = compact && !open;

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        scrolled
          ? "border-b border-white/10 bg-slate-950/80 shadow-[0_8px_32px_-8px_rgba(0,0,0,0.5)] backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      } ${dense ? "py-2 sm:py-2" : "py-3 sm:py-[0.85rem]"}`}
    >
      <Container className="flex items-center justify-between gap-4">
        <Link
          href="/#inicio"
          className="group flex items-center gap-2.5 rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400"
          aria-label="Ir para o início"
        >
          <motion.span
            className="flex h-9 w-9 items-center justify-center rounded-xl bg-[linear-gradient(135deg,#00C6FF,#0072FF,#8E2DE2)] text-xs font-extrabold text-white shadow-[0_0_24px_rgba(0,198,255,0.35)] ring-1 ring-white/20"
            animate={{ scale: dense ? 0.92 : 1 }}
            transition={{ duration: 0.25, ease: easeOutExpo }}
          >
            NX
          </motion.span>
          <span
            className={`hidden font-bold tracking-tight text-white sm:block ${
              dense ? "text-xs" : "text-sm"
            }`}
          >
            Next<span className="text-cyan-400">Tech</span>
          </span>
        </Link>

        <nav
          className="hidden items-center gap-1 md:flex"
          aria-label="Principal"
        >
          {nav.map((item) => (
            <NavLink
              key={item.href}
              href={item.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-slate-300 transition-colors hover:text-white"
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <div className="hidden items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1.5 sm:flex">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-40" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.9)]" />
            </span>
            <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-emerald-300/95">
              Online
            </span>
          </div>

          <Button
            href={whatsappHref()}
            variant="cyber"
            className="hidden !px-5 !py-2.5 text-sm sm:inline-flex"
            external
            aria-label="Conectar pelo WhatsApp"
            showArrow
          >
            Conectar
          </Button>

          <motion.button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white shadow-inner backdrop-blur-sm md:hidden"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2, ease: easeOutExpo }}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            <span className="sr-only">
              {open ? "Fechar menu" : "Abrir menu"}
            </span>
          </motion.button>
        </div>
      </Container>

      {open ? (
        <div
          id="mobile-menu"
          className="border-t border-white/10 bg-slate-950/95 px-4 py-4 shadow-2xl shadow-black/50 backdrop-blur-xl md:hidden"
        >
          <nav className="flex flex-col gap-1" aria-label="Mobile">
            {nav.map((item) => (
              <NavLink
                key={item.href}
                href={item.href}
                className="rounded-xl px-3 py-3 text-base font-medium text-slate-200 hover:bg-white/5"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}
            <Button
              href={whatsappHref()}
              variant="cyber"
              className="mt-3 w-full justify-center"
              external
              onClick={() => setOpen(false)}
              aria-label="Conectar pelo WhatsApp"
              showArrow
            >
              Conectar
            </Button>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
