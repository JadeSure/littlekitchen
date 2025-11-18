'use client';

import { FaUtensils } from 'react-icons/fa';

interface MenuItem {
  name: string;
  chineseName: string;
  emoji: string;
  price: string;
  description: string;
  popular?: boolean;
}

const menuItems: MenuItem[] = [
  {
    name: "Beef Brisket Soup Noodle",
    chineseName: "牛腩湯麵",
    emoji: "🍜",
    price: "$12-18",
    description: "Tender beef brisket in rich, aromatic broth with fresh noodles",
    popular: true,
  },
  {
    name: "Chicken Chop Bento",
    chineseName: "雞排便當",
    emoji: "🍗",
    price: "$12-16",
    description: "Crispy fried chicken chop with rice and 4 delicious sides",
    popular: true,
  },
  {
    name: "Sweet Pork",
    chineseName: "糖醋排骨",
    emoji: "🥩",
    price: "$10-15",
    description: "Sweet & savory pork perfection with traditional Taiwanese flavor",
  },
  {
    name: "Pork Feet Bento",
    chineseName: "豬腳便當",
    emoji: "🍱",
    price: "$12-18",
    description: "Traditional braised pork feet with rice and vegetables",
  },
  {
    name: "Roasted Chicken Wings",
    chineseName: "烤雞翅",
    emoji: "🍗",
    price: "$8-12",
    description: "Perfectly roasted wings with authentic Taiwanese seasoning",
  },
  {
    name: "Taiwanese Rice Pork",
    chineseName: "滷肉飯",
    emoji: "🍖",
    price: "$10-15",
    description: "Classic comfort food - braised pork over steamed rice",
    popular: true,
  },
];

export default function Menu() {
  return (
    <section id="menu" className="section-container bg-gradient-to-b from-white to-cream/30">
      <div className="text-center mb-16">
        <div className="inline-block mb-4">
          <span className="text-6xl">🍱</span>
        </div>
        <h2 className="text-4xl sm:text-5xl font-bold mb-4">
          Our <span className="gradient-text">Menu Favorites</span>
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Authentic Taiwanese cuisine made fresh daily with love and tradition
        </p>
        <div className="mt-6 inline-block bg-primary/10 text-primary px-6 py-2 rounded-full font-semibold">
          All dishes $10-20 • Great Value!
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-xl overflow-hidden card-hover relative group"
            style={{
              animationDelay: `${index * 0.1}s`,
            }}
          >
            {/* Popular badge */}
            {item.popular && (
              <div className="absolute top-4 right-4 z-10">
                <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                  ⭐ Popular
                </div>
              </div>
            )}

            {/* Card header with gradient */}
            <div className="bg-gradient-to-br from-primary to-accent p-8 text-white relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 text-9xl transform translate-x-8 -translate-y-4">
                  {item.emoji}
                </div>
              </div>
              <div className="relative z-10">
                <div className="text-6xl mb-3">{item.emoji}</div>
                <h3 className="text-2xl font-bold mb-1">{item.name}</h3>
                <p className="text-white/90 font-medium">{item.chineseName}</p>
              </div>
            </div>

            {/* Card body */}
            <div className="p-6">
              <p className="text-gray-600 mb-4 leading-relaxed h-12">
                {item.description}
              </p>
              <div className="flex items-center justify-between">
                <div className="text-3xl font-bold text-primary">
                  {item.price}
                </div>
                <a
                  href="https://aus.hungrypanda.co/shop?shopId=517641461"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-accent hover:bg-accent-dark text-white px-6 py-2 rounded-full font-semibold transition-all transform hover:scale-105 inline-flex items-center gap-2"
                >
                  <FaUtensils />
                  <span>Order</span>
                </a>
              </div>
            </div>

            {/* Hover effect overlay */}
            <div className="absolute inset-0 border-4 border-accent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="text-center mt-16">
        <div className="bg-gradient-to-r from-primary to-accent text-white p-8 rounded-3xl shadow-2xl max-w-2xl mx-auto transform hover:scale-105 transition-transform">
          <h3 className="text-3xl font-bold mb-4">Hungry Yet?</h3>
          <p className="text-xl mb-6">Order your favorite Taiwanese bento now!</p>
          <a
            href="https://aus.hungrypanda.co/shop?shopId=517641461"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-primary hover:bg-cream font-bold py-4 px-10 rounded-full transition-all transform hover:scale-105 shadow-xl text-lg"
          >
            🐼 Order on Hungry Panda
          </a>
        </div>
      </div>
    </section>
  );
}
