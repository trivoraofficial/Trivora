"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState("features");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const CodeIcon = () => (
    <svg
      className="w-6 h-6"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
      />
    </svg>
  );

  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
   
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-slate-900/95 backdrop-blur-lg shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <CodeIcon />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Trivora
              </span>
            </div>
            <div className="hidden md:flex space-x-8">
              <Link
                href="/"
                className="hover:text-purple-400 transition-colors"
              >
                Home
              </Link>
              <Link
                href="/Courses"
                className="hover:text-purple-400 transition-colors"
              >
                Courses
              </Link>
              <Link
                href="/Pricing"
                className="hover:text-purple-400 transition-colors"
              >
                Pricing
              </Link>
                <Link
                href="/Refund"
                className="hover:text-purple-400 transition-colors"
              >
                Refund
              </Link>
                <Link
                href="/Terms"
                className="hover:text-purple-400 transition-colors"
              >
                Terms of service
              </Link>
              <Link
                href="/Privacy"
                className="hover:text-purple-400 transition-colors"
              >
                Privacy
              </Link>
            </div>
            <button className="bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-2 rounded-lg hover:shadow-lg hover:shadow-purple-500/50 transition-all">
              Get Started
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
