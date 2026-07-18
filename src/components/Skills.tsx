import { motion } from 'framer-motion';

const skillCategories = [
    {
        category: 'Languages',
        items: ['C++', 'Python', 'JavaScript', 'C', 'Java', 'PHP', 'TypeScript', 'SQL']
    },
    {
        category: 'Frameworks',
        items: ['React', 'Node.js', 'Express', 'Next.js', 'Tailwind', 'Laravel', 'Bootstrap', 'Framer']
    },
    {
        category: 'Databases & OS',
        items: ['MySQL', 'MongoDB', 'PostgreSQL', 'Firebase', 'Linux', 'Ubuntu', 'Windows', 'Android']
    },
    {
        category: 'Tools & Platforms',
        items: ['Git', 'GitHub', 'VS Code', 'Vercel', 'Postman', 'Render', 'Canva', 'Figma']
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1 }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
};

const Skills = () => {
    return (
        <section id="skills" className="py-32 relative overflow-hidden z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
                        Technical <span className="text-white/40">Expertise</span>
                    </h2>
                    <p className="text-lg text-secondary font-light max-w-2xl mx-auto">
                        A curated selection of the tools, languages, and frameworks I use to build robust digital solutions.
                    </p>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                    {skillCategories.map((group) => (
                        <motion.div 
                            key={group.category} 
                            variants={itemVariants}
                            className="glass-card p-8 md:p-10 group hover:bg-white/[0.03] transition-colors"
                        >
                            <h3 className="text-2xl font-semibold tracking-tight text-white mb-8 border-b border-white/10 pb-4 group-hover:text-white transition-colors">
                                {group.category}
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                {group.items.map((item) => (
                                    <span
                                        key={item}
                                        className="px-4 py-2 glass-pill text-sm text-secondary hover:text-white hover:bg-white/10 transition-all cursor-default"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
