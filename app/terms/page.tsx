"use client";

import { useState, useEffect } from "react";
import Footer from "../footer/page";
import Nav from "../Nav/page";

const Terms = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Navigation */}
      <Nav />

      {/* Terms of Service Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 md:p-12 border border-slate-700">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Terms of Service
            </h2>

            <p className="leading-relaxed mb-4">
              Welcome to Trivora! By accessing or using our website and services,
              you agree to comply with and be bound by these Terms of Service. 
              Please read them carefully.
            </p>

            <h3 className="text-xl font-semibold mb-3">Use of Services</h3>
            <p className="leading-relaxed mb-3">
              You may use our services only for lawful purposes and in accordance
              with these Terms. You agree not to misuse the services or interfere
              with other users’ access.
            </p>

            <h3 className="text-xl font-semibold mb-3">Account Responsibility</h3>
            <p className="leading-relaxed mb-3">
              If you create an account, you are responsible for maintaining the
              confidentiality of your login information and for all activities
              that occur under your account.
            </p>

            <h3 className="text-xl font-semibold mb-3">Payment and Subscriptions</h3>
            <p className="leading-relaxed mb-3">
              All payments are processed securely through Paddle. Subscription
              plans automatically renew unless cancelled before the renewal date.
              Prices, taxes, and payment methods are clearly displayed at checkout.
            </p>

            <h3 className="text-xl font-semibold mb-3">Refund Policy</h3>
            <p className="leading-relaxed mb-3">
              We offer a 30-day money-back guarantee for all paid plans. Refunds
              are processed through Paddle and may take 5-10 business days.
            </p>

            <h3 className="text-xl font-semibold mb-3">Intellectual Property</h3>
            <p className="leading-relaxed mb-3">
              All course content, code, and materials are owned by Trivora or its
              licensors. You may not copy, distribute, or create derivative works
              without explicit permission.
            </p>

            <h3 className="text-xl font-semibold mb-3">Termination</h3>
            <p className="leading-relaxed mb-3">
              Trivora may suspend or terminate your access if you violate these
              Terms, engage in fraudulent activity, or for any reason at our discretion.
            </p>

            <h3 className="text-xl font-semibold mb-3">Limitation of Liability</h3>
            <p className="leading-relaxed mb-3">
              Trivora is not liable for any direct or indirect damages arising
              from your use of the services. You use the platform at your own risk.
            </p>

            <h3 className="text-xl font-semibold mb-3">Governing Law</h3>
            <p className="leading-relaxed mb-3">
              These Terms are governed by the laws of the jurisdiction in which
              Trivora operates.
            </p>

            <h3 className="text-xl font-semibold mb-3">Contact Information</h3>
            <p className="leading-relaxed">
              If you have any questions about these Terms, please contact us at{" "}
              <a href="mailto:Trivora00@gmail.com" className="text-purple-400 underline">
                Trivora00@gmail.com
              </a>.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Terms;
