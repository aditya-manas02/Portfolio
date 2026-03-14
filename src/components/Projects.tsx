import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
    {
        title: 'Emotion Beat Curator Bot',
        subtitle: 'AI-Powered Music Curation',
        description: 'An AI-driven web application that curates personalized music playlists based on the user\'s current mood. Built with a focus on speed and modern DX.',
        tech: ['React', 'TypeScript', 'Bun', 'Tailwind CSS', 'Vite'],
        link: 'https://github.com/aditya-manas02/emotion-beat-curator-bot',
        github: 'https://github.com/aditya-manas02/emotion-beat-curator-bot',
        image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=800',
        live: false,
    },
    {
        title: 'SafetyWatch',
        subtitle: 'Community Safety & Incident Reporting Platform',
        description: 'A full-stack web application for real-time neighborhood safety incident reporting. Features secure JWT authentication, role-based access, and Cloudinary integration.',
        tech: ['React (Vite)', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Cloudinary'],
        link: 'https://safetywatch.vercel.app',
        github: 'https://github.com/aditya-manas02/safetywatch-frontend',
        image: '/safetywatch_real.png',
        live: true,
    },
    {
        title: 'GreenConnect',
        subtitle: 'Tree Plantation Platform',
        description: 'A platform connecting organizations and citizens for tree plantation initiatives. Includes event creation and location-based search filters.',
        tech: ['PHP', 'MySQL', 'Tailwind CSS', 'JavaScript'],
        link: 'https://github.com/aditya-manas02/greenconnect',
        github: 'https://github.com/aditya-manas02/greenconnect',
        image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=800', // Placeholder
        live: false,
    },
];

const Projects = () => {
    return (
        <section id="projects" className="py-24 bg-white/[0.02]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Featured <span className="text-gradient">Projects</span></h2>
                    <div className="w-20 h-1.5 bg-primary mx-auto rounded-full" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="group relative glass rounded-[2.5rem] overflow-hidden hover-glow transition-all duration-500"
                        >
                            <div className="relative h-64 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />

                                <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-8 right-4 sm:right-8 flex justify-between items-end">
                                    <div>
                                        <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">{project.title}</h3>
                                        <p className="text-primary font-medium text-xs sm:text-sm">{project.subtitle}</p>
                                    </div>
                                    <div className="flex gap-3">
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-2 rounded-full glass hover:bg-white/20 transition-all"
                                        >
                                            <Github className="w-5 h-5" />
                                        </a>
                                        {project.live && (
                                            <a
                                                href={project.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="p-2 rounded-full bg-primary text-white hover:bg-primary/80 transition-all"
                                            >
                                                <ExternalLink className="w-5 h-5" />
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>

                            <div className="p-8">
                                <p className="text-gray-400 mb-6 line-clamp-3 group-hover:line-clamp-none transition-all duration-500">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((t) => (
                                        <span
                                            key={t}
                                            className="px-3 py-1 text-xs font-semibold rounded-lg bg-primary/10 text-primary border border-primary/20"
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
