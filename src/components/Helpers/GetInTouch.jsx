import React from 'react'
import {motion} from "framer-motion";
import {ArrowRight} from "lucide-react";
import {useNavigate} from "react-router-dom";

const GetInTouch = () => {
    const navigate = useNavigate();

    return (
        <section className="pb-20 pt-18 px-4">
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="
                        max-w-5xl mx-auto relative rounded-3xl overflow-hidden
                        bg-gradient-to-r from-primary to-bg-dark-1
                        text-light text-center py-16 px-6 md:px-12 shadow-2xl
                    "
            >
                {/* Background Pattern */}
                <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] pointer-events-none" />

                <div className="relative z-10 flex flex-col items-center gap-6">
                    <h2 className="text-3xl md:text-5xl font-bold">Ready to Work With Us?</h2>
                    <p className="text-lg md:text-xl text-light max-w-2xl">
                        Contact us today to discuss how we can help you achieve your goals.
                    </p>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="
                                mt-4 px-8 py-4 bg-bg-light-1 text-primary font-bold rounded-full
                                shadow-lg hover:shadow-xl hover:bg-gray-100 transition-all
                                flex items-center gap-2
                            "
                        onClick={() => navigate("/contact")}
                    >
                        Get Started Now <ArrowRight className="w-5 h-5" />
                    </motion.button>
                </div>
            </motion.div>
        </section>
    )
}
export default GetInTouch
