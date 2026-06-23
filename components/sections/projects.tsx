"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Github, Target, TrendingUp } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { projects, type Project } from "@/lib/data";

const categories = ["All", "Web App", "Frontend", "UI Clone", "Game"] as const;

export function Projects() {
  const [filter, setFilter] = useState<(typeof categories)[number]>("All");

  const filtered = useMemo(
    () => (filter === "All" ? projects : projects.filter((p) => p.category === filter)),
    [filter]
  );

  return (
    <section id="work" className="relative py-24 sm:py-32">
      <div className="container-px">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <Reveal>
            <span className="eyebrow">
              <span className="h-px w-8 bg-accent" /> Selected Work
            </span>
            <h2 className="section-title mt-4 max-w-md text-balance">
              Projects built as <span className="text-accent">case studies</span>.
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="flex flex-wrap gap-2">
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => setFilter(c)}
                  className={`rounded-full border px-4 py-2 text-sm font-medium transition-all ${
                    filter === c
                      ? "border-fg bg-fg text-bg"
                      : "border-border text-muted hover:border-accent/50 hover:text-fg"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </Reveal>
        </div>

        <motion.div layout className="mt-14 grid gap-6 md:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {filtered.map((p, i) => (
              <ProjectCard key={p.slug} project={p} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.5, delay: (index % 2) * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="group card-base overflow-hidden transition-shadow duration-500 hover:shadow-lift"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        <div className="absolute left-4 top-4 flex gap-2">
          <span className="rounded-full bg-black/40 px-3 py-1 text-xs font-medium text-white backdrop-blur">
            {project.category}
          </span>
        </div>
        <div className="absolute bottom-4 right-4 flex translate-y-2 gap-2 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              aria-label="Live demo"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-black transition-transform hover:scale-110"
            >
              <ArrowUpRight className="h-4 w-4" />
            </a>
          )}
          {project.code && (
            <a
              href={project.code}
              target="_blank"
              rel="noreferrer"
              aria-label="Source code"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-black transition-transform hover:scale-110"
            >
              <Github className="h-4 w-4" />
            </a>
          )}
        </div>
      </div>

      <div className="p-6 sm:p-7">
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-display text-xl font-semibold tracking-tight">{project.title}</h3>
          <span className="text-sm text-faint">{project.year}</span>
        </div>
        <p className="mt-2 text-sm leading-relaxed text-muted">{project.summary}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="rounded-full border border-border bg-surface px-3 py-1 text-xs text-muted"
            >
              {t}
            </span>
          ))}
        </div>

        <button
          onClick={() => setOpen((o) => !o)}
          className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-accent"
        >
          {open ? "Hide case study" : "Read case study"}
          <ArrowUpRight
            className={`h-4 w-4 transition-transform ${open ? "rotate-90" : ""}`}
          />
        </button>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              <div className="mt-5 space-y-4 border-t border-border pt-5">
                <div className="flex gap-3">
                  <Target className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-faint">
                      Problem
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-muted">{project.problem}</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <TrendingUp className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-faint">
                      Result
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-muted">{project.result}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.article>
  );
}
