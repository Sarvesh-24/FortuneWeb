import React, { useEffect } from "react";

const FloatingTicker = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js";
    script.async = true;
    script.innerHTML = JSON.stringify({
      symbols: [

            { proName: "BSE:SENSEX", title: "SENSEX" },
            { proName: "NSE:NIFTY", title: "NIFTY" },
            { proName: "NSE:BANKNIFTY", title: "BANKNIFTY" },
            { proName: "NSE:CNXFINANCE", title: "CNXFINANCE" },
            { proName: "NSE:NIFTY_MID_SELECT", title: "NIFTY MID SELECT" },
            { proName: "NSE:ABB", title: "ABB" },
            { proName: "NSE:COFORGE", title: "COFORGE" },
            { proName: "NSE:DIVISLAB", title: "DIVISLAB" },
            { proName: "NSE:DIXON", title: "DIXON" },
            { proName: "NSE:HEROMOTOCO", title: "HEROMOTOCO" },
            { proName: "NSE:MARUTI", title: "MARUTI" },
            { proName: "NSE:MCX", title: "MCX" },
            { proName: "NSE:OFSS", title: "OFSS" },
            { proName: "NSE:SIEMENS", title: "SIEMENS" },
            { proName: "NSE:TRENT", title: "TRENT" },
            { proName: "NSE:ULTRACEMCO", title: "ULTRATECH" },
            { proName: "NSE:NAUKRI", title: "NAUKRI" }

          ],

      showSymbolLogo: true,
      isTransparent: false,
      displayMode: "adaptive",
      colorTheme: "dark",
      locale: "en"
    });

    const container = document.getElementById("tradingview-widget-container");
    if (container && container.children.length === 0) {
      container.appendChild(script);
    }
  }, []);

  return (
    <div
      id="tradingview-widget-container"
       className="fixed top-0 left-0 w-full h-[40px] z-50 shadow-md bg-white dark:bg-black"
    >
      {/* TradingView widget script will be injected here */}
    </div>
  );
};

export default FloatingTicker;
