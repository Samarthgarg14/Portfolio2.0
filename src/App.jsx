import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import SmoothScroll from './components/common/SmoothScroll';
import Loader from './components/common/Loader';
import AmbientGlow from './components/common/AmbientGlow';
import Home from './pages/Home';

function App() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Reduced timeout for better UX, or kept original for aesthetic
        const timer = setTimeout(() => setLoading(false), 2000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <SmoothScroll>
            <AmbientGlow />
            <AnimatePresence>
                {loading && <Loader />}
            </AnimatePresence>

            {!loading && <Home />}
        </SmoothScroll>
    );
}

export default App;
