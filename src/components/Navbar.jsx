import React, { useState, useEffect } from 'react';
import { Menu, X, Home, User, Code2, Briefcase, Mail, FolderGit2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { playClick, playHover } from '../utils/sounds';

const Navbar = () => {
    const [activeTab, setActiveTab] = useState('home');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        // Enforce dark mode
        document.documentElement.classList.add('dark');
    }, []);

    const navLinks = [
        { id: 'home', icon: Home, label: 'Home', href: '#home' },
        { id: 'about', icon: User, label: 'About', href: '#about' },
        { id: 'skills', icon: Code2, label: 'Skills', href: '#skills' },
        { id: 'projects', icon: FolderGit2, label: 'Projects', href: '#projects' },
        { id: 'experience', icon: Briefcase, label: 'Exp', href: '#experience' },
        { id: 'contact', icon: Mail, label: 'Contact', href: '#contact' },
    ];

    useEffect(() => {
        const handleScroll = () => {
            const sections = navLinks.map(link => document.querySelector(link.href));
            const scrollPosition = window.scrollY + 200;

            sections.forEach((section, index) => {
                if (section && section.offsetTop <= scrollPosition && (section.offsetTop + section.offsetHeight) > scrollPosition) {
                    setActiveTab(navLinks[index].id);
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            {/* Desktop Floating Navbar */}
            <motion.div
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
                className="fixed top-6 left-1/2 -translate-x-1/2 z-50 hidden md:flex items-center gap-1 p-2 rounded-full bg-dark/80 backdrop-blur-xl border border-white/10 shadow-2xl shadow-primary/10"
            >
                {navLinks.map((link) => {
                    const isActive = activeTab === link.id;
                    return (
                        <motion.a
                            key={link.id}
                            href={link.href}
                            onClick={() => {
                                setActiveTab(link.id);
                                playClick();
                            }}
                            onMouseEnter={() => playHover()}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            className={`relative px-4 py-2 rounded-full flex items-center gap-2 transition-all duration-300 ${isActive ? 'text-dark' : 'text-gray-400 hover:text-white hover:bg-white/5'
                                }`}
                        >
                            {isActive && (
                                <motion.div
                                    layoutId="active-pill"
                                    className="absolute inset-0 bg-primary rounded-full"
                                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                />
                            )}
                            <span className="relative z-10 flex items-center gap-2 text-sm font-medium">
                                <link.icon size={16} />
                                <motion.span
                                    initial={{ display: "inline-block" }}
                                    className="hidden md:inline-block" // Hide text on small screens if needed, or keep as is
                                >
                                    {link.label}
                                </motion.span>
                            </span>
                        </motion.a>
                    );
                })}
            </motion.div>

            {/* Mobile Top Bar */}
            <div className="fixed top-0 left-0 w-full z-50 md:hidden flex justify-between items-center p-4 bg-dark/80 backdrop-blur-md border-b border-white/10">
                <span className="font-bold text-xl tracking-tighter text-white">Samarth<span className="text-primary">.</span></span>
                <div className="flex gap-4">
                    <button onClick={() => setIsMobileMenuOpen(true)} className="text-white">
                        <Menu size={24} />
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            < AnimatePresence >
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        className="fixed inset-0 z-[60] bg-dark flex flex-col items-center justify-center gap-8 md:hidden"
                    >
                        <button
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="absolute top-6 right-6 text-gray-400 hover:text-white p-2"
                        >
                            <X size={32} />
                        </button>

                        {navLinks.map((link, idx) => (
                            <motion.a
                                key={link.id}
                                href={link.href}
                                onClick={() => {
                                    setIsMobileMenuOpen(false);
                                    playClick();
                                }}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                className="text-2xl font-bold text-gray-300 hover:text-primary flex items-center gap-4"
                            >
                                <link.icon size={28} />
                                {link.label}
                            </motion.a>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence >
        </>
    );
};

export default Navbar;
