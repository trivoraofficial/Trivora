"use client";

import React, { useCallback, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { initializePaddle, Paddle } from "@paddle/paddle-js";

const CheckIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-5 h-5 text-orange-500"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
      clipRule="evenodd"
    />
  </svg>
);

interface PricingPlan {
  title: string;
  price: string;
  duration: string;
  features: string[];
  isFeatured: boolean;
}

const pricingPlans: PricingPlan[] = [
  {
    title: "Basic Trader",
    price: "$29",
    duration: "per month",
    features: [
      "Access to 10+ courses",
      "Basic market analysis",
      "Community forum access",
      "Email support",
      "Limited Ai learning",
    ],
    isFeatured: false,
  },
  {
    title: "Pro Trader",
    price: "$49",
    duration: "per month",
    features: [
      "Everything in Basic",
      "Access to all courses",
      "Live market analysis",
      "Limited Ai learning",
      "Priority email support",
      "Exclusive trading signals",
    ],
    isFeatured: true,
  },
  {
    title: "Ultimate Pro",
    price: "$99",
    duration: "per month",
    features: [
      "Everything in Pro",
      "Unlimited Ai learning",
      "Unlimited Ai courses",
      "Unlimited Ai analysis",
      "24/7 priority support",
      "Advanced algorithmic strategies",
    ],
    isFeatured: false,
  },
];

// Map UI plan titles to Paddle Price IDs (sandbox)
const PRICE_ID_MAP: Record<string, string> = {
  "Basic Trader": "pri_01k5rgdrekjsg6j4d5hcqtdr1y",
  "Pro Trader": "pri_01k5te4g5bcdbakjv3nbdmjdrc",
  "Ultimate Pro": "pri_01k5te9tmn8vqrjhrja1ma4x7p",
};

const PricingCard: React.FC<{
  plan: PricingPlan;
  delay: number;
  onChoose: (e: React.MouseEvent, planTitle: string) => void;
}> = ({ plan, delay, onChoose }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay }}
    viewport={{ once: true }}
    className={`relative bg-gray-800 p-8 rounded-2xl shadow-xl transition-shadow border border-gray-700
      ${plan.isFeatured ? "ring-4 ring-orange-500 transform scale-105" : ""}`}
  >
    {plan.isFeatured && (
      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 px-4 py-1 bg-orange-500 text-white rounded-full text-sm font-semibold shadow-md">
        Most Popular
      </div>
    )}
    <div className="text-center">
      <h3
        className={`text-2xl font-bold mb-2 ${
          plan.isFeatured ? "text-orange-500" : "text-white"
        }`}
      >
        {plan.title}
      </h3>
      <div className="text-4xl font-extrabold text-white my-4">
        {plan.price}
        <span className="text-lg font-medium text-gray-400">
          {" "}
          /{plan.duration}
        </span>
      </div>
    </div>
    <ul className="space-y-4 my-8">
      {plan.features.map((feature, index) => (
        <li key={index} className="flex items-center text-gray-300">
          <CheckIcon />
          <span className="ml-3">{feature}</span>
        </li>
      ))}
    </ul>
    <a href="/signup" onClick={(e) => onChoose(e, plan.title)}>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`w-full py-4 rounded-lg font-semibold transition-colors
          ${
            plan.isFeatured
              ? "bg-orange-500 text-white hover:bg-orange-600"
              : "bg-gray-700 text-gray-200 hover:bg-gray-600"
          }`}
      >
        Choose Plan
      </motion.button>
    </a>
  </motion.div>
);

export default function PricingPage() {
  // Initialize Paddle (sandbox) once on mount
  const [paddle, setPaddle] = useState<Paddle | undefined>(undefined);

  useEffect(() => {
    const token =
      process.env.NEXT_PUBLIC_PADDLE_CLIENT_TOKEN ||
      "test_8ad9d1e6bd41218446eb9e21e09"; // fallback for sandbox testing

    initializePaddle({ environment: "sandbox", token }).then(
      (paddleInstance: Paddle | undefined) => {
        if (paddleInstance) setPaddle(paddleInstance);
      }
    );
  }, []);

  const handleChoosePlan = useCallback(
    (e: React.MouseEvent, planTitle: string) => {
      const priceId = PRICE_ID_MAP[planTitle];
      if (!priceId || !paddle) {
        // Let default navigation to /signup happen as fallback
        return;
      }
      // Only prevent navigation if we can open Paddle checkout
      e.preventDefault();
      paddle.Checkout.open({
        items: [{ priceId, quantity: 1 }],
      });
    },
    [paddle]
  );

  return (
    <div className="min-h-screen bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-3 gap-12">
          {pricingPlans.map((plan, index) => (
            <PricingCard
              key={plan.title}
              plan={plan}
              delay={index * 0.15}
              onChoose={handleChoosePlan}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
