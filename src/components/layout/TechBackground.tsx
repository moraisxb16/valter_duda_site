/**
 * Camada fixa: radial deep space, grid/matrix animado, pontos e ruído.
 * Sem interação — apenas visual.
 */
export function TechBackground() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden
    >
      <div className="absolute inset-0 bg-cyber-base" />
      <div className="absolute inset-0 bg-cyber-glow" />
      <div className="cyber-matrix absolute inset-0" />
      <div className="cyber-particles absolute inset-0" />
      <div className="cyber-dots absolute inset-0 opacity-[0.35]" />
      <div className="cyber-noise absolute inset-0" />
      <div className="cyber-vignette absolute inset-0" />
    </div>
  );
}
