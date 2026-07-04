import { testimonials } from "@/data/portfolio";

export default function Testimonials() {
  return (
    <section className="py-24 bg-[#0d0d0d]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-xs font-mono text-blue-400 tracking-widest uppercase">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold text-white mt-2">
            What people say
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-[#111] border border-white/5 rounded-xl p-6 card-hover relative"
            >
              {/* Quote mark */}
              <span className="absolute top-4 right-6 text-5xl text-white/5 font-serif leading-none select-none">
                "
              </span>

              <p className="text-neutral-300 text-sm leading-relaxed mb-6 italic">
                "{t.quote}"
              </p>

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-xs font-medium text-blue-400">
                  {t.initials}
                </div>
                <div>
                  <div className="text-sm font-medium text-white">{t.name}</div>
                  <div className="text-xs text-neutral-500">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
