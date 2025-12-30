import React from "react";
import {
    CalendarDays,
    Handshake,
    ChartNoAxesCombined,
    ArrowRight,
    Sparkles
} from "lucide-react";
import { motion } from "framer-motion";
import { FaChalkboardTeacher } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Divider from "../Helpers/Divider";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1 }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

const blobAnimation = {
    animate: {
        scale: [1, 1.1, 1],
        opacity: [0.3, 0.5, 0.3],
        transition: {
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
        }
    }
};

const Services = () => {
    const navigate = useNavigate();

    return (
        <section
            id="services"
            className="
                relative w-full py-24 px-4 sm:px-10 lg:px-20
                overflow-hidden
            "
        >
            <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
                <motion.div
                    variants={blobAnimation}
                    animate="animate"
                    className="absolute -top-[10%] -left-[10%] w-[600px] h-[600px] rounded-full bg-primary/10 blur-[100px]"
                />
                <motion.div
                    variants={blobAnimation}
                    animate="animate"
                    transition={{ delay: 2 }}
                    className="absolute -bottom-[10%] -right-[10%] w-[600px] h-[600px] rounded-full bg-purple-500/10 dark:bg-secondary/10 blur-[100px]"
                />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/40 dark:bg-white/5 rounded-full blur-[120px] opacity-50" />
            </div>

            <div className="relative z-10 max-w-6xl mx-auto">

                {/* Header Section */}
                <div className="lg:text-center max-w-3xl mx-auto mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary dark:text-secondary text-xs font-bold tracking-wider uppercase mb-5"
                    >
                        <Sparkles size={12} />
                        Our Expertise
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-3xl sm:text-5xl lg:text-6xl font-bold text-dark dark:text-light leading-[1.1]"
                    >
                        <span className="block leading-[1.2]">Empowering Your</span>
                        <span className="block leading-[1.2] text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                              Financial Journey
                        </span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-base text-gray-600 dark:text-gray-400 max-w-2xl mx-auto pt-3"
                    >
                        From institutional-grade mentorship to precision time-trading strategies,
                        we provide the tools you need to master the markets.
                    </motion.p>
                </div>

                {/*Cards Grid*/}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-12"
                >
                    <ServiceCard
                        icon={<FaChalkboardTeacher size={26} />}
                        title="Live Trading Mentorship"
                        desc="Institutional-style sessions. Real trades, timing models, and astro-price cycles."
                        link="/courses"
                        actionText="Explore Programs"
                    />

                    <ServiceCard
                        icon={<Handshake size={28} />}
                        title="Time Trading Technique"
                        desc="Master price-time cycles, vibration, and square-of-9 principles for precision entries."
                        link="#contact"
                        actionText="Contact Us"
                    />

                    <ServiceCard
                        icon={<ChartNoAxesCombined size={28} />}
                        title="Financial Planning"
                        desc="Build portfolio strategies, manage risk exposure, and create diversified growth plans."
                        link="/mutual-funds"
                        actionText="Plan Your Future"
                    />

                    <ServiceCard
                        icon={<CalendarDays size={28} />}
                        title="Fortune Advisorz Events"
                        desc="Attend premium workshops, trade breakdowns, and market psychology sessions."
                        link="/events"
                        actionText="View Calendar"
                    />
                </motion.div>

                {/*Bottom CTA*/}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex justify-center"
                >
                    <button
                        onClick={() => navigate("/services")}
                        className="
                            group relative px-7 py-3 rounded-full
                            bg-primary text-white
                            font-semibold shadow-lg text-sm
                            hover:shadow-xl hover:-translate-y-1
                            transition-all duration-300
                            flex items-center gap-2 mt-7
                        "
                    >
                        View All Services
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </button>
                </motion.div>

            </div>
        </section>
    );
};

export default Services;

function ServiceCard({ icon, title, desc, link, actionText }) {
    const navigate = useNavigate();

    const handleCardClick = (e) => {
        // Prevent default behavior if needed, though div doesn't have default
        e.preventDefault();

        if (!link) return;

        if (link.startsWith("http")) {
            // External link
            window.open(link, "_blank", "noopener,noreferrer");
        } else if (link.startsWith("#")) {
            // Hash link
            const element = document.querySelector(link);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            } else {
                window.location.href = link;
            }
        } else {
            // Internal Route
            navigate(link);
        }
    };

    return (
        <motion.div
            variants={itemVariants}
            onClick={handleCardClick}
            className="group relative h-full cursor-pointer"
        >
            <div className="
                h-full flex flex-col justify-between
                p-8 rounded-3xl min-h-[320px]
                bg-white dark:bg-bg-dark-2
                border border-gray-100 dark:border-white/5
                shadow-md hover:shadow-2xl hover:shadow-primary/10
                transition-all duration-300 overflow-hidden
            ">
                <div>
                    {/* Header */}
                    <div className="flex items-start justify-between mb-6">
                        <div className="
                            w-14 h-14 rounded-2xl
                            flex items-center justify-center
                            bg-gray-50 dark:bg-white/5
                            border border-gray-100 dark:border-white/10
                            text-primary dark:text-secondary
                            group-hover:bg-primary group-hover:text-white
                            dark:group-hover:bg-secondary dark:group-hover:text-light
                            transition-colors duration-300
                        ">
                            {icon}
                        </div>

                        {/* Top Right Arrow */}
                        <div className="
                            w-10 h-10 rounded-full flex items-center justify-center
                            border border-gray-200 dark:border-white/20
                            text-gray-400 dark:text-gray-500
                            group-hover:border-primary group-hover:text-primary
                            dark:group-hover:border-secondary dark:group-hover:text-secondary
                            transition-all duration-300
                        ">
                            <ArrowRight size={18} className="-rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                        </div>
                    </div>

                    {/* Content */}
                    <div className="space-y-3 mb-8">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-primary dark:group-hover:text-secondary transition-colors">
                            {title}
                        </h3>
                        <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                            {desc}
                        </p>
                    </div>
                </div>

                {/* Text Link Visual (Not an actual A tag to avoid nested interactive elements) */}
                <div className="
                    inline-flex items-center gap-2 text-sm font-semibold
                    text-gray-900 dark:text-white
                    hover:text-primary dark:hover:text-secondary
                    transition-colors uppercase tracking-wide
                ">
                    <span className="border-b border-transparent group-hover:border-current transition-all ">
                        {actionText}
                    </span>
                </div>
            </div>
        </motion.div>
    );
}