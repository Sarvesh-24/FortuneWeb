import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
    ArrowRight,
    ChevronLeft,
    ChevronRight,
    Play,
    X,
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import GetInTouch from "../Helpers/GetInTouch";
import { processSteps, services, videos } from "../../constants/Services";
import { cardSummaries, curriculumData } from "../../constants/Curriculam";

const CurriculumCard = ({ item, index }) => {
    const description = cardSummaries[item.id] || "Comprehensive financial training strategies.";

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={{ y: -5 }}
            className="
            relative overflow-hidden
            bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl
            rounded-2xl p-6
            border border-gray-100 dark:border-white/10
            shadow-xl shadow-gray-200/50 dark:shadow-none
            group hover:border-primary/40 transition-all duration-300
            flex flex-col h-full
        "
        >
            {/* Header */}
            <div className="flex items-center gap-4 mb-4">
                <div className={`p-3 rounded-xl bg-gray-50 dark:bg-white/5 ${item.color || 'text-primary'} ring-1 ring-inset ring-black/5 dark:ring-white/10`}>
                    <item.icon size={24} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white leading-tight">
                    {item.title}
                </h3>
            </div>

            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                {description}
            </p>
        </motion.div>
    );
};



const ServicesPage = () => {
    const navigate = useNavigate();
    return (
        <div className="relative w-full overflow-hidden">

            <section className="pt-28 md:pt-36 pb-12 md:pb-20 px-4 text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto w-full"
                >
                    <div className="inline-block px-3 py-1 w-fit text-xs font-bold tracking-wider text-primary uppercase bg-primary/10 rounded-full mb-4">
                        Our Services
                    </div>
                    <motion.h2
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-dark dark:text-light leading-[1.2] md:leading-[1.3]"
                    >
                        <span className="block">We Simplify</span>
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                            Complex Finance
                        </span>
                    </motion.h2>
                    <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 my-6 md:mb-10 leading-relaxed max-w-2xl mx-auto">
                        From tax planning to building a retirement corpus, we offer end-to-end financial solutions designed to accelerate your wealth creation journey.
                    </p>
                </motion.div>
            </section>


            <section id="#" className="pb-16 md:pb-24 px-4">
                <div className="w-[95%] md:w-[90%] xl:max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 justify-center">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -5 }}
                                className="
                                    bg-light/60 dark:bg-slate-800/60 backdrop-blur-md
                                    p-6 md:p-8 rounded-3xl shadow-lg border border-white/20 dark:border-white/10
                                    group hover:border-blue-500/30 transition-all duration-300
                                    flex flex-col h-full
                                "
                            >
                                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${service.color}`}>
                                    <service.icon size={28} />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                                    {service.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                                    {service.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="pt-20 md:pt-32 px-4">
                <div className="w-[95%] md:w-[90%] xl:max-w-7xl mx-auto">
                    <SectionTitle
                        title="What You Will Learn"
                        subtitle="A comprehensive curriculum designed to master market timing, technical analysis, and financial discipline."
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6">
                        {curriculumData.slice(0, 4).map((item, index) => (
                            <CurriculumCard key={item.id} item={item} index={index} />
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="mt-12 md:mt-16 text-center"
                    >
                        <button className="
                                group relative inline-flex items-center gap-3 px-8 py-4
                                bg-primary
                                text-white font-bold rounded-full text-base md:text-lg
                                shadow-lg shadow-blue-500/30
                                hover:shadow-blue-500/50 hover:scale-105 transition-all duration-300
                            "
                                onClick={() => navigate("/courses")}
                        >
                            Explore Full Syllabus
                            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                        </button>
                        <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
                            Dive deep into every module in our detailed course section.
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="py-20 md:py-32 px-4">
                <div className="w-[95%] md:w-[90%] xl:max-w-7xl mx-auto">
                    <SectionTitle
                        title="How to Trade Fortune Signals"
                        subtitle="Master our strategies with these in-depth video tutorials"
                    />

                    <div className="w-full">
                        <VideoCarousel items={videos} />
                    </div>
                </div>
            </section>

            <GetInTouch />

        </div>
    );
}

export default ServicesPage;


const SectionTitle = ({ title, subtitle, centered = true }) => (
    <div className={`mb-12 ${centered ? 'text-center' : 'text-left'}`}>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 uppercase leading-tight">
            {title}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed text-base md:text-lg">
            {subtitle}
        </p>
    </div>
);

const VideoModal = ({ videoId, isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/80 backdrop-blur-sm p-4">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="relative w-full max-w-4xl bg-black rounded-2xl overflow-hidden shadow-2xl"
            >
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-10 p-2 bg-gray-800/50 hover:bg-gray-700 text-white rounded-full transition-colors"
                >
                    <X size={24} />
                </button>
                <div className="relative pt-[56.25%]">
                    <iframe
                        className="absolute top-0 left-0 w-full h-full"
                        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            </motion.div>
        </div>
    );
};

const VideoCarousel = ({ items }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [itemsPerPage, setItemsPerPage] = useState(3);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 640) setItemsPerPage(1);       // Mobile
            else if (window.innerWidth < 1024) setItemsPerPage(2); // Tablet / iPad Portrait
            else setItemsPerPage(3);                               // iPad Landscape / Desktop
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const maxIndex = Math.ceil(items.length / itemsPerPage) - 1;

    const nextSlide = () => {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1 > maxIndex ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setDirection(-1);
        setCurrentIndex((prev) => (prev - 1 < 0 ? maxIndex : prev - 1));
    };

    const visibleItems = items.slice(
        currentIndex * itemsPerPage,
        (currentIndex * itemsPerPage) + itemsPerPage
    );

    const getVideoId = (video) => {
        return video.embedUrl || video.embedUrl?.split('v=')[1] || video.id;
    };

    return (
        <div className="relative w-full">
            <div className="flex justify-end gap-2 mb-6">
                <button
                    onClick={prevSlide}
                    className="p-3 rounded-full bg-white dark:bg-slate-800 border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-slate-700 transition-all text-gray-700 dark:text-gray-300 shadow-sm"
                >
                    <ChevronLeft size={20} />
                </button>
                <button
                    onClick={nextSlide}
                    className="p-3 rounded-full bg-white dark:bg-slate-800 border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-slate-700 transition-all text-gray-700 dark:text-gray-300 shadow-sm"
                >
                    <ChevronRight size={20} />
                </button>
            </div>

            <div className="overflow-hidden min-h-[320px]">
                <AnimatePresence mode='wait' custom={direction}>
                    <motion.div
                        key={currentIndex}
                        custom={direction}
                        initial={{ opacity: 0, x: direction > 0 ? 50 : -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: direction > 0 ? -50 : 50 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                    >
                        {visibleItems.map((video, idx) => (
                            <motion.div
                                key={idx}
                                layoutId={`video-${video.id || idx}`}
                                className="group relative bg-white dark:bg-slate-800 rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300 flex flex-col h-full"
                            >
                                <div
                                    className="relative aspect-video overflow-hidden cursor-pointer"
                                    onClick={() => setSelectedVideo(getVideoId(video))}
                                >
                                    <img
                                        src={video.thumbnail || `https://img.youtube.com/vi/${getVideoId(video)}/maxresdefault.jpg`}
                                        alt={video.title}
                                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                                    />
                                    {/* Play Overlay */}
                                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                                        <div className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/40 group-hover:scale-110 transition-transform duration-300">
                                            <Play size={24} className="fill-white text-white ml-1" />
                                        </div>
                                    </div>
                                </div>

                                <div className="p-5 flex flex-col flex-grow">
                                    <h3 className="font-bold text-lg text-gray-900 dark:text-white line-clamp-2 mb-2 group-hover:text-primary transition-colors uppercase">
                                        {video.title}
                                    </h3>
                                    <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2 mb-4 flex-grow">
                                        {video.desc || "Learn the strategies behind our fortune signals."}
                                    </p>
                                    <button
                                        onClick={() => setSelectedVideo(getVideoId(video))}
                                        className="text-sm font-semibold text-primary flex items-center gap-1 hover:gap-2 transition-all mt-auto"
                                    >
                                        Watch Video <ArrowRight size={14} />
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </AnimatePresence>
            </div>

            <VideoModal
                isOpen={!!selectedVideo}
                videoId={selectedVideo}
                onClose={() => setSelectedVideo(null)}
            />
        </div>
    );
};