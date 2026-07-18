import { useRef } from 'react';
import { motion } from 'framer-motion';
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
            <div className="luxury-card relative h-[500px] sm:h-[600px] w-full overflow-hidden flex flex-col justify-between">
                
                {/* Image Area */}
                <div className="relative h-1/2 w-full overflow-hidden border-b border-zinc-100 bg-zinc-50">
                    <motion.img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    {/* Soft inset shadow overlay */}
                    <div className="absolute inset-0 shadow-[inset_0_0_20px_rgba(0,0,0,0.05)] pointer-events-none" />
                </div>

                {/* Content Area */}
                <div className="p-8 h-1/2 flex flex-col justify-between bg-white z-10 relative">
                    <div>
                        <div className="text-accent text-xs font-semibold mb-2 tracking-wide uppercase">
                            {project.subtitle}
                        </div>
                        <h3 className="text-2xl font-bold text-primary tracking-tight mb-3">
                            {project.title}
                        </h3>
                        <p className="text-secondary text-sm leading-relaxed mb-6 font-normal line-clamp-3">
                            {project.description}
                        </p>
                    </div>
                    
                    <div>
                        <div className="flex flex-wrap gap-2 mb-6">
                            {project.tech.map((t: string, i: number) => (
                                <span key={`${t}-${i}`} className="px-3 py-1 bg-zinc-50 text-zinc-600 text-[11px] font-medium rounded-full border border-zinc-200">
                                    {t}
                                </span>
                            ))}
                        </div>

                        <div className="flex gap-3 pt-4 border-t border-zinc-100">
                            {project.live && (
                                <a 
                                    href={project.link} 
                                    className="flex items-center gap-2 text-sm font-medium text-white bg-primary px-4 py-2 rounded-full hover:bg-zinc-800 transition-colors shadow-md"
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
                                className="flex items-center gap-2 text-sm font-medium text-secondary bg-white border border-zinc-200 px-4 py-2 rounded-full hover:bg-zinc-50 transition-colors shadow-sm"
                            >
                                Source
                                <Github className="w-4 h-4" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

const Projects = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    return (
        <section id="projects" ref={containerRef} className="py-32 relative overflow-hidden z-10">
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end gap-6 pb-6 border-b border-zinc-200">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-primary">Selected Works</h2>
                    </div>
                    <div className="text-secondary text-sm font-medium uppercase tracking-widest">
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
