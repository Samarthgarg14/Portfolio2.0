import { motion } from 'framer-motion';
import Section from '../common/Section';
import { DataStructuresIcon, AlgorithmsIcon } from '../common/TechIcons';
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

const badgeVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    show: (i) => ({
        opacity: 1,
        scale: 1,
        transition: { delay: i * 0.045, duration: 0.35, ease: 'easeOut' }
    })
};

const Skills = () => {
    const { technical, soft } = portfolioData.skills;

    return (
        <Section
            id="skills"
            title="Technical Arsenal"
            subtitle="Tools and technologies"
            className="bg-white/[0.015]"
        >
            {/* Core Stack */}
            <div className="mb-20">
                <div className="flex items-center gap-4 mb-10">
                    <div className="h-px flex-1 bg-gradient-to-r from-primary/40 to-transparent" />
                    <h3 className="text-xl font-bold text-white tracking-tight">Core Tech Stack</h3>
                    <div className="h-px flex-1 bg-gradient-to-l from-secondary/40 to-transparent" />
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-60px" }}
                    className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-5"
                >
                    {technical.map((skill, idx) => (
                        <TiltCard
                            key={idx}
                            variants={itemVariants}
                            className="glass p-5 md:p-6 rounded-2xl flex flex-col items-center justify-center gap-3 group cursor-default"
                        >
                            <motion.div
                                whileHover={{ scale: 1.15, rotate: 5 }}
                                transition={{ type: 'spring', stiffness: 300 }}
                                className="p-4 flex items-center justify-center rounded-xl bg-white/5 group-hover:bg-primary/10 transition-colors duration-300"
                            >
                                <skill.icon
                                    size={44}
                                    className="text-gray-400 group-hover:text-primary transition-colors duration-300 mx-auto"
                                />
                            </motion.div>
                            <span className="text-gray-400 text-sm font-medium group-hover:text-white transition-colors text-center leading-tight">
                                {skill.name}
                            </span>

                            {/* Hover underline */}
                            <div className="h-px w-0 group-hover:w-8 bg-gradient-to-r from-primary to-secondary transition-all duration-500 rounded-full" />
                        </TiltCard>
                    ))}
                </motion.div>
            </div>

            {/* Soft Skills */}
            <div>
                <div className="flex items-center gap-4 mb-10">
                    <div className="h-px flex-1 bg-gradient-to-r from-secondary/40 to-transparent" />
                    <h3 className="text-xl font-bold text-white tracking-tight">Soft Skills</h3>
                    <div className="h-px flex-1 bg-gradient-to-l from-primary/40 to-transparent" />
                </div>

                <motion.div
                    className="flex flex-wrap gap-3 justify-center"
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-60px" }}
                >
                    {soft.map((skill, idx) => (
                        <motion.span
                            key={idx}
                            custom={idx}
                            variants={badgeVariants}
                            whileHover={{ scale: 1.06, y: -2 }}
                            className="px-5 py-2.5 rounded-full glass text-gray-300 text-sm font-medium
                                       hover:border-secondary/40 hover:text-secondary hover:shadow-[0_0_16px_rgba(188,19,254,0.15)]
                                       transition-all duration-300 cursor-default"
                        >
                            {skill}
                        </motion.span>
                    ))}
                </motion.div>
            </div>
        </Section>
    );
};

export default Skills;
