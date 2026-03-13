import { motion } from 'framer-motion';
import { Github, Linkedin, ChevronDown } from 'lucide-react';

const Hero = () => {
    return (
        <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 z-0">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 90, 0],
                        opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{ duration: 15, repeat: Infinity }}
                    className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-primary/20 blur-[100px] rounded-full"
                />
                <motion.div
                    animate={{
                        scale: [1, 1.3, 1],
                        rotate: [0, -90, 0],
                        opacity: [0.2, 0.4, 0.2],
                    }}
                    transition={{ duration: 20, repeat: Infinity }}
                    className="absolute -bottom-[10%] -right-[10%] w-[50%] h-[50%] bg-secondary/20 blur-[120px] rounded-full"
                />
            </div>

            <div className="relative z-10 text-center px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-lg md:text-2xl font-medium text-primary mb-4">Hello, I'm</h2>
                    <h1 className="text-4xl sm:text-6xl md:text-8xl font-black mb-6 tracking-tighter leading-tight">
                        Aditya <span className="text-gradient">Manas</span>
                    </h1>
                    <p className="text-base sm:text-lg md:text-2xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed px-4">
                        Full Stack Developer & Software Engineer passionate about building
                        <span className="text-white font-semibold"> scalable, innovative web solutions</span>.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex flex-wrap justify-center gap-6"
                >
                    <a
                        href="#projects"
                        className="px-8 py-3 rounded-full bg-white text-black font-bold hover:bg-gray-200 transition-all shadow-xl hover:shadow-white/10"
                    >
                        View Projects
                    </a>
                    <div className="flex gap-4 items-center">
                        <a
                            href="https://github.com/aditya-manas02"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 rounded-full glass hover:bg-white/10 transition-all"
                        >
                            <Github className="w-6 h-6" />
                        </a>
                        <a
                            href="https://linkedin.com/in/adityamanas08/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 rounded-full glass hover:bg-white/10 transition-all"
                        >
                            <Linkedin className="w-6 h-6" />
                        </a>
                    </div>
                </motion.div>
            </div>

            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2"
            >
                <ChevronDown className="w-8 h-8 text-white/30" />
            </motion.div>
        </section>
    );
};

export default Hero;
