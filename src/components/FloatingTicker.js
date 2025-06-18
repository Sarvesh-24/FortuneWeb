import React, { useEffect } from "react";

const FloatingTicker = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
    script.async = true;
    script.innerHTML = JSON.stringify({
      symbols: [
        {
          proName: "BSE:SENSEX",
          title: "Sensex",
        },
        {
          proName: "NSE:NIFTY",
          title: "Nifty 50",
        },
        {
          proName: "NSE:BANKNIFTY",
          title: "Bank Nifty",
        },
      ],
      colorTheme: "light", // or "dark"
      isTransparent: true,
      displayMode: "adaptive",
      locale: "en",
    });

    const container = document.getElementById("tv-ticker-container");
    if (container && container.children.length === 0) {
      container.appendChild(script);
    }
  }, []);

  return (
    <div
      id="tv-ticker-container"
      className="fixed bottom-4 right-4 z-50 w-[350px] h-[60px] rounded-lg overflow-hidden shadow-lg border border-gray-300"
    ></div>
  );
};

export default FloatingTicker;
