import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ArrowUpRight } from 'lucide-react';

const allProjects = [
    {
        title: 'SafetyWatch',
        subtitle: 'Community Safety & Incident Reporting',
        description: 'A full-stack web application developed using React (Vite) and Node.js/Express to enable users to report and track neighborhood safety incidents in real time. Features secure authentication with JWT, role-based access, and Cloudinary integration for image uploads.',
        tech: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Cloudinary'],
        category: 'Full Stack',
        link: 'https://safetywatch.vercel.app',
        github: 'https://github.com/aditya-manas02/safetywatch-frontend',
        image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&q=80&w=800',
        live: true,
    },
    {
        title: 'GreenConnect',
        subtitle: 'Tree Plantation Platform',
        description: 'A full-stack web platform built to connect organizations and citizens for tree plantation initiatives. Features event creation modules and search filters by location, tree type, and date to enhance user engagement.',
        tech: ['PHP', 'MySQL', 'Tailwind CSS', 'JavaScript', 'HTML'],
        category: 'Full Stack',
        link: 'https://github.com/aditya-manas02/greenconnect',
        github: 'https://github.com/aditya-manas02/greenconnect',
        image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=800',
        live: false,
    },
];

const categories = ['All', 'Full Stack'];

const ProjectCard = ({ project }: { project: any }) => {
    return (
        <motion.div 
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.4 }}
            className="group relative w-full"
        >
            <div className="luxury-card relative h-[500px] sm:h-[650px] w-full overflow-hidden flex flex-col justify-between">
                
                {/* Image Area */}
                <div className="relative h-2/5 w-full overflow-hidden border-b border-zinc-100 bg-zinc-50 shrink-0">
                    <motion.img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 shadow-[inset_0_0_20px_rgba(0,0,0,0.05)] pointer-events-none" />
                </div>

                {/* Content Area */}
                <div className="p-8 h-3/5 flex flex-col justify-between bg-white z-10 relative">
                    <div>
                        <div className="text-accent text-xs font-semibold mb-2 tracking-wide uppercase">
                            {project.subtitle}
                        </div>
                        <h3 className="text-2xl font-bold text-primary tracking-tight mb-3">
                            {project.title}
                        </h3>
                        <p className="text-secondary text-sm leading-relaxed mb-6 font-normal">
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
    const [activeTab, setActiveTab] = useState('All');

    const filteredProjects = allProjects.filter(
        (project) => activeTab === 'All' || project.category === activeTab
    );

    return (
        <section id="projects" className="py-32 relative overflow-hidden z-10">
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end gap-6 pb-6 border-b border-zinc-200">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-primary">Selected Works</h2>
                    </div>
                    
                    {/* Interactive Filter Tabs */}
                    <div className="flex bg-zinc-100 p-1.5 rounded-full">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveTab(category)}
                                className={`relative px-5 py-2 text-sm font-medium rounded-full transition-colors ${
                                    activeTab === category ? 'text-primary' : 'text-secondary hover:text-primary'
                                }`}
                            >
                                {activeTab === category && (
                                    <motion.div
                                        layoutId="activeTabIndicator"
                                        className="absolute inset-0 bg-white rounded-full shadow-sm"
                                        initial={false}
                                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                                    />
                                )}
                                <span className="relative z-10">{category}</span>
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project) => (
                            <ProjectCard key={project.title} project={project} />
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
