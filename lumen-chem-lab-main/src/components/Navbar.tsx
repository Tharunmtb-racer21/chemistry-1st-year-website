import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Atom } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/posters", label: "Posters" },
  { to: "/research", label: "Research" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "py-2" : "py-5"
      }`}
    >
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between px-5 md:px-8 ${
          scrolled
            ? "glass-strong rounded-2xl mx-4 md:mx-auto"
            : ""
        }`}
        style={{
          transition: "all 0.4s ease",
        }}
      >
        <Link
          to="/"
          className="flex items-center gap-2 py-3 text-foreground"
          aria-label="Home"
        >
          <span className="relative grid h-9 w-9 place-items-center rounded-full glass">
            <Atom className="h-5 w-5 text-[var(--neon-cyan)]" />
            <span className="absolute inset-0 rounded-full animate-pulse-glow bg-[var(--neon-blue)] opacity-30 -z-10" />
          </span>
          <span className="font-display text-sm font-semibold tracking-widest">
            SFS<span className="text-[var(--neon-cyan)]">·</span>CHEM
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="group relative px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "text-foreground" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
              <span className="absolute inset-x-4 -bottom-0.5 h-px origin-left scale-x-0 bg-gradient-to-r from-[var(--neon-cyan)] via-[var(--neon-blue)] to-[var(--neon-purple)] transition-transform duration-300 group-hover:scale-x-100 group-[.active]:scale-x-100" />
            </Link>
          ))}
        </nav>

        <Link
          to="/posters"
          className="hidden md:inline-flex items-center gap-2 rounded-full glass px-5 py-2 text-sm font-medium text-foreground transition-all hover:scale-105 hover:shadow-[0_0_30px_oklch(0.7_0.22_240/0.5)]"
        >
          Explore
          <span className="text-[var(--neon-cyan)]">→</span>
        </Link>

        <button
          className="grid h-10 w-10 place-items-center rounded-full glass md:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="mx-4 mt-2 glass-strong rounded-2xl p-4 md:hidden">
          <nav className="flex flex-col">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="rounded-lg px-4 py-3 text-sm font-medium text-muted-foreground hover:bg-white/5 hover:text-foreground"
                activeProps={{ className: "text-foreground bg-white/5" }}
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
