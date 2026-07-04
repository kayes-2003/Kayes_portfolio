import { experience } from "@/data/portfolio";
import { SectionHeader } from "./Skills";

export default function Experience() {
  return (
    <section id="experience" className="py-24 max-w-6xl mx-auto px-6">
      <SectionHeader
        eyebrow="Experience"
        title="Where I've worked"
        desc="Full-time roles where I've shipped things people actually use."
      />

      <div className="mt-12 relative">
        {/* Timeline line */}
        <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-blue-500/40 via-white/5 to-transparent hidden md:block" />

        <div className="space-y-10">
          {experience.map((job, i) => (
            <div key={job.company} className="md:pl-10 relative">
              {/* Dot */}
              <div
                className={`absolute left-0 top-1.5 w-3.5 h-3.5 rounded-full border-2 hidden md:block ${
                  i === 0
                    ? "border-blue-400 bg-blue-400/20"
                    : "border-neutral-600 bg-[#0a0a0a]"
                }`}
              />

              <div className="bg-[#111] border border-white/5 rounded-xl p-6 card-hover">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-white font-medium">{job.role}</h3>
                    <p className="text-blue-400 text-sm font-medium mt-0.5">
                      {job.company}
                    </p>
                  </div>
                  <span className="text-xs font-mono text-neutral-500 bg-white/5 px-3 py-1 rounded-full whitespace-nowrap self-start">
                    {job.period}
                  </span>
                </div>

                <p className="text-neutral-400 text-sm leading-relaxed mb-4">
                  {job.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {job.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs font-mono px-2 py-1 rounded-md bg-white/5 text-neutral-500"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
