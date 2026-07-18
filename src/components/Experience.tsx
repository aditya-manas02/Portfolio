import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

const experiences = [
    {
        title: 'Full Stack Web Developer',
        company: 'Vigour',
        period: 'Nov 2024 - Dec 2024',
        description: 'Engineered a scalable health and fitness dashboard using Next.js, integrating complex state management and real-time data visualization.',
    },
    {
        title: 'AI & Web Trainee',
        company: 'Infosys Springboard',
        period: 'Jun 2023 - Sep 2023',
        description: 'Developed full-stack web applications utilizing advanced AI models and cloud-native architecture principles.',
    },
];

const Experience = () => {
    return (
        <section id="experience" className="py-24 relative overflow-hidden z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                        Professional <span className="text-white/40">Journey</span>
                    </h2>
                </motion.div>

                <div className="max-w-4xl mx-auto space-y-6">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5, ease: "easeOut" }}
                            className="glass-card p-8 md:p-10 flex flex-col md:flex-row gap-6 items-start group hover:bg-white/[0.04]"
                        >
                            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 group-hover:bg-white/10 transition-colors shrink-0">
                                <Briefcase className="w-8 h-8 text-white/80" />
                            </div>
                            <div className="flex-1">
                                <h3 className="text-2xl font-semibold tracking-tight text-white mb-2">{exp.title}</h3>
                                <div className="text-lg text-white/70 font-medium mb-4">{exp.company}</div>
                                <p className="text-secondary leading-relaxed font-light mb-4">
                                    {exp.description}
                                </p>
                                <div className="inline-flex items-center gap-2 px-3 py-1.5 glass-pill text-xs text-white/60 font-medium">
                                    <Calendar className="w-3.5 h-3.5" />
                                    {exp.period}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
