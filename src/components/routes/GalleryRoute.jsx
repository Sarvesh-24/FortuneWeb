import React, {useState, useMemo, useCallback, memo, useEffect} from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { X, ZoomIn, Camera } from "lucide-react";

// --- CONFIGURATION ---
const categories = ["All", "Bangalore", "Mumbai", "Chennai"];

// --- DATA ---
const galleryItems = [
    // --- BANGALORE (4 Photos) ---
    { id: 1, image: "/assets/events/bangalore/bangalore1.jpg", category: "Bangalore", title: "The Grand Summit", size: "large" },
    { id: 2, image: "/assets/events/bangalore/bangalore2.jpg", category: "Bangalore", title: "Live Trading Floor", size: "normal" },
    { id: 3, image: "/assets/events/bangalore/bangalore3.jpg", category: "Bangalore", title: "Community Meetup", size: "wide" },
    { id: 4, image: "/assets/events/bangalore/bangalore4.jpg", category: "Bangalore", title: "Strategy Workshop", size: "normal" },
    // --- MUMBAI (7 Photos) ---
    { id: 5, image: "/assets/events/mumbai/Mumbai1.webp", category: "Mumbai", title: "Mumbai Expo", size: "large" },
    { id: 6, image: "/assets/events/mumbai/Mumbai2.webp", category: "Mumbai", title: "Analysis Session", size: "normal" },
    { id: 7, image: "/assets/events/mumbai/Mumbai3.webp", category: "Mumbai", title: "Student Success", size: "tall" },
    { id: 8, image: "/assets/events/mumbai/Mumbai4.webp", category: "Mumbai", title: "Executive Lounge", size: "normal" },
    { id: 9, image: "/assets/events/mumbai/Mumbai5.webp", category: "Mumbai", title: "Market Deep Dive", size: "wide" },
    { id: 10, image: "/assets/events/mumbai/Mumbai6.webp", category: "Mumbai", title: "Mentorship", size: "normal" },
    { id: 11, image: "/assets/events/mumbai/Mumbai7.webp", category: "Mumbai", title: "City Skyline", size: "normal" },
    // --- CHENNAI (5 Photos) ---
    { id: 12, image: "/assets/events/chennai/chennai1.webp", category: "Chennai", title: "Chennai Seminar", size: "tall" },
    { id: 13, image: "/assets/events/chennai/chennai2.webp", category: "Chennai", title: "Networking Dinner", size: "normal" },
    { id: 14, image: "/assets/events/chennai/chennai6.webp", category: "Chennai", title: "Closing Ceremony", size: "wide" },
    { id: 15, image: "/assets/events/chennai/chennai4.webp", category: "Chennai", title: "Panel Discussion", size: "normal" },
    { id: 16, image: "/assets/events/chennai/chennai5.webp", category: "Chennai", title: "Guest Speakers", size: "normal" }
];

const GalleryRoute = () => {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [selectedImage, setSelectedImage] = useState(null);

    // --- LOCK SCROLL LOGIC ---
    useEffect(() => {
        if (selectedImage) {
            // Prevent scrolling when modal is open
            document.body.style.overflow = "hidden";
            document.documentElement.style.overflow = "hidden";
        } else {
            // Restore scrolling when modal is closed
            document.body.style.overflow = "";
            document.documentElement.style.overflow = "";
        }

        // Cleanup function to ensure scrolling is restored if component unmounts
        return () => {
            document.body.style.overflow = "";
            document.documentElement.style.overflow = "";
        };
    }, [selectedImage]);
    const filteredItems = useMemo(() => {
        return selectedCategory === "All"
            ? galleryItems
            : galleryItems.filter(item => item.category === selectedCategory);
    }, [selectedCategory]);

    const handleCategoryChange = useCallback((cat) => {
        setSelectedCategory(cat);
    }, []);

    const openLightbox = useCallback((item) => {
        setSelectedImage(item);
        // Prevent body scroll when lightbox is open
        document.body.style.overflow = 'hidden';
    }, []);

    const closeLightbox = useCallback(() => {
        setSelectedImage(null);
        // Restore body scroll
        document.body.style.overflow = 'unset';
    }, []);

    return (
        <section className="min-h-screen py-28 px-4 sm:px-10 lg:px-20 relative overflow-hidden">
            <div className="max-w-[85rem] mx-auto relative z-10">

                {/* --- Header --- */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }} // OPTIMIZATION: Only animate once
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary dark:text-secondary text-xs font-bold tracking-wider uppercase mb-5"
                    >
                        <Camera size={14} />
                        Our Journey
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-4xl md:text-6xl font-bold text-neutral-900 dark:text-light mb-6 tracking-tight"
                    >
                        Moments Across Cities
                    </motion.h1>
                    <p className="text-neutral-500 dark:text-neutral-400 text-lg leading-relaxed">
                        Highlights from our seminars, trading floors, and community events in Bangalore, Mumbai, and Chennai.
                    </p>
                </div>

                {/* --- Filter Tabs --- */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-wrap justify-center gap-2 mb-12"
                >
                    <LayoutGroup id="tabs">
                        {categories.map((cat) => (
                            <FilterButton
                                key={cat}
                                category={cat}
                                isSelected={selectedCategory === cat}
                                onClick={handleCategoryChange}
                            />
                        ))}
                    </LayoutGroup>
                </motion.div>

                {/* --- Masonry Grid --- */}
                <motion.div
                    // OPTIMIZATION: Use transform for layout animations
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[300px]"
                >
                    {/* OPTIMIZATION: LayoutGroup batches layout reads/writes for performance */}
                    <LayoutGroup>
                        <AnimatePresence mode='popLayout'>
                            {filteredItems.map((item) => (
                                <GalleryItem
                                    key={item.id}
                                    item={item}
                                    onClick={openLightbox}
                                />
                            ))}
                        </AnimatePresence>
                    </LayoutGroup>
                </motion.div>

            </div>

            {/* --- Lightbox Modal --- */}
            <AnimatePresence>
                {selectedImage && (
                    <Lightbox
                        selectedImage={selectedImage}
                        onClose={closeLightbox}
                    />
                )}
            </AnimatePresence>
        </section>
    );
};

