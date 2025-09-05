import React, { useState, useEffect, useRef } from 'react';

const SustainabilityCommitment = () => {
  const [treesPlanted, setTreesPlanted] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const finalCount = 15732;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      const duration = 2000;
      const increment = finalCount / (duration / 16);
      let current = 0;
      
      const timer = setInterval(() => {
        current += increment;
        if (current >= finalCount) {
          setTreesPlanted(finalCount);
          clearInterval(timer);
        } else {
          setTreesPlanted(Math.floor(current));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isVisible]);

  return (
    <section 
      ref={sectionRef}
      className="w-full min-h-screen py-6 sm:py-8 md:py-12 px-4 relative overflow-hidden flex items-center justify-center"
      style={{
        background: 'linear-gradient(135deg, #a8d5a1 0%, #7fb069 50%, #8fbc8f 100%)',
      }}
    >
      <style jsx>{`
        @keyframes gentleSway {
          0%, 100% { transform: rotate(0deg) scale(1); }
          25% { transform: rotate(1.5deg) scale(1.02); }
          50% { transform: rotate(0deg) scale(1); }
          75% { transform: rotate(-1.5deg) scale(1.02); }
        }

        @keyframes leafFall {
          0% {
            opacity: 0;
            transform: translateY(-50px) rotate(0deg);
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 0.8;
          }
          100% {
            opacity: 0;
            transform: translateY(400px) rotate(720deg);
          }
        }

        @keyframes floatParticle {
          0%, 100% { 
            transform: translateY(0px) translateX(0px) scale(1);
            opacity: 0.5;
          }
          25% { 
            transform: translateY(-15px) translateX(8px) scale(1.1);
            opacity: 0.8;
          }
          50% { 
            transform: translateY(-25px) translateX(-5px) scale(1);
            opacity: 1;
          }
          75% { 
            transform: translateY(-15px) translateX(-8px) scale(1.1);
            opacity: 0.7;
          }
        }

        .tree-sway {
          animation: gentleSway 5s ease-in-out infinite;
        }

        .falling-leaf {
          position: absolute;
          border-radius: 50% 0 50% 0;
          animation: leafFall linear infinite;
          z-index: 5;
        }

        /* Mobile-adjusted leaf animations */
        @media (max-width: 640px) {
          .falling-leaf {
            animation-duration: 4s !important;
          }
        }

        /* Individual leaf animations with different timings */
        .falling-leaf:nth-child(1) { left: 10%; animation-duration: 5s; animation-delay: 0s; }
        .falling-leaf:nth-child(2) { left: 15%; animation-duration: 6s; animation-delay: 0.5s; }
        .falling-leaf:nth-child(3) { left: 20%; animation-duration: 5.5s; animation-delay: 1s; }
        .falling-leaf:nth-child(4) { left: 25%; animation-duration: 6.5s; animation-delay: 1.5s; }
        .falling-leaf:nth-child(5) { left: 30%; animation-duration: 5.8s; animation-delay: 2s; }
        .falling-leaf:nth-child(6) { left: 35%; animation-duration: 6.2s; animation-delay: 0.8s; }
        .falling-leaf:nth-child(7) { left: 40%; animation-duration: 5.3s; animation-delay: 2.5s; }
        .falling-leaf:nth-child(8) { left: 45%; animation-duration: 6.8s; animation-delay: 0.3s; }
        .falling-leaf:nth-child(9) { left: 50%; animation-duration: 5.7s; animation-delay: 1.8s; }
        .falling-leaf:nth-child(10) { left: 55%; animation-duration: 6.3s; animation-delay: 0.6s; }
        .falling-leaf:nth-child(11) { left: 60%; animation-duration: 5.9s; animation-delay: 2.2s; }
        .falling-leaf:nth-child(12) { left: 65%; animation-duration: 6.6s; animation-delay: 1.2s; }
        .falling-leaf:nth-child(13) { left: 70%; animation-duration: 5.4s; animation-delay: 2.8s; }
        .falling-leaf:nth-child(14) { left: 75%; animation-duration: 6.1s; animation-delay: 0.9s; }
        .falling-leaf:nth-child(15) { left: 80%; animation-duration: 5.6s; animation-delay: 2.3s; }
        .falling-leaf:nth-child(16) { left: 85%; animation-duration: 6.4s; animation-delay: 0.7s; }
        .falling-leaf:nth-child(17) { left: 90%; animation-duration: 5.8s; animation-delay: 1.6s; }
        .falling-leaf:nth-child(18) { left: 12%; animation-duration: 6.7s; animation-delay: 3s; }
        .falling-leaf:nth-child(19) { left: 18%; animation-duration: 5.2s; animation-delay: 0.4s; }
        .falling-leaf:nth-child(20) { left: 22%; animation-duration: 6.9s; animation-delay: 2.7s; }

        .floating-particle {
          animation: floatParticle 12s ease-in-out infinite;
        }

        .floating-particle:nth-child(1) { animation-delay: 0s; }
        .floating-particle:nth-child(2) { animation-delay: 4s; }
        .floating-particle:nth-child(3) { animation-delay: 8s; }

        /* Mobile optimizations */
        @media (max-width: 640px) {
          .tree-sway {
            animation-duration: 6s;
          }
          
          .floating-particle {
            animation-duration: 8s;
          }
        }
      `}</style>

      {/* Background floating elements */}
      <div className="absolute inset-0 pointer-events-none opacity-15">
        <div className="floating-particle absolute top-1/5 left-1/12 w-2 h-2 bg-green-700 rounded-full"></div>
        <div className="floating-particle absolute top-3/5 right-1/6 w-2 h-2 bg-green-700 rounded-full"></div>
        <div className="floating-particle absolute bottom-1/5 left-1/5 w-2 h-2 bg-green-700 rounded-full"></div>
      </div>

      <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center px-3 sm:px-6">
        {/* Text Content */}
        <div className="text-green-900 space-y-4 sm:space-y-6 order-2 lg:order-1">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
            Travel the world,<br />
            <span className="bg-gradient-to-r from-green-800 to-green-900 bg-clip-text text-transparent">
              leave it greener
            </span>
          </h2>
          
          <div className="space-y-3 sm:space-y-4 text-sm sm:text-base md:text-lg lg:text-xl text-green-800 opacity-95">
            <p>
              For every booking you make, we plant a tree in your name. Your adventures become a force for environmental restoration, creating lasting positive impact across the globe.
            </p>
            <p className="hidden sm:block">
              We partner with verified reforestation organizations in over 40 countries, ensuring each tree planted supports local ecosystems and helps combat climate change.
            </p>
            <p>
              <span className="font-bold text-green-900">Join our community of conscious travelers</span> who believe that exploring the world and protecting it go hand in hand.
            </p>
          </div>

          {/* Impact Statistics */}
          <div className="grid grid-cols-3 gap-2 sm:gap-4 mt-6 sm:mt-8">
            <div className="bg-white/15 backdrop-blur-sm p-2 sm:p-3 md:p-4 rounded-xl sm:rounded-2xl text-center border border-white/20">
              <div className="text-lg sm:text-xl md:text-2xl font-bold text-green-900">25+</div>
              <div className="text-xs sm:text-sm font-semibold text-green-800 uppercase tracking-wide">Countries</div>
            </div>
            <div className="bg-white/15 backdrop-blur-sm p-2 sm:p-3 md:p-4 rounded-xl sm:rounded-2xl text-center border border-white/20">
              <div className="text-lg sm:text-xl md:text-2xl font-bold text-green-900">50k</div>
              <div className="text-xs sm:text-sm font-semibold text-green-800 uppercase tracking-wide">Travelers</div>
            </div>
            <div className="bg-white/15 backdrop-blur-sm p-2 sm:p-3 md:p-4 rounded-xl sm:rounded-2xl text-center border border-white/20">
              <div className="text-lg sm:text-xl md:text-2xl font-bold text-green-900">95%</div>
              <div className="text-xs sm:text-sm font-semibold text-green-800 uppercase tracking-wide">Success Rate</div>
            </div>
          </div>
        </div>

        {/* Visual Section */}
        <div className="flex flex-col items-center space-y-4 sm:space-y-6 md:space-y-8 order-1 lg:order-2">
          {/* Tree with Falling Leaves */}
          <div className="relative w-48 h-56 sm:w-60 sm:h-64 md:w-72 md:h-80 flex justify-center items-center">
            {/* Reduced number of falling leaves for mobile */}
            <div className="falling-leaf w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 bg-green-400"></div>
            <div className="falling-leaf w-2 h-2 sm:w-3 sm:h-3 bg-green-500"></div>
            <div className="falling-leaf w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 bg-green-300"></div>
            <div className="falling-leaf w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 bg-green-600"></div>
            <div className="falling-leaf w-2 h-2 sm:w-3 sm:h-3 bg-green-400"></div>
            <div className="falling-leaf w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 bg-green-500"></div>
            <div className="falling-leaf w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 bg-green-300 hidden sm:block"></div>
            <div className="falling-leaf w-2 h-2 sm:w-3 sm:h-3 bg-green-600 hidden sm:block"></div>
            <div className="falling-leaf w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 bg-green-400 hidden sm:block"></div>
            <div className="falling-leaf w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 bg-green-500 hidden md:block"></div>
            <div className="falling-leaf w-2 h-2 sm:w-3 sm:h-3 bg-green-300 hidden md:block"></div>
            <div className="falling-leaf w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 bg-green-600 hidden md:block"></div>
            <div className="falling-leaf w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 bg-green-400 hidden md:block"></div>
            <div className="falling-leaf w-2 h-2 sm:w-3 sm:h-3 bg-green-500 hidden md:block"></div>
            <div className="falling-leaf w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 bg-green-300 hidden md:block"></div>
            <div className="falling-leaf w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 bg-green-600 hidden md:block"></div>
            <div className="falling-leaf w-2 h-2 sm:w-3 sm:h-3 bg-green-400 hidden md:block"></div>
            <div className="falling-leaf w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 bg-green-500 hidden md:block"></div>
            <div className="falling-leaf w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 bg-green-300 hidden md:block"></div>
            <div className="falling-leaf w-2 h-2 sm:w-3 sm:h-3 bg-green-600 hidden md:block"></div>

            {/* Responsive Tree SVG */}
            <svg className="tree-sway w-32 h-40 sm:w-48 sm:h-56 md:w-60 md:h-72 filter drop-shadow-xl z-10" viewBox="0 0 200 240" xmlns="http://www.w3.org/2000/svg">
              {/* Tree trunk */}
              <rect x="92" y="160" width="20" height="80" fill="#8B4513" rx="4" />
              
              {/* Main branches */}
              <path d="M102 180 Q75 155 45 140" stroke="#8B4513" strokeWidth="8" fill="none" strokeLinecap="round" />
              <path d="M102 180 Q125 155 155 140" stroke="#8B4513" strokeWidth="8" fill="none" strokeLinecap="round" />
              <path d="M102 160 Q80 135 60 120" stroke="#8B4513" strokeWidth="6" fill="none" strokeLinecap="round" />
              <path d="M102 160 Q120 135 140 120" stroke="#8B4513" strokeWidth="6" fill="none" strokeLinecap="round" />
              <path d="M102 140 Q85 115 70 100" stroke="#8B4513" strokeWidth="5" fill="none" strokeLinecap="round" />
              <path d="M102 140 Q115 115 130 100" stroke="#8B4513" strokeWidth="5" fill="none" strokeLinecap="round" />
              
              {/* Leaf clusters */}
              <circle cx="50" cy="135" r="25" fill="#228B22" opacity="0.9" />
              <circle cx="150" cy="135" r="25" fill="#32CD32" opacity="0.9" />
              <circle cx="65" cy="115" r="20" fill="#90EE90" opacity="0.9" />
              <circle cx="135" cy="115" r="20" fill="#228B22" opacity="0.9" />
              <circle cx="102" cy="95" r="28" fill="#32CD32" opacity="0.9" />
              <circle cx="75" cy="95" r="18" fill="#90EE90" opacity="0.9" />
              <circle cx="125" cy="95" r="18" fill="#228B22" opacity="0.9" />
              
              {/* Additional leaves */}
              <circle cx="40" cy="150" r="15" fill="#90EE90" opacity="0.8" />
              <circle cx="160" cy="150" r="15" fill="#228B22" opacity="0.8" />
              <circle cx="102" cy="75" r="15" fill="#32CD32" opacity="0.8" />
            </svg>
          </div>

          {/* Counter Section */}
          <div className="bg-white/20 backdrop-blur-lg rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 border-2 border-white/25 shadow-2xl text-center max-w-xs sm:max-w-sm w-full mx-4">
            <div className="text-xs sm:text-sm md:text-lg font-semibold text-green-800 mb-2 sm:mb-3 md:mb-4 uppercase tracking-widest">
              Trees planted so far
            </div>
            <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black bg-gradient-to-r from-green-800 to-green-900 bg-clip-text text-transparent mb-2 sm:mb-3 font-mono">
              {treesPlanted.toLocaleString()}
            </div>
            <div className="text-sm sm:text-base md:text-lg font-semibold text-green-800 mb-2 sm:mb-3 md:mb-4">
              and growing every day
            </div>
            <div className="text-xs sm:text-sm text-green-800 opacity-80 leading-relaxed">
              Each tree removes 48 lbs of CO2 annually and provides oxygen for 2 people per day
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SustainabilityCommitment;
