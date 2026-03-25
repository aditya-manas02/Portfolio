import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Github, ArrowUpRight, Sparkles } from 'lucide-react';
import gsap from 'gsap';

const projects = [
    {
        title: 'Emotion curator',
        subtitle: 'AI Mood Engine',
        description: 'AI-driven music curation based on mood. High performance React stack.',
        tech: ['React', 'TypeScript', 'Bun', 'Vite'],
        link: 'https://emotion-beat-curator-bot.vercel.app/',
        github: 'https://github.com/aditya-manas02/emotion-beat-curator-bot',
        image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=800',
        color: 'from-blue-600 to-cyan-500',
        live: true,
    },
    {
        title: 'SafetyWatch',
        subtitle: 'Security Platform',
        description: 'Community security platform with real-time alerting and JWT auth.',
        tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind', 'JWT'],
        link: 'https://safetywatch.vercel.app',
        github: 'https://github.com/aditya-manas02/safetywatch-frontend',
        image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&q=80&w=800',
        color: 'from-purple-600 to-pink-500',
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
        color: 'from-green-600 to-emerald-500',
        live: false,
    },
];

const ProjectCard = ({ project, index }: { project: any, index: number }) => {
    const cardRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const card = cardRef.current;
        if (!card || typeof window === 'undefined') return;

        try {
            // Keep GSAP for ultra-smooth 3D tilt
            const xTo = gsap.quickTo(card, "rotateY", { duration: 0.5, ease: "power2.out" });
            const yTo = gsap.quickTo(card, "rotateX", { duration: 0.5, ease: "power2.out" });

            const handleMouseMove = (e: MouseEvent) => {
                const rect = card.getBoundingClientRect();
                const x = (e.clientX - (rect.left + rect.width / 2)) / (rect.width / 2);
                const y = (e.clientY - (rect.top + rect.height / 2)) / (rect.height / 2);
                xTo(x * 12);
                yTo(y * -12);
            };

            const handleMouseLeave = () => {
                xTo(0);
                yTo(0);
            };

            card.addEventListener('mousemove', handleMouseMove);
            card.addEventListener('mouseleave', handleMouseLeave);

            return () => {
                card.removeEventListener('mousemove', handleMouseMove);
                card.removeEventListener('mouseleave', handleMouseLeave);
            };
        } catch (err) {
            console.error("GSAP tilt error:", err);
        }
    }, []);

    return (
        <motion.div 
            ref={cardRef}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="group relative snap-center shrink-0 w-[85vw] sm:w-[380px] lg:w-[420px] perspective-2000"
            style={{ transformStyle: 'preserve-3d' }}
        >
            <div className="relative h-[380px] sm:h-[450px] w-full bg-[#0a0f1e] rounded-[2.5rem] overflow-hidden border border-white/5 transition-all duration-700 shadow-2xl">
                {/* Image */}
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-all duration-1000 brightness-[0.6] group-hover:brightness-90 group-hover:scale-105"
                />
                
                {/* Glowing Aura */}
                <div className={`absolute -inset-10 bg-gradient-to-tr ${project.color} opacity-0 group-hover:opacity-20 blur-3xl transition-all duration-1000 pointer-events-none`} />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

                {/* Content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end" style={{ transform: 'translateZ(40px)' }}>
                    <h3 className="text-2xl font-black text-white uppercase tracking-tighter mb-2 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                        {project.title}
                    </h3>
                    <p className="text-gray-300 text-sm font-light mb-6 opacity-0 group-hover:opacity-100 transition-all duration-700 h-0 group-hover:h-auto overflow-hidden">
                        {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-6 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 delay-100 h-0 group-hover:h-auto overflow-hidden">
                         {project.tech.map((t: string) => (
                             <span key={t} className="px-3 py-1 bg-white/10 rounded-full text-[10px] font-bold tracking-widest uppercase text-white/70">
                                 {t}
                             </span>
                         ))}
                    </div>

                    <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-all duration-700 delay-200">
                        {project.live && (
                            <a 
                                href={project.link} 
                                className="flex-1 text-center py-2.5 bg-white text-black rounded-full font-black uppercase text-[10px] flex items-center justify-center gap-2 hover:bg-primary hover:text-white transition-all"
                                target="_blank"
                            >
                                Launch <ArrowUpRight className="w-4 h-4" />
                            </a>
                        )}
                        <a href={project.github} target="_blank" className="p-2.5 bg-white/10 rounded-full border border-white/20 text-white hover:bg-white/30 transition-all">
                            <Github className="w-4 h-4" />
                        </a>
                    </div>
                </div>

                {/* Top Right Decoration */}
                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-700" style={{ transform: 'translateZ(60px)' }}>
                    <Sparkles className="w-6 h-6 text-primary animate-pulse" />
                </div>
            </div>
        </motion.div>
    );
};

const Projects = () => {

    return (
        <section id="projects" className="py-24 relative bg-background overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Featured <span className="text-gradient">Projects</span></h2>
                    <div className="w-20 h-1.5 bg-primary mx-auto rounded-full" />
                </motion.div>
            </div>

            {/* Premium Slideshow Container */}
            <div className="relative w-full">
                {/* Scroll Hint Gradient */}
                <div className="absolute top-0 right-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none hidden md:block" />
                
                <div 
                    className="flex gap-6 md:gap-10 overflow-x-auto snap-x snap-mandatory px-4 sm:px-6 lg:px-8 pb-12 pt-4 hide-scrollbar"
                >
                    {projects.map((project, index) => (
                        <ProjectCard key={project.title} project={project} index={index} />
                    ))}
                    {/* Empty block to allow scrolling past the last item comfortably */}
                    <div className="snap-center shrink-0 w-[4vw] md:w-[10vw]" />
                </div>
            </div>
        </section>
    );
};

export default Projects;
