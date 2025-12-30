import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Plus,
    Minus,
    Search,
    MessageCircleQuestionMark
} from "lucide-react";
import Divider from "../Helpers/Divider";
import {fadeUp} from "../Helpers/Transitions";

const FAQ = () => {
    const [search, setSearch] = useState("");
    const [activeFilter, setActiveFilter] = useState("All");
    const [openIndex, setOpenIndex] = useState(null);

    const filters = ["All", "Services", "Trading", "Courses", "Payment", "Support"];

    const faqs = [
        {
            category: "Services",
            q: "What services does your company provide?",
            a: "We offer professional forex trading education, stock market education, crypto trading education, and financial literacy training. Our mission is to help individuals understand global markets and build long-term financial skills.",
        },
        {
            category: "Trading",
            q: "Do you guarantee profits from trading?",
            a: "No. Forex, stock market, and crypto trading all involve risk. We do not guarantee profits. Our goal is to provide you with knowledge, strategies, and risk-management skills to make better trading decisions.",
        },
        {
            category: "Trading",
            q: "Do you help students open trading accounts?",
            a: "We guide students on how to choose regulated brokers and exchanges for forex, stocks, and crypto. However, opening and managing the account is the student’s responsibility. We do not handle funds or execute trades on behalf of clients.",
        },
        {
            category: "Courses",
            q: "Do I need previous trading experience to join?",
            a: "No. We offer programs for beginners, intermediate, and advanced levels. You will be guided based on your trading experience.",
        },
        {
            category: "Courses",
            q: "How are your courses delivered?",
            a: "We provide online classes, one-on-one online mentorship, and recorded modules. You can choose the learning format that suits you best.",
        },
        {
            category: "Courses",
            q: "Do you offer personal mentorship?",
            a: "Yes. We provide one-on-one online mentorship programs that include strategy development, market analysis guidance, and personalized support.",
        },
        {
            category: "Payment",
            q: "What payment methods do you accept?",
            a: "We accept multiple payment methods including bank transfer, credit/debit cards, crypto payments, and online payment gateways.",
        },
        {
            category: "Payment",
            q: "Can I get a refund if I am not satisfied?",
            a: "Our refund policy varies depending on the course. Please review our Refund & Cancellation Policy or contact support for more details.",
        },
        {
            category: "Support",
            q: "How can I contact your support team?",
            a: "You can reach us via email, phone, WhatsApp, or the contact form on our website for course details, pricing, or general inquiries.",
        },
    ];

    const filteredFAQs = faqs.filter(f =>
        (activeFilter === "All" || f.category === activeFilter) &&
        f.q.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <section
            id="faq"
            className="
                relative w-full py-20 px-4 sm:px-8 md:px-12 overflow-hidden
            "
        >
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-4xl mx-auto relative z-10">

                {/* HEADER */}
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary dark:text-secondary text-xs font-bold tracking-wider uppercase mb-5"
                    >
                        <MessageCircleQuestionMark size={14} />
                        Help Center
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-3xl sm:text-5xl lg:text-6xl font-bold text-dark dark:text-light"
                    >
                        Frequently Asked Questions
                    </motion.h2>
                    <motion.p variants={fadeUp} className="text-neutral-500 dark:text-neutral-400 text-lg max-w-2xl mx-auto mt-7">
                        Find answers to common questions about our mentorship, trading strategies, and policies.
                    </motion.p>
                </div>

                {/* CONTROLS (Search & Filter) */}
                <div className="mb-12 space-y-6">
                    {/* Search Bar */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="relative max-w-lg mx-auto"
                    >
                        <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-neutral-400">
                            <Search size={20} />
                        </div>
                        <input
                            type="text"
                            placeholder="Search keywords..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="
                                w-full pl-12 pr-6 py-4 rounded-2xl
                                bg-neutral-50 dark:bg-neutral-900
                                border border-neutral-200 dark:border-neutral-800
                                text-neutral-900 dark:text-white
                                placeholder:text-neutral-400
                                focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary
                                transition-all duration-300 shadow-sm
                            "
                        />
                    </motion.div>

                    {/* Filter Tabs */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="flex flex-wrap justify-center gap-2 sm:gap-3"
                    >
                        {filters.map((f) => (
                            <button
                                key={f}
                                onClick={() => setActiveFilter(f)}
                                className={`
                                    px-4 py-2 rounded-full text-sm font-medium transition-all duration-300
                                    ${activeFilter === f
                                    ? "bg-primary text-white shadow-lg shadow-primary/25"
                                    : "bg-transparent text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800"
                                }
                                `}
                            >
                                {f}
                            </button>
                        ))}
                    </motion.div>
                </div>

                {/* FAQ LIST */}
                <motion.div
                    layout
                    className="space-y-4"
                >
                    {filteredFAQs.map((item, i) => (
                        <FAQItem
                            key={i}
                            index={i}
                            q={item.q}
                            a={item.a}
                            openIndex={openIndex}
                            setOpenIndex={setOpenIndex}
                        />
                    ))}

                    {filteredFAQs.length === 0 && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-center py-12"
                        >
                            <p className="text-neutral-500 dark:text-neutral-400">
                                No questions found matching "{search}".
                            </p>
                            <button
                                onClick={() => { setSearch(""); setActiveFilter("All"); }}
                                className="mt-2 text-primary font-semibold hover:underline"
                            >
                                Clear filters
                            </button>
                        </motion.div>
                    )}
                </motion.div>
            </div>
        </section>
    );
};

export default FAQ;

/* SINGLE FAQ ITEM */

function FAQItem({ index, q, a, openIndex, setOpenIndex }) {
    const isOpen = openIndex === index;

    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4 }}
            className={`
                group rounded-2xl overflow-hidden cursor-pointer
                border transition-all duration-300
                ${isOpen
                ? "bg-white dark:bg-neutral-900 border-primary/30 dark:border-primary/30 shadow-lg shadow-primary/5"
                : "bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-800 hover:border-primary/20"
            }
            `}
            onClick={() => setOpenIndex(isOpen ? null : index)}
        >
            {/* Header / Question */}
            <div className="flex justify-between items-center p-6">
                <p className={`
                    text-lg font-semibold pr-8 transition-colors duration-300
                    ${isOpen ? "text-primary dark:text-secondary" : "text-neutral-900 dark:text-white"}
                `}>
                    {q}
                </p>

                <div className={`
                    flex items-center justify-center w-8 h-8 rounded-full transition-all duration-300
                    ${isOpen
                    ? "bg-primary text-white rotate-180"
                    : "bg-neutral-100 dark:bg-neutral-800 text-neutral-500 group-hover:bg-primary/10 group-hover:text-primary"
                }
                `}>
                    {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                </div>
            </div>

            {/* Body / Answer */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                        <div className="px-6 pb-6 pt-0">
                            <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed border-t border-dashed border-neutral-200 dark:border-neutral-800 pt-4">
                                {a}
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}