import React from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import { Github, Linkedin, ChevronDown, Rocket, Code2, Cpu, Globe } from 'lucide-react';
import character3d from '../assets/3d-character.png';

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
        // Only track mouse for tilt on desktop
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
            {/* Animated Background Elements */}
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
                           Hello, I'm
                        </h2>
                    </motion.div>
                    
                    <h1 className="text-6xl sm:text-8xl lg:text-[10rem] font-black mb-8 tracking-tighter leading-[0.85]">
                        Aditya <br />
                        <span className="text-gradient">Manas</span>
                    </h1>
                    
                    <p className="text-lg sm:text-2xl lg:text-3xl text-gray-400 max-w-2xl mb-12 leading-relaxed font-light mx-auto lg:mx-0">
                        Architecting <span className="text-white font-medium">high-performance</span> digital 
                        landscapes with <span className="text-primary italic">modern tech</span>.
                    </p>

                    <div className="flex flex-wrap justify-center lg:justify-start gap-6 md:gap-10">
                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href="#projects"
                            className="px-8 md:px-12 py-5 rounded-3xl bg-white text-black font-extrabold hover:shadow-[0_0_40px_rgba(255,255,255,0.4)] transition-all text-base md:text-lg"
                        >
                            Explore Growth
                        </motion.a>
                        <div className="flex gap-5 items-center">
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
                                        className="p-5 rounded-3xl glass text-gray-400 border border-white/10 hover:border-white/30 transition-all"
                                    >
                                        <Icon className="w-7 h-7" />
                                    </motion.a>
                                );
                            })}
                        </div>
                    </div>
                </motion.div>

                {/* 3D Character Avatar Container */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    style={{ 
                        rotateX, 
                        rotateY, 
                        x: charX,
                        y: charY,
                        translateY: y1,
                        opacity: opacityTransform,
                        transformStyle: "preserve-3d"
                    }}
                    className="relative flex-1 flex justify-center items-center h-[400px] sm:h-[500px] lg:h-[750px] w-full"
                >
                    {/* Living Energy Field (Backglow) */}
                    <motion.div
                        animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.3, 0.5, 0.3],
                        }}
                        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute w-[400px] h-[400px] bg-gradient-to-r from-primary/30 to-secondary/30 blur-[120px] rounded-full"
                    />

                    {/* 3D Character Asset with Organic Masking */}
                    <motion.div
                        animate={{ 
                            y: [0, -15, 0],
                            rotateZ: [0, 0.5, -0.5, 0]
                        }}
                        transition={{ 
                            duration: 6, 
                            repeat: Infinity, 
                            ease: "easeInOut" 
                        }}
                        style={{ transform: "translateZ(80px)" }}
                        className="relative z-20 w-64 h-64 sm:w-80 sm:h-80 lg:w-[550px] lg:h-[550px] rounded-[3rem] lg:rounded-[5rem] overflow-hidden"
                    >
                        {/* Soft Edge Overlay */}
                        <div className="absolute inset-0 z-10 shadow-[inset_0_0_60px_rgba(0,0,0,0.8)] pointer-events-none rounded-[3rem] lg:rounded-[5rem]" />
                        
                        <img
                            src={character3d}
                            alt="3D Character Aditya Manas"
                            className="w-full h-full object-cover scale-110 drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                        />
                        
                        {/* Internal Glow for dimension */}
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent pointer-events-none" />
                    </motion.div>

                    {/* Enhanced Dynamic Shadow */}
                    <motion.div 
                        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-64 h-12 bg-black/60 blur-3xl rounded-full scale-150"
                    />

                    {/* Floating Tech Orbs (Parallax) - Desktop Only */}
                    {[
                        { icon: Code2, t: "5%", l: "10%", z: 120, delay: 0 },
                        { icon: Cpu, b: "10%", r: "5%", z: 180, delay: 0.5 },
                        { icon: Globe, t: "15%", r: "10%", z: 100, delay: 1 },
                        { icon: Rocket, b: "15%", l: "5%", z: 220, delay: 1.5 }
                    ].map((orb, idx) => {
                        const Icon = orb.icon;
                        return (
                            <motion.div
                                key={idx}
                                style={{ 
                                    top: orb.t, left: orb.l, right: orb.r, bottom: orb.b,
                                    transform: `translateZ(${orb.z}px)`
                                }}
                                animate={{ 
                                    y: [0, -15, 0],
                                    rotate: [0, 10, -10, 0]
                                }}
                                transition={{ 
                                    duration: 6 + idx, 
                                    repeat: Infinity, 
                                    delay: orb.delay,
                                    ease: "easeInOut" 
                                }}
                                className="absolute z-30 p-4 lg:p-6 rounded-full glass border border-white/10 shadow-[0_0_30px_rgba(255,255,255,0.1)] text-primary hidden lg:flex items-center justify-center "
                            >
                                <Icon className="w-6 h-6 lg:w-9 lg:h-9" />
                            </motion.div>
                        );
                    })}

                    {/* Orbital Rings */}
                    <div className="absolute inset-x-0 inset-y-0 border border-white/5 rounded-full scale-110 pointer-events-none" />
                    <div className="absolute inset-x-0 inset-y-0 border-2 border-white/5 border-dashed rounded-full scale-150 opacity-20 animate-spin-slow pointer-events-none" />
                </motion.div>
            </div>

            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 cursor-pointer z-20"
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            >
                <ChevronDown className="w-10 h-10 text-white/40 hover:text-white transition-colors" />
            </motion.div>
        </section>
    );
};

export default Hero;
