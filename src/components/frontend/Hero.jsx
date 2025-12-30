import React, { useState } from "react";
import clsx from "clsx";
import { Badge } from "../ui/badge"; // Assuming this path exists

const INDICATOR_SCREENSHOTS = {
    index: "/assets/indicator/nifty.png",
    forex: "/assets/indicator/forex.png",
    commodities: "/assets/indicator/reliance.png",
};

const HERO_FEATURES = {
    intraday: {
        title: "Intraday & Swing",
        description:
            "Learn timing candle identification, ICT Kill Zones, and institutional liquidity traps to capture short-term momentum.",
    },
    timeCycles: {
        title: "Time Cycles & Gann",
        description:
            "Master advanced cycle models, astro influence phases, and trend reversals using harmonics and Gann geometry.",
    },
    psychology: {
        title: "Psychology & Mindset",
        description:
            "Develop emotional discipline, avoid revenge trading, and internalize systematic decision-making.",
    },
};

const Hero = () => {
    const [market, setMarket] = useState("index");
    const [activeFeature, setActiveFeature] = useState("intraday");
    const [isZoomed, setIsZoomed] = useState(false);

    return (
        <section
            id="home"
            className="
            relative w-full
            min-h-[100dvh]
            flex items-center justify-center
            pt-20 pb-10 sm:pt-24 sm:pb-12 lg:pt-28 lg:pb-0
            px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24
            overflow-hidden
            "
        >
            <div
                className="
                w-full
                max-w-[24rem] sm:max-w-xl md:max-w-4xl lg:max-w-6xl xl:max-w-[90rem]
                mx-auto
                grid grid-cols-1 md:grid-cols-2
                gap-12 md:gap-10 lg:gap-16 xl:gap-24
                items-center relative z-10
                "
            >
                {/* LEFT CONTENT */}
                <div
                    className="
                    space-y-6 sm:space-y-7 xl:space-y-9
                    mt-6 sm:mt-12
                     md:text-left
                    flex flex-col items-center md:items-start
                    "
                >

                    {/* Tagline */}
                    <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] sm:tracking-[0.3em] text-primary dark:text-secondary">
                        Time • Price • Astrology
                    </p>

                    {/* Main Headline */}
                    <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-dark dark:text-light leading-[1.15]">
                        Trade Smart with
                        <span className="block mt-1 sm:mt-2 text-primary dark:text-secondary">
                          Professional Time Trading
                        </span>
                    </h1>

                    {/* Description */}
                    <p className="text-dark/70 dark:text-light/70 text-sm sm:text-base lg:text-lg xl:text-xl max-w-lg mx-auto md:mx-0 leading-relaxed">
                        {HERO_FEATURES[activeFeature].description}
                    </p>

                    {/* Feature Badges */}
                    <div className="flex flex-wrap justify-start gap-2 sm:gap-3 pt-2 w-full">
                        {Object.keys(HERO_FEATURES).map((key) => (
                            <Badge
                                key={key}
                                variant={activeFeature === key ? "default" : "secondary"}
                                className={`
                                cursor-pointer px-3 py-1.5 text-[10px] sm:text-xs xl:text-sm transition-all select-none
                                ${
                                    activeFeature === key
                                        ? "bg-primary text-white dark:bg-secondary dark:text-dark scale-105 shadow-sm"
                                        : "bg-dark/5 dark:bg-light/10 text-dark/70 dark:text-light/70 hover:bg-dark/10 dark:hover:bg-light/20"
                                }
                                `}
                                onClick={() => setActiveFeature(key)}
                            >
                                {HERO_FEATURES[key].title}
                            </Badge>
                        ))}
                    </div>

                    {/* CTA Buttons */}
                    <div className="mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start w-full sm:w-auto">
                        <a
                            href="#services"
                            className="
                            flex items-center justify-center
                            w-full sm:w-auto px-6 py-3.5
                            rounded-lg font-bold text-sm sm:text-base xl:text-lg
                            bg-primary text-white shadow-lg shadow-primary/20
                            hover:bg-secondary hover:shadow-xl hover:shadow-secondary/20
                            transition-all duration-200 hover:-translate-y-1
                            "
                        >
                            Explore Programs
                        </a>

                        <a
                            href="#contact"
                            className="
                            flex items-center justify-center
                            w-full sm:w-auto px-6 py-3.5
                            rounded-lg font-bold text-sm sm:text-base xl:text-lg
                            border-2 border-primary/20 text-primary
                            dark:border-secondary/30 dark:text-secondary
                            hover:bg-primary/5 dark:hover:bg-secondary/10
                            transition-all duration-200 hover:-translate-y-1
                            "
                        >
                            Talk to Mentor
                        </a>
                    </div>
                </div>

                {/*  RIGHT CONTENT*/}
                <div className="relative w-full max-w-md md:max-w-full mx-auto md:mx-0 py-4 sm:py-10">

                    {/* Background Glow */}
                    <div className="absolute inset-0 blur-3xl bg-primary/20 dark:bg-secondary/20 translate-y-6 pointer-events-none scale-75 sm:scale-100" />

                    <div
                        className="
                        relative rounded-2xl sm:rounded-3xl
                        border border-dark/10 dark:border-light/10
                        bg-white/90 dark:bg-dark/90
                        shadow-[0_10px_30px_rgba(0,0,0,0.15)] sm:shadow-[0_18px_45px_rgba(0,0,0,0.25)]
                        p-4 sm:px-6 sm:py-6
                        backdrop-blur-md
                        "
                    >
                        {/* Card Header */}
                        <div className="flex items-center justify-between mb-3 sm:mb-4">
                            <div>
                                <p className="text-[10px] sm:text-xs uppercase tracking-wide text-dark/50 dark:text-light/50">
                                    Proprietary Strategy
                                </p>
                                <p className="text-xs sm:text-sm font-bold text-dark dark:text-light">
                                    ALGO SIGNAL PREVIEW
                                </p>
                            </div>
                            <div className="flex items-center gap-1.5">
                                <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-red-500/80" />
                                <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-amber-400/80" />
                                <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-emerald-400/80" />
                            </div>
                        </div>

                        {/* Market Tabs */}
                        <div className="flex gap-2 mb-3 sm:mb-4 overflow-x-auto no-scrollbar">
                            {["index", "forex", "commodities"].map((t) => (
                                <button
                                    key={t}
                                    onClick={() => setMarket(t)}
                                    className={clsx(
                                        "px-3 py-1 text-[10px] sm:text-[11px] font-medium rounded-full transition whitespace-nowrap",
                                        market === t
                                            ? "bg-primary text-white dark:bg-secondary dark:text-dark"
                                            : "bg-dark/5 dark:bg-light/10 text-dark/60 dark:text-light/70"
                                    )}
                                >
                                    {t.toUpperCase()}
                                </button>
                            ))}
                        </div>

                        {/* Image Container */}
                        <div
                            className="
                            relative w-full overflow-hidden rounded-lg border border-dark/5 dark:border-light/5 group cursor-zoom-in
                            h-52 sm:h-72 md:h-64 lg:h-80 xl:h-96
                            "
                            onClick={() => setIsZoomed(true)}
                        >
                            <img
                                src={INDICATOR_SCREENSHOTS[market]}
                                alt={`${market} indicator setup`}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />

                            <div className="absolute top-2 right-2 sm:top-3 sm:right-3 flex items-center gap-2 pointer-events-none">
                                <div className="bg-emerald-500/90 text-white text-[9px] sm:text-[10px] font-bold px-1.5 py-0.5 sm:px-2 sm:py-1 rounded shadow-lg backdrop-blur-md flex items-center gap-1 animate-pulse">
                                    <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><path d="m18 15-6-6-6 6"/></svg>
                                    BUY
                                </div>
                            </div>

                            <div className="absolute inset-0 bg-black/10 sm:bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <div className="bg-white/95 backdrop-blur text-dark px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-[10px] sm:text-xs font-bold shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-all flex items-center gap-1.5 sm:gap-2">
                                    <span>🔍 Expand</span>
                                </div>
                            </div>
                        </div>

                        {/* Footer Stats */}
                        <div className="mt-3 sm:mt-4 flex items-center justify-between text-[10px] sm:text-xs lg:text-sm text-dark/60 dark:text-light/60">
                            <span className="truncate mr-2">Target: Swing High • Risk: 1:3</span>
                            <span className="font-bold text-primary dark:text-secondary flex items-center gap-1 shrink-0">
                                <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                92% Acc.
                            </span>
                        </div>
                    </div>
                </div>

            </div>

            {/* ZOOM MODAL */}
            {isZoomed && (
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md p-4 animate-in fade-in duration-200"
                    onClick={() => setIsZoomed(false)}
                >
                    <button
                        className="absolute top-4 right-4 sm:top-6 sm:right-6 text-dark/70 hover:text-white bg-white/70 hover:bg-white/20 p-2 rounded-full transition-colors z-50"
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                    </button>

                    <img
                        src={INDICATOR_SCREENSHOTS[market]}
                        alt="Zoomed Indicator"
                        className="w-full h-auto max-h-[90vh] object-contain rounded shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    />
                </div>
            )}
        </section>
    );
};

export default Hero;