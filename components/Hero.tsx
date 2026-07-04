import { siteConfig, stats } from "@/data/portfolio";

export default function Hero() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col justify-center pt-16 overflow-hidden"
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Blue glow blob */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 py-24">
        {/* Available badge */}
        {siteConfig.available && (
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-green-500/20 bg-green-500/5 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            <span className="text-green-400 text-xs font-medium">
              Available for work
            </span>
          </div>
        )}

        {/* Name + role */}
        <h1 className="text-5xl md:text-7xl font-semibold tracking-tight mb-4">
          <span className="gradient-text">{siteConfig.name}</span>
        </h1>
        <div className="flex items-center gap-3 mb-6">
          <h2 className="text-2xl md:text-3xl text-neutral-400 font-light">
            {siteConfig.role}
          </h2>
          <span className="hidden md:block h-px flex-1 max-w-[120px] bg-gradient-to-r from-neutral-700 to-transparent" />
        </div>

        {/* Bio */}
        <p className="text-neutral-400 text-lg leading-relaxed max-w-xl mb-10">
          {siteConfig.bio}
        </p>

        {/* CTA buttons */}
        <div className="flex flex-wrap gap-3 mb-20">
          <a
            href="#projects"
            className="px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium transition-colors duration-150"
          >
            View my work
          </a>
          <a
            href="#contact"
            className="px-6 py-3 rounded-lg border border-white/10 hover:border-white/20 text-neutral-300 hover:text-white text-sm font-medium transition-all duration-150"
          >
            Get in touch
          </a>
          <a
            href={siteConfig.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-3 rounded-lg border border-white/10 hover:border-white/20 text-neutral-400 hover:text-white text-sm transition-all duration-150 flex items-center gap-2"
          >
            <GithubIcon />
            GitHub
          </a>
          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-3 rounded-lg border border-white/10 hover:border-white/20 text-neutral-400 hover:text-white text-sm transition-all duration-150 flex items-center gap-2"
          >
            <LinkedinIcon />
            LinkedIn
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-10 border-t border-white/5">
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="text-3xl font-semibold text-white mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-neutral-500">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-xs text-neutral-600">scroll</span>
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          className="text-neutral-600"
        >
          <path
            d="M8 3v10M3 8l5 5 5-5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </section>
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
