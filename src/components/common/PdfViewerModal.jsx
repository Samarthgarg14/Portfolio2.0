import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { playClick } from '../../utils/sounds';

const PdfViewerModal = ({ isOpen, onClose, pdfUrl, title = "Document Viewer" }) => {
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape' && isOpen) {
                playClick();
                onClose();
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isOpen, onClose]);

    const handleClose = () => {
        playClick();
        onClose();
    };

    return (
        <AnimatePresence>
            {isOpen && pdfUrl && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 md:p-8 pdf-viewer-modal"
                    onClick={handleClose}
                >
                    <motion.div
                        initial={{ scale: 0.95, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.95, opacity: 0 }}
                        onClick={(e) => e.stopPropagation()}
                        className="relative w-full max-w-5xl h-full max-h-[90vh] bg-[#0a0a0a] border border-white/10 rounded-2xl md:rounded-[2rem] overflow-hidden flex flex-col shadow-2xl"
                    >
                        <div className="flex items-center justify-between p-4 md:p-5 border-b border-white/10 bg-white/[0.02]">
                            <h3 className="text-white font-bold text-lg md:text-xl px-2">{title}</h3>
                            <button
                                onClick={handleClose}
                                className="p-2.5 text-gray-400 hover:text-white bg-white/5 hover:bg-white/10 rounded-full transition-colors"
                            >
                                <X size={20} />
                            </button>
                        </div>
                        <div className="flex-1 w-full bg-black/50 p-2 md:p-4">
                            <iframe
                                src={`${pdfUrl.replace(/\/view(\?.*)?$/, '/preview')}#toolbar=0`}
                                className="w-full h-full border-none rounded-xl bg-white"
                                title={title}
                            />
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default PdfViewerModal;
