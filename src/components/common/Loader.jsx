import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const BOOT_LOGS = [
    "INITIALIZING SYSTEM KERNEL...",
    "LOADING MEMORY MODULES...",
    "MOUNTING FILE SYSTEMS [OK]",
    "ESTABLISHING SECURE CONNECTION...",
    "FETCHING USER PREFERENCES...",
    "RENDERING UI COMPONENTS...",
    "BOOT SEQUENCE COMPLETE."
];

const Loader = () => {
    const [progress, setProgress] = useState(0);
    const [logIndex, setLogIndex] = useState(0);

    useEffect(() => {
        // Fast progress counter
        const interval = setInterval(() => {
            setProgress(p => {
                if (p >= 100) {
                    clearInterval(interval);
                    return 100;
                }
                return p + Math.floor(Math.random() * 15) + 5;
            });
        }, 80);

        // Slow logs counter
        const logInterval = setInterval(() => {
            setLogIndex(prev => Math.min(prev + 1, BOOT_LOGS.length - 1));
        }, 200);

        return () => {
            clearInterval(interval);
            clearInterval(logInterval);
        };
    }, []);

    // Ensure it caps at 100
    const displayProgress = Math.min(progress, 100);

    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[9999] flex flex-col justify-end bg-black text-white p-6 md:p-12 overflow-hidden"
        >
            <div className="flex flex-col gap-2 max-w-xl mb-auto mt-20 opacity-50">
                {BOOT_LOGS.slice(0, logIndex + 1).map((log, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="text-[10px] md:text-xs font-mono uppercase tracking-widest text-green-400"
                    >
                        &gt; {log}
                    </motion.div>
                ))}
            </div>

            <div className="flex items-end justify-between border-b border-white/20 pb-4">
                <div className="text-sm md:text-lg uppercase tracking-[0.4em] font-black">
                    SAMARTH OS v2.0
                </div>
                <div className="text-4xl md:text-7xl font-black tracking-tighter leading-none">
                    {displayProgress}%
                </div>
            </div>
            
            <motion.div 
                className="absolute bottom-0 left-0 h-1 bg-white"
                initial={{ width: "0%" }}
                animate={{ width: `${displayProgress}%` }}
                transition={{ ease: "linear", duration: 0.1 }}
            />
        </motion.div>
    );
};

export default Loader;
