'use client';

import { FaStar, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary/10 via-white to-accent/10">
      {/* Animated background pattern */}
      <div className="absolute inset-0 food-pattern opacity-50"></div>

      {/* Decorative circles */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{animationDelay: '1s'}}></div>

      <div className="section-container relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Logo/Badge */}
          <div className="mb-8 animate-slide-up">
            <div className="inline-block bg-white rounded-2xl shadow-2xl p-6 transform hover:scale-105 transition-transform">
              <div className="flex items-center justify-center gap-3">
                <span className="text-6xl">🏮</span>
                <div className="text-left">
                  <h1 className="text-5xl sm:text-6xl font-bold gradient-text">
                    Little Kitchen
                  </h1>
                  <p className="text-sm text-gray-600 font-medium">小廚房</p>
                </div>
              </div>
            </div>
          </div>

          {/* Main headline */}
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6 animate-fade-in leading-tight">
            Authentic <span className="gradient-text">Taiwanese Bento</span>
            <br />
            in the Heart of Morley
          </h2>

          {/* 5-Star Rating - PROMINENT */}
          <div className="mb-8 animate-slide-up" style={{animationDelay: '0.2s'}}>
            <div className="inline-block bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-8 py-4 rounded-full shadow-2xl transform hover:scale-110 transition-all">
              <div className="flex items-center gap-3">
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <FaStar key={star} className="text-white text-2xl drop-shadow-md" />
                  ))}
                </div>
                <span className="text-2xl font-bold">5.0 STARS</span>
              </div>
              <p className="text-sm mt-1 font-medium">on Hungry Panda & Google Maps</p>
            </div>
          </div>

          {/* Subheadline */}
          <p className="text-xl sm:text-2xl text-gray-700 mb-10 animate-fade-in" style={{animationDelay: '0.3s'}}>
            Fresh, Flavorful & Affordable • <span className="font-bold text-primary">$10-20</span>
          </p>

          {/* Quick info badges */}
          <div className="flex flex-wrap justify-center gap-4 mb-12 animate-slide-up" style={{animationDelay: '0.4s'}}>
            <div className="bg-white px-6 py-3 rounded-full shadow-lg flex items-center gap-2 hover:shadow-xl transition-shadow">
              <FaMapMarkerAlt className="text-primary" />
              <span className="font-medium text-gray-800">253 Walter Rd W, Morley</span>
            </div>
            <div className="bg-white px-6 py-3 rounded-full shadow-lg flex items-center gap-2 hover:shadow-xl transition-shadow">
              <FaClock className="text-accent" />
              <span className="font-medium text-gray-800">11am - 6pm • Closed Mon</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-slide-up" style={{animationDelay: '0.5s'}}>
            <a
              href="https://aus.hungrypanda.co/shop?shopId=517641461"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-3 shadow-2xl"
            >
              <span className="text-3xl">🐼</span>
              <span>Order on Hungry Panda</span>
            </a>
            <a
              href="#menu"
              className="btn-secondary inline-flex items-center gap-2"
            >
              <span>View Menu</span>
              <span>↓</span>
            </a>
          </div>

          {/* Scroll indicator */}
          <div className="mt-16 animate-bounce">
            <p className="text-gray-500 text-sm mb-2">Scroll to explore</p>
            <div className="text-3xl">↓</div>
          </div>
        </div>
      </div>
    </section>
  );
}
