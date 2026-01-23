import React from 'react';
import { motion } from 'framer-motion';

const Section = ({ id, title, subtitle, children, className = "" }) => {
    return (
        <section id={id} className={`py-24 lg:py-32 relative overflow-hidden ${className}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {(title || subtitle) && (
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        className="mb-16 md:mb-24 text-center max-w-3xl mx-auto"
                    >
                        {title && (
                            <h2 className="text-3xl md:text-5xl font-bold mb-6 font-heading tracking-tight text-white">
                                {title}
                            </h2>
                        )}
                        {subtitle && (
                            <p className="text-gray-400 text-lg leading-relaxed">
                                {subtitle}
                            </p>
                        )}
                    </motion.div>
                )}

                {children}
            </div>

            {/* Organic Divider (Optional/Decorative) */}
            <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-0 opacity-10 pointer-events-none">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[calc(130%+1.3px)] h-[60px] md:h-[100px]">
                    <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="fill-white"></path>
                </svg>
            </div>
        </section>
    );
};

export default Section;
