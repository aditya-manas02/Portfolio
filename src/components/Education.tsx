import { motion } from 'framer-motion';
import { Calendar, MapPin } from 'lucide-react';

const education = [
    {
        institution: 'Lovely Professional University',
        degree: 'Bachelor of Technology in Computer Science',
        period: '2023 - Present',
        location: 'Phagwara, Punjab',
        logo: '/lpu_logo_round.png',
        status: 'CGPA: 6.75',
    },
    {
        institution: 'Jeewan Public School',
        degree: 'Higher Secondary Education (XII)',
        period: '2020 - 2022',
        location: 'Motihari, Bihar',
        logo: '/jps_logo_round.jpg',
        status: 'Percentage: 67.2%',
    },
    {
        institution: 'C. S. DAV Public School',
        degree: 'Secondary Education (X)',
        period: '2019 - 2020',
        location: 'Motihari, Bihar',
        logo: '/dav_logo.png',
        status: 'Percentage: 71.7%',
    },
];

const Education = () => {
    return (
        <section id="education" className="py-24 bg-background relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-left mb-16 border-b-4 border-white pb-6"
                >
                    <span className="font-mono-tech text-[#ccff00] text-sm tracking-widest block mb-2">/* ACADEMY_DB */</span>
                    <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter">Academic</h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {education.map((edu, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="brutalist-border bg-black p-8 hover:bg-[#111] transition-colors group relative flex flex-col justify-between min-h-[400px]"
                        >
                            <div className="flex flex-col items-start">
                                <div className="w-20 h-20 bg-white p-2 mb-8 group-hover:-translate-y-2 group-hover:translate-x-2 transition-transform duration-300 brutalist-border">
                                    <img src={edu.logo} alt={edu.institution} className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all" />
                                </div>

                                <h3 className="text-2xl font-black uppercase tracking-tighter mb-4 text-white group-hover:text-[#ccff00] transition-colors line-clamp-2">
                                    {edu.institution}
                                </h3>
                                <p className="text-white/70 font-mono-tech text-sm mb-6 border-l-2 border-[#ccff00] pl-3">
                                    {edu.degree}
                                </p>
                            </div>

                            <div className="space-y-4 w-full border-t-2 border-white/20 pt-6 mt-6">
                                <div className="flex items-center gap-3 font-mono-tech text-white/50 text-xs">
                                    <Calendar className="w-4 h-4 text-[#ccff00]" />
                                    {edu.period}
                                </div>
                                <div className="flex items-center gap-3 font-mono-tech text-white/50 text-xs">
                                    <MapPin className="w-4 h-4 text-[#ccff00]" />
                                    {edu.location}
                                </div>
                                <div className="mt-4 w-full text-center py-3 bg-[#ccff00] text-black font-black uppercase text-sm brutalist-border">
                                    {edu.status}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
