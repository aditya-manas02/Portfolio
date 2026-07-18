import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
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

const ProjectCard = ({ project, index, range, targetScale, progress }: any) => {
    const container = useRef(null);
    const scale = useTransform(progress, range, [1, targetScale]);
    
    // Parallax effect for the image inside the card
    const imageScale = useTransform(progress, range, [1, 1.2]);

    return (
        <div ref={container} className="h-screen flex items-center justify-center sticky top-0 px-4">
            <motion.div 
                style={{ scale, top: `calc(-5vh + ${index * 25}px)` }} 
                className="relative w-full max-w-5xl h-[600px] luxury-card overflow-hidden flex flex-col md:flex-row shadow-[0_20px_50px_rgba(0,0,0,0.1)] origin-top"
            >
                {/* Image Section */}
                <div className="relative w-full md:w-1/2 h-1/2 md:h-full overflow-hidden bg-zinc-100">
                    <motion.div style={{ scale: imageScale }} className="w-full h-full">
                        <img 
                            src={project.image} 
                            alt={project.title} 
                            className="w-full h-full object-cover"
                        />
                    </motion.div>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/10 pointer-events-none" />
                </div>

                {/* Content Section */}
                <div className="w-full md:w-1/2 h-1/2 md:h-full p-8 md:p-12 flex flex-col justify-between bg-white z-10">
                    <div>
                        <div className="text-accent text-sm font-extrabold tracking-widest uppercase mb-3">
                            {project.subtitle}
                        </div>
                        <h3 className="text-4xl md:text-5xl font-extrabold text-primary tracking-tight mb-4">
                            {project.title}
                        </h3>
                        <p className="text-secondary text-base md:text-lg leading-relaxed mb-8">
                            {project.description}
                        </p>
                        
                        <div className="flex flex-wrap gap-2 mb-8">
                            {project.tech.map((t: string, i: number) => (
                                <span key={i} className="px-4 py-1.5 bg-zinc-50 text-zinc-700 text-xs font-bold rounded-full border border-zinc-200 shadow-sm">
                                    {t}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="flex gap-4 pt-6 border-t border-zinc-100">
                        {project.live && (
                            <a 
                                href={project.link} 
                                className="flex items-center gap-2 text-sm font-bold text-white bg-primary px-6 py-3 rounded-full hover:bg-zinc-800 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
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
                            className="flex items-center gap-2 text-sm font-bold text-secondary bg-white border-2 border-zinc-200 px-6 py-3 rounded-full hover:bg-zinc-50 transition-all shadow-sm hover:shadow hover:-translate-y-0.5"
                        >
                            Source
                            <Github className="w-4 h-4" />
                        </a>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

const Projects = () => {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end']
    });

    return (
        <section id="projects" ref={container} className="relative z-10 bg-background pb-[10vh] mt-24">
            
            <div className="sticky top-0 h-[20vh] flex items-center justify-center pointer-events-none z-0">
                <div className="text-center pt-20">
                    <h2 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-primary mb-4">
                        Selected Works
                    </h2>
                    <p className="text-lg text-secondary font-medium max-w-xl mx-auto">
                        Scroll down to explore my latest creations.
                    </p>
                </div>
            </div>
            
            <div className="mt-[-20vh]">
                {allProjects.map((project, i) => {
                    const targetScale = 1 - ( (allProjects.length - i) * 0.05);
                    return (
                        <ProjectCard 
                            key={i} 
                            index={i} 
                            project={project} 
                            progress={scrollYProgress} 
                            range={[i * 0.25, 1]} 
                            targetScale={targetScale} 
                        />
                    );
                })}
            </div>
        </section>
    );
};

export default Projects;
