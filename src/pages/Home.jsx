import React from 'react';
import { motion } from 'framer-motion';
import ScrollProgress from '../components/common/ScrollProgress';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import CommandPalette from '../components/layout/CommandPalette';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Skills from '../components/sections/Skills';
import Projects from '../components/sections/Projects';
import Experience from '../components/sections/Experience';
import Contact from '../components/sections/Contact';

const pageVariants = {
    hidden: { opacity: 0, y: 16 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.75, ease: [0.25, 0.46, 0.45, 0.94] }
    }
};

const Home = () => {
    return (
        <motion.div
            key="page"
            variants={pageVariants}
            initial="hidden"
            animate="show"
            className="min-h-screen bg-dark"
        >
            <ScrollProgress />
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
    );
};

export default Home;
