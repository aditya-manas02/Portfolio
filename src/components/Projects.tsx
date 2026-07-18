import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Github, ArrowUpRight } from 'lucide-react';

import safetywatchImg from '../assets/safetywatch.png';
import solecraftImg from '../assets/solecraft.png';
import emotionBeatImg from '../assets/emotion-beat.png';
import sevantraImg from '../assets/sevantra.png';

const allProjects = [
    {
        title: 'SafetyWatch',
        subtitle: 'Community Safety Platform',
        description: 'A full-stack web application developed using React and Node.js to enable users to report and track neighborhood safety incidents in real time. Features secure JWT authentication and real-time interactive mapping.',
        tech: ['React', 'Node.js', 'Express', 'MongoDB'],
        link: 'https://safetywatch.vercel.app',
        github: 'https://github.com/aditya-manas02/safetywatch-frontend',
        image: safetywatchImg,
        live: true,
    },
    {
        title: 'SoleCraft',
        subtitle: '3D Footwear Configurator',
        description: 'A premium e-commerce platform that allows users to design, customize, and purchase high-end footwear using a real-time 3D configurator. Built with Three.js and Laravel for advanced material selection.',
        tech: ['Three.js', 'Laravel 11', 'Vite', 'GSAP'],
        link: '#',
        github: 'https://github.com/aditya-manas02/solecraft',
        image: solecraftImg,
        live: false,
    },
    {
        title: 'Emotion Beat',
        subtitle: 'AI Music Curator',
        description: 'An AI-powered web app that generates personalized music playlists based on your current emotion or activity. The bot curates tracks that vibe with your mood automatically using advanced public music APIs.',
        tech: ['React', 'Tailwind', 'AI APIs', 'Audio'],
        link: 'https://emotion-beat-curator-bot.vercel.app/',
        github: 'https://github.com/aditya-manas02/emotion-beat-curator-bot',
        image: emotionBeatImg,
        live: true,
    },
    {
        title: 'Sevantra',
        subtitle: 'Civic Engagement Platform',
        description: 'A comprehensive monorepo platform designed to bridge the gap between citizens and NGOs. Features secure Google OAuth, real-time dynamic statistics, and an admin command center for verifying organizations.',
        tech: ['Next.js', 'Express', 'Prisma', 'PostgreSQL'],
        link: 'https://sevantra.vercel.app/',
        github: 'https://github.com/aditya-manas02/sevantra',
        image: sevantraImg,
        live: true,
    }
];

const ProjectCard3D = ({ project, index }: { project: any; index: number }) => {
    const ref = useRef<HTMLDivElement>(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x, { stiffness: 150, damping: 15 });
    const mouseYSpring = useSpring(y, { stiffness: 150, damping: 15 });

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);
    const imageScale = useTransform(mouseXSpring, [-0.5, 0.5], [1.05, 1.1]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
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
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="group perspective-1000 w-full"
        >
            <motion.div
                ref={ref}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{
                    rotateX,
                    rotateY,
                    transformStyle: "preserve-3d",
                }}
                className="luxury-card relative h-[600px] w-full overflow-hidden flex flex-col justify-between transition-transform duration-200 ease-linear"
            >
                {/* 3D Parallax Image Area */}
                <div className="relative h-[45%] w-full overflow-hidden border-b border-zinc-100 bg-zinc-900 shrink-0" style={{ transform: 'translateZ(40px)' }}>
                    <motion.img
                        src={project.image}
                        alt={project.title}
                        style={{ scale: imageScale }}
                        className="w-full h-full object-cover transition-transform duration-700 ease-out opacity-90 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                </div>

                {/* Content Area */}
                <div className="p-8 h-[55%] flex flex-col justify-between bg-white z-10 relative" style={{ transform: 'translateZ(60px)' }}>
                    <div>
                        <div className="text-accent text-xs font-semibold mb-2 tracking-wide uppercase">
                            {project.subtitle}
                        </div>
                        <h3 className="text-3xl font-bold text-primary tracking-tight mb-3">
                            {project.title}
                        </h3>
                        <p className="text-secondary text-sm leading-relaxed mb-6 font-normal">
                            {project.description}
                        </p>
                    </div>
                    
                    <div>
                        <div className="flex flex-wrap gap-2 mb-6">
                            {project.tech.map((t: string, i: number) => (
                                <span key={`${t}-${i}`} className="px-3 py-1 bg-zinc-50 text-zinc-600 text-[11px] font-medium rounded-full border border-zinc-200 shadow-sm">
                                    {t}
                                </span>
                            ))}
                        </div>

                        <div className="flex gap-3 pt-4 border-t border-zinc-100">
                            {project.live && (
                                <a 
                                    href={project.link} 
                                    className="flex items-center gap-2 text-sm font-medium text-white bg-primary px-4 py-2 rounded-full hover:bg-zinc-800 transition-colors shadow-md transform hover:scale-105"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Live Demo
                                    <ArrowUpRight className="w-4 h-4" />
                                </a>
                            )}
                            <a 
                                href={project.github} 
                                target="_blank" 
                                rel="noreferrer"
                                className="flex items-center gap-2 text-sm font-medium text-secondary bg-white border border-zinc-200 px-4 py-2 rounded-full hover:bg-zinc-50 transition-colors shadow-sm transform hover:scale-105"
                            >
                                Source
                                <Github className="w-4 h-4" />
                            </a>
                        </div>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};

const Projects = () => {
    return (
        <section id="projects" className="py-32 relative overflow-hidden z-10 bg-background">
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-primary mb-4">Featured Work</h2>
                    <p className="text-lg text-secondary font-normal max-w-2xl mx-auto">
                        A collection of cutting-edge web applications, spanning high-end e-commerce, AI curation, and real-time incident reporting platforms.
                    </p>
                </motion.div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    {allProjects.map((project, index) => (
                        <ProjectCard3D key={project.title} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
