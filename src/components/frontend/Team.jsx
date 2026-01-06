import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowUpRight, Users } from "lucide-react";
import { teamMembers } from "../../constants/Team";
// import Divider from "../Helpers/Divider";

// Staggered Animation Variants
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
        },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const Team = () => {
    const navigate = useNavigate();

    return (
        <section
            id="team"
            className="
                relative w-full
                py-16 md:py-20 lg:py-24
                px-4 sm:px-8 md:px-12
                overflow-hidden
            "
        >
            {/* Top Decorative Line (Gradient) */}
            {/*<Divider/>*/}
            <div
                className="
                    relative z-10
                    mx-auto
                    w-full max-w-[1440px]
                    md:w-[95%] lg:w-[92%] xl:w-[85%] 2xl:w-[75%]
                "
            >

                {/* Section Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="max-w-2xl"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm w-fit mb-4">
                            <Users className="w-3 h-3 text-primary" />
                            <span className="text-xs font-bold tracking-widest text-primary uppercase">
                                Our Experts
                            </span>
                        </div>

                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-dark dark:text-light leading-[1.1]"
                        >
                            <span className="block leading-[1.2]">The Minds Behind</span>
                            <span className="block leading-[1.2] text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                                The Strategy
                            </span>
                        </motion.h2>

                        <p className="text-neutral-500 dark:text-neutral-400 text-base sm:text-lg leading-relaxed mt-4 max-w-xl">
                            A collective of institutional analysts and strategists dedicated to precision and risk management.
                        </p>
                    </motion.div>

                    {/* Desktop Button Position */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="hidden md:block"
                    >
                        <ViewAllButton onClick={() => navigate("/about/#team")} />
                    </motion.div>
                </div>

                {/* Team Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-12"
                >
                    {teamMembers.slice(0, 4).map((member, index) => (
                        <MemberCard key={index} {...member} />
                    ))}
                </motion.div>

                {/* Mobile Button Position */}
                <div className="flex md:hidden justify-center mt-6">
                    <ViewAllButton onClick={() => navigate("/about/#team")} />
                </div>
            </div>
        </section>
    );
};

// Extracted Button Component for reuse
const ViewAllButton = ({ onClick }) => (
    <button
        onClick={onClick}
        className="
            group flex items-center gap-2
            px-6 py-3 rounded-full
            border border-neutral-300 dark:border-neutral-700
            bg-primary text-light
            transition-all duration-300
            text-sm font-medium
            hover:shadow-lg hover:shadow-primary/20
        "
    >
        Meet Full Team
        <ArrowUpRight className="w-4 h-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
    </button>
);

const MemberCard = ({ image, name, role }) => {
    return (
        <motion.div
            variants={cardVariants}
            className="group relative flex flex-col h-full"
        >
            {/* Card Frame */}
            <div className="
                relative p-3 rounded-2xl
                bg-white dark:bg-neutral-900
                border border-neutral-100 dark:border-neutral-800
                shadow-sm hover:shadow-xl hover:shadow-primary/5 dark:hover:shadow-none
                transition-all duration-500
                h-full flex flex-col
            ">
                {/* Image Wrapper */}
                <div className="relative overflow-hidden rounded-xl aspect-[4/5] bg-neutral-100 dark:bg-neutral-800">
                    {/* Image */}
                    <img
                        src={image}
                        alt={name}
                        className="
                            w-full h-full object-cover object-top
                            filter
                            scale-100 group-hover:scale-105
                            transition-all duration-700 ease-out
                        "
                        loading="lazy"
                    />

                    {/* Subtle Overlay Gradient on Hover (Bottom) */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Content */}
                <div className="pt-5 pb-2 px-2 text-center sm:text-left mt-auto">
                    <h3 className="text-lg sm:text-xl font-bold text-neutral-900 dark:text-white group-hover:text-primary dark:group-hover:text-secondary transition-colors duration-300 line-clamp-1">
                        {name}
                    </h3>
                    <p className="mt-1 text-xs font-semibold tracking-widest uppercase text-neutral-500 dark:text-neutral-500 group-hover:text-neutral-700 dark:group-hover:text-neutral-400 transition-colors line-clamp-1">
                        {role}
                    </p>
                </div>
            </div>
        </motion.div>
    );
};

export default Team;