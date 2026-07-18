import { motion } from 'framer-motion';
import { Github, Linkedin, ArrowRight } from 'lucide-react';

const Hero = () => {
    return (
        <section 
            id="hero" 
            className="relative min-h-screen flex items-center justify-center overflow-hidden mesh-bg"
        >
            {/* Very soft white overlay to wash out the mesh slightly and make text pop */}
            <div className="absolute inset-0 bg-white/40 backdrop-blur-[2px]" />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="flex flex-col items-center justify-center text-center">
                    
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="mb-8"
                    >
                        <span className="luxury-pill px-6 py-2.5 text-sm tracking-wide text-secondary">
                            Available for new opportunities
                        </span>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        className="space-y-4 mb-10"
                    >
                        <h1 className="text-6xl sm:text-7xl md:text-9xl font-extrabold tracking-tighter text-primary">
                            Aditya <span className="text-zinc-400">Manas</span>
                        </h1>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium tracking-tight text-secondary max-w-3xl mx-auto">
                            Crafting elegant, high-performance web experiences.
                        </h2>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="flex flex-col sm:flex-row items-center gap-6"
                    >
                        <a 
                            href="#projects"
                            className="group flex items-center justify-center gap-3 bg-primary text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-zinc-800 transition-colors shadow-xl shadow-black/10"
                        >
                            View Projects
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </a>

                        <div className="flex items-center gap-4">
                            <a 
                                href="https://github.com/aditya-manas02"
                                target="_blank"
                                rel="noreferrer"
                                className="w-14 h-14 bg-white text-primary rounded-full flex items-center justify-center hover:bg-zinc-50 transition-colors shadow-lg shadow-black/5 border border-zinc-100"
                            >
                                <Github className="w-6 h-6" />
                            </a>
                            <a 
                                href="https://www.linkedin.com/in/adityamanas02/"
                                target="_blank"
                                rel="noreferrer"
                                className="w-14 h-14 bg-white text-primary rounded-full flex items-center justify-center hover:bg-zinc-50 transition-colors shadow-lg shadow-black/5 border border-zinc-100"
                            >
                                <Linkedin className="w-6 h-6" />
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
            
            {/* Scroll Indicator */}
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <div className="text-xs font-medium uppercase tracking-widest text-secondary">Scroll</div>
                <div className="w-px h-12 bg-gradient-to-b from-zinc-300 to-transparent" />
            </motion.div>
        </section>
    );
};

export default Hero;
