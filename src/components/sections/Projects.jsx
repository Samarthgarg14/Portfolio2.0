import { useState } from 'react';
import ReactDOM from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, X, ChevronRight, ArrowUpRight } from 'lucide-react';
import Section from '../common/Section';
import TiltCard from '../common/TiltCard';
import { portfolioData } from '../../data/portfolioData';
import { playClick, playSuccess } from '../../utils/sounds';

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
                            className="relative glass rounded-2xl group flex flex-col h-[300px] md:h-[350px] overflow-hidden cursor-pointer border-0"
                            onClick={() => { setSelectedProject(project); playSuccess(); }}
                        >
                            <div className="absolute inset-3 z-0 overflow-hidden rounded-xl bg-[#0d1526]/50 border border-white/5">
                                {project.image && (
                                    <img 
                                        src={project.image} 
                                        alt={project.title} 
                                        className="w-full h-full object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700" 
                                    />
                                )}
                                {/* Dark gradient at the bottom to ensure text readability and create a deep fade */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black from-15% via-black/60 via-50% to-transparent" />
                            </div>

                            <div className="relative z-10 flex flex-col justify-end h-full w-full p-8 md:p-10 bg-transparent pointer-events-none">
                                <h3 className="text-xl md:text-2xl font-extrabold text-white mb-3 leading-tight drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                                    {project.title}
                                </h3>
                                <div>
                                    <span className="inline-block px-4 py-1.5 rounded-full bg-white text-black text-xs font-extrabold shadow-lg">
                                        {project.category}
                                    </span>
                                </div>
                            </div>
                            
                            {/* Hover shimmer optional */}
                            <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/50 rounded-2xl transition-colors duration-500 pointer-events-none" />
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
                                    aria-label="Close project details"
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

                                <ul className="text-gray-300 leading-relaxed mb-8 text-[15px] list-disc pl-5 space-y-2">
                                    {Array.isArray(selectedProject.details) 
                                        ? selectedProject.details.map((point, i) => <li key={i}>{point}</li>)
                                        : <li>{selectedProject.details}</li>
                                    }
                                </ul>

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
