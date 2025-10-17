'use client'

import Nav from "../Nav/page";
import Footer from "../footer/page";

export default function Refund() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <Nav />
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto bg-slate-800/70 p-8 rounded-2xl border border-slate-700">
          <h1 className="text-4xl font-bold mb-6 text-center">Refund Policy</h1>
          <p className="text-gray-300 mb-4">
            At <strong>Trivora</strong>, we aim to ensure that our customers are completely satisfied with their purchase.
          </p>

          <h2 className="text-2xl font-semibold mb-3 text-purple-400">30-Day Money Back Guarantee</h2>
          <p className="text-gray-300 mb-4">
            If you are not satisfied with your purchase, you can request a refund within 30 days of the original payment date.
          </p>

          <h2 className="text-2xl font-semibold mb-3 text-purple-400">How to Request a Refund</h2>
          <p className="text-gray-300 mb-4">
            To request a refund, please contact our support team at <strong>Trivora00@gmail.com</strong> with your order details.
          </p>

          <h2 className="text-2xl font-semibold mb-3 text-purple-400">Refund Process</h2>
          <p className="text-gray-300 mb-4">
            Once your refund is approved, Paddle (our payment processor) will process it within 5–10 business days. 
            The refund will be returned to your original payment method.
          </p>

          <h2 className="text-2xl font-semibold mb-3 text-purple-400">Non-Refundable Cases</h2>
          <ul className="list-disc list-inside text-gray-300 mb-4">
            <li>Refund requests made after 30 days</li>
            <li>Accounts found to be violating our Terms of Service</li>
          </ul>

          <p className="text-gray-400 mt-6">
            For questions, contact <strong>Trivora00@gmail.com</strong>.
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
}
