import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Footer from "../components/Footer";
import BackgroundParticles from "../components/BackgroundParticles";

export default function Home() {
  return (
    <main className="min-h-screen bg-ocean-950">
      <BackgroundParticles />
      <Navbar />
      
      <div className="relative z-10 flex flex-col">
        <Hero />
        
        {/* SECTION 1: Deep Blue to Dark Navy */}
        <div className="bg-gradient-to-b from-ocean-900 to-ocean-950">
          <About />
        </div>
        
        {/* SECTION 2: Solid Dark Navy (contrast for cards) */}
        <div className="bg-ocean-950">
          <Skills />
        </div>
        
        {/* SECTION 3: Dark Navy to Royal Navy */}
        <div className="bg-gradient-to-b from-ocean-950 to-ocean-900">
          <Experience />
        </div>
        
        {/* SECTION 4: Final deep navy */}
        <div className="bg-ocean-950">
          <Projects />
        </div>
      </div>

      <Footer />
    </main>
  );
}