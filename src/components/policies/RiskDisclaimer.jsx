import React from "react";

const RiskDisclaimer = () => {
    const sections = [
        {
            title: "Risks Associated with Stock Market Trading\n",
            paragraphs: [
                "Trading STOCK MARKET can be a challenging and potentially profitable opportunity for investors/traders. However, before deciding to participate in the Futures and Options market, you should carefully consider your investment objectives, level of experience, and risk appetite. Most importantly, do not invest money you cannot afford to lose and NEVER OVERTRADE.\n",
                "There is a considerable exposure to risk in capital markets trading. Any trading involving stocks/securities/currencies/commodities involves risks including, but not limited to, the potential for changing political and/or economic conditions that may substantially affect the price or liquidity of a stock/security/currency/commodity. Investments in capital markets speculation may also be susceptible to sharp rises and falls as the relevant market values fluctuate. The leveraged nature of FUTURES AND OPTIONS TRADING means that any market movement will have an equally proportional effect on your deposited funds. This may work against you as well as for you. Not only may investors/traders get back less than they invested, but in the case of higher risk strategies, investors/traders may lose the entirety of their investment. It is for this reason that when speculating in such markets it is advisable to use only risk capital.\n"
            ]
        },
        {
            title: "Risk Disclaimer\n",
            paragraphs: [
                "Trading Derivatives markets on margin carries a high level of risk, and may not be suitable for all investors/traders. Past performance is not indicative of future results. The high degree of leverage can work against you as well as for you. Before deciding to invest in markets you should carefully consider your investment objectives, level of experience, and risk appetite. The possibility exists that you could sustain a loss of some or all of your initial investment and therefore you should not invest money that you cannot afford to lose. You should be aware of all the risks associated with markets trading, and seek advice from an independent financial advisor if you have any doubts."
            ]
        },
        {
            title: "Intellectual Property\n",
            paragraphs: [
                "The student acknowledges that all information, whether in the form presentations, software, notes, books, course materials, in any form, including process followed in imparting training, methodology & process used during the training program are the intellectual property of FORTUNE ADVISORZ and shall not be copied."
            ]
        },
        {
            title: "Non-Compete Agreement\n",
            paragraphs: [
                "We are more than happy to welcome our students to learn and trade into the market. If a student starts a new venture similar to FORTUNE ADVISORZ within two years of learning the program, the student would be punishable under the contract act. It would be stated as abusing confidential information, secret or sensitive information, business practices, upcoming products and marketing plans about FORTUNE ADVISORZ."
            ]
        },
        {
            title: "Risks Associated with Futures And Options Trading\n",
            paragraphs: [
                "Futures and Options involve substantial risk and are not suitable for all investors/traders. Futures and Options investors/traders may lose the entire amount of their investment in a relatively short period of time. It is possible to owe more than you have invested in your brokerage account. Please be aware of your broker’s requirements for trading Futures and Options. Before you decide to invest in the Futures and Options market you should carefully consider your investment objectives, level of experience, and risk appetite. The possibility exists that you could sustain a substantial loss which could total more than your initial investment in a short period of time. Therefore you should not invest money that you cannot afford to lose. If you have any questions or concerns regarding the risks associated with Futures & Options trading, you should confer with a trusted and reliable independent financial advisor. None of the information provided by FORTUNE ADVISORZ, constitutes a solicitation to trade any investment or security of any kind.\n",
                "FORTUNE ADVISORZ and/or its personnel may or may not own positions and/or trade any securities that are the subject of the education and subsequent information we provide. FORTUNE ADVISORZ is not affiliated with nor do we have any relationship with any brokers that you may open an account with, though we can help you with a list of brokers.\n",
                "Past performance is not indicative of future results. You acknowledge and agree that no promise or guarantee of success or profitability has been made between you and FORTUNE ADVISORZ. Testimonials as presented may not be representative of all reasonably comparative students.\n"
            ]
        },
        {
            title: "Electronic Trading Risks\n",
            paragraphs: [
                "Before you engage in transactions using an electronic system, you should carefully review the rules and regulations of the exchanges offering the system and/or listing the instruments you intend to trade. Online trading has inherent risk due to system response and access times that may vary due to market conditions, system performance, and other factors. You should understand these and additional risks before trading."
            ]
        },
        {
            title: "FORTUNE ADVISORZ Market Opinions\n",
            paragraphs: [
                "Any opinions, news, research, analyses, prices, or other information offered by FORTUNE ADVISORZ, is provided as general market commentary, and does not constitute investment advice. FORTUNE ADVISORZ will not accept liability for any loss or damage, including without limitation to, any loss of profit, which may arise directly or indirectly from use of or reliance on such information.",
                "Under no circumstances will FORTUNE ADVISORZ be responsible or liable in any way for any content, including but not limited to, any errors or omissions in the content, or for any injury, death, loss or damage of any kind sustained by any person as a result of any content communicated on this website/Facebook page, whether by FORTUNE ADVISORZ or a third party.",
                "In no event shall FORTUNE ADVISORZ be liable for any special, indirect or consequential damages or any damages whatsoever resulting from loss of use, data or profits arising out of or in connection with the availability, use or performance of any information communicated on this website/Facebook page.\n",
                "We understand before enrolling to our program/course you have gone through all our terms & conditions. Above all the terms & conditions are applicable to all our online & offline programs/courses.\n"
            ]
        }
    ];

    return (
        <section
            className="
                w-full min-h-screen py-28 px-4 sm:px-10 lg:px-20
                bg-gradient-to-b
                from-bg-light-1 to-bg-light-2
                dark:from-bg-dark-1 dark:to-bg-dark-2
            "
        >
            <div className="w-[95%] md:w-[85%] lg:w-[70%] mx-auto">

                {/* HEADER */}
                <div className="text-center mb-10">
                    <h1 className="text-4xl sm:text-5xl font-bold text-primary dark:text-secondary">
                        Risk Disclaimer
                    </h1>
                    <p className="mt-4 text-dark/60 dark:text-light/60 text-base sm:text-lg max-w-2xl mx-auto">
                        Read carefully. Trading involves substantial risks including potential capital loss.
                    </p>
                </div>

                {/* DISCLAIMER CARD */}
                <div
                    className="
                        p-6 sm:p-8 rounded-2xl
                        bg-white dark:bg-dark
                        border border-dark/10 dark:border-light/10
                        shadow-lg space-y-10
                    "
                >
                    {sections.map((sec, idx) => (
                        <div key={idx} className="space-y-3">
                            <h3 className="text-lg sm:text-xl font-semibold text-primary dark:text-secondary">
                                {sec.title}
                            </h3>
                            {sec.paragraphs.map((p, i) => (
                                <p
                                    key={i}
                                    className="text-sm sm:text-base leading-relaxed text-dark/80 dark:text-light/70"
                                >
                                    {p}
                                </p>
                            ))}
                        </div>
                    ))}
                </div>

                {/* FOOT NOTE */}
                <p className="mt-10 text-center text-sm text-dark/60 dark:text-light/60">
                    By accessing this platform, you acknowledge and accept this Risk Disclaimer.
                </p>
            </div>
        </section>
    );
};

export default RiskDisclaimer;
