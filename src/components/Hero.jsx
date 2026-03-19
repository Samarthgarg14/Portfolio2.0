import React, { useState, useEffect, useRef } from 'react';
import {
    motion, AnimatePresence,
    useScroll, useTransform, useSpring, useMotionValue,
} from 'framer-motion';
import { ArrowRight, Download, Github, Linkedin, Mail, Code2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import profileImg from '../assets/images/profile.jpeg';

/* ─── shared easing ──────────────────────────────────────── */
const EASE = [0.25, 0.46, 0.45, 0.94];

const staggerContainer = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.05 } }
};

const fadeUpItem = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: EASE } }
};

/* ─── spring config ──────────────────────────────────────── */
const SPRING = { stiffness: 60, damping: 18, mass: 0.6 };

const Hero = () => {
    const { hero, personal } = portfolioData;
    const [textIndex, setTextIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(false);
    const sectionRef = useRef(null);

    /* ── mobile detection ── */
    useEffect(() => {
        const check = () => setIsMobile(window.innerWidth < 768);
        check();
        window.addEventListener('resize', check);
        return () => window.removeEventListener('resize', check);
    }, []);

    /* ── rotating text ── */
    const longestText = hero.rotatingText.reduce((a, b) => (a.length > b.length ? a : b), '');
    useEffect(() => {
        const id = setInterval(
            () => setTextIndex(p => (p + 1) % hero.rotatingText.length),
            3000
        );
        return () => clearInterval(id);
    }, [hero.rotatingText.length]);

    /* ── scroll progress scoped to this section ── */
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start start', 'end start'],   // 0 = top of section at top, 1 = bottom of section at top
    });

    /* ── smooth spring wrapper for buttery motion ── */
    const progress = useSpring(scrollYProgress, SPRING);

    /* ── transforms ─────────────────────────────── */

    // Left content: moves up faster (parallax push)
    const contentY = useTransform(progress, [0, 1], isMobile ? [0, 0] : [0, -100]);
    const contentOpacity = useTransform(progress, [0, 0.55], [1, 0]);
    const contentScale = useTransform(progress, [0, 0.6], [1, isMobile ? 1 : 0.88]);

    // Heading: independent pronounced scale-out (Apple-style)
    const headingScale = useTransform(progress, [0, 0.5], [1, isMobile ? 1 : 0.78]);
    const headingY = useTransform(progress, [0, 1], [0, isMobile ? 0 : -60]);
    const headingOpacity = useTransform(progress, [0, 0.45], [1, isMobile ? 1 : 0]);

    // Profile card: counter-parallax (floats in opposite direction)
    const cardY = useTransform(progress, [0, 1], [0, isMobile ? 0 : 80]);
    const cardScale = useTransform(progress, [0, 0.8], [1, isMobile ? 1 : 0.92]);
    const cardOpacity = useTransform(progress, [0, 0.7], [1, isMobile ? 1 : 0]);

    // Background blobs: zoom + drift
    const blobScale = useTransform(progress, [0, 1], [1, 1.5]);
    const blobOpacity = useTransform(progress, [0, 0.6], [1, 0.2]);

    // Scroll veil: dark gradient that fades in from bottom as you scroll
    const veilOpacity = useTransform(progress, [0.15, 0.65], [0, 1]);

    // Subtle glow shift on scroll
    const glowX = useTransform(progress, [0, 1], ['5%', '50%']);
    const glowOpacity = useTransform(progress, [0, 0.5, 1], [0.06, 0.1, 0.04]);

    const socials = [
        { href: personal.github, icon: Github, label: 'GitHub' },
        { href: personal.linkedin, icon: Linkedin, label: 'LinkedIn' },
        { href: `mailto:${personal.email}`, icon: Mail, label: 'Email' },
        { href: personal.leetcode, icon: Code2, label: 'LeetCode' },
    ];

    return (
        <section
            ref={sectionRef}
            id="home"
            className="relative min-h-[105vh] flex items-center pt-28 pb-20 overflow-hidden"
        >

            {/* ── Parallax background blobs ─────────────── */}
            <motion.div
                style={{ scale: blobScale, opacity: blobOpacity }}
                className="absolute inset-0 -z-10 pointer-events-none origin-center"
            >
                <div className="absolute top-[8%] left-[5%] w-80 h-80 bg-primary/8 rounded-full blur-[120px] animate-blob" />
                <div className="absolute bottom-[10%] right-[8%] w-96 h-96 bg-secondary/8 rounded-full blur-[120px] animate-blob animation-delay-2000" />
                <div className="absolute top-[45%] left-[55%] w-64 h-64 bg-indigo-500/6 rounded-full blur-[100px] animate-blob animation-delay-4000" />

                {/* Scroll-reactive glow that shifts position */}
                <motion.div
                    style={{ left: glowX, opacity: glowOpacity }}
                    className="absolute top-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-primary rounded-full blur-[160px] pointer-events-none"
                />
            </motion.div>

            {/* ── Scroll veil: bottom-up dark fade ─────────── */}
            <motion.div
                className="absolute inset-0 -z-10 pointer-events-none"
                style={{
                    opacity: veilOpacity,
                    background: 'linear-gradient(to top, #070b15 0%, transparent 60%)',
                }}
            />

            {/* ── Grid ──────────────────────────────────── */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                {/* ── Left content ───────────────────────── */}
                <motion.div
                    style={{ y: contentY, opacity: contentOpacity, scale: contentScale }}
                    variants={staggerContainer}
                    initial="hidden"
                    animate="show"
                    className="z-10 relative"
                >
                    {/* Status badge */}
                    <motion.div
                        variants={fadeUpItem}
                        className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass border-white/10 mb-8"
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                        </span>
                        <span className="text-gray-300 font-semibold tracking-[0.12em] text-xs">OPEN TO WORK</span>
                    </motion.div>

                    {/* Heading — Apple-style scroll scale-out */}
                    <motion.h1
                        style={{
                            scale: headingScale,
                            y: headingY,
                            opacity: headingOpacity,
                            transformOrigin: 'left center',
                        }}
                        variants={fadeUpItem}
                        className="text-4xl md:text-6xl lg:text-7xl font-bold mb-7 leading-[1.08] tracking-tight font-heading"
                    >
                        I build{' '}<br />
                        <span className="relative inline-block h-[1.2em] w-full align-top">
                            <AnimatePresence mode="wait">
                                <motion.span
                                    key={textIndex}
                                    initial={{ y: 36, opacity: 0, filter: 'blur(6px)' }}
                                    animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
                                    exit={{ y: -36, opacity: 0, filter: 'blur(6px)' }}
                                    transition={{ duration: 0.45, ease: 'easeOut' }}
                                    className="absolute left-0 top-0 text-transparent bg-clip-text bg-gradient-to-r from-primary via-sky-400 to-secondary whitespace-nowrap"
                                >
                                    {hero.rotatingText[textIndex]}
                                </motion.span>
                            </AnimatePresence>
                            <span className="opacity-0 select-none pointer-events-none" aria-hidden="true">
                                {longestText}
                            </span>
                        </span>
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.p
                        variants={fadeUpItem}
                        className="text-gray-400 text-lg md:text-xl max-w-lg mb-10 leading-relaxed"
                    >
                        Specializing in scalable systems, data intelligence, and AI-driven solutions.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div variants={fadeUpItem} className="flex flex-wrap gap-4 mb-14">
                        <motion.a
                            href="#projects"
                            whileHover={{ scale: 1.04, boxShadow: '0 0 24px rgba(255,255,255,0.25)' }}
                            whileTap={{ scale: 0.97 }}
                            className="group flex items-center gap-2 bg-white text-dark px-8 py-3.5 rounded-full font-bold transition-all text-sm tracking-wide"
                        >
                            View Projects
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-200" />
                        </motion.a>
                        <motion.a
                            href={personal.resume}
                            target="_blank"
                            rel="noreferrer"
                            whileHover={{ scale: 1.04 }}
                            whileTap={{ scale: 0.97 }}
                            className="flex items-center gap-2 glass border-white/15 px-8 py-3.5 rounded-full text-white transition-all font-medium text-sm tracking-wide hover:border-white/30"
                        >
                            <Download size={17} />
                            Resume
                        </motion.a>
                    </motion.div>

                    {/* Stats */}
                    <motion.div
                        variants={fadeUpItem}
                        className="grid grid-cols-3 gap-6 border-t border-white/[0.08] pt-8 max-w-md"
                    >
                        {[
                            { value: personal.stats.cgpa, label: 'CGPA' },
                            { value: personal.stats.projects, label: 'Projects' },
                            { value: personal.stats.Certificates, label: 'Certificates' },
                        ].map(({ value, label }) => (
                            <div key={label}>
                                <div className="text-3xl font-bold text-white mb-1 font-heading">{value}</div>
                                <div className="text-gray-500 text-[10px] uppercase tracking-[0.15em] font-bold">{label}</div>
                            </div>
                        ))}
                    </motion.div>
                </motion.div>

                {/* ── Right: Profile Card ──────────────────── */}
                <motion.div
                    style={{ y: cardY, scale: cardScale, opacity: cardOpacity }}
                    initial={{ opacity: 0, scale: 0.88, y: 30 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.9, delay: 0.15, ease: EASE }}
                    className="relative flex items-center justify-center mt-0 lg:mt-0 w-full ml-24"
                >
                    <div className="relative w-full max-w-[400px]">
                        {/* Outer glow */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-2xl blur-3xl opacity-60 pointer-events-none" />

                        {/* Card — square outer frame, no side padding on image */}
                        <div className="relative glass rounded-2xl overflow-hidden hover:border-white/16 transition-all duration-500 group flex flex-col">

                            {/* Top shimmer */}
                            <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-white/[0.05] to-transparent pointer-events-none z-10" />

                            {/* Profile image — fills full width, square */}
                            <div className="relative w-full aspect-square overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-secondary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                                <img
                                    src={profileImg}
                                    alt={personal.name}
                                    className="w-full h-full object-cover object-[50%_12%] group-hover:scale-105 transition-transform duration-700"
                                />
                                {/* Gradient fade at bottom into card content */}
                                <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-[#0d1526] to-transparent z-10" />
                            </div>

                            {/* Info section */}
                            <div className="px-4 py-4 flex flex-col items-center relative z-10">
                                <h3 className="text-xl font-bold text-white mb-1 font-heading">{personal.name}</h3>
                                <p className="text-primary text-[11px] font-bold tracking-[0.18em] uppercase mb-4">
                                    Software Engineer
                                </p>

                                {/* Tags */}
                                <div className="flex flex-wrap justify-center gap-2 mb-4 w-full">
                                    {['C++', 'Python', 'Data Science'].map((tag) => (
                                        <motion.span
                                            key={tag}
                                            whileHover={{ scale: 1.06 }}
                                            className="px-3 py-1.5 rounded-lg glass text-xs text-gray-300 font-medium cursor-default"
                                        >
                                            {tag}
                                        </motion.span>
                                    ))}
                                </div>

                                {/* Social Links */}
                                <div className="flex justify-center gap-3 w-full border-t border-white/[0.08] pt-4">
                                    {socials.map(({ href, icon: Icon, label }) => (
                                        <motion.a
                                            key={label}
                                            href={href}
                                            target={href.startsWith('mailto') ? undefined : '_blank'}
                                            rel="noreferrer"
                                            whileHover={{ scale: 1.12, y: -2 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="flex flex-col items-center gap-1.5 text-gray-500 hover:text-primary transition-colors group/icon"
                                        >
                                            <div className="p-2.5 rounded-xl glass group-hover/icon:bg-primary/10 group-hover/icon:border-primary/20 transition-all duration-300">
                                                <Icon size={17} />
                                            </div>
                                            <span className="text-[9px] uppercase tracking-wider font-bold opacity-60 group-hover/icon:opacity-100">
                                                {label}
                                            </span>
                                        </motion.a>
                                    ))}
                                </div>
                            </div>

                            {/* Bottom shimmer on hover */}
                            <div className="absolute bottom-0 inset-x-0 h-0.5 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-primary to-secondary transition-opacity duration-500" />
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* ── Scroll indicator ─────────────────────── */}
            <motion.div
                style={{ opacity: useTransform(progress, [0, 0.15], [1, 0]) }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none z-10"
            >
                <span className="text-[10px] uppercase tracking-[0.22em] text-gray-600 font-semibold">Scroll</span>
                <motion.div
                    animate={{ y: [0, 6, 0] }}
                    transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
                    className="w-px h-8 bg-gradient-to-b from-primary/60 to-transparent rounded-full"
                />
            </motion.div>
        </section>
    );
};

export default Hero;
