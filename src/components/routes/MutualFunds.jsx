import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Chart as ChartJS, ArcElement, Tooltip as ChartTooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import {
    TrendingUp,
    ShieldCheck,
    PieChart as PieIcon,
    ArrowRight,
    ChevronRight,
    Wallet,
    Phone,
    CheckCircle,
    UserCheck
} from 'lucide-react';
import { useNavigate } from "react-router-dom";

ChartJS.register(ArcElement, ChartTooltip, Legend);


const SectionHeading = ({ children, subtitle }) => (
    <div className="mb-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {children}
        </h2>
        {subtitle && <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">{subtitle}</p>}
    </div>
);

// const FundCard = ({ fund, index }) => (
//     <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ delay: index * 0.1 }}
//         whileHover={{ y: -5 }}
//         className="
//             bg-white/60 dark:bg-slate-800/60 backdrop-blur-md
//             rounded-2xl p-6 shadow-lg
//             border border-white/20 dark:border-white/10
//             flex flex-col justify-between h-full
//         "
//     >
//         <div>
//             <div className="flex items-start justify-between sm:justify-start sm:gap-3 mb-4">
//                 <span
//                     className={`text-xs font-bold px-3 py-1 rounded-full ${
//                         fund.risk === 'High' || fund.risk === 'Very High'
//                             ? 'bg-red-100 text-red-600'
//                             : 'bg-blue-100 text-primary'
//                     }`}
//                 >
//                     {fund.risk} Risk
//                 </span>
//                 <span className="text-sm font-semibold text-green-600 flex items-center gap-1 whitespace-nowrap">
//                     <TrendingUp size={14} /> {fund.return3Y}% (3Y)
//                 </span>
//             </div>
//
//             <h3 className="font-bold text-lg text-gray-800 dark:text-white mb-1">{fund.name}</h3>
//             <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{fund.category}</p>
//         </div>
//
//         <div className="mt-auto pt-4 border-t border-gray-200/50 dark:border-gray-700/50">
//             <button className="w-full py-2 text-sm font-semibold text-primary dark:text-blue-400 hover:text-blue-700 flex items-center justify-center gap-2 group transition-all">
//                 View Details
//                 <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform"/>
//             </button>
//         </div>
//     </motion.div>
// );

const BenefitCard = ({ icon: Icon, title, desc, delay }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay }}
        className="
            p-8 rounded-3xl
            bg-white/40 dark:bg-slate-800/40 backdrop-blur-sm
            hover:bg-white dark:hover:bg-slate-800
            border border-white/20 dark:border-white/10
            transition-all duration-300 shadow-sm hover:shadow-xl group
        "
    >
        <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
            <Icon size={28} />
        </div>
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{title}</h3>
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{desc}</p>
    </motion.div>
);


