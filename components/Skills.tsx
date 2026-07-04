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
        {skills.map((group) => (
          <div
            key={group.category}
            className="bg-[#111] border border-white/5 rounded-xl p-6 card-hover"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="text-2xl">{group.icon}</span>
              <h3 className="text-white font-medium">{group.category}</h3>
            </div>

            <div className="space-y-4">
              {group.items.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-1.5">
                    <span className="text-sm text-neutral-300 font-mono">
                      {skill.name}
                    </span>
                    <span className="text-xs text-neutral-600">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="h-0.5 bg-white/5 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-blue-500 to-blue-400 rounded-full skill-bar-fill"
                      style={{ width: inView ? `${skill.level}%` : "0%" }}
                    />
                  </div>
                </div>
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
