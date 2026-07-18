import { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../lib/utils';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Education', href: '#education' },
        { name: 'Experience', href: '#experience' },
        { name: 'Certificates', href: '#certificates' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav
            className={cn(
                'fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b-2',
                scrolled ? 'bg-black border-white/20 shadow-md shadow-[#ccff00]/5 py-2' : 'bg-transparent py-4 border-transparent'
            )}
        >
            <div className="w-full px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex-shrink-0 flex flex-col"
                    >
                        <a href="#" className="text-3xl font-black uppercase tracking-tighter text-white hover:text-[#ccff00] transition-colors leading-none">
                            ADITYA.
                        </a>
                        <span className="font-mono-tech text-[10px] text-[#ccff00] mt-1 hidden sm:block">SYS_STATUS: ONLINE //</span>
                    </motion.div>

                    <div className="hidden md:block">
                        <div className="ml-10 flex items-center space-x-1">
                            {navLinks.map((link, index) => (
                                <motion.a
                                    key={link.name}
                                    href={link.href}
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="font-mono-tech text-xs uppercase px-4 py-2 text-white hover:bg-[#ccff00] hover:text-black transition-colors"
                                >
                                    [{link.name}]
                                </motion.a>
                            ))}
                            <motion.a
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                href="/AdityaManasCV1.pdf"
                                download
                                className="flex items-center gap-2 px-5 py-2 ml-4 bg-[#ccff00] text-black font-black uppercase text-xs hover:bg-white transition-colors brutalist-border"
                            >
                                <Download className="w-4 h-4" />
                                RESUME
                            </motion.a>
                        </div>
                    </div>

                    <div className="md:hidden flex items-center gap-4">
                        <a
                            href="/AdityaManasCV1.pdf"
                            download
                            className="p-2 bg-[#ccff00] text-black brutalist-border"
                        >
                            <Download className="w-4 h-4" />
                        </a>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-white hover:text-[#ccff00] p-2"
                        >
                            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-black border-b-2 border-[#ccff00]"
                    >
                        <div className="px-4 pt-2 pb-4 space-y-1">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="block px-3 py-3 font-mono-tech text-xs uppercase text-white hover:text-black hover:bg-[#ccff00] transition-colors border-b border-white/10"
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
