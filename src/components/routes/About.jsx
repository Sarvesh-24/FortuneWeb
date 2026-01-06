import React, {useEffect, useState} from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Users, Target, Lightbulb, Handshake, CheckCircle2, X, Award, Briefcase, Mountain
} from "lucide-react";

import {segregatTeamMembers, teamMembers} from "../../constants/Team";
import GetInTouch from "../Helpers/GetInTouch";
import {fadeUp, scaleIn, staggerContainer} from "../Helpers/Transitions";




// --- Updated Team Data with Details ---

const Aboutus = () => {
    const [selectedMember, setSelectedMember] = useState(null);
    const [activeTab, setActiveTab] = useState("All");
    const categories = [
        "All",
        "Research & Strategy",
        "Finance Operations",
        "Engineering & Technology",
        "Sales & Growth"
    ];

    // --- LOCK SCROLL LOGIC ---
    useEffect(() => {
        if (selectedMember) {
            // Prevent scrolling when modal is open
            document.body.style.overflow = "hidden";
            document.documentElement.style.overflow = "hidden";
        } else {
            // Restore scrolling when modal is closed
            document.body.style.overflow = "";
            document.documentElement.style.overflow = "";
        }

        // Cleanup function to ensure scrolling is restored if component unmounts
        return () => {
            document.body.style.overflow = "";
            document.documentElement.style.overflow = "";
        };
    }, [selectedMember]);

    useEffect(() => {
        const hash = window.location.hash;
        if (hash) {
            const el = document.querySelector(hash);
            if (el) el.scrollIntoView({ behavior: 'smooth' });
        }
    }, []);

    return (
        <div className="w-full overflow-hidden text-dark dark:text-light py-28">

            {/* ==================== SECTION 1: WHO WE ARE ==================== */}
            <section className="relative py-20 px-4 sm:px-10 lg:px-20 max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* Left: Content */}
                    <motion.div
                        viewport={{ once: true }}
                        variants={staggerContainer}
                        className="flex flex-col gap-6"
                    >
                        <motion.div variants={fadeUp} className="inline-block px-3 py-1 w-fit text-xs font-bold tracking-wider text-primary uppercase bg-primary/10 rounded-full">
                            Who We Are
                        </motion.div>

                        <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-extrabold leading-tight">
                            Fortune <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600">Advisorz</span>
                        </motion.h2>

                        <motion.ul
                            variants={fadeUp}
                            className="space-y-4 mt-2"
                        >
                            <li className="flex items-start gap-3">
                                <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                                <span className="text-lg text-dark/80 dark:text-light/80">
                                    At <strong> Fortune Advisorz, </strong> we help struggling traders through easy and strategic, time-based trading mentorship.
                                </span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                                <span className="text-lg text-dark/80 dark:text-light/80">
                                    Our unique blend of <strong> Vedic Maths, Time Analysis, and Astrological Analysis </strong> creates an unbeatable Time Trade Technique.
                                </span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                                <span className="text-lg text-dark/80 dark:text-light/80">
                                    This technique helps traders capture big market moves in advance with the most profitable <strong> entry, exit, and stop-loss strategies. </strong>
                                </span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                                <span className="text-lg text-dark/80 dark:text-light/80">
                                    Our time-tested system works across multiple markets: <strong> Stocks, Options, Futures, Commodities, Crypto, and even Mutual Funds.</strong>
                                </span>
                            </li>
                        </motion.ul>
                        {/* Stats Cards */}
                        <motion.div variants={fadeUp} className="grid grid-cols-2 gap-4 mt-4">
                            <StatCard number="25K+" label="Traders Life Transformed" />
                            <StatCard number="33+" label="Years Of Expertise…" />
                            <StatCard number="25+" label="Years Of Experience In Serving HNI Clients" />
                            <StatCard number="18+" label="Experience in Providing Advisory Services To Mutual Fund Advisors" />
                        </motion.div>
                    </motion.div>

                    {/* Right: Image */}
                    <motion.div
                        viewport={{ once: true }}
                        variants={scaleIn}
                        className="relative"
                    >
                        <div className="absolute inset-0 bg-primary/20 blur-[80px] rounded-full -z-10" />
                        <img
                            // src="https://images.unsplash.com/photo-1707762890671-52ef6d6f51e7?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            src="/assets/bg/bgImg1.jpg"
                            alt="Team Meeting"
                            className="rounded-2xl shadow-2xl border border-white/20 dark:border-white/10 w-full object-cover h-[700px]"
                            loading="lazy"
                        />
                        {/* Floating Badge */}
                        <div className="absolute -bottom-6 -left-6 bg-white dark:bg-neutral-900 p-4 rounded-xl shadow-xl border border-primary/20 hidden md:block">
                            <div className="flex items-center gap-3">
                                <div className="bg-green-100 text-green-600 p-2 rounded-full">
                                    <Users size={20} />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500">Community</p>
                                    <p className="font-bold text-dark dark:text-light">Growing Fast</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ==================== SECTION 2: VISION & MISSION ==================== */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-10 lg:px-20">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">

                        {/* Left: Image (Order 2 on Mobile, Order 1 on Desktop) */}
                        <motion.div
                            className="order-2 lg:order-1 relative"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <img
                                src="/assets/company/company1.webp"
                                alt="Vision"
                                loading="lazy"
                                className="rounded-2xl shadow-lg w-full object-cover h-full"
                            />
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-bl-[100px] -z-10" />
                            <div className="absolute bottom-0 left-0 w-32 h-32 bg-purple-500/10 rounded-tr-[100px] -z-10" />
                        </motion.div>

                        {/* Right: Content (Order 1 on Mobile, Order 2 on Desktop) */}
                        <motion.div
                            className="order-1 lg:order-2 flex flex-col gap-10"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={staggerContainer}
                        >
                            {/* Vision Block */}
                            <motion.div variants={fadeUp} className="flex gap-5">
                                <div className="shrink-0">
                                    <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
                                        <Lightbulb size={24} />
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold mb-2">Our Vision</h3>
                                    <p className="text-dark/70 dark:text-light/70 leading-relaxed">
                                        Our vision is to transform individuals' approach to the stock market from uncertainty to confidence by providing expert guidance and proven strategies. We aim to help people navigate stock trading complexities and invest wisely for a secure financial future. With the right tools and support, anyone can become a successful investor, as we empower individuals to take control of their financial destiny and achieve long-term wealth through informed decisions.                                    </p>
                                </div>
                            </motion.div>

                            {/* Divider */}
                            <motion.div variants={fadeUp} className="w-full h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

                            {/* Mission Block */}
                            <motion.div variants={fadeUp} className="flex gap-5">
                                <div className="shrink-0">
                                    <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400">
                                        <Target size={24} />
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold mb-2">Our Mission</h3>
                                    <p className="text-dark/70 dark:text-light/70 leading-relaxed">
                                        At Fortune Advisorz, our mission is to transform how individuals perceive the stock market by providing expert guidance and empowering them with the knowledge needed to make strategic, informed decisions. We strive to help our clients build a secure financial future through effective stock market strategies and continuous education. Our goal is to promote financial independence, wealth-building, and long-term success in the stock market, ensuring that every investor has the tools they need to thrive in the ever-changing financial landscape.                                    </p>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ==================== SECTION 3: CORE VALUES ==================== */}
            <section className="py-20 px-4 sm:px-10 lg:px-20 max-w-7xl mx-auto">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Our Core Values</h2>
                    <p className="text-primary dark:text-light">
                        The principles that guide our analysis, our technology, and our relationship with you.
                    </p>
                </div>

                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    <ValueCard
                        icon={<Users className="w-6 h-6" />}
                        title="Transparency in Trading"
                        desc="We prioritize open communication and clear processes to build trust with our clients."
                        color="text-emerald-500"
                        bg="bg-emerald-500/10"
                    />
                    <ValueCard
                        icon={<Handshake className="w-6 h-6" />}
                        title="Mutual Respect in Client Relations"
                        desc="We uphold respect in every interaction, fostering lasting relationships with traders and investors."
                        color="text-orange-500"
                        bg="bg-orange-500/10"
                    />
                    <ValueCard
                        icon={<Users className="w-6 h-6" />}
                        title="Accountability in Financial Decisions"
                        desc="We take full ownership of our actions, ensuring responsible and ethical financial guidance."
                        color="text-blue-500"
                        bg="bg-blue-500/10"
                    />
                    <ValueCard
                        icon={<Target className="w-6 h-6" />}
                        title="Integrity in Financial Advisory"
                        desc="DHonesty and ethical conduct are the cornerstones of our advisory services."
                        color="text-rose-500"
                        bg="bg-rose-500/10"
                    />
                    <ValueCard
                        icon={<Lightbulb className="w-6 h-6" />}
                        title="Teamwork for Collaborative Success"
                        desc="We believe in the power of collaboration to achieve the best outcomes for our clients."
                        color="text-amber-500"
                        bg="bg-amber-500/10"
                    />
                    <ValueCard
                        icon={<Mountain  className="w-6 h-6" />}
                        title="Commitment to Quality Service"
                        desc="Delivering high-quality financial strategies that drive successful outcomes."
                        color="text-green-500"
                        bg="bg-green-500/10"
                    />
                </motion.div>
            </section>

            {/* ==================== TEAM SECTION ==================== */}
            <section id="team" className="py-20">
                <div className="max-w-[1400px] mx-auto px-4 sm:px-10 lg:px-16">

                    {/* Header */}
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-widest text-primary uppercase bg-primary/10 rounded-full"
                        >
                            Our Experts
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-5xl font-extrabold mb-4 text-neutral-900 dark:text-white"
                        >
                            Meet the Minds Behind the Charts
                        </motion.h2>
                    </div>

                    {/* Segregated Categories */}
                    {Object.entries(segregatTeamMembers).map(([category, members], catIndex) => (
                        <div key={category} className="mb-20 last:mb-0">
                            {/* Category Header */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="flex items-center gap-4 mb-10"
                            >
                                <h3 className="text-xl md:text-2xl font-bold text-neutral-800 dark:text-neutral-200 whitespace-nowrap">
                                    {category}
                                </h3>
                                <div className="h-[1px] w-full bg-neutral-200 dark:bg-white/10" />
                            </motion.div>

                            {/* Members Grid for this Category */}
                            <motion.div
                                variants={staggerContainer}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 xl:gap-8"
                            >
                                {members.map((member, index) => (
                                    <TeamCard
                                        key={index}
                                        member={member}
                                        onClick={() => setSelectedMember(member)}
                                    />
                                ))}
                            </motion.div>
                        </div>
                    ))}
                </div>
            </section>
            {/*<section id="team" className="relative py-24 overflow-hidden">*/}
            {/*    /!* Background Decorative Element *!/*/}
            {/*    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">*/}
            {/*        <div className="absolute top-24 left-1/4 w-64 h-64 bg-primary/5 blur-[120px] rounded-full"></div>*/}
            {/*    </div>*/}

            {/*    <div className="relative z-10 max-w-[1400px] mx-auto px-6 sm:px-10">*/}

            {/*        /!* Header Section *!/*/}
            {/*        <div className="text-center max-w-3xl mx-auto mb-16">*/}
            {/*            <motion.div*/}
            {/*                initial={{ opacity: 0, y: 10 }}*/}
            {/*                whileInView={{ opacity: 1, y: 0 }}*/}
            {/*                viewport={{ once: true }}*/}
            {/*                className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full bg-primary/10 border border-primary/20"*/}
            {/*            >*/}
            {/*                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>*/}
            {/*                <span className="text-xs font-bold tracking-widest text-primary uppercase">Our Experts</span>*/}
            {/*            </motion.div>*/}

            {/*            <motion.h2*/}
            {/*                initial={{ opacity: 0, y: 10 }}*/}
            {/*                whileInView={{ opacity: 1, y: 0 }}*/}
            {/*                viewport={{ once: true }}*/}
            {/*                transition={{ delay: 0.1 }}*/}
            {/*                className="text-4xl md:text-5xl font-bold mb-6 text-neutral-900 dark:text-white"*/}
            {/*            >*/}
            {/*                Meet the Minds Behind <span className="text-primary">the Charts</span>*/}
            {/*            </motion.h2>*/}
            {/*        </div>*/}

            {/*        /!* Filter Tabs - Modern Glass Style *!/*/}
            {/*        <div className="flex justify-center mb-16">*/}
            {/*            <div className="inline-flex p-1.5 bg-neutral-100 dark:bg-neutral-900/50 backdrop-blur-xl border border-neutral-200 dark:border-white/5 rounded-2xl">*/}
            {/*                {categories.map((tab) => (*/}
            {/*                    <button*/}
            {/*                        key={tab}*/}
            {/*                        onClick={() => setActiveTab(tab)}*/}
            {/*                        className={`relative px-6 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 ${*/}
            {/*                            activeTab === tab*/}
            {/*                                ? "text-white"*/}
            {/*                                : "text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white"*/}
            {/*                        }`}*/}
            {/*                    >*/}
            {/*                        {activeTab === tab && (*/}
            {/*                            <motion.div*/}
            {/*                                layoutId="activeTab"*/}
            {/*                                className="absolute inset-0 bg-primary rounded-xl shadow-lg shadow-primary/20"*/}
            {/*                                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}*/}
            {/*                            />*/}
            {/*                        )}*/}
            {/*                        <span className="relative z-10">{tab}</span>*/}
            {/*                    </button>*/}
            {/*                ))}*/}
            {/*            </div>*/}
            {/*        </div>*/}

            {/*        /!* Team Grid *!/*/}
            {/*        <motion.div*/}
            {/*            layout*/}
            {/*            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 xl:gap-8"*/}
            {/*        >*/}
            {/*            <AnimatePresence mode="popLayout">*/}
            {/*                {teamMembers*/}
            {/*                    .filter(m => activeTab === "All" || m.category === activeTab)*/}
            {/*                    .map((member) => (*/}
            {/*                        <motion.div*/}
            {/*                            key={member.name}*/}
            {/*                            layout*/}
            {/*                            initial={{ opacity: 0, scale: 0.9 }}*/}
            {/*                            animate={{ opacity: 1, scale: 1 }}*/}
            {/*                            exit={{ opacity: 0, scale: 0.9 }}*/}
            {/*                            transition={{ duration: 0.3 }}*/}
            {/*                        >*/}
            {/*                            <TeamCard member={member} />*/}
            {/*                        </motion.div>*/}
            {/*                    ))*/}
            {/*                }*/}
            {/*            </AnimatePresence>*/}
            {/*        </motion.div>*/}
            {/*    </div>*/}
            {/*</section>*/}

            {/* ==================== SECTION 4: CTA ==================== */}
            <GetInTouch />
            {/* ==================== MEMBER DETAIL MODAL ==================== */}
            <AnimatePresence>
                {selectedMember && (
                    <MemberModal
                        member={selectedMember}
                        onClose={() => setSelectedMember(null)}
                    />
                )}
            </AnimatePresence>
        </div>
    );
};

