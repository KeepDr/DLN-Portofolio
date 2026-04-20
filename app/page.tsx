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
        
        
        <div className="bg-gradient-to-b from-ocean-900 to-ocean-950">
          <About />
        </div>
        
      
        <div className="bg-ocean-950">
          <Skills />
        </div>
        
        
        <div className="bg-gradient-to-b from-ocean-950 to-ocean-900">
          <Experience />
        </div>
        
        
        <div className="bg-ocean-950">
          <Projects />
        </div>
      </div>

      <Footer />
    </main>
  );
}