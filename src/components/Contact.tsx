import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Smartphone, Linkedin, Github, Send, MapPin, CheckCircle } from 'lucide-react';

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
        <section id="contact" className="py-24 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Get in <span className="text-gradient">Touch</span></h2>
                    <div className="w-20 h-1.5 bg-primary mx-auto rounded-full" />
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <h3 className="text-3xl font-bold mb-6">Let's build something <span className="text-primary">extraordinary</span> together.</h3>
                        <p className="text-gray-400 text-lg leading-relaxed">
                            I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-center gap-4 group">
                                <div className="p-4 rounded-2xl glass group-hover:bg-primary/20 transition-all text-primary">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">Email</p>
                                    <a href="mailto:manasaditya7907@gmail.com" className="text-lg font-semibold hover:text-primary transition-colors">manasaditya7907@gmail.com</a>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 group">
                                <div className="p-4 rounded-2xl glass group-hover:bg-primary/20 transition-all text-primary">
                                    <Smartphone className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">Phone</p>
                                    <a href="tel:+919135480157" className="text-lg font-semibold hover:text-primary transition-colors">+91-9135480157</a>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 group">
                                <div className="p-4 rounded-2xl glass group-hover:bg-primary/20 transition-all text-primary">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">Location</p>
                                    <p className="text-lg font-semibold">Punjab, India</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-4 pt-6">
                            <a href="https://linkedin.com/in/adityamanas08/" target="_blank" className="p-4 rounded-2xl glass hover:bg-white/10 transition-all">
                                <Linkedin className="w-6 h-6" />
                            </a>
                            <a href="https://github.com/aditya-manas02" target="_blank" className="p-4 rounded-2xl glass hover:bg-white/10 transition-all">
                                <Github className="w-6 h-6" />
                            </a>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="glass p-6 sm:p-8 md:p-12 rounded-[2.5rem] relative"
                    >
                        <AnimatePresence mode="wait">
                            {!submitted ? (
                                <motion.form
                                    key="form"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    onSubmit={handleSubmit}
                                    className="space-y-6"
                                >
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-gray-400 ml-1">Name</label>
                                            <input required name="name" type="text" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-primary transition-all" placeholder="John Doe" />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-gray-400 ml-1">Email</label>
                                            <input required name="email" type="email" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-primary transition-all" placeholder="john@example.com" />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-400 ml-1">Message</label>
                                        <textarea required name="message" rows={5} className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-primary transition-all resize-none" placeholder="Your message here..." />
                                    </div>

                                    {error && (
                                        <p className="text-red-500 text-sm ml-1">{error}</p>
                                    )}

                                    <button 
                                        type="submit" 
                                        disabled={isSubmitting}
                                        className="w-full py-4 rounded-2xl bg-primary text-white font-bold text-lg hover:bg-primary/90 transition-all shadow-xl shadow-primary/20 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        {isSubmitting ? "Sending..." : "Send Message"}
                                        {!isSubmitting && <Send className="w-5 h-5" />}
                                    </button>
                                </motion.form>
                            ) : (
                                <motion.div
                                    key="success"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="h-full flex flex-col items-center justify-center text-center space-y-4 py-20"
                                >
                                    <div className="p-4 rounded-full bg-green-500/20 text-green-500">
                                        <CheckCircle className="w-16 h-16" />
                                    </div>
                                    <h3 className="text-2xl font-bold">Message Sent!</h3>
                                    <p className="text-gray-400">Thank you for reaching out. I'll get back to you soon.</p>
                                    <button
                                        onClick={() => setSubmitted(false)}
                                        className="text-primary font-semibold hover:underline"
                                    >
                                        Send another message
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
