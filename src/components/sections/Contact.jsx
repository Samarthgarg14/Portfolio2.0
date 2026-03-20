import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { Mail, Phone, MapPin, Send, CheckCircle, Loader2 } from 'lucide-react';
import Section, { fadeUp } from '../common/Section';
import { portfolioData } from '../../data/portfolioData';

const inputClass =
    "w-full bg-white/[0.04] border border-white/10 rounded-xl px-5 py-3.5 text-white text-sm " +
    "focus:border-primary/60 focus:ring-1 focus:ring-primary/40 outline-none " +
    "transition-all duration-300 placeholder:text-gray-600 " +
    "hover:border-white/20";

const Contact = () => {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const formRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        emailjs.sendForm(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            formRef.current,
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        )
            .then(() => {
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

    const contactItems = [
        { icon: Mail, label: 'Email', value: portfolioData.personal.email },
        { icon: Phone, label: 'Phone', value: portfolioData.personal.phone },
        { icon: MapPin, label: 'Location', value: portfolioData.personal.location },
    ];

    return (
        <Section
            id="contact"
            title="Get In Touch"
            subtitle="Let's build something amazing together"
            className="bg-white/[0.015]"
        >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">

                {/* Contact Info Panel */}
                <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-60px" }}
                    variants={fadeUp}
                    className="space-y-5"
                >
                    <div className="glass rounded-3xl p-8 relative overflow-hidden">
                        {/* Ambient glow */}
                        <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-primary/8 rounded-full blur-3xl pointer-events-none" />

                        <h3 className="text-xl font-bold text-white mb-7 relative z-10">Contact Information</h3>

                        <div className="space-y-5 relative z-10">
                            {contactItems.map(({ icon: Icon, label, value }) => (
                                <motion.div
                                    key={label}
                                    whileHover={{ x: 4 }}
                                    className="flex items-center gap-4 text-gray-300 group cursor-default"
                                >
                                    <div className="p-3 glass rounded-xl text-primary group-hover:bg-primary/15 transition-colors duration-300 shrink-0">
                                        <Icon size={20} />
                                    </div>
                                    <div>
                                        <div className="text-xs text-gray-500 mb-0.5 uppercase tracking-wider font-semibold">{label}</div>
                                        <div className="text-sm text-gray-300 font-medium">{value}</div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Form Panel */}
                <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-60px" }}
                    variants={{
                        hidden: { opacity: 0, y: 32 },
                        show: { opacity: 1, y: 0, transition: { duration: 0.65, delay: 0.12, ease: [0.25, 0.46, 0.45, 0.94] } }
                    }}
                    className="glass rounded-3xl p-8 relative overflow-hidden"
                >
                    {/* Ambient glow */}
                    <div className="absolute -top-16 -right-16 w-48 h-48 bg-secondary/8 rounded-full blur-3xl pointer-events-none" />

                    <form ref={formRef} onSubmit={handleSubmit} className="space-y-5 relative z-10">
                        <div>
                            <label htmlFor="name" className="block text-xs font-bold text-gray-400 mb-2 uppercase tracking-wider">Name</label>
                            <input
                                type="text" id="name" name="name" required
                                value={formState.name} onChange={handleChange}
                                className={inputClass} placeholder="Your Name"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-xs font-bold text-gray-400 mb-2 uppercase tracking-wider">Email</label>
                            <input
                                type="email" id="email" name="email" required
                                value={formState.email} onChange={handleChange}
                                className={inputClass} placeholder="your@email.com"
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-xs font-bold text-gray-400 mb-2 uppercase tracking-wider">Message</label>
                            <textarea
                                id="message" name="message" required rows={5}
                                value={formState.message} onChange={handleChange}
                                className={`${inputClass} resize-none`} placeholder="How can I help you?"
                            />
                        </div>

                        <motion.button
                            type="submit"
                            disabled={isSubmitting}
                            whileHover={{ scale: 1.02, boxShadow: '0 0 28px rgba(0,243,255,0.35)' }}
                            whileTap={{ scale: 0.98 }}
                            className="w-full bg-gradient-to-r from-primary to-secondary text-dark font-bold py-4 rounded-xl
                                       transition-all flex items-center justify-center gap-2 cursor-pointer
                                       disabled:opacity-60 disabled:cursor-not-allowed text-sm tracking-wide"
                        >
                            {isSubmitting ? <Loader2 size={18} className="animate-spin" /> : <Send size={18} />}
                            {isSubmitting ? 'Sending...' : 'Send Message'}
                        </motion.button>
                    </form>

                    {/* Success Overlay */}
                    <AnimatePresence>
                        {isSuccess && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="absolute inset-0 rounded-3xl bg-dark/96 backdrop-blur-sm flex flex-col items-center justify-center z-20 text-center p-8"
                            >
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ type: 'spring', stiffness: 280, damping: 20 }}
                                    className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mb-5 text-green-400"
                                >
                                    <CheckCircle size={32} />
                                </motion.div>
                                <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                                <p className="text-gray-400 text-sm">Thanks for reaching out. I'll get back to you soon.</p>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>
            </div>
        </Section>
    );
};

export default Contact;
