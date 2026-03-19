import { projects } from "@/app/jsons/data";

export default function Projects() {
  return (
    <div id="projects" className="mb-20">
      <div className="text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-8">
        Projects
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {projects.map((proj, i) => (
          <a
            key={i}
            href={proj.website}
            className="block p-5 border border-slate-200 dark:border-slate-700 rounded-lg hover:border-slate-400 dark:hover:border-slate-500 transition-colors"
          >
            <div className="font-bold text-slate-900 dark:text-white mb-2">{proj.name} ↗</div>
            <div className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-4">{proj.description}</div>
            <div className="flex flex-wrap gap-1.5">
              {proj.skills.map((s, j) => (
                <span
                  key={j}
                  className="border border-slate-200 dark:border-slate-700 rounded px-2 py-0.5 text-xs text-slate-600 dark:text-slate-400"
                >
                  {s}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
