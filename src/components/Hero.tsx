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

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);
    const charX = useTransform(mouseXSpring, [-0.5, 0.5], [-20, 20]);
    const charY = useTransform(mouseYSpring, [-0.5, 0.5], [-20, 20]);

    const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
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
            className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-12"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
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

            <div className="relative z-10 container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-12 max-w-7xl">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex-1 text-center md:text-left"
                >
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <h2 className="text-lg md:text-2xl font-medium text-primary mb-4 flex items-center justify-center md:justify-start gap-2">
                           <span className="w-8 h-[2px] bg-primary hidden md:block"></span>
                           Hello, I'm
                        </h2>
                    </motion.div>
                    
                    <h1 className="text-5xl sm:text-7xl md:text-9xl font-black mb-6 tracking-tighter leading-tight">
                        Aditya <br />
                        <span className="text-gradient">Manas</span>
                    </h1>
                    
                    <p className="text-lg sm:text-xl md:text-3xl text-gray-400 max-w-2xl mb-12 leading-relaxed font-light">
                        Architecting <span className="text-white font-medium">high-performance</span> digital 
                        landscapes with <span className="text-primary italic">modern technology</span>.
                    </p>

                    <div className="flex flex-wrap justify-center md:justify-start gap-8">
                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href="#projects"
                            className="px-10 py-4 rounded-2xl bg-white text-black font-bold hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-all"
                        >
                            Explore Growth
                        </motion.a>
                        <div className="flex gap-6 items-center">
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
                                        className="p-4 rounded-2xl glass text-gray-400 border border-white/5 hover:border-white/20 transition-all"
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
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    style={{ 
                        rotateX, 
                        rotateY, 
                        x: charX,
                        y: charY,
                        translateY: y1,
                        opacity: opacityTransform,
                        transformStyle: "preserve-3d"
                    }}
                    className="relative flex-1 flex justify-center items-center h-[500px] md:h-[700px]"
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
                            y: [0, -20, 0],
                            rotateZ: [0, 1, -1, 0]
                        }}
                        transition={{ 
                            duration: 7, 
                            repeat: Infinity, 
                            ease: "easeInOut" 
                        }}
                        style={{ transform: "translateZ(100px)" }}
                        className="relative z-20 w-80 h-80 md:w-[500px] md:h-[500px] rounded-[5rem] overflow-hidden"
                    >
                        {/* Soft Edge Overlay to blend with background */}
                        <div className="absolute inset-0 z-10 shadow-[inset_0_0_100px_rgba(0,0,0,0.8)] pointer-events-none rounded-[5rem]" />
                        
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

                    {/* Floating Tech Orbs (Parallax) */}
                    {[
                        { icon: Code2, t: "10%", l: "15%", z: 150, delay: 0 },
                        { icon: Cpu, b: "15%", r: "10%", z: 200, delay: 0.5 },
                        { icon: Globe, t: "20%", r: "15%", z: 120, delay: 1 },
                        { icon: Rocket, b: "20%", l: "10%", z: 250, delay: 1.5 }
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
                                    y: [0, -20, 0],
                                    rotate: [0, 15, -15, 0]
                                }}
                                transition={{ 
                                    duration: 5 + idx, 
                                    repeat: Infinity, 
                                    delay: orb.delay,
                                    ease: "easeInOut" 
                                }}
                                className="absolute z-30 p-5 rounded-full glass border border-white/10 shadow-[0_0_20px_rgba(255,255,255,0.1)] text-primary md:flex hidden items-center justify-center "
                            >
                                <Icon className="w-8 h-8" />
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
