import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/lib/data";

const HOME_PROJECT_COUNT = 4;

export function Projects() {
  const featured = projects.slice(0, HOME_PROJECT_COUNT);

  return (
    <section id="work" className="relative py-24 sm:py-32">
      <div className="container-px">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <Reveal>
            <span className="eyebrow">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" /> Selected Work
            </span>
            <h2 className="section-title mt-4 max-w-md text-balance">
              Projects built as <span className="text-accent">case studies</span>.
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <Link
              href="/projects"
              className="group hidden items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-fg sm:inline-flex"
            >
              View all projects
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {featured.map((p, i) => (
            <ProjectCard key={p.slug} project={p} index={i} />
          ))}
        </div>

        <Reveal>
          <div className="mt-12 flex justify-center">
            <Link
              href="/projects"
              className="group inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium transition-all hover:border-fg hover:bg-fg hover:text-bg"
            >
              View all projects
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
