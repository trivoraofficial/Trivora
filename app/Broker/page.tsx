'use client';

import React, { useState, useEffect } from 'react';
import Nav from "../Nav/page";
import { motion } from 'framer-motion';

const ChartIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
  </svg>
);

const TrendingUpIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
  </svg>
);

export default function TradingPage() {
  const [darkMode] = useState(true);
  const [isFullscreen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <Nav />

      {/* Hero Section */}
      <section className="relative overflow-hidden pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8"
          >
            <div className="flex items-center justify-center">
              <ChartIcon />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trading Chart Section */}
      <section className="pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="relative"
          >
            {/* Chart Header */}
            <div className="bg-white dark:bg-gray-800 rounded-t-xl border border-gray-200 dark:border-gray-700 px-6 py-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700 dark:text-gray-300 font-semibold ml-4">TradingView Chart</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2 text-green-500">
                    <TrendingUpIcon />
                    <span className="text-sm font-semibold">Live Market Data</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Chart Container */}
            <div className={`bg-white dark:bg-gray-800 rounded-b-xl border-l border-r border-b border-gray-200 dark:border-gray-700 overflow-hidden shadow-2xl ${
              isFullscreen ? 'fixed inset-0 z-50 rounded-none' : ''
            }`}>
              <iframe
                src="https://s.tradingview.com/widgetembed/?frameElementId=tradingview_widget"
                className={`w-full border-none ${
                  isFullscreen ? 'h-full' : 'h-[70vh] min-h-[600px]'
                }`}
                title="TradingView Chart"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Stats Section */}
      <section className="bg-white dark:bg-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { label: "24/7", text: "Market Access", delay: 0.2 },
              { label: "Real-Time", text: "Data Feed", delay: 0.25 },
              { label: "100+", text: "Indicators", delay: 0.3 },
              { label: "Pro", text: "Analysis Tools", delay: 0.35 }
            ].map((stat) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: stat.delay }}
              >
                <div className="text-3xl font-bold text-orange-500 mb-2">{stat.label}</div>
                <div className="text-gray-600 dark:text-gray-300">{stat.text}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Professional Trading Features
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Advanced charting capabilities with institutional-grade tools for technical analysis and market research.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Advanced Charting",
                description: "Multiple timeframes with candlestick, line, and bar chart options.",
                delay: 0.5
              },
              {
                title: "Technical Indicators",
                description: "Over 100 built-in indicators including RSI, MACD, and Bollinger Bands.",
                delay: 0.55
              },
              {
                title: "Drawing Tools",
                description: "Professional drawing tools for trend lines, support/resistance levels.",
                delay: 0.6
              }
            ].map((feature) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: feature.delay }}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100 dark:border-gray-700"
              >
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-orange-500 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Start Trading?
            </h2>
            <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
              Use our professional charts to analyze markets and make informed trading decisions.
            </p>
            <button className="bg-white text-orange-500 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors">
              Start Trading Now
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}