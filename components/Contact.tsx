"use client";

import { useState } from "react";
import { siteConfig } from "@/data/portfolio";
import { SectionHeader } from "./Skills";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    // Replace this with your actual form submission logic
    // e.g. Formspree, EmailJS, or your own API route
    await new Promise((r) => setTimeout(r, 1000));
    setStatus("sent");
  };

  const socials = [
    { label: "Email", value: siteConfig.email, href: `mailto:${siteConfig.email}`, icon: MailIcon },
    { label: "GitHub", value: "https://github.com/kayes-2003", href: siteConfig.github, icon: GithubIcon },
    { label: "LinkedIn", value: "https://linkedin.com/in/syed-kayes-mahmud-b722b5347   ", href: siteConfig.linkedin, icon: LinkedinIcon },
    { label: "Website", value: siteConfig.website, href: siteConfig.website, icon: GlobeIcon },
  ];

  return (
    <section id="contact" className="py-24 max-w-6xl mx-auto px-6">
      <SectionHeader
        eyebrow="Contact"
        title="Let's work together"
        desc="Open to full-time roles, contract work, and interesting side projects."
      />

      <div className="grid md:grid-cols-2 gap-12 mt-12">
        {/* Contact info */}
        <div>
          <p className="text-neutral-400 leading-relaxed mb-8">
            Whether you have a product idea, need an extra engineer, or just want to
            talk tech — drop me a line. I typically respond within 24 hours.
          </p>

          <div className="space-y-4">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 group"
              >
                <div className="w-9 h-9 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center text-neutral-400 group-hover:text-blue-400 group-hover:border-blue-400/20 group-hover:bg-blue-400/5 transition-all duration-150">
                  <s.icon />
                </div>
                <div>
                  <div className="text-xs text-neutral-600">{s.label}</div>
                  <div className="text-sm text-neutral-300 group-hover:text-white transition-colors">
                    {s.value}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Form */}
        <div className="bg-[#111] border border-white/5 rounded-xl p-6">
          {status === "sent" ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-8">
              <div className="w-12 h-12 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center mb-4">
                <span className="text-green-400 text-xl">✓</span>
              </div>
              <h3 className="text-white font-medium mb-2">Message sent!</h3>
              <p className="text-neutral-400 text-sm">
                Thanks for reaching out. I'll get back to you shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-neutral-500 mb-1.5">
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Jane Doe"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2.5 text-sm text-white placeholder:text-neutral-600 focus:outline-none focus:border-blue-500/50 focus:bg-blue-500/5 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs text-neutral-500 mb-1.5">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="jane@company.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2.5 text-sm text-white placeholder:text-neutral-600 focus:outline-none focus:border-blue-500/50 focus:bg-blue-500/5 transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs text-neutral-500 mb-1.5">
                  Message
                </label>
                <textarea
                  required
                  rows={5}
                  placeholder="I'd love to discuss a project..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2.5 text-sm text-white placeholder:text-neutral-600 focus:outline-none focus:border-blue-500/50 focus:bg-blue-500/5 transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 disabled:opacity-50 disabled:cursor-not-allowed text-white text-sm font-medium transition-colors duration-150"
              >
                {status === "sending" ? "Sending..." : "Send message"}
              </button>

              <p className="text-xs text-neutral-600 text-center">
                Or email directly at{" "}
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-neutral-400 hover:text-white transition-colors"
                >
                  {siteConfig.email}
                </a>
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function MailIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m2 7 10 7 10-7" />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function GlobeIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
    </svg>
  );
}
