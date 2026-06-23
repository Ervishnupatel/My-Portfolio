"use client";

const items = [
  "Full-Stack Development",
  "UI / UX Design",
  "React & Next.js",
  "Responsive Web",
  "API Integration",
  "Clean Code",
  "Performance",
  "Accessibility",
];

export function Marquee() {
  const loop = [...items, ...items];
  return (
    <div className="relative overflow-hidden border-y border-border bg-surface/40 py-5">
      <div className="flex w-max animate-marquee gap-10 whitespace-nowrap">
        {loop.map((it, i) => (
          <span key={i} className="flex items-center gap-10 text-sm font-medium text-muted">
            {it}
            <span className="text-accent">✦</span>
          </span>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-bg to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-bg to-transparent" />
    </div>
  );
}
