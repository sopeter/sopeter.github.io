import { skills } from "@/app/jsons/data";

const categories = [
  { label: "Languages", value: skills.languages },
  { label: "Frameworks", value: skills.frameworks },
  { label: "Databases", value: skills.databases },
  { label: "Tools", value: skills.tools },
];

export default function Skills() {
  return (
    <div className="mb-20 grid grid-cols-2 sm:grid-cols-4 gap-8">
      {categories.map(({ label, value }) => (
        <div key={label}>
          <div className="text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-3">
            {label}
          </div>
          {value.split(", ").map((s, i) => (
            <div key={i} className="text-sm text-slate-700 dark:text-slate-300 leading-loose">{s}</div>
          ))}
        </div>
      ))}
    </div>
  );
}
