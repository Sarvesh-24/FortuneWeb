import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const InvestmentCalculator = () => {
  const [activeTab, setActiveTab] = useState('sip'); // 'sip' or 'lumpsum'
  const [monthlyInvestment, setMonthlyInvestment] = useState(5000);
  const [investment, setInvestment] = useState(50000);
  const [annualReturn, setAnnualReturn] = useState(12);
  const [years, setYears] = useState(5);
  const [result, setResult] = useState(0);
  const [darkMode, setDarkMode] = useState(false);

  // Calculate SIP Future Value
  const calculateSIP = () => {
    const monthlyRate = annualReturn / 12 / 100;
    const months = years * 12;
    const futureValue =
      monthlyInvestment * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate);
    return futureValue.toFixed(2);
  };

  // Calculate Lump Sum Future Value
  const calculateLumpSum = () => {
    const rate = annualReturn / 100;
    const futureValue = investment * Math.pow(1 + rate, years);
    return futureValue.toFixed(2);
  };

  // Update result based on active tab
  useEffect(() => {
    setResult(activeTab === 'sip' ? calculateSIP() : calculateLumpSum());
  }, [activeTab, monthlyInvestment, investment, annualReturn, years]);

  // Detect system theme and set dark mode
  useEffect(() => {
    const matchMedia = window.matchMedia('(prefers-color-scheme: dark)');
    setDarkMode(matchMedia.matches);

    const handleChange = (e) => setDarkMode(e.matches);
    matchMedia.addEventListener('change', handleChange);

    return () => matchMedia.removeEventListener('change', handleChange);
  }, []);

  // Pie Chart Data
  const totalInvestment = activeTab === 'sip' ? monthlyInvestment * 12 * years : investment;
  const totalGrowth = result - totalInvestment;

  const pieData = {
    labels: ['Total Investment', 'Est. Returns'],
    datasets: [
      {
        label: 'Investment Breakdown',
        data: [totalInvestment, totalGrowth],
        backgroundColor: ['#3b82f6', '#16a34a'],
        hoverBackgroundColor: ['#2563eb', '#15803d'],
      },
    ],
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className={`shadow-lg p-4 md:p-8 rounded-xl max-w-6xl mx-auto mt-10 ${
        darkMode ? 'bg-gray-800 text-gray-200' : 'bg-gradient-to-br from-blue-100 via-white to-blue-50'
      }`}
    >
      <div className="flex flex-wrap md:flex-nowrap gap-8">
        {/* Form Section */}
        <div className="flex-1">
          {/* Tabs */}
          <div className="flex justify-center mb-6">
            <button
              onClick={() => setActiveTab('sip')}
              className={`px-6 py-2 font-bold rounded-l-lg ${
                activeTab === 'sip'
                  ? darkMode
                    ? 'bg-green-500 text-white'
                    : 'bg-blue-500 text-white'
                  : darkMode
                  ? 'bg-gray-700 text-gray-300'
                  : 'bg-blue-200 text-blue-800'
              }`}
            >
              SIP Calculator
            </button>
            <button
              onClick={() => setActiveTab('lumpsum')}
              className={`px-6 py-2 font-bold rounded-r-lg ${
                activeTab === 'lumpsum'
                  ? darkMode
                    ? 'bg-green-500 text-white'
                    : 'bg-blue-500 text-white'
                  : darkMode
                  ? 'bg-gray-700 text-gray-300'
                  : 'bg-blue-200 text-blue-800'
              }`}
            >
              Lump Sum Calculator
            </button>
          </div>

          {/* Form */}
          {activeTab === 'sip' && (
            <div>
              <div className="mb-6">
                <label className="block font-medium mb-2">Monthly Investment (₹):</label>
                <motion.div className="flex items-center gap-4">
                  <input
                    type="range"
                    min="1000"
                    max="50000"
                    step="1000"
                    value={monthlyInvestment}
                    onChange={(e) => setMonthlyInvestment(Number(e.target.value))}
                    className="w-full cursor-pointer"
                  />
                  <motion.input
                    type="number"
                    min="1000"
                    max="50000"
                    value={monthlyInvestment}
                    onChange={(e) => setMonthlyInvestment(Number(e.target.value))}
                    className={`w-20 p-2 border rounded text-center ${
                      darkMode ? 'text-gray-900' : 'text-black'
                    }`}
                  />
                </motion.div>
              </div>
            </div>
          )}
          {activeTab === 'lumpsum' && (
            <div>
              <div className="mb-6">
                <label className="block font-medium mb-2">Lump Sum Investment (₹):</label>
                <motion.div className="flex items-center gap-4">
                  <input
                    type="range"
                    min="1000"
                    max="1000000"
                    step="1000"
                    value={investment}
                    onChange={(e) => setInvestment(Number(e.target.value))}
                    className="w-full cursor-pointer"
                  />
                  <motion.input
                    type="number"
                    min="1000"
                    max="1000000"
                    value={investment}
                    onChange={(e) => setInvestment(Number(e.target.value))}
                    className={`w-20 p-2 border rounded text-center ${
                      darkMode ? 'text-gray-900' : 'text-black'
                    }`}
                  />
                </motion.div>
              </div>
            </div>
          )}

          <div className="mb-6">
            <label className="block font-medium mb-2">Expected Annual Return (%):</label>
            <motion.div className="flex items-center gap-4">
              <input
                type="range"
                min="1"
                max="20"
                step="1"
                value={annualReturn}
                onChange={(e) => setAnnualReturn(Number(e.target.value))}
                className="w-full cursor-pointer"
              />
              <motion.input
                type="number"
                min="1"
                max="20"
                value={annualReturn}
                onChange={(e) => setAnnualReturn(Number(e.target.value))}
                className={`w-20 p-2 border rounded text-center ${
                  darkMode ? 'text-gray-900' : 'text-black'
                }`}
              />
            </motion.div>
          </div>

          <div className="mb-6">
            <label className="block font-medium mb-2">Investment Duration (Years):</label>
            <motion.div className="flex items-center gap-4">
              <input
                type="range"
                min="1"
                max="30"
                step="1"
                value={years}
                onChange={(e) => setYears(Number(e.target.value))}
                className="w-full cursor-pointer"
              />
              <motion.input
                type="number"
                min="1"
                max="30"
                value={years}
                onChange={(e) => setYears(Number(e.target.value))}
                className={`w-20 p-2 border rounded text-center ${
                  darkMode ? 'text-gray-900' : 'text-black'
                }`}
              />
            </motion.div>
          </div>

          {/* Investment Summary */}
          <motion.div
            className={`mt-6 text-center p-4 rounded-lg shadow ${
              darkMode ? 'bg-gray-700' : 'bg-blue-100'
            }`}
          >
            <div className="text-lg font-semibold">Investment Summary</div>
            <motion.div className="grid grid-cols-3 gap-4 mt-4">
              <div>
                <p className="font-medium">Investment Amount</p>
                <p>₹{totalInvestment.toFixed(2)}</p>
              </div>
              <div>
                <p className="font-medium">Est. Returns</p>
                <p>₹{totalGrowth.toFixed(2)}</p>
              </div>
              <div>
                <p className="font-medium">Total Value</p>
                <p>₹{result}</p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Pie Chart Section */}
        <div className="flex justify-center items-center flex-1">
          <Pie data={pieData} className="max-w-sm" />
        </div>
      </div>
    </motion.div>
  );
};

export default InvestmentCalculator;

