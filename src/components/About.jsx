import React from 'react';
import { motion } from 'framer-motion';
import Section from './Section';
import { portfolioData } from '../data/portfolioData';

const About = () => {
    return (
        <Section id="about" title="About Me" subtitle="My journey and passion for technology">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass p-8 md:p-12 rounded-2xl max-w-4xl mx-auto text-center"
            >
                <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-light">
                    {portfolioData.about}
                </p>
            </motion.div>
        </Section>
    );
};

export default About;
