import React from 'react';

export default function ContactFooter() {
  return (
    <footer className="py-12 bg-gray-900 text-gray-400 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h4 className="text-white font-bold mb-4">TIM Corp</h4>
          <p>Your partner in digital excellence.</p>
        </div>
        <div>
          <h4 className="text-white font-bold mb-4">Contact</h4>
          <p>Email: inquiry@timcorp.net.ph</p>
          <p>Phone: +1 (555) 123-4567</p>
        </div>
        <div>
          <h4 className="text-white font-bold mb-4">Follow Us</h4>
          <div className="flex gap-4">
            <span>LinkedIn</span>
            <span>Twitter</span>
          </div>
        </div>
      </div>
      <div className="mt-12 pt-8 border-t border-gray-800 text-center text-sm">
        © 2026 TIM Corp. All rights reserved.
      </div>
    </footer>
  );
}
