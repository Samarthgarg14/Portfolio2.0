import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, X, ChevronRight } from 'lucide-react';
import Section from './Section';
import TiltCard from './TiltCard';
import { portfolioData } from '../data/portfolioData';
import { playClick, playSuccess } from '../utils/sounds';

const Projects = () => {
    const [filter, setFilter] = useState('All');
    const [selectedProject, setSelectedProject] = useState(null);

    const filters = ['All', 'AI/Web', 'Data Analysis', 'Dashboards'];

    const filteredProjects = portfolioData.projects.filter(project =>
        filter === 'All' ? true : project.category === filter
    );

    return (
        <Section id="projects" title="Featured Projects" subtitle="A collection of my best work in AI, Data, and Web Dev">

            {/* Filters */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
                {filters.map((f) => (
                    <button
                        key={f}
                        onClick={() => { setFilter(f); playClick(); }}
                        className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${filter === f
                            ? 'bg-primary text-dark shadow-[0_0_15px_rgba(0,243,255,0.4)]'
                            : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/5'
                            }`}
                    >
                        {f}
                    </button>
                ))}
            </div>

            {/* Grid */}
            <motion.div
                layout
                className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch"
            >
                <AnimatePresence>
                    {filteredProjects.map((project) => (
                        <TiltCard
                            layout
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            key={project.id}
                            className="glass p-6 md:p-8 rounded-2xl group flex flex-col h-full"
                        >
                            <div className="flex flex-col h-full w-full bg-transparent">
                                {/* Category Badge */}
                                <span className="self-start text-xs font-bold px-3 py-1 rounded-full bg-primary/10 text-primary mb-4 border border-primary/20">
                                    {project.category}
                                </span>

                                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-primary transition-colors line-clamp-2">
                                    {project.title}
                                </h3>

                                <p className="text-gray-400 mb-6 line-clamp-3 leading-relaxed">
                                    {project.summary}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tech.map(t => (
                                        <span key={t} className="text-xs text-gray-500 bg-black/30 px-2 py-1 rounded border border-white/5">
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                {/* Footer / Actions - Pushed to bottom */}
                                <div className="mt-auto w-full flex justify-between items-center border-t border-white/10 pt-4">
                                    <div className="flex gap-4">
                                        {project.links.live && (
                                            <a href={project.links.live} target="_blank" className="flex items-center gap-1 text-sm font-medium hover:text-primary transition-colors">
                                                <ExternalLink size={16} /> Live
                                            </a>
                                        )}
                                        {project.links.github && (
                                            <a href={project.links.github} target="_blank" className="flex items-center gap-1 text-sm font-medium hover:text-primary transition-colors">
                                                <Github size={16} /> GitHub
                                            </a>
                                        )}
                                    </div>
                                    <button
                                        onClick={() => { setSelectedProject(project); playSuccess(); }}
                                        className="text-sm text-gray-400 hover:text-white flex items-center gap-1 transition-colors"
                                    >
                                        Details <ChevronRight size={16} />
                                    </button>
                                </div>
                            </div>
                        </TiltCard>
                    ))}
                </AnimatePresence>
            </motion.div>

            {/* Modal */}
            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
                        onClick={() => setSelectedProject(null)}
                    >
                        <motion.div
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: 50, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-[#0f1629] border border-white/10 p-8 rounded-3xl max-w-2xl w-full relative shadow-2xl overflow-y-auto max-h-[90vh]"
                        >
                            <button
                                onClick={() => setSelectedProject(null)}
                                className="absolute top-6 right-6 text-gray-400 hover:text-white p-2"
                            >
                                <X size={24} />
                            </button>

                            <span className="text-primary text-sm font-bold tracking-wider uppercase mb-2 block">{selectedProject.category}</span>
                            <h2 className="text-3xl font-bold text-white mb-2">{selectedProject.title}</h2>
                            <div className="text-gray-500 mb-6">{selectedProject.date}</div>

                            <p className="text-gray-300 leading-relaxed mb-8">
                                {selectedProject.details}
                            </p>

                            <div className="mb-8">
                                <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">Tech Stack</h4>
                                <div className="flex flex-wrap gap-2">
                                    {selectedProject.tech.map(t => (
                                        <span key={t} className="px-3 py-1 bg-white/5 border border-white/10 rounded-md text-sm text-gray-300">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="flex gap-4">
                                {selectedProject.links.live && (
                                    <a href={selectedProject.links.live} target="_blank" className="bg-primary text-dark px-6 py-2 rounded-full font-bold hover:shadow-[0_0_15px_rgba(0,243,255,0.4)] transition-all">
                                        View Live
                                    </a>
                                )}
                                {selectedProject.links.github && (
                                    <a href={selectedProject.links.github} target="_blank" className="bg-white/10 text-white px-6 py-2 rounded-full font-bold hover:bg-white/20 transition-all">
                                        GitHub Repo
                                    </a>
                                )}
                            </div>

                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </Section>
    );
};

export default Projects;
