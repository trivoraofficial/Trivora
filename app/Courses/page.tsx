'use client'

import Nav from "../Nav/page";
import Image from "next/image";
import Link from "next/link";
import { motion } from 'framer-motion';

interface CourseCardProps {
  title: string;
  image: string;
  href?: string;
  delay: number;
  className?: string;
}

const CourseCard: React.FC<CourseCardProps> = ({ 
  title, 
  image, 
  href, 
  delay,
  className = ""
}) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.2, delay }}
    viewport={{ once: true }}
    whileHover={{ y: -5, scale: 1.02 }}
    className={`bg-white dark:bg-gray-800 hover:bg-orange-500 dark:hover:bg-orange-500 cursor-pointer p-6 w-1/4 h-48 font-serif shadow-2xl rounded-xl text-center border-2 border-orange-100 dark:border-gray-700 hover:border-orange-300 transition-all duration-300 group ${className}`}
  >
    {href ? (
      <Link href={href}>
        <div className="flex flex-col items-center justify-center h-full">
          <div className="mb-4 transition-transform duration-300 group-hover:scale-110">
            <Image
              src={image}
              alt={title}
              width={100}
              height={100}
              className="w-24 h-24 object-contain"
            />
          </div>
          <h2 className="text-gray-900 dark:text-white group-hover:text-white font-semibold text-lg leading-tight">
            {title}
          </h2>
        </div>
      </Link>
    ) : (
      <div className="flex flex-col items-center justify-center h-full">
        <div className="mb-4 transition-transform duration-300 group-hover:scale-110">
          <Image
            src={image}
            alt={title}
            width={100}
            height={100}
            className="w-24 h-24 object-contain"
          />
        </div>
        <h2 className="text-gray-900 dark:text-white group-hover:text-white font-semibold text-lg leading-tight">
          {title}
        </h2>
      </div>
    )}
  </motion.div>
);

export default function Courses() {



  const courses = [
    {
      title: "Trading Courses",
      image: "/trade.png",
      href: "Trading/Home"
    },
    {
      title: "Trading Tutorials",
      image: "/tutorials.png"
    },
    {
      title: "Demo live preview",
      image: "/live.png"
    },
    {
      title: "Penetrate in trading with Ai",
      image: "/ai.png"
    },
    {
      title: "Special Trading Exercises",
      image: "/Quiz.png"
    },
    {
      title: "Stock Market News",
      image: "/news.png"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <Nav />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Explore Our <span className="text-orange-500">Trading Courses</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Choose from our comprehensive collection of trading courses, tutorials, and resources 
              designed to take your trading skills to the next level.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-8 justify-center">
            {courses.map((course, index) => (
              <CourseCard
                key={course.title}
                title={course.title}
                image={course.image}
                href={course.href}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

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
              Ready to Start Your Trading Journey?
            </h2>
            <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
              Join thousands of successful traders who have transformed their financial future with Trivora.
            </p>
            <button className="bg-white text-orange-500 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors">
              Get Started Today
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}