import { useState, useRef, useEffect } from 'react';
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
    const [activeIndex, setActiveIndex] = useState(0);
    const sliderRef = useRef(null);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape' && selectedProject) {
                setSelectedProject(null);
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [selectedProject]);

    const handleScroll = () => {
        if (sliderRef.current) {
            const scrollLeft = sliderRef.current.scrollLeft;
            const cardWidth = sliderRef.current.querySelector('.project-card-wrapper').offsetWidth + 48; // width + gap-12
            const newIndex = Math.round(scrollLeft / cardWidth);
            if (newIndex !== activeIndex) setActiveIndex(newIndex);
        }
    };

    const filters = ['All', 'ML/Security', 'AI/Web', 'Data Analysis', 'Dashboards'];

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
            <div className="flex flex-wrap justify-center gap-3 mb-10 overflow-x-auto pb-4 no-scrollbar">
                {filters.map((f) => (
                    <motion.button
                        key={f}
                        onClick={() => { setFilter(f); playClick(); }}
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.97 }}
                        className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 whitespace-nowrap ${filter === f
                                ? 'bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.1)]'
                                : 'glass text-gray-400 hover:text-white hover:border-white/15'
                            }`}
                    >
                        {f}
                    </motion.button>
                ))}
            </div>

            {/* Project Slider Container */}
            <div className="relative group/slider max-w-[100vw] overflow-visible">
                {/* Navigation Arrows */}
                <div className="hidden lg:flex absolute -left-16 top-1/2 -translate-y-1/2 z-20 group-hover/slider:opacity-100 opacity-0 transition-opacity duration-300">
                    <motion.button
                        whileHover={{ scale: 1.1, x: -4 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-12 h-12 rounded-full border border-white/10 bg-white/5 backdrop-blur-md flex items-center justify-center text-white"
                        onClick={() => {
                            const container = document.getElementById('project-slider');
                            container.scrollBy({ left: -450, behavior: 'smooth' });
                        }}
                    >
                        <motion.div animate={{ x: [0, -2, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}><ChevronRight className="rotate-180" size={20} /></motion.div>
                    </motion.button>
                </div>

                <div className="hidden lg:flex absolute -right-16 top-1/2 -translate-y-1/2 z-20 group-hover/slider:opacity-100 opacity-0 transition-opacity duration-300">
                    <motion.button
                        whileHover={{ scale: 1.1, x: 4 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-12 h-12 rounded-full border border-white/10 bg-white/5 backdrop-blur-md flex items-center justify-center text-white"
                        onClick={() => {
                            const container = document.getElementById('project-slider');
                            container.scrollBy({ left: 450, behavior: 'smooth' });
                        }}
                    >
                        <motion.div animate={{ x: [0, 2, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}><ChevronRight size={20} /></motion.div>
                    </motion.button>
                </div>

                <motion.div
                    id="project-slider"
                    ref={sliderRef}
                    onScroll={handleScroll}
                    layout
                    className="flex gap-8 md:gap-12 overflow-x-auto pb-12 pt-4 no-scrollbar snap-x snap-mandatory"
                    style={{
                        scrollBehavior: 'smooth',
                        paddingLeft: '1.5rem',
                        paddingRight: '1.5rem'
                    }}
                >
                    {/* Tablet/Desktop Overrides for Padding */}
                    <style dangerouslySetInnerHTML={{
                        __html: `
                        @media (min-width: 768px) {
                            #project-slider { 
                                padding-left: calc(50vw - 240px) !important; 
                                padding-right: calc(50vw - 240px) !important; 
                            }
                        }
                        @media (min-width: 1024px) {
                            #project-slider { 
                                padding-left: calc(50vw - 320px) !important; 
                                padding-right: calc(50vw - 320px) !important; 
                            }
                        }
                    `}} />
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project, idx) => (
                            <motion.div
                                layout
                                key={project.id}
                                variants={cardVariants}
                                initial="hidden"
                                animate="show"
                                exit="exit"
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.05 }}
                                className="project-card-wrapper min-w-[calc(100vw-3rem)] md:min-w-[480px] lg:min-w-[640px] snap-center"
                            >
                                <TiltCard
                                    className="relative rounded-[2.5rem] group flex flex-col aspect-video overflow-hidden cursor-pointer bg-dark border border-white/5 hover:border-white/15 transition-colors duration-500"
                                    onClick={() => { setSelectedProject(project); playSuccess(); }}
                                >
                                    <div className="absolute inset-0 z-0 overflow-hidden">
                                        {project.image && (
                                            <motion.img
                                                src={project.image}
                                                alt={project.title}
                                                className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-all duration-700 blur-[2px] group-hover:blur-0"
                                                whileHover={{ scale: 1.05 }}
                                            />
                                        )}
                                        {/* Gradient Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/40 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
                                    </div>

                                    <div className="relative z-10 flex flex-col justify-end h-full w-full p-10 pointer-events-none">
                                        <div className="flex flex-col gap-4 transform group-hover:translate-y-[-8px] transition-transform duration-500">
                                            <div className="flex items-center justify-between">
                                                <span className="text-[10px] uppercase tracking-[0.25em] font-bold text-white/50">{project.date}</span>
                                                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all">
                                                    <ArrowUpRight size={18} />
                                                </div>
                                            </div>
                                            <h3 className="text-2xl md:text-3xl font-black text-white leading-tight tracking-tighter drop-shadow-2xl">
                                                {project.title}
                                            </h3>
                                            <div className="flex flex-wrap gap-2 pt-2">
                                                <span className="inline-block px-4 py-1.5 rounded-full bg-white text-black text-[10px] font-black uppercase tracking-widest shadow-lg">
                                                    {project.category}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </TiltCard>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>


            </div>

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
                                className="bg-dark/80 backdrop-blur-[32px] border border-white/10 p-8 md:p-12 rounded-[2.5rem] max-w-2xl w-full relative shadow-2xl overflow-y-auto max-h-[90vh]"
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

                                <span className="text-gray-400 text-xs font-bold tracking-[0.18em] uppercase mb-3 block">
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
                                            className="bg-white text-black px-7 py-2.5 rounded-full font-bold text-sm hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all hover:scale-105"
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
