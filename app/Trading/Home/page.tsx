'use client'

import React from 'react';
import Nav from '../../Nav/page';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface BookCardProps {
  title: string;
  image: string;
  badgeImage: string;
  href: string;
  delay: number;
  isFree?: boolean;
}

const BookCard: React.FC<BookCardProps> = ({
  title,
  image,
  badgeImage,
  href,
  delay,
  isFree = false,
}) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3, delay }}
    whileHover={{ y: -8, scale: 1.02 }}
    className="w-72 h-[500px] group"
  >
    <Link href={href}>
      <div className="bg-white dark:bg-gray-800 shadow-2xl hover:shadow-3xl rounded-xl p-4 cursor-pointer h-full transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:border-orange-300 dark:hover:border-orange-500 relative overflow-hidden">
        {/* Book Cover Image */}
        <div className="relative mb-4">
          <div className="relative overflow-hidden rounded-lg">
            <Image
              src={image}
              width={300}
              height={320}
              alt={title}
              className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105"
            />

            {/* Overlay gradient on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>

          {/* Badge */}
          <div className="absolute -top-2 -right-2 z-10">
            <Image
              src={badgeImage}
              width={50}
              height={50}
              alt={isFree ? 'Free Course' : 'VIP Course'}
              className="w-12 h-12 drop-shadow-lg transition-transform duration-300 group-hover:scale-110"
            />
          </div>
        </div>

        {/* Book Title */}
        <div className="flex-1 flex flex-col justify-between">
          <h1 className="font-serif text-center text-gray-900 dark:text-white text-lg font-semibold mb-4 leading-tight group-hover:text-orange-500 dark:group-hover:text-orange-400 transition-colors duration-300">
            {title}
          </h1>

          {/* Button */}
          <button className="bg-orange-600 hover:bg-orange-700 text-white font-sans w-full px-4 py-3 rounded-lg transition-all duration-300 transform group-hover:bg-orange-500 group-hover:shadow-lg font-medium">
            View the course
          </button>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400 to-orange-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
      </div>
    </Link>
  </motion.div>
);

export default function Trading() {
  const books = [
    {
      title: 'Introduction to forex trading',
      image: '/introduction.png',
      badgeImage: '/free.png',
      href: '/Trading/Introduction',
      isFree: true,
    },
    {
      title: 'Forex Trading for Beginners',
      image: '/beginner.png',
      badgeImage: '/free.png',
      href: '/Trading/Beginner',
      isFree: true,
    },
    {
      title: 'A Practical Guide to Swing Trading',
      image: '/swing.png',
      badgeImage: '/vip.png',
      href: '/Trading/Swing',
      isFree: false,
    },
    {
      title: 'Advanced and Profitable Trading Strategies',
      image: '/advanced.png',
      badgeImage: '/vip.png',
      href: '/Trading/Advanced',
      isFree: false,
    },
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
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Trading <span className="text-orange-500">Course Library</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Discover our comprehensive collection of trading books and
              courses, from beginner-friendly introductions to advanced
              strategies for professional traders.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Books Grid */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-8 justify-center">
            {books.map((book, index) => (
              <BookCard
                key={book.title}
                title={book.title}
                image={book.image}
                badgeImage={book.badgeImage}
                href={book.href}
                isFree={book.isFree}
                delay={index * 0.05}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <div className="text-3xl font-bold text-orange-500 mb-2">4</div>
              <div className="text-gray-600 dark:text-gray-300">
                Course Books
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.15 }}
            >
              <div className="text-3xl font-bold text-orange-500 mb-2">2</div>
              <div className="text-gray-600 dark:text-gray-300">
                Free Courses
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <div className="text-3xl font-bold text-orange-500 mb-2">2</div>
              <div className="text-gray-600 dark:text-gray-300">
                VIP Courses
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.25 }}
            >
              <div className="text-3xl font-bold text-orange-500 mb-2">
                100%
              </div>
              <div className="text-gray-600 dark:text-gray-300">
                Quality Content
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-orange-500 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Start with Our Free Courses
            </h2>
            <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
              Begin your trading journey with our comprehensive free courses,
              then advance to our premium VIP content for professional-level
              strategies.
            </p>
            <button className="bg-white text-orange-500 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors">
              Start Learning Now
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}