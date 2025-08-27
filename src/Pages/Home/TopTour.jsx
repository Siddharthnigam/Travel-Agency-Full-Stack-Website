import React, { useState, useEffect, useRef } from 'react';


const TourPackagesSection = () => {
  // Animated text state
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const spanRef = useRef(null);
  
  const words = ['Marvelous', 'Incredible', 'Wonderful'];

  // Animated text effect
  useEffect(() => {
    const interval = setInterval(() => {
      if (spanRef.current) {
        // Fade out current word
        spanRef.current.style.opacity = '0';
        spanRef.current.style.transform = 'translateY(-10px)';
        
        setTimeout(() => {
          // Change word
          setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
          
          // Fade in new word
          spanRef.current.style.transform = 'translateY(10px)';
          setTimeout(() => {
            spanRef.current.style.opacity = '1';
            spanRef.current.style.transform = 'translateY(0)';
          }, 50);
        }, 250);
      }
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const tourPackages = [
    {
      title: "Golden Triangle Tour",
      duration: "7 Days",
      destinations: ["Delhi", "Agra", "Jaipur"],
      description: "Explore the famous Golden Triangle of India covering historic monuments and cultural landmarks.",
      price: "₹89,999",
      backgroundImage: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
      icon: (
        <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    {
      title: "Kerala Backwaters",
      duration: "5 Days",
      destinations: ["Alleppey", "Kumarakom", "Kochi"],
      description: "Experience tranquil backwaters with luxury houseboat stays and Ayurvedic treatments.",
      price: "₹67,999",
      backgroundImage: "https://wallpaperaccess.com/full/1635218.jpg",
      icon: (
        <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12l2 2 4-4M3 4h18l-2 13H5L3 4z" />
        </svg>
      )
    },
    {
      title: "Rajasthan Heritage Tour",
      duration: "8 Days", 
      destinations: ["Jaipur", "Udaipur", "Jodhpur", "Jaisalmer"],
      description: "Royal palaces, majestic forts, and desert camps in the land of kings.",
      price: "₹99,999",
      backgroundImage: "https://holidify.com/images/attr_wiki/compressed/attr_wiki_206.jpg",
      icon: (
        <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
        </svg>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-transparent py-16">

      <div className="max-w-full mx-auto px-16">
        
        {/* Header Section with Animated Text */}
        <div className="mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Explore Our{' '}
            <span 
              ref={spanRef}
              className="text-blue-500 inline-block min-w-[180px] transition-all duration-300 ease-in-out"
              style={{
                transformOrigin: 'center'
              }}
            >
              {words[currentWordIndex]}
            </span>{' '}
            Tour Packages🧳
          </h1>
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap gap-4 mb-12">
          <button className="px-6 py-3 bg-transparent border-2 border-blue-500 text-blue-500 rounded-lg font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300">
            Golden Triangle
          </button>
          <button className="px-6 py-3 bg-blue-500 text-white rounded-lg font-semibold flex items-center gap-2">
            Premium <span className="bg-blue-600 text-xs px-2 py-1 rounded">New</span>
          </button>
          <button className="px-6 py-3 bg-transparent text-white border-2 border-gray-700 rounded-lg font-semibold hover:border-blue-500 hover:text-blue-500 transition-all duration-300">
            Heritage Tours
          </button>
          <button className="px-6 py-3 bg-transparent text-white border-2 border-gray-700 rounded-lg font-semibold flex items-center gap-2 hover:border-blue-500 hover:text-blue-500 transition-all duration-300">
            Beach Destinations <span className="bg-blue-500 text-xs px-2 py-1 rounded">New</span>
          </button>
          <button className="px-6 py-3 bg-transparent text-white border-2 border-gray-700 rounded-lg font-semibold flex items-center gap-2 hover:border-blue-500 hover:text-blue-500 transition-all duration-300">
            Adventure Tours <span className="bg-blue-500 text-xs px-2 py-1 rounded">New</span>
          </button>
        </div>

        {/* Tour Packages Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          
          {/* Main Feature Card */}
          <div className="lg:col-span-1 lg:row-span-3 bg-gradient-to-br from-teal-600 to-teal-800 rounded-3xl p-8 text-white relative overflow-hidden min-h-[300px] flex flex-col justify-between">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Best Tour Packages</h2>
              <p className="text-teal-100 text-lg leading-relaxed mb-8">
                Designed for travelers seeking authentic experiences to explore incredible destinations across India with expert guidance and premium services.
              </p>
            </div>
            
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg self-start">
              View All Packages
            </button>
            
            {/* Decorative Elements */}
            <div className="absolute -right-10 -bottom-10 w-32 h-32 bg-teal-500/20 rounded-full"></div>
            <div className="absolute -left-5 -top-5 w-20 h-20 bg-teal-400/20 rounded-full"></div>
          </div>

          {/* Tour Package Cards with Background Images */}
          {tourPackages.map((pkg, index) => (
            <div 
              key={index} 
              className="relative rounded-3xl overflow-hidden min-h-[400px] flex flex-col group hover:transform hover:scale-105 transition-all duration-500"
            >
              {/* Background Image with Blur */}
              <div 
                className="absolute inset-0 bg-cover bg-center transform group-hover:scale-110 transition-transform duration-700"
                style={{
                  backgroundImage: `url(${pkg.backgroundImage})`,
                  filter: 'blur(1px)'
                }}
              />
              
              {/* Overlay with Gradient and Backdrop Blur */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30 backdrop-blur-[2px]" />
              
              {/* Content Container */}
              <div className="relative z-10 p-8 text-white flex flex-col h-full">
                
                {/* Icon and Stats */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-2 text-white/90">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm font-medium">{pkg.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-white/90">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm font-medium">{pkg.destinations.length} Destinations</span>
                    </div>
                  </div>
                  <div className="p-3 bg-white/20 backdrop-blur-sm rounded-2xl border border-white/30 shadow-lg">
                    {pkg.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-4 text-white drop-shadow-lg">{pkg.title}</h3>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {pkg.destinations.map((dest, idx) => (
                      <span key={idx} className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white rounded-full text-xs font-medium border border-white/30 shadow-sm">
                        {dest}
                      </span>
                    ))}
                  </div>
                  
                  <p className="text-white/90 text-sm leading-relaxed mb-6 drop-shadow-sm">
                    {pkg.description}
                  </p>
                </div>

                {/* Price and Action */}
                <div className="flex items-center justify-between pt-6 border-t border-white/20">
                  <div>
                    <span className="text-blue-400 text-2xl font-bold drop-shadow-lg">{pkg.price}</span>
                    <span className="text-white/80 text-sm ml-1">per person</span>
                  </div>
                  <button className="bg-blue-500/90 backdrop-blur-sm hover:bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 border border-blue-400/30 shadow-lg hover:shadow-xl">
                    Book Now
                  </button>
                </div>
              </div>

              {/* Subtle Shine Effect on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TourPackagesSection;
