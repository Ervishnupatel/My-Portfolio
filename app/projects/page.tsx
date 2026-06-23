import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { ScrollProgress } from "@/components/scroll-progress";
import { Reveal } from "@/components/reveal";
import { ProjectsGallery } from "@/components/sections/projects-gallery";
import { Footer } from "@/components/sections/footer";
import { profile } from "@/lib/data";

export const metadata: Metadata = {
  title: `Projects — ${profile.name}`,
  description: "A complete collection of projects, case studies and experiments.",
};

export default function ProjectsPage() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <div className="grain" aria-hidden />
      <main className="relative z-10">
        <section className="relative pb-16 pt-32 sm:pt-40">
          <div className="container-px">
            <Reveal>
              <Link
                href="/#work"
                className="group inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-fg"
              >
                <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                Back to home
              </Link>
              <span className="eyebrow mt-8">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" /> All Work
              </span>
              <h1 className="section-title mt-4 max-w-2xl text-balance">
                Everything I&apos;ve <span className="text-accent">designed & built</span>.
              </h1>
              <p className="mt-5 max-w-xl text-muted">
                A complete collection of my projects — from full-stack web apps to UI clones and
                games. Filter by category and dive into the case studies.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="pb-24 sm:pb-32">
          <ProjectsGallery />
        </section>
      </main>
      <Footer />
    </>
  );
}
