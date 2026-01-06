import React, {useEffect, useRef} from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { Clock, TrendingUp, Target, Compass, ArrowRight } from "lucide-react";
import {useNavigate} from "react-router-dom";
// import Divider from "../Helpers/Divider";

const About = () => {
    return (
        <section
            id="about"
            className="
                relative w-full
                py-16 md:py-24
                px-4 sm:px-8 md:px-12
                overflow-hidden font-poppins
            "
        >
            {/*<Divider />*/}
            <div
                className="
                    relative z-10
                    mx-auto
                    w-full max-w-[1440px]
                    md:w-[95%] lg:w-[92%] xl:w-[85%] 2xl:w-[75%]
                    grid lg:grid-cols-2
                    gap-12 lg:gap-10 xl:gap-24
                    items-center
                "
            >
                {/* LEFT CONTENT */}
                <ContentSection />

                {/* RIGHT IMAGE + FEATURES */}
                <RightImagePanel />
            </div>
        </section>
    );
};

export default About;

/* ================================================================
   LEFT — CONTENT BLOCK
================================================================= */
function ContentSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { amount: 0.2, once: true });
    const controls = useAnimation();
    const navigate = useNavigate();
    useEffect(() => {
        if (isInView) controls.start("visible");
    }, [controls, isInView]);

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
            }}
            className="space-y-6 md:space-y-8 lg:pr-4"
        >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm w-fit">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
                <span className="text-xs font-bold tracking-widest text-primary uppercase">
                    Who We Are
                </span>
            </div>

            {/* Heading */}
            <motion.h2
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                /* RESPONSIVE TYPOGRAPHY: Adjusted for tablet readability */
                className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold text-dark dark:text-light leading-[1.1]"
            >
                <span className="block leading-[1.2]">Learn the Art of</span>
                <span className="block leading-[1.2] text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                    Smarter Trading
                </span>
            </motion.h2>

            {/* Paragraph */}
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 leading-relaxed border-l-4 border-primary/30 pl-4 sm:pl-6">
                We are a financial services company specializing in forex trading, education, and market-driven investment solutions.
                <br /><br />
                Our mission is to empower traders with the <span className="text-dark dark:text-light font-semibold">knowledge, tools, and strategies</span> they need to succeed in global financial markets.
            </p>

            {/* CTA Button */}
            <div className="pt-2">
                <button className="group flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all duration-300"  onClick={() => navigate("/about")}>
                    Discover Our Vision
                    <ArrowRight className="w-5 h-5" />
                </button>
            </div>
        </motion.div>
    );
}

/* ================================================================
   RIGHT — IMAGE PANEL + FEATURES
================================================================= */
function RightImagePanel() {
    return (
        <div className="flex flex-col gap-6 w-full">

            {/* BIG IMAGE */}
            <div className="relative group rounded-2xl overflow-hidden shadow-2xl shadow-primary/10 border border-gray-200 dark:border-white/10">
                <ScrollImage
                    src="/assets/about/banner/banner.webp"
                    className="w-full h-auto object-cover transform transition-transform duration-700"
                    delay={0.2}
                />
            </div>

            {/* FEATURE CARDS GRID */}
            <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                    visible: { transition: { staggerChildren: 0.1 } }
                }}
            >
                <FeatureCard
                    icon={<Clock className="w-5 h-5 text-white" />}
                    title="Time Trade Mastery"
                    text="Precision trade timing using Vedic Maths and Time Analysis."
                />
                <FeatureCard
                    icon={<TrendingUp className="w-5 h-5 text-white" />}
                    title="Fortune Timing"
                    text="Predict major market moves ahead of time."
                />
                <FeatureCard
                    icon={<Target className="w-5 h-5 text-white" />}
                    title="Strategic Edge"
                    text="Exact entry, exit, and stop-loss for any market."
                />
                <FeatureCard
                    icon={<Compass className="w-5 h-5 text-white" />}
                    title="Astro-Math Blueprint"
                    text="Ancient wisdom meets modern trading accuracy."
                />
            </motion.div>
        </div>
    );
}

/* ================================================================
   FEATURE CARD COMPONENT
================================================================= */
function FeatureCard({ title, text, icon }) {
    return (
        <motion.div
            className="
                group relative p-4 md:p-5 rounded-xl
                bg-white dark:bg-bg-dark-2
                border border-gray-100 dark:border-white/5
                shadow-sm hover:shadow-lg hover:shadow-primary/5 hover:border-primary/30
                transition-all duration-300
                h-full flex flex-col justify-center
            "
            variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
            }}
        >
            <div className="flex items-start gap-4">
                {/* Icon Box */}
                <div className="
                    flex-shrink-0 w-10 h-10 rounded-lg
                    bg-gradient-to-br from-primary to-secondary
                    flex items-center justify-center
                    shadow-md group-hover:scale-110 transition-transform duration-300
                ">
                    {icon}
                </div>

                {/* Text */}
                <div className="flex-1">
                    <h3 className="text-sm md:text-base font-bold text-dark dark:text-light mb-1 group-hover:text-primary transition-colors">
                        {title}
                    </h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                        {text}
                    </p>
                </div>
            </div>
        </motion.div>
    );
}

/* ================================================================
   IMAGE SCROLL ANIMATION WRAPPER
================================================================= */
function ScrollImage({ src, delay, className }) {
    return (
        <motion.img
            src={src}
            className={className}
            initial={{ opacity: 0, scale: 1.1 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut", delay }}
        />
    );
}