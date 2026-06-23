"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { Reveal } from "@/components/reveal";
import { experience } from "@/lib/data";

const TIMELINE_PATH =
  "M24 0 C42 9 40 24 24 33 C12 41 14 52 26 62 C44 71 42 84 24 100";
const VIEW_W = 48;
const VIEW_H = 100;

export function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const dotRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const offsetWithin = (
      el: HTMLElement,
      ancestor: HTMLElement,
      axis: "Top" | "Left"
    ) => {
      let value = 0;
      let node: HTMLElement | null = el;
      while (node && node !== ancestor) {
        value += axis === "Top" ? node.offsetTop : node.offsetLeft;
        node = node.offsetParent as HTMLElement | null;
      }
      return value;
    };

    const positionDots = () => {
      const container = containerRef.current;
      const svg = svgRef.current;
      const path = pathRef.current;
      if (!container || !svg || !path) return;

      // Dots and curve only exist at the sm breakpoint and up.
      if (!window.matchMedia("(min-width: 640px)").matches) {
        dotRefs.current.forEach((dot) => {
          if (dot) dot.style.left = "";
        });
        return;
      }

      // Sample the curve into a y -> x lookup (path coords are in viewBox units).
      const total = path.getTotalLength();
      const steps = 240;
      const pts: { x: number; y: number }[] = [];
      for (let i = 0; i <= steps; i++) {
        const p = path.getPointAtLength((total * i) / steps);
        pts.push({ x: p.x, y: p.y });
      }
      const xAtUserY = (userY: number) => {
        for (let i = 0; i < pts.length - 1; i++) {
          if (pts[i].y <= userY && userY <= pts[i + 1].y) {
            const span = pts[i + 1].y - pts[i].y || 1;
            const t = (userY - pts[i].y) / span;
            return pts[i].x + t * (pts[i + 1].x - pts[i].x);
          }
        }
        return pts[pts.length - 1].x;
      };

      const svgHeight = container.clientHeight; // svg is h-full of the container
      const svgRect = svg.getBoundingClientRect();
      const scaleX = svgRect.width / VIEW_W;
      const svgLeft = svgRect.left - container.getBoundingClientRect().left;

      dotRefs.current.forEach((dot) => {
        if (!dot || !dot.offsetParent) return;
        const parent = dot.offsetParent as HTMLElement;

        const dotCenterY = offsetWithin(dot, container, "Top") + dot.offsetHeight / 2;
        const userY = (dotCenterY / svgHeight) * VIEW_H;
        const curveX = svgLeft + xAtUserY(userY) * scaleX;

        const parentLeft = offsetWithin(parent, container, "Left");
        dot.style.left = `${curveX - parentLeft - dot.offsetWidth / 2}px`;
      });
    };

    positionDots();

    window.addEventListener("resize", positionDots);
    const raf = requestAnimationFrame(positionDots);
    if (document.fonts?.ready) document.fonts.ready.then(positionDots);

    return () => {
      window.removeEventListener("resize", positionDots);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section id="experience" className="relative py-24 sm:py-32">
      <div className="container-px">
        <Reveal>
          <span className="eyebrow">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" /> Experience
          </span>
          <h2 className="section-title mt-4 max-w-lg text-balance">
            A timeline of building and shipping.
          </h2>
        </Reveal>

        <div ref={containerRef} className="relative mt-16">
          <svg
            ref={svgRef}
            aria-hidden
            viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
            preserveAspectRatio="none"
            fill="none"
            className="absolute left-0 top-0 hidden h-full w-12 sm:left-[6.5rem] sm:block"
          >
            <path
              ref={pathRef}
              d={TIMELINE_PATH}
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              className="text-border"
            />
            <motion.path
              d={TIMELINE_PATH}
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              className="text-accent"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
            />
          </svg>

          <div className="space-y-12">
            {experience.map((e, i) => (
              <Reveal key={e.company + i} delay={i * 0.08}>
                <div className="relative grid gap-4 sm:grid-cols-[7.5rem_1fr] sm:gap-10">
                  <div className="text-sm font-medium text-faint sm:pt-1 sm:pr-4 sm:text-right">
                    {e.period}
                  </div>
                  <div className="relative sm:pl-10">
                    <span
                      ref={(el) => {
                        dotRefs.current[i] = el;
                      }}
                      className="absolute -left-1.5 top-1.5 hidden h-3 w-3 rounded-full border-2 border-bg bg-accent sm:left-[-2.4rem] sm:block"
                    />
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
