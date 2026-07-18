import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import CustomCursor from './components/CustomCursor';

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="bg-background text-primary min-h-screen selection:bg-accent/20 selection:text-accent">
      <CustomCursor />
      <Navbar />
      
      <main className="relative z-10">
        <Hero />
        
        {/* Soft elegant separator */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-zinc-200 to-transparent" />

        <div className="bg-background">
          <Projects />
          <Skills />
          <Experience />
          <Education />
          <Certificates />
          <Contact />
        </div>
      </main>
      
      {/* Footer */}
      <footer className="py-12 text-center border-t border-zinc-200 bg-white relative z-10">
        <div className="max-w-7xl mx-auto px-4 flex flex-col items-center">
          <h2 className="text-xl font-bold tracking-tight mb-2 text-primary">Aditya Manas</h2>
          <p className="text-secondary text-sm">Building elegant digital experiences.</p>
          <div className="mt-8 text-xs text-zinc-400">
            © {new Date().getFullYear()} All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
