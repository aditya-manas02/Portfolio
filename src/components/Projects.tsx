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
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="group relative snap-center shrink-0 w-[85vw] sm:w-[400px] lg:w-[450px]"
        >
            <div className="relative h-[450px] sm:h-[550px] w-full bg-black border-2 border-white/20 brutalist-border overflow-hidden flex flex-col justify-between">
                
                {/* Tech Bar */}
                <div className="border-b-2 border-white/20 p-3 bg-black flex gap-2 overflow-hidden z-10">
                    <div className="flex animate-marquee gap-2">
                        {[...project.tech, ...project.tech, ...project.tech].map((t: string, i: number) => (
                            <span key={`${t}-${i}`} className="px-2 py-1 bg-[#ccff00] text-black font-mono-tech text-[10px] font-bold uppercase tracking-widest whitespace-nowrap">
                                {t}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Image Area */}
                <div className="relative flex-1 overflow-hidden border-b-2 border-white/20 bg-[#111]">
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors" />
                </div>

                {/* Content */}
                <div className="p-6 bg-black z-10 relative">
                    <div className="absolute top-0 right-6 -translate-y-1/2 flex gap-2">
                        {project.live && (
                            <a 
                                href={project.link} 
                                className="w-12 h-12 bg-white text-black flex items-center justify-center brutalist-border !border-black hover:!bg-[#ccff00]"
                                target="_blank"
                            >
                                <ArrowUpRight className="w-6 h-6" />
                            </a>
                        )}
                        <a href={project.github} target="_blank" className="w-12 h-12 bg-black border-2 border-white text-white flex items-center justify-center hover:bg-white hover:text-black transition-colors">
                            <Github className="w-6 h-6" />
                        </a>
                    </div>

                    <div className="font-mono-tech text-white/50 text-xs mb-2 uppercase">
                        [{project.subtitle}]
                    </div>
                    <h3 className="text-3xl font-black text-white uppercase tracking-tighter mb-4 group-hover:text-[#ccff00] transition-colors">
                        {project.title}
                    </h3>
                    <p className="text-white/70 text-sm font-mono-tech">
                        {project.description}
                    </p>
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
    
    const x = useTransform(scrollYProgress, [0, 1], [0, -200]);

    return (
        <section id="projects" ref={containerRef} className="py-32 relative bg-black border-y-2 border-white/20 overflow-hidden">
            
            {/* Background Marquee */}
            <motion.div style={{ x }} className="absolute top-10 left-0 w-[200vw] text-[12vw] font-black text-white/[0.03] uppercase whitespace-nowrap pointer-events-none leading-none select-none">
                DEPLOY &gt; ITERATE &gt; SCALE &gt;
            </motion.div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end gap-6 border-b-2 border-white/20 pb-8">
                    <div>
                        <span className="font-mono-tech text-[#ccff00] text-sm mb-2 block">/* SYSTEM_OUTPUT */</span>
                        <h2 className="text-5xl md:text-7xl font-black uppercase">Projects</h2>
                    </div>
                    <div className="font-mono-tech text-white/50 text-right text-xs">
                        TOTAL: {projects.length} <br />
                        STATUS: OPERATIONAL
                    </div>
                </div>
            </div>

            <div className="relative w-full z-10">
                <div className="flex gap-10 overflow-x-auto snap-x snap-mandatory px-4 sm:px-6 lg:px-8 pb-12 pt-4 hide-scrollbar">
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
