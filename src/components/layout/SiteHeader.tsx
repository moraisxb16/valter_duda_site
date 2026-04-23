"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/Button";
import { NavLink } from "@/components/ui/NavLink";
import { WhatsAppGlyph } from "@/components/ui/WhatsAppGlyph";
import { Container } from "@/components/ui/Container";
import { whatsappHref } from "@/lib/constants";
import { easeOutExpo } from "@/lib/motion";

const nav = [
  { href: "#solucoes", label: "Soluções" },
  { href: "#sobre", label: "Sobre" },
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
    setScrolled(y > 12);
    const prev = lastY.current;
    const dir = y > prev ? "down" : "up";
    lastY.current = y;
    if (y < 28) setCompact(false);
    else if (dir === "down" && y > 56) setCompact(true);
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
      className={`sticky top-0 z-50 border-b backdrop-blur-md transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        scrolled
          ? "border-slate-200/80 bg-white/88 shadow-sm shadow-slate-900/5"
          : "border-transparent bg-white/45 backdrop-blur-sm"
      } ${dense ? "py-2 sm:py-2" : "py-3 sm:py-[0.85rem]"}`}
    >
      <Container className="flex items-center justify-between gap-4">
        <Link
          href="/"
          className="group flex items-center gap-2 rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500"
          aria-label="Ir para o início"
        >
          <motion.span
            className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-sky-500 to-emerald-500 text-sm font-bold text-white shadow-md"
            animate={{ scale: dense ? 0.9 : 1 }}
            transition={{ duration: 0.25, ease: easeOutExpo }}
          >
            NX
          </motion.span>
          <span
            className={`hidden font-semibold tracking-tight text-slate-900 sm:block ${
              dense ? "text-xs" : "text-sm"
            }`}
          >
            Next<span className="text-sky-600">Tech</span>
          </span>
        </Link>

        <nav
          className="hidden items-center gap-0.5 md:flex"
          aria-label="Principal"
        >
          {nav.map((item) => (
            <NavLink
              key={item.href}
              href={item.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:text-slate-900"
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <motion.a
            href={whatsappHref()}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-full border border-emerald-200/90 bg-white/90 px-3 py-2 text-sm font-semibold text-emerald-800 shadow-sm sm:inline-flex"
            aria-label="WhatsApp — abre conversa em nova aba"
            whileHover={{ scale: 1.03, y: -1 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.2, ease: easeOutExpo }}
          >
            <WhatsAppGlyph className="h-4 w-4 shrink-0 text-emerald-600" />
            <span className="max-lg:sr-only">WhatsApp</span>
          </motion.a>

          <motion.button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-800 shadow-sm md:hidden"
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
        <div className="border-t border-slate-200/80 bg-white/96 px-4 py-4 shadow-lg shadow-slate-900/10 backdrop-blur-md md:hidden">
          <nav className="flex flex-col gap-1" aria-label="Mobile">
            {nav.map((item) => (
              <NavLink
                key={item.href}
                href={item.href}
                className="rounded-xl px-3 py-3 text-base font-medium text-slate-800 hover:bg-slate-100"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}
            <Button
              href={whatsappHref()}
              variant="outline"
              className="mt-2 w-full justify-center border-emerald-200 text-emerald-800 hover:border-emerald-300 hover:bg-emerald-50/80 hover:text-emerald-900"
              icon={
                <WhatsAppGlyph className="h-[1.05rem] w-[1.05rem] text-emerald-600" />
              }
              onClick={() => setOpen(false)}
              aria-label="Abrir WhatsApp"
            >
              Abrir WhatsApp
            </Button>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
