'use client'

import { useState, useEffect } from "react";
import Link from "next/link";
import Nav from "../Nav/page";


export default function PricingPage() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const CodeIcon = () => (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
      />
    </svg>
  );

  const CheckIcon = () => (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  );

  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "forever",
      features: [
        "5 free courses",
        "Community access",
        "Basic support",
       
      ],
    },
    {
      name: "Pro",
      price: "$29",
      period: "/month",
      features: [
        "All courses",
        "Notes",
        "Tutorials",
        "limited Ai studies",
      ],
      popular: true,
    },
    {
      name: "Lifetime",
      price: "$99",
      period: "one-time",
      features: [
        "Lifetime access",
        "All future courses",
        "unlimited ai courses",
        "Every thing in pro",
       
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Navigation */}
       <Nav />
      {/* Pricing Section */}
      <section id="pricing" className="pt-32 pb-20 px-6 bg-black/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-gray-400 text-lg">
              Choose the plan that works best for you
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {plans.map((plan, i) => (
              <div
                key={i}
                className={`rounded-2xl p-8 ${
                  plan.popular
                    ? "bg-gradient-to-br from-purple-600 to-pink-600 transform scale-105"
                    : "bg-slate-800/50 border border-slate-700"
                }`}
              >
                {plan.popular && (
                  <div className="text-center mb-4">
                    <span className="bg-white/20 px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-5xl font-bold">{plan.price}</span>
                  <span className="text-gray-300">{plan.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-2">
                      <CheckIcon />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-3 rounded-lg font-semibold transition-all ${
                    plan.popular
                      ? "bg-white text-purple-600 hover:bg-gray-100"
                      : "bg-gradient-to-r from-purple-500 to-pink-500 hover:opacity-90"
                  }`}
                >
                  {plan.popular ? "Upgrade Now" : "Choose Plan"}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
   
    </div>
  );
}
