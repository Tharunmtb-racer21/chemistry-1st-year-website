import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import { Particles } from "@/components/Particles";
import { Mail, MapPin, Phone, Send } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — SFS Chemistry" },
      {
        name: "description",
        content:
          "Get in touch with the Department of Chemistry at SFS — admissions, research collaborations, and visits.",
      },
      { property: "og:title", content: "Contact — SFS Chemistry" },
      {
        property: "og:description",
        content: "Reach the SFS Chemistry Department.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <section className="relative mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24">
      <Particles count={30} />
      <header className="relative max-w-3xl">
        <span className="font-mono text-xs uppercase tracking-[0.4em] text-[var(--neon-cyan)]">
          // get in touch
        </span>
        <h1 className="mt-3 font-display text-5xl font-bold leading-tight md:text-7xl">
          Start a <span className="text-gradient">conversation</span>
        </h1>
        <p className="mt-5 text-muted-foreground">
          Whether you're a prospective student, a research collaborator, or
          just curious — we'd love to hear from you.
        </p>
      </header>

      <div className="relative mt-14 grid gap-8 lg:grid-cols-[1fr_1.2fr]">
        <div className="space-y-4">
          {[
            {
              icon: MapPin,
              title: "Visit",
              body: "Chemistry Block, SFS,Kumaraguru College of Technology, Coimbatore",
            },
            { icon: Mail, title: "Email", body: "chem@sfs.edu" },
            { icon: Phone, title: "Phone", body: "+91 80 1234 5678" },
          ].map((c) => (
            <div
              key={c.title}
              className="flex items-start gap-4 rounded-2xl glass p-5"
            >
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-gradient-to-br from-[var(--neon-blue)] to-[var(--neon-purple)] text-background">
                <c.icon className="h-4 w-4" />
              </span>
              <div>
                <h3 className="font-display text-sm font-semibold uppercase tracking-widest text-[var(--neon-cyan)]">
                  {c.title}
                </h3>
                <p className="mt-1 text-sm text-foreground/85">{c.body}</p>
              </div>
            </div>
          ))}
        </div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
          className="rounded-3xl glass-strong p-8 md:p-10"
        >
          <div className="grid gap-5 md:grid-cols-2">
            <Field label="Name" name="name" />
            <Field label="Email" name="email" type="email" />
          </div>
          <Field label="Subject" name="subject" />
          <label className="mt-5 block">
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
              Message
            </span>
            <textarea
              required
              rows={5}
              className="mt-2 w-full resize-none rounded-xl bg-[oklch(0.18_0.04_270/0.6)] px-4 py-3 text-sm text-foreground outline-none transition focus:ring-2 focus:ring-[var(--neon-cyan)]"
            />
          </label>
          <button
            type="submit"
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[var(--neon-blue)] to-[var(--neon-purple)] px-7 py-3 text-sm font-semibold text-background transition hover:scale-105 hover:shadow-[0_0_40px_oklch(0.65_0.27_300/0.5)]"
          >
            {sent ? "Message sent ✓" : "Send message"}
            <Send className="h-4 w-4" />
          </button>
        </motion.form>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
}: {
  label: string;
  name: string;
  type?: string;
}) {
  return (
    <label className="block">
      <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
        {label}
      </span>
      <input
        required
        name={name}
        type={type}
        className="mt-2 w-full rounded-xl bg-[oklch(0.18_0.04_270/0.6)] px-4 py-3 text-sm text-foreground outline-none transition focus:ring-2 focus:ring-[var(--neon-cyan)]"
      />
    </label>
  );
}
