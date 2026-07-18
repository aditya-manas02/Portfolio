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

const Skills = () => {
    return (
        <section id="skills" className="py-24 relative overflow-hidden bg-background">
            
            {/* Massive Marquee */}
            <div className="w-full bg-[#ccff00] text-black border-y-4 border-white py-4 overflow-hidden transform -rotate-2 scale-110 relative z-10">
                <div className="flex animate-marquee gap-8 whitespace-nowrap">
                    {[...Array(6)].map((_, i) => (
                        <span key={i} className="text-4xl md:text-6xl font-black uppercase tracking-tighter">
                            TECHNICAL_ARSENAL // NO_COMPROMISE // 
                        </span>
                    ))}
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-32">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12"
                >
                    {skillCategories.map((group, idx) => (
                        <div key={group.category} className="flex flex-col">
                            <div className="flex items-end justify-between border-b-2 border-white/20 pb-2 mb-6">
                                <h3 className="text-2xl font-black uppercase tracking-widest text-white">
                                    {group.category}
                                </h3>
                                <span className="font-mono-tech text-xs text-[#ccff00]">
                                    [SYS_{idx + 1}]
                                </span>
                            </div>
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                                {group.items.map((item, itemIdx) => (
                                    <div
                                        key={item}
                                        className="font-mono-tech text-sm text-white/70 hover:text-[#ccff00] hover:translate-x-1 transition-all duration-300 cursor-default flex items-center gap-2"
                                    >
                                        <span className="text-white/20 text-[10px]">{(itemIdx + 1).toString().padStart(2, '0')}</span>
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
            
            {/* Background Grid Pattern is inherited from App.tsx globals */}
        </section>
    );
};

export default Skills;
