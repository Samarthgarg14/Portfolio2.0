import React from 'react';
import { motion } from 'framer-motion';

const Loader = () => (
    <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="fixed inset-0 z-[9999] flex items-center justify-center bg-dark"
    >
        <motion.div
            initial={{ opacity: 0, filter: 'blur(16px)', scale: 0.95 }}
            animate={{ opacity: 1, filter: 'blur(0px)', scale: 1 }}
            exit={{ opacity: 0, filter: 'blur(12px)', scale: 1.05 }}
            transition={{ type: "spring", damping: 30, stiffness: 200 }}
            className="text-2xl md:text-4xl font-bold tracking-[0.4em] text-white"
        >
            SAMARTH
        </motion.div>
    </motion.div>
);

export default Loader;
