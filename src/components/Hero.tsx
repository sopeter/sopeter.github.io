const accent = "#6366f1";

export default function Hero() {
  return (
    <div className="flex flex-col-reverse sm:flex-row items-center gap-8 sm:gap-16 mb-20">
      <div className="flex-1 text-center sm:text-left">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight mb-6 text-slate-900 dark:text-white">
          Backend engineer.
          <br />
          <span style={{ color: accent }}>Systems that scale.</span>
        </h1>
        <p className="text-base text-slate-500 dark:text-slate-400 leading-relaxed max-w-md mx-auto sm:mx-0 mb-8">
          Building distributed voice infrastructure at Twilio. CS + AI from
          Northeastern University. Focused on high-throughput, low-latency
          backend systems in Java and Python.
        </p>
        <div className="flex gap-3 flex-wrap justify-center sm:justify-start">
          <a
            href="mailto:peterjso23@gmail.com"
            className="bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-5 py-2 rounded-md text-sm font-medium hover:bg-slate-700 dark:hover:bg-slate-100 transition-colors"
          >
            Contact me
          </a>
          <a
            href="Resume_7.11.24.pdf"
            className="bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 border border-slate-200 dark:border-slate-700 px-5 py-2 rounded-md text-sm font-medium hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
          >
            Resume
          </a>
        </div>
      </div>
      <div className="flex-shrink-0">
        <img
          src="/profile-pic.png"
          alt="Peter So"
          className="w-40 h-40 sm:w-56 sm:h-56 rounded-full object-cover"
          style={{ border: `3px solid ${accent}`, boxShadow: `0 0 0 6px ${accent}18` }}
        />
      </div>
    </div>
  );
}
