import React, { useState, useMemo, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, ArrowRight, Sparkles } from 'lucide-react';
import { useNavigate } from "react-router-dom";
import { eventMemories } from "../../constants/Events";
// import Divider from "../Helpers/Divider"; // Commented as per source

// --- 1. Reusable Skeleton Component (Shadcn-style) ---
const Skeleton = ({ className }) => (
    <div className={`animate-pulse rounded-md bg-gray-200 dark:bg-gray-700 ${className}`} />
);

// --- 2. Optimized Image Component ---
const ImageWithSkeleton = React.memo(({ src, alt }) => {
    const [isLoaded, setIsLoaded] = useState(false);

    return (
        <div className="relative w-full h-full">
            {/* Skeleton Overlay - Visible only while loading */}
            {!isLoaded && (
                <Skeleton className="absolute inset-0 w-full h-full z-10" />
            )}

            {/* Actual Image */}
            <img
                src={src}
                alt={alt}
                loading="lazy"
                onLoad={() => setIsLoaded(true)}
                className={`
                    w-full h-full object-cover transition-all duration-700 
                    ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}
                    group-hover:scale-110
                `}
            />
        </div>
    );
});

// --- 3. Memoized Card Component ---
const GalleryCard = React.memo(({ event }) => {
    return (
        <motion.div
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="group cursor-pointer relative rounded-2xl overflow-hidden shadow-md hover:shadow-2xl hover:shadow-blue-900/20 transition-all duration-500 bg-gray-100 dark:bg-gray-800"
        >
            {/* Image Container with Aspect Ratio Enforcement */}
            <div className="aspect-[4/3] overflow-hidden w-full relative">
                <ImageWithSkeleton src={event.image} alt={event.title} />
            </div>

            {/* Dark Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300 pointer-events-none" />

            {/* Content Overlay */}
            <div className="absolute bottom-0 left-0 w-full p-4 sm:p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300 z-20">
                <div className="flex items-center gap-4 text-white/90 text-xs font-medium mb-1">
                    <div className="flex items-center gap-1 bg-black/30 backdrop-blur-sm px-2 py-1 rounded-md">
                        <MapPin size={14} className="text-blue-400" />
                        {event.location}
                    </div>
                </div>
            </div>
        </motion.div>
    );
});

// --- 4. Main Component ---
const categories = ["All", "Mumbai", "Bangalore", "Chennai"];

const Gallery = () => {
    const [activeFilter, setActiveFilter] = useState("All");
    const navigate = useNavigate();

    // OPTIMIZATION: Memoize filtered results
    const filteredEvents = useMemo(() => {
        return activeFilter === "All"
            ? eventMemories
            : eventMemories.filter(item => item.location === activeFilter);
    }, [activeFilter]);

    // OPTIMIZATION: Memoize handler
    const handleNavigate = useCallback(() => {
        navigate('/gallery');
    }, [navigate]);

    return (
        <section id="gallery" className="
            relative w-full
            py-16 md:py-20 lg:py-24
            px-4 sm:px-8 md:px-12
            overflow-hidden
        ">
            {/*<Divider />*/}
            <div className="
                mx-auto
                w-full max-w-[1440px]
                md:w-[95%] lg:w-[92%] xl:w-[85%] 2xl:w-[80%]
            ">
                {/* Header & Filters */}
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
                    <div className="max-w-2xl">
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary dark:text-secondary text-xs font-bold tracking-wider uppercase mb-6"
                        >
                            <Sparkles size={12} />
                            Our Event Memories
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            /* TYPOGRAPHY SCALING: Smoother steps for Tablet/iPad */
                            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-[1.1]"
                        >
                            <span className="block leading-[1.2]">Moments that</span>
                            <span className="block leading-[1.2] bg-clip-text bg-gradient-to-r text-primary dark:text-gray-500">
                                Define Success.
                            </span>
                        </motion.h2>

                    </div>

                    {/* Filter Pills */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="flex flex-wrap gap-2 lg:justify-end"
                    >
                        {categories.map((loc) => (
                            <button
                                key={loc}
                                onClick={() => setActiveFilter(loc)}
                                className={`
                                    relative px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 border
                                    ${activeFilter === loc
                                    ? 'text-white border-blue-600 bg-blue-600 shadow-lg shadow-blue-600/25'
                                    : 'text-gray-600 dark:text-gray-300 border-gray-200 dark:border-gray-700 hover:border-blue-400 bg-white/50 dark:bg-slate-800/50 hover:bg-white dark:hover:bg-slate-700'}
                                `}
                            >
                                {loc}
                            </button>
                        ))}
                    </motion.div>
                </div>

                {/* Gallery Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    <AnimatePresence mode='popLayout'>
                        {filteredEvents.map((event) => (
                            <GalleryCard key={event.id} event={event} />
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* Bottom CTA */}
                <div className="mt-12 md:mt-16 text-center">
                    <button
                        className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-300 font-semibold hover:text-blue-600 dark:hover:text-blue-400 transition-colors group text-sm md:text-base"
                        onClick={handleNavigate}
                    >
                        View All Event Memories
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Gallery;