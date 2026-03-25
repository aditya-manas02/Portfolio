import { motion } from 'framer-motion';
import { Calendar, Award, BookOpen } from 'lucide-react';

const experiences = [
    {
        type: 'Training',
        title: 'Java Fundamentals – Skill Stones',
        organization: 'Student',
        period: 'June 2025 – July 2025',
        description: 'Completed an intensive summer training in Java Fundamentals, solidifying understanding of core programming concepts and object-oriented principles.',
        tech: 'Java',
        icon: <BookOpen className="w-5 h-5" />,
    },
    {
        type: 'Event',
        title: 'BinaryBlitz Hackathon',
        organization: 'Participant',
        period: 'March 2024',
        achievement: '🏆 Achieved Top 10 out of 300 Teams',
        description: 'Collaborated with a team to solve complex problems under time constraints.',
        icon: <Award className="w-5 h-5" />,
    },
    {
        type: 'Event',
        title: 'CodeOffDuty Hackathon',
        organization: 'Participant',
        period: 'March 2024',
        achievement: '🏆 Achieved Top 15 out of 200 Teams',
        description: 'Engaged in competitive coding and creative problem solving.',
        icon: <Award className="w-5 h-5" />,
    },
];

const Experience = () => {
    return (
        <section id="experience" className="py-24 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Journey & <span className="text-gradient">Experience</span></h2>
                    <div className="w-20 h-1.5 bg-primary mx-auto rounded-full" />
                </motion.div>

                <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary/50 to-transparent md:-translate-x-1/2" />

                    <div className="space-y-12">
                        {experiences.map((exp, index) => (
                            <div key={index} className="relative flex flex-col md:flex-row items-center">
                                {/* Timeline Dot Desktop */}
                                <div className="absolute left-1/2 w-4 h-4 rounded-full bg-primary shadow-[0_0_15px_rgba(14,165,233,0.8)] z-10 -translate-x-1/2 hidden md:block" />

                                <div className={`w-full md:w-1/2 flex ${index % 2 === 0 ? 'md:justify-end md:pr-16' : 'md:justify-start md:pl-16 md:ml-auto'}`}>
                                    <motion.div
                                        initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        className="glass p-6 sm:p-8 rounded-[2rem] w-full hover:bg-white/[0.08] transition-all group relative border-white/10 ml-8 md:ml-0"
                                    >
                                        {/* Mobile Dot */}
                                        <div className="absolute top-10 -left-[22px] w-3 h-3 rounded-full bg-primary md:hidden ring-4 ring-primary/20" />

                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="p-2 rounded-xl bg-primary/20 text-primary group-hover:scale-110 transition-transform">
                                                {exp.icon}
                                            </div>
                                            <span className="text-xs font-bold text-primary uppercase tracking-widest">{exp.type}</span>
                                        </div>

                                        <h3 className="text-xl sm:text-2xl font-bold mb-1 text-white group-hover:text-primary transition-colors">{exp.title}</h3>
                                        <p className="text-gray-300 font-semibold mb-3 text-sm sm:text-base">{exp.organization}</p>

                                        <div className="flex items-center gap-2 text-xs text-gray-400 mb-4 bg-white/5 py-1 px-3 rounded-lg w-fit">
                                            <Calendar className="w-3.5 h-3.5" />
                                            {exp.period}
                                        </div>

                                        <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-6 group-hover:text-gray-200 transition-colors">
                                            {exp.description}
                                        </p>

                                        {exp.achievement && (
                                            <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/30 rounded-full shadow-[0_0_20px_rgba(234,179,8,0.15)] group-hover:shadow-[0_0_25px_rgba(234,179,8,0.3)] transition-all">
                                                <span className="text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400 tracking-wide">
                                                    {exp.achievement}
                                                </span>
                                            </div>
                                        )}

                                        {exp.tech && (
                                            <div className="flex flex-wrap gap-2">
                                                <span className="px-4 py-1.5 rounded-xl bg-primary/10 text-[10px] font-bold text-primary border border-primary/20">
                                                    {exp.tech}
                                                </span>
                                            </div>
                                        )}
                                    </motion.div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
