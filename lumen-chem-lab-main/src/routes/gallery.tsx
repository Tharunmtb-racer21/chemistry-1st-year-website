import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Particles } from "@/components/Particles";
import { posters } from "@/data/posters";
import labImg from "@/assets/lab.jpg";
import heroBg from "@/assets/hero-bg.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — SFS Chemistry" },
      {
        name: "description",
        content:
          "A visual gallery of poster art, laboratory life, and molecular imagery from the SFS Chemistry Department.",
      },
      { property: "og:title", content: "Gallery — SFS Chemistry" },
      {
        property: "og:description",
        content: "Browse the SFS Chemistry visual gallery.",
      },
    ],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  const images = [
    { src: heroBg, alt: "Molecular cluster", h: "row-span-2" },
    ...posters.map((p) => ({ src: p.image, alt: p.title, h: "" })),
    { src: labImg, alt: "Laboratory", h: "col-span-2" },
  ];
  return (
    <section className="relative mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24">
      <Particles count={25} />
      <header className="relative max-w-3xl">
        <span className="font-mono text-xs uppercase tracking-[0.4em] text-[var(--neon-cyan)]">
          // visual archive
        </span>
        <h1 className="mt-3 font-display text-5xl font-bold leading-tight md:text-7xl">
          A gallery of <span className="text-gradient">light & matter</span>
        </h1>
      </header>

      <div className="relative mt-12 grid auto-rows-[220px] grid-cols-2 gap-4 md:grid-cols-4">
        {images.map((img, i) => (
          <motion.figure
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.6, delay: (i % 6) * 0.05 }}
            className={`group relative overflow-hidden rounded-2xl glass ${img.h}`}
            data-cursor="hover"
          >
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
            <figcaption className="absolute inset-x-0 bottom-0 translate-y-2 p-4 text-xs text-foreground opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100">
              {img.alt}
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </section>
  );
}
