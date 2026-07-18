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
        <section id="certificates" className="py-24 relative overflow-hidden z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                        Honors & <span className="text-white/40">Certificates</span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {certificates.map((cert, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5, ease: "easeOut" }}
                            className="glass-card p-6 flex flex-col h-full group hover:bg-white/[0.04]"
                        >
                            <div className="p-3 bg-white/5 border border-white/10 rounded-2xl w-fit mb-6 group-hover:bg-white/10 transition-colors">
                                <ShieldCheck className="w-6 h-6 text-white/80" />
                            </div>
                            
                            <h3 className="text-lg font-semibold tracking-tight mb-4 flex-grow text-white line-clamp-3 leading-snug">
                                {cert.title}
                            </h3>
                            
                            <div className="space-y-1 mb-6 pl-3 border-l-2 border-white/10">
                                <p className="text-sm font-medium text-white/70">{cert.issuer}</p>
                                <p className="text-xs text-secondary font-light">{cert.date}</p>
                            </div>

                            <a
                                href={cert.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-between px-4 py-3 glass-pill text-white/80 font-medium text-sm hover:text-white hover:bg-white/10 transition-all"
                            >
                                Verify Credential
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
