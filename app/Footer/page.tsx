'use client';

import Link from 'next/link';


export default function TrivoraLanding() {
  
  return (
    <div className="bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-gray-950 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold mb-4">
                <span className="text-orange-500">T</span>rivora
              </div>
              <p className="text-gray-400 mb-4">
                Empowering traders with knowledge and tools for financial success.
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-4">Learn</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="#" className="hover:text-orange-500 transition-colors">Courses</Link></li>
                <li><Link href="#" className="hover:text-orange-500 transition-colors">Tutorials</Link></li>
                <li><Link href="#" className="hover:text-orange-500 transition-colors">Books</Link></li>
                <li><Link href="#" className="hover:text-orange-500 transition-colors">Webinars</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Tools</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="#" className="hover:text-orange-500 transition-colors">Live Demo</Link></li>
                <li><Link href="#" className="hover:text-orange-500 transition-colors">Market Analysis</Link></li>
                <li><Link href="#" className="hover:text-orange-500 transition-colors">Trading Simulator</Link></li>
                <li><Link href="#" className="hover:text-orange-500 transition-colors">Portfolio Tracker</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="#" className="hover:text-orange-500 transition-colors">Help Center</Link></li>
                <li><Link href="#" className="hover:text-orange-500 transition-colors">Community</Link></li>
                <li><Link href="#" className="hover:text-orange-500 transition-colors">Contact Us</Link></li>
                <li><Link href="#" className="hover:text-orange-500 transition-colors">FAQ</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 mt-8 text-center text-gray-400">
            <p>&copy; 2025 Trivora. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
