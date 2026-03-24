import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Section from '../common/Section';
import TiltCard from '../common/TiltCard';
import { portfolioData } from '../../data/portfolioData';

const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.07, delayChildren: 0.1 }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 24, scale: 0.95 },
    show: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }
    }
};

const Skills = () => {
    const { technical, soft } = portfolioData.skills;
    const [isMobile, setIsMobile] = React.useState(false);

    React.useEffect(() => {
        const check = () => setIsMobile(window.innerWidth < 768);
        check();
        window.addEventListener('resize', check);
        return () => window.removeEventListener('resize', check);
    }, []);

    return (
        <Section id="skills" className="py-12 md:py-24">

            {/* ── Section Label ── */}
            <motion.p
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-xs uppercase tracking-[0.3em] text-gray-600 font-semibold text-center mb-12"
            >
                Core Tech Stack
            </motion.p>

            {/* ── Tech Grid ── */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: '-60px' }}
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4 max-w-6xl mx-auto mb-16"
            >
                {technical.map((skill, idx) => (
                    <TiltCard
                        key={idx}
                        variants={itemVariants}
                        className="rounded-[1.5rem] md:rounded-[2rem] bg-white/[0.04] backdrop-blur-md border border-white/[0.07] hover:bg-white/[0.08] hover:border-white/[0.14] transition-all duration-500 flex flex-col items-center justify-center gap-3 p-5 md:p-8 group cursor-default"
                    >
                        <motion.div
                            whileHover={{ scale: 1.2, filter: 'drop-shadow(0 0 18px rgba(255,255,255,0.25))' }}
                            transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                        >
                            <skill.icon
                                size={isMobile ? 42 : 58}
                                className="text-gray-500 group-hover:text-white transition-colors duration-500 mx-auto"
                            />
                        </motion.div>
                        <span className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] text-gray-600 group-hover:text-gray-400 transition-colors duration-300 font-semibold text-center leading-tight">
                            {skill.name}
                        </span>
                    </TiltCard>
                ))}
            </motion.div>

            {/* ── Soft Skills ── */}
            <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="max-w-4xl mx-auto"
            >
                <p className="text-xs uppercase tracking-[0.3em] text-gray-600 font-semibold text-center mb-8">
                    Soft Skills
                </p>
                <div className="flex flex-wrap gap-3 justify-center">
                    {soft.map((skill, idx) => (
                        <motion.span
                            key={idx}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.06, duration: 0.35 }}
                            whileHover={{ scale: 1.06, y: -2 }}
                            className="px-6 py-2.5 rounded-full bg-white/[0.04] backdrop-blur-sm border border-white/[0.08] text-gray-400 text-xs font-semibold tracking-wider uppercase hover:border-white/[0.2] hover:text-white hover:bg-white/[0.08] transition-all duration-300 cursor-default"
                        >
                            {skill}
                        </motion.span>
                    ))}
                </div>
            </motion.div>

        </Section>
    );
};

export default Skills;
