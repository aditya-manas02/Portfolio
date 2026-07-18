import { motion } from 'framer-motion';
import { ExternalLink, ShieldCheck } from 'lucide-react';

const certificates = [
    {
        title: 'ChatGPT-4 Prompt Engineering: ChatGPT Generative Al 8 LLM',
        issuer: 'Infosys Springboard',
        date: 'August 2025',
        link: '#',
    },
    {
        title: 'Build Generative Al Apps and Solutions with No-Code Tools',
        issuer: 'Infosys Springboard',
        date: 'August 2025',
        link: '#',
    },
    {
        title: 'Master Generative Al 8 Generative Al tools (ChatGPT 8 more)',
        issuer: 'Infosys Springboard',
        date: 'August 2025',
        link: '#',
    },
    {
        title: 'Responsive Web Design',
        issuer: 'Freecodecamp',
        date: 'December 2023',
        link: '#',
    },
];

const Certificates = () => {
    return (
        <section id="certificates" className="py-24 relative overflow-hidden z-10 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-primary mb-4">
                        Honors & Certificates
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
                            className="luxury-card p-6 flex flex-col h-full group"
                        >
                            <div className="p-3 bg-zinc-50 border border-zinc-200 rounded-2xl w-fit mb-6 shadow-sm group-hover:bg-primary group-hover:border-primary transition-colors">
                                <ShieldCheck className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                            </div>
                            
                            <h3 className="text-base font-bold tracking-tight mb-4 flex-grow text-primary line-clamp-3 leading-snug">
                                {cert.title}
                            </h3>
                            
                            <div className="space-y-1 mb-6 pl-3 border-l-2 border-accent/20">
                                <p className="text-sm font-semibold text-primary">{cert.issuer}</p>
                                <p className="text-xs text-secondary font-medium">{cert.date}</p>
                            </div>

                            <a
                                href={cert.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-between px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-xl text-primary font-medium text-sm hover:bg-primary hover:text-white hover:border-primary transition-all shadow-sm"
                            >
                                View Credential
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
