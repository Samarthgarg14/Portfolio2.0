import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

const CustomCursor = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [ripples, setRipples] = useState([]);
    
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    const springConfig = { damping: 25, stiffness: 700 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    useEffect(() => {
        const moveCursor = (e) => {
            if (!isVisible) setIsVisible(true);
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
        };

        const handleMouseEnter = () => setIsHovered(true);
        const handleMouseLeave = () => setIsHovered(false);
        const handleHoverClick = () => {
            // Momentarily reset scale on click
            setIsHovered(false);
            setTimeout(() => setIsHovered(true), 50);
        };

        const handleGlobalClick = (e) => {
            const newRipple = { id: Date.now(), x: e.clientX, y: e.clientY };
            setRipples(prev => [...prev, newRipple]);
            setTimeout(() => {
                setRipples(prev => prev.filter(r => r.id !== newRipple.id));
            }, 600);
        };

        const handleWindowLeave = () => setIsVisible(false);
        const handleWindowEnter = () => setIsVisible(true);

        const handleIframeEnter = () => setIsVisible(false);
        const handleIframeLeave = () => setIsVisible(true);

        window.addEventListener('mousemove', moveCursor);
        window.addEventListener('click', handleGlobalClick);
        window.addEventListener('mouseout', (e) => {
            if (!e.relatedTarget && !e.toElement) handleWindowLeave();
        });
        window.addEventListener('mouseover', handleWindowEnter);

        const attachListeners = () => {
            const clickableElements = document.querySelectorAll('a, button, input, textarea, [role="button"]');
            clickableElements.forEach(el => {
                el.addEventListener('mouseenter', handleMouseEnter);
                el.addEventListener('mouseleave', handleMouseLeave);
                el.addEventListener('click', handleHoverClick);
            });

            const iframes = document.querySelectorAll('iframe');
            iframes.forEach(iframe => {
                iframe.addEventListener('mouseenter', handleIframeEnter);
                iframe.addEventListener('mouseleave', handleIframeLeave);
            });
        };

        attachListeners();

        const observer = new MutationObserver((mutations) => {
            if (mutations.some(m => m.addedNodes.length > 0)) {
                attachListeners();
            }
        });

        observer.observe(document.body, { childList: true, subtree: true });

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            window.removeEventListener('click', handleGlobalClick);
            observer.disconnect();
        };
    }, [cursorX, cursorY, isVisible]);

    return (
        <>
            {/* Click Ripples */}
            {ripples.map(ripple => (
                <motion.div
                    key={ripple.id}
                    className="fixed rounded-full border border-white/40 pointer-events-none z-[9999]"
                    style={{
                        left: ripple.x,
                        top: ripple.y,
                        translateX: '-50%',
                        translateY: '-50%'
                    }}
                    initial={{ width: 0, height: 0, opacity: 0.8 }}
                    animate={{ width: 100, height: 100, opacity: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                />
            ))}

            {/* Massive Difference Spotlight Cursor */}
            <motion.div
                className="fixed top-0 left-0 w-10 h-10 rounded-full bg-white mix-blend-difference pointer-events-none z-[9999]"
                style={{
                    x: cursorXSpring,
                    y: cursorYSpring,
                    translateX: '-50%',
                    translateY: '-50%',
                    opacity: isVisible ? 1 : 0,
                }}
                animate={{
                    scale: isHovered ? 4 : 1,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
            />
        </>
    );
};

export default CustomCursor;
