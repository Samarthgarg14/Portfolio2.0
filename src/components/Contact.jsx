import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { Mail, Phone, MapPin, Send, CheckCircle, Loader2 } from 'lucide-react';
import Section from './Section';
import { portfolioData } from '../data/portfolioData';

const Contact = () => {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const formRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Replace with your actual Service ID, Template ID, and Public Key
        emailjs.sendForm(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            formRef.current,
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        )
            .then((result) => {
                setIsSubmitting(false);
                setIsSuccess(true);
                setFormState({ name: '', email: '', message: '' });
                setTimeout(() => setIsSuccess(false), 5000);
            }, (error) => {
                setIsSubmitting(false);
                console.error(error.text);
                alert("Failed to send message. Please try again.");
            });
    };

    const handleChange = (e) => {
        setFormState({ ...formState, [e.target.name]: e.target.value });
    };

    return (
        <Section id="contact" title="Get In Touch" subtitle="Let's build something amazing together">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">

                {/* Contact Info */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="space-y-8"
                >
                    <div className="glass p-8 rounded-2xl">
                        <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
                        <div className="space-y-6">
                            <div className="flex items-center gap-4 text-gray-300">
                                <div className="p-3 bg-white/5 rounded-full text-primary">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <div className="text-sm text-gray-500">Email</div>
                                    <div>{portfolioData.personal.email}</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 text-gray-300">
                                <div className="p-3 bg-white/5 rounded-full text-primary">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <div className="text-sm text-gray-500">Phone</div>
                                    <div>{portfolioData.personal.phone}</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 text-gray-300">
                                <div className="p-3 bg-white/5 rounded-full text-primary">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <div className="text-sm text-gray-500">Location</div>
                                    <div>{portfolioData.personal.location}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Form */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="glass p-8 rounded-2xl relative overflow-hidden"
                >
                    <form ref={formRef} onSubmit={handleSubmit} className="space-y-6 relative z-10">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                value={formState.name}
                                onChange={handleChange}
                                className="w-full bg-dark/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-gray-600"
                                placeholder="Your Name"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                value={formState.email}
                                onChange={handleChange}
                                className="w-full bg-dark/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-gray-600"
                                placeholder="your@email.com"
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                required
                                rows={4}
                                value={formState.message}
                                onChange={handleChange}
                                className="w-full bg-dark/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-gray-600 resize-none"
                                placeholder="How can I help you?"
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full bg-gradient-to-r from-primary to-secondary text-white font-bold py-4 rounded-lg hover:shadow-[0_0_20px_rgba(0,243,255,0.3)] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                            {isSubmitting ? <Loader2 className="animate-spin" /> : <Send size={20} />}
                            {isSubmitting ? 'Sending...' : 'Send Message'}
                        </button>
                    </form>

                    {/* Success Overlay */}
                    <AnimatePresence>
                        {isSuccess && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="absolute inset-0 bg-dark/95 flex flex-col items-center justify-center z-20 text-center p-8"
                            >
                                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mb-4 text-green-500">
                                    <CheckCircle size={32} />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                                <p className="text-gray-400">Thanks for reaching out. I'll get back to you soon.</p>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>
            </div>
        </Section>
    );
};

export default Contact;
