import React from 'react';
import {
    FaQuoteRight,
    FaStar,
    FaCheckCircle,
    FaChartLine,
    FaHistory,
} from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

const getInitials = (name) => {
    if (!name) return '';
    const nameParts = name.trim().split(' ');
    if (nameParts.length === 1) {
        return nameParts[0].charAt(0).toUpperCase();
    }
    return (nameParts[0].charAt(0) + nameParts[nameParts.length - 1].charAt(0)).toUpperCase();
};

const Testimonials = () => {
    // Actual Google Maps/Business URL
    const googleReviewUrl = "https://www.google.com/maps/place/FORTUNE+ADVISORZ/@19.0215794,72.8424216,17z/data=!4m8!3m7!1s0x3be7cfb3bc5a1f51:0x8892cb4fd6fcc25d!8m2!3d19.0215794!4d72.8424216!9m1!1b1!16s%2Fg%2F11vywt73z6?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoKLDEwMDc5MjA2OUgBUAM%3D";

    return (
        <section className="min-h-screen w-full bg-gradient-to-b from-bg-light-1 to-bg-light-2 dark:from-bg-dark-1 dark:to-bg-dark-2 font-poppins text-gray-800 dark:text-gray-200 py-20 overflow-hidden relative">

            {/* BACKGROUND: Technical Grid (Subtle) */}
            <div className="fixed inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none z-0">
                <div className="w-full h-full" style={{ backgroundImage: 'radial-gradient(#4b5563 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
            </div>

            <div
                className="
                    relative z-10
                    mx-auto
                    w-full max-w-[1440px]
                    px-4 sm:px-8 md:px-12 lg:px-16
                "
            >

                {/* 1. PAGE HEADER */}
                <div className="text-center mb-12 md:mb-16 mt-10">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 text-xs font-semibold tracking-wide uppercase mb-4 border border-emerald-200 dark:border-emerald-800">
                        <FaCheckCircle /> Proven Results
                    </div>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight text-gray-900 dark:text-white">
                        Client <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500 dark:from-emerald-400 dark:to-teal-300">Success Stories</span>
                    </h1>
                    <p className="max-w-2xl mx-auto text-base sm:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                        Real results from traders and investors who have transformed their portfolios with our strategies.
                    </p>
                </div>

                {/* 2. STATS & GOOGLE WIDGET BAR */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6 mb-16">

                    {/*  GOOGLE REVIEWS WIDGET CARD  */}
                    <div
                        onClick={() => window.open(googleReviewUrl, '_blank')}
                        className="
                            group cursor-pointer
                            bg-white dark:bg-gray-800
                            p-5 lg:p-6 rounded-xl
                            border border-gray-200 dark:border-gray-700
                            shadow-sm hover:shadow-lg hover:border-emerald-500/30 transition-all duration-300
                            flex items-center gap-4
                        "
                    >
                        <div className="p-3 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg text-emerald-600 dark:text-emerald-400 group-hover:scale-110 transition-transform">
                            <FcGoogle size={24} />
                        </div>
                        <div>
                            <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 font-medium uppercase tracking-wider">Trust Score</p>
                            <div className="flex items-center gap-2">
                                <p className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">4.9</p>
                                <span className="text-xs text-blue-500 hover:underline">315+ reviews</span>
                            </div>
                        </div>
                    </div>

                    {/* STAT: Experience */}
                    <div className="bg-white dark:bg-gray-800 p-5 lg:p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm flex items-center gap-4">
                        <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-blue-600 dark:text-blue-400">
                            <FaHistory size={24} />
                        </div>
                        <div>
                            <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 font-medium uppercase tracking-wider">Experience</p>
                            <p className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">10+ Years</p>
                        </div>
                    </div>

                    {/* STAT: Profitability */}
                    <div className="bg-white dark:bg-gray-800 p-5 lg:p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm flex items-center gap-4">
                        <div className="p-3 bg-amber-100 dark:bg-amber-900/30 rounded-lg text-amber-600 dark:text-amber-400">
                            <FaChartLine size={24} />
                        </div>
                        <div>
                            <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 font-medium uppercase tracking-wider">Profitability</p>
                            <p className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">Consistent</p>
                        </div>
                    </div>

                </div>

                {/* 3. TESTIMONIALS GRID */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8 mt-12">
                    {testimonialsData.map((item) => (
                        <div
                            key={item.id}
                            className="
                                flex flex-col h-full
                                bg-white dark:bg-gray-800
                                rounded-2xl p-6 sm:p-8
                                border border-gray-100 dark:border-gray-700
                                shadow-lg shadow-gray-200/50 dark:shadow-none
                                transition-all duration-300 hover:shadow-xl hover:-translate-y-1
                                hover:border-emerald-500/30 dark:hover:border-emerald-500/30
                            "
                        >
                            {/* Header */}
                            <div className="flex justify-between items-start mb-6">
                                <div className="flex items-center gap-4">
                                    <div className="relative flex-shrink-0">
                                        <div className="w-12 h-12 rounded-full flex items-center justify-center bg-gradient-to-br from-emerald-500 to-teal-600 text-white font-bold text-lg border-2 border-white dark:border-gray-700 shadow-sm">
                                            {getInitials(item.name)}
                                        </div>
                                        <div className="absolute -bottom-1 -right-1 bg-white dark:bg-gray-800 rounded-full p-0.5 text-emerald-500">
                                            <FaCheckCircle className="text-[14px]" />
                                        </div>
                                    </div>

                                    <div>
                                        <h3 className="font-bold text-gray-900 dark:text-white text-base">
                                            {item.name}
                                        </h3>
                                        <div className="flex items-center gap-1">
                                            {[...Array(5)].map((_, i) => (
                                                <FaStar
                                                    key={i}
                                                    className={`text-xs ${
                                                        i < item.rating ? 'text-amber-400' : 'text-gray-300 dark:text-gray-600'
                                                    }`}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <FaQuoteRight className="text-2xl text-gray-200 dark:text-gray-700 flex-shrink-0" />
                            </div>

                            <div className="flex-grow">
                                <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed whitespace-pre-line">
                                    {item.text}
                                </p>
                            </div>

                            {item.growth && (
                                <div className="mt-6 pt-4 border-t border-gray-100 dark:border-gray-700 flex items-center justify-between">
                                    <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Results</span>
                                    <span className="text-sm font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/20 px-3 py-1 rounded-full">
                                        {item.growth}
                                    </span>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* 4. CALL TO ACTION FOOTER */}
                <div className="mt-20 md:mt-24 text-center bg-emerald-900/5 dark:bg-white/5 rounded-3xl p-8 sm:p-12 border border-emerald-500/10">
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                        Ready to Start Your Journey?
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-xl mx-auto text-base sm:text-lg">
                        Join our community of disciplined traders and start seeing market opportunities clearly.
                    </p>
                    <button
                        onClick={() => window.open("https://t.me/FortuneSignals369", "_blank")}
                        className="
                            px-8 py-4 rounded-full
                            bg-emerald-600 hover:bg-emerald-700
                            text-white font-bold text-sm sm:text-base
                            transition-all duration-300
                            shadow-lg shadow-emerald-600/30 hover:shadow-emerald-600/50 hover:-translate-y-1
                        "
                    >
                        Join Telegram Community
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;

const testimonialsData = [
    {
        id: 1,
        name: 'Ajikt',
        role: 'Angel Investor',
        rating: 5,
        growth: '+24% YTD',
        text: "I am truly grateful for the wonderful course you taught us.\nThe concepts of Ichimoku and Pitchfork were explained so clearly and have been incredibly valuable for me—almost like a guiding force in my trading journey.\n\nThank you, sir, from the bottom of my heart. 💜"
    },
    {
        id: 2,
        name: 'Maheshwari',
        role: 'Day Trader',
        rating: 5,
        growth: '+45% Return',
        text: "Your intraday time cycles and TTS strategies are simply extraordinary.\nYou are truly a rockstar—unmatched and unparalleled in your teaching style.\nWhile the market is open to everyone, the skill to extract meaningful opportunities is rare, and that’s what makes you one of a kind.",
    },
    {
        id: 3,
        name: 'Pranjay Desai',
        role: 'Retirement Planner',
        rating: 4,
        growth: 'Stable Growth',
        text: "The Bank Nifty Magic Candle strategy on the 3-minute chart worked flawlessly. Following your guidance, I bought puts at both signals and made a profit of ₹1,00,000. Thank you, sir, for such powerful and precise training.",
    },
    {
        id: 4,
        name: 'Maheshwari',
        role: 'Retirement Planner',
        rating: 4,
        growth: 'Stable Growth',
        text: "Sir, my deepest gratitude for today’s session.\nI have been in the markets since before NSE existed and have attended countless classes, but today’s session was truly out of this world.\nThe quality of your teaching is beyond words—it was a complete game changer.\nYou really are the James Bond of the markets.\nToday’s session alone was worth more than a lakh.\nI cannot thank you enough and eagerly look forward to tomorrow.",
    },
    {
        id: 5,
        name: 'Pradeep Kumar',
        role: 'Retirement Planner',
        rating: 4,
        growth: 'Stable Growth',
        text: "Guruji, the OFSS and Naukri alerts were unbelievable.\nWithin minutes, I could follow the movement clearly and confidently.\nI bought OFSS CE and made ₹4,000 effortlessly—your stop-loss and levels are so accurate that there’s no anxiety or confusion.\nSalutes to you, the market, and the divine.\nMay Lord Mahadev bless you with health, happiness, and endless joy.\nWith your guidance, even our lives turn into a blessing.\nMay the Force always be with you.",
    },
];