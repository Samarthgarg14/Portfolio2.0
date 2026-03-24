import React from 'react';
import { motion } from 'framer-motion';

// Reusable animation variants
export const fadeUp = {
    hidden: { opacity: 0, y: 40, filter: 'blur(12px)' },
    show: {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        transition: { type: "spring", damping: 30, stiffness: 200 }
    }
};

const Section = ({ id, title, subtitle, children, className = "" }) => {
    return (
        <section id={id} className={`py-24 lg:py-36 relative overflow-hidden ${className}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {(title || subtitle) && (
                    <motion.div
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, margin: "-80px" }}
                        variants={fadeUp}
                        className="mb-8 md:mb-10 text-center max-w-3xl mx-auto"
                    >
                        {title && (
                            <>
                                <div className="section-label">{title.split(' ')[0]}</div>
                                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-5 font-heading tracking-tight text-white leading-[1.1]">
                                    {title}
                                </h2>
                            </>
                        )}
                        {subtitle && (
                            <p className="text-gray-400 text-lg md:text-xl leading-relaxed mt-4 max-w-2xl mx-auto">
                                {subtitle}
                            </p>
                        )}

                        {/* Minimal decorative line */}
                        <div className="flex items-center justify-center gap-3 mt-10">
                            <div className="h-px w-8 bg-gradient-to-r from-transparent to-white/20" />
                            <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
                            <div className="h-px w-8 bg-gradient-to-l from-transparent to-white/20" />
                        </div>
                    </motion.div>
                )}

                {children}
            </div>
        </section>
    );
};

export default Section;
