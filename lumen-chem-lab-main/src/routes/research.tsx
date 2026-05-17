import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Particles } from "@/components/Particles";

export const Route = createFileRoute("/research")({
  head: () => ({
    meta: [
      { title: "Research — SFS Chemistry" },
      {
        name: "description",
        content:
          "Active research areas at the SFS Department of Chemistry — from green synthesis to quantum simulation.",
      },
      { property: "og:title", content: "Research — SFS Chemistry" },
      {
        property: "og:description",
        content: "Explore the SFS Chemistry Department's research portfolio.",
      },
    ],
  }),
  component: ResearchPage,
});

const areas = [
  {
    n: "01",
    title: "Green & Sustainable Chemistry",
    body: "Designing catalytic, atom-economical processes that minimize waste and replace hazardous reagents with safer alternatives.",
  },
  {
    n: "02",
    title: "Nano-Medicine & Drug Delivery",
    body: "Engineering functional nanoparticles capable of targeting disease tissues and releasing therapeutics on cue.",
  },
  {
    n: "03",
    title: "Organic Electronics & Energy",
    body: "Developing redox-active organic compounds for flow batteries, OLEDs, and electrocatalytic hydrogen production.",
  },
  {
    n: "04",
    title: "Polymer & Materials Science",
    body: "Bio-derived polymers, smart hydrogels, and stimuli-responsive materials for next-generation packaging and medicine.",
  },
  {
    n: "05",
    title: "Computational & Quantum Chemistry",
    body: "DFT, ab-initio, and machine-learning approaches to predict molecular behavior before stepping into the lab.",
  },
  {
    n: "06",
    title: "Analytical & Spectroscopic Methods",
    body: "Advanced FT-IR, NMR, MS, and Raman analytics supporting every research stream in the department.",
  },
];

function ResearchPage() {
  return (
    <section className="relative mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24">
      <Particles count={25} />
      <header className="relative max-w-3xl">
        <span className="font-mono text-xs uppercase tracking-[0.4em] text-[var(--neon-cyan)]">
          // research streams
        </span>
        <h1 className="mt-3 font-display text-5xl font-bold leading-tight md:text-7xl">
          Where ideas <span className="text-gradient">react</span>
        </h1>
        <p className="mt-5 text-muted-foreground">
          Six active research streams shape the work of our faculty and
          students — each one tied to a real-world problem worth solving.
        </p>
      </header>

      <div className="relative mt-16 grid gap-px overflow-hidden rounded-3xl border border-border/40 bg-border/40 md:grid-cols-2 lg:grid-cols-3">
        {areas.map((a, i) => (
          <motion.div
            key={a.n}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            className="group relative bg-background p-8 transition hover:bg-[oklch(0.18_0.05_270)]"
            data-cursor="hover"
          >
            <span className="font-mono text-xs text-[var(--neon-cyan)]">
              {a.n}
            </span>
            <h3 className="mt-4 font-display text-2xl font-semibold leading-snug">
              {a.title}
            </h3>
            <p className="mt-3 text-sm text-muted-foreground">{a.body}</p>
            <div className="mt-6 h-px w-12 bg-gradient-to-r from-[var(--neon-cyan)] to-transparent transition-all group-hover:w-24" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
