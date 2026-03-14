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
        <section id="education" className="py-24 bg-white/[0.01]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Academic <span className="text-gradient">Background</span></h2>
                    <div className="w-20 h-1.5 bg-primary mx-auto rounded-full" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {education.map((edu, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="glass p-8 rounded-[2.5rem] hover:bg-white/[0.05] transition-all group border-white/5 relative overflow-hidden"
                        >
                            {/* Decorative background element */}
                            <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/5 blur-3xl rounded-full group-hover:bg-primary/10 transition-colors" />

                            <div className="flex flex-col items-center text-center">
                                <div className="w-28 h-28 p-4 rounded-3xl bg-white/10 mb-6 group-hover:scale-110 transition-transform duration-500 flex items-center justify-center relative overflow-hidden">
                                    <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    <img src={edu.logo} alt={edu.institution} className="max-w-[85%] max-h-[85%] object-contain filter drop-shadow-2xl relative z-10" />
                                </div>

                                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2 min-h-[3.5rem] flex items-center justify-center">{edu.institution}</h3>
                                <p className="text-gray-300 font-semibold mb-4 text-sm px-2 bg-white/5 py-1 rounded-lg">{edu.degree}</p>

                                <div className="space-y-3 w-full border-t border-white/10 pt-4">
                                    <div className="flex items-center justify-center gap-2 text-gray-400 text-sm">
                                        <Calendar className="w-4 h-4 text-primary" />
                                        {edu.period}
                                    </div>
                                    <div className="flex items-center justify-center gap-2 text-gray-400 text-sm">
                                        <MapPin className="w-4 h-4 text-primary" />
                                        {edu.location}
                                    </div>
                                    <div className="mt-4 inline-block px-4 py-2 rounded-2xl bg-primary/10 text-primary font-black text-sm border border-primary/20">
                                        {edu.status}
                                    </div>
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
