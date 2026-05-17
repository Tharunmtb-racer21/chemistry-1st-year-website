import type { Poster } from "@/data/posters";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useEffect } from "react";

type Props = { poster: Poster | null; onClose: () => void };

export function PosterModal({ poster, onClose }: Props) {
  useEffect(() => {
    if (!poster) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [poster, onClose]);

  return (
    <AnimatePresence>
      {poster && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
          onClick={onClose}
        >
          <div className="absolute inset-0 bg-background/80 backdrop-blur-xl" />
          <motion.div
            initial={{ scale: 0.92, opacity: 0, y: 40 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative grid max-h-[90vh] w-full max-w-5xl gap-0 overflow-hidden rounded-3xl glass-strong md:grid-cols-[1fr_1.1fr]"
          >
            <button
              onClick={onClose}
              className="absolute right-4 top-4 z-10 grid h-10 w-10 place-items-center rounded-full glass transition hover:scale-110 hover:bg-white/10"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="relative overflow-hidden md:rounded-l-3xl">
              <img
                src={poster.image}
                alt={poster.title}
                className="h-64 w-full object-cover md:h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent md:bg-gradient-to-r" />
            </div>

            <div className="max-h-[90vh] space-y-5 overflow-y-auto p-7 md:p-10">
              <span className="inline-block rounded-full glass px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-[var(--neon-cyan)]">
                {poster.tag}
              </span>
              <h2 className="font-display text-3xl font-semibold leading-tight md:text-4xl">
                {poster.title}
              </h2>
              <p className="text-sm uppercase tracking-widest text-muted-foreground">
                Presented by{" "}
                <span className="text-[var(--neon-cyan)]">
                  {poster.student}
                </span>
              </p>

              <Section title="Topic Overview" body={poster.topic} />
              <Section
                title="Scientific Importance"
                body={poster.importance}
              />
              <Section title="Conclusion" body={poster.conclusion} />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Section({ title, body }: { title: string; body: string }) {
  return (
    <div>
      <h3 className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-[var(--neon-purple)]">
        {title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-foreground/85">{body}</p>
    </div>
  );
}
