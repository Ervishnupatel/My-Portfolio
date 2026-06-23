"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/components/reveal";
import { skillGroups } from "@/lib/data";

export function Skills() {
  return (
    <section id="skills" className="relative border-y border-border bg-surface/40 py-24 sm:py-32">
      <div className="container-px">
        <div className="grid gap-10 lg:grid-cols-[1fr_2fr] lg:gap-16">
          <Reveal>
            <div className="lg:sticky lg:top-28">
              <span className="eyebrow">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" /> Capabilities
              </span>
              <h2 className="section-title mt-4 text-balance">
                A toolkit for the whole stack.
              </h2>
              <p className="mt-5 max-w-sm text-lg leading-relaxed text-muted">
                From interface design to APIs and databases — I work across the layers it
                takes to ship a complete product.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-2">
            {skillGroups.map((g, gi) => (
              <Reveal key={g.title} delay={gi * 0.05}>
                <div className="card-base group h-full p-6 transition-colors hover:border-accent/40">
                  <div className="flex items-center justify-between">
                    <h3 className="font-display text-lg font-semibold">{g.title}</h3>
                    <span className="text-xs font-medium text-faint">
                      {String(gi + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {g.items.map((it, i) => (
                      <motion.span
                        key={it}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.03 }}
                        className="rounded-lg border border-border bg-surface px-3 py-1.5 text-sm font-medium text-muted transition-colors group-hover:border-border hover:!border-accent/50 hover:!text-accent"
                      >
                        {it}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
