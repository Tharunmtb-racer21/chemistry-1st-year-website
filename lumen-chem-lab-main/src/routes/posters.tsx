import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { posters, type Poster } from "@/data/posters";
import { PosterCard } from "@/components/PosterCard";
import { PosterModal } from "@/components/PosterModal";
import { Particles } from "@/components/Particles";

export const Route = createFileRoute("/posters")({
  head: () => ({
    meta: [
      { title: "Poster Presentations — SFS Chemistry" },
      {
        name: "description",
        content:
          "Browse every poster presentation from the SFS Chemistry Department — interactive, immersive, and richly detailed.",
      },
      {
        property: "og:title",
        content: "Poster Presentations — SFS Chemistry",
      },
      {
        property: "og:description",
        content:
          "Explore the full gallery of student poster presentations.",
      },
    ],
  }),
  component: PostersPage,
});

function PostersPage() {
  const [active, setActive] = useState<Poster | null>(null);
  return (
    <section className="relative mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24">
      <Particles count={30} />
      <header className="relative mb-14 max-w-3xl">
        <span className="font-mono text-xs uppercase tracking-[0.4em] text-[var(--neon-cyan)]">
          // gallery · 2026
        </span>
        <h1 className="mt-3 font-display text-5xl font-bold leading-tight md:text-7xl">
          The full <span className="text-gradient">poster archive</span>
        </h1>
        <p className="mt-5 text-muted-foreground">
          Every entry from this year's chemistry exhibition — click any card
          to read the topic, scientific significance, and conclusion in
          detail.
        </p>
      </header>

      <div className="relative grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {posters.map((p, i) => (
          <PosterCard key={p.id} poster={p} onOpen={setActive} index={i} />
        ))}
      </div>

      <PosterModal poster={active} onClose={() => setActive(null)} />
    </section>
  );
}
