import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CustomCursor from './components/CustomCursor';
import ScrollProgress from './components/ScrollProgress';
import ParticlesBackground from './components/ParticlesBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CommandPalette from './components/CommandPalette';

/* ── Loader ── */
const Loader = () => (
    <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
        className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
        style={{ background: '#070b15' }}
    >
        <div className="relative mb-6">
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1.8, repeat: Infinity, ease: 'linear' }}
                className="w-16 h-16 rounded-full border-t-2 border-r-2 border-primary"
            />
            <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 2.8, repeat: Infinity, ease: 'linear' }}
                className="w-10 h-10 rounded-full border-b-2 border-l-2 border-secondary absolute top-3 left-3"
            />
        </div>
        <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-base font-bold tracking-[0.3em] text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary"
        >
            SAMARTH
        </motion.div>
    </motion.div>
);

/* ── Page entry animation ── */
const pageVariants = {
    hidden: { opacity: 0, y: 16 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.75, ease: [0.25, 0.46, 0.45, 0.94] }
    }
};

function App() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 2000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <AnimatePresence>
                {loading && <Loader />}
            </AnimatePresence>

            <AnimatePresence>
                {!loading && (
                    <motion.div
                        key="page"
                        variants={pageVariants}
                        initial="hidden"
                        animate="show"
                        className="min-h-screen gradient-bg"
                    >
                        <ScrollProgress />
                        <ParticlesBackground />
                        <div className="noise-bg" />
                        <CustomCursor />
                        <Navbar />

                        <main>
                            <Hero />
                            <About />
                            <Skills />
                            <Projects />
                            <Experience />
                            <Contact />
                        </main>

                        <Footer />
                        <CommandPalette />
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}

export default App;
