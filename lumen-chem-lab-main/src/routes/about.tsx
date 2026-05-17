import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Particles } from "@/components/Particles";
import labImg from "@/assets/lab.jpg";
import {
  Award,
  Beaker,
  BookOpen,
  FlaskConical,
  Target,
  Telescope,
} from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About the Department — SFS Chemistry" },
      {
        name: "description",
        content:
          "Vision, mission, achievements, laboratories and research activities of the SFS Department of Chemistry.",
      },
      { property: "og:title", content: "About the Department — SFS Chemistry" },
      {
        property: "og:description",
        content:
          "Learn about the SFS Chemistry Department — vision, labs, and research.",
      },
    ],
  }),
  component: AboutPage,
});

const cards = [
  {
    icon: Telescope,
    title: "Our Vision",
    body: "To cultivate chemists who unite ethical research with planetary responsibility, pioneering the molecules that move the world forward.",
  },
  {
    icon: Target,
    title: "Our Mission",
    body: "Deliver rigorous, inclusive chemistry education and produce reproducible, high-impact research aligned with global sustainability goals.",
  },
  {
    icon: Award,
    title: "Achievements",
    body: "120+ peer-reviewed publications, multiple national research grants, and award-winning student projects in the last five years alone.",
  },
  {
    icon: Beaker,
    title: "Laboratories",
    body: "Six specialized facilities: Organic Synthesis, Analytical, Physical & Computational, Inorganic, Materials, and Bio-Chemistry.",
  },
  {
    icon: FlaskConical,
    title: "Research Activities",
    body: "Active groups in green chemistry, nano-medicine, organic electronics, polymer science, and quantum simulation.",
  },
  {
    icon: BookOpen,
    title: "Publications",
    body: "Faculty regularly publish in Nature Chemistry, JACS, Angewandte Chemie, and the Royal Society of Chemistry journals.",
  },
];

function AboutPage() {
  return (
    <section className="relative mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24">
      <Particles count={25} />
      <header className="relative max-w-3xl">
        <span className="font-mono text-xs uppercase tracking-[0.4em] text-[var(--neon-cyan)]">
          // about us
        </span>
        <h1 className="mt-3 font-display text-5xl font-bold leading-tight md:text-7xl">
          The science of <span className="text-gradient">discovery</span>
        </h1>
        <p className="mt-5 text-muted-foreground">
          Inside the SFS Department of Chemistry — a place where lectures end
          and experiments begin, where every flask carries a question worth
          answering.
        </p>
      </header>

      <div className="relative mt-14 overflow-hidden rounded-3xl glass p-2">
        <img
          src={labImg}
          alt="Chemistry lab"
          loading="lazy"
          width={1536}
          height={1024}
          className="aspect-[21/9] w-full rounded-2xl object-cover"
        />
      </div>

      <div className="relative mt-20 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {cards.map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: i * 0.08 }}
            className="group relative overflow-hidden rounded-2xl glass p-7 transition hover:-translate-y-1 hover:shadow-[0_20px_60px_-20px_oklch(0.65_0.27_300/0.5)]"
            data-cursor="hover"
          >
            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[var(--neon-blue)] opacity-0 blur-3xl transition group-hover:opacity-30" />
            <c.icon className="h-7 w-7 text-[var(--neon-cyan)]" />
            <h3 className="mt-5 font-display text-xl font-semibold">
              {c.title}
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">{c.body}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
