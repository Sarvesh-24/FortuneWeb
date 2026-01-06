import React, { useEffect } from "react";
import { motion, useSpring, useTransform, useInView } from "framer-motion";
import { CandlestickChart, Sparkles, LineChart, CheckCircle2 } from "lucide-react";
// import Divider from "../Helpers/Divider";

const Progress = () => {

    // Data with specific gradients for a premium look
    const bars = [
        {
            label: "Technical Trade Techniques",
            value: 70,
            icon: <LineChart className="w-5 h-5" />,
            gradient: "from-blue-600 to-cyan-500"
        },
        {
            label: "Financial Astrology Cycles",
            value: 90,
            icon: <Sparkles className="w-5 h-5" />,
            gradient: "from-blue-600 to-cyan-500"
        },
        {
            label: "Proprietary Algo Indicators",
            value: 80,
            icon: <CandlestickChart className="w-5 h-5" />,
            gradient: "from-blue-600 to-cyan-500"
        },
    ];

    return (
        <section
            id="progress"
            className="
                relative w-full
                py-16 md:py-20 lg:py-24
                px-4 sm:px-8 md:px-12
                overflow-hidden
            "
        >
            {/*<Divider />*/}
            {/* Background decorative blob */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl opacity-50 pointer-events-none -z-10" />

            <div
                className="
                    relative z-10
                    mx-auto
                    w-full max-w-[1440px]
                    md:w-[95%] lg:w-[95%] xl:w-[85%] 2xl:w-[75%]
                    grid lg:grid-cols-2
                    gap-12 lg:gap-12 xl:gap-24
                    items-center
                "
            >

                {/* ---------- LEFT: IMAGE + FLOATING CARD ---------- */}
                <div className="relative w-full flex justify-center lg:justify-start">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="relative z-10 w-full max-w-[550px]"
                    >
                        {/* Main Image with Border Accent */}
                        <div className="rounded-3xl p-2 bg-white/20 dark:bg-white/5 backdrop-blur-sm border border-white/30 dark:border-white/10 shadow-2xl">
                            <img
                                src="/assets/indicator/Indicator.webp"
                                alt="Trading Analysis"
                                className="w-full h-[350px] sm:h-[450px] lg:h-[520px] rounded-2xl object-cover shadow-inner"
                                loading="lazy"
                            />
                        </div>

                        {/* Floating Badge */}
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.5, duration: 0.6 }}
                            className="
                                absolute
                                /* POSITIONING: Adjusted to not overlap essential image details */
                                -bottom-6 -right-2
                                sm:bottom-8 sm:-right-6
                                lg:bottom-10 lg:-right-8
                                p-5 sm:p-6
                                bg-white dark:bg-neutral-800
                                rounded-xl shadow-2xl border border-neutral-100 dark:border-neutral-700
                                flex flex-col gap-1 items-start
                                w-[160px] sm:w-[180px] lg:w-[200px]
                            "
                        >
                            <span className="text-3xl sm:text-4xl font-bold text-primary dark:text-secondary">33+</span>
                            <span className="text-xs sm:text-sm font-medium text-dark/60 dark:text-light/60 leading-tight">Years of Market <br/>Back Testing</span>
                        </motion.div>
                    </motion.div>

                    {/* Decorative geometric shape behind */}
                    {/*<div className="absolute top-10 -left-6 w-full h-full border-2 border-primary/20 rounded-3xl -z-10 hidden sm:block" />*/}
                </div>

                {/* ---------- RIGHT: CONTENT ---------- */}
                <motion.div
                    className="w-full mt-10 lg:mt-0"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 dark:bg-secondary/10 text-primary dark:text-secondary text-xs font-bold tracking-wide uppercase mb-6">
                        <CheckCircle2 className="w-3 h-3" />
                        Proven Accuracy
                    </div>

                    <motion.h2
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-dark dark:text-light leading-[1.1]"
                    >
                        <span className="block leading-[1.2]">Master the Art of</span>
                        <span className="block leading-[1.2] text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600 dark:from-secondary dark:to-purple-400">
                                Time & Price
                    </span>
                    </motion.h2>
                    <p className="text-base sm:text-lg text-dark/70 dark:text-light/70 max-w-lg mt-4 mb-8 lg:mb-10 leading-relaxed">
                        Combine traditional technical analysis with advanced astronomical cycles to predict market turning points with high precision.
                    </p>

                    <div className="space-y-6 lg:space-y-8">
                        {bars.map((b, i) => (
                            <ProgressBar
                                key={i}
                                index={i}
                                label={b.label}
                                value={b.value}
                                icon={b.icon}
                                gradient={b.gradient}
                            />
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Progress;

/* ------------------------------------------------------------------ */
/*                  PROFESSIONAL PROGRESS BAR COMPONENT               */
/* ------------------------------------------------------------------ */

function ProgressBar({ label, value, icon, gradient, index }) {
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.5 });

    const springValue = useSpring(0, {
        stiffness: 50,
        damping: 20,
        duration: 2000
    });

    useEffect(() => {
        if (isInView) {
            springValue.set(value);
        }
    }, [isInView, value, springValue]);

    const displayValue = useTransform(springValue, (current) => Math.round(current));

    return (
        <div ref={ref} className="w-full">
            {/* Header: Label + Icon + Percentage */}
            <div className="flex flex-wrap sm:flex-nowrap justify-between items-end mb-2 sm:mb-3 gap-2">
                <div className="flex items-center gap-3">
                    <div className={`
                        p-2 rounded-lg 
                        bg-gradient-to-br ${gradient} 
                        text-white shadow-md
                        flex-shrink-0
                    `}>
                        {icon}
                    </div>
                    <h4 className="text-sm sm:text-base lg:text-lg font-bold text-dark dark:text-light tracking-tight">
                        {label}
                    </h4>
                </div>

                <span className="text-base lg:text-lg font-bold text-dark/80 dark:text-light/80 font-mono ml-auto sm:ml-0">
                    <motion.span>{displayValue}</motion.span>%
                </span>
            </div>

            {/* Track */}
            <div className="w-full h-2 sm:h-3 bg-neutral-200 dark:bg-neutral-800 rounded-full overflow-hidden relative">
                {/* Fill Bar */}
                <motion.div
                    className={`h-full absolute left-0 top-0 rounded-full bg-gradient-to-r ${gradient}`}
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${value}%` } : { width: 0 }}
                    transition={{ duration: 1.5, ease: "circOut", delay: index * 0.2 }}
                >
                    {/* Shimmer Effect overlay */}
                    <div className="absolute top-0 left-0 w-full h-full  skew-x-12 animate-shimmer" />
                </motion.div>
            </div>
        </div>
    );
}