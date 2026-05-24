import { Link } from "@tanstack/react-router";
import { Atom, Mail, MapPin, Github, Twitter, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative mt-32 overflow-hidden border-t border-border/40">
      <div className="pointer-events-none absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-[var(--neon-cyan)] to-transparent" />
      <div className="pointer-events-none absolute -bottom-40 left-1/2 h-80 w-[800px] -translate-x-1/2 rounded-full bg-[var(--neon-purple)] opacity-20 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6 py-16 md:px-10">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2">
              <span className="grid h-10 w-10 place-items-center rounded-full glass">
                <Atom className="h-5 w-5 text-[var(--neon-cyan)]" />
              </span>
              <div className="flex flex-col">
  <span className="font-display text-lg font-semibold tracking-wide">
    SFS · Department of Chemistry
  </span>

  <span className="text-xs tracking-[0.3em] text-[var(--neon-cyan)] uppercase">
    Chem Talks
  </span>
</div>
            </div>
            <p className="mt-4 max-w-md text-sm text-muted-foreground">
              A digital magazine celebrating molecular discovery, sustainable
              science, and the brilliant minds shaping tomorrow's chemistry.
            </p>
            <div className="mt-6 flex gap-3">
              {[Github, Twitter, Instagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="grid h-10 w-10 place-items-center rounded-full glass transition hover:scale-110 hover:shadow-[0_0_20px_oklch(0.7_0.22_240/0.6)]"
                  aria-label="social"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-widest text-[var(--neon-cyan)]">
              Explore
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {[
                { to: "/about", label: "About" },
                { to: "/posters", label: "Posters" },
                { to: "/research", label: "Research" },
                { to: "/gallery", label: "Gallery" },
              ].map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="transition hover:text-foreground">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-widest text-[var(--neon-cyan)]">
              Reach Us
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 text-[var(--neon-purple)]" />
                <span>SFS College Campus, Chemistry Block</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="mt-0.5 h-4 w-4 text-[var(--neon-purple)]" />
                <a href="mailto:chem@sfs.edu" className="hover:text-foreground">
                  chem@sfs.edu
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-border/30 pt-6 text-xs text-muted-foreground md:flex-row">
          <p>
            © {new Date().getFullYear()} Department of Chemistry, SFS. Crafted
            with curiosity.
          </p>
          <p className="font-mono tracking-wider">
            <span className="text-[var(--neon-cyan)]">{"<"}</span>
            molecular_magazine by THARUN N E ---25BEI057 
            <span className="text-[var(--neon-cyan)]">{" />"}</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
