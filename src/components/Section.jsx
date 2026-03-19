import React from 'react';
import { motion } from 'framer-motion';

// Reusable animation variants
export const fadeUp = {
    hidden: { opacity: 0, y: 32 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] }
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
                        className="mb-16 md:mb-24 text-center max-w-3xl mx-auto"
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

                        {/* Decorative line */}
                        <div className="flex items-center justify-center gap-3 mt-8">
                            <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary/50" />
                            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                            <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary/50" />
                        </div>
                    </motion.div>
                )}

                {children}
            </div>
        </section>
    );
};

export default Section;
