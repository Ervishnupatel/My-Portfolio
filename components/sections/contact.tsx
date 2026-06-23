"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Github, Linkedin, Mail, MapPin, MessageCircle, Send } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { profile } from "@/lib/data";

const channels = [
  { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { icon: Linkedin, label: "LinkedIn", value: "Connect", href: profile.linkedin },
  { icon: Github, label: "GitHub", value: `@${profile.githubUser}`, href: profile.github },
  { icon: MessageCircle, label: "WhatsApp", value: profile.phone, href: profile.whatsapp },
];

export function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio enquiry from ${form.name || "someone"}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="container-px">
        <div className="card-base relative overflow-hidden p-7 sm:p-12">
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-accent/15 blur-[100px]" />

          <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
            <div>
              <Reveal>
                <span className="eyebrow">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" /> Contact
                </span>
                <h2 className="section-title mt-4 max-w-md text-balance">
                  Let&apos;s build something people love.
                </h2>
                <p className="mt-5 max-w-md text-lg leading-relaxed text-muted">
                  Have a project, a role, or just an idea? My inbox is always open — I&apos;ll get
                  back to you within a day.
                </p>
              </Reveal>

              <div className="mt-9 grid gap-3 sm:grid-cols-2">
                {channels.map((c, i) => (
                  <Reveal key={c.label} delay={i * 0.05}>
                    <a
                      href={c.href}
                      target={c.href.startsWith("http") ? "_blank" : undefined}
                      rel="noreferrer"
                      className="group flex items-center gap-3 rounded-2xl border border-border bg-surface p-4 transition-colors hover:border-accent/50"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
                        <c.icon className="h-4 w-4" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs text-faint">{c.label}</p>
                        <p className="truncate text-sm font-medium">{c.value}</p>
                      </div>
                    </a>
                  </Reveal>
                ))}
              </div>

              <Reveal delay={0.2}>
                <div className="mt-6 flex items-center gap-2 text-sm text-faint">
                  <MapPin className="h-4 w-4" />
                  {profile.location}
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.1}>
              <form onSubmit={onSubmit} className="space-y-4">
                <Field
                  label="Your name"
                  value={form.name}
                  onChange={(v) => setForm({ ...form, name: v })}
                  placeholder="Jane Doe"
                  type="text"
                />
                <Field
                  label="Email"
                  value={form.email}
                  onChange={(v) => setForm({ ...form, email: v })}
                  placeholder="jane@company.com"
                  type="email"
                />
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-muted">Message</label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell me about your project…"
                    className="w-full resize-none rounded-2xl border border-border bg-surface px-4 py-3 text-sm outline-none transition-colors placeholder:text-faint focus:border-accent"
                  />
                </div>
                <motion.button
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-fg px-6 py-3.5 text-sm font-medium text-bg transition-colors"
                >
                  {sent ? (
                    <>
                      <Check className="h-4 w-4" /> Opening your mail app…
                    </>
                  ) : (
                    <>
                      Send message <Send className="h-4 w-4" />
                    </>
                  )}
                </motion.button>
              </form>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  value,
  onChange,
  placeholder,
  type,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder: string;
  type: string;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium text-muted">{label}</label>
      <input
        required
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-2xl border border-border bg-surface px-4 py-3 text-sm outline-none transition-colors placeholder:text-faint focus:border-accent"
      />
    </div>
  );
}
