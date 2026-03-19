import ThemeToggle from "@/components/ThemeToggle";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-10 bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800">
      <div className="max-w-3xl mx-auto px-4 sm:px-8 h-14 flex items-center justify-between">
        <span className="font-bold tracking-tight text-slate-900 dark:text-white">Peter So</span>
        <div className="flex items-center gap-4 sm:gap-8 text-sm text-slate-500 dark:text-slate-400">
          <a href="#experience" className="hover:text-slate-900 dark:hover:text-white transition-colors">Experience</a>
          <a href="#projects" className="hover:text-slate-900 dark:hover:text-white transition-colors">Projects</a>
          <a href="Resume_7.11.24.pdf" className="hover:text-slate-900 dark:hover:text-white transition-colors">Resume ↗</a>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
