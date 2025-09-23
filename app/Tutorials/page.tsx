"use client";

import React, { useState } from "react";
import Nav from "../Nav/page";
import { motion } from "framer-motion";

// TypeScript interfaces
interface Tutorial {
  id: number;
  title: string;
  href: string;
  description: string;
  level: "Beginner" | "Intermediate" | "Advanced";
}

interface TutorialCardProps {
  tutorial: Tutorial;
  isActive: boolean;
  onClick: () => void;
  index: number;
}

// Custom SVG Icons
const PlayIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M8 5v14l11-7z" />
  </svg>
);

const VideoIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17 10.5V7a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-3.5l4 4v-11l-4 4z" />
  </svg>
);

// Tutorial Card Component
const TutorialCard: React.FC<TutorialCardProps> = ({
  tutorial,
  isActive,
  onClick,
  index,
}) => {
  const getLevelColor = (level: Tutorial["level"]): string => {
    switch (level) {
      case "Beginner":
        return "bg-emerald-500";
      case "Intermediate":
        return "bg-orange-500";
      case "Advanced":
        return "bg-red-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`cursor-pointer rounded-xl p-4 mb-3 transition-all duration-300 border-2 ${
        isActive
          ? "bg-orange-500 text-white border-orange-400 shadow-lg"
          : "bg-white dark:bg-gray-800 text-gray-900 dark:text-white hover:bg-orange-50 dark:hover:bg-gray-700 border-gray-200 dark:border-gray-700 shadow-md hover:shadow-lg"
      }`}
    >
      <div className="flex items-start justify-between mb-2">
        <div className="flex items-center">
          <PlayIcon
            className={`w-4 h-4 mr-2 ${
              isActive ? "text-white" : "text-orange-500"
            }`}
          />
          <span
            className={`px-2 py-1 rounded-full text-xs font-bold text-white ${getLevelColor(
              tutorial.level
            )}`}
          >
            {tutorial.level}
          </span>
        </div>
      </div>

      <h4
        className={`font-semibold text-sm mb-2 leading-tight ${
          isActive ? "text-white" : "text-gray-900 dark:text-white"
        }`}
      >
        {tutorial.title}
      </h4>

      <p
        className={`text-xs leading-relaxed ${
          isActive ? "text-orange-100" : "text-gray-600 dark:text-gray-300"
        }`}
      >
        {tutorial.description}
      </p>
    </motion.div>
  );
};

// Main Component
const Tutorials: React.FC = () => {
  const [selectedVideo, setSelectedVideo] = useState<Tutorial>(
    tutorialsData[0]
  );

  return (
    <div className=" bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <Nav />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Video List Sidebar */}
          <div className="lg:w-1/3 w-full">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border-2 border-orange-100 dark:border-gray-700 p-6 sticky top-24">
              <div className="flex items-center mb-6">
                <div className="p-2 bg-orange-500 rounded-xl mr-3">
                  <VideoIcon className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                  Video Lessons
                </h2>
              </div>

              {/* Custom Scrollbar Container */}
              <div className="relative">
                <div
                  className="space-y-2 max-h-80 overflow-y-auto pr-2"
                  style={{
                    scrollbarWidth: "thin",
                    scrollbarColor: "#f97316 #f3f4f6",
                  }}
                >
                  <style jsx>{`
                    div::-webkit-scrollbar {
                      width: 6px;
                    }

                    div::-webkit-scrollbar-track {
                      background: #f3f4f6;
                      border-radius: 10px;
                    }

                    div::-webkit-scrollbar-thumb {
                      background: linear-gradient(45deg, #f97316, #ea580c);
                      border-radius: 10px;
                    }

                    div::-webkit-scrollbar-thumb:hover {
                      background: linear-gradient(45deg, #ea580c, #dc2626);
                    }

                    .dark div::-webkit-scrollbar-track {
                      background: #374151;
                    }
                  `}</style>

                  {tutorialsData.map((tutorial, index) => (
                    <TutorialCard
                      key={tutorial.id}
                      tutorial={tutorial}
                      isActive={selectedVideo.id === tutorial.id}
                      onClick={() => setSelectedVideo(tutorial)}
                      index={index}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Video Player Section */}
          <div className="lg:w-2/3 w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border-2 border-orange-100 dark:border-gray-700 overflow-hidden"
            >
              {/* Video Container */}
              <div className="relative aspect-video bg-gray-900">
                <iframe
                  className="w-full h-full"
                  src={`${selectedVideo.href}?autoplay=0&controls=1&showinfo=0&rel=0&modestbranding=1`}
                  title={selectedVideo.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>

              {/* Video Info */}
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-orange-500 rounded-xl mr-3">
                    <VideoIcon className="w-5 h-5 text-white" />
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-bold text-white ${
                      selectedVideo.level === "Beginner"
                        ? "bg-emerald-500"
                        : selectedVideo.level === "Intermediate"
                        ? "bg-orange-500"
                        : "bg-red-500"
                    }`}
                  >
                    {selectedVideo.level}
                  </span>
                </div>

                <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  {selectedVideo.title}
                </h1>

                <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-4">
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    {selectedVideo.description}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <section className="bg-orange-500 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Practice What You've Learned?
            </h2>
            <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
              Take your knowledge to the next level with our interactive trading
              simulator and personalized coaching.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-orange-500 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl"
              >
                Try Demo Trading
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-orange-500 transition-all shadow-lg hover:shadow-xl"
              >
                Explore All Courses
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

// Data for the tutorials
const tutorialsData: Tutorial[] = [
  {
    id: 1,
    title: "How to Day Trade for Beginners",
    href: "https://youtube.com/embed/xHU5MHuUSKI",
    description:
      "A comprehensive guide on how to get started with day trading and avoid common mistakes.",
    level: "Beginner",
  },
  {
    id: 2,
    title: "Candlestick Charting for Beginners",
    href: "https://youtube.com/embed/ul34Jfh-LOk",
    description:
      "A complete beginner's guide to reading and interpreting candlestick charts.",
    level: "Beginner",
  },
  {
    id: 3,
    title: "Introduction to Risk Management",
    href: "https://youtube.com/embed/UBB8j3ZonH4",
    description:
      "Learn essential strategies to manage risk and protect your trading capital.",
    level: "Intermediate",
  },
  {
    id: 4,
    title: "A Complete Guide to Technical Analysis",
    href: "https://youtube.com/embed/eynxyoKgpng",
    description:
      "An overview of technical analysis, a popular method for finding trading opportunities.",
    level: "Intermediate",
  },
  {
    id: 5,
    title: "The Psychology of a Trader",
    href: "https://youtube.com/embed/XQNu1goMFcI",
    description:
      "Master the mental game of trading by understanding your emotions and biases.",
    level: "Advanced",
  },
];

export default Tutorials;
