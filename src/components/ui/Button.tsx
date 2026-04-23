"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { easeOutExpo } from "@/lib/motion";

type ButtonVariant = "whatsapp" | "cyan" | "outline" | "ghost";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
  icon?: ReactNode;
  external?: boolean;
  "aria-label"?: string;
  onClick?: () => void;
  pulseGlow?: boolean;
  /** Seta animada (CTAs principais) */
  showArrow?: boolean;
};

const base =
  "group relative inline-flex items-center justify-center gap-2.5 overflow-hidden font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:pointer-events-none disabled:opacity-50";

const variants: Record<ButtonVariant, string> = {
  whatsapp:
    "rounded-full bg-gradient-to-r from-emerald-500 via-teal-500 to-violet-600 px-6 py-3.5 text-white shadow-[0_8px_30px_-6px_rgba(16,185,129,0.45),0_4px_20px_-8px_rgba(109,40,217,0.25)] ring-1 ring-white/20 ring-inset before:pointer-events-none before:absolute before:inset-0 before:bg-gradient-to-t before:from-black/10 before:to-transparent hover:brightness-[1.05] hover:shadow-[0_12px_40px_-8px_rgba(16,185,129,0.5),0_8px_28px_-10px_rgba(109,40,217,0.35)] focus-visible:outline-emerald-500 sm:px-7 sm:py-4",
  /** CTA hero — ciano/teal como referência visual */
  cyan: "rounded-[14px] bg-gradient-to-r from-cyan-500 via-cyan-500 to-teal-600 px-7 py-3.5 text-white shadow-[0_14px_40px_-10px_rgba(6,182,212,0.55),0_6px_24px_-8px_rgba(13,148,136,0.35)] ring-1 ring-white/30 ring-inset before:pointer-events-none before:absolute before:inset-0 before:bg-gradient-to-t before:from-white/15 before:to-transparent hover:brightness-[1.06] hover:shadow-[0_18px_48px_-12px_rgba(6,182,212,0.55),0_10px_32px_-10px_rgba(20,184,166,0.4)] focus-visible:outline-cyan-500 sm:px-8 sm:py-4",
  outline:
    "rounded-2xl border-2 border-slate-200/90 bg-white/90 px-6 py-3.5 text-slate-800 shadow-sm transition-colors hover:border-slate-800 hover:bg-slate-900 hover:text-white focus-visible:outline-emerald-500 sm:px-7",
  ghost:
    "rounded-xl px-4 py-2 text-slate-600 hover:bg-slate-100/80 hover:text-slate-900 focus-visible:outline-emerald-500 sm:px-5",
};

const iconWrap =
  "relative z-[1] flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-black/15 text-white ring-1 ring-white/25 transition group-hover:bg-black/20 [&>svg]:h-5 [&>svg]:w-5";

export function Button({
  href,
  children,
  variant = "whatsapp",
  className = "",
  icon,
  external = true,
  "aria-label": ariaLabel,
  onClick,
  pulseGlow = false,
  showArrow = false,
}: ButtonProps) {
  const reduce = useReducedMotion();

  const pulseClass =
    pulseGlow && variant === "whatsapp" ? "motion-safe:animate-pulse-glow" : "";

  const showIconRing = variant === "whatsapp" || variant === "cyan";
  const showArrowAnim =
    showArrow && (variant === "whatsapp" || variant === "cyan");

  return (
    <motion.a
      href={href}
      className={`${base} ${variants[variant]} ${className} ${pulseClass}`}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      aria-label={ariaLabel}
      onClick={onClick}
      whileHover={reduce ? undefined : { scale: 1.02, y: -1 }}
      whileTap={reduce ? undefined : { scale: 0.97 }}
      transition={{ duration: 0.22, ease: easeOutExpo }}
    >
      {icon ? (
        <span className={showIconRing ? iconWrap : "shrink-0"}>{icon}</span>
      ) : null}
      <span
        className={`relative z-[1] inline-flex items-center gap-1.5 ${
          showIconRing ? "pr-0.5" : ""
        }`}
      >
        {children}
        {showArrowAnim ? (
          <motion.span
            className="text-lg font-medium leading-none opacity-90"
            aria-hidden
            animate={reduce ? undefined : { x: [0, 3, 0] }}
            transition={{
              duration: 1.6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            →
          </motion.span>
        ) : null}
      </span>
    </motion.a>
  );
}
