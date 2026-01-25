import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Download, Github, Linkedin, Mail, Instagram, MessageCircle, Code2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import profileImg from '../data/profile.png';

const Hero = () => {
    const { hero, personal } = portfolioData;
    const [textIndex, setTextIndex] = useState(0);

    const [isMobile, setIsMobile] = useState(true);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 1024);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const { scrollY } = useScroll();
    const y1Base = useTransform(scrollY, [0, 500], [0, 200]);
    const y2Base = useTransform(scrollY, [0, 500], [0, -150]);

    const y1 = isMobile ? 0 : y1Base;
    const y2 = isMobile ? 0 : y2Base;

    // Use the longest text to set the width of the placeholder
    const longestText = hero.rotatingText.reduce(
        (a, b) => (a.length > b.length ? a : b),
        ""
    );

    useEffect(() => {
        const interval = setInterval(() => {
            setTextIndex((prev) => (prev + 1) % hero.rotatingText.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [hero.rotatingText.length]);

    return (
        <section id="home" className="relative min-h-[110vh] flex items-center pt-32 pb-20 overflow-hidden">
            {/* Background Blobs - Optimized opacity */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
                <div className="absolute top-[10%] left-[10%] w-72 h-72 bg-primary/10 rounded-full blur-[100px] animate-blob"></div>
                <div className="absolute bottom-[10%] right-[10%] w-80 h-80 bg-secondary/10 rounded-full blur-[100px] animate-blob animation-delay-2000"></div>
                <div className="absolute top-[40%] left-[60%] w-60 h-60 bg-purple-500/10 rounded-full blur-[100px] animate-blob animation-delay-4000"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                {/* Left Content */}
                <motion.div
                    style={{ y: y1 }}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="z-10 relative"
                >
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-sm"
                    >
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                        <span className="text-gray-300 font-medium tracking-wide text-xs md:text-sm">OPEN TO WORK</span>
                    </motion.div>

                    {/* Heading - Adjusted line-height and spacing */}
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-[1.1] tracking-tight">
                        I build <br />
                        {/* Rotating Text Container - Fixed Height preventing overlap */}
                        <span className="relative inline-block h-[1.2em] w-full align-top">
                            <AnimatePresence mode="wait">
                                <motion.span
                                    key={textIndex}
                                    initial={{ y: 40, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    exit={{ y: -40, opacity: 0 }}
                                    transition={{ duration: 0.5, ease: "easeOut" }}
                                    className="absolute left-0 top-0 text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary whitespace-nowrap"
                                >
                                    {hero.rotatingText[textIndex]}
                                </motion.span>
                            </AnimatePresence>
                            {/* Invisible Placeholder to reserve width */}
                            <span className="opacity-0 select-none pointer-events-none" aria-hidden="true">
                                {longestText}
                            </span>
                        </span>
                    </h1>

                    <p className="text-gray-400 text-lg md:text-xl max-w-lg mb-10 leading-relaxed">
                        {hero.subtitle} Specializing in scalable systems, data intelligence, and AI-driven solutions.
                    </p>

                    <div className="flex flex-wrap gap-4 mb-14">
                        <a href="#projects" className="group flex items-center gap-2 bg-white text-dark px-8 py-4 rounded-full font-bold hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all transform hover:scale-105">
                            View Projects
                            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </a>
                        <a href={personal.resume} target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-transparent border border-white/20 px-8 py-4 rounded-full text-white hover:bg-white/10 transition-all font-medium">
                            <Download size={20} />
                            Resume
                        </a>
                    </div>

                    {/* Stats - Refined Grid */}
                    <div className="grid grid-cols-3 gap-6 border-t border-white/10 pt-8 max-w-md">
                        <div>
                            <div className="text-3xl font-bold text-white mb-1 font-heading">{personal.stats.cgpa}</div>
                            <div className="text-gray-500 text-xs uppercase tracking-wider font-semibold">CGPA</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-white mb-1 font-heading">{personal.stats.projects}</div>
                            <div className="text-gray-500 text-xs uppercase tracking-wider font-semibold">Projects</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-white mb-1 font-heading">3+</div>
                            <div className="text-gray-500 text-xs uppercase tracking-wider font-semibold">Years Exp.</div>
                        </div>
                    </div>
                </motion.div>

                {/* Right Content - Visuals - Repositioned for better mobile stack */}
                <motion.div
                    style={{ y: y2 }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="relative flex justify-center mx-auto mt-12 lg:mt-0"
                >
                    <div className="relative w-full max-w-[380px] h-[550px]">
                        {/* Profile Card Container with Tilt/Glow */}
                        <div className="relative w-full h-full">
                            <div className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary rounded-[2rem] blur-2xl opacity-20 animate-pulse"></div>
                            <div className="relative h-full bg-dark/40 backdrop-blur-2xl border border-white/10 rounded-[2rem] px-6 py-8 flex flex-col items-center justify-between overflow-hidden group hover:border-white/20 transition-all duration-500">

                                {/* Decorative Top */}
                                <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-white/5 to-transparent pointer-events-none"></div>

                                <div className="relative z-10 w-full flex flex-col items-center">
                                    <div className="w-64 h-64 rounded-full p-1 bg-gradient-to-tr from-primary to-secondary mb-6 shadow-2xl shadow-primary/20 mx-auto">
                                        <div className="w-full h-full rounded-full bg-dark flex items-center justify-center overflow-hidden relative">
                                            <img src={profileImg} alt={personal.name} className="w-full h-full object-cover object-center" />
                                        </div>
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-1">{personal.name}</h3>
                                    <p className="text-primary text-sm font-medium tracking-wide mb-6">Aspiring Software Engineer</p>

                                    <div className="w-full flex flex-wrap justify-center gap-2 mb-6">
                                        {['C++', 'Python', 'Data Science'].map((tag) => (
                                            <span key={tag} className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/5 text-xs text-gray-300">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Social Action Bar */}
                                <div className="flex flex-nowrap justify-between md:justify-center gap-1 md:gap-2 w-full border-t border-white/10 pt-4 px-0 md:px-1">
                                    <a href={personal.github} target="_blank" rel="noreferrer" className="flex flex-col items-center gap-1.5 text-gray-400 hover:text-white transition-colors group/icon flex-1 min-w-0 md:w-[46px] md:flex-none">
                                        <div className="p-2.5 rounded-full bg-white/5 group-hover/icon:bg-white/10 transition-colors shadow-lg shadow-black/20">
                                            <Github size={18} />
                                        </div>
                                        <span className="text-[8px] uppercase tracking-wider font-semibold opacity-70 group-hover/icon:opacity-100">GitHub</span>
                                    </a>
                                    <a href={personal.linkedin} target="_blank" rel="noreferrer" className="flex flex-col items-center gap-1.5 text-gray-400 hover:text-white transition-colors group/icon flex-1 min-w-0 md:w-[46px] md:flex-none">
                                        <div className="p-2.5 rounded-full bg-white/5 group-hover/icon:bg-white/10 transition-colors shadow-lg shadow-black/20">
                                            <Linkedin size={18} />
                                        </div>
                                        <span className="text-[8px] uppercase tracking-wider font-semibold opacity-70 group-hover/icon:opacity-100">Linked</span>
                                    </a>
                                    <a href={`mailto:${personal.email}`} className="flex flex-col items-center gap-1.5 text-gray-400 hover:text-white transition-colors group/icon flex-1 min-w-0 md:w-[46px] md:flex-none">
                                        <div className="p-2.5 rounded-full bg-white/5 group-hover/icon:bg-white/10 transition-colors shadow-lg shadow-black/20">
                                            <Mail size={18} />
                                        </div>
                                        <span className="text-[8px] uppercase tracking-wider font-semibold opacity-70 group-hover/icon:opacity-100">Email</span>
                                    </a>
                                    <a href={personal.instagram} target="_blank" rel="noreferrer" className="flex flex-col items-center gap-1.5 text-gray-400 hover:text-white transition-colors group/icon flex-1 min-w-0 md:w-[46px] md:flex-none">
                                        <div className="p-2.5 rounded-full bg-white/5 group-hover/icon:bg-white/10 transition-colors shadow-lg shadow-black/20">
                                            <Instagram size={18} />
                                        </div>
                                        <span className="text-[8px] uppercase tracking-wider font-semibold opacity-70 group-hover/icon:opacity-100">Insta</span>
                                    </a>
                                    <a href={personal.whatsapp} target="_blank" rel="noreferrer" className="flex flex-col items-center gap-1.5 text-gray-400 hover:text-white transition-colors group/icon flex-1 min-w-0 md:w-[46px] md:flex-none">
                                        <div className="p-2.5 rounded-full bg-white/5 group-hover/icon:bg-white/10 transition-colors shadow-lg shadow-black/20">
                                            <MessageCircle size={18} />
                                        </div>
                                        <span className="text-[8px] uppercase tracking-wider font-semibold opacity-70 group-hover/icon:opacity-100">WA</span>
                                    </a>
                                    <a href={personal.leetcode} target="_blank" rel="noreferrer" className="flex flex-col items-center gap-1.5 text-gray-400 hover:text-white transition-colors group/icon flex-1 min-w-0 md:w-[46px] md:flex-none">
                                        <div className="p-2.5 rounded-full bg-white/5 group-hover/icon:bg-white/10 transition-colors shadow-lg shadow-black/20">
                                            <Code2 size={18} />
                                        </div>
                                        <span className="text-[8px] uppercase tracking-wider font-semibold opacity-70 group-hover/icon:opacity-100">LeetCode</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
