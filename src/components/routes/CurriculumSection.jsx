import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    CheckCircle2,
    ChevronRight,
    ChevronDown,
} from 'lucide-react';
import {curriculumData} from "../../constants/Curriculam";

// --- DATA ---

const CurriculumSection = () => {
    // 0 is default open. Use -1 to close all on mobile if desired.
    const [activeTab, setActiveTab] = useState(0);

    // Toggle function for Mobile Accordion
    const toggleAccordion = (index) => {
        if (activeTab === index) {
            setActiveTab(-1); // Close if clicking the same one
        } else {
            setActiveTab(index);
        }
    };

    return (
        <section className="">
            <div className="max-w-7xl mx-auto">

                {/* Section Header */}
                <div className="text-center mb-16">
                        <div className="inline-block px-4 py-1.5 mb-4 text-xs font-bold tracking-wider uppercase bg-primary/10 text-primary dark:text-secondary dark:bg-secondary/10 rounded-full">
                            {/*Comprehensive Syllabus*/}
                            Curriculum Phase 1
                        </div>
                    <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                        What Exactly You’ll Get Inside?
                    </h2>
                    <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        From foundational Gann methods to advanced astrological timing, our curriculum covers every aspect of professional trading.
                    </p>
                </div>

                {/* ================= MOBILE LAYOUT (ACCORDION) ================= */}
                <div className="lg:hidden flex flex-col gap-4">
                    {curriculumData.map((module, index) => {
                        const isOpen = activeTab === index;
                        return (
                            <div
                                key={module.id}
                                className={`
                                    bg-white dark:bg-slate-800 rounded-xl overflow-hidden border transition-all duration-300
                                    ${isOpen ? 'border-blue-500 shadow-lg shadow-blue-500/10' : 'border-gray-200 dark:border-slate-700'}
                                `}
                            >
                                {/* Accordion Header */}
                                <button
                                    onClick={() => toggleAccordion(index)}
                                    className="w-full flex items-center justify-between p-5 text-left"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className={`
                                            p-2.5 rounded-lg transition-colors
                                            ${isOpen ? 'bg-blue-600 text-white' : 'bg-gray-100 dark:bg-slate-700 text-gray-500 dark:text-gray-400'}
                                        `}>
                                            <module.icon size={20} />
                                        </div>
                                        <span className={`font-bold ${isOpen ? 'text-gray-900 dark:text-white' : 'text-gray-600 dark:text-gray-400'}`}>
                                            {module.title}
                                        </span>
                                    </div>
                                    <ChevronDown
                                        size={20}
                                        className={`text-gray-400 transition-transform duration-300 ${isOpen ? 'rotate-180 text-blue-500' : ''}`}
                                    />
                                </button>

                                {/* Accordion Content */}
                                <AnimatePresence>
                                    {isOpen && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                            className="overflow-hidden"
                                        >
                                            <div className="p-5 pt-0 border-t border-dashed border-gray-100 dark:border-slate-700 mt-2">
                                                <div className="space-y-3 mt-4">
                                                    {module.items.map((item, idx) => (
                                                        <div key={idx} className="flex items-start gap-3">
                                                            <div className="mt-1.5 flex-shrink-0 text-green-500">
                                                                <CheckCircle2 size={16} className="fill-green-50 dark:fill-green-900/30" />
                                                            </div>
                                                            <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                                                                {item}
                                                            </p>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        );
                    })}
                </div>

                {/* ================= DESKTOP LAYOUT (TABS) ================= */}
                <div className="hidden lg:flex flex-row gap-12 min-h-[600px]">
                    {/* LEFT SIDE: Navigation */}
                    <div className="w-1/3 flex flex-col gap-3">
                        {curriculumData.map((module, index) => (
                            <button
                                key={module.id}
                                onClick={() => setActiveTab(index)}
                                className={`
                                    w-full flex items-center gap-4 p-4 rounded-xl text-left transition-all duration-300
                                    border
                                    ${activeTab === index
                                    ? 'bg-white dark:bg-slate-800 border-blue-600 dark:border-blue-500 shadow-lg shadow-blue-900/10'
                                    : 'bg-transparent border-transparent hover:bg-white/50 dark:hover:bg-slate-800/50 hover:border-gray-200 dark:hover:border-slate-700'}
                                `}
                            >
                                <div className={`
                                    p-2.5 rounded-lg transition-colors
                                    ${activeTab === index ? 'bg-blue-600 text-white' : 'bg-gray-100 dark:bg-slate-700 text-gray-500 dark:text-gray-400'}
                                `}>
                                    <module.icon size={20} />
                                </div>
                                <div className="flex-1">
                                    <h3 className={`font-bold ${activeTab === index ? 'text-gray-900 dark:text-white' : 'text-gray-600 dark:text-gray-400'}`}>
                                        {module.title}
                                    </h3>
                                </div>
                                {activeTab === index && (
                                    <motion.div layoutId="active-pill">
                                        <ChevronRight size={18} className="text-blue-600" />
                                    </motion.div>
                                )}
                            </button>
                        ))}
                    </div>

                    {/* RIGHT SIDE: Content Area */}
                    <div className="w-2/3 relative">
                        <AnimatePresence mode="wait">
                            {/* Note: We handle the check for activeTab >= 0 for robustness, though on desktop it usually stays valid */}
                            {activeTab >= 0 && (
                                <motion.div
                                    key={activeTab}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.3 }}
                                    className="
                                        h-full
                                        bg-white dark:bg-slate-800
                                        rounded-3xl p-10
                                        shadow-xl border border-gray-100 dark:border-slate-700
                                    "
                                >
                                    {/* Content Card Header */}
                                    <div className="flex items-center gap-4 mb-8 pb-8 border-b border-gray-100 dark:border-gray-700">
                                        <div className="p-4 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-2xl">
                                            {React.createElement(curriculumData[activeTab].icon, { size: 32 })}
                                        </div>
                                        <div>
                                            <span className="text-xs font-bold text-gray-400 uppercase tracking-wide">Module {activeTab + 1}</span>
                                            <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                                                {curriculumData[activeTab].title}
                                            </h3>
                                        </div>
                                    </div>

                                    {/* Content List Items */}
                                    <div className="space-y-4 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
                                        {curriculumData[activeTab].items.map((item, idx) => (
                                            <motion.div
                                                key={idx}
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: idx * 0.05 }}
                                                className="flex items-start gap-4 group"
                                            >
                                                <div className="mt-1 flex-shrink-0 text-green-500">
                                                    <CheckCircle2 size={20} className="fill-green-50 dark:fill-green-900/30" />
                                                </div>
                                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                                                    {item}
                                                </p>
                                            </motion.div>
                                        ))}
                                    </div>

                                    {/* Bottom CTA */}
                                    {/*<div className="mt-10 pt-6 border-t border-gray-100 dark:border-gray-700 flex justify-between items-center">*/}
                                    {/*    <p className="text-sm text-gray-400 italic">*/}
                                    {/*        * Includes live examples & case studies*/}
                                    {/*    </p>*/}
                                    {/*    <button className="flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-700 transition-colors">*/}
                                    {/*        <BookOpen size={16} /> Download Brochure*/}
                                    {/*    </button>*/}
                                    {/*</div>*/}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default CurriculumSection;