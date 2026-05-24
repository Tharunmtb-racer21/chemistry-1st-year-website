import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import heroBg from "@/assets/hero-bg.jpg";
import labImg from "@/assets/lab.jpg";
import { Particles, FloatingMolecules } from "@/components/Particles";
import { PosterCard } from "@/components/PosterCard";
import { PosterModal } from "@/components/PosterModal";
import { posters, type Poster } from "@/data/posters";
import { Atom, Beaker, Microscope, Sparkles, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SFS Chemistry — Molecular Magazine" },
      {
        name: "description",
        content:
          "Department of Chemistry, SFS,CHEM TALKS — explore poster presentations, research and a futuristic digital magazine of molecular discovery.",
      },
      { property: "og:title", content: "SFS Chemistry — Molecular Magazine" },
      {
        property: "og:description",
        content:
          "A cinematic digital magazine from the SFS Chemistry Department for CHEM TALK 2026",
      },
    ],
  }),
  component: Index,
});

function Index() {
  const [active, setActive] = useState<Poster | null>(null);

  return (
    <>
      <Hero />
      <Stats />
      <PostersTeaser onOpen={setActive} />
      <AboutPreview />
      <CTASection />
      <PosterModal poster={active} onClose={() => setActive(null)} />
    </>
  );
}

function Hero() {
  return (
    <section className="relative -mt-20 flex min-h-screen items-center overflow-hidden pt-20">
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt=""
          width={1920}
          height={1080}
          className="h-full w-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
        <div className="absolute inset-0 bg-grid opacity-30" />
      </div>
      <FloatingMolecules />
      <Particles count={50} />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.3em] text-[var(--neon-cyan)]">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--neon-cyan)] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--neon-cyan)]" />
            </span>
            Digital Magazine · 2026 Edition BY THARUN NE---25BEI057
          </span>

          <h1 className="mt-6 font-display text-5xl font-bold leading-[1.05] tracking-tighter md:text-7xl lg:text-8xl">
            <span className="text-gradient text-glow">Department of</span>
            <br />
            <span className="text-gradient text-glow">Chemistry,CHEM TALKS</span>{" "}
            <span className="text-foreground/70">—</span>{" "}
            <span className="bg-gradient-to-r from-[var(--neon-cyan)] via-[var(--neon-blue)] to-[var(--neon-purple)] bg-clip-text text-transparent">
              SFS
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-base text-foreground/75 md:text-lg">
            A cinematic showcase of our CHEM TALKS ---student poster presentations, breakthrough
            research, and the molecular curiosity that shapes tomorrow's
            science BY THARUN NE---25BEI057
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              to="/posters"
              className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-gradient-to-r from-[var(--neon-blue)] to-[var(--neon-purple)] px-7 py-4 text-sm font-semibold text-background shadow-[0_0_40px_oklch(0.7_0.22_240/0.4)] transition hover:scale-[1.03] hover:shadow-[0_0_60px_oklch(0.65_0.27_300/0.6)]"
            >
              <span className="absolute inset-0 animate-shimmer" />
              <span className="relative">Explore Posters</span>
              <ArrowRight className="relative h-4 w-4 transition group-hover:translate-x-1" />
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 rounded-full glass px-7 py-4 text-sm font-medium transition hover:bg-white/10"
            >
              About the Department
            </Link>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs uppercase tracking-[0.4em] text-muted-foreground md:flex">
        <span>Scroll</span>
        <span className="h-12 w-px animate-pulse bg-gradient-to-b from-[var(--neon-cyan)] to-transparent" />
      </div>
    </section>
  );
}

function Stats() {
  const items = [
    { k: "24+", v: "Poster Presentations" },
    { k: "12", v: "Active Research Labs" },
    { k: "98%", v: "Student Engagement" },
    { k: "40+", v: "Years of Excellence" },
  ];
  return (
    <section className="relative mx-auto max-w-7xl px-6 py-20 md:px-10">
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {items.map((it, i) => (
          <motion.div
            key={it.v}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="rounded-2xl glass p-6 text-center"
          >
            <div className="font-display text-4xl font-bold text-gradient md:text-5xl">
              {it.k}
            </div>
            <div className="mt-2 text-xs uppercase tracking-widest text-muted-foreground">
              {it.v}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function PostersTeaser({ onOpen }: { onOpen: (p: Poster) => void }) {
  return (
    <section className="relative mx-auto max-w-7xl px-6 py-24 md:px-10">
      <Particles count={20} />
      <div className="relative mb-14 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
        <div>
          <span className="font-mono text-xs uppercase tracking-[0.4em] text-[var(--neon-cyan)]">
            // poster gallery
          </span>
          <h2 className="mt-3 font-display text-4xl font-bold leading-tight md:text-6xl">
            Molecules in <span className="text-gradient">motion</span>
          </h2>
          <p className="mt-4 max-w-xl text-muted-foreground">
            Hand-picked poster presentations from this year's chemistry
            cohort — hover, tilt, and dive in.
          </p>
        </div>
        <Link
          to="/posters"
          className="group inline-flex items-center gap-2 text-sm font-medium text-[var(--neon-cyan)]"
        >
          View all
          <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
        </Link>
      </div>

      <div className="relative grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {posters.slice(0, 6).map((p, i) => (
          <PosterCard key={p.id} poster={p} onOpen={onOpen} index={i} />
        ))}
      </div>
    </section>
  );
}

function AboutPreview() {
  const features = [
    {
      icon: Atom,
      title: "Pioneering Research",
      body: "From green synthesis to quantum simulation, our labs push frontiers.",
    },
    {
      icon: Beaker,
      title: "World-class Laboratories",
      body: "Six specialized labs equipped for modern analytical and synthetic work.",
    },
    {
      icon: Microscope,
      title: "Mentorship First",
      body: "Faculty-led guidance turning curiosity into peer-reviewed contributions.",
    },
    {
      icon: Sparkles,
      title: "Future-ready Graduates",
      body: "Alumni leading innovation in pharma, energy, and materials industries.",
    },
  ];

  return (
    <section className="relative mx-auto max-w-7xl px-6 py-24 md:px-10">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-br from-[var(--neon-blue)] to-[var(--neon-purple)] opacity-30 blur-3xl" />
          <div className="overflow-hidden rounded-3xl glass p-2">
            <img
              src={labImg}
              alt="Chemistry laboratory"
              loading="lazy"
              width={1536}
              height={1024}
              className="rounded-2xl object-cover"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="font-mono text-xs uppercase tracking-[0.4em] text-[var(--neon-cyan)]">
            // the department
          </span>
          <h2 className="mt-3 font-display text-4xl font-bold md:text-5xl">
            Where curiosity meets <span className="text-gradient">catalysis</span>
          </h2>
          <p className="mt-5 text-muted-foreground">
            The SFS Department of Chemistry combines four decades of academic
            tradition with an obsession for what's next — building scientists
            who think in molecules and lead with rigor.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {features.map((f) => (
              <div key={f.title} className="rounded-2xl glass p-5">
                <f.icon className="h-6 w-6 text-[var(--neon-cyan)]" />
                <h3 className="mt-3 font-display text-base font-semibold">
                  {f.title}
                </h3>
                <p className="mt-1 text-xs text-muted-foreground">{f.body}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="relative mx-auto max-w-6xl px-6 py-24 md:px-10">
      <div className="relative overflow-hidden rounded-3xl glass-strong p-12 text-center md:p-20">
        <div className="absolute -top-40 left-1/2 h-80 w-[700px] -translate-x-1/2 rounded-full bg-[var(--neon-purple)] opacity-30 blur-[120px]" />
        <Particles count={30} />
        <div className="relative">
          <h2 className="mx-auto max-w-3xl font-display text-4xl font-bold md:text-6xl">
            Step into the{" "}
            <span className="text-gradient">molecular magazine</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-muted-foreground">
            Read every poster in full, meet the researchers behind the work,
            and tour our labs in a cinematic, scroll-driven experience.
          </p>
          <Link
            to="/posters"
            className="mt-10 inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[var(--neon-blue)] to-[var(--neon-purple)] px-8 py-4 text-sm font-semibold text-background transition hover:scale-105 hover:shadow-[0_0_60px_oklch(0.65_0.27_300/0.6)]"
          >
            Enter the Gallery
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
