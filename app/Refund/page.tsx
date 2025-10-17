"use client";

import Nav from "../Nav/page";
import Footer from "../footer/page";

export default function Refund() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Navigation */}
      <Nav />

      {/* Refund Policy Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-slate-800/70 to-slate-900/70 p-8 rounded-2xl border border-slate-700">
          <h1 className="text-4xl font-bold mb-6 text-center">Refund Policy</h1>
          <p className="text-gray-300 mb-6">
            At <strong>Trivora</strong>, we aim to ensure that our customers are completely satisfied with their purchase. 
            This page explains our refund process, eligibility, and timelines.
          </p>

          <h2 className="text-2xl font-semibold mb-3 text-purple-400">30-Day Money Back Guarantee</h2>
          <p className="text-gray-300 mb-6">
            If you are not satisfied with your purchase, you can request a refund within 30 days of the original payment date.
            Refunds are processed securely through Paddle, our trusted payment partner.
          </p>

          <h2 className="text-2xl font-semibold mb-3 text-purple-400">How to Request a Refund</h2>
          <p className="text-gray-300 mb-6">
            To request a refund, contact our support team at <strong>Trivora00@gmail.com</strong> and provide your order details.
            We will review your request and respond promptly.
          </p>

          <h2 className="text-2xl font-semibold mb-3 text-purple-400">Refund Process</h2>
          <p className="text-gray-300 mb-6">
            Once your refund is approved, Paddle will process it within 5–10 business days. 
            The refund will be returned to your original payment method.
          </p>

          <h2 className="text-2xl font-semibold mb-3 text-purple-400">Non-Refundable Cases</h2>
          <ul className="list-disc list-inside text-gray-300 mb-6">
            <li>Refund requests made after 30 days</li>
            <li>Accounts found to be violating our Terms of Service</li>
          </ul>

          <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-6">
            <p className="text-gray-300 text-sm leading-relaxed">
              <strong className="text-purple-300">Important:</strong> Refunds are subject to verification by Paddle. 
              Providing inaccurate or incomplete information may delay or prevent the refund. 
              All refunds are handled in accordance with international payment security standards.
            </p>
          </div>

          <p className="text-gray-400 mt-6 text-center">
            For questions, contact <strong>Trivora00@gmail.com</strong>.
          </p>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
