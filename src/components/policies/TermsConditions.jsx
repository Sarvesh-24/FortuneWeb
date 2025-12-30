import React from "react";

const TermsConditions = () => {

    const paragraphs = [
        `The terms and conditions are governed by the provisions of Indian laws, including, but not limited to the Indian Contract Act, 1872; the Information Technology Act, 2000; the rules, regulations, guidelines and clarifications framed thereunder, including the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Information) Rules, 2011 (“SPI Rules”) and; the Information Technology (Intermediaries Guidelines) Rules, 2011 (“IG Rules”).`,

        `All orders placed by the users on the FORTUNE ADVISORZ platforms are subject to the availability of such products, FORTUNE ADVISORZ Crew’s acceptance of the user’s offer and the user’s continued adherence to the terms and conditions and other policies. FORTUNE ADVISORZ Crew may, at any time and without having to service any prior notice to you: (i) upgrade, update, change, modify, or improve the services or a part of the Services in a manner it may deem fit.`,

        `We request you to read through the terms and conditions carefully. These constitute a legal agreement that you will enter into, and shall apply to any interactions or purchases made through this website, hence, affecting your rights.`,
    ];

    return (
        <section
            className="
                w-full py-28 px-4 sm:px-10 lg:px-20
                bg-gradient-to-b
                from-bg-light-1 to-bg-light-2
                dark:from-bg-dark-1 dark:to-bg-dark-2
            "
        >
            <div className="w-[95%] md:w-[80%] lg:w-[65%] mx-auto">

                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl sm:text-5xl font-bold text-primary dark:text-secondary">
                        Terms & Conditions
                    </h1>
                    <p className="mt-4 text-dark/60 dark:text-light/60 text-sm sm:text-base max-w-2xl mx-auto">
                        Please read carefully before using our services.
                    </p>
                </div>

                {/* Content Card */}
                <div
                    className="
                        p-6 sm:p-8 rounded-2xl
                        bg-white dark:bg-dark
                        border border-dark/10 dark:border-light/10
                        shadow-lg space-y-6
                    "
                >
                    {paragraphs.map((text, index) => (
                        <p
                            key={index}
                            className="text-dark/80 dark:text-light/70 text-sm sm:text-base leading-relaxed"
                        >
                            {text}
                        </p>
                    ))}
                </div>

                {/* Footer Note */}
                <p className="mt-10 text-center text-sm text-dark/50 dark:text-light/50">
                    By using our platform, you automatically accept these terms.
                </p>
            </div>
        </section>
    );
};

export default TermsConditions;
