import React from "react";

const RefundPolicy = () => {
    const sections = [
        {
            title: "Refund Policy\n",
            text: `All sales on FORTUNE ADVISORZ are final. No cancellation, No Refunds, under any circumstances or of whatsoever nature. We strongly recommend that before payment, our visitors should:`,
            points: [
                "Read all information about our products, services, and support given to our clients.",
                "Evaluate the quality of our services by way of sample reports/live reports/historical performance reports made available for registered unpaid users.\n",
                "Read all About Us and our Team. Read about Services offered, Frequently Asked Questions (FAQ’s).",
                "Read Terms of Use/Privacy Policy/Disclaimer/Disclosure in details. I confirm that I have read the Essential Legal Information and the Privacy Policy and agree to abide by same.\n"
            ],
        },
        {
            title: "Cancellation Policy\n",
            text: `Prior to buying or selling an option, a person must receive a copy of Characteristics and Risks of Standardized Futures and Options. Copies of this document may be obtained from your broker, from any exchange on which Futures and Options are traded, or by contacting The Futures and Options Clearing Corporation at NSE or BSE.`,
        }
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
                        Refund Policy
                    </h1>
                </div>

                {/* CONTENT CARD */}
                <div
                    className="
                        p-6 sm:p-10 rounded-2xl
                        bg-white dark:bg-dark
                        border border-dark/10 dark:border-light/10
                        shadow-lg space-y-10
                    "
                >
                    {sections.map((item, idx) => (
                        <div key={idx} className="space-y-3">
                            {item.title && (
                                <h3 className="text-lg sm:text-xl font-semibold text-secondary dark:text-primary">
                                    {item.title}
                                </h3>
                            )}

                            {item.text && (
                                <p className="text-dark/80 dark:text-light/70 text-sm sm:text-base leading-relaxed">
                                    {item.text}
                                </p>
                            )}

                            {item.points && (
                                <ul className="list-disc ml-5 space-y-2 text-dark/80 dark:text-light/70 text-sm sm:text-base leading-relaxed">
                                    {item.points.map((p, i) => (
                                        <li key={i}>{p}</li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    ))}
                </div>

                <p className="mt-10 text-center text-sm text-dark/50 dark:text-light/50">
                    Your purchase confirms acceptance of this Refund Policy.
                </p>
            </div>
        </section>
    );
};

export default RefundPolicy;
