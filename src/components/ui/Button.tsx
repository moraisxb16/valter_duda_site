"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { easeOutExpo } from "@/lib/motion";

type ButtonVariant = "whatsapp" | "cyan" | "cyber" | "outline" | "ghost";

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
  showArrow?: boolean;
};

const base =
  "group relative inline-flex items-center justify-center gap-2.5 overflow-hidden font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:pointer-events-none disabled:opacity-50";

const variants: Record<ButtonVariant, string> = {
  whatsapp:
    "rounded-full bg-gradient-to-r from-emerald-500 via-teal-500 to-violet-600 px-6 py-3.5 text-white shadow-[0_8px_30px_-6px_rgba(16,185,129,0.45),0_4px_20px_-8px_rgba(109,40,217,0.25)] ring-1 ring-white/20 ring-inset before:pointer-events-none before:absolute before:inset-0 before:bg-gradient-to-t before:from-black/10 before:to-transparent hover:brightness-[1.05] hover:shadow-[0_12px_40px_-8px_rgba(16,185,129,0.5),0_8px_28px_-10px_rgba(109,40,217,0.35)] focus-visible:outline-emerald-500 sm:px-7 sm:py-4",
  cyan: "rounded-[14px] bg-gradient-to-r from-cyan-500 via-cyan-500 to-teal-600 px-7 py-3.5 text-white shadow-[0_14px_40px_-10px_rgba(6,182,212,0.55),0_6px_24px_-8px_rgba(13,148,136,0.35)] ring-1 ring-white/30 ring-inset before:pointer-events-none before:absolute before:inset-0 before:bg-gradient-to-t before:from-white/15 before:to-transparent hover:brightness-[1.06] hover:shadow-[0_18px_48px_-12px_rgba(6,182,212,0.55),0_10px_32px_-10px_rgba(20,184,166,0.4)] focus-visible:outline-cyan-500 sm:px-8 sm:py-4",
  cyber:
    "rounded-xl bg-[linear-gradient(90deg,#00C6FF,#0072FF,#8E2DE2)] px-8 py-3.5 text-white shadow-[0_0_36px_rgba(0,198,255,0.35),0_14px_40px_-10px_rgba(142,45,226,0.4)] ring-1 ring-white/25 ring-inset before:pointer-events-none before:absolute before:inset-0 before:bg-gradient-to-t before:from-white/20 before:to-transparent hover:brightness-[1.07] hover:shadow-[0_0_48px_rgba(0,198,255,0.45),0_18px_50px_-12px_rgba(142,45,226,0.45)] focus-visible:outline-cyan-400 sm:px-9 sm:py-4",
  outline:
    "rounded-2xl border border-white/15 bg-white/5 px-6 py-3.5 text-slate-100 shadow-none backdrop-blur-md transition-colors hover:border-cyan-400/40 hover:bg-white/10 hover:text-white focus-visible:outline-cyan-400 sm:px-7",
  ghost:
    "rounded-xl px-4 py-2 text-slate-300 hover:bg-white/5 hover:text-white focus-visible:outline-cyan-400 sm:px-5",
};

const iconWrap =
  "relative z-[1] flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-black/20 text-white ring-1 ring-white/25 transition group-hover:bg-black/30 [&>svg]:h-5 [&>svg]:w-5";

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

  const showIconRing =
    variant === "whatsapp" || variant === "cyan" || variant === "cyber";
  const showArrowAnim =
    showArrow && (variant === "whatsapp" || variant === "cyan" || variant === "cyber");

  return (
    <motion.a
      href={href}
      className={`${base} ${variants[variant]} ${className} ${pulseClass}`}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      aria-label={ariaLabel}
      onClick={onClick}
      whileHover={reduce ? undefined : { scale: 1.03, y: -1 }}
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
