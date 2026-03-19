import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, X, ChevronRight, ArrowUpRight } from 'lucide-react';
import Section from './Section';
import TiltCard from './TiltCard';
import { portfolioData } from '../data/portfolioData';
import { playClick, playSuccess } from '../utils/sounds';

const cardVariants = {
    hidden: { opacity: 0, y: 28, scale: 0.97 },
    show: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }
    },
    exit: {
        opacity: 0,
        scale: 0.95,
        transition: { duration: 0.25 }
    }
};

const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const Projects = () => {
    const [filter, setFilter] = useState('All');
    const [selectedProject, setSelectedProject] = useState(null);

    const filters = ['All', 'AI/Web', 'Data Analysis', 'Dashboards'];

    const filteredProjects = portfolioData.projects.filter(project =>
        filter === 'All' ? true : project.category === filter
    );

    return (
        <Section
            id="projects"
            title="Featured Projects"
            subtitle="A collection of my best work in AI, Data, and Web Dev"
        >
            {/* Filter Tabs */}
            <div className="flex flex-wrap justify-center gap-3 mb-14">
                {filters.map((f) => (
                    <motion.button
                        key={f}
                        onClick={() => { setFilter(f); playClick(); }}
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.97 }}
                        className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                            filter === f
                                ? 'bg-gradient-to-r from-primary to-secondary text-dark shadow-[0_0_20px_rgba(0,243,255,0.35)]'
                                : 'glass text-gray-400 hover:text-white hover:border-white/15'
                        }`}
                    >
                        {f}
                    </motion.button>
                ))}
            </div>

            {/* Project Grid */}
            <motion.div
                layout
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-60px" }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch"
            >
                <AnimatePresence mode="popLayout">
                    {filteredProjects.map((project) => (
                        <TiltCard
                            layout
                            variants={cardVariants}
                            initial="hidden"
                            animate="show"
                            exit="exit"
                            key={project.id}
                            className="glass rounded-2xl group flex flex-col h-full overflow-hidden"
                        >
                            <div className="flex flex-col h-full w-full p-6 md:p-8 bg-transparent">

                                {/* Top row - badge + icon */}
                                <div className="flex items-start justify-between mb-5">
                                    <span className="text-xs font-bold px-3 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/20 tracking-wide uppercase">
                                        {project.category}
                                    </span>
                                    <motion.div
                                        whileHover={{ rotate: 45, scale: 1.1 }}
                                        transition={{ type: 'spring', stiffness: 300 }}
                                        className="p-2 rounded-lg bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                    >
                                        <ArrowUpRight size={16} className="text-primary" />
                                    </motion.div>
                                </div>

                                <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors duration-300 leading-snug line-clamp-2">
                                    {project.title}
                                </h3>

                                <p className="text-gray-400 mb-6 line-clamp-3 leading-relaxed text-sm md:text-base">
                                    {project.summary}
                                </p>

                                {/* Tech badges */}
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tech.map(t => (
                                        <span
                                            key={t}
                                            className="text-xs text-gray-500 bg-white/[0.04] border border-white/[0.07] px-2.5 py-1 rounded-md font-mono"
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                {/* Footer */}
                                <div className="mt-auto w-full flex justify-between items-center border-t border-white/[0.08] pt-5">
                                    <div className="flex gap-5">
                                        {project.links.live && (
                                            <a
                                                href={project.links.live}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="flex items-center gap-1.5 text-sm font-medium text-gray-400 hover:text-primary transition-colors duration-200"
                                            >
                                                <ExternalLink size={15} /> Live
                                            </a>
                                        )}
                                        {project.links.github && (
                                            <a
                                                href={project.links.github}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="flex items-center gap-1.5 text-sm font-medium text-gray-400 hover:text-primary transition-colors duration-200"
                                            >
                                                <Github size={15} /> GitHub
                                            </a>
                                        )}
                                    </div>
                                    <motion.button
                                        whileHover={{ x: 3 }}
                                        onClick={() => { setSelectedProject(project); playSuccess(); }}
                                        className="text-sm text-gray-500 hover:text-white flex items-center gap-1 transition-colors duration-200 font-medium"
                                    >
                                        Details <ChevronRight size={15} />
                                    </motion.button>
                                </div>
                            </div>

                            {/* Hover gradient shimmer bar */}
                            <div className="h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-primary to-secondary transition-all duration-500 rounded-full" />
                        </TiltCard>
                    ))}
                </AnimatePresence>
            </motion.div>

            {/* Modal — rendered via portal to escape Framer Motion stacking context */}
            {typeof document !== 'undefined' && ReactDOM.createPortal(
                <AnimatePresence>
                    {selectedProject && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.25 }}
                            className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/75 backdrop-blur-md"
                            onClick={() => setSelectedProject(null)}
                        >
                            <motion.div
                                initial={{ y: 60, opacity: 0, scale: 0.96 }}
                                animate={{ y: 0, opacity: 1, scale: 1 }}
                                exit={{ y: 40, opacity: 0, scale: 0.96 }}
                                transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
                                onClick={(e) => e.stopPropagation()}
                                className="glass border border-white/12 p-8 md:p-10 rounded-3xl max-w-2xl w-full relative shadow-2xl overflow-y-auto max-h-[90vh]"
                                style={{ background: 'rgba(10, 15, 28, 0.92)', backdropFilter: 'blur(24px)' }}
                            >
                                {/* Close */}
                                <motion.button
                                    whileHover={{ scale: 1.1, rotate: 90 }}
                                    transition={{ type: 'spring', stiffness: 300 }}
                                    onClick={() => setSelectedProject(null)}
                                    className="absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
                                >
                                    <X size={20} />
                                </motion.button>

                                <span className="text-primary text-xs font-bold tracking-[0.18em] uppercase mb-3 block">
                                    {selectedProject.category}
                                </span>
                                <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 leading-snug">
                                    {selectedProject.title}
                                </h2>
                                <div className="text-gray-500 text-sm mb-7">{selectedProject.date}</div>

                                <p className="text-gray-300 leading-relaxed mb-8 text-[15px]">
                                    {selectedProject.details}
                                </p>

                                <div className="mb-8">
                                    <h4 className="text-xs font-bold text-gray-500 uppercase tracking-[0.15em] mb-4">
                                        Tech Stack
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                        {selectedProject.tech.map(t => (
                                            <span
                                                key={t}
                                                className="px-3 py-1.5 glass border-white/10 rounded-md text-sm text-gray-300 font-mono"
                                            >
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex gap-3 flex-wrap">
                                    {selectedProject.links.live && (
                                        <a
                                            href={selectedProject.links.live}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="bg-gradient-to-r from-primary to-secondary text-dark px-7 py-2.5 rounded-full font-bold text-sm hover:shadow-[0_0_20px_rgba(0,243,255,0.4)] transition-all hover:scale-105"
                                        >
                                            View Live
                                        </a>
                                    )}
                                    {selectedProject.links.github && (
                                        <a
                                            href={selectedProject.links.github}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="glass border-white/15 text-white px-7 py-2.5 rounded-full font-bold text-sm hover:bg-white/10 transition-all hover:scale-105"
                                        >
                                            GitHub Repo
                                        </a>
                                    )}
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>,
                document.body
            )}
        </Section>
    );
};

export default Projects;
