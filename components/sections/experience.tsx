"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/components/reveal";
import { experience } from "@/lib/data";

export function Experience() {
  return (
    <section id="experience" className="relative py-24 sm:py-32">
      <div className="container-px">
        <Reveal>
          <span className="eyebrow">
            <span className="h-px w-8 bg-accent" /> Experience
          </span>
          <h2 className="section-title mt-4 max-w-lg text-balance">
            A timeline of building and shipping.
          </h2>
        </Reveal>

        <div className="relative mt-16">
          <div className="absolute left-0 top-0 hidden h-full w-px bg-border sm:left-[7.5rem] sm:block" />
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute left-0 top-0 hidden h-full w-px origin-top bg-accent sm:left-[7.5rem] sm:block"
          />

          <div className="space-y-12">
            {experience.map((e, i) => (
              <Reveal key={e.company + i} delay={i * 0.08}>
                <div className="relative grid gap-4 sm:grid-cols-[7.5rem_1fr] sm:gap-10">
                  <div className="text-sm font-medium text-faint sm:pt-1 sm:text-right">
                    {e.period}
                  </div>
                  <div className="relative sm:pl-10">
                    <span className="absolute -left-1.5 top-1.5 hidden h-3 w-3 rounded-full border-2 border-bg bg-accent sm:left-[-2.4rem] sm:block" />
                    <div className="card-base p-6 transition-shadow hover:shadow-soft sm:p-7">
                      <h3 className="font-display text-xl font-semibold tracking-tight">
                        {e.role}
                      </h3>
                      <p className="mt-1 text-accent">{e.company}</p>
                      <p className="mt-3 text-sm leading-relaxed text-muted">{e.description}</p>
                      <ul className="mt-4 space-y-2">
                        {e.achievements.map((a) => (
                          <li key={a} className="flex gap-2 text-sm text-muted">
                            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                            {a}
                          </li>
                        ))}
                      </ul>
                    </div>
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
