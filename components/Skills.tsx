"use client";

import { useEffect, useRef, useState } from "react";
import { skills } from "@/data/portfolio";

export default function Skills() {
  const ref = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} id="skills" className="py-24 max-w-6xl mx-auto px-6">
      <SectionHeader
        eyebrow="Skills"
        title="Tech I work with"
        desc="A full stack toolkit — from pixel-perfect UIs to distributed backend systems."
      />

      <div className="grid md:grid-cols-2 gap-6 mt-12">
        {skills.map((group, groupIndex) => (
          <div
            key={group.category}
            className="bg-[#111] border border-white/5 rounded-xl p-6 card-hover"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="text-2xl">{group.icon}</span>
              <h3 className="text-white font-medium">{group.category}</h3>
            </div>

            <div className="flex flex-wrap gap-2">
              {group.items.map((skill, i) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 rounded-full text-sm font-mono text-neutral-300 bg-white/5 border border-white/10 transition-all duration-300"
                  style={{
                    opacity: inView ? 1 : 0,
                    transform: inView ? "translateY(0)" : "translateY(4px)",
                    transitionDelay: inView ? `${groupIndex * 60 + i * 40}ms` : "0ms",
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  desc,
}: {
  eyebrow: string;
  title: string;
  desc?: string;
}) {
  return (
    <div className="mb-2">
      <span className="text-xs font-mono text-blue-400 tracking-widest uppercase">
        {eyebrow}
      </span>
      <h2 className="text-3xl md:text-4xl font-semibold text-white mt-2 mb-3">
        {title}
      </h2>
      {desc && <p className="text-neutral-400 max-w-lg">{desc}</p>}
    </div>
  );
}