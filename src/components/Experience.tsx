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
        <section id="experience" className="py-24 relative overflow-hidden z-10 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-primary mb-4">
                        Professional Journey
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
                            className="luxury-card p-8 md:p-10 flex flex-col md:flex-row gap-6 items-start group"
                        >
                            <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-200 group-hover:bg-primary group-hover:border-primary transition-colors shrink-0 shadow-sm">
                                <Briefcase className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
                            </div>
                            <div className="flex-1">
                                <h3 className="text-xl font-bold tracking-tight text-primary mb-1">{exp.title}</h3>
                                <div className="text-base text-accent font-semibold mb-4">{exp.company}</div>
                                <p className="text-secondary leading-relaxed font-normal mb-6">
                                    {exp.description}
                                </p>
                                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-zinc-50 border border-zinc-200 rounded-full text-xs text-secondary font-medium shadow-sm">
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
