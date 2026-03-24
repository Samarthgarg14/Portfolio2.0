import { motion } from 'framer-motion';
import Section from '../common/Section';
import { portfolioData } from '../../data/portfolioData';

const cardVariants = {
    hidden: { opacity: 0, y: 32 },
    show: (i) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.1, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }
    })
};

const About = () => {
    return (
        <Section id="about" className="py-10 lg:py-16">
            {/* Section Label */}
            <motion.p
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-xs uppercase tracking-[0.3em] text-gray-600 font-semibold text-center mb-8"
            >
                About Me
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-5 max-w-6xl mx-auto">

                {/* ── Card 1: Bio — large, 8 cols ── */}
                <motion.div
                    custom={0}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: '-60px' }}
                    variants={cardVariants}
                    className="md:col-span-8 rounded-[2.5rem] bg-white/[0.04] backdrop-blur-md border border-white/[0.07] p-8 md:p-10 flex flex-col justify-between group hover:bg-white/[0.07] transition-all duration-500 min-h-[220px]"
                >
                    <p className="text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed font-light text-justify ">
                        {portfolioData.about}
                    </p>
                    <div className="mt-5 flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-white/40" />
                        <span className="text-[10px] md:text-xs uppercase tracking-[0.25em] text-gray-600 font-semibold">Samarth Garg</span>
                    </div>
                </motion.div>

                {/* ── Card 2: Dataset stat — 4 cols ── */}
                <motion.div
                    custom={1}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: '-60px' }}
                    variants={cardVariants}
                    className="md:col-span-4 rounded-[2.5rem] bg-white/[0.04] backdrop-blur-md border border-white/[0.07] p-8 md:p-10 flex flex-col justify-center items-center text-center group hover:bg-white/[0.07] transition-all duration-500"
                >
                    <div className="text-5xl md:text-7xl font-black text-white mb-2 group-hover:scale-110 transition-transform duration-500 leading-none">50K+</div>
                    <div className="text-[10px] uppercase tracking-[0.25em] font-bold text-gray-500">Rows Trained</div>
                </motion.div>

                {/* ── Card 3: Projects stat — 4 cols ── */}
                <motion.div
                    custom={2}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: '-60px' }}
                    variants={cardVariants}
                    className="md:col-span-4 rounded-[2.5rem] bg-white/[0.04] backdrop-blur-md border border-white/[0.07] p-8 md:p-10 flex flex-col justify-center items-center text-center group hover:bg-white/[0.07] transition-all duration-500"
                >
                    <div className="text-5xl md:text-7xl font-black text-white mb-2 group-hover:scale-110 transition-transform duration-500 leading-none">{portfolioData.personal.stats.projects}</div>
                    <div className="text-[10px] uppercase tracking-[0.25em] font-bold text-gray-500">Projects Built</div>
                </motion.div>

                {/* ── Card 4: Abstract Typography — 8 cols ── */}
                <motion.div
                    custom={3}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: '-60px' }}
                    variants={cardVariants}
                    className="md:col-span-8 rounded-[2.5rem] bg-white/[0.04] backdrop-blur-md border border-white/[0.07] p-8 md:p-10 flex flex-col justify-center md:justify-end md:items-end text-center md:text-right overflow-hidden min-h-[160px] md:min-h-[220px] relative"
                >
                    {/* Subtle background glow */}
                    <div className="absolute -top-10 -left-10 w-48 h-48 rounded-full bg-white/[0.02] blur-3xl pointer-events-none" />

                    {[
                        { word: 'Building', opacity: 'opacity-100' },
                        { word: 'Scalable', opacity: 'opacity-50' },
                        { word: 'Systems', opacity: 'opacity-[0.15]' },
                    ].map(({ word, opacity }) => (
                        <div
                            key={word}
                            className={`text-[clamp(2.5rem,8vw,5.5rem)] font-black text-white uppercase tracking-tighter leading-[0.82] ${opacity}`}
                        >
                            {word}
                        </div>
                    ))}
                </motion.div>

            </div>
        </Section>
    );
};

export default About;
