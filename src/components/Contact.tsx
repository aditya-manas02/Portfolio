import { motion } from 'framer-motion';
import { Mail, Phone, Send, Github, Linkedin } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-32 relative overflow-hidden z-10 bg-white border-t border-zinc-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-primary mb-4">
                        Let's Connect
                    </h2>
                    <p className="text-lg text-secondary font-normal max-w-2xl mx-auto">
                        Have a vision in mind? Let's turn it into reality. My inbox is always open.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start max-w-5xl mx-auto">
                    
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="space-y-8"
                    >
                        <div className="luxury-card p-8 group h-full">
                            <h3 className="text-2xl font-bold mb-8 text-primary">Contact Information</h3>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-zinc-50 border border-zinc-200 rounded-2xl shrink-0 group-hover:bg-primary group-hover:border-primary transition-colors shadow-sm">
                                        <Mail className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-secondary font-medium mb-1">Email</p>
                                        <a href="mailto:manasaditya7907@gmail.com" className="text-primary hover:text-accent transition-colors font-semibold break-all">
                                            manasaditya7907@gmail.com
                                        </a>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-zinc-50 border border-zinc-200 rounded-2xl shrink-0 group-hover:bg-primary group-hover:border-primary transition-colors shadow-sm">
                                        <Phone className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-secondary font-medium mb-1">Phone</p>
                                        <a href="tel:+919135480157" className="text-primary hover:text-accent transition-colors font-semibold">
                                            +91-9135480157
                                        </a>
                                    </div>
                                </div>
                                
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-zinc-50 border border-zinc-200 rounded-2xl shrink-0 group-hover:bg-primary group-hover:border-primary transition-colors shadow-sm">
                                        <Linkedin className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-secondary font-medium mb-1">LinkedIn</p>
                                        <a href="https://linkedin.com/in/adityamanas08/" target="_blank" rel="noreferrer" className="text-primary hover:text-accent transition-colors font-semibold">
                                            linkedin.com/in/adityamanas08/
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-zinc-50 border border-zinc-200 rounded-2xl shrink-0 group-hover:bg-primary group-hover:border-primary transition-colors shadow-sm">
                                        <Github className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-secondary font-medium mb-1">GitHub</p>
                                        <a href="https://github.com/aditya-manas02" target="_blank" rel="noreferrer" className="text-primary hover:text-accent transition-colors font-semibold">
                                            github.com/aditya-manas02
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="luxury-card p-8 md:p-10"
                    >
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm text-secondary font-medium pl-1">Name</label>
                                    <input 
                                        type="text" 
                                        placeholder="John Doe"
                                        className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 text-primary placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all shadow-sm"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm text-secondary font-medium pl-1">Email</label>
                                    <input 
                                        type="email" 
                                        placeholder="john@example.com"
                                        className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 text-primary placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all shadow-sm"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm text-secondary font-medium pl-1">Message</label>
                                <textarea 
                                    rows={5}
                                    placeholder="How can we help you?"
                                    className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 text-primary placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all shadow-sm resize-none"
                                />
                            </div>
                            <button 
                                type="button"
                                className="w-full bg-primary py-4 rounded-xl flex items-center justify-center gap-2 text-white font-semibold hover:bg-zinc-800 transition-all group shadow-md"
                            >
                                Send Message
                                <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
