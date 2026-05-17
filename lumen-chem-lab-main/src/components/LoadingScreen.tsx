import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export function LoadingScreen() {
  const [done, setDone] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setDone(true), 1400);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="fixed inset-0 z-[200] grid place-items-center bg-background"
        >
          <div className="relative grid place-items-center">
            <div className="absolute h-40 w-40 animate-pulse-glow rounded-full bg-[var(--neon-blue)] opacity-50 blur-3xl" />
            <svg viewBox="0 0 120 120" className="h-32 w-32">
              <g
                fill="none"
                stroke="oklch(0.88 0.18 200)"
                strokeWidth="1.2"
                style={{ filter: "drop-shadow(0 0 8px var(--neon-cyan))" }}
              >
                <ellipse
                  cx="60"
                  cy="60"
                  rx="50"
                  ry="20"
                  className="animate-spin-slow"
                  style={{ transformOrigin: "60px 60px" }}
                />
                <ellipse
                  cx="60"
                  cy="60"
                  rx="50"
                  ry="20"
                  transform="rotate(60 60 60)"
                  className="animate-spin-slow"
                  style={{
                    transformOrigin: "60px 60px",
                    animationDuration: "6s",
                  }}
                />
                <ellipse
                  cx="60"
                  cy="60"
                  rx="50"
                  ry="20"
                  transform="rotate(120 60 60)"
                  className="animate-spin-slow"
                  style={{
                    transformOrigin: "60px 60px",
                    animationDuration: "8s",
                  }}
                />
                <circle cx="60" cy="60" r="6" fill="oklch(0.88 0.18 200)" />
              </g>
            </svg>
            <p className="mt-6 font-mono text-xs uppercase tracking-[0.4em] text-muted-foreground">
              Initializing molecules
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
