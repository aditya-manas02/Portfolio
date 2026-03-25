import { motion, useScroll, useSpring } from 'framer-motion';
import { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Certificates from './components/Certificates';
import Education from './components/Education';
import Contact from './components/Contact';
import formalPic2 from './assets/formal-pic-2.jpg';

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Advanced safety check for window and Lenis
    if (typeof window === 'undefined') return;

    try {
        const lenis = new Lenis({
            duration: 1.5,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            smoothWheel: true,
        });

        lenisRef.current = lenis;

        function raf(time: number) {
            if (lenisRef.current) {
                lenisRef.current.raf(time);
                requestAnimationFrame(raf);
            }
        }

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
            lenisRef.current = null;
        };
    } catch (err) {
        console.error("Lenis initialization skipped due to error:", err);
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#020617] selection:bg-primary/30 text-white overflow-x-hidden font-inter antialiased">
      {/* Premium Progress Bar */}
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary origin-left z-[10001]" style={{ scaleX }} />

      <div className="noise-overlay" />

      <Navbar />

      <main className="relative z-10">
        <Hero />

        {/* About Section */}
        <section id="about" className="py-40 max-w-7xl mx-auto px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="glass-heavy p-10 md:p-24 rounded-[3.5rem] relative overflow-hidden flex flex-col lg:flex-row items-center gap-16"
          >
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            <div className="relative w-64 h-64 md:w-[400px] md:h-[400px] flex-shrink-0">
               <div className="absolute inset-0 bg-primary/10 blur-[80px] opacity-20 rounded-full animate-pulse" />
               <motion.div 
                 whileHover={{ scale: 1.05 }}
                 className="relative z-10 w-full h-full rounded-[3rem] overflow-hidden border border-white/5 shadow-2xll"
               >
                 <img
                   src={formalPic2}
                   alt="Aditya Manas"
                   className="w-full h-full object-cover transition-all duration-1000"
                 />
               </motion.div>
            </div>

            <div className="text-center lg:text-left flex-1 relative z-10">
               <h2 className="text-4xl md:text-7xl font-black mb-8 tracking-tighter uppercase leading-tight italic">
                    Creative <span className="text-secondary tracking-normal">Engineering</span>
               </h2>
              
              <div className="text-xl md:text-2xl text-gray-400 leading-relaxed max-w-3xl font-light mb-10 tracking-tight">
                   Bringing ideas to life through high-performance software and immersive designs.
              </div>

              <div className="flex justify-center lg:justify-start">
                  <a href="#projects" className="px-10 py-4 bg-white text-black rounded-full font-black uppercase tracking-tighter text-xs hover:scale-110 active:scale-95 transition-all shadow-xl">
                      Explore Works
                  </a>
              </div>
            </div>
          </motion.div>
        </section>

        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Certificates />
        <Contact />
      </main>

      <footer className="py-24 border-t border-white/5 text-center relative z-10 bg-[#020617]">
        <div className="max-w-7xl mx-auto px-6">
           <p className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-600">© 2026 Aditya Manas • World-Class Portfolio</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
