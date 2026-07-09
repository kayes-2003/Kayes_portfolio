import { education, selfDirectedLearning } from "@/data/portfolio";

export default function Background() {
  return (
    <section id="background" className="py-24 bg-[#0d0d0d]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-xs font-mono text-blue-400 tracking-widest uppercase">
            Background
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold text-white mt-2">
            Education &amp; How I Learn
          </h2>
          <p className="text-neutral-400 max-w-lg mx-auto mt-3">
            Formally studying data science, self-taught on everything I ship.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Education */}
          <div className="bg-[#111] border border-white/5 rounded-xl p-6 card-hover">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl">🎓</span>
              <h3 className="text-white font-medium">Education</h3>
            </div>
            <div className="text-sm font-medium text-white">{education.degree}</div>
            <div className="text-sm text-neutral-400 mt-1">{education.school}</div>
            <div className="text-xs font-mono text-neutral-500 mt-2">{education.period}</div>
          </div>

          {/* Self-Directed Learning */}
          <div className="bg-[#111] border border-white/5 rounded-xl p-6 card-hover">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl">📚</span>
              <h3 className="text-white font-medium">Self-Directed Learning</h3>
            </div>
            <div className="space-y-4">
              {selfDirectedLearning.map((item) => (
                <div key={item.title}>
                  <div className="text-sm font-medium text-neutral-200">{item.title}</div>
                  <div className="text-xs text-neutral-500 leading-relaxed mt-1">
                    {item.detail}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}