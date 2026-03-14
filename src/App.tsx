import { motion } from 'framer-motion';
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
  return (
    <div className="min-h-screen bg-background selection:bg-primary/30 text-white">
      {/* Premium Dynamic Background */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Animated Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.15]" 
          style={{ 
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.05) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} 
        />
        
        {/* Dynamic Glowing Blobs - Reduced Blur for Mobile */}
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-primary/10 blur-[60px] md:blur-[120px] rounded-full"
        />
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[-10%] right-[-10%] w-[70%] h-[70%] bg-secondary/10 blur-[70px] md:blur-[150px] rounded-full"
        />

        {/* Floating Particles Section - Reduced for Performance on Mobile */}
        <div className="absolute inset-0">
          {[...Array(typeof window !== 'undefined' && window.innerWidth < 768 ? 10 : 30)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ 
                x: Math.random() * 100 + "%", 
                y: Math.random() * 100 + "%",
                opacity: Math.random() * 0.5
              }}
              animate={{
                y: [null, "-30px", "30px"],
                opacity: [0.1, 0.4, 0.1]
              }}
              transition={{
                duration: 8 + Math.random() * 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute w-1 h-1 bg-white rounded-full blur-[1px]"
            />
          ))}
        </div>
      </div>

      <Navbar />

      <main>
        <Hero />

        <div id="about" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass p-8 md:p-12 rounded-[3rem] relative overflow-hidden group flex flex-col md:flex-row items-center gap-12">
            <motion.div
              whileHover={{ rotateY: 15, rotateX: -15, scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="relative w-48 h-48 md:w-64 md:h-64 flex-shrink-0 cursor-pointer"
            >
              <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-3xl" />
              <img
                src={formalPic2}
                alt="Aditya Manas"
                className="relative z-10 w-full h-full object-cover rounded-3xl border border-white/10 shadow-2xl grayscale group-hover:grayscale-0 transition-all duration-500"
              />
            </motion.div>

            <div className="relative z-10 text-center md:text-left">
              <h2 className="text-3xl font-bold mb-6">About <span className="text-gradient">Me</span></h2>
              <p className="text-xl text-gray-400 leading-relaxed max-w-3xl">
                Bachelor of Technology in Computer Science from <span className="text-white font-semibold">Lovely Professional University</span>.
                My journey is defined by a relentless drive to solve real-world problems through code.
                From community safety platforms to tree plantation initiatives, I build applications that matter.
              </p>
            </div>
          </div>
        </div>

        <Skills />
        <Projects />
        <Education />
        <Experience />
        <Certificates />
        <Contact />
      </main>

      <footer className="py-12 border-t border-white/5 text-center text-gray-500">
        <p>© {new Date().getFullYear()} Aditya Manas. Built with React & Framer Motion.</p>
      </footer>
    </div>
  );
}

export default App;
