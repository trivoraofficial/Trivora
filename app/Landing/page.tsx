"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Nav from "../Nav/page";
import PricingPage from "../Pricing/page";
import Footer from "../footer/page";

const Landing = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
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

  const BookIcon = () => (
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
        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
      />
    </svg>
  );

  const RocketIcon = () => (
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
        d="M13 10V3L4 14h7v7l9-11h-7z"
      />
    </svg>
  );

  const CheckIcon = () => (
    <svg
      className="w-5 h-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5 13l4 4L19 7"
      />
    </svg>
  );

  const UserIcon = () => (
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
        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
      />
    </svg>
  );

  const ShieldIcon = () => (
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
        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
      />
    </svg>
  );

  const CertificateIcon = () => (
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
        d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
      />
    </svg>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Navigation */}
      <Nav />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-block mb-6 px-4 py-2 bg-purple-500/20 rounded-full border border-purple-500/30">
            <span className="text-sm text-purple-300">
              🚀 Master Programming Skills
            </span>
          </div>
          <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
            Learn to Code
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              Like Never Before
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Interactive courses, real-world projects, and expert mentorship to
            transform you into a professional developer
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-2xl hover:shadow-purple-500/50 transition-all transform hover:scale-105">
              Start Learning Free
            </button>
            <button className="bg-white/10 backdrop-blur-lg px-8 py-4 rounded-lg text-lg font-semibold border border-white/20 hover:bg-white/20 transition-all">
              View Demo
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6 bg-black/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Why Choose Trivora?
            </h2>
            <p className="text-gray-400 text-lg">
              Everything you need to become a professional developer
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <CodeIcon />,
                title: "Interactive Coding",
                desc: "Practice coding in real-time with our interactive browser-based IDE",
              },
              {
                icon: <BookIcon />,
                title: "Structured Curriculum",
                desc: "Follow our carefully crafted learning paths from beginner to expert",
              },
              {
                icon: <RocketIcon />,
                title: "Project-Based Learning",
                desc: "Build real-world projects and add them to your portfolio",
              },
              {
                icon: <UserIcon />,
                title: "Expert Mentorship",
                desc: "Get guidance from experienced developers in the industry",
              },
              {
                icon: <ShieldIcon />,
                title: "Lifetime Access",
                desc: "Access course materials forever with free updates included",
              },
              {
                icon: <CertificateIcon />,
                title: "Certifications",
                desc: "Earn recognized certificates to showcase your skills",
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 p-8 rounded-2xl border border-purple-500/20 hover:border-purple-500/40 transition-all hover:transform hover:scale-105"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Popular Courses
            </h2>
            <p className="text-gray-400 text-lg">
              Master the most in-demand programming languages
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "JavaScript Mastery",
                level: "Beginner",
                hours: "40",
                students: "12,450",
              },
              {
                name: "Python for Data Science",
                level: "Intermediate",
                hours: "55",
                students: "8,920",
              },
              {
                name: "React & Next.js Pro",
                level: "Advanced",
                hours: "65",
                students: "6,340",
              },
            ].map((course, i) => (
              <div
                key={i}
                className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl overflow-hidden border border-slate-700 hover:border-purple-500/50 transition-all hover:transform hover:scale-105"
              >
                <div className="h-48 bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center">
                  <CodeIcon />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 bg-purple-500/20 rounded-full text-xs text-purple-300">
                      {course.level}
                    </span>
                    <span className="text-gray-400 text-sm">
                      {course.hours} hours
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{course.name}</h3>
                  <p className="text-gray-400 mb-4">
                    {course.students} students enrolled
                  </p>
                  <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all">
                    Enroll Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <PricingPage />

      {/* Terms & Verification Section */}
      <section id="terms" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 md:p-12 border border-slate-700">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Payment Terms & Verification
            </h2>

            <div className="space-y-6 text-gray-300">
              <div>
                <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                  <ShieldIcon />
                  Secure Payment Processing
                </h3>
                <p>
                  All payments are processed securely through Paddle, our
                  trusted payment partner. Paddle is a registered Merchant of
                  Record and handles all payment processing, tax collection, and
                  compliance requirements.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  Payment Verification Requirements
                </h3>
                <p className="mb-3">
                  To ensure security and prevent fraud, Paddle may require
                  verification of your payment information. This process
                  includes:
                </p>
                <ul className="space-y-2 ml-6">
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 mt-1">•</span> Identity
                    verification through official documentation
                    (government-issued ID, passport, or driver's license)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 mt-1">•</span> Payment
                    method verification (bank statement or credit card
                    statement)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 mt-1">•</span> Address
                    verification matching your billing information
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 mt-1">•</span> Additional
                    information may be requested for high-value transactions or
                    if suspicious activity is detected
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  Service Description
                </h3>
                <p>
                  Trivora provides online programming education courses and
                  resources. Upon successful payment verification and
                  processing, you will receive immediate access to your
                  purchased course materials. Subscription plans automatically
                  renew unless cancelled before the renewal date.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  Refund Policy
                </h3>
                <p>
                  We offer a 30-day money-back guarantee for all paid plans.
                  Contact our support team within 30 days of your purchase date
                  for a full refund. Refunds are processed through Paddle and
                  may take 5-10 business days to appear in your account.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  Subscription Management
                </h3>
                <p>
                  You can manage your subscription, update payment methods, or
                  cancel at any time through your account dashboard.
                  Cancellations take effect at the end of your current billing
                  period, and you will retain access to all materials until that
                  date.
                </p>
              </div>

              {/* Legal & Contact Links */}
              <div className="mt-6 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/privacy"
                  className="text-purple-400 underline hover:text-purple-200"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/terms"
                  className="text-purple-400 underline hover:text-purple-200"
                >
                  Terms of Service
                </Link>
                <Link
                  href="/refund"
                  className="text-purple-400 underline hover:text-purple-200"
                >
                  Refund Policy
                </Link>
                <a
                  href="mailto:Trivora00@gmail.com"
                  className="text-purple-400 underline hover:text-purple-200"
                >
                  Contact Support
                </a>
              </div>

              <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-6 mt-8">
                <p className="text-sm leading-relaxed">
                  <strong className="text-purple-300">Important Notice:</strong>{" "}
                  By purchasing from Trivora, you acknowledge that Paddle may
                  require additional verification documentation to complete your
                  transaction. Failure to provide requested verification
                  information may result in transaction cancellation and service
                  suspension until verification is completed. All verification
                  requests are made in accordance with international payment
                  security standards and anti-fraud regulations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Landing;