const MutualFunds = () => {
    const [calcType, setCalcType] = useState('sip');
    const [amount, setAmount] = useState(5000);
    const [rate, setRate] = useState(12);
    const [years, setYears] = useState(5);
    const [results, setResults] = useState({ invested: 0, returns: 0, total: 0 });

    const navigate = useNavigate();

    useEffect(() => {
        let investedVal = 0;
        let totalVal = 0;

        if (calcType === 'sip') {
            const monthlyRate = rate / 12 / 100;
            const months = years * 12;
            investedVal = amount * months;
            totalVal = amount * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate);
        } else {
            investedVal = amount;
            totalVal = amount * Math.pow(1 + rate / 100, years);
        }

        setResults({
            invested: Math.round(investedVal),
            total: Math.round(totalVal),
            returns: Math.round(totalVal - investedVal)
        });
    }, [calcType, amount, rate, years]);

    const chartData = {
        labels: ['Invested Amount', 'Est. Returns'],
        datasets: [
            {
                data: [results.invested, results.returns],
                backgroundColor: [
                    '#94a3b8',
                    '#2563eb',
                ],
                borderWidth: 0,
                hoverOffset: 4,
            },
        ],
    };

    const chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        cutout: '70%',
        plugins: {
            legend: {
                position: 'bottom',
                labels: {
                    usePointStyle: true,
                    padding: 20,
                    color: '#64748b' // Slate 500
                }
            },
            tooltip: {
                backgroundColor: 'rgba(15, 23, 42, 0.9)', // Slate 900
                padding: 12,
                cornerRadius: 8,
                callbacks: {
                    label: function(context) {
                        let label = context.label || '';
                        if (label) {
                            label += ': ';
                        }
                        if (context.parsed !== null) {
                            label += new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(context.parsed);
                        }
                        return label;
                    }
                }
            }
        }
    };

    const fundsList = [
        { name: "BlueChip Equity Fund", category: "Large Cap", return3Y: 15.4, risk: "Moderate" },
        { name: "MidCap Opportunities", category: "Mid Cap", return3Y: 22.1, risk: "High" },
        { name: "Flexi Cap Growth", category: "Flexi Cap", return3Y: 18.5, risk: "Moderate" },
        { name: "Small Cap Discovery", category: "Small Cap", return3Y: 28.3, risk: "Very High" },
        { name: "Balanced Advantage", category: "Hybrid", return3Y: 12.8, risk: "Low" }
    ];

    const handleInputChange = (setter, value, min, max) => {
        const val = Number(value);
        if (value === '') return setter('');
        setter(val);
    };

    return (
        <div className="
            relative
            w-full py-28 px-4 sm:px-10 lg:px-20
            overflow-hidden
        ">
            {/* Inner Content Container */}
            <div className="max-w-7xl mx-auto space-y-32">

                {/* 1. HERO SECTION */}
                <section className="text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100/50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-semibold mb-6 border border-blue-200 dark:border-blue-800">
                            <Wallet size={16} /> Smart Wealth Creation
                        </div>
                        <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-8 leading-tight">
                            Crafting Your <br/>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-indigo-600">
                                Investment Future
                            </span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                            Navigate the financial markets with confidence. Build wealth, beat inflation, and achieve your life goals.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-4 bg-primary hover:bg-blue-700 text-white rounded-xl font-bold shadow-xl shadow-blue-500/20 transition-all flex items-center gap-2"
                                onClick={() => navigate("/contact")}
                            >
                                Start Enquiry
                                <ChevronRight size={20} />
                            </motion.button>
                            <button className="px-8 py-4 text-gray-700 dark:text-white font-semibold hover:text-primary transition-colors" onClick={() => navigate("/courses")}>
                                Learn Basics
                            </button>
                        </div>
                    </motion.div>
                </section>

                {/* 2. BENEFITS SECTION */}
                <section>
                    <SectionHeading subtitle="Why millions of investors choose Mutual Funds as their primary wealth building tool.">
                        What are the potential benefits?
                    </SectionHeading>

                    <div className="grid md:grid-cols-3 gap-8">
                        <BenefitCard
                            icon={PieIcon}
                            title="Instant Diversification"
                            desc="Don't put all your eggs in one basket. Investing in a single fund gives you exposure to a wide range of stocks."
                            delay={0.1}
                        />
                        <BenefitCard
                            icon={ShieldCheck}
                            title="Professional Management"
                            desc="Your money is managed by experienced fund managers who analyze markets and economies."
                            delay={0.2}
                        />
                        <BenefitCard
                            icon={TrendingUp}
                            title="Compound Growth"
                            desc="Benefit from the power of compounding. Reinvesting your earnings generates their own earnings."
                            delay={0.3}
                        />
                    </div>
                </section>

                {/* 3. CALCULATOR SECTION */}
                <section>
                    <SectionHeading>Plan Your Wealth</SectionHeading>

                    <div className="bg-white dark:bg-slate-800/80 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden border border-white/20 dark:border-white/10">
                        <div className="grid lg:grid-cols-2">
                            {/* Input Side */}
                            <div className="p-8 md:p-12">
                                <div className="flex bg-gray-100 dark:bg-slate-700/50 p-1 rounded-xl mb-8 w-fit">
                                    {['sip', 'lumpsum'].map((type) => (
                                        <button
                                            key={type}
                                            onClick={() => setCalcType(type)}
                                            className={`px-6 py-2 rounded-lg text-sm font-bold transition-all ${
                                                calcType === type
                                                    ? 'bg-white dark:bg-slate-600 shadow-sm text-primary dark:text-white'
                                                    : 'text-gray-500 dark:text-gray-400'
                                            }`}
                                        >
                                            {type === 'sip' ? 'SIP' : 'Lumpsum'}
                                        </button>
                                    ))}
                                </div>

                                <div className="space-y-8">
                                    {/* Amount Input */}
                                    <div>
                                        <div className="flex justify-between items-center mb-4">
                                            <label className="text-gray-600 dark:text-gray-300 font-medium">
                                                {calcType === 'sip' ? 'Monthly Investment' : 'Total Investment'}
                                            </label>
                                            <div className="relative group">
                                                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 font-bold">₹</span>
                                                <input
                                                    type="number"
                                                    value={amount}
                                                    onChange={(e) => handleInputChange(setAmount, e.target.value)}
                                                    className="w-32 bg-gray-50 dark:bg-slate-700 border border-gray-200 dark:border-slate-600 rounded-lg py-1 px-3 pl-7 text-right font-bold text-primary focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                                                />
                                            </div>
                                        </div>
                                        <input
                                            type="range" min={calcType==='sip'?500:5000} max={calcType==='sip'?100000:1000000} step={500}
                                            value={amount || 0} onChange={(e) => setAmount(Number(e.target.value))}
                                            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary"
                                        />
                                    </div>

                                    {/* Rate Input */}
                                    <div>
                                        <div className="flex justify-between items-center mb-4">
                                            <label className="text-gray-600 dark:text-gray-300 font-medium">Expected Annual Return (%)</label>
                                            <div className="relative">
                                                <input
                                                    type="number"
                                                    value={rate}
                                                    onChange={(e) => handleInputChange(setRate, e.target.value)}
                                                    className="w-24 bg-gray-50 dark:bg-slate-700 border border-gray-200 dark:border-slate-600 rounded-lg py-1 px-3 pr-8 text-right font-bold text-primary focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                                                />
                                                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 font-bold">%</span>
                                            </div>
                                        </div>
                                        <input
                                            type="range" min="1" max="30" step="0.5"
                                            value={rate || 0} onChange={(e) => setRate(Number(e.target.value))}
                                            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary"
                                        />
                                    </div>

                                    {/* Years Input */}
                                    <div>
                                        <div className="flex justify-between items-center mb-4">
                                            <label className="text-gray-600 dark:text-gray-300 font-medium">Investment Duration</label>
                                            <div className="relative">
                                                <input
                                                    type="number"
                                                    value={years}
                                                    onChange={(e) => handleInputChange(setYears, e.target.value)}
                                                    className="w-24 bg-gray-50 dark:bg-slate-700 border border-gray-200 dark:border-slate-600 rounded-lg py-1 px-3 pr-10 text-right font-bold text-primary focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                                                />
                                                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 font-bold text-xs">Yrs</span>
                                            </div>
                                        </div>
                                        <input
                                            type="range" min="1" max="40"
                                            value={years || 0} onChange={(e) => setYears(Number(e.target.value))}
                                            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Result Side */}
                            <div className="bg-blue-50/50 dark:bg-slate-900/50 p-8 md:p-12 flex flex-col items-center justify-center border-l border-gray-100 dark:border-white/5">
                                <div className="h-64 w-full relative mb-6">
                                    <Doughnut data={chartData} options={chartOptions} />

                                    {/* Center Text */}
                                    <div className="absolute inset-0 flex items-center justify-center flex-col pointer-events-none pb-8">
                                        <span className="text-xs text-gray-400 font-medium">Total</span>
                                    </div>
                                </div>

                                <div className="w-full space-y-3">
                                    <div className="flex justify-between items-center p-3 bg-white/80 dark:bg-slate-700/50 rounded-xl shadow-sm border border-transparent hover:border-blue-100 transition-colors">
                                        <span className="text-gray-500 dark:text-gray-300 text-sm">Invested Amount</span>
                                        <span className="font-bold text-gray-800 dark:text-white">₹ {results.invested.toLocaleString()}</span>
                                    </div>

                                    <div className="flex justify-between items-center p-3 bg-white/80 dark:bg-slate-700/50 rounded-xl shadow-sm border-l-4 border-primary">
                                        <span className="text-gray-500 dark:text-gray-300 text-sm">Est. Returns</span>
                                        <span className="font-bold text-primary">₹ {results.returns.toLocaleString()}</span>
                                    </div>

                                    <div className="flex justify-between items-center pt-3 px-2">
                                        <span className="text-lg font-bold text-gray-900 dark:text-white">Total Value</span>
                                        <span className="text-2xl font-extrabold text-primary dark:text-blue-400">₹ {results.total.toLocaleString()}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 4. RECOMMENDATIONS */}
                {/*<section>*/}
                {/*    <div className="flex flex-col md:flex-row justify-between items-end mb-12">*/}
                {/*        <div className="mb-6 md:mb-0">*/}
                {/*            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Mutual Funds to Invest In</h2>*/}
                {/*            <p className="text-gray-600 dark:text-gray-300">Top performing funds curated by experts for the current fiscal year.</p>*/}
                {/*        </div>*/}
                {/*        <button className="text-primary dark:text-blue-400 font-semibold flex items-center gap-2 hover:gap-3 transition-all">*/}
                {/*            View All Funds <ArrowRight size={18}/>*/}
                {/*        </button>*/}
                {/*    </div>*/}

                {/*    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">*/}
                {/*        {fundsList.map((fund, i) => (*/}
                {/*            <FundCard key={i} fund={fund} index={i} />*/}
                {/*        ))}*/}
                {/*    </div>*/}
                {/*</section>*/}

                <section className="pb-8">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="
                            max-w-5xl mx-auto
                            relative overflow-hidden
                            rounded-3xl shadow-2xl
                            bg-gradient-to-r from-primary to-bg-dark-1
                            text-white
                            p-8 md:p-12
                        "
                    >
                        <div className="absolute bottom-0 left-0 w-40 h-40 bg-blue-500/30 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2" />

                        <div className="flex flex-col md:flex-row items-center gap-10 relative z-10">
                            <div className="relative shrink-0">
                                <div className="w-32 h-32 md:w-40 md:h-40 rounded-full p-1 bg-white/20 backdrop-blur-sm shadow-xl">
                                    <img
                                        src="/assets/profile/PujaKhot.webp"
                                        alt="Financial Expert"
                                        loading="lazy"
                                        className="w-full h-full rounded-full object-cover object-top border-4 border-white/90 bg-cover"
                                    />
                                </div>
                                <div className="absolute bottom-1 right-1 bg-green-500 text-white p-2 rounded-full border-4 border-blue-800 shadow-md">
                                    <CheckCircle size={18} />
                                </div>
                            </div>

                            <div className="flex-1 text-center md:text-left">
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/30 border border-blue-400/50 text-xs font-semibold uppercase tracking-wider mb-4">
                                    <UserCheck size={14} /> Certified Wealth Planner
                                </div>
                                <h3 className="text-3xl font-bold mb-3 leading-tight">
                                    Confused about where to invest?
                                </h3>
                                <p className="text-blue-100 text-lg mb-8 leading-relaxed max-w-xl mx-auto md:mx-0">
                                    Get a free 1-on-1 portfolio review with our senior consultant.
                                    We analyze your risk appetite and goals to build a personalized wealth strategy.
                                </p>

                                <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-6">
                                    <div className="text-left">
                                        <p className="text-xl font-bold">Puja Khot</p>
                                        {/*<p className="text-blue-300 text-sm">Financial Management and Analysis</p>*/}
                                    </div>

                                    <div className="h-10 w-px bg-white/20 hidden sm:block"></div>

                                    <a
                                        href="tel:+919969146097"
                                        className="
                                            flex items-center gap-3 px-6 py-3
                                            bg-white text-primary
                                            rounded-xl font-bold text-lg
                                            shadow-lg hover:shadow-xl hover:bg-blue-50
                                            transition-all active:scale-95
                                        "
                                    >
                                        <Phone size={20} className="fill-current" />
                                        +91 99691 46097
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </section>
            </div>
        </div>
    );
}

export default MutualFunds;