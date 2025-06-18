import React, { useEffect } from "react";

const FloatingTicker = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js";
    script.async = true;
    script.innerHTML = JSON.stringify({
      symbols: [
        {
          proName: "FOREXCOM:SPXUSD",
          title: "S&P 500 Index"
        },
        {
          proName: "FOREXCOM:NSXUSD",
          title: "US 100 Cash CFD"
        },
        {
          proName: "FX_IDC:EURUSD",
          title: "EUR to USD"
        },
        {
          proName: "BITSTAMP:BTCUSD",
          title: "Bitcoin"
        },
        {
          proName: "BITSTAMP:ETHUSD",
          title: "Ethereum"
        }
      ],
      showSymbolLogo: true,
      isTransparent: false,
      displayMode: "adaptive",
      colorTheme: "light",
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
      // className="fixed bottom-4 right-4 w-[350px] h-[60px] z-50 rounded-md overflow-hidden shadow-lg"
      // className="fixed bottom-0 left-0 w-full h-[40px] z-50 shadow-md bg-white dark:bg-black"
       className="fixed top-0 left-0 w-full h-[40px] z-50 shadow-md bg-white dark:bg-black"
    >
      {/* TradingView widget script will be injected here */}
    </div>
  );
};

export default FloatingTicker;
