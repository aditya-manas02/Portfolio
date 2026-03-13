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
        <section id="certificates" className="py-24 bg-white/[0.02]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Honors & <span className="text-gradient">Certificates</span></h2>
                    <div className="w-20 h-1.5 bg-primary mx-auto rounded-full" />
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
                            className="glass p-6 rounded-3xl group flex flex-col h-full"
                        >
                            <div className="p-3 rounded-2xl bg-secondary/10 text-secondary w-fit mb-4 group-hover:bg-secondary/20 transition-all">
                                <ShieldCheck className="w-6 h-6" />
                            </div>
                            <h3 className="text-lg font-bold mb-2 flex-grow">{cert.title}</h3>
                            <div className="space-y-1 mb-6">
                                <p className="text-sm font-medium text-gray-400">{cert.issuer}</p>
                                <p className="text-xs text-gray-500">{cert.date}</p>
                            </div>
                            <a
                                href={cert.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-between px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-sm font-semibold hover:bg-primary hover:border-primary transition-all transition-colors"
                            >
                                Verify
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
