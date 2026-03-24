import React, { useState, useEffect } from 'react';
import { Menu, X, Home, User, Code2, Briefcase, Mail, FolderGit2, GraduationCap, ChevronRight, Clock, MapPin, Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { playClick, playHover } from '../../utils/sounds';
import { portfolioData } from '../../data/portfolioData';

const BentoTile = ({ title, icon: Icon, href, subtitle, className, delay, onSelect, children }) => (
    <motion.a
        href={href}
        initial={{ opacity: 0, scale: 0.9, filter: 'blur(10px)' }}
        animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
        transition={{ delay, duration: 0.5 }}
        whileHover={{ scale: 1.02, y: -2 }}
        onClick={() => {
            playClick();
            if (onSelect) onSelect();
        }}
        onMouseEnter={() => playHover()}
        className={`relative group overflow-hidden rounded-[1.5rem] bg-white/[0.03] backdrop-blur-3xl border border-white/[0.06] p-4 sm:p-5 flex flex-col justify-between hover:bg-white/[0.06] hover:border-white/10 transition-all duration-500 ${className}`}
    >
        <div className="flex justify-between items-start">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-white group-hover:scale-110 group-hover:bg-white group-hover:text-black transition-all duration-500">
                <Icon size={16} className="sm:w-[18px] sm:h-[18px]" strokeWidth={2.5} />
            </div>
            <div className="text-[8px] sm:text-[9px] font-black uppercase tracking-[0.3em] text-white/20 group-hover:text-white/40 transition-colors">
                {title}
            </div>
        </div>

        <div className="relative z-10">
            {children || (
                <div className="flex flex-col gap-1">
                    <h3 className="text-xl font-black text-white tracking-tighter uppercase whitespace-pre-line leading-none">
                        {subtitle}
                    </h3>
                </div>
            )}
        </div>

        {/* Decorative Gradient Glow */}
        <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-white/[0.02] blur-3xl rounded-full group-hover:bg-white/[0.05] transition-all duration-700" />
    </motion.a>
);

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        
        const handleKeyDown = (e) => {
            if (e.key === 'Escape' && isOpen) {
                setIsOpen(false);
                playClick();
            }
        };
        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [isOpen]);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
        playClick();
    };

    const handleSelect = () => {
        setIsOpen(false);
    };

    return (
        <>
            {/* The Trigger: Bento Command Hub Icon */}
            <div className="fixed top-0 left-0 w-full z-[100] flex justify-end items-center p-6 md:p-8 pointer-events-none">
                <motion.button
                    onClick={toggleMenu}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="pointer-events-auto w-14 h-14 rounded-[1.25rem] bg-black/60 shadow-2xl backdrop-blur-2xl border border-white/10 flex items-center justify-center group relative overflow-hidden"
                >
                    <div className="grid grid-cols-3 gap-1.5 transition-all duration-500 group-hover:rotate-90 group-hover:scale-75">
                        {[...Array(9)].map((_, i) => (
                            <div key={i} className={`w-1 h-1 rounded-full ${isOpen ? 'bg-white' : 'bg-white/40 group-hover:bg-white transition-colors'}`} />
                        ))}
                    </div>
                </motion.button>
            </div>

            {/* Full-Screen Bento Dashboard */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[60] bg-black/95 backdrop-blur-3xl overflow-hidden flex flex-col p-6 md:p-12 lg:px-20 lg:py-10"
                    >
                        <div className="max-w-7xl mx-auto w-full h-full flex flex-col justify-center">
                            {/* Header Meta - Compact */}
                            <div className="flex justify-between items-end mb-8 border-b border-white/[0.05] pb-6">
                                <div>
                                    <h2 className="text-[8px] sm:text-[9px] font-black uppercase tracking-[0.4em] text-white/30 mb-1">Command Hub Navigation</h2>
                                    <p className="text-xl sm:text-2xl font-black text-white tracking-tighter uppercase leading-none">System Portal</p>
                                </div>
                            </div>

                            {/* Bento Grid layout - Compact auto-rows */}
                            <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 md:gap-3 auto-rows-[minmax(120px,1fr)] sm:auto-rows-[minmax(100px,1fr)] lg:auto-rows-auto lg:grid-rows-3 h-full max-h-[80vh] overflow-y-auto lg:overflow-hidden">
                                
                                {/* Home Tile */}
                                <BentoTile 
                                    title="01 / Launch" 
                                    icon={Home} 
                                    href="#home" 
                                    subtitle={"RETURN TO\nORIGIN"} 
                                    className="lg:col-span-2"
                                    delay={0.05}
                                    onSelect={handleSelect}
                                />

                                {/* Skills Tile */}
                                <BentoTile 
                                    title="02 / Tech" 
                                    icon={Code2} 
                                    href="#skills" 
                                    delay={0.1}
                                    onSelect={handleSelect}
                                >
                                    <div className="flex flex-col gap-2">
                                        <div className="flex flex-wrap gap-1.5 mb-1">
                                            {['React', 'GSAP'].map(s => (
                                                <span key={s} className="px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-[7px] font-black uppercase tracking-widest text-white/30">{s}</span>
                                            ))}
                                        </div>
                                        <h3 className="text-lg font-black text-white tracking-tighter uppercase leading-none">CORE STACK</h3>
                                    </div>
                                </BentoTile>

                                {/* Contact Tile */}
                                <BentoTile 
                                    title="03 / Reach" 
                                    icon={Mail} 
                                    href="#contact" 
                                    className="bg-white/[0.05] group"
                                    delay={0.15}
                                    onSelect={handleSelect}
                                >
                                    <div className="flex flex-col gap-1">
                                        <div className="flex items-center gap-1.5 mb-1">
                                            <span className="w-1 h-1 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.5)]" />
                                            <span className="text-[8px] font-black tracking-widest text-green-500/80 uppercase">Available</span>
                                        </div>
                                        <h3 className="text-lg font-black text-white tracking-tighter uppercase leading-none">CONNECT</h3>
                                    </div>
                                </BentoTile>

                                {/* Training & Certificates Tile */}
                                <BentoTile 
                                    title="04 / Track" 
                                    icon={Briefcase} 
                                    href="#experience" 
                                    className="col-span-2 lg:col-span-2 bg-[#0c0c0c]"
                                    delay={0.2}
                                    onSelect={handleSelect}
                                >
                                    <div className="flex justify-between items-end gap-4">
                                        <h3 className="text-lg sm:text-2xl font-black text-white tracking-tighter uppercase leading-none">TRAINING & CERTIFICATES</h3>
                                        <Zap size={18} className="text-white/5 motion-safe:animate-pulse shrink-0" />
                                    </div>
                                </BentoTile>

                                {/* About Tile */}
                                <BentoTile 
                                    title="05 / Profile" 
                                    icon={User} 
                                    href="#about" 
                                    className="lg:row-span-2"
                                    delay={0.25}
                                    onSelect={handleSelect}
                                >
                                    <div className="flex flex-col gap-4">
                                        <p className="hidden sm:block text-[10px] text-white/40 font-medium leading-relaxed uppercase tracking-tighter italic border-l border-white/10 pl-3">
                                            Turning code into interaction.
                                        </p>
                                        <h3 className="text-lg sm:text-2xl font-black text-white tracking-tighter uppercase leading-none">ABOUT ME</h3>
                                    </div>
                                </BentoTile>

                                {/* Projects Tile */}
                                <BentoTile 
                                    title="06 / Works" 
                                    icon={FolderGit2} 
                                    href="#projects" 
                                    className="lg:row-span-2"
                                    delay={0.3}
                                    onSelect={handleSelect}
                                >
                                    <div className="flex flex-col justify-end h-full">
                                        <h3 className="text-lg sm:text-2xl font-black text-white tracking-tighter uppercase leading-none text-right">PROJECTS</h3>
                                    </div>
                                </BentoTile>

                                {/* Education Tile */}
                                <BentoTile 
                                    title="07 / Academic" 
                                    icon={GraduationCap} 
                                    href="#education" 
                                    className="col-span-2 lg:col-span-2 bg-[#0c0c0c]"
                                    delay={0.35}
                                    onSelect={handleSelect}
                                >
                                    <h3 className="text-lg sm:text-2xl font-black text-white tracking-tighter uppercase leading-none">EDUCATION</h3>
                                </BentoTile>
                            </div>

                            {/* Footer - Extra Compact */}
                            <div className="mt-8 pt-6 border-t border-white/[0.05] flex justify-between items-center text-[9px] font-black uppercase tracking-[0.4em] text-white/20">
                                <div>Click card to navigate</div>
                                <button onClick={toggleMenu} className="text-white hover:text-white/60 transition-colors uppercase">Close Hub</button>
                            </div>
                        </div>
                   </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
