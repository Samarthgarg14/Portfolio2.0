import React, { useState, useEffect } from 'react';
import { ArrowUp, Heart } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

const Footer = () => {
    const [isVisible, setIsVisible] = useState(false);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    useEffect(() => {
        const toggleVisibility = () => {
            setIsVisible(window.scrollY > 300);
        };
        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    return (
        <footer className="relative border-t border-white/[0.03] py-20 bg-[#0a0a0a] overflow-hidden">
            {/* Massive Ghosted Text */}
            <div className="absolute left-1/2 -bottom-6 md:-bottom-10 -translate-x-1/2 select-none pointer-events-none opacity-5">
                <h2 className="text-[7rem] md:text-[14rem] lg:text-[20rem] font-black tracking-[-0.05em] whitespace-nowrap leading-none">
                    SAMARTH GARG
                </h2>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center">
                {/* Branding Text */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center mb-12"
                >
                    <div className="flex items-center gap-3 mb-6">
                        <div className="h-px w-8 bg-white/20" />
                        <span className="text-[10px] uppercase tracking-[0.4em] font-black text-white/40">CRAFTED WITH INTENT</span>
                        <div className="h-px w-8 bg-white/20" />
                    </div>

                    <h3 className="text-xl md:text-2xl font-black text-white tracking-tight text-center max-w-lg mb-4">
                        DESIGNED WITH PRECISION.<br />
                        BUILT FOR THE FUTURE.
                    </h3>

                    <p className="text-gray-500 text-[10px] uppercase tracking-[0.2em] font-medium">
                        © 2026 — ALL RIGHTS RESERVED
                    </p>
                </motion.div>

                {/* Meta Bar */}
                <div className="w-full pt-12 border-t border-white/[0.03] flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex flex-col items-center md:items-start">
                        <span className="text-[9px] uppercase tracking-widest text-white/20 font-bold mb-1">Local Time</span>
                        <span className="text-[11px] text-white/40 font-medium tracking-wide">IST — {new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false })}</span>
                    </div>

                    <div className="flex items-center gap-6">
                        <span className="text-[9px] uppercase tracking-widest text-white/20 font-bold">Status: Open to Collabs</span>
                        <div className="flex items-center gap-2 text-white/40 hover:text-white transition-colors cursor-default text-[11px] font-medium">
                            <span className="flex h-1.5 w-1.5 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]" /> Available Now
                        </div>
                    </div>

                    <div className="flex items-center gap-2 text-xs text-white/20 font-medium">
                        Handcrafted with <Heart size={10} className="text-white/20 fill-white/20" /> in India
                    </div>
                </div>
            </div>

            {/* Scroll-to-top FAB (Untouched per requirement) */}
            <AnimatePresence>
                {isVisible && (
                    <motion.button
                        initial={{ opacity: 0, scale: 0, y: 10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0, y: 10 }}
                        whileHover={{ scale: 1.12, boxShadow: '0 0 20px rgba(0, 243, 255, 0.5)' }}
                        whileTap={{ scale: 0.93 }}
                        onClick={scrollToTop}
                        className="fixed bottom-8 right-8 bg-gradient-to-br from-primary to-secondary text-dark p-3.5 rounded-full shadow-2xl transition-all z-40"
                        aria-label="Scroll to top"
                    >
                        <ArrowUp size={20} />
                    </motion.button>
                )}
            </AnimatePresence>
        </footer>
    );
};

export default Footer;
