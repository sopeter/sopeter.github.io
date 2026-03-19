const links = [
  { label: "Email", href: "mailto:peterjso23@gmail.com" },
  { label: "GitHub", href: "https://github.com/sopeter" },
  { label: "LinkedIn", href: "https://linkedin.com/in/sopeter" },
];

export default function Footer() {
  return (
    <footer className="pt-8 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-slate-400 dark:text-slate-500">
      <span>Peter So</span>
      <div className="flex gap-6">
        {links.map(({ label, href }) => (
          <a key={label} href={href} className="hover:text-slate-700 dark:hover:text-slate-300 transition-colors">
            {label}
          </a>
        ))}
      </div>
    </footer>
  );
}
