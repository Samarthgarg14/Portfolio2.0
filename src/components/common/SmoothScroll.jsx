import React, { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

const SmoothScroll = ({ children }) => {
    useEffect(() => {
        // Initialize Lenis
        const lenis = new Lenis({
            duration: 1.1, // slightly faster for better responsiveness
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
            direction: 'vertical',
            gestureDirection: 'vertical',
            smoothHover: true, 
            smoothTouch: false,
            wheelMultiplier: 1, // keeping it standard
            touchMultiplier: 2,
            infinite: false,
        });

        let rafId;

        function raf(time) {
            lenis.raf(time);
            rafId = requestAnimationFrame(raf);
        }

        rafId = requestAnimationFrame(raf);

        // Cleanup on unmount
        return () => {
            lenis.destroy();
            cancelAnimationFrame(rafId);
        };
    }, []);

    return <>{children}</>;
};

export default SmoothScroll;
