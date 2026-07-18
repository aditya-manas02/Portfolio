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
import CustomCursor from './components/CustomCursor';
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
    if (typeof window === 'undefined') return;

    try {
        const lenis = new Lenis({
            duration: 1.2,
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
    <div className="min-h-screen bg-background text-white overflow-x-hidden font-inter antialiased scanlines bg-grid-pattern selection:bg-[#ccff00] selection:text-black">
      <CustomCursor />
      
      {/* Brutalist Progress Bar */}
      <motion.div className="fixed top-0 left-0 right-0 h-2 bg-[#ccff00] origin-left z-[10001] shadow-[0_0_15px_rgba(204,255,0,0.5)]" style={{ scaleX }} />

      <Navbar />

      <main className="relative z-10">
        <Hero />

        {/* Brutalist About Section */}
        <section id="about" className="py-40 max-w-7xl mx-auto px-6 lg:px-10 relative">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="brutalist-border p-10 md:p-24 relative overflow-hidden flex flex-col lg:flex-row items-center gap-16"
          >
            {/* Corner accoutrements */}
            <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-white/50" />
            <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-white/50" />

            <div className="relative w-64 h-64 md:w-[400px] md:h-[400px] flex-shrink-0">
               <motion.div 
                 whileHover={{ scale: 0.98 }}
                 className="relative z-10 w-full h-full border-4 border-white overflow-hidden shadow-[8px_8px_0px_0px_rgba(204,255,0,1)] grayscale hover:grayscale-0 transition-all duration-500"
               >
                 <img
                   src={formalPic2}
                   alt="Aditya Manas"
                   className="w-full h-full object-cover"
                 />
                 <div className="absolute inset-0 bg-black/20 mix-blend-overlay" />
               </motion.div>
            </div>

            <div className="text-center lg:text-left flex-1 relative z-10">
               <h2 className="text-5xl md:text-8xl font-black mb-8 tracking-tighter uppercase leading-none">
                    Raw <br /> <span className="text-[#ccff00] glitch-hover">Engineering</span>
               </h2>
              
              <div className="text-xl md:text-2xl text-white/70 leading-relaxed max-w-3xl font-mono-tech mb-10 tracking-tight">
                    [SYS.MSG]: Bringing ideas to life through high-performance software and unapologetic designs.
              </div>

              <div className="flex justify-center lg:justify-start">
                  <a href="#projects" className="px-10 py-5 bg-[#ccff00] text-black font-black uppercase tracking-widest text-sm hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] transition-all">
                      EXECUTE_WORKS
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

      <footer className="py-24 border-t-2 border-white/20 text-center relative z-10 bg-black mt-20">
        <div className="max-w-7xl mx-auto px-6">
           <p className="text-[12px] font-mono-tech uppercase tracking-[0.2em] text-white/50">
               // SYS.OFFLINE // © 2026 ADITYA MANAS // ALL_RIGHTS_RESERVED
           </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
