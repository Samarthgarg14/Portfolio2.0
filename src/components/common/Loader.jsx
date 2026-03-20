import React from 'react';
import { motion } from 'framer-motion';

const Loader = () => (
    <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
        className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#070b15]"
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

export default Loader;
