import React from 'react';
import { motion } from 'framer-motion';
import Section from './Section';
import TiltCard from './TiltCard';
import { portfolioData } from '../data/portfolioData';

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
};

const Skills = () => {
    const { technical, soft } = portfolioData.skills;

    return (
        <Section id="skills" title="Technical Arsenal" subtitle="Tools and technologies I use to build scalable solutions">

            <div className="mb-16">
                <h3 className="text-2xl font-bold text-white mb-8 pl-4 border-l-4 border-primary">Core Tech Stack</h3>
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6"
                >
                    {technical.map((skill, idx) => (
                        <TiltCard
                            key={idx}
                            variants={item}
                            whileHover={{ y: -5, boxShadow: '0 10px 30px -10px rgba(0, 243, 255, 0.2)' }}
                            className="glass glass-hover p-6 rounded-xl flex flex-col items-center justify-center gap-4 group"
                        >
                            <skill.icon size={40} className="text-gray-400 group-hover:text-primary transition-colors duration-300" />
                            <span className="text-gray-300 font-medium group-hover:text-white transition-colors">{skill.name}</span>
                        </TiltCard>
                    ))}
                </motion.div>
            </div>

            <div>
                <h3 className="text-2xl font-bold text-white mb-8 pl-4 border-l-4 border-secondary">Soft Skills</h3>
                <div className="flex flex-wrap gap-4">
                    {soft.map((skill, idx) => (
                        <motion.span
                            key={idx}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: idx * 0.05 }}
                            viewport={{ once: true }}
                            className="px-6 py-3 rounded-full bg-white/5 border border-white/10 text-gray-300 hover:border-secondary hover:text-secondary hover:bg-secondary/10 transition-all cursor-default"
                        >
                            {skill}
                        </motion.span>
                    ))}
                </div>
            </div>

        </Section>
    );
};

export default Skills;
