import React from "react";
import { motion } from "framer-motion";
import {
    BookOpen,
    BarChart3,
    Globe,
    DollarSign,
    Zap,
    Calendar,
    Sparkles, ArrowRight,
} from "lucide-react";
// import Divider from "../Helpers/Divider";
import {useNavigate} from "react-router-dom";

const Book = () => {
    const navigate = useNavigate();
    return (
        <section
            id="book"
            className="
                relative w-full
                py-16 md:py-20 lg:py-24
                px-4 sm:px-8 md:px-12
                overflow-hidden font-poppins
            "
        >

            {/*<Divider />*/}
            {/* Glowing Blob behind the book (Right side positioning) */}
            <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/4 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-primary/10 rounded-full blur-[100px] md:blur-[120px] pointer-events-none"></div>

            {/* MAIN CONTAINER */}
            <div
                className="
                    relative z-10
                    mx-auto
                    w-full max-w-[1440px]
                    md:w-[95%] lg:w-[92%] xl:w-[85%] 2xl:w-[75%]
                    flex flex-col-reverse lg:grid lg:grid-cols-2
                    gap-12 md:gap-16 lg:gap-12 xl:gap-24
                    items-center
                "
            >
                {/* ---------------- LEFT — CONTENT ---------------- */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex flex-col gap-6 md:gap-8 w-full"
                >
                    {/* Header Group */}
                    <div className="space-y-4">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm w-fit">
                            <BookOpen className="w-3 h-3 text-primary" />
                            <span className="text-xs font-bold tracking-widest text-primary uppercase">
                                Exclusive Release • 2026
                            </span>
                        </div>

                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold text-dark dark:text-light leading-[1.1]"
                        >
                            <span className="block leading-[1.2]">SAMPADASTRA</span>
                            <span className="block leading-[1.2] text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                                EDITION - 3
                            </span>
                        </motion.h2>

                        <p className="text-lg md:text-xl font-medium text-gray-600 dark:text-gray-300 border-l-4 border-primary/40 pl-4">
                            Weapon of Wealth — The Ultimate Time Cycle Playbook
                        </p>
                    </div>

                    {/* Features Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                        <FeatureCard
                            icon={<BarChart3 size={20} />}
                            title="Indian Indices"
                            content="Predict turning points for core Indian markets like NIFTY, BANKNIFTY, FINNIFTY, MIDCAP, and key sector indices."
                        />

                        <FeatureCard
                            icon={<Globe size={20} />}
                            title="Global Markets"
                            content="Identify global reversal windows for major markets such as DOWJONES, S&P 500, NASDAQ, OIL, GOLD, and SILVER."
                        />

                        <FeatureCard
                            icon={<DollarSign size={20} />}
                            title="US Tech Giants"
                            content="Time highs and lows for leading US tech giants like TSLA, NVDA, AAPL, SMCI, MSFT, META, AMD, and more."
                        />

                        <FeatureCard
                            icon={<Zap size={20} />}
                            title="Crypto Reversals"
                            content="Discover key reversal dates for BTC and other digital assets to forecast market-wide crypto momentum."
                        />

                        <FeatureCard
                            icon={<Calendar size={20} />}
                            title="Bull/Bear Calendar"
                            content="Month-wise map of strong vs weak F&O stocks to guide long/short opportunities from Jan to Dec 2026."
                        />

                        <FeatureCard
                            icon={<Sparkles size={20} />}
                            title="Astro Dates & Market"
                            content="Astrological cycles that affect volatility, sector strength, and optimal entry/exit timing."
                        />
                    </div>

                    {/*CTA / Notification Button*/}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex pt-2"
                    >
                        <button
                            onClick={() => window.open("https://docs.google.com/forms/d/e/1FAIpQLSdy4XiiexsUG16tRGeSQbh3nQHAzLeGnQG1SLOTXa_Dg3zwaQ/viewform?usp=sharing&ouid=104965521659633288081", "_blank")}
                            className="
                            group relative px-8 py-3 rounded-full
                            bg-primary text-white
                            font-semibold shadow-lg text-sm
                            hover:shadow-xl hover:-translate-y-1
                            transition-all duration-300
                            flex items-center gap-2
                        "
                        >
                            Pre-Book Now
                            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </button>
                    </motion.div>
                </motion.div>

                {/* ---------------- RIGHT — IMAGE ---------------- */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                    /* REMOVED mt-12: The parent gap handles spacing now that image is on top */
                    className="relative flex justify-center lg:justify-end w-full"
                >
                    {/* Animated Book Container */}
                    <div
                        className="relative z-10 w-full max-w-[320px] sm:max-w-[380px] lg:max-w-[450px]"
                    >
                        {/* Book Image */}
                        <img
                            src="/assets/book/FS_Book.webp"
                            alt="Sampadastra Book Cover"
                            className="w-full h-auto rounded-lg shadow-[0_20px_50px_rgba(0,0,0,0.3)] dark:shadow-[0_20px_50px_rgba(0,97,159,0.2)] transform rotate-y-12 hover:rotate-0 transition-transform duration-700"
                        />

                        {/* Reflection/Shadow beneath the book */}
                        <div className="absolute -bottom-8 md:-bottom-12 left-1/2 -translate-x-1/2 w-[80%] h-6 md:h-8 bg-black/20 dark:bg-black/40 blur-xl rounded-[100%]"></div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Book;

/* ------------------------------------------------------------ */
/*                   SUB-COMPONENT: FEATURE CARD                */
/* ------------------------------------------------------------ */

function FeatureCard({ title, content, icon }) {
    return (
        <div className="flex flex-col gap-2 p-3 md:p-4 rounded-xl bg-white/50 dark:bg-bg-dark-2/50 border border-gray-100 dark:border-white/5 hover:border-primary/30 transition-colors duration-300 h-full">
            <div className="flex items-center gap-2 md:gap-3 mb-1">
                <div className="text-primary p-1.5 bg-primary/10 rounded-lg flex-shrink-0">
                    {icon}
                </div>
                <h4 className="font-bold text-xs md:text-sm text-dark dark:text-light uppercase tracking-wide leading-tight">
                    {title}
                </h4>
            </div>
            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed pl-1">
                {content}
            </p>
        </div>
    );
}