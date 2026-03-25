import { useState, useEffect, useRef } from 'react';
import {
    motion, AnimatePresence,
    useScroll, useTransform, useSpring, useMotionValue,
} from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import { GithubSingleIcon, LinkedinIcon, GmailIcon, LeetcodeIcon } from '../common/TechIcons';
import Section, { fadeUp as sectionFadeUp } from '../common/Section';
import { portfolioData } from '../../data/portfolioData';
import profileImg from '../../assets/images/profile.jpeg';

/* ─── shared easing ──────────────────────────────────────── */
const EASE = [0.25, 0.46, 0.45, 0.94];

const staggerContainer = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.05 } }
};

const fadeUpItem = {
    hidden: { opacity: 0, y: 30, filter: 'blur(8px)' },
    show: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { type: "spring", damping: 25, stiffness: 150 } }
};

/* ─── spring config ──────────────────────────────────────── */
const SPRING = { stiffness: 60, damping: 18, mass: 0.6 };

const Hero = () => {
    const { hero, personal } = portfolioData;
    const [textIndex, setTextIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(false);
    const [isTextHovered, setIsTextHovered] = useState(false);
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
        { href: personal.github, icon: GithubSingleIcon, label: 'GitHub' },
        { href: personal.linkedin, icon: LinkedinIcon, label: 'LinkedIn' },
        { href: `mailto:${personal.email}`, icon: GmailIcon, label: 'Email' },
        { href: personal.leetcode, icon: LeetcodeIcon, label: 'LeetCode' },
    ];

    return (
        <section
            ref={sectionRef}
            id="home"
            className="relative min-h-screen flex items-center justify-center overflow-hidden"
        >

            {/* Removed Parallax Background Blobs for Apple Pro clean aesthetic */}

            {/* ── Scroll veil: bottom-up dark fade ─────────── */}
            <motion.div
                className="absolute inset-0 -z-10 pointer-events-none"
                style={{
                    opacity: veilOpacity,
                    background: 'linear-gradient(to top, #000000 0%, transparent 60%)',
                }}
            />

            {/* ── Editorial Grid Layout ──────────────────────────────────── */}
            <div className="max-w-[100rem] mx-auto px-6 md:px-12 lg:px-24 w-full relative min-h-screen flex flex-col md:flex-row items-center justify-between gap-12 pt-24 pb-12">

                {/* ── Left Column: Massive Typography ─────────────────────── */}
                <motion.div
                    style={{ y: headingY, scale: headingScale }}
                    variants={staggerContainer}
                    initial="hidden"
                    animate="show"
                    className="flex-1 flex flex-col items-start z-10 w-full"
                >
                    <div className="flex flex-col items-start">
                        <motion.div variants={fadeUpItem} className="flex flex-col">
                            <h1 className="text-[clamp(3.5rem,12vw,10rem)] leading-[0.85] font-black text-white uppercase tracking-tighter text-left">
                                SAMARTH<br />
                                <span className="text-white/20 hover:text-white transition-colors duration-700">GARG</span>
                            </h1>
                        </motion.div>

                        <motion.div variants={fadeUpItem} className="mt-8 md:mt-12 max-w-xl">
                            <p className="text-white/60 text-sm md:text-lg tracking-[0.2em] font-medium leading-relaxed uppercase border-l-2 border-white/10 pl-6">
                                Turning complex code into <span className="text-white font-black italic">elegant interaction</span>
                                <br />
                                <span className="text-[10px] md:text-xs mt-2 block font-black border border-white/10 w-fit px-3 py-1 rounded-full uppercase tracking-[0.3em] bg-white text-black">SOFTWARE ENGINEER</span>
                            </p>
                        </motion.div>

                        <motion.div
                            variants={fadeUpItem}
                            className="mt-10 md:mt-16 flex flex-wrap gap-4"
                        >
                            <motion.a
                                href="#projects"
                                whileHover={{ scale: 1.05, x: 5 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-white text-black px-8 md:px-10 py-3 md:py-4 rounded-full font-bold text-xs tracking-widest uppercase hover:bg-gray-200 transition-all shadow-2xl flex items-center gap-3"
                            >
                                View Projects
                                <ArrowRight size={14} />
                            </motion.a>
                            <motion.a
                                href={personal.resume}
                                target="_blank"
                                rel="noreferrer"
                                whileHover={{ scale: 1.05, x: 5 }}
                                whileTap={{ scale: 0.95 }}
                                className="glass border-white/20 px-8 md:px-10 py-3 md:py-4 rounded-full text-white font-bold text-xs tracking-widest uppercase hover:bg-white/10 transition-all flex items-center gap-3 shadow-2xl"
                            >
                                Resume
                                <Download size={14} />
                            </motion.a>
                        </motion.div>

                        {/* Social Links - Vertical on Tablet/Desktop, Horizontal on Mobile */}
                        <motion.div
                            variants={fadeUpItem}
                            className="mt-12 flex items-center gap-8 text-white/30"
                        >
                            {socials.map((s, idx) => (
                                <motion.a
                                    key={idx}
                                    href={s.href}
                                    target="_blank"
                                    rel="noreferrer"
                                    whileHover={{ y: -5, color: '#fff' }}
                                    className="hover:scale-110 transition-all"
                                    aria-label={s.label}
                                >
                                    <s.icon size={20} />
                                </motion.a>
                            ))}
                        </motion.div>
                    </div>
                </motion.div>

                {/* ── Right Column: Profile Image Card ────────────────────── */}
                <motion.div
                    style={{ y: cardY, scale: cardScale, opacity: cardOpacity }}
                    initial={{ opacity: 0, scale: 0.8, x: 50, filter: 'blur(20px)' }}
                    animate={{ opacity: 1, scale: 1, x: 0, filter: 'blur(0px)' }}
                    transition={{ duration: 1.5, delay: 0.2, ease: EASE }}
                    className="w-full md:w-[45%] lg:w-[35%] flex justify-center md:justify-end z-20"
                >
                    <div className="relative w-full aspect-[4/5] max-w-[500px]">
                        {/* Kinetic Glossy Frame */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent blur-2xl -z-10 rounded-[4rem] animate-pulse" />

                        <div className="w-full h-full overflow-hidden rounded-[4rem] group border border-white/10 hover:border-white/30 transition-all duration-700 shadow-[0_0_100px_rgba(255,255,255,0.05)] cursor-pointer">
                            {/* Color image by default */}
                            <img
                                src={profileImg}
                                alt={personal.name}
                                className="w-full h-full object-cover object-[50%_12%] contrast-[1.05] transition-all duration-1000 group-hover:scale-110"
                            />

                            {/* Corner Accents */}
                            <div className="absolute top-8 right-8 w-12 h-12 border-t-2 border-r-2 border-white/20 rounded-tr-3xl" />
                            <div className="absolute bottom-8 left-8 w-12 h-12 border-b-2 border-l-2 border-white/20 rounded-bl-3xl" />
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* ── Scroll indicator ─────────────────────── */}
            <motion.div
                style={{ opacity: useTransform(progress, [0, 0.15], [1, 0]) }}
                className="absolute bottom-2 md:bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 pointer-events-none z-10"
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
