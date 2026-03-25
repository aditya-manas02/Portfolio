import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import { Github, Linkedin, ChevronDown } from 'lucide-react';
import character3d from '../assets/3d-character.png';

const Typewriter = () => {
    const roles = ["Full Stack Developer", "Software Engineer"];
    const [index, setIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);
    const [reverse, setReverse] = useState(false);

    // Typing speed logic
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
        }, Math.max(reverse ? 50 : 100, parseInt(Math.random() * 200 + "")));

        return () => clearTimeout(timeout);
    }, [subIndex, index, reverse]);

    return (
        <span className="text-primary relative inline-block">
            {roles[index].substring(0, subIndex)}
            <span className="absolute -right-1 top-0 bottom-0 w-1 bg-primary animate-pulse" />
        </span>
    );
};

const Hero = () => {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    const opacityTransform = useTransform(scrollY, [0, 300], [1, 0]);

    // Mouse tracking for 3D character movement
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x, { stiffness: 100, damping: 30 });
    const mouseYSpring = useSpring(y, { stiffness: 100, damping: 30 });

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"]);
    const charX = useTransform(mouseXSpring, [-0.5, 0.5], [-10, 10]);
    const charY = useTransform(mouseYSpring, [-0.5, 0.5], [-10, 10]);

    const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
        if (typeof window !== 'undefined' && window.innerWidth < 1024) return;
        const rect = event.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = event.clientX - rect.left;
        const mouseY = event.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <section 
            id="hero" 
            className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-16"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            <div className="absolute inset-0 z-0">
                <motion.div
                    animate={{
                        scale: [1, 1.1, 1],
                        rotate: [0, 45, 0],
                        opacity: [0.2, 0.4, 0.2],
                    }}
                    transition={{ duration: 20, repeat: Infinity }}
                    className="absolute -top-[15%] -left-[15%] w-[60%] h-[60%] bg-primary/10 blur-[120px] rounded-full"
                />
            </div>

            <div className="relative z-10 container mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-16 max-w-7xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex-1 text-center lg:text-left pt-10 lg:pt-0"
                >
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <h2 className="text-base md:text-xl font-medium text-primary mb-6 flex items-center justify-center lg:justify-start gap-3">
                           <span className="w-10 h-[2px] bg-primary hidden lg:block"></span>
                           Building for the future
                        </h2>
                    </motion.div>
                    
                    <h1 className="text-6xl sm:text-8xl lg:text-9xl font-black mb-8 tracking-tighter leading-[0.9]">
                        Aditya <br />
                        <span className="text-gradient">Manas</span>
                    </h1>
                    
                    <div className="text-lg sm:text-2xl lg:text-3xl text-gray-400 max-w-2xl mb-12 leading-relaxed font-light mx-auto lg:mx-0 min-h-[4rem]">
                         I am a <Typewriter />
                    </div>

                    <div className="flex flex-wrap justify-center lg:justify-start gap-6">
                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href="#projects"
                            className="px-10 py-5 rounded-3xl bg-white text-black font-extrabold hover:shadow-[0_0_40px_rgba(255,255,255,0.4)] transition-all text-base"
                        >
                            Explore Projects
                        </motion.a>
                        <div className="flex gap-4">
                            {[
                                { icon: Github, url: "https://github.com/aditya-manas02" },
                                { icon: Linkedin, url: "https://linkedin.com/in/adityamanas08/" }
                            ].map((item, idx) => {
                                const Icon = item.icon;
                                return (
                                    <motion.a
                                        key={idx}
                                        whileHover={{ y: -5, color: "#fff" }}
                                        href={item.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-5 rounded-2xl glass text-gray-400 border border-white/10 hover:border-white/30 transition-all"
                                    >
                                        <Icon className="w-6 h-6" />
                                    </motion.a>
                                );
                            })}
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    style={{ 
                        rotateX, rotateY, x: charX, y: charY,
                        translateY: y1, opacity: opacityTransform,
                        transformStyle: "preserve-3d"
                    }}
                    className="relative flex-1 flex justify-center items-center h-[400px] lg:h-[700px] w-full"
                >
                    <img
                        src={character3d}
                        alt="3D Character"
                        className="relative z-20 w-64 h-64 lg:w-[500px] lg:h-[500px] object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                    />
                    <div className="absolute w-[300px] h-[300px] bg-primary/20 blur-[100px] rounded-full animate-pulse" />
                </motion.div>
            </div>

            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 cursor-pointer z-20"
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            >
                <ChevronDown className="w-10 h-10 text-white/40" />
            </motion.div>
        </section>
    );
};

export default Hero;
