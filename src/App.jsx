import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ParticleBackground from "./components/ParticleBackground";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";

function App() {
  return (
    // The relative class is important here for the absolute background to position correctly
    <div className="relative min-h-screen text-white selection:bg-neonPurple selection:text-white overflow-hidden">
      
      {/* The Animated Background */}
      <ParticleBackground />

      <Navbar />
      
      <main className="flex flex-col gap-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;