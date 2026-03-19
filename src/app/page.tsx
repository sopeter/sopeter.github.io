import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="bg-white dark:bg-slate-900 min-h-screen text-slate-900 dark:text-white font-sans transition-colors duration-200">
      <Navbar />
      <main className="max-w-3xl mx-auto px-4 sm:px-8 py-16 sm:py-24">
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Footer />
      </main>
    </div>
  );
}
