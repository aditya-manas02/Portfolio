import { motion } from 'framer-motion';
import { Github, Linkedin, ArrowRight } from 'lucide-react';

const Hero = () => {
    return (
        <section 
            id="hero" 
            className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden pt-32 pb-16 px-6 lg:px-10 max-w-[1600px] mx-auto z-10"
        >
            <div className="relative z-10 w-full flex flex-col items-center text-center gap-8 mt-10">
                
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="inline-flex items-center gap-2 px-4 py-2 glass-pill mb-4"
                >
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-sm font-medium tracking-wide text-white/80">Available for new opportunities</span>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                >
                    <h1 className="text-[12vw] md:text-[8vw] lg:text-[7rem] font-bold tracking-tighter leading-[1] mb-6">
                        Aditya <span className="text-white/40">Manas</span>
                    </h1>
                    <div className="text-xl md:text-3xl lg:text-4xl text-white/60 font-light tracking-tight max-w-3xl mx-auto leading-relaxed">
                        Full-Stack Developer crafting <span className="text-gradient">premium digital experiences</span> with absolute precision.
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="mt-10 flex flex-col sm:flex-row items-center gap-6"
                >
                    <a
                        href="#projects"
                        className="group flex items-center justify-between gap-3 px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-gray-200 hover:shadow-xl transition-all"
                    >
                        View Projects 
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                    <div className="flex gap-4">
                        {[
                            { icon: Github, url: "https://github.com/aditya-manas02" },
                            { icon: Linkedin, url: "https://linkedin.com/in/adityamanas08/" }
                        ].map((item, idx) => {
                            const Icon = item.icon;
                            return (
                                <a
                                    key={idx}
                                    href={item.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-4 glass-pill hover:bg-white/20 transition-all text-white/80 hover:text-white"
                                >
                                    <Icon className="w-5 h-5" />
                                </a>
                            );
                        })}
                    </div>
                </motion.div>
            </div>

        </section>
    );
};

export default Hero;
