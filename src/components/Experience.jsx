import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Briefcase, Award, BookOpen, ExternalLink } from 'lucide-react';
import Section from './Section';
import { portfolioData } from '../data/portfolioData';

const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    show: (delay) => ({
        opacity: 1,
        x: 0,
        transition: { delay, duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }
    })
};

const cardVariants = {
    hidden: { opacity: 0, y: 24 },
    show: (delay) => ({
        opacity: 1,
        y: 0,
        transition: { delay, duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }
    })
};

const TimelineItem = ({ title, subtitle, date, description, icon: Icon, delay, link }) => (
    <motion.div
        custom={delay}
        variants={itemVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
        className="relative pl-10 pb-10 last:pb-0 group"
    >
        {/* Timeline line */}
        <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-primary/40 via-white/10 to-transparent" />

        {/* Icon bubble */}
        <div className="absolute left-[-18px] top-0 p-2.5 glass border border-primary/20 rounded-full shadow-[0_0_12px_rgba(0,243,255,0.15)] group-hover:border-primary/50 transition-all duration-300">
            <Icon size={14} className="text-primary" />
        </div>

        <h3 className="text-lg font-bold text-white mb-1 group-hover:text-primary transition-colors duration-250">{title}</h3>
        <div className="text-primary text-sm font-semibold mb-2 tracking-wide">{subtitle}</div>
        <div className="flex items-center gap-2 text-gray-500 text-xs mb-3">
            <Calendar size={11} /> {date}
        </div>
        {description && (
            <p className="text-gray-400 text-sm leading-relaxed mb-3">{description}</p>
        )}
        {link && (
            <a
                href={link}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-xs font-bold text-primary uppercase tracking-wider hover:text-white transition-colors duration-200"
            >
                View Certificate <ExternalLink size={11} />
            </a>
        )}
    </motion.div>
);

const CardItem = ({ title, subtitle, date, delay, link }) => (
    <motion.div
        custom={delay}
        variants={cardVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
        whileHover={{ y: -4 }}
        transition={{ type: 'spring', stiffness: 300 }}
        className="glass rounded-2xl p-6 border-l-2 border-l-secondary/60 relative overflow-hidden group cursor-default"
    >
        {/* Hover glow */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-secondary/5 to-transparent pointer-events-none rounded-2xl" />

        <div className="flex justify-between items-start mb-2 relative z-10">
            <h3 className="font-bold text-white text-base group-hover:text-secondary transition-colors duration-250 leading-snug pr-3">
                {title}
            </h3>
            <Award size={18} className="text-secondary shrink-0 mt-0.5" />
        </div>
        <div className="text-gray-400 text-sm mb-3">{subtitle}</div>
        <div className="text-xs text-gray-500 mb-4">{date}</div>

        {link && (
            <a
                href={link}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-xs font-bold text-primary uppercase tracking-wider hover:text-white transition-colors duration-200"
            >
                View Certificate <ExternalLink size={11} />
            </a>
        )}

        {/* Shimmer bar */}
        <div className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-secondary to-primary transition-all duration-500 rounded-full" />
    </motion.div>
);

const Experience = () => {
    const { training, Certificates, extracurricular, education } = portfolioData;

    return (
        <div id="experience">
            {/* Training */}
            <Section title="Training & Internships" className="bg-white/[0.015]">
                <div className="max-w-3xl mx-auto ml-6 md:ml-auto">
                    {training.map((item, idx) => (
                        <TimelineItem
                            key={idx}
                            title={item.title}
                            subtitle={item.company}
                            date={item.date}
                            description={item.desc}
                            icon={Briefcase}
                            delay={idx * 0.1}
                            link={item.link}
                        />
                    ))}
                </div>
            </Section>

            {/* Certificates */}
            <Section title="Certificates">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {Certificates.map((cert, idx) => (
                        <CardItem
                            key={idx}
                            title={cert.title}
                            subtitle={cert.issuer}
                            date={cert.date}
                            delay={idx * 0.08}
                            link={cert.link}
                        />
                    ))}
                </div>
            </Section>

            {/* Extracurricular */}
            <Section title="Extracurricular" className="bg-white/[0.015]">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {extracurricular.map((item, idx) => (
                        <motion.div
                            key={idx}
                            custom={idx * 0.1}
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, margin: "-50px" }}
                            whileHover={{ y: -4 }}
                            transition={{ type: 'spring', stiffness: 300 }}
                            className="glass rounded-2xl p-6 flex items-start gap-5 group cursor-default relative overflow-hidden"
                        >
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none rounded-2xl" />

                            <div className="p-3 bg-primary/10 rounded-xl shrink-0 group-hover:bg-primary/20 transition-colors duration-300 relative z-10">
                                <Award className="text-primary" size={22} />
                            </div>
                            <div className="relative z-10">
                                <h3 className="text-base font-bold text-white mb-1 group-hover:text-primary transition-colors duration-250">
                                    {item.role}
                                </h3>
                                <div className="text-gray-400 text-sm mb-2">{item.org}</div>
                                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Section>

            {/* Education */}
            <Section title="Education">
                <div className="max-w-3xl mx-auto ml-6 md:ml-auto">
                    {education.map((edu, idx) => (
                        <TimelineItem
                            key={idx}
                            title={edu.school}
                            subtitle={`${edu.degree} • ${edu.grade}`}
                            date={edu.year}
                            icon={BookOpen}
                            delay={idx * 0.1}
                        />
                    ))}
                </div>
            </Section>
        </div>
    );
};

export default Experience;
