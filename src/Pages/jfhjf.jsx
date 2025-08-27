import React, { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const ServicesSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  
  const imageRef = useRef(null);
  const contentRef = useRef(null);
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const tagsRef = useRef(null);
  const intervalRef = useRef(null);

  const slides = [
    {
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
      title: "Hotel Booking Services",
      description: "Find and book the perfect accommodation for your journey. From luxury resorts to budget hotels, we offer the best deals worldwide with instant confirmation.",
      tags: ["Luxury Hotels", "Budget Stays", "Resorts", "Instant Booking"],
      buttonText: "Book Hotels"
    },
    {
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80", 
      title: "Tour Package Booking",
      description: "Explore carefully curated tour packages designed for unforgettable experiences. Discover new cultures, landscapes, and create memories that last forever.",
      tags: ["Cultural Tours", "Adventure Trips", "Family Packages", "Group Tours"],
      buttonText: "Browse Tours"
    },
    {
      image: "https://images.unsplash.com/photo-1541534401786-5e0a57dff226?auto=format&fit=crop&w=800&q=80",
      title: "Flight Reservation",
      description: "Book domestic and international flights at the best prices. Compare airlines, flexible dates, and enjoy hassle-free booking experience.",
      tags: ["Domestic Flights", "International", "Best Prices", "Flexible Dates"],
      buttonText: "Search Flights"
    }
  ];

  // Auto-advance slides with proper timing
  useEffect(() => {
    startAutoSlide();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const startAutoSlide = () => {
    intervalRef.current = setInterval(() => {
      nextSlide();
    }, 6000); // 6 seconds total (2 seconds display + 4 seconds for next transition)
  };

  const stopAutoSlide = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  const animateTransition = () => {
    if (isAnimating) return;
    setIsAnimating(true);

    const tl = gsap.timeline({
      onComplete: () => {
        setIsAnimating(false);
      }
    });

    // Phase 1: Animate content out (0.8s)
    tl.to([titleRef.current, descRef.current, tagsRef.current], {
      opacity: 0,
      y: 40,
      duration: 0.8,
      stagger: 0.15,
      ease: "power2.in"
    })
    
    // Phase 2: Animate image transition (1.2s, overlapping)
    .to(imageRef.current, {
      scale: 1.15,
      opacity: 0.5,
      duration: 1.2,
      ease: "power2.inOut"
    }, 0.3)
    
    // Phase 3: Wait for content to settle (0.5s pause)
    .set({}, {}, "+=0.5")
    
    // Phase 4: Animate content in (1.0s)
    .to([titleRef.current, descRef.current, tagsRef.current], {
      opacity: 1,
      y: 0,
      duration: 1.0,
      stagger: 0.2,
      ease: "power2.out"
    })
    
    // Phase 5: Reset image (1.0s, overlapping)
    .to(imageRef.current, {
      scale: 1,
      opacity: 1,
      duration: 1.0,
      ease: "power2.out"
    }, "-=0.6");
  };

  const nextSlide = () => {
    if (isAnimating) return;
    setCurrentIndex(prev => (prev + 1) % slides.length);
    animateTransition();
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setCurrentIndex(prev => (prev - 1 + slides.length) % slides.length);
    animateTransition();
  };

  const goToSlide = (index) => {
    if (isAnimating || index === currentIndex) return;
    setCurrentIndex(index);
    animateTransition();
    stopAutoSlide();
    setTimeout(startAutoSlide, 8000); // Resume auto-play after 8 seconds
  };

  const currentSlide = slides[currentIndex];

  return (
    <div className="min-h-screen bg-black flex items-center py-8">
      <div className="max-w-7xl mx-auto w-full px-4">
        <div className="flex bg-gray-900 rounded-3xl overflow-hidden shadow-2xl min-h-[70vh]">
          
          {/* Left Side - Image */}
          <div className="flex-1 relative">
            <div 
              ref={imageRef}
              className="w-full h-full bg-cover bg-center"
              style={{
                backgroundImage: `url(${currentSlide.image})`,
                minHeight: '500px'
              }}
            >
              {/* Image Overlay */}
              <div className="absolute inset-0 bg-black/30"></div>
              
              {/* Navigation Dots */}
              <div className="absolute bottom-6 left-6 flex space-x-2">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-500 ${
                      index === currentIndex 
                        ? 'bg-white scale-125 shadow-lg' 
                        : 'bg-white/50 hover:bg-white/75'
                    }`}
                    disabled={isAnimating}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="flex-1 p-12 flex flex-col justify-center text-white relative bg-gray-900">
            
            {/* Navigation Arrows */}
            <div className="absolute top-6 right-6 flex space-x-3">
              <button
                onClick={prevSlide}
                disabled={isAnimating}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={nextSlide}
                disabled={isAnimating}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Content */}
            <div className="space-y-6">
              <h1 
                ref={titleRef}
                className="text-4xl lg:text-5xl font-bold leading-tight text-white"
              >
                {currentSlide.title}
              </h1>
              
              <p 
                ref={descRef}
                className="text-lg text-gray-300 leading-relaxed"
              >
                {currentSlide.description}
              </p>
              
              <div 
                ref={tagsRef}
                className="flex flex-wrap gap-2"
              >
                {currentSlide.tags.map((tag, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 bg-white/10 text-white rounded-full text-sm font-medium border border-white/20 hover:bg-white/20 transition-colors duration-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <button 
                disabled={isAnimating}
                className="mt-6 bg-orange-500 hover:bg-orange-600 disabled:bg-orange-400 disabled:cursor-not-allowed text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                {currentSlide.buttonText}
              </button>
            </div>

            {/* Progress Indicator */}
            <div className="absolute bottom-6 left-12 right-12">
              <div className="flex space-x-1">
                {slides.map((_, index) => (
                  <div 
                    key={index}
                    className={`h-1 rounded-full transition-all duration-500 ${
                      index === currentIndex 
                        ? 'bg-orange-500 flex-[3]' 
                        : 'bg-white/20 flex-1'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Auto-play indicator */}
            {/* <div className="absolute top-6 left-6">
              <div className="flex items-center space-x-2 text-xs text-white/60">
                <div className={`w-2 h-2 rounded-full ${isAnimating ? 'bg-orange-500' : 'bg-white/40'} animate-pulse`}></div>
                <span>Auto-advancing in {isAnimating ? 'transition...' : '6s'}</span>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSlider;
