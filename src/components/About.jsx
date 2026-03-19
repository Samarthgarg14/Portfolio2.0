import React from 'react';
import { motion } from 'framer-motion';
import Section, { fadeUp } from './Section';
import { portfolioData } from '../data/portfolioData';

const About = () => {
    return (
        <Section
            id="about"
            title="About Me"
            subtitle="My journey and passion for technology"
        >
            <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-80px" }}
                variants={fadeUp}
                className="glass glass-hover p-10 md:p-14 rounded-3xl max-w-4xl mx-auto text-center relative overflow-hidden group"
            >
                {/* Decorative glow */}
                <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

                <p className="text-lg md:text-xl text-gray-300 leading-[1.9] font-light relative z-10">
                    {portfolioData.about}
                </p>
            </motion.div>
        </Section>
    );
};

export default About;