export default Aboutus;

// --- Sub Components ---

const StatCard = ({ number, label }) => (
    <div className="p-4 rounded-xl bg-light/60 dark:bg-slate-800/60 backdrop-blur-md shadow-lg border border-white/20 dark:border-white/10
                                    group hover:border-blue-500/30 text-center">
        <h4 className="text-2xl md:text-3xl font-bold text-primary">{number}</h4>
        <p className="text-xs md:text-sm text-dark/80 dark:text-light/80 uppercase tracking-wide mt-1">{label}</p>
    </div>
);

const ValueCard = ({ icon, title, desc, color, bg }) => (
    <motion.div
        variants={fadeUp}
        className="
            p-6 rounded-2xl border border-neutral-200 dark:border-neutral-800
            bg-light dark:bg-neutral-900/50 backdrop-blur-sm
            hover:shadow-lg hover:-translate-y-1 transition-all duration-300
            group
        "
    >
        <div className={`w-12 h-12 ${bg} ${color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
            {icon}
        </div>
        <h3 className="text-xl font-bold mb-2 text-secondary dark:text-light">{title}</h3>
        <p className="text-sm text-dark/80 dark:text-light/60 leading-relaxed">
            {desc}
        </p>
    </motion.div>
);

const TeamCard = ({ member, onClick }) => (
    <motion.div
        variants={fadeUp}
        onClick={onClick}
        className="
            group relative overflow-hidden rounded-2xl cursor-pointer
            bg-white dark:bg-neutral-900
            border border-neutral-200 dark:border-neutral-800
            shadow-sm hover:shadow-2xl hover:border-primary/30 transition-all duration-300
            flex flex-col h-full
        "
    >
        <div className="relative aspect-[4/5] overflow-hidden bg-gray-200">
            <img
                src={member.image}
                alt={member.name}
                loading="lazy"
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 text-primary"
            />
            {/* Overlay View Profile Button */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                 <span className="bg-white/90 text-dark px-4 py-2 rounded-full text-sm font-bold shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    View Profile
                 </span>
            </div>
        </div>
        <div className="p-5 flex flex-col flex-grow">
            <h3 className="text-[17px] font-bold text-dark dark:text-light">{member.name}</h3>
            <p className="text-sm font-medium text-primary dark:text-secondary mb-2">{member.role}</p>
            {/*<p className="text-xs text-dark/60 dark:text-light/60 leading-relaxed mt-auto line-clamp-3">*/}
            {/*    {member.bio}*/}
            {/*</p>*/}
        </div>
    </motion.div>
);

// --- New Member Modal Component ---


const MemberModal = ({ member, onClose }) => {
    // Close on backdrop click
    const handleBackdropClick = (e) => {
        if (e.target === e.currentTarget) onClose();
    };

    // Modal Animation Variants
    const modalVariants = {
        hidden: { opacity: 0, scale: 0.95, y: 20 },
        visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } },
        exit: { opacity: 0, scale: 0.95, y: 20, transition: { duration: 0.2 } }
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleBackdropClick}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md"
        >
            <motion.div
                variants={modalVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="
                    relative w-full max-w-5xl h-[85vh] md:h-auto md:max-h-[85vh]
                    bg-white dark:bg-neutral-900 rounded-3xl shadow-2xl
                    border border-white/10 dark:border-neutral-800
                    flex flex-col md:flex-row overflow-hidden
                "
            >
                {/* Close Button - Floats nicely on both mobile and desktop */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/20 hover:bg-black/40 backdrop-blur-md text-white transition-all border border-white/10"
                    aria-label="Close modal"
                >
                    <X size={20} />
                </button>

                {/* Left: Image Side (Sticky on Desktop, Proper Aspect Ratio on Mobile) */}
                <div className="w-full md:w-5/12 shrink-0 relative bg-gray-100 dark:bg-neutral-800">
                    {/*
                       Mobile: aspect-square keeps portrait photos intact.
                       Desktop: h-full covers the side panel.
                       object-top: Prevents head chopping.
                    */}
                    <div className="relative w-full aspect-[4/5] md:aspect-auto md:h-full">
                        <img
                            src={member.image}
                            alt={member.name}
                            loading="lazy"
                            className="w-full h-full object-cover object-top"
                        />

                        {/* Mobile Gradient Overlay for Text Visibility */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent md:hidden" />

                        {/* Mobile: Text Overlay */}
                        <div className="absolute bottom-0 left-0 w-full p-6 flex flex-col justify-end md:hidden">
                            <h3 className="text-3xl font-bold text-white tracking-tight">{member.name}</h3>
                            <p className="text-light text-lg font-medium opacity-90">{member.role}</p>
                        </div>
                    </div>
                </div>

                {/* Right: Content Side (Scrollable) */}
                <div className="w-full md:w-7/12 overflow-y-auto custom-scrollbar bg-white dark:bg-neutral-900">
                    <div className="p-6 md:p-10 lg:p-12 flex flex-col h-full">

                        {/* Desktop Header */}
                        <div className="hidden md:block mb-8 border-b border-gray-100 dark:border-neutral-800 pb-6">
                            <h3 className="text-4xl font-bold text-gray-900 dark:text-white tracking-tight">{member.name}</h3>
                            <p className="text-xl text-primary font-medium mt-2">{member.role}</p>
                        </div>

                        <div className="space-y-8">
                            {/* Bio */}
                            <div className="prose prose-sm md:prose-base dark:prose-invert max-w-none">
                                <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">Biography</h4>
                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed whitespace-pre-line">
                                    {member.fullBio || member.bio}
                                </p>
                            </div>

                            {/* Stats / Skills Grid */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="p-5 rounded-2xl bg-gray-50 dark:bg-neutral-800/50 border border-gray-100 dark:border-neutral-800">
                                    <div className="flex items-center gap-2 mb-3 text-primary">
                                        <Briefcase size={20} />
                                        <span className="text-xs font-bold uppercase tracking-wider">Experience</span>
                                    </div>
                                    <span className="text-lg font-semibold text-gray-900 dark:text-white block">
                                        {member.experience || "N/A"}
                                    </span>
                                </div>

                                <div className="p-5 rounded-2xl bg-gray-50 dark:bg-neutral-800/50 border border-gray-100 dark:border-neutral-800">
                                    <div className="flex items-center gap-2 mb-3 text-primary">
                                        <Award size={20} />
                                        <span className="text-xs font-bold uppercase tracking-wider">Expertise</span>
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        {member.skills ? member.skills.slice(0, 3).map((skill, i) => (
                                            <span key={i} className="text-xs font-medium bg-white dark:bg-neutral-700 text-gray-700 dark:text-gray-200 px-2.5 py-1 rounded-lg shadow-sm border border-gray-100 dark:border-neutral-600">
                                                {skill}
                                            </span>
                                        )) : <span className="text-sm text-gray-500">General</span>}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};