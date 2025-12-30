import React, { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";

import {
    NavigationMenu,
    NavigationMenuList,
    NavigationMenuItem,
    NavigationMenuLink,
} from "../ui/navigation-menu";

export default function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [visible, setVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    // Prevent scroll when mobile menu open
    useEffect(() => {
        document.body.style.position = mobileOpen ? "fixed" : "";
    }, [mobileOpen]);

    // Detect scroll direction
    useEffect(() => {
        const handleScroll = () => {
            const currentY = window.scrollY;

            // Buffer to prevent flickering
            if (currentY > lastScrollY && currentY > 80) {
                setVisible(false);
            } else if (currentY < lastScrollY || currentY < 20) {
                setVisible(true);
            }

            setLastScrollY(currentY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    return (
        <>
            <header className="fixed top-0 left-0 w-full z-50 pointer-events-none pt-4 md:pt-6">
                <nav
                    className={`
        pointer-events-auto
        mx-auto
        w-[95%] md:w-[85%] lg:w-[75%]
        flex items-center justify-between
        px-4 py-2.5 md:px-5 md:py-3 
        rounded-full 
        shadow-lg shadow-black/5
        backdrop-blur-xl
        bg-white/20 dark:bg-primary/20
         dark:border-primary/50

        transition-all duration-300 ease-in-out
        ${visible ? "translate-y-0 opacity-100" : "-translate-y-20 opacity-0"}
    `}
                >
                    {/* Logo Section */}
                    <a href="/" className="flex-shrink-0 group relative overflow-hidden">
                        <div className="h-8 sm:h-9 lg:h-10 w-auto">
                            {/* Light Mode Logo */}
                            <img
                                src="/assets/logo/FA_Light_TM.png"
                                alt="Logo"
                                className="h-full w-auto object-contain block dark:hidden transition-transform duration-300 group-hover:scale-105"
                            />
                            {/* Dark Mode Logo */}
                            <img
                                src="/assets/logo/FA_Horizontal_Dark_TM.png"
                                alt="Logo Dark"
                                className="h-full w-auto object-contain hidden dark:block transition-transform duration-300 group-hover:scale-105"
                            />
                        </div>
                    </a>

                    <div className="hidden lg:flex items-center gap-1">
                        <NavigationMenu>
                            <NavigationMenuList className="flex items-center gap-1">
                                <NavItem href="/" label="Home" />
                                <NavItem href="/#about" label="About" />
                                <NavItem href="/#services" label="Services" />
                                <NavItem href="/gallery" label="Gallery" />
                                <NavItem href="/testimonials" label="Success Stories" />
                                <NavItem href="/#team" label="Team" />
                            </NavigationMenuList>
                        </NavigationMenu>

                        {/* Separator */}
                        <div className="h-6 w-px bg-zinc-200 dark:bg-zinc-800 mx-2" />

                        {/* CTA Button */}
                        <a
                            href="/#contact"
                            className="
                                group flex items-center gap-2
                                bg-primary dark:bg-bg-light-1
                                text-white dark:text-primary
                                px-5 py-2 rounded-full
                                text-sm font-semibold tracking-wide
                                hover:bg-zinc-800 dark:hover:bg-zinc-200
                                transition-all duration-300
                                shadow-md hover:shadow-xl
                            "
                        >
                            Contact
                            <ArrowRight size={16} className="-ml-1 transition-transform group-hover:translate-x-1" />
                        </a>
                    </div>

                    <button
                        className="
                            lg:hidden
                            p-2 rounded-full
                            text-zinc-700 dark:text-zinc-200
                            hover:bg-zinc-100 dark:hover:bg-zinc-800
                            transition-colors
                        "
                        onClick={() => setMobileOpen(true)}
                        aria-label="Open Menu"
                    >
                        <Menu size={24} />
                    </button>
                </nav>
            </header>

            {/* FULLSCREEN Mobile Menu Overlay */}
            <div
                className={`
                    fixed inset-0 z-[100]
                    bg-white/95 dark:bg-zinc-950/95 backdrop-blur-xl
                    transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]
                    ${mobileOpen ? "opacity-100 visible" : "opacity-0 invisible delay-200"}
                    overflow-y-auto 
                `}
            >
                {/* Close Button */}
                <button
                    className="absolute top-6 right-6 sm:top-8 sm:right-8 p-2 text-zinc-800 dark:text-zinc-200 hover:rotate-90 transition-transform duration-300"
                    onClick={() => setMobileOpen(false)}
                    aria-label="Close Menu"
                >
                    <X size={32} />
                </button>

                {/* Mobile Links Container */}
                <div className="flex flex-col items-center justify-center min-h-full py-10 gap-8">


                    <ul className="flex flex-col items-center gap-4 sm:gap-6 text-center">
                        <MobileItem href="/" label="Home" delay="100ms" isOpen={mobileOpen} close={setMobileOpen} />
                        <MobileItem href="/#about" label="About" delay="150ms" isOpen={mobileOpen} close={setMobileOpen} />
                        <MobileItem href="/#services" label="Services" delay="200ms" isOpen={mobileOpen} close={setMobileOpen} />
                        <MobileItem href="/gallery" label="Gallery" delay="250ms" isOpen={mobileOpen} close={setMobileOpen} />
                        <MobileItem href="/testimonials" label="Success Stories" delay="300ms" isOpen={mobileOpen} close={setMobileOpen} />
                        <MobileItem href="/#team" label="Team" delay="350ms" isOpen={mobileOpen} close={setMobileOpen} />
                    </ul>

                    {/* Mobile CTA */}
                    <div
                        className={`transition-all duration-700 ${mobileOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                        style={{ transitionDelay: "400ms" }}
                    >
                        <a
                            href="/#contact"
                            onClick={() => setMobileOpen(false)}
                            className="
                                flex items-center gap-2
                                text-base sm:text-lg font-semibold
                                px-8 py-3 rounded-full
                                bg-zinc-900 dark:bg-white
                                text-white dark:text-zinc-900
                                hover:scale-105 active:scale-95
                                transition-all
                            "
                        >
                            Contact <ArrowRight size={20} />
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}

/* Desktop Item */

function NavItem({ href, label }) {
    return (
        <NavigationMenuItem>
            <NavigationMenuLink
                href={href}
                className="
                    px-3 xl:px-4 py-2 rounded-full
                    text-sm font-medium tracking-wide
                    text-zinc-600 dark:text-zinc-300
                    hover:text-zinc-900 dark:hover:text-white
                    hover:bg-zinc-100 dark:hover:bg-white/10
                    transition-all duration-200
                "
            >
                {label}
            </NavigationMenuLink>
        </NavigationMenuItem>
    );
}

/* Mobile Item */

function MobileItem({ href, label, close, isOpen, delay }) {
    return (
        <li
            className={`transition-all duration-700 ease-out ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            style={{ transitionDelay: delay }}
        >
            <a
                href={href}
                onClick={() => close(false)}
                className="
                    font-medium tracking-tight
                    text-zinc-800 dark:text-zinc-100
                    hover:text-zinc-500 dark:hover:text-zinc-400
                    transition-colors duration-200
                "
            >
                {label}
            </a>
        </li>
    );
}