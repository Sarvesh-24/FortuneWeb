import React from "react";
import {
    Globe2, Clock, Calculator, Brain, Flame,
    TrendingUp, Sigma, CheckCircle2
} from "lucide-react";
import { GiReceiveMoney } from "react-icons/gi";
import CurriculumSection from "../routes/CurriculumSection";

const Course = () => {
    return (
        <section
            className="
                w-full py-32 px-4 sm:px-10 lg:px-20
                overflow-hidden
            "
        >
            <div className="max-w-7xl mx-auto">

                {/* BASICS */}

                {/* Header */}
                {/*<div className="text-center max-w-3xl mx-auto mb-16">*/}
                {/*    <div className="inline-block px-4 py-1.5 mb-4 text-xs font-bold tracking-wider uppercase bg-primary/10 text-primary dark:text-secondary dark:bg-secondary/10 rounded-full">*/}
                {/*        Curriculum Phase 1*/}
                {/*    </div>*/}
                {/*    <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-primary dark:text-secondary">*/}
                {/*        Forex Trading Basics*/}
                {/*    </h2>*/}
                {/*    <p className="mt-4 text-lg text-dark/60 dark:text-light/60">*/}
                {/*        A comprehensive foundation for Beginner to Intermediate traders.*/}
                {/*    </p>*/}
                {/*</div>*/}

                {/*/!* Grid *!/*/}
                {/*<div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">*/}
                {/*    <CourseCard*/}
                {/*        icon={<Globe2 className="w-8 h-8" />}*/}
                {/*        title="Forex Foundations"*/}
                {/*        points={[*/}
                {/*            "Evolution of the world’s most liquid financial market.",*/}
                {/*            "Currency structure, quotes, and trade mechanics.",*/}
                {/*            "Distinctions between Major, Minor, and Exotic pairs.",*/}
                {/*            "Macroeconomics, interest rates, and global news impact."*/}
                {/*        ]}*/}
                {/*    />*/}
                {/*    <CourseCard*/}
                {/*        icon={<Clock className="w-8 h-8" />}*/}
                {/*        title="Time & Market Structure"*/}
                {/*        points={[*/}
                {/*            "Market hours and volatility cycles across regions.",*/}
                {/*            "Leveraging overlapping sessions (London–New York).",*/}
                {/*            "ICT Kill Zones mapped to IST for intraday accuracy."*/}
                {/*        ]}*/}
                {/*    />*/}
                {/*    <CourseCard*/}
                {/*        icon={<Calculator className="w-8 h-8" />}*/}
                {/*        title="Calculations & Execution"*/}
                {/*        points={[*/}
                {/*            "Understanding PIPs and their effect on trade value.",*/}
                {/*            "Calculating Profit/Loss & Lot sizes (Micro, Mini, Standard).",*/}
                {/*            "Risk implications and position sizing mastery."*/}
                {/*        ]}*/}
                {/*    />*/}
                {/*    <CourseCard*/}
                {/*        icon={<Brain className="w-8 h-8" />}*/}
                {/*        title="Strategy & Psychology"*/}
                {/*        points={[*/}
                {/*            "Fundamental vs. Technical Analysis foundations.",*/}
                {/*            "Candlestick interpretation and momentum reading.",*/}
                {/*            "Core psychology & risk management principles.",*/}
                {/*            "Common pitfalls and a complete Forex Glossary."*/}
                {/*        ]}*/}
                {/*    />*/}
                {/*</div>*/}

                {/*  CURRICULUM */}
                <CurriculumSection />

                {/* Divider */}
                <div className="my-20 left-0 absolute w-full h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

                {/* TIME TRADING */}

                {/* Header */}
                <div className="text-center mb-16 pt-32">
                    <div className="inline-block px-4 py-1.5 mb-4 text-xs font-bold tracking-wider uppercase bg-primary/10 text-primary dark:text-secondary dark:bg-secondary/10 rounded-full">
                        Curriculum Phase 2
                    </div>
                    <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-primary dark:text-secondary">
                        Time Trading Mastery
                    </h2>
                    <p className="mt-4 text-lg text-dark/60 dark:text-light/60 max-w-2xl mx-auto">
                        Advanced techniques for Forex, Stocks, and Commodities covering Intraday, Price Action, and Cycle Analysis.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
                    <AdvancedCard
                        icon={<Flame className="w-6 h-6" />}
                        title="Intraday Strategies"
                        subtitle="Blow Your Mind Techniques"
                        points={[
                            <span><strong>God Strategy:</strong> Single Candle Rule guiding momentum.</span>,
                            <span><strong>Guru Candle:</strong> Astro-driven directional triggers.</span>,
                            <span><strong>No-Loss Strategy:</strong> High-probability capital preservation.</span>,
                            <span>Timing candles <strong>pre-market</strong> for trend capture.</span>
                        ]}
                    />
                    <AdvancedCard
                        icon={<TrendingUp className="w-6 h-6" />}
                        title="Price Action & Technicals"
                        subtitle="Pure Chart Analysis"
                        points={[
                            <span><strong>Purity of Breakout:</strong> Advanced index/stock validation.</span>,
                            <span><strong>Ichimoku Strategies:</strong> Cloud & trend recognition.</span>,
                            <span><strong>Miracle of Angels:</strong> Elite support/resistance zones.</span>
                        ]}
                    />
                    <AdvancedCard
                        icon={<Clock className="w-6 h-6" />}
                        title="Time Cycles"
                        subtitle="Timing is Everything"
                        points={[
                            "Advanced 18-cycle timing architecture.",
                            "Planetary influences on Crypto.",
                            "The “1-Hour Price Time Square” system.",
                            "Exclusive Gold intraday cycle setups."
                        ]}
                    />
                    <AdvancedCard
                        icon={<Sigma className="w-6 h-6" />}
                        title="Magic of Numbers"
                        subtitle="Universal Numerical Logic"
                        points={[
                            <span><strong>Numerical Options:</strong> MCX & option writing focus.</span>,
                            <span><strong>One-Number Magic:</strong> Quarterly/Monthly/Weekly cycles.</span>,
                            "Universal logic across all asset classes.",
                            "Cycle influence: Yearly down to Weekly structures."
                        ]}
                    />
                </div>

                {/* PREMIUM BONUS */}

                <div className="mt-24 relative group">
                    {/* Decorative gradient blur behind the card */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-primary via-purple-500 to-secondary opacity-20 blur-xl group-hover:opacity-40 transition duration-500"></div>

                    <div className="relative w-full bg-white dark:bg-gray-900 border border-dark/5 dark:border-light/10 rounded-3xl p-8 md:p-12 shadow-2xl overflow-hidden">

                        {/* Background Pattern */}
                        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl"></div>

                        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                            <div className="flex-shrink-0 bg-gradient-to-br from-primary to-secondary p-6 rounded-2xl shadow-lg dark:text-light text-light">
                                <GiReceiveMoney className="text-5xl" />
                            </div>

                            <div className="flex-1 text-center md:text-left">
                                <h3 className="text-2xl md:text-3xl font-bold text-dark dark:text-light flex items-center justify-center md:justify-start gap-3">
                                    Premium Content Bonus
                                    {/*<Star className="w-6 h-6 text-yellow-500 fill-yellow-500" />*/}
                                </h3>
                                <p className="mt-2 text-dark/60 dark:text-light/60 mb-6">
                                    Exclusive tools and resources included with the course.
                                </p>

                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 text-left">
                                    <BonusItem
                                        label="Psychology Training"
                                        desc="Mind training to trade emotion-free and avoid fear/greed."
                                    />
                                    <BonusItem
                                        label="Fortune Signals Indicator"
                                        desc="Proprietary tool to capture mega intraday & swing moves."
                                    />
                                    <BonusItem
                                        label="Combo Time Coordinates"
                                        desc="Weapon-grade timing (15m, 1H, Daily) across all major markets."
                                        colSpan={true}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};


const CourseCard = ({ icon, title, points }) => (
    <div className="group relative p-8 bg-white dark:bg-slate-900/50 rounded-2xl border border-gray-100 dark:border-white/5 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
        <div className="flex flex-col h-full">
            <div className="mb-6 inline-flex p-3 rounded-xl bg-primary/10 text-primary dark:text-secondary dark:bg-secondary/10 w-fit group-hover:scale-110 transition-transform duration-300">
                {icon}
            </div>
            <h4 className="text-xl font-bold text-dark dark:text-light mb-4 group-hover:text-primary dark:group-hover:text-secondary transition-colors">
                {title}
            </h4>
            <ul className="space-y-3 mt-auto">
                {points.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-dark/70 dark:text-light/70 text-sm leading-relaxed">
                        <CheckCircle2 className="w-5 h-5 text-primary/60 dark:text-secondary/60 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                    </li>
                ))}
            </ul>
        </div>
    </div>
);

