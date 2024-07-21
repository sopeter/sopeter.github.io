import About from "@/components/About/About";
import Experiences from "@/components/Experience/Experience";
import Projects from "@/components/Projects/Project";
import Navbar from "@/components/Navigation/Navbar";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <main>
      <div className="navBarBackground">
        <div className="container">
          <div className="container">
            <Navbar />
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <div className="container">
          <About />
          <Experiences />
          <Projects />
        </div>
      </div>
      <div className="navBarBackground">
        <div className="container">
          <div className="container">
            <Footer />
          </div>
        </div>
      </div>
    </main>
  );
}
