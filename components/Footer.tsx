'use client';

import { FaFacebook, FaInstagram, FaMapMarkerAlt, FaClock, FaStar, FaHeart } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-primary-dark to-gray-900 text-white">
      {/* Main Footer */}
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand Section */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-5xl">🏮</span>
              <div>
                <h3 className="text-3xl font-bold">Little Kitchen</h3>
                <p className="text-sm text-white/80">小廚房</p>
              </div>
            </div>
            <p className="text-white/70 mb-4 leading-relaxed">
              Bringing authentic Taiwanese flavors to Morley since 2020. We serve fresh, delicious bento boxes made with love and tradition.
            </p>
            <div className="flex items-center gap-2 text-yellow-400">
              {[1, 2, 3, 4, 5].map((star) => (
                <FaStar key={star} className="text-xl" />
              ))}
              <span className="ml-2 text-white font-bold">5.0 Rating</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
              <FaMapMarkerAlt className="text-accent" />
              <span>Visit Us</span>
            </h4>
            <div className="space-y-3 text-white/80">
              <p className="hover:text-white transition-colors">
                <span className="font-semibold">Address:</span>
                <br />
                253 Walter Rd W
                <br />
                Morley WA 6062
              </p>
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=253+Walter+Rd+W,+Morley+WA+6062"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-accent hover:bg-accent-dark text-white font-semibold py-2 px-4 rounded-full transition-all transform hover:scale-105"
              >
                Get Directions →
              </a>
            </div>
          </div>

          {/* Hours & Order */}
          <div>
            <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
              <FaClock className="text-accent" />
              <span>Opening Hours</span>
            </h4>
            <div className="space-y-2 text-white/80 mb-6">
              <p>Tuesday - Sunday</p>
              <p className="text-2xl font-bold text-white">11am - 6pm</p>
              <p className="text-red-400 font-semibold">Closed on Monday</p>
            </div>
            <a
              href="https://aus.hungrypanda.co/shop?shopId=517641461"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-primary hover:bg-cream font-bold py-3 px-6 rounded-full transition-all transform hover:scale-105 shadow-xl"
            >
              🐼 Order Now
            </a>
          </div>
        </div>

        {/* Social Media */}
        <div className="mt-12 pt-8 border-t border-white/20 text-center">
          <p className="text-white/80 mb-4">Follow us on social media for updates and special offers!</p>
          <div className="flex justify-center gap-6">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 hover:bg-accent p-4 rounded-full transition-all transform hover:scale-110"
              aria-label="Facebook"
            >
              <FaFacebook className="text-2xl" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 hover:bg-accent p-4 rounded-full transition-all transform hover:scale-110"
              aria-label="Instagram"
            >
              <FaInstagram className="text-2xl" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-black/30 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm">
              © {new Date().getFullYear()} Little Kitchen. All rights reserved.
            </p>
            <p className="text-white/60 text-sm flex items-center gap-2">
              Made with <FaHeart className="text-red-500" /> for Taiwanese food lovers
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
