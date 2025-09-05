import React from 'react';

const PortfolioBento = () => {
  return (
    <div className="bg-black w-full px-5 py-10 font-sans text-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        
        {/* WhatsApp Chatbot */}
        <div className="bg-neutral-900 rounded-3xl p-7 flex flex-col min-h-[280px] shadow-xl">
          <div className="mb-6">
            <div className="w-16 h-16 rounded-xl bg-green-500 flex items-center justify-center mb-5">
              <span className="text-white text-3xl font-black">💬</span>
            </div>
          </div>
          <h2 className="text-xl font-semibold mb-3">
            Instant Trip Booking & Support <span className="text-green-400">WhatsApp Chatbot</span>
          </h2>
          <p className="text-sm text-gray-300 break-words">
            Chat with us on WhatsApp to instantly book your next adventure, get answers, and receive personal recommendations. Simple, fast, and available 24/7!
          </p>
          <a
            href="https://wa.me/YOURNUMBER"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-block bg-green-500 text-black px-5 py-2 rounded-xl font-semibold hover:bg-green-400 transition"
          >
            Chat Now
          </a>
        </div>

        {/* About Agency */}
        <div className="bg-neutral-900 rounded-3xl p-7 flex flex-col min-h-[280px] shadow-xl">
          <div className="mb-6">
            <div className="w-16 h-16 rounded-xl bg-indigo-500 flex items-center justify-center mb-5">
              <span className="text-white text-3xl font-black">🌍</span>
            </div>
          </div>
          <h2 className="text-xl font-semibold mb-3">
            Welcome to <span className="text-indigo-400">Travelix</span>
          </h2>
          <p className="text-sm text-gray-300 break-words">
            Your trusted travel partner for curated trips, group tours, holidays, and custom excursions worldwide.
          </p>
        </div>

        {/* Service Promise */}
        <div className="bg-neutral-900 rounded-3xl p-7 flex flex-col min-h-[280px] shadow-xl items-center justify-center">
          <div className="mb-6">
            <div className="w-16 h-16 rounded-full border-2 border-yellow-500 flex items-center justify-center mb-5">
              <span className="text-yellow-300 text-2xl font-black">⭐</span>
            </div>
          </div>
          <h2 className="text-lg font-semibold mb-3 text-center">Why Choose Us?</h2>
          <ul className="list-disc text-gray-300 text-sm pl-6">
            <li>Expert trip planners</li>
            <li>Fast support via WhatsApp</li>
            <li>Safe, hassle-free booking</li>
            <li>Best price guarantee</li>
          </ul>
        </div>

        {/* Customized Trips */}
        <div className="bg-neutral-900 rounded-3xl p-7 sm:col-span-2 flex flex-col shadow-xl">
          <div className="flex items-center mb-5 gap-3">
            <span className="bg-blue-700 rounded-lg text-white text-2xl flex items-center justify-center w-10 h-10">✈️</span>
            <h2 className="text-xl font-semibold">Custom Itineraries</h2>
          </div>
          <p className="text-sm text-gray-300 break-words">
            Tell us about your dream destination and preferences! Our team will craft a personalized travel plan just for you. From local experiences to iconic sightseeing, enjoy your journey your way.
          </p>
        </div>

        {/* Contact Email */}
        <div className="bg-neutral-900 rounded-3xl p-7 flex flex-col items-center justify-center shadow-xl">
          <h2 className="text-lg font-semibold mb-2">Get in Touch</h2>
          <p className="text-sm text-gray-400 mb-1 text-center">For general questions, email us:</p>
          <a
            href="mailto:info@travelix.com"
            className="inline-block bg-white text-black px-4 py-2 rounded-lg font-semibold mt-2 hover:bg-gray-200 transition"
          >
            info@travelix.com
          </a>
          <p className="text-xs text-gray-400 mt-2 text-center">
            Or chat with us directly on WhatsApp for instant answers.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PortfolioBento;