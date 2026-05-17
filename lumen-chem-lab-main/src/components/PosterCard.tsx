import { useRef, useState } from "react";
import type { Poster } from "@/data/posters";
import { motion } from "framer-motion";

type Props = { poster: Poster; onOpen: (p: Poster) => void; index: number };

export function PosterCard({ poster, onOpen, index }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ rx: 0, ry: 0, mx: 50, my: 50 });

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width;
    const y = (e.clientY - r.top) / r.height;
    setTilt({
      ry: (x - 0.5) * 14,
      rx: -(y - 0.5) * 14,
      mx: x * 100,
      my: y * 100,
    });
  };

  const reset = () => setTilt({ rx: 0, ry: 0, mx: 50, my: 50 });

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      style={{ perspective: 1200 }}
      data-cursor="hover"
    >
      <div
        ref={ref}
        onMouseMove={onMove}
        onMouseLeave={reset}
        onClick={() => onOpen(poster)}
        className="group relative cursor-none rounded-3xl glass p-3 transition-shadow duration-500 hover:shadow-[0_30px_80px_-20px_oklch(0.65_0.27_300/0.5)]"
        style={{
          transform: `rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)`,
          transition: "transform 0.25s ease-out",
        }}
      >
        <div className="relative overflow-hidden rounded-2xl">
          <img
            src={poster.image}
            alt={poster.title}
            loading="lazy"
            width={768}
            height={1024}
            className="aspect-[3/4] w-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          {/* shine follow */}
          <div
            className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            style={{
              background: `radial-gradient(circle at ${tilt.mx}% ${tilt.my}%, oklch(0.95 0.1 220 / 0.25), transparent 50%)`,
              mixBlendMode: "screen",
            }}
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/95 via-background/30 to-transparent" />
          <span className="absolute left-4 top-4 rounded-full glass px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-[var(--neon-cyan)]">
            {poster.tag}
          </span>
        </div>

        <div className="relative space-y-3 p-5">
          <h3 className="font-display text-xl font-semibold leading-snug">
            {poster.title}
          </h3>
          <p className="text-xs uppercase tracking-widest text-muted-foreground">
            by{" "}
            <span className="text-[var(--neon-cyan)]">{poster.student}</span>
          </p>
          <p className="line-clamp-2 text-sm text-muted-foreground">
            {poster.preview}
          </p>
          <div className="flex items-center justify-between pt-2">
            <span className="text-xs text-muted-foreground">Read More</span>
            <span className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-[var(--neon-blue)] to-[var(--neon-purple)] text-background transition group-hover:scale-110">
              →
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
