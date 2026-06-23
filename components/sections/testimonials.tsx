"use client";

import { Quote } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { testimonials } from "@/lib/data";

export function Testimonials() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="container-px">
        <Reveal>
          <span className="eyebrow">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" /> Social Proof
          </span>
          <h2 className="section-title mt-4 max-w-lg text-balance">
            Words from people I&apos;ve worked with.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <figure className="card-base flex h-full flex-col p-7 transition-shadow hover:shadow-lift">
                <Quote className="h-7 w-7 text-accent/40" />
                <blockquote className="mt-4 flex-1 text-[0.975rem] leading-relaxed text-muted">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-accent/10 font-display text-sm font-semibold text-accent">
                    {t.name
                      .split(" ")
                      .map((w) => w[0])
                      .join("")
                      .slice(0, 2)}
                  </div>
                  <div>
                    <p className="text-sm font-semibold">{t.name}</p>
                    <p className="text-xs text-faint">{t.title}</p>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
