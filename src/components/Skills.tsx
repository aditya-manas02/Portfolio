import { motion } from 'framer-motion';
import { Code2, Database, Layout, Terminal } from 'lucide-react';
import { cn } from '../lib/utils';

const skills = [
    {
        category: 'Languages',
        icon: <Code2 className="w-6 h-6 text-white" />,
        items: [
            { name: 'C++', slug: 'cplusplus' },
            { name: 'Python', slug: 'python' },
            { name: 'JavaScript', slug: 'javascript' },
            { name: 'C', slug: 'c' },
            { name: 'Java', slug: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg' },
            { name: 'PHP', slug: 'php' },
            { name: 'TypeScript', slug: 'typescript' },
            { name: 'SQL', slug: 'mysql' },
        ],
        color: 'from-blue-600 to-cyan-500',
    },
    {
        category: 'Frameworks',
        icon: <Layout className="w-6 h-6 text-white" />,
        items: [
            { name: 'React', slug: 'react' },
            { name: 'Node.js', slug: 'nodedotjs' },
            { name: 'Express', slug: 'express' },
            { name: 'Next.js', slug: 'nextdotjs' },
            { name: 'Tailwind', slug: 'tailwindcss' },
            { name: 'Laravel', slug: 'laravel' },
            { name: 'Bootstrap', slug: 'bootstrap' },
            { name: 'Framer', slug: 'framer' },
        ],
        color: 'from-purple-600 to-pink-500',
    },
    {
        category: 'Databases & OS',
        icon: <Database className="w-6 h-6 text-white" />,
        items: [
            { name: 'MySQL', slug: 'mysql' },
            { name: 'MongoDB', slug: 'mongodb' },
            { name: 'PostgreSQL', slug: 'postgresql' },
            { name: 'Firebase', slug: 'firebase' },
            { name: 'Linux', slug: 'linux' },
            { name: 'Ubuntu', slug: 'ubuntu' },
            { name: 'Windows', slug: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/windows8/windows8-original.svg' },
            { name: 'Android', slug: 'android' },
        ],
        color: 'from-green-600 to-emerald-500',
    },
    {
        category: 'Tools & Platforms',
        icon: <Terminal className="w-6 h-6 text-white" />,
        items: [
            { name: 'Git', slug: 'git' },
            { name: 'GitHub', slug: 'github' },
            { name: 'VS Code', slug: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg' },
            { name: 'Vercel', slug: 'vercel' },
            { name: 'Postman', slug: 'postman' },
            { name: 'Render', slug: 'render' },
            { name: 'Canva', slug: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/canva/canva-original.svg' },
            { name: 'Figma', slug: 'figma' },
        ],
        color: 'from-orange-600 to-red-500',
    },
];

const Skills = () => {
    return (
        <section id="skills" className="py-24 relative overflow-hidden bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Technical <span className="text-gradient">Arsenal</span></h2>
                    <div className="w-20 h-1.5 bg-primary mx-auto rounded-full" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill.category}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="glass p-8 rounded-[2rem] relative group border border-white/5 hover:border-white/10 transition-all duration-500 shadow-xl"
                        >
                            <div className={cn(
                                "w-14 h-14 rounded-2xl flex items-center justify-center mb-8 bg-gradient-to-br transition-all duration-500 group-hover:scale-110 shadow-2xl",
                                skill.color
                            )}>
                                {skill.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-6 tracking-tight text-white/90">{skill.category}</h3>
                            <div className="grid grid-cols-2 gap-2.5">
                                {skill.items.map((item) => (
                                    <div
                                        key={item.name}
                                        className="flex flex-col items-center justify-center p-3 rounded-xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.08] hover:border-white/20 transition-all group/item cursor-default"
                                    >
                                        <div className="w-10 h-10 mb-3 flex items-center justify-center bg-white/95 rounded-lg shadow-[0_0_15px_rgba(255,255,255,0.1)] p-2 group-hover/item:scale-110 group-hover/item:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all duration-300">
                                            <img 
                                                src={item.slug.startsWith('http') ? item.slug : `https://cdn.simpleicons.org/${item.slug}`} 
                                                alt={item.name}
                                                className="w-full h-full object-contain"
                                                loading="lazy"
                                                onError={(e) => {
                                                    // Hide broken images or use a fallback
                                                    (e.target as HTMLImageElement).parentElement?.classList.add('hidden');
                                                }}
                                            />
                                        </div>
                                        <span className="text-[10px] uppercase font-bold tracking-widest text-gray-400 group-hover/item:text-white transition-colors text-center leading-tight">
                                            {item.name}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
