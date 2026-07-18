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
        achievement: 'ACHIEVED: Top 10 out of 300 Teams',
        description: 'Collaborated with a team to solve complex problems under time constraints.',
        icon: <Award className="w-5 h-5" />,
    },
    {
        type: 'Event',
        title: 'CodeOffDuty Hackathon',
        organization: 'Participant',
        period: 'March 2024',
        achievement: 'ACHIEVED: Top 15 out of 200 Teams',
        description: 'Engaged in competitive coding and creative problem solving.',
        icon: <Award className="w-5 h-5" />,
    },
];

const Experience = () => {
    return (
        <section id="experience" className="py-24 bg-black relative overflow-hidden border-y-2 border-white/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-left mb-16 border-b-4 border-white pb-6"
                >
                    <span className="font-mono-tech text-[#ccff00] text-sm tracking-widest block mb-2">/* TIMELINE_LOG */</span>
                    <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter">Experience</h2>
                </motion.div>

                <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-white/20 md:-translate-x-1/2" />

                    <div className="space-y-12">
                        {experiences.map((exp, index) => (
                            <div key={index} className="relative flex flex-col md:flex-row items-center">
                                {/* Timeline Dot Desktop */}
                                <div className="absolute left-1/2 w-4 h-4 bg-[#ccff00] z-10 -translate-x-1/2 hidden md:block brutalist-border" />

                                <div className={`w-full md:w-1/2 flex ${index % 2 === 0 ? 'md:justify-end md:pr-16' : 'md:justify-start md:pl-16 md:ml-auto'}`}>
                                    <motion.div
                                        initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        className="brutalist-border bg-[#0a0a0a] p-8 w-full hover:bg-[#111] transition-all group relative ml-8 md:ml-0"
                                    >
                                        {/* Mobile Dot */}
                                        <div className="absolute top-10 -left-[22px] w-4 h-4 bg-[#ccff00] brutalist-border md:hidden" />

                                        <div className="flex items-center justify-between mb-6 border-b-2 border-white/10 pb-4">
                                            <div className="flex items-center gap-3">
                                                <div className="p-2 bg-white text-black brutalist-border group-hover:bg-[#ccff00] transition-colors">
                                                    {exp.icon}
                                                </div>
                                                <span className="font-mono-tech text-xs font-bold text-white uppercase tracking-widest bg-white/10 px-2 py-1">
                                                    [{exp.type}]
                                                </span>
                                            </div>
                                            <div className="flex items-center gap-2 font-mono-tech text-xs text-[#ccff00]">
                                                <Calendar className="w-3.5 h-3.5" />
                                                {exp.period}
                                            </div>
                                        </div>

                                        <h3 className="text-2xl font-black uppercase tracking-tighter mb-2 text-white group-hover:text-[#ccff00] transition-colors">
                                            {exp.title}
                                        </h3>
                                        <p className="font-mono-tech text-[#ccff00] text-sm mb-6 uppercase">
                                            &gt; {exp.organization}
                                        </p>

                                        <p className="text-white/70 font-mono-tech text-sm leading-relaxed mb-6">
                                            {exp.description}
                                        </p>

                                        {exp.achievement && (
                                            <div className="mb-6 w-full brutalist-border bg-black border-2 border-[#ccff00] p-3 text-center">
                                                <span className="font-mono-tech text-xs font-bold text-[#ccff00] uppercase tracking-wider">
                                                    {exp.achievement}
                                                </span>
                                            </div>
                                        )}

                                        {exp.tech && (
                                            <div className="flex flex-wrap gap-2">
                                                <span className="px-3 py-1 bg-white text-black font-mono-tech text-[10px] font-black uppercase brutalist-border">
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
