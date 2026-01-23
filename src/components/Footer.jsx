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
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    return (
        <footer className="bg-dark border-t border-white/10 py-12 relative">
            <div className="max-w-7xl mx-auto px-4 text-center">
                <p className="flex items-center justify-center gap-2 text-gray-400 mb-4">
                    © 2026 Samarth Garg • Built with <Heart size={16} className="text-red-500 fill-red-500" />
                </p>

                <AnimatePresence>
                    {isVisible && (
                        <motion.button
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0 }}
                            onClick={scrollToTop}
                            className="fixed bottom-8 right-8 bg-primary hover:bg-primary/80 text-dark p-3 rounded-full shadow-lg shadow-primary/20 transition-all z-40"
                        >
                            <ArrowUp size={24} />
                        </motion.button>
                    )}
                </AnimatePresence>
            </div>
        </footer>
    );
};

export default Footer;
