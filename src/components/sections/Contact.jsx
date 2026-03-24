import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { Mail, Send, CheckCircle, Loader2, Github, Linkedin, MessageSquare, Terminal, ExternalLink } from 'lucide-react';
import Section, { fadeUp } from '../common/Section';
import TiltCard from '../common/TiltCard';
import { portfolioData } from '../../data/portfolioData';
import { playClick, playSuccess } from '../../utils/sounds';

const inputClass =
    "w-full bg-white/[0.03] border border-white/5 rounded-[1.25rem] px-6 py-4 text-white text-sm " +
    "focus:border-white/20 focus:ring-1 focus:ring-white/10 outline-none " +
    "transition-all duration-500 placeholder:text-gray-600 " +
    "hover:bg-white/[0.05]";

const Contact = () => {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const formRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        playClick();

        emailjs.sendForm(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            formRef.current,
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        )
            .then(() => {
                setIsSubmitting(false);
                setIsSuccess(true);
                playSuccess();
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

    const socialTiles = [
        {
            name: 'LinkedIn',
            icon: Linkedin,
            link: portfolioData.personal.linkedin,
            label: 'Network',
            color: 'blue',
            glow: 'rgba(0, 119, 181, 0.3)'
        },
        {
            name: 'GitHub',
            icon: Github,
            link: portfolioData.personal.github,
            label: 'Code',
            color: 'white',
            glow: 'rgba(255, 255, 255, 0.15)'
        },
        {
            name: 'LeetCode',
            icon: Terminal,
            link: portfolioData.personal.leetcode,
            label: 'Solve',
            color: 'orange',
            glow: 'rgba(255, 161, 22, 0.25)'
        },
        {
            name: 'Email',
            icon: Mail,
            link: `mailto:${portfolioData.personal.email}`,
            label: 'Hello',
            color: 'silver',
            glow: 'rgba(212, 212, 216, 0.2)'
        },
    ];

    return (
        <Section
            id="contact"
            title="Get In Touch"
        >
            <div className="max-w-4xl mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="glass rounded-[2rem] md:rounded-[2.5rem] p-6 sm:p-8 md:p-12 border-white/[0.03] relative overflow-hidden"
                >
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 md:gap-12 relative z-10">

                        {/* Left: Social Branding */}
                        <div className="lg:col-span-2 flex flex-col justify-between py-2">
                            <div>
                                <h3 className="text-xl md:text-2xl font-black text-white tracking-tighter mb-4">CONNECT</h3>
                                <p className="text-gray-400 text-sm leading-relaxed mb-8">
                                    I'm always open to new opportunities, collaborations, or just a quick chat about tech.
                                </p>

                                <div className="grid grid-cols-2 gap-3">
                                    {socialTiles.map((tile) => (
                                        <a
                                            key={tile.name}
                                            href={tile.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="group flex items-center gap-3 p-3 rounded-2xl bg-white/[0.03] border border-white/[0.05] hover:bg-white/[0.08] hover:border-white/10 transition-all duration-300"
                                        >
                                            <div className="p-2 rounded-lg bg-white/[0.05] group-hover:scale-110 transition-transform">
                                                <tile.icon size={14} className="text-white opacity-60 group-hover:opacity-100" />
                                            </div>
                                            <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-white/50 group-hover:text-white transition-colors">
                                                {tile.name}
                                            </span>
                                        </a>
                                    ))}
                                </div>
                            </div>

                            <div className="hidden lg:block pt-8 border-t border-white/5">
                                <div className="space-y-4">
                                    <div>
                                        <div className="text-[10px] uppercase tracking-[0.3em] font-black text-white/20 mb-1.5">Location</div>
                                        <div className="text-xs text-white/50 font-medium">{portfolioData.personal.location}</div>
                                    </div>
                                    <div>
                                        <div className="text-[10px] uppercase tracking-[0.3em] font-black text-white/20 mb-1.5">Mobile</div>
                                        <div className="text-xs text-white/50 font-medium">{portfolioData.personal.phone}</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right: Compact Form */}
                        <div className="lg:col-span-3">
                            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div className="space-y-1.5">
                                        <label className="text-[9px] uppercase tracking-[0.25em] font-bold text-white/30 ml-2">Name</label>
                                        <input
                                            type="text" name="name" required
                                            value={formState.name} onChange={handleChange}
                                            className="w-full bg-white/[0.03] border border-white/5 rounded-2xl px-5 py-3 text-white text-sm focus:border-white/20 focus:ring-1 focus:ring-white/10 outline-none transition-all duration-500 placeholder:text-gray-600 hover:bg-white/[0.05]"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                    <div className="space-y-1.5">
                                        <label className="text-[9px] uppercase tracking-[0.25em] font-bold text-white/30 ml-2">Email</label>
                                        <input
                                            type="email" name="email" required
                                            value={formState.email} onChange={handleChange}
                                            className="w-full bg-white/[0.03] border border-white/5 rounded-2xl px-5 py-3 text-white text-sm focus:border-white/20 focus:ring-1 focus:ring-white/10 outline-none transition-all duration-500 placeholder:text-gray-600 hover:bg-white/[0.05]"
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-1.5">
                                    <label className="text-[9px] uppercase tracking-[0.25em] font-bold text-white/30 ml-2">Message</label>
                                    <textarea
                                        name="message" required rows={8}
                                        value={formState.message} onChange={handleChange}
                                        className="w-full bg-white/[0.03] border border-white/5 rounded-2xl px-5 py-3 text-white text-sm focus:border-white/20 focus:ring-1 focus:ring-white/10 outline-none transition-all duration-500 placeholder:text-gray-600 hover:bg-white/[0.05] resize-none"
                                        placeholder="Tell me about your project..."
                                    />
                                </div>

                                <motion.button
                                    type="submit"
                                    disabled={isSubmitting}
                                    whileHover={{ scale: 1.01 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="w-full bg-white text-black font-black py-4 rounded-2xl
                                               transition-all flex items-center justify-center gap-3 cursor-pointer
                                               disabled:opacity-60 disabled:cursor-not-allowed text-[10px] uppercase tracking-[0.3em] shadow-[0_0_30px_rgba(255,255,255,0.05)]"
                                >
                                    {isSubmitting ? <Loader2 size={14} className="animate-spin" /> : <Send size={14} />}
                                    {isSubmitting ? 'Sending...' : 'Transmit'}
                                </motion.button>
                            </form>
                        </div>
                    </div>

                    <AnimatePresence>
                        {isSuccess && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="absolute inset-0 rounded-[2.5rem] bg-black/95 backdrop-blur-2xl flex flex-col items-center justify-center z-20 text-center p-8"
                            >
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-4 text-white"
                                >
                                    <CheckCircle size={32} />
                                </motion.div>
                                <h3 className="text-2xl font-black text-white mb-2 tracking-tighter uppercase">Message Sent</h3>
                                <p className="text-gray-400 text-xs max-w-xs leading-relaxed">I'll get back to you within 24 hours.</p>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>
            </div>
        </Section>
    );
};

export default Contact;
