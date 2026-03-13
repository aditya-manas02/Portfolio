import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Certificates from './components/Certificates';
import Education from './components/Education';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-background selection:bg-primary/30 text-white">
      {/* Background Decor */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] left-[-5%] w-[30%] h-[30%] bg-primary/10 blur-[120px] rounded-full animate-pulse-slow" />
        <div className="absolute bottom-[10%] right-[-5%] w-[40%] h-[40%] bg-secondary/10 blur-[150px] rounded-full animate-pulse-slow" style={{ animationDelay: '2s' }} />
      </div>

      <Navbar />

      <main>
        <Hero />

        <div id="about" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass p-8 md:p-12 rounded-[3rem] relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <img src="/vite.svg" alt="" className="w-64 h-64 grayscale" />
            </div>
            <div className="relative z-10">
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
