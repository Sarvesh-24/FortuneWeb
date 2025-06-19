import React, { useEffect, useState } from 'react';
import axios from 'axios';

const StockTicker = () => {
  const [stocks, setStocks] = useState([]);

  const fetchData = async () => {
    try {
      const symbols = ['RELIANCE.NS', 'TCS.NS', 'INFY.NS', '^NSEI'];
      const url = `https://query1.finance.yahoo.com/v7/finance/quote?symbols=${symbols.join(',')}`;
      const response = await axios.get(url);
      const results = response.data.quoteResponse.result;

      const formatted = results.map((stock) => ({
        name: stock.symbol,
        price: stock.regularMarketPrice,
        change: stock.regularMarketChangePercent,
      }));

      setStocks(formatted);
    } catch (error) {
      console.error('Failed to fetch Yahoo Finance data', error);
    }
  };

  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, 60000); // refresh every 1 min
    return () => clearInterval(interval);
  }, []);

  return (
    <marquee scrollAmount="6" style={{ background: '#111', color: '#fff', padding: '10px', fontSize: '16px' }}>
      {stocks.map((stock, index) => {
        const isUp = stock.change >= 0;
        const arrow = isUp ? '▲' : '▼';
        const color = isUp ? 'lightgreen' : 'red';
        return (
          <span key={index} style={{ marginRight: '30px', color }}>
            {stock.name}: ₹{stock.price?.toFixed(2)} {arrow} {stock.change?.toFixed(2)}%
          </span>
        );
      })}
    </marquee>
  );
};

export default StockTicker;
