import { motion } from 'framer-motion';
import { Calendar, MapPin } from 'lucide-react';

const education = [
    {
        institution: 'Lovely Professional University',
        degree: 'Bachelor of Technology in Computer Science',
        period: 'Aug 2022 - Aug 2026',
        location: 'Phagwara, Punjab',
        details: [
            'Current CGPA: 6.75',
            'Focus on Full Stack Development and AI integration.',
        ]
    },
    {
        institution: 'Kendriya Vidyalaya Kankarbagh',
        degree: 'Senior Secondary (12th)',
        period: 'Apr 2020 - Apr 2021',
        location: 'Patna, Bihar',
        details: [
            'Percentage: 75.3%',
            'Science stream with focus on Physics, Chemistry, and Mathematics.',
        ]
    },
    {
        institution: 'Kendriya Vidyalaya Kankarbagh',
        degree: 'Secondary (10th)',
        period: 'Apr 2018 - Apr 2019',
        location: 'Patna, Bihar',
        details: [
            'Percentage: 74.5%',
            'Foundation in core subjects.',
        ]
    }
];

const Education = () => {
    return (
        <section id="education" className="py-24 relative overflow-hidden z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                        Academic <span className="text-white/40">Background</span>
                    </h2>
                </motion.div>

                <div className="max-w-4xl mx-auto space-y-6">
                    {education.map((edu, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5, ease: "easeOut" }}
                            className="glass-card p-8 md:p-10 group hover:bg-white/[0.04] transition-colors"
                        >
                            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-6">
                                <div>
                                    <h3 className="text-2xl font-semibold tracking-tight text-white mb-2">{edu.degree}</h3>
                                    <div className="text-lg text-white/70 font-medium">{edu.institution}</div>
                                </div>
                                <div className="flex flex-col gap-2 md:items-end">
                                    <div className="inline-flex items-center gap-2 px-3 py-1.5 glass-pill text-xs text-white/60 font-medium">
                                        <Calendar className="w-3.5 h-3.5" />
                                        {edu.period}
                                    </div>
                                    <div className="inline-flex items-center gap-2 text-xs text-secondary font-light">
                                        <MapPin className="w-3.5 h-3.5" />
                                        {edu.location}
                                    </div>
                                </div>
                            </div>
                            
                            <ul className="space-y-3">
                                {edu.details.map((detail, idx) => (
                                    <li key={idx} className="flex items-start text-secondary font-light">
                                        <span className="w-1.5 h-1.5 rounded-full bg-white/30 mt-2 mr-3 shrink-0" />
                                        <span>{detail}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
