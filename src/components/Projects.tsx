import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Github, ArrowUpRight } from 'lucide-react';

const projects = [
    {
        title: 'Emotion curator',
        subtitle: 'AI Mood Engine',
        description: 'AI-driven music curation based on mood. High performance React stack.',
        tech: ['React', 'TypeScript', 'Bun', 'Vite'],
        link: 'https://emotion-beat-curator-bot.vercel.app/',
        github: 'https://github.com/aditya-manas02/emotion-beat-curator-bot',
        image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=800',
        live: true,
    },
    {
        title: 'SafetyWatch',
        subtitle: 'Security Platform',
        description: 'Community security platform with real-time alerting and JWT auth.',
        tech: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT'],
        link: 'https://safetywatch.vercel.app',
        github: 'https://github.com/aditya-manas02/safetywatch-frontend',
        image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&q=80&w=800',
        live: true,
    },
    {
        title: 'GreenConnect',
        subtitle: 'Eco Solution',
        description: 'Platform connecting entities for massive tree plantation drives.',
        tech: ['PHP', 'MySQL', 'Tailwind'],
        link: 'https://github.com/aditya-manas02/greenconnect',
        github: 'https://github.com/aditya-manas02/greenconnect',
        image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=800',
        live: false,
    },
];

const ProjectCard = ({ project, index }: { project: any, index: number }) => {
    return (
        <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="group relative snap-center shrink-0 w-[85vw] sm:w-[450px] lg:w-[500px]"
        >
            <div className="glass-card relative h-[500px] sm:h-[600px] w-full overflow-hidden flex flex-col justify-between group-hover:border-white/20">
                
                {/* Image Area with luxury zoom */}
                <div className="relative flex-1 overflow-hidden">
                    <motion.img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/90" />
                </div>

                {/* Content Area overlay */}
                <div className="absolute inset-x-0 bottom-0 p-8 z-10 flex flex-col justify-end h-full pointer-events-none">
                    
                    <div className="pointer-events-auto w-full">
                        <div className="flex justify-between items-end w-full mb-4">
                            <div>
                                <div className="text-white/60 text-sm font-medium mb-1 tracking-wide uppercase">
                                    {project.subtitle}
                                </div>
                                <h3 className="text-3xl font-bold text-white tracking-tight">
                                    {project.title}
                                </h3>
                            </div>
                            
                            <div className="flex gap-3">
                                {project.live && (
                                    <a 
                                        href={project.link} 
                                        className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:scale-110 transition-transform shadow-lg"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <ArrowUpRight className="w-5 h-5" />
                                    </a>
                                )}
                                <a 
                                    href={project.github} 
                                    target="_blank" 
                                    rel="noreferrer"
                                    className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white flex items-center justify-center hover:bg-white/30 transition-colors"
                                >
                                    <Github className="w-5 h-5" />
                                </a>
                            </div>
                        </div>

                        <p className="text-white/80 text-sm leading-relaxed mb-6 font-light max-w-sm">
                            {project.description}
                        </p>
                        
                        <div className="flex flex-wrap gap-2">
                            {project.tech.map((t: string, i: number) => (
                                <span key={`${t}-${i}`} className="px-3 py-1.5 bg-white/10 backdrop-blur-md border border-white/10 text-white text-[11px] font-medium tracking-wide rounded-full">
                                    {t}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

const Projects = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });
    
    const x = useTransform(scrollYProgress, [0, 1], [0, -300]);

    return (
        <section id="projects" ref={containerRef} className="py-40 relative overflow-hidden z-10">
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end gap-6 pb-8 border-b border-white/10">
                    <div>
                        <h2 className="text-5xl md:text-7xl font-bold tracking-tight">Selected <span className="text-white/40">Works</span></h2>
                    </div>
                    <div className="text-white/50 text-right text-sm font-light uppercase tracking-widest">
                        Case Studies
                    </div>
                </div>
            </div>

            <div className="relative w-full z-10">
                <div className="flex gap-8 overflow-x-auto snap-x snap-mandatory px-4 sm:px-6 lg:px-8 pb-16 pt-4 hide-scrollbar">
                    {projects.map((project, index) => (
                        <ProjectCard key={project.title} project={project} index={index} />
                    ))}
                    <div className="snap-center shrink-0 w-[4vw] md:w-[10vw]" />
                </div>
            </div>
        </section>
    );
};

export default Projects;
