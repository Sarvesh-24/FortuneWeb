import React from "react";

const PrivacyPolicy = () => {
    const sections = [
        {
            title: "Privacy and Security\n",
            text: `Privacy and security of your personal information is our priority. FORTUNE ADVISORZ Crew assures you that the user or customer information and details collected through accessing, using, and browsing the website, is safe, secured, and fully compliant with prevailing laws of India. All payment transactions are made only through encrypted SSL technology.`
        },
        {
            title: "Note",
            text: `Our privacy policy is subject to change without prior notice. Please review this policy periodically in order to stay updated. Further, this privacy statement does not extend to the services provided by our business partners, affiliates, or the designers we have collaborated with. Please review the privacy statements of the other parties with whom you may interact.`
        },
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

                {/* Page Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl sm:text-5xl font-bold text-primary dark:text-secondary">
                        Privacy Policy
                    </h1>
                </div>

                {/* Content */}
                <div
                    className="
                        p-6 sm:p-10 rounded-2xl
                        bg-white dark:bg-dark
                        border border-dark/10 dark:border-light/10
                        shadow-lg space-y-8
                    "
                >
                    {sections.map((item, idx) => (
                        <div key={idx} className="space-y-2">
                            <h3 className="text-lg sm:text-xl font-semibold text-secondary dark:text-primary">
                                {item.title}
                            </h3>
                            <p className="text-dark/80 dark:text-light/70 text-sm sm:text-base leading-relaxed">
                                {item.text}
                            </p>
                        </div>
                    ))}
                </div>

                <p className="mt-10 text-center text-sm text-dark/50 dark:text-light/50">
                    Your continued use of the platform constitutes acceptance of this policy.
                </p>
            </div>
        </section>
    );
};

export default PrivacyPolicy;
