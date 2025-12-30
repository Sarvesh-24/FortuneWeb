import React from "react";
import { motion } from "framer-motion";
import {
    MapPin,
    Mail,
    Phone,
} from "lucide-react";
import {FaLinkedinIn, FaXTwitter, FaInstagram, FaYoutube, FaFacebookF, FaTelegram} from "react-icons/fa6";


const Footer = () => {
    const currentYear = new Date().getFullYear();

    const socials = [
        { icon: FaFacebookF, link: "https://www.facebook.com/fortuneadvisorz/" },
        { icon: FaInstagram, link: "https://www.instagram.com/fortune_advisorz/" },
        { icon:FaTelegram, link: "https://t.me/FortuneSignals369"},
        { icon: FaXTwitter, link: "https://x.com/Parthas08744406" },
        { icon: FaLinkedinIn, link: "https://in.linkedin.com/company/fortuneadvisorz" },
        { icon: FaYoutube, link: "https://www.youtube.com/@parthasarathyrs7193" },
    ];
    return (
        <footer className="relative w-full bg-bg-dark-1 text-light overflow-hidden font-poppins">


            <div className="w-full pt-16 md:pt-20 pb-12 px-6 sm:px-10 md:px-12 lg:px-16 xl:px-20">
                <div
                    className="
                        max-w-[1440px] mx-auto
                        grid grid-cols-1
                        md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-12
                        gap-10 md:gap-y-12 md:gap-x-8 lg:gap-10 xl:gap-8
                    "
                >

                    {/* COL 1: BRANDING */}
                    <div
                        className="
                            space-y-6 md:space-y-8
                            md:col-span-2 lg:col-span-4 xl:col-span-4
                        "
                    >
                        {/* LOGO */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="h-[6rem] sm:h-[7rem] md:h-[8.8rem] w-auto relative"
                        >
                            {/* Light Mode Logo */}
                            <img
                                src="/assets/logo/FA_Light_Logo_TM.png"
                                alt="Fortune Signals Logo Light"
                                className="h-full w-auto object-contain block dark:hidden transition-transform duration-300 origin-left"
                            />

                            {/* Dark Mode Logo */}
                            <img
                                src="/assets/logo/FA_Dark_Logo_TM.png"
                                alt="Fortune Signals Logo Dark"
                                className="h-full w-auto object-contain hidden dark:block transition-transform duration-300 origin-left"
                            />
                        </motion.div>


                        <p className="text-light/60 text-sm leading-7 max-w-sm">
                            Empowering traders with time-based mentorship that adapts to all market conditions. Simplify your trading journey with Fortune Signals.
                        </p>

                        {/* SOCIAL ICONS */}
                        <div className="flex flex-wrap items-center gap-3">
                            {socials.map((item, i) => (
                                <motion.a
                                    key={i}
                                    href={item.link}
                                    whileHover={{ y: -3, backgroundColor: "#00619F", borderColor: "#00619F" }}
                                    className="
                                        group flex items-center justify-center
                                        w-9 h-9 rounded-full
                                        border border-light/10 bg-white/5
                                        text-light/70 hover:text-white
                                        transition-all duration-300
                                    "
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <item.icon size={16} />
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* COL 2: COMPANY */}
                    <div className="lg:col-span-1 xl:col-span-2">
                        <FooterColumn
                            title="Company"
                            links={[
                                { label: "About Us", url: "#about" },
                                { label: "Our Services", url: "#services" },
                                { label: "Meet the Team", url: "#team" },
                                { label: "Book a Session", url: "/#book" },
                            ]}
                        />
                    </div>


                    {/* COL 3: LEGAL */}
                    <div className="lg:col-span-1 xl:col-span-2">
                        <FooterColumn
                            title="Legal"
                            links={[
                                { label: "Risk Disclaimer", url: "/policies/risk-disclaimer" },
                                { label: "Terms & Conditions", url: "/policies/terms-and-conditions" },
                                { label: "Privacy Policy", url: "/policies/privacy-policy" },
                                { label: "Refund Policy", url: "/policies/refund-policy" },
                            ]}
                        />
                    </div>

                    {/* COL 4: HELP */}
                    <div className="lg:col-span-1 xl:col-span-2">
                        <FooterColumn
                            title="Helpful Links"
                            links={[
                                { label: "FAQ", url: "/#faq" },
                                { label: "Feedbacks", url: "/testimonials" },
                                { label: "Book", url: "/#book" },
                                { label: "Contact Us", url: "#contact" },
                            ]}
                        />
                    </div>

                    {/* COL 5: CONTACT INFO */}
                    <div className="lg:col-span-1 xl:col-span-2">
                        <FooterContact />
                    </div>

                </div>
            </div>

            {/* BOTTOM COPYRIGHT BAR */}
            <div className="w-full bg-bg-dark-2 border-t border-light/5">
                <div className="max-w-[1440px] mx-auto px-6 sm:px-10 md:px-12 lg:px-16 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs sm:text-sm text-light/40">

                    <div className="text-center md:text-left">
                        <p>© {currentYear} Fortune Advisorz. All Rights Reserved.</p>
                    </div>

                    <div className="flex items-center gap-6">
                        <a href="/policies/terms-and-conditions" className="hover:text-primary transition-colors">Terms</a>
                        <span className="hidden sm:inline opacity-30">|</span>
                        <p>
                            Designed by <span className="font-semibold text-primary/80">FORTUNE NOVEM</span>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

function FooterContact() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
        >
            <h4 className="text-lg font-semibold text-white tracking-wide">Contact Us</h4>

            <div className="space-y-4 text-light/70">
                <div className="space-y-5">
                    <ContactItem
                        icon={MapPin}
                        text="3903, 39th Floor, Kohinoor Square, Dadar West, 400028"
                        href="https://maps.app.goo.gl/BLGe3qoBhqef4tb26"
                    />
                    <ContactItem
                        icon={Mail}
                        text="info@fortuneadvisorz.com"
                        href="mailto:info@fortuneadvisorz.com"
                    />
                    <ContactItem
                        icon={Phone}
                        text="+91 9699613407"
                        href="tel:+919699613407"
                    />
                </div>
            </div>
        </motion.div>
    );
}

/*FOOTER COLUMN */

function FooterColumn({ title, links }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.2, once: true }}
            className="space-y-4 md:space-y-6"
        >
            <h4 className="text-lg font-semibold text-white tracking-wide">{title}</h4>
            <ul className="space-y-2 md:space-y-3">
                {links.map((link, i) => (
                    <li key={i}>
                        <a
                            href={link.url}
                            className="
                                group flex items-center gap-2
                                text-sm text-light/60 hover:text-primary
                                transition-colors duration-300
                            "
                        >
                            {/* Subtle hover indicator line */}
                            <span className="w-0 h-[1px] bg-primary transition-all duration-300 group-hover:w-2 opacity-0 group-hover:opacity-100" />
                            <span className="transform transition-transform duration-300 group-hover:translate-x-1">
                                {link.label}
                            </span>
                        </a>
                    </li>
                ))}
            </ul>
        </motion.div>
    );
}

/* CONTACT ITEM */

function ContactItem({ icon: Icon, text, href }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start gap-3 md:gap-4 group"
        >
            <div className="
                flex-shrink-0 w-8 h-8 rounded-lg
                bg-white/5 border border-light/10
                flex items-center justify-center
                text-primary group-hover:bg-primary group-hover:text-white group-hover:border-primary
                transition-all duration-300 mt-[-2px]
            ">
                <Icon size={16} />
            </div>
            <span className="text-sm text-light/60 group-hover:text-light transition-colors leading-relaxed break-all sm:break-normal">
                {text}
            </span>
        </a>
    );
}