"use client";

import { useState, useEffect } from "react";
import Footer from "../footer/page";
import Nav from "../Nav/page";

const Privacy = () => {
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

      {/* Privacy Policy Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 md:p-12 border border-slate-700">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Privacy Policy
            </h2>

            <p className="leading-relaxed mb-4">
              At Trivora, we value your privacy and are committed to protecting
              your personal information. This Privacy Policy explains how we
              collect, use, and safeguard your data when you use our services.
            </p>

            <h3 className="text-xl font-semibold mb-3">Information We Collect</h3>
            <p className="leading-relaxed mb-3">
              We collect information you provide directly to us, such as when
              you register, purchase courses, or contact support. This may
              include your name, email address, payment details, and any other
              information necessary to provide our services.
            </p>

            <h3 className="text-xl font-semibold mb-3">How We Use Your Information</h3>
            <p className="leading-relaxed mb-3">
              Your information is used to process payments, deliver course
              materials, provide customer support, and improve our services. We
              do not sell your personal data to third parties.
            </p>

            <h3 className="text-xl font-semibold mb-3">Data Security</h3>
            <p className="leading-relaxed mb-3">
              We implement industry-standard security measures to protect your
              information from unauthorized access, disclosure, or misuse.
            </p>

            <h3 className="text-xl font-semibold mb-3">Cookies and Tracking</h3>
            <p className="leading-relaxed mb-3">
              We use cookies and similar technologies to enhance your experience
              on our website and understand usage patterns.
            </p>

            <h3 className="text-xl font-semibold mb-3">Your Rights</h3>
            <p className="leading-relaxed mb-3">
              You have the right to access, correct, or delete your personal
              information. You can also opt out of marketing communications at
              any time by contacting our support team.
            </p>

            <h3 className="text-xl font-semibold mb-3">Contact Us</h3>
            <p className="leading-relaxed">
              For any questions or concerns regarding this Privacy Policy, please
              contact us at{" "}
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

export default Privacy;
