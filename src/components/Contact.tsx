import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-32 relative overflow-hidden z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
                        Let's <span className="text-white/40">Connect</span>
                    </h2>
                    <p className="text-lg text-secondary font-light max-w-2xl mx-auto">
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
                        <div className="glass-card p-8 group hover:bg-white/[0.04]">
                            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-white/5 rounded-2xl shrink-0 group-hover:bg-white/10 transition-colors">
                                        <Mail className="w-6 h-6 text-white/80" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-secondary font-light mb-1">Email</p>
                                        <a href="mailto:contact@adityamanas.com" className="text-white hover:text-white/70 transition-colors font-medium">
                                            contact@adityamanas.com
                                        </a>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-white/5 rounded-2xl shrink-0 group-hover:bg-white/10 transition-colors">
                                        <Phone className="w-6 h-6 text-white/80" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-secondary font-light mb-1">Phone</p>
                                        <a href="tel:+1234567890" className="text-white hover:text-white/70 transition-colors font-medium">
                                            +1 (234) 567-890
                                        </a>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-white/5 rounded-2xl shrink-0 group-hover:bg-white/10 transition-colors">
                                        <MapPin className="w-6 h-6 text-white/80" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-secondary font-light mb-1">Location</p>
                                        <p className="text-white font-medium">Remote / Global</p>
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
                        className="glass-card p-8 md:p-10"
                    >
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm text-white/70 font-medium pl-1">Name</label>
                                    <input 
                                        type="text" 
                                        placeholder="John Doe"
                                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-transparent transition-all backdrop-blur-sm"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm text-white/70 font-medium pl-1">Email</label>
                                    <input 
                                        type="email" 
                                        placeholder="john@example.com"
                                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-transparent transition-all backdrop-blur-sm"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm text-white/70 font-medium pl-1">Message</label>
                                <textarea 
                                    rows={5}
                                    placeholder="How can we help you?"
                                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-transparent transition-all backdrop-blur-sm resize-none"
                                />
                            </div>
                            <button 
                                type="button"
                                className="w-full glass-pill py-4 flex items-center justify-center gap-2 text-white font-medium hover:bg-white hover:text-black transition-all group"
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
