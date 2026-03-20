import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Loader from './components/common/Loader';
import Home from './pages/Home';

function App() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Reduced timeout for better UX, or kept original for aesthetic
        const timer = setTimeout(() => setLoading(false), 2000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <AnimatePresence>
                {loading && <Loader />}
            </AnimatePresence>

            {!loading && <Home />}
        </>
    );
}

export default App;
