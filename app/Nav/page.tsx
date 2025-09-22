"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

const MenuIcon = () => (
  <svg
    className="w-6 h-6"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 6h16M4 12h16M4 18h16"
    />
  </svg>
);

const CloseIcon = () => (
  <svg
    className="w-6 h-6"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);

export default function TrivoraNav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-gray-50 dark:bg-gray-900 transition-colors duration-300 sticky top-0 z-50">
      {/* Navigation */}
      <nav className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <Link
                href="/"
                className="text-2xl font-bold text-gray-900 dark:text-white"
              >
                <span className="text-orange-500">T</span>rivora
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <ul className="flex items-center space-x-8">
                <li>
                  <Link
                    href="/"
                    className="text-gray-700 dark:text-gray-300 hover:text-orange-500 transition-colors"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/Courses"
                    className="text-gray-700 dark:text-gray-300 hover:text-orange-500 transition-colors"
                  >
                    Courses
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-700 dark:text-gray-300 hover:text-orange-500 transition-colors"
                  >
                    Tutorials
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-700 dark:text-gray-300 hover:text-orange-500 transition-colors"
                  >
                    Books
                  </Link>
                </li>
                <li>
                  <Link
                    href="/Broker"
                    className="text-gray-700 dark:text-gray-300 hover:text-orange-500 transition-colors"
                  >
                    Trading View
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-700 dark:text-gray-300 hover:text-orange-500 transition-colors"
                  >
                    News
                  </Link>
                </li>
                <li>
                  <SignedOut>
                    <SignInButton mode="modal">
                      <button className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition-colors">
                        Login
                      </button>
                    </SignInButton>
                  </SignedOut>
                  <SignedIn>
                    <UserButton />
                  </SignedIn>
                </li>
              </ul>
            </div>

            {/* Theme Toggle & Mobile Menu */}
            <div className="flex items-center space-x-4">
              <button
                className="md:hidden p-2 rounded-lg text-gray-600 dark:text-gray-300"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden py-4 border-t border-gray-200 dark:border-gray-700"
            >
              <ul className="space-y-4">
                <li>
                  <Link
                    href="/"
                    className="block text-gray-700 dark:text-gray-300 hover:text-orange-500"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/Courses"
                    className="block text-gray-700 dark:text-gray-300 hover:text-orange-500"
                  >
                    Courses
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="block text-gray-700 dark:text-gray-300 hover:text-orange-500"
                  >
                    Tutorials
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="block text-gray-700 dark:text-gray-300 hover:text-orange-500"
                  >
                    Books
                  </Link>
                </li>
                <li>
                  <Link
                    href="/Broker"
                    className="block text-gray-700 dark:text-gray-300 hover:text-orange-500"
                  >
                    Trading view
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="block text-gray-700 dark:text-gray-300 hover:text-orange-500"
                  >
                    News
                  </Link>
                </li>
                <li>
                  <SignedOut>
                    <SignInButton mode="modal">
                      <button className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition-colors">
                        Login
                      </button>
                    </SignInButton>
                  </SignedOut>
                  <SignedIn>
                    <UserButton />
                  </SignedIn>
                </li>
              </ul>
            </motion.div>
          )}
        </div>
      </nav>
    </div>
  );
}
