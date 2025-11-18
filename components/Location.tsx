'use client';

import { FaMapMarkerAlt, FaClock, FaPhone, FaDirections } from 'react-icons/fa';

export default function Location() {
  const openingHours = [
    { day: 'Monday', hours: 'CLOSED', closed: true },
    { day: 'Tuesday', hours: '11:00 AM - 6:00 PM' },
    { day: 'Wednesday', hours: '11:00 AM - 6:00 PM' },
    { day: 'Thursday', hours: '11:00 AM - 6:00 PM' },
    { day: 'Friday', hours: '11:00 AM - 6:00 PM' },
    { day: 'Saturday', hours: '11:00 AM - 6:00 PM' },
    { day: 'Sunday', hours: '11:00 AM - 6:00 PM' },
  ];

  return (
    <section className="section-container bg-gradient-to-b from-cream/30 to-white">
      <div className="text-center mb-16">
        <div className="inline-block mb-4">
          <span className="text-6xl">📍</span>
        </div>
        <h2 className="text-4xl sm:text-5xl font-bold mb-4">
          <span className="gradient-text">Visit Us</span> Today
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          We're located in the heart of Morley, easy to find and always welcoming!
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {/* Map Section */}
        <div className="order-2 lg:order-1">
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden card-hover h-full">
            <div className="aspect-w-16 aspect-h-9 bg-gray-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3385.123456789!2d115.895001!3d-31.8948346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2a32b1550d921ca7%3A0xa3b4d66251afef31!2sLittle%20Kitchen!5e0!3m2!1sen!2sau!4v1234567890"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              ></iframe>
            </div>
            <div className="p-6 bg-gradient-to-r from-primary to-accent text-white">
              <div className="flex items-start gap-3 mb-4">
                <FaMapMarkerAlt className="text-2xl mt-1 flex-shrink-0" />
                <div>
                  <p className="font-bold text-lg mb-1">Our Address</p>
                  <p className="text-white/90">253 Walter Rd W</p>
                  <p className="text-white/90">Morley WA 6062</p>
                  <p className="text-white/90">Australia</p>
                </div>
              </div>
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=253+Walter+Rd+W,+Morley+WA+6062"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-primary hover:bg-cream font-bold py-3 px-6 rounded-full transition-all transform hover:scale-105 shadow-lg"
              >
                <FaDirections />
                <span>Get Directions</span>
              </a>
            </div>
          </div>
        </div>

        {/* Hours & Contact Section */}
        <div className="order-1 lg:order-2 space-y-6">
          {/* Opening Hours */}
          <div className="bg-white rounded-2xl shadow-xl p-8 card-hover">
            <div className="flex items-center gap-3 mb-6">
              <FaClock className="text-4xl text-accent" />
              <h3 className="text-2xl font-bold text-gray-900">Opening Hours</h3>
            </div>
            <div className="space-y-3">
              {openingHours.map((schedule, index) => (
                <div
                  key={index}
                  className={`flex justify-between items-center py-3 px-4 rounded-lg ${
                    schedule.closed
                      ? 'bg-red-50 border-2 border-red-200'
                      : 'bg-gray-50 border-2 border-transparent hover:border-primary/20 transition-colors'
                  }`}
                >
                  <span className={`font-semibold ${schedule.closed ? 'text-red-600' : 'text-gray-800'}`}>
                    {schedule.day}
                  </span>
                  <span className={`font-bold ${schedule.closed ? 'text-red-600' : 'text-primary'}`}>
                    {schedule.hours}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg border-l-4 border-primary">
              <p className="text-sm text-gray-700">
                <span className="font-bold">Note:</span> We're closed on Mondays to prepare fresh ingredients for the week!
              </p>
            </div>
          </div>

          {/* Quick Contact */}
          <div className="bg-gradient-to-br from-primary to-accent rounded-2xl shadow-xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <FaPhone className="text-3xl" />
              <span>Quick Contact</span>
            </h3>
            <div className="space-y-4">
              <p className="text-lg">
                Have questions? Want to know our daily specials?
              </p>
              <a
                href="https://aus.hungrypanda.co/shop?shopId=517641461"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-primary hover:bg-cream font-bold py-4 px-8 rounded-full transition-all transform hover:scale-105 shadow-xl text-lg"
              >
                🐼 Order on Hungry Panda
              </a>
            </div>
          </div>

          {/* Fun fact */}
          <div className="bg-cream rounded-2xl shadow-lg p-6 border-2 border-accent/20">
            <p className="text-center text-gray-700">
              <span className="text-3xl mb-2 block">🌟</span>
              <span className="font-bold text-lg">Fun Fact:</span>
              <br />
              Our beef brisket soup noodle is slow-cooked for 6+ hours for maximum flavor!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
