import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const links = [
        { name: 'Projects', href: '#projects' },
        { name: 'Skills', href: '#skills' },
        { name: 'Experience', href: '#experience' },
        { name: 'Education', href: '#education' },
    ];

    return (
        <motion.nav 
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 w-[95%] md:w-auto ${scrolled ? 'scale-95' : 'scale-100'}`}
        >
            <div className="luxury-pill bg-white/80 backdrop-blur-md px-6 py-3 flex items-center justify-between gap-8 md:gap-16">
                <a href="#hero" className="font-bold text-xl tracking-tighter text-primary">
                    AM.
                </a>

                <div className="hidden md:flex items-center gap-8">
                    {links.map((link) => (
                        <a 
                            key={link.name} 
                            href={link.href}
                            className="text-sm font-medium text-secondary hover:text-primary transition-colors"
                        >
                            {link.name}
                        </a>
                    ))}
                </div>

                <a 
                    href="#contact"
                    className="hidden md:block text-sm font-medium text-accent hover:text-blue-700 transition-colors"
                >
                    Let's Talk
                </a>

                {/* Mobile Menu Button */}
                <button 
                    className="md:hidden text-primary focus:outline-none"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                    </svg>
                </button>
            </div>

            {/* Mobile Dropdown */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div 
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 10 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute top-full left-0 right-0 luxury-card p-4 mt-2 flex flex-col gap-4 md:hidden"
                    >
                        {links.map((link) => (
                            <a 
                                key={link.name} 
                                href={link.href}
                                onClick={() => setMenuOpen(false)}
                                className="text-base font-medium text-secondary hover:text-primary transition-colors"
                            >
                                {link.name}
                            </a>
                        ))}
                        <a 
                            href="#contact"
                            onClick={() => setMenuOpen(false)}
                            className="text-base font-medium text-accent hover:text-blue-700 transition-colors pt-2 border-t border-zinc-100"
                        >
                            Let's Talk
                        </a>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;
