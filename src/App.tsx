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
    <div className="min-h-screen bg-background text-primary selection:bg-white selection:text-black relative">
      <CustomCursor />
      
      {/* Ambient Background Orbs */}
      <div className="ambient-orb ambient-orb-1" />
      <div className="ambient-orb ambient-orb-2" />
      <div className="ambient-orb ambient-orb-3" />

      {/* Elegant Progress Bar */}
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-white/50 backdrop-blur-md origin-left z-[10001]" style={{ scaleX }} />

      <Navbar />

      <main className="relative z-10">
        <Hero />

        {/* Elegant About Section */}
        <section id="about" className="py-40 max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="glass-card p-10 md:p-20 relative flex flex-col lg:flex-row items-center gap-16 overflow-hidden"
          >
            <div className="relative w-64 h-64 md:w-[400px] md:h-[400px] flex-shrink-0">
               <motion.div 
                 whileHover={{ scale: 1.02 }}
                 transition={{ duration: 0.4, ease: "easeOut" }}
                 className="relative z-10 w-full h-full rounded-full overflow-hidden border border-white/10 shadow-2xl"
               >
                 <img
                   src={formalPic2}
                   alt="Aditya Manas"
                   className="w-full h-full object-cover"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent mix-blend-overlay" />
               </motion.div>
            </div>

            <div className="text-center lg:text-left flex-1 relative z-10">
               <h2 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-tight">
                    Crafting <br /> <span className="text-gradient-accent">Digital Elegance</span>
               </h2>
              
              <div className="text-lg md:text-xl text-secondary leading-relaxed max-w-2xl font-light mb-10">
                    Bringing visionary ideas to life through high-performance software, meticulously crafted user interfaces, and an uncompromising attention to detail.
              </div>

              <div className="flex justify-center lg:justify-start">
                  <a href="#projects" className="px-8 py-4 bg-white text-black rounded-full font-medium tracking-wide hover:bg-gray-200 transition-colors shadow-lg hover:shadow-xl">
                      Explore Work
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

      <footer className="py-20 border-t border-white/5 text-center relative z-10 bg-transparent mt-20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6">
           <p className="text-sm font-light tracking-widest text-secondary uppercase">
               © 2026 Aditya Manas • Engineered with Precision
           </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
