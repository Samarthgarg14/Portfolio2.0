import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Briefcase, Award, BookOpen, ExternalLink } from 'lucide-react';
import Section from './Section';
import { portfolioData } from '../data/portfolioData';

const TimelineItem = ({ title, subtitle, date, description, icon: Icon, delay, link }) => (
    <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay }}
        className="relative pl-8 pb-8 border-l border-white/10 last:pb-0"
    >
        <div className="absolute left-[-20px] top-0 p-2 bg-dark border border-white/10 rounded-full">
            <Icon size={16} className="text-primary" />
        </div>
        <h3 className="text-xl font-bold text-white mb-1">{title}</h3>
        <div className="text-primary text-sm font-medium mb-2">{subtitle}</div>
        <div className="flex items-center gap-2 text-gray-500 text-xs mb-3">
            <Calendar size={12} /> {date}
        </div>
        {description && <p className="text-gray-400 text-sm leading-relaxed mb-3">{description}</p>}
        {link && (
            <a
                href={link}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold text-primary uppercase tracking-wider hover:text-white transition-colors"
            >
                View Certificate <ExternalLink size={12} />
            </a>
        )}
    </motion.div>
);

const CardItem = ({ title, subtitle, date, delay, link }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay }}
        className="glass p-6 rounded-xl border-l-4 border-l-secondary"
    >
        <div className="flex justify-between items-start mb-2">
            <h3 className="font-bold text-white">{title}</h3>
            <Award size={20} className="text-secondary" />
        </div>
        <div className="text-gray-400 text-sm mb-4">{subtitle}</div>
        <div className="text-xs text-gray-500">{date}</div>
        {link && (
            <a
                href={link}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-xs font-semibold text-primary uppercase tracking-wider hover:text-white transition-colors"
            >
                View Certificate <ExternalLink size={12} />
            </a>
        )}
    </motion.div>
);

const Experience = () => {
    const { training, certifications, extracurricular, education } = portfolioData;

    return (
        <div id="experience">
            {/* Training */}
            <Section title="Training & Internships" className="bg-white/[0.02]">
                <div className="max-w-3xl mx-auto ml-4 md:ml-auto">
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

            {/* Certifications */}
            <Section title="Certifications">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {certifications.map((cert, idx) => (
                        <CardItem
                            key={idx}
                            title={cert.title}
                            subtitle={cert.issuer}
                            date={cert.date}
                            delay={idx * 0.1}
                            link={cert.link}
                        />
                    ))}
                </div>
            </Section>

            {/* Extracurricular */}
            <Section title="Extracurricular" className="bg-white/[0.02]">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {extracurricular.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="glass p-6 rounded-xl flex items-start gap-4"
                        >
                            <div className="p-3 bg-primary/10 rounded-lg">
                                <Award className="text-primary" size={24} />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-white mb-1">{item.role}</h3>
                                <div className="text-gray-400 text-sm mb-2">{item.org}</div>
                                <p className="text-gray-500 text-sm">{item.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Section>

            {/* Education */}
            <Section title="Education">
                <div className="max-w-3xl mx-auto ml-4 md:ml-auto">
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
