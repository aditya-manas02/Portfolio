import { motion } from 'framer-motion';
import { ExternalLink, ShieldCheck } from 'lucide-react';

const certificates = [
    {
        title: 'ChatGPT-4 Prompt Engineering: ChatGPT, Generative AI & LLM',
        issuer: 'Infosys Springboard',
        date: 'August 2025',
        link: 'https://drive.google.com/file/d/17pubGZA48UolRNu-O4A250OEvWzQ2EYy/view?usp=drive_link',
    },
    {
        title: 'Build Generative AI Apps and Solutions with No-Code Tools',
        issuer: 'Infosys Springboard',
        date: 'August 2025',
        link: 'https://drive.google.com/file/d/17pubGZA48UolRNu-O4A250OEvWzQ2EYy/view?usp=drive_link',
    },
    {
        title: 'Master Generative AI & Generative AI tools (ChatGPT & more)',
        issuer: 'Infosys Springboard',
        date: 'August 2025',
        link: 'https://drive.google.com/file/d/1oyHxCcSs7DL2gLAIqzZZr-ps1h7NoLv5/view?usp=drive_link',
    },
    {
        title: 'Responsive Web Design',
        issuer: 'FreeCodeCamp',
        date: 'December 2023',
        link: 'https://www.freecodecamp.org/certification/fcc53bcf556-669a-452a-8567-6e8355f35fe4/responsive-web-design',
    },
];

const Certificates = () => {
    return (
        <section id="certificates" className="py-24 bg-background relative overflow-hidden border-t-2 border-white/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-left mb-16 border-b-4 border-white pb-6"
                >
                    <span className="font-mono-tech text-[#ccff00] text-sm tracking-widest block mb-2">/* SECURE_CERT_STORE */</span>
                    <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter">Honors</h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {certificates.map((cert, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="brutalist-border bg-black p-6 group flex flex-col h-full hover:bg-white transition-colors"
                        >
                            <div className="p-3 bg-white text-black brutalist-border w-fit mb-6 group-hover:bg-[#ccff00] transition-colors">
                                <ShieldCheck className="w-8 h-8" />
                            </div>
                            <h3 className="text-lg font-black uppercase tracking-tight mb-4 flex-grow text-white group-hover:text-black line-clamp-3 leading-tight">{cert.title}</h3>
                            
                            <div className="space-y-2 mb-6 border-l-4 border-[#ccff00] pl-3">
                                <p className="font-mono-tech text-xs font-bold text-white/70 group-hover:text-black uppercase">ISSUER: {cert.issuer}</p>
                                <p className="font-mono-tech text-xs text-white/50 group-hover:text-black/70">DATE: {cert.date}</p>
                            </div>

                            <a
                                href={cert.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-between px-4 py-3 bg-[#ccff00] text-black font-black uppercase text-sm brutalist-border hover:bg-black hover:text-[#ccff00] transition-colors"
                            >
                                VERIFY_CERT
                                <ExternalLink className="w-4 h-4" />
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certificates;
