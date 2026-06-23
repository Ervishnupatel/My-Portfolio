"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Reveal } from "@/components/reveal";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/lib/data";

const categories = ["All", "Web App", "Frontend", "UI Clone", "Game"] as const;

export function ProjectsGallery() {
  const [filter, setFilter] = useState<(typeof categories)[number]>("All");

  const filtered = useMemo(
    () => (filter === "All" ? projects : projects.filter((p) => p.category === filter)),
    [filter]
  );

  return (
    <div className="container-px">
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

      <motion.div layout className="mt-10 grid gap-6 md:grid-cols-2">
        <AnimatePresence mode="popLayout">
          {filtered.map((p, i) => (
            <ProjectCard key={p.slug} project={p} index={i} />
          ))}
        </AnimatePresence>
      </motion.div>

      {filtered.length === 0 && (
        <p className="mt-10 text-center text-sm text-muted">No projects in this category yet.</p>
      )}
    </div>
  );
}
