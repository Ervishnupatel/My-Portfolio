"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, GitBranch, Github, Star, Users } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { profile } from "@/lib/data";

// Deterministic pseudo-random contribution grid (no external dependency).
function buildGrid() {
  const weeks = 26;
  const days = 7;
  const cells: number[] = [];
  let seed = 7;
  const rnd = () => {
    seed = (seed * 9301 + 49297) % 233280;
    return seed / 233280;
  };
  for (let i = 0; i < weeks * days; i++) {
    const r = rnd();
    cells.push(r > 0.78 ? 4 : r > 0.6 ? 3 : r > 0.42 ? 2 : r > 0.22 ? 1 : 0);
  }
  return cells;
}

const levels = [
  "bg-border",
  "bg-accent/25",
  "bg-accent/45",
  "bg-accent/70",
  "bg-accent",
];

const ghStats = [
  { icon: GitBranch, label: "Public repos", value: "15+" },
  { icon: Star, label: "Languages used", value: "8+" },
  { icon: Users, label: "Building since", value: "2024" },
];

export function GithubSection() {
  const cells = buildGrid();

  return (
    <section className="relative py-24 sm:py-32">
      <div className="container-px">
        <div className="card-base overflow-hidden p-7 sm:p-10">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
            <Reveal>
              <span className="eyebrow">
                <span className="h-px w-8 bg-accent" /> Open Source
              </span>
              <h2 className="section-title mt-4 max-w-md text-balance">
                Code, committed consistently.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:border-accent/60 hover:text-accent"
              >
                <Github className="h-4 w-4" />
                @{profile.githubUser}
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </Reveal>
          </div>

          <Reveal delay={0.15}>
            <div className="mt-10 overflow-x-auto">
              <div className="grid w-max grid-flow-col grid-rows-7 gap-1.5">
                {cells.map((lvl, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: (i % 40) * 0.004 }}
                    className={`h-3.5 w-3.5 rounded-[3px] ${levels[lvl]}`}
                  />
                ))}
              </div>
            </div>
          </Reveal>

          <div className="mt-8 flex items-center gap-2 text-xs text-faint">
            Less
            {levels.map((l, i) => (
              <span key={i} className={`h-3 w-3 rounded-[3px] ${l}`} />
            ))}
            More
          </div>

          <div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-3">
            {ghStats.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.06} className="bg-card">
                <div className="flex items-center gap-4 p-6">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    <s.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-display text-2xl font-semibold tracking-tight">
                      {s.value}
                    </p>
                    <p className="text-sm text-muted">{s.label}</p>
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
