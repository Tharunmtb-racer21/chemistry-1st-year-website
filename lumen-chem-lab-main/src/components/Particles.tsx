import { useMemo } from "react";

type Props = { count?: number; className?: string };

export function Particles({ count = 40, className = "" }: Props) {
  const dots = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: Math.random() * 3 + 1,
        delay: Math.random() * 8,
        duration: Math.random() * 12 + 10,
        hue: Math.random() > 0.5 ? "var(--neon-cyan)" : "var(--neon-purple)",
      })),
    [count],
  );

  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      {dots.map((d) => (
        <span
          key={d.id}
          className="absolute rounded-full animate-drift"
          style={{
            left: `${d.left}%`,
            top: `${d.top}%`,
            width: d.size,
            height: d.size,
            background: d.hue,
            boxShadow: `0 0 ${d.size * 4}px ${d.hue}`,
            animationDelay: `${d.delay}s`,
            animationDuration: `${d.duration}s`,
            opacity: 0.7,
          }}
        />
      ))}
    </div>
  );
}

export function FloatingMolecules() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {[
        { top: "10%", left: "8%", size: 180, d: 0 },
        { top: "60%", left: "75%", size: 240, d: 4 },
        { top: "30%", left: "85%", size: 140, d: 8 },
        { top: "75%", left: "12%", size: 200, d: 2 },
      ].map((m, i) => (
        <div
          key={i}
          className="absolute animate-float-slow opacity-40"
          style={{
            top: m.top,
            left: m.left,
            width: m.size,
            height: m.size,
            animationDelay: `${m.d}s`,
          }}
        >
          <Molecule />
        </div>
      ))}
    </div>
  );
}

function Molecule() {
  return (
    <svg viewBox="0 0 100 100" className="h-full w-full animate-spin-slow">
      <defs>
        <radialGradient id="atomG">
          <stop offset="0%" stopColor="oklch(0.88 0.18 200)" />
          <stop offset="100%" stopColor="oklch(0.65 0.27 300)" />
        </radialGradient>
      </defs>
      <g
        stroke="oklch(0.78 0.18 220 / 0.6)"
        strokeWidth="0.8"
        fill="url(#atomG)"
      >
        <line x1="50" y1="50" x2="20" y2="25" />
        <line x1="50" y1="50" x2="80" y2="25" />
        <line x1="50" y1="50" x2="20" y2="75" />
        <line x1="50" y1="50" x2="80" y2="75" />
        <line x1="20" y1="25" x2="80" y2="25" />
        <line x1="20" y1="75" x2="80" y2="75" />
        <circle cx="50" cy="50" r="6" />
        <circle cx="20" cy="25" r="4" />
        <circle cx="80" cy="25" r="4" />
        <circle cx="20" cy="75" r="4" />
        <circle cx="80" cy="75" r="4" />
      </g>
    </svg>
  );
}
