"use client";

import { Reveal } from "@/components/reveal";
import { process } from "@/lib/data";

export function Process() {
  return (
    <section
      id="process"
      className="relative border-y border-border bg-surface/40 py-24 sm:py-32"
    >
      <div className="container-px">
        <Reveal>
          <span className="eyebrow">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" /> How I Work
          </span>
          <h2 className="section-title mt-4 max-w-xl text-balance">
            From idea to launch, a process that ships.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {process.map((p, i) => (
            <Reveal key={p.step} delay={i * 0.06} className="bg-card">
              <div className="group relative h-full overflow-hidden p-7 transition-colors hover:bg-surface">
                <span className="font-display text-5xl font-semibold text-border transition-colors group-hover:text-accent/30">
                  {p.step}
                </span>
                <h3 className="mt-4 font-display text-xl font-semibold tracking-tight">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{p.description}</p>
                <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-accent transition-all duration-500 group-hover:w-full" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