const AdvancedCard = ({ icon, title, subtitle, points }) => (
    <div className="flex flex-col p-8 rounded-2xl bg-gray-50 dark:bg-white/5 border border-transparent hover:border-primary/20 dark:hover:border-secondary/20 transition-all duration-300">
        <div className="flex items-center gap-3 mb-2">
            <div className="text-primary dark:text-secondary">
                {icon}
            </div>
            <h3 className="text-lg font-bold text-dark dark:text-light uppercase tracking-wide">
                {title}
            </h3>
        </div>
        <p className="text-primary dark:text-secondary font-medium text-sm mb-6 pl-9">
            {subtitle}
        </p>
        <ul className="space-y-3 pl-2 border-l-2 border-primary/10 dark:border-secondary/10 ml-3">
            {points.map((item, idx) => (
                <li key={idx} className="pl-4 text-sm text-dark/80 dark:text-light/80 leading-relaxed">
                    {item}
                </li>
            ))}
        </ul>
    </div>
);

const BonusItem = ({ label, desc, colSpan = false }) => (
    <div className={`${colSpan ? 'lg:col-span-2' : ''} p-4 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/5`}>
        <h5 className="font-bold text-primary dark:text-secondary text-sm mb-1">
            {label}
        </h5>
        <p className="text-xs sm:text-sm text-dark/70 dark:text-light/70">
            {desc}
        </p>
    </div>
);

export default Course;