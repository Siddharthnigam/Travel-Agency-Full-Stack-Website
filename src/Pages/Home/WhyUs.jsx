import React, { useState } from 'react';
import Think from '../../assets/man.png';

function Us() {
  const [hoveredBox, setHoveredBox] = useState(null);

  const boxes = [
    { 
      id: 1, 
      text: "24/7 Customer Support", 
      description: "Round-the-clock assistance available via phone, chat, and email. Our dedicated support team ensures you're never alone during your journey.",
      icon: "🎧",
      top: "12%", 
      left: "5%" 
    },
    { 
      id: 2, 
      text: "Best Price Guarantee", 
      description: "Find a better deal elsewhere? We'll match it plus give you an additional 5% discount. Your savings are our commitment.",
      icon: "💰",
      top: "20%", 
      right: "8%" 
    },
    { 
      id: 3, 
      text: "Expert Local Guides", 
      description: "Native guides with 10+ years experience who know hidden gems, local customs, and speak your language fluently.",
      icon: "👨‍🎓",
      top: "38%", 
      left: "3%" 
    },
    { 
      id: 4, 
      text: "Customized Itineraries", 
      description: "Every trip is uniquely crafted based on your interests, budget, and travel style. No cookie-cutter packages here.",
      icon: "🗺️",
      top: "55%", 
      right: "6%" 
    },
    { 
      id: 5, 
      text: "Safety First Priority", 
      description: "Comprehensive travel insurance, emergency contacts, and real-time safety monitoring throughout your journey.",
      icon: "🛡️",
      top: "75%", 
      left: "8%" 
    },
    { 
      id: 6, 
      text: "Instant Booking", 
      description: "Book your dream trip in under 3 minutes with our streamlined process. Instant confirmation and digital tickets delivered immediately.",
      icon: "⚡",
      top: "85%", 
      right: "18%" 
    },
    { 
      id: 7, 
      text: "Zero Hidden Costs", 
      description: "What you see is what you pay. No surprise fees, no hidden charges. Complete transparency in all our pricing.",
      icon: "✨",
      top: "30%", 
      left: "62%" 
    },
    { 
      id: 8, 
      text: "Flexible Cancellation", 
      description: "Free cancellation up to 24 hours before departure. Plans change, and we understand that. Your money, your choice.",
      icon: "🔄",
      top: "58%", 
      left: "62%" 
    },
    { 
      id: 9, 
      text: "Trusted by 50,000+ Travelers", 
      description: "Join thousands of satisfied customers who've experienced our exceptional service. 4.9/5 star rating speaks for itself.",
      icon: "⭐",
      top: "28%", 
      right: "62%" 
    },
    { 
      id: 10, 
      text: "Memorable Experiences", 
      description: "We don't just book trips, we create lifelong memories. Exclusive access to unique activities and once-in-a-lifetime moments.",
      icon: "🎭",
      top: "58%", 
      right: "65%" 
    }
  ];

  const decorativeItems = [
    { id: 1, type: 'circle', size: 'w-6 h-6', top: '8%', left: '25%', color: 'bg-orange-500', animation: 'animate-pulse' },
    { id: 2, type: 'triangle', size: 'w-8 h-8', top: '14%', right: '35%', color: 'border-blue-500', animation: 'animate-bounce' },
    { id: 3, type: 'circle', size: 'w-4 h-4', top: '28%', left: '15%', color: 'bg-white', animation: 'animate-ping' },
    { id: 4, type: 'square', size: 'w-5 h-5', top: '45%', right: '25%', color: 'bg-orange-400', animation: 'animate-pulse' },
    { id: 5, type: 'circle', size: 'w-3 h-3', bottom: '20%', left: '20%', color: 'bg-blue-400', animation: 'animate-bounce' },
    { id: 6, type: 'diamond', size: 'w-10 h-10', top: '65%', left: '12%', color: 'border-orange-300', animation: 'animate-spin' },
    { id: 7, type: 'circle', size: 'w-7 h-7', top: '50%', right: '15%', color: 'bg-white', animation: 'animate-pulse' },
    { id: 8, type: 'triangle', size: 'w-6 h-6', bottom: '12%', right: '12%', color: 'border-blue-400', animation: 'animate-bounce' },
    { id: 9, type: 'circle', size: 'w-5 h-5', top: '82%', left: '65%', color: 'bg-orange-600', animation: 'animate-ping' },
    { id: 10, type: 'square', size: 'w-4 h-4', top: '35%', left: '88%', color: 'bg-blue-500', animation: 'animate-pulse' }
  ];

  const renderDecorativeItem = (item) => {
    const baseClasses = `absolute ${item.size} opacity-60 ${item.animation}`;
    
    switch (item.type) {
      case 'circle':
        return `${baseClasses} ${item.color} rounded-full`;
      case 'square':
        return `${baseClasses} ${item.color} rounded-md`;
      case 'triangle':
        return `${baseClasses} border-4 ${item.color} border-transparent border-t-current`;
      case 'diamond':
        return `${baseClasses} ${item.color} border-2 transform rotate-45`;
      default:
        return `${baseClasses} ${item.color} rounded-full`;
    }
  };

  return (
    <div className="min-h-screen w-full bg-black relative overflow-hidden">
      
      {/* Page Heading */}
      <div className="absolute top-16 w-full z-20">
        <h1 className="text-5xl lg:text-6xl font-bold text-white text-center">
          Why Choose <span className="text-blue-500">Us</span>?
        </h1>
        <div className="w-32 h-1 bg-orange-500 mx-auto mt-4"></div>
        <p className="text-center text-gray-400 mt-6 text-lg max-w-2xl mx-auto px-4">
          Discover what makes us the preferred choice for over 50,000 travelers worldwide
        </p>
      </div>

      {/* Centered Image */}
      <div className="flex items-end justify-center h-screen">
        <img 
          src={Think} 
          alt="Thinking person" 
          className="h-[65vh] max-h-[550px] w-auto object-contain z-10 opacity-80 drop-shadow-2xl"
        />
      </div>

      {/* Enhanced Floating Boxes with Detailed Content */}
      {boxes.map((box) => (
        <div
          key={box.id}
          className={`absolute bg-white/15 backdrop-blur-lg border border-white/25 rounded-2xl p-5 shadow-2xl cursor-pointer transition-all duration-500 z-15 group ${
            hoveredBox === box.id 
              ? 'scale-110 bg-white/25 shadow-orange-500/30 border-orange-500/40' 
              : 'hover:scale-105 hover:bg-white/25 hover:shadow-orange-500/20 hover:border-orange-500/30'
          }`}
          style={{
            top: box.top,
            left: box.left,
            right: box.right,
            maxWidth: hoveredBox === box.id ? '280px' : '200px',
            minWidth: '170px'
          }}
          onMouseEnter={() => setHoveredBox(box.id)}
          onMouseLeave={() => setHoveredBox(null)}
        >
          {/* Icon */}
          <div className="text-2xl mb-3 opacity-80">
            {box.icon}
          </div>
          
          {/* Title */}
          <h3 className="text-white font-semibold text-base mb-3 leading-tight group-hover:text-orange-200 transition-colors duration-300">
            {box.text}
          </h3>
          
          {/* Description - Shows on hover */}
          <p className={`text-gray-300 text-sm leading-relaxed mb-3 transition-all duration-300 ${
            hoveredBox === box.id ? 'opacity-100 max-h-24' : 'opacity-0 max-h-0 overflow-hidden'
          }`}>
            {box.description}
          </p>
          
          <div className="w-8 h-1 bg-orange-500 rounded group-hover:w-12 transition-all duration-300"></div>
          
          {/* Box Number Indicator */}
          <div className="absolute -top-3 -right-3 w-6 h-6 bg-orange-500/90 rounded-full flex items-center justify-center text-white text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {box.id}
          </div>
        </div>
      ))}

      {/* 10 Decorative Elements */}
      {decorativeItems.map((item) => (
        <div
          key={item.id}
          className={renderDecorativeItem(item)}
          style={{
            top: item.top,
            left: item.left,
            right: item.right,
            bottom: item.bottom,
            animationDelay: `${Math.random() * 2}s`
          }}
        />
      ))}

      {/* Subtle Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }}
      />

      {/* Gradient Overlay for Depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-transparent to-orange-900/10 pointer-events-none"></div>
    </div>
  );
}

export default Us;
