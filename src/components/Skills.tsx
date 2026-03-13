import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Layout, Terminal, Cpu, Users } from 'lucide-react';

const skills = [
    {
        category: 'Languages',
        icon: <Code2 className="w-6 h-6" />,
        items: ['Python', 'C++', 'JavaScript', 'C', 'PHP', 'Java'],
        color: 'from-blue-500 to-cyan-500',
    },
    {
        category: 'Frameworks',
        icon: <Layout className="w-6 h-6" />,
        items: ['HTML & CSS', 'Node.js', 'React'],
        color: 'from-purple-500 to-pink-500',
    },
    {
        category: 'Tools/Platforms',
        icon: <Database className="w-6 h-6" />,
        items: ['MySQL', 'MongoDB', 'Linux'],
        color: 'from-green-500 to-emerald-500',
    },
    {
        category: 'Soft Skills',
        icon: <Users className="w-6 h-6" />,
        items: ['Problem-Solving', 'Leadership', 'Teamwork', 'Time Management', 'Adaptability'],
        color: 'from-orange-500 to-red-500',
    },
];

const Skills = () => {
    return (
        <section id="skills" className="py-24 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Technical <span className="text-gradient">Expertise</span></h2>
                    <div className="w-20 h-1.5 bg-primary mx-auto rounded-full" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill.category}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="glass p-8 rounded-3xl relative group"
                        >
                            <div className={cn(
                                "w-12 h-12 rounded-2xl flex items-center justify-center mb-6 bg-gradient-to-br transition-all group-hover:scale-110",
                                skill.color
                            )}>
                                {skill.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-4">{skill.category}</h3>
                            <div className="flex flex-wrap gap-2">
                                {skill.items.map((item) => (
                                    <span
                                        key={item}
                                        className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-gray-400 group-hover:text-white transition-colors"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;

// Helper to handle cn if needed or import it
import { cn } from '../lib/utils';
