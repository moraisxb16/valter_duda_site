"use client";

import type { ReactNode } from "react";
import { ScrollProgress } from "./ScrollProgress";

/**
 * Camada global: barra de progresso + textura sutil (noise + grid via CSS no layout).
 */
export function PageShell({ children }: { children: ReactNode }) {
  return (
    <>
      <ScrollProgress />
      {children}
    </>
  );
}
