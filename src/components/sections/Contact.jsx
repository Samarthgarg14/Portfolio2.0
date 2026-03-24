import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        playClick();

        try {
            const response = await fetch(`https://formspree.io/f/xkopwwzd`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(formState)
            });

            if (response.ok) {
                setIsSubmitting(false);
                setIsSuccess(true);
                playSuccess();
                setFormState({ name: '', email: '', message: '' });
                setTimeout(() => setIsSuccess(false), 5000);
            } else {
                const errorData = await response.json();
                throw new Error(errorData.error || 'Failed to send message');
            }
        } catch (error) {
            setIsSubmitting(false);
            console.error('Submission error:', error);
            alert(error.message || "Failed to send message. Please try again.");
        }
    };

    const handleChange = (e) => {
        setFormState({ ...formState, [e.target.name]: e.target.value });
    };

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

                        {/* Left: Branding/Info */}
                        <div className="lg:col-span-2 flex flex-col justify-between py-2">
                            <div>
                                <h3 className="text-xl md:text-2xl font-black text-white tracking-tighter mb-4">CONTACT</h3>
                                <p className="text-gray-400 text-sm leading-relaxed mb-8">
                                    I'm always open to new opportunities, collaborations, or just a quick chat about tech.
                                </p>
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
                                        name="message" required rows={3}
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
