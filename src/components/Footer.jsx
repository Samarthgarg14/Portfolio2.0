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
        <footer className="relative border-t border-white/[0.07] py-10 overflow-hidden"
            style={{ background: 'rgba(7, 11, 21, 0.95)' }}
        >
            {/* Gradient line top */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

            <div className="max-w-7xl mx-auto px-4 text-center">
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="flex items-center justify-center gap-2 text-gray-500 text-sm"
                >
                    © 2026
                    <span className="text-gradient font-semibold">Samarth Garg</span>
                    •&nbsp;Built with
                    <Heart size={14} className="text-red-500 fill-red-500 inline" />
                </motion.p>
            </div>

            {/* Scroll-to-top FAB */}
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
                    >
                        <ArrowUp size={20} />
                    </motion.button>
                )}
            </AnimatePresence>
        </footer>
    );
};

export default Footer;
