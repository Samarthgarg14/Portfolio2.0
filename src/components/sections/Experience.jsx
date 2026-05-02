import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Briefcase, Award, BookOpen, ExternalLink } from 'lucide-react';
import { playSuccess } from '../../utils/sounds';
import Section from '../common/Section';
import PdfViewerModal from '../common/PdfViewerModal';
import { portfolioData } from '../../data/portfolioData';

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
        <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-white/20 via-white/5 to-transparent" />

        {/* Icon bubble */}
        <div className="absolute left-[-18px] top-0 p-2.5 bg-dark border border-white/10 rounded-full group-hover:bg-white/5 transition-all duration-300">
            <Icon size={14} className="text-white" />
        </div>

        <h3 className="text-lg font-bold text-white mb-1 group-hover:text-white transition-colors duration-250">{title}</h3>
        <div className="text-gray-300 text-sm font-semibold mb-2 tracking-wide">{subtitle}</div>
        <div className="flex items-center gap-2 text-gray-500 text-xs mb-3">
            <Calendar size={11} /> {date}
        </div>
        {description && (
            Array.isArray(description) ? (
                <ul className="text-gray-400 text-sm leading-relaxed mb-3 list-disc pl-4 space-y-1.5">
                    {description.map((point, i) => <li key={i}>{point}</li>)}
                </ul>
            ) : (
                <p className="text-gray-400 text-sm leading-relaxed mb-3">{description}</p>
            )
        )}
        {link && (
            <a
                href={link}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-xs font-bold text-white uppercase tracking-wider hover:text-gray-300 transition-colors duration-200"
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
        className="rounded-3xl p-6 md:p-8 bg-white/[0.02] hover:bg-white/[0.04] transition-colors duration-500 relative overflow-hidden group cursor-default"
    >
        {/* Soft layout separation without borders */}

        <div className="flex justify-between items-start mb-2 relative z-10">
            <h3 className="font-bold text-white text-xl md:text-2xl group-hover:text-white transition-colors duration-250 leading-snug pr-3 font-heading">
                {title}
            </h3>
        </div>
        <div className="text-gray-400 text-lg mb-2">{subtitle}</div>
        <div className="text-xs text-gray-500 mb-6 font-bold tracking-widest uppercase">{date}</div>

        {link && (
            <a
                href={link}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-xs font-bold text-white uppercase tracking-wider hover:text-gray-300 transition-colors duration-200"
            >
                View Certificate <ExternalLink size={11} />
            </a>
        )}
    </motion.div>
);

const Experience = () => {
    const { training, Certificates, education } = portfolioData;
    const [selectedPdf, setSelectedPdf] = useState(null);

    return (
        <div id="experience">
            {/* ── Training & Certificates (Merged) ── */}
            <Section className="py-10 lg:py-16" title="Training & Certificates">
                <div className="max-w-5xl mx-auto flex flex-col gap-6">
                    {/* Training Cards — big feature cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {training.map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-50px' }}
                                transition={{ delay: idx * 0.1, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                                className="rounded-[2rem] md:rounded-[2.5rem] bg-white/[0.04] backdrop-blur-md border border-white/[0.07] p-6 md:p-9 flex flex-col justify-between gap-7 hover:bg-white/[0.07] transition-all duration-500 group min-h-[260px]"
                            >
                                <div className="flex flex-col gap-5">
                                    {/* Badge row */}
                                    <div className="flex items-center justify-between">
                                        <div className="text-[10px] md:text-xs uppercase tracking-[0.25em] text-gray-400 font-semibold">{item.company}</div>
                                        <div className="w-8 h-8 md:w-9 md:h-9 rounded-full bg-white/[0.06] border border-white/[0.1] flex items-center justify-center text-[10px] md:text-[11px] font-black text-gray-500">
                                            {String(idx + 1).padStart(2, '0')}
                                        </div>
                                    </div>
                                    {/* Title */}
                                    <h3 className="text-xl md:text-2xl lg:text-3xl font-black text-white leading-tight tracking-tight">{item.title}</h3>
                                    {/* Description points */}
                                    {item.desc && (
                                        <ul className="flex flex-col gap-2.5 mt-1">
                                            {item.desc.map((point, i) => (
                                                <li key={i} className="flex items-start gap-2.5 text-sm text-gray-500 leading-relaxed">
                                                    <span className="w-1 h-1 rounded-full bg-white/30 mt-2 shrink-0" />
                                                    {point}
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                                {/* Footer */}
                                <div className="flex items-center justify-between pt-4 border-t border-white/[0.06]">
                                    <span className="text-xs uppercase tracking-[0.2em] text-gray-400 font-semibold">{item.date}</span>
                                    {item.link && (
                                        <a href={item.link} onClick={(e) => { e.preventDefault(); playSuccess(); setSelectedPdf(item.link); }}
                                            className="inline-flex items-center gap-2 text-xs font-bold text-white uppercase tracking-wider px-6 py-3 rounded-full bg-white/[0.06] border border-white/[0.1] hover:bg-white/[0.14] hover:border-white/[0.22] transition-all duration-300 cursor-pointer"
                                        >
                                            View Certificate <ExternalLink size={11} />
                                        </a>
                                    )}
                                </div>
                            </motion.div>
                        ))}

                        {/* Abstract filler if only 1 training entry */}
                        {training.length === 1 && (
                            <div className="rounded-[2.5rem] bg-white/[0.02] border border-white/[0.05] p-9 flex flex-col justify-end items-end text-right overflow-hidden min-h-[260px]">
                                {[
                                    { word: 'Always', opacity: 'opacity-100' },
                                    { word: 'Learning', opacity: 'opacity-50' },
                                    { word: 'Growing', opacity: 'opacity-[0.15]' },
                                ].map(({ word, opacity }) => (
                                    <div key={word} className={`text-[clamp(2.5rem,6.5vw,4.5rem)] font-black text-white uppercase tracking-tighter leading-[0.82] ${opacity}`}>{word}</div>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Divider */}
                    <div className="w-full h-px bg-white/[0.06] my-1" />

                    {/* Certificate Cards — 3 col grid, bigger */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                        {Certificates.map((cert, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-50px' }}
                                transition={{ delay: idx * 0.08, duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
                                whileHover={{ y: -5 }}
                                className="rounded-[2rem] md:rounded-[2.5rem] bg-white/[0.04] backdrop-blur-md border border-white/[0.07] p-5 md:p-7 flex flex-col justify-between gap-6 hover:bg-white/[0.07] hover:border-white/[0.14] transition-all duration-500 group cursor-default min-h-[190px]"
                            >
                                <div className="flex flex-col gap-4">
                                    {/* Award icon */}
                                    <div className="w-9 h-9 md:w-10 md:h-10 rounded-xl md:rounded-2xl bg-white/[0.06] border border-white/[0.08] flex items-center justify-center">
                                        <Award size={14} className="text-gray-500 group-hover:text-white transition-colors duration-300" />
                                    </div>
                                    <div>
                                        <div className="text-[9px] md:text-[10px] uppercase tracking-[0.25em] text-gray-400 font-semibold mb-3">{cert.issuer}</div>
                                        <h4 className="text-sm md:text-base lg:text-lg font-black text-white leading-snug tracking-tight">{cert.title}</h4>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between pt-3 border-t border-white/[0.06]">
                                    <span className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] text-gray-400 font-semibold">{cert.date}</span>
                                    {cert.link && (
                                        <a href={cert.link} onClick={(e) => { e.preventDefault(); playSuccess(); setSelectedPdf(cert.link); }}
                                            className="inline-flex items-center gap-1.5 text-[9px] md:text-[10px] font-bold text-white uppercase tracking-wider px-3.5 py-2 rounded-full bg-white/[0.06] border border-white/[0.1] hover:bg-white/[0.14] hover:border-white/[0.22] transition-all duration-300 cursor-pointer"
                                        >
                                            View <ExternalLink size={8} />
                                        </a>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </Section>



            {/* ── Education ── */}
            <Section id="education" className="py-12 md:py-24" title="Education">
                <div className="max-w-5xl mx-auto flex flex-col gap-5">
                    {/* ── Current: Big Feature Block ── */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.97 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: '-60px' }}
                        transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
                        className="rounded-[2rem] md:rounded-[2.5rem] bg-white/[0.05] backdrop-blur-md border border-white/[0.12] p-8 md:p-14 flex flex-col md:flex-row items-center md:items-end justify-between gap-8 relative overflow-hidden"
                    >
                        {/* Animated glow blob */}
                        <motion.div
                            animate={{ scale: [1, 1.15, 1], opacity: [0.04, 0.08, 0.04] }}
                            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                            className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-white blur-3xl pointer-events-none"
                        />

                        <div className="relative z-10 flex flex-col gap-3 text-center md:text-left">
                            <span className="inline-flex items-center justify-center md:justify-start gap-2 text-[9px] md:text-[10px] uppercase tracking-[0.3em] font-bold text-white/50">
                                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                                Currently Enrolled
                            </span>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tighter">
                                {education[0].school}
                            </h2>
                            <p className="text-gray-400 text-base md:text-lg font-semibold">{education[0].degree}</p>
                            <p className="text-white/70 text-xs md:text-sm font-bold tracking-wide">{education[0].grade}</p>
                        </div>

                        {/* Big year badge */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3, duration: 0.6 }}
                            className="relative z-10 text-center md:text-right shrink-0"
                        >
                            <div className="text-[4rem] md:text-[7rem] font-black text-white/[0.06] leading-none tracking-tighter select-none">2023</div>
                            <div className="text-[10px] md:text-xs uppercase tracking-[0.25em] text-gray-400 font-semibold -mt-2">{education[0].year}</div>
                        </motion.div>
                    </motion.div>

                    {/* ── Past: Animated Horizontal Rows ── */}
                    <div className="flex flex-col gap-3">
                        {education.slice(1).map((edu, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: -40 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: '-40px' }}
                                transition={{ delay: idx * 0.15, duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
                                whileHover={{ x: 6 }}
                                className="rounded-2xl bg-white/[0.02] border border-white/[0.05] px-6 py-4 md:px-8 md:py-5 flex items-center justify-between group hover:bg-white/[0.04] hover:border-white/[0.08] transition-all duration-400 cursor-default"
                            >
                                <div className="flex items-center gap-4 md:gap-6">
                                    {/* Index number */}
                                    <span className="text-[10px] md:text-[11px] font-black text-white/[0.15] w-6 shrink-0">{String(idx + 2).padStart(2, '0')}</span>
                                    <div>
                                        <h4 className="text-sm md:text-base font-black text-gray-400 group-hover:text-gray-200 transition-colors duration-300 leading-tight">{edu.school}</h4>
                                        <p className="text-[10px] md:text-xs text-gray-400 group-hover:text-gray-300 transition-colors duration-300 mt-0.5">{edu.degree} · {edu.grade}</p>
                                    </div>
                                </div>
                                <span className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] text-gray-400 group-hover:text-gray-300 transition-colors duration-300 font-semibold shrink-0">{edu.year}</span>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </Section>

            <PdfViewerModal
                isOpen={!!selectedPdf}
                onClose={() => setSelectedPdf(null)}
                pdfUrl={selectedPdf}
                title="Certificate Viewer"
            />
        </div>
    );
};

export default Experience;
