import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Github, Linkedin, ArrowDownRight } from 'lucide-react';

const Typewriter = () => {
    const roles = ["SYSTEM_ARCHITECT", "FULL_STACK_DEV", "CREATIVE_ENGINEER"];
    const [index, setIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);
    const [reverse, setReverse] = useState(false);

    useEffect(() => {
        if (subIndex === roles[index].length + 1 && !reverse) {
            setTimeout(() => setReverse(true), 2000);
            return;
        }
        if (subIndex === 0 && reverse) {
            setReverse(false);
            setIndex((prev) => (prev + 1) % roles.length);
            return;
        }
        const timeout = setTimeout(() => {
            setSubIndex((prev) => prev + (reverse ? -1 : 1));
        }, Math.max(reverse ? 30 : 80, parseInt(Math.random() * 100 + "")));

        return () => clearTimeout(timeout);
    }, [subIndex, index, reverse]);

    return (
        <span className="text-[#ccff00] relative inline-block font-mono-tech tracking-tight">
            {roles[index].substring(0, subIndex)}
            <span className="inline-block w-[10px] h-[1em] bg-[#ccff00] ml-1 animate-pulse" style={{ verticalAlign: 'text-bottom' }} />
        </span>
    );
};

const Hero = () => {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 150]);
    const opacityTransform = useTransform(scrollY, [0, 300], [1, 0]);

    return (
        <section 
            id="hero" 
            className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-32 pb-16 px-6 lg:px-10 max-w-[1600px] mx-auto"
        >
            <div className="absolute top-10 left-10 text-white/30 font-mono-tech text-xs hidden md:block">
                SYS.INIT() <br/>
                LOAD: 99.9% <br/>
                READY.
            </div>

            <div className="relative z-10 w-full flex flex-col gap-6">
                
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
                    className="flex flex-col"
                >
                    <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 bg-white flex items-center justify-center text-black font-black text-xl">
                            A
                        </div>
                        <div className="w-12 h-12 bg-[#ccff00] flex items-center justify-center text-black font-black text-xl">
                            M
                        </div>
                        <span className="font-mono-tech text-sm tracking-[0.3em] text-white/50 ml-4 hidden sm:block">
                            // VER 2.0_ONLINE
                        </span>
                    </div>

                    <h1 className="text-[12vw] md:text-[10vw] lg:text-[9rem] font-black tracking-tighter leading-[0.85] uppercase">
                        Aditya <br />
                        <span className="text-white hover:text-[#ccff00] transition-colors duration-300">Manas.</span>
                    </h1>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="mt-8 border-t-2 border-white/20 pt-8 flex flex-col md:flex-row justify-between items-start md:items-end gap-8"
                >
                    <div className="text-xl md:text-2xl lg:text-3xl text-white/80 max-w-2xl font-light min-h-[4rem]">
                        INITIATING: <br className="md:hidden" /> <Typewriter />
                    </div>

                    <div className="flex gap-4">
                        <a
                            href="#projects"
                            className="group flex items-center justify-between gap-4 px-8 py-4 bg-white text-black font-black uppercase text-sm brutalist-border !bg-white hover:!bg-[#ccff00]"
                        >
                            EXPLORE_DATA 
                            <ArrowDownRight className="w-5 h-5 group-hover:rotate-[-45deg] transition-transform" />
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
                                        className="p-4 bg-black border-2 border-white text-white hover:bg-white hover:text-black transition-colors brutalist-border"
                                    >
                                        <Icon className="w-5 h-5" />
                                    </a>
                                );
                            })}
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Brutalist Decoration */}
            <motion.div 
                style={{ y: y1, opacity: opacityTransform }}
                className="absolute right-10 top-1/4 w-32 h-64 border-r-2 border-y-2 border-white/20 hidden lg:flex flex-col justify-between items-end p-4 font-mono-tech text-[10px] text-white/40"
            >
                <span>[01]</span>
                <div className="w-full h-[1px] bg-white/20 my-4" />
                <span>[END]</span>
            </motion.div>

        </section>
    );
};

export default Hero;
