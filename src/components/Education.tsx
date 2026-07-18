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
        <section id="education" className="py-24 relative overflow-hidden z-10 bg-white border-y border-zinc-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-primary mb-4">
                        Academic Background
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
                            className="luxury-card p-8 md:p-10 group"
                        >
                            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-6 pb-6 border-b border-zinc-100">
                                <div>
                                    <h3 className="text-xl font-bold tracking-tight text-primary mb-1">{edu.degree}</h3>
                                    <div className="text-base text-accent font-semibold">{edu.institution}</div>
                                </div>
                                <div className="flex flex-col gap-2 md:items-end">
                                    <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-zinc-50 border border-zinc-200 rounded-full text-xs text-secondary font-medium shadow-sm">
                                        <Calendar className="w-3.5 h-3.5" />
                                        {edu.period}
                                    </div>
                                    <div className="inline-flex items-center gap-2 text-xs text-secondary font-medium px-1">
                                        <MapPin className="w-3.5 h-3.5" />
                                        {edu.location}
                                    </div>
                                </div>
                            </div>
                            
                            <ul className="space-y-3">
                                {edu.details.map((detail, idx) => (
                                    <li key={idx} className="flex items-start text-secondary font-normal">
                                        <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 mr-3 shrink-0" />
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
