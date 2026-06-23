"use client";

import { Reveal } from "@/components/reveal";
import { Counter } from "@/components/counter";
import { about, stats } from "@/lib/data";

export function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="container-px">
        <Reveal>
          <span className="eyebrow">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" /> About
          </span>
        </Reveal>

        <div className="mt-8 grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <Reveal>
            <h2 className="section-title max-w-xl text-balance">
              {about.intro}
            </h2>
          </Reveal>

          <div className="space-y-5">
            {about.paragraphs.map((p, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <p className="text-lg leading-relaxed text-muted">{p}</p>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.06} className="bg-card">
              <div className="flex h-full flex-col gap-1 p-6 sm:p-8">
                <span className="font-display text-3xl font-semibold tracking-tight text-accent sm:text-4xl">
                  <Counter value={s.value} suffix={s.suffix} />
                </span>
                <span className="text-sm text-muted">{s.label}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
