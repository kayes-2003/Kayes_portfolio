import { projects } from "@/data/portfolio";
import { SectionHeader } from "./Skills";

export default function Projects() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-24 bg-[#0d0d0d]">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          eyebrow="Projects"
          title="Things I've built"
          desc="A selection of projects across SaaS, AI, e-commerce, and developer tooling."
        />

        {/* Featured */}
        <div className="grid md:grid-cols-3 gap-5 mt-12">
          {featured.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>

        {/* Other projects */}
        {rest.length > 0 && (
          <>
            <h3 className="text-sm font-mono text-neutral-500 mt-16 mb-6 tracking-wider uppercase">
              Other projects
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {rest.map((project) => (
                <ProjectCard key={project.title} project={project} small />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  small = false,
}: {
  project: (typeof projects)[0];
  small?: boolean;
}) {
  return (
    <div className="group bg-[#111] border border-white/5 rounded-xl overflow-hidden card-hover flex flex-col">
      {/* Color accent bar */}
      <div
        className="h-0.5 w-full"
        style={{
          background: `linear-gradient(90deg, ${project.color}, transparent)`,
        }}
      />

      <div className="p-6 flex flex-col flex-1">
        {/* Icon placeholder */}
        {!small && (
          <div
            className="w-10 h-10 rounded-lg mb-4 flex items-center justify-center text-lg"
            style={{ backgroundColor: `${project.color}15` }}
          >
            <span style={{ color: project.color }}>⚡</span>
          </div>
        )}

        <h3 className="text-white font-medium mb-2 group-hover:text-blue-300 transition-colors">
          {project.title}
        </h3>
        <p className="text-neutral-400 text-sm leading-relaxed mb-4 flex-1">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-mono px-2 py-1 rounded-md bg-white/5 text-neutral-400"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-3 mt-auto">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs text-neutral-400 hover:text-white transition-colors"
          >
            <ExternalLinkIcon />
            Live demo
          </a>
          <span className="text-neutral-700">·</span>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs text-neutral-400 hover:text-white transition-colors"
          >
            <GithubSmallIcon />
            Source
          </a>
        </div>
      </div>
    </div>
  );
}

function ExternalLinkIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M2 10L10 2M5 2h5v5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function GithubSmallIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  );
}