// --- Sub-Component: Filter Button ---
const FilterButton = memo(({ category, isSelected, onClick }) => (
    <button
        onClick={() => onClick(category)}
        className={`
            relative px-6 py-2.5 rounded-full text-sm font-semibold transition-colors duration-300
            ${isSelected
            ? "text-light"
            : "text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-light"
        }
        `}
    >
        {isSelected && (
            <motion.div
                layoutId="activeTab"
                className="absolute inset-0 bg-primary rounded-full shadow-lg shadow-primary/25"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
        )}
        <span className="relative z-10">{category}</span>
    </button>
));

// --- Sub-Component: Individual Gallery Item (Optimized) ---
const GalleryItem = memo(({ item, onClick }) => {
    // New local state to handle image loading gracefully
    const [isLoaded, setIsLoaded] = useState(false);

    return (
        <motion.div
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            // OPTIMIZATION: Hardware acceleration hints
            style={{ willChange: "transform, opacity" }}
            className={`relative group rounded-2xl overflow-hidden cursor-pointer bg-light dark:bg-neutral-800`}
            onClick={() => onClick(item)}
        >
            {/* Loading Skeleton */}
            {!isLoaded && (
                <div className="absolute inset-0 bg-light dark:bg-neutral-800 animate-pulse z-0" />
            )}

            <img
                src={item.image}
                alt={item.category}
                loading="lazy"
                decoding="async"
                onLoad={() => setIsLoaded(true)}
                className={`w-full h-full object-cover transition-all duration-700 ease-in-out group-hover:scale-105
                    ${isLoaded ? 'opacity-100' : 'opacity-0'}
                `}
            />

            {/* Overlay - Optimized to use GPU properties */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 z-10">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 will-change-transform">
                    <span className="text-xs font-bold text-light uppercase tracking-wider mb-1 block">
                        {item.category}
                    </span>
                    {/*<h3 className="text-light text-lg font-bold flex items-center gap-2">*/}
                    {/*    /!*{item.title}*!/*/}
                    {/*    <ArrowRight size={16} className="-rotate-45" />*/}
                    {/*</h3>*/}
                </div>
            </div>

            <div className="absolute top-4 right-4 bg-black/20 backdrop-blur-md p-2 rounded-full text-light opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 z-10">
                <ZoomIn size={18} />
            </div>
        </motion.div>
    );
});

// --- Sub-Component: Lightbox ---
const Lightbox = ({ selectedImage, onClose }) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm" // Reduced blur for performance
            onClick={onClose}
        >
            <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="relative w-full h-full max-w-6xl max-h-[90vh] flex flex-col items-center justify-center"
                onClick={(e) => e.stopPropagation()}
            >
                <img
                    src={selectedImage.image}
                    alt={selectedImage.title}
                    className="w-auto h-auto max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl bg-neutral-900"
                />

                <div className="absolute bottom-0 inset-x-0 pb-10 pt-20 bg-gradient-to-t from-black via-black/60 to-transparent flex flex-col items-center pointer-events-none">
                    <span className="text-primary font-bold tracking-widest uppercase text-xs mb-2">
                        {selectedImage.category}
                    </span>
                    {/*<h3 className="text-light text-2xl font-bold">{selectedImage.title}</h3>*/}
                </div>

                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 p-3 bg-light/10 hover:bg-light/20 rounded-full text-light transition-colors backdrop-blur-md"
                >
                    <X size={24} />
                </button>
            </motion.div>
        </motion.div>
    );
};

export default GalleryRoute;