import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Smartphone, Linkedin, Github, Send, MapPin, CheckSquare } from 'lucide-react';

const Contact = () => {
    const [submitted, setSubmitted] = useState(false);

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError(null);

        const formData = new FormData(e.currentTarget);
        formData.append("access_key", "f5d529b9-c6a2-4317-a5a1-98ceef9727f9");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                setSubmitted(true);
                setTimeout(() => setSubmitted(false), 5000);
                (e.target as HTMLFormElement).reset();
            } else {
                setError(data.message || "Something went wrong. Please try again.");
            }
        } catch (err) {
            setError("Failed to send message. Please check your internet connection.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="py-24 relative overflow-hidden bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-left mb-16 border-b-4 border-white pb-6"
                >
                    <span className="font-mono-tech text-[#ccff00] text-sm tracking-widest block mb-2">/* PORT_8080_OPEN */</span>
                    <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter">Comm_Link</h2>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-12"
                    >
                        <h3 className="text-3xl md:text-5xl font-black uppercase leading-tight">Transmit <br /> <span className="text-[#ccff00]">Data_Packet</span></h3>
                        <p className="font-mono-tech text-white/50 text-sm max-w-sm">
                            [AWAITING_INPUT] System ready to receive project parameters, architectural concepts, or contract proposals.
                        </p>

                        <div className="space-y-0 border-y-2 border-white/20">
                            <div className="flex items-center gap-6 group border-b-2 border-white/10 p-6 hover:bg-white/5 transition-colors">
                                <div className="p-4 brutalist-border bg-black group-hover:bg-[#ccff00] text-black transition-all">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div className="font-mono-tech">
                                    <p className="text-xs text-[#ccff00] mb-1">PROTO: EMAIL</p>
                                    <a href="mailto:manasaditya7907@gmail.com" className="text-lg font-bold hover:text-[#ccff00] transition-colors">manasaditya7907@gmail.com</a>
                                </div>
                            </div>

                            <div className="flex items-center gap-6 group border-b-2 border-white/10 p-6 hover:bg-white/5 transition-colors">
                                <div className="p-4 brutalist-border bg-black group-hover:bg-[#ccff00] text-black transition-all">
                                    <Smartphone className="w-6 h-6" />
                                </div>
                                <div className="font-mono-tech">
                                    <p className="text-xs text-[#ccff00] mb-1">PROTO: VOICE/TXT</p>
                                    <a href="tel:+919135480157" className="text-lg font-bold hover:text-[#ccff00] transition-colors">+91-9135480157</a>
                                </div>
                            </div>

                            <div className="flex items-center gap-6 group p-6 hover:bg-white/5 transition-colors">
                                <div className="p-4 brutalist-border bg-black group-hover:bg-[#ccff00] text-black transition-all">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <div className="font-mono-tech">
                                    <p className="text-xs text-[#ccff00] mb-1">GEO_LOC</p>
                                    <p className="text-lg font-bold">Punjab, India</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-4 pt-4">
                            <a href="https://linkedin.com/in/adityamanas08/" target="_blank" className="p-5 brutalist-border bg-black hover:bg-white text-white hover:text-black transition-all">
                                <Linkedin className="w-6 h-6" />
                            </a>
                            <a href="https://github.com/aditya-manas02" target="_blank" className="p-5 brutalist-border bg-black hover:bg-white text-white hover:text-black transition-all">
                                <Github className="w-6 h-6" />
                            </a>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="brutalist-border bg-[#0a0a0a] p-8 md:p-12 relative"
                    >
                        {/* Decorative UI elements */}
                        <div className="absolute top-4 right-4 font-mono-tech text-[10px] text-white/30 text-right">
                            SECURE_CHANNEL // <br />
                            ENCRYPTION: ACTIVE
                        </div>

                        <AnimatePresence mode="wait">
                            {!submitted ? (
                                <motion.form
                                    key="form"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    onSubmit={handleSubmit}
                                    className="space-y-6 mt-10"
                                >
                                    <div className="grid grid-cols-1 gap-6">
                                        <div className="space-y-2 group">
                                            <label className="text-xs font-mono-tech font-bold text-[#ccff00]">VAR: NAME</label>
                                            <input required name="name" type="text" className="w-full bg-black border-2 border-white/20 px-6 py-4 focus:outline-none focus:border-[#ccff00] transition-colors font-mono-tech text-sm placeholder:text-white/20 text-white" placeholder="ENTER_IDENTIFIER..." />
                                        </div>
                                        <div className="space-y-2 group">
                                            <label className="text-xs font-mono-tech font-bold text-[#ccff00]">VAR: EMAIL</label>
                                            <input required name="email" type="email" className="w-full bg-black border-2 border-white/20 px-6 py-4 focus:outline-none focus:border-[#ccff00] transition-colors font-mono-tech text-sm placeholder:text-white/20 text-white" placeholder="ENTER_ADDRESS..." />
                                        </div>
                                    </div>
                                    <div className="space-y-2 group">
                                        <label className="text-xs font-mono-tech font-bold text-[#ccff00]">VAR: PAYLOAD</label>
                                        <textarea required name="message" rows={5} className="w-full bg-black border-2 border-white/20 px-6 py-4 focus:outline-none focus:border-[#ccff00] transition-colors resize-none font-mono-tech text-sm placeholder:text-white/20 text-white" placeholder="ENTER_MESSAGE_DATA..." />
                                    </div>

                                    {error && (
                                        <p className="text-[#ff003c] font-mono-tech text-xs bg-[#ff003c]/10 p-3 border border-[#ff003c]">{error}</p>
                                    )}

                                    <button 
                                        type="submit" 
                                        disabled={isSubmitting}
                                        className="w-full py-5 brutalist-border bg-white text-black font-black uppercase text-sm hover:bg-[#ccff00] transition-colors flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed mt-4 group"
                                    >
                                        {isSubmitting ? "TRANSMITTING..." : "EXECUTE_TRANSMISSION"}
                                        {!isSubmitting && <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
                                    </button>
                                </motion.form>
                            ) : (
                                <motion.div
                                    key="success"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="h-full flex flex-col items-center justify-center text-center space-y-6 py-20"
                                >
                                    <div className="p-6 brutalist-border bg-[#ccff00] text-black">
                                        <CheckSquare className="w-16 h-16" />
                                    </div>
                                    <div className="space-y-2">
                                        <h3 className="text-3xl font-black uppercase">ACK_RECEIVED</h3>
                                        <p className="font-mono-tech text-white/50 text-sm">Data transmission successful. <br/> Awaiting manual processing.</p>
                                    </div>
                                    <button
                                        onClick={() => setSubmitted(false)}
                                        className="text-[#ccff00] font-mono-tech text-xs font-bold hover:bg-[#ccff00] hover:text-black p-3 border-2 border-transparent hover:border-black transition-colors uppercase"
                                    >
                                        [ RESET_FORM ]
                                    </button>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
