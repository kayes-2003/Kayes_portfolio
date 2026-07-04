import { siteConfig } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-8 mt-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="font-mono text-sm text-neutral-600">
          <span className="text-neutral-700">&lt;</span>
          {siteConfig.name.split(" ")[0].toLowerCase()}
          <span className="text-neutral-700">/&gt;</span>
        </span>

        <p className="text-xs text-neutral-700">
          © {new Date().getFullYear()} {siteConfig.name} · Built with Next.js &
          Tailwind
        </p>

        <div className="flex gap-4">
          <a
            href={siteConfig.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-600 hover:text-neutral-300 transition-colors text-xs"
          >
            GitHub
          </a>
          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-600 hover:text-neutral-300 transition-colors text-xs"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${siteConfig.email}`}
            className="text-neutral-600 hover:text-neutral-300 transition-colors text-xs"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
