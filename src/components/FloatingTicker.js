import React, { useEffect } from "react";

const FloatingTicker = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js";
    script.async = true;
    script.innerHTML = JSON.stringify({
      symbols: [
                { proName: "BSE:SENSEX", title: "SENSEX" },
                { proName: "BSE:NIFTY", title: "NIFTY" },
                { proName: "BSE:BANKNIFTY", title: "BANKNIFTY" },
                { proName: "BSE:CNXFINANCE", title: "CNXFINANCE" },
                { proName: "BSE:ABB", title: "ABB" },
                { proName: "BSE:COFORGE", title: "COFORGE" },
                { proName: "BSE:DIVISLAB", title: "DIVISLAB" },
                { proName: "NSE:DIXON TECHNO (INDIA) LTD", title: "DIXON" },
                { proName: "BSE:HEROMOTOCO", title: "HEROMOTOCO" },
                { proName: "BSE:MARUTI", title: "MARUTI" },
                { proName: "BSE:MCX", title: "MCX" },
                { proName: "BSE:OFSS", title: "OFSS" },
                { proName: "BSE:SIEMENS", title: "SIEMENS" },
                { proName: "BSE:TRENT", title: "TRENT" },
                { proName: "BSE:ULTRACEMCO", title: "ULTRATECH" },
                { proName: "BSE:NAUKRI", title: "NAUKRI" }
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
