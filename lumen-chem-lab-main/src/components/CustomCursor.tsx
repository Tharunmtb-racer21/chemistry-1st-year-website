import { useEffect, useRef, useState } from "react";

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [hovering, setHovering] = useState(false);
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mouseX = 0,
      mouseY = 0,
      ringX = 0,
      ringY = 0;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.transform = `translate3d(${mouseX - 4}px, ${mouseY - 4}px, 0)`;

      const t = e.target as HTMLElement;
      const interactive = t.closest(
        "a, button, [data-cursor='hover'], input, textarea, select",
      );
      setHovering(!!interactive);
    };

    const animate = () => {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;
      ring.style.transform = `translate3d(${ringX - 20}px, ${ringY - 20}px, 0)`;
      requestAnimationFrame(animate);
    };
    animate();

    const down = () => setClicked(true);
    const up = () => setClicked(false);

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mousedown", down);
    window.addEventListener("mouseup", up);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", down);
      window.removeEventListener("mouseup", up);
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 z-[9999] hidden h-2 w-2 rounded-full bg-[var(--neon-cyan)] md:block"
        style={{
          boxShadow:
            "0 0 12px var(--neon-cyan), 0 0 24px var(--neon-blue), 0 0 40px var(--neon-purple)",
        }}
      />
      <div
        ref={ringRef}
        className="pointer-events-none fixed left-0 top-0 z-[9998] hidden h-10 w-10 rounded-full border transition-[width,height,border-color,opacity,transform] duration-200 ease-out md:block"
        style={{
          borderColor: hovering ? "var(--neon-purple)" : "var(--neon-blue)",
          opacity: hovering ? 0.9 : 0.6,
          scale: clicked ? "0.7" : hovering ? "1.6" : "1",
          backgroundColor: hovering
            ? "oklch(0.65 0.27 300 / 0.08)"
            : "transparent",
          boxShadow: hovering
            ? "0 0 30px oklch(0.65 0.27 300 / 0.6)"
            : "0 0 20px oklch(0.7 0.22 240 / 0.4)",
        }}
      />
    </>
  );
}
