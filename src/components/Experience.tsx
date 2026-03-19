import { experience } from "@/app/jsons/data";

const accent = "#6366f1";

export default function Experience() {
  return (
    <div id="experience" className="mb-20">
      <div className="text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-10">
        Experience
      </div>
      <div className="relative">
        <div className="absolute left-0 top-2.5 bottom-2.5 w-px bg-slate-200 dark:bg-slate-700" />
        {experience.map((exp, i) => (
          <div key={i} className="pl-8 pb-12 relative">
            <div
              className="absolute -left-1 top-2 w-2.5 h-2.5 rounded-full border-2 border-white dark:border-slate-900"
              style={{ backgroundColor: accent, boxShadow: `0 0 0 2px ${accent}44` }}
            />
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 mb-3">
              <div>
                <div className="font-bold text-slate-900 dark:text-white leading-tight">{exp.title}</div>
                <a
                  href={exp.website}
                  className="text-sm hover:underline"
                  style={{ color: accent }}
                >
                  {exp.employer} ↗
                </a>
              </div>
              <div className="text-xs text-slate-400 dark:text-slate-500 sm:text-right whitespace-nowrap">{exp.date}</div>
            </div>
            <div className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-3">{exp.description}</div>
            <div className="flex flex-wrap gap-1.5">
              {exp.skills.map((s, j) => (
                <span
                  key={j}
                  className="border border-slate-200 dark:border-slate-700 rounded px-2 py-0.5 text-xs text-slate-600 dark:text-slate-400"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
