import { motion } from "framer-motion";
import {FaLinkedinIn, FaInstagram, FaYoutube, FaFacebookF, FaTelegram} from "react-icons/fa6";

const FloatingSocials = () => {
    const socials = [
        { icon: <FaFacebookF size={20} />, link: "https://www.facebook.com/fortuneadvisorz/"  },
        { icon: <FaInstagram size={20} />, link:  "https://www.instagram.com/fortune_advisorz/"  },
        { icon: <FaTelegram size={20} />, link: "https://t.me/FortuneSignals369" },
        { icon: <FaLinkedinIn size={20} />, link: "https://in.linkedin.com/company/fortuneadvisorz" },
        { icon: <FaYoutube size={20} />, link: "www.youtube.com/@parthasarathyrs7193" },
    ];

    return (
        <div
            className="
                fixed -left-2 top-1/2 -translate-y-1/2
                hidden md:flex
                flex-col gap-3 z-50
            "
        >
            {socials.map((s, i) => (
                <motion.a
                    key={i}
                    href={s.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                        w-12 h-12 flex items-center justify-center
                        bg-white dark:bg-dark
                        shadow-lg border border-dark/10 dark:border-light/10
                        text-primary dark:text-white
                        rounded-r-xl
                    "
                    whileHover={{ x: 6, scale: 1.08 }}
                    transition={{ type: "spring", stiffness: 260, damping: 18 }}
                >
                    {s.icon}
                </motion.a>
            ))}
        </div>
    );
};

export default FloatingSocials;
