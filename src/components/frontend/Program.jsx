import { motion } from "framer-motion";
import {
    ChartLine,
    History,
    BadgeDollarSign,
    TrendingUp,
    CheckCircle2,
    ArrowRight,
    Layers,
    Globe
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import React from "react";
import {fadeUp} from "../Helpers/Transitions";

const container = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

export default function Program() {
    const navigate = useNavigate();

    return (
        <section
            id="program"
            className="
                relative w-full
                py-16 md:py-20 lg:py-24
                px-4 sm:px-8 md:px-12
                overflow-hidden
            "
        >
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-primary/5 rounded-full blur-3xl" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-secondary/5 rounded-full blur-3xl" />
            </div>

            <div
                className="
                    relative
                    mx-auto
                    w-full max-w-[1440px]
                    md:w-[95%] lg:w-[94%] xl:w-[85%] 2xl:w-[80%]
                    grid lg:grid-cols-12
                    gap-10 lg:gap-10 xl:gap-20
                    items-start
                "
            >

                {/*  LEFT CONTENT */}
                <motion.div
                    className="lg:col-span-6 lg:sticky lg:top-24 space-y-6 md:space-y-8"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={container}
                >
                    {/* Badge */}
                    <motion.div variants={fadeUp} className="-mt-2 md:-mt-5 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 dark:bg-secondary/10 text-primary dark:text-secondary text-xs font-bold tracking-wide uppercase">
                        <Layers size={14} />
                        Flagship Program
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold text-dark dark:text-light leading-[1.1]"
                    >
                        <span className="block leading-[1.2]">Master the Science of</span>
                        <span className="block leading-[1.2] text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                                Market Timing
                    </span>
                    </motion.h2>
                    <motion.p variants={fadeUp} className="text-base sm:text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-xl">
                        Determine your formula for stock market success. We combine technical analysis with financial astrology and time cycles to give you an unfair advantage.
                    </motion.p>

                    {/* Feature Grid */}
                    <motion.div
                        variants={container}
                        className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4"
                    >
                        <FeatureCard text="Trend Capturing" icon={<ChartLine size={20}/>} delay={0.1} />
                        <FeatureCard text="Time Cycles" icon={<History size={20}/>} delay={0.2} />
                        <FeatureCard text="Gann Formula" icon={<TrendingUp size={20} />} delay={0.3} />
                        <FeatureCard text="Financial Astrology" icon={<BadgeDollarSign size={20}/>} delay={0.4} />
                    </motion.div>

                    <motion.div variants={fadeUp}>
                        <button
                            onClick={() => navigate("/courses")}
                            className="
                                group mt-2 md:mt-4 w-full sm:w-auto
                                inline-flex items-center justify-center gap-3
                                px-8 py-3.5 rounded-xl
                                bg-primary text-white
                                font-semibold text-sm transition-all duration-300
                                shadow-lg shadow-primary/25 dark:shadow-white/10
                                hover:scale-105 hover:shadow-xl
                            "
                        >
                            Explore Full Curriculum
                            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </button>
                    </motion.div>
                </motion.div>

                {/*  RIGHT CONTENT  */}
                <div className="lg:col-span-6 space-y-6 md:space-y-8 mt-8 lg:mt-0">

                    {/* Module 1: Complete Fortune Trading Mastery */}
                    <CurriculumCard
                        title="Complete Fortune Trading Mastery"
                        subtitle="One System. Every Market. Consistent Profits."
                        icon={<TrendingUp className="text-white" size={24} />}
                        accentColor="bg-secondary"
                    >
                        <ListItem text="High-accuracy trend, ORB & gap trading for daily cash flow." />
                        <ListItem text="Predict market direction in advance using Time Cycles & TCD." />
                        <ListItem text="Pinpoint perfect entries, exits & reversals with Gann Squares." />
                        <ListItem text="Explosive options strategies for fast profits with controlled risk." />
                    </CurriculumCard>

                    {/* Module 2: Advanced Mastery */}
                    <CurriculumCard
                        title="Time Trading Mastery"
                        subtitle="Precision Timing for Forex, Stocks & Commodities"
                        icon={<History className="text-white" size={24} />}
                        accentColor="bg-secondary"
                    >
                        <ListItem text="Exact buy/sell timing using candle behavior & momentum shifts." />
                        <ListItem text="Sniper-level entries with Ichimoku & precision price action." />
                        <ListItem text="18+ powerful Time Cycle models to catch reversals before the crowd." />
                        <ListItem text="1-Hour Price Square for ultra-accurate market timing." />
                        <ListItem text="Numbers-based trading logic for ultra-consistency across all markets." />
                    </CurriculumCard>

                </div>
            </div>
        </section>
    );
}


function FeatureCard({ text, icon, delay }) {
    return (
        <motion.div
            variants={fadeUp}
            className="
                flex items-center gap-3 p-3 rounded-lg
                bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10
                shadow-sm
            "
        >
            <div className="
                flex items-center justify-center w-10 h-10 rounded-full flex-shrink-0
                bg-primary/10 text-primary dark:bg-secondary/20 dark:text-secondary
            ">
                {icon}
            </div>
            <span className="text-sm font-semibold text-gray-800 dark:text-gray-200">{text}</span>
        </motion.div>
    );
}

function CurriculumCard({ title, subtitle, icon, children, accentColor }) {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeUp}
            className="
                relative overflow-hidden rounded-2xl
                bg-white dark:bg-bg-dark-2
                border border-gray-100 dark:border-white/5
                shadow-sm hover:shadow-lg hover:shadow-primary/5
                group
            "
        >
            {/* Top accent line */}
            <div className={`h-1 w-full ${accentColor}`} />

            <div className="p-5 sm:p-6 md:p-8">
                {/* Header */}
                <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-5 mb-6">
                    <div className={`
                        flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center shadow-lg
                        ${accentColor}
                    `}>
                        {icon}
                    </div>
                    <div>
                        <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white leading-tight">
                            {title}
                        </h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 font-medium leading-normal">
                            {subtitle}
                        </p>
                    </div>
                </div>

                {/* Content */}
                <div className="space-y-4 relative z-10">
                    {children}
                </div>
            </div>

            <div className="absolute inset-0 bg-gradient-to-tr from-gray-50 to-transparent dark:from-white/5 dark:to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        </motion.div>
    );
}

function ListItem({ text }) {
    return (
        <div className="flex items-start gap-3 md:gap-3.5">
            <CheckCircle2 className="w-5 h-5 text-primary dark:text-secondary flex-shrink-0 mt-0.5 opacity-80" />
            <span className="text-gray-700 dark:text-gray-300 text-sm md:text-base leading-relaxed">
                {text}
            </span>
        </div>
    );
}