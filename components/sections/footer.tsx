"use client";

import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";
import { navLinks, profile } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface/40">
      <div className="container-px py-16">
        <div className="flex flex-col justify-between gap-10 lg:flex-row">
          <div className="max-w-sm">
            <a href="#home" className="font-display text-2xl font-semibold tracking-tight">
              {profile.name}
              <span className="text-accent">.</span>
            </a>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              {profile.role} crafting fast, elegant, human-centered web experiences.
            </p>
            <div className="mt-6 flex gap-3">
              {[
                { icon: Github, href: profile.github, label: "GitHub" },
                { icon: Linkedin, href: profile.linkedin, label: "LinkedIn" },
                { icon: Mail, href: `mailto:${profile.email}`, label: "Email" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  aria-label={s.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-border transition-colors hover:border-accent/60 hover:text-accent"
                >
                  <s.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-12">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-faint">Navigate</p>
              <ul className="mt-4 space-y-2.5">
                {navLinks.map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      className="text-sm text-muted transition-colors hover:text-fg"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-faint">Get in touch</p>
              <ul className="mt-4 space-y-2.5 text-sm text-muted">
                <li>{profile.email}</li>
                <li>{profile.phone}</li>
                <li>{profile.location}</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-sm text-faint">
            © {new Date().getFullYear()} {profile.fullName}. All rights reserved.
          </p>
          <a
            href="#home"
            className="group inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-fg"
          >
            Back to top
            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-border transition-transform group-hover:-translate-y-0.5">
              <ArrowUp className="h-4 w-4" />
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}
