import React, { useEffect, useState } from 'react';
import Marquee from 'react-fast-marquee';
import axios from 'axios';

const StockTicker = () => {
  const [stocks, setStocks] = useState([]);

  const fetchStockData = async () => {
    try {
      const symbols = ['RELIANCE.NS', 'TCS.NS', 'INFY.NS', '^NSEI'];
      const url = `https://query1.finance.yahoo.com/v7/finance/quote?symbols=${symbols.join(',')}`;
      const res = await axios.get(url);
      const results = res.data.quoteResponse.result;

      const formatted = results.map((stock) => ({
        name: stock.shortName || stock.symbol,
        price: stock.regularMarketPrice,
        change: stock.regularMarketChangePercent,
      }));

      setStocks(formatted);
    } catch (error) {
      console.error('Failed to fetch stock data:', error);
    }
  };

  useEffect(() => {
    fetchStockData();
    const interval = setInterval(fetchStockData, 60000); // refresh every 1 minute
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-black py-2 text-white border-y border-gray-700">
      <Marquee gradient={false} speed={50} pauseOnHover>
        {stocks.map((stock, i) => {
          const isUp = stock.change >= 0;
          const arrow = isUp ? '▲' : '▼';
          const color = isUp ? 'text-green-400' : 'text-red-500';

          return (
            <span key={i} className={`mx-6 ${color}`}>
              {stock.name}: ₹{stock.price?.toFixed(2)} {arrow} {stock.change?.toFixed(2)}%
            </span>
          );
        })}
      </Marquee>
    </div>
  );
};

export default StockTicker;
