import React, { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const ServicesSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  
  const imageRef = useRef(null);
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const tagsRef = useRef(null);
  const intervalRef = useRef(null);

  const slides = [
    {
      image: "https://images.unsplash.com/photo-150674403813-462fb",
      title: "Hotel Booking Services",
      description: "Find and book the best stay options worldwide with instant confirmation.",
      tags: ["Luxury Hotels", "Budget Stays", "Resorts", "Instant Booking"],
      buttonText: "Book Hotels"
    },
    {
      image: "https://images.unsplash.com/photo-150752542803",
      title: "Tour Packages",
      description: "Explore curated travel packages designed for unforgettable experiences.",
      tags: ["Cultural Tours", "Adventure Trips", "Family Tours", "Group Tours"],
      buttonText: "Browse Tours"
    },
    {
      image: "https://images.unsplash.com/photo-1541534",
      title: "Flight Reservation",
      description: "Book flights worldwide with flexible dates and the best prices.",
      tags: ["Domestic Flights", "International", "Best Prices", "Flexible Dates"],
      buttonText: "Search Flights"
    }
  ];

  useEffect(() => {
    startAutoSlide();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const startAutoSlide = () => {
    intervalRef.current = setInterval(() => {
      nextSlide();
    }, 6000);
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
      onComplete: () => setIsAnimating(false)
    });
    
    tl.to([titleRef.current, descRef.current, tagsRef.current], {
      opacity: 0,
      y: 40,
      duration: 0.8,
      stagger: 0.15,
      ease: "power2.in"
    })
    .to(imageRef.current, {
      scale: 1.15,
      opacity: 0.5,
      duration: 1.2,
      ease: "power2.inOut"
    }, 0.3)
    .set({}, {}, "+=0.5")
    .to([titleRef.current, descRef.current, tagsRef.current], {
      opacity: 1,
      y: 0,
      duration: 1.0,
      stagger: 0.2,
      ease: "power2.out"
    })
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
    setTimeout(startAutoSlide, 8000);
  };

  const currentSlide = slides[currentIndex];

  return (
    <div className="min-h-screen bg-black flex flex-col items-center py-16">
      <h2 className="text-5xl font-bold text-white mb-10">Our Best Services</h2>
      <div className="max-w-7xl w-full flex bg-gray-900 rounded-3xl shadow-2xl min-h-[70vh]">
        <div className="flex-1 relative">
          <div 
            ref={imageRef}
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: `url(${currentSlide.image})`,
              minHeight: '500px'
            }}
          >
            <div className="absolute inset-0 bg-black/30" />
            <div className="absolute bottom-6 left-6 flex space-x-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-500 ${index === currentSlide ? 'bg-white scale-125 shadow-lg' : 'bg-white/50 hover:bg-white/75'}`}
                  disabled={isAnimating}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="flex-1 p-12 flex flex-col justify-center text-white bg-gray-900 relative">
          <div className="absolute top-6 right-6 flex space-x-3">
            <button onClick={prevSlide} disabled={isAnimating} className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition duration-300 disabled:opacity-50">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button onClick={nextSlide} disabled={isAnimating} className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition duration-300 disabled:opacity-50">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          <div className="space-y-6">
            <h1 ref={titleRef} className="text-4xl leading-tight font-bold">{currentSlide.title}</h1>
            <p ref={descRef} className="text-lg text-gray-300 leading-relaxed">{currentSlide.description}</p>
            <div ref={tagsRef} className="flex flex-wrap gap-3">
              {currentSlide.tags.map((tag, index) => (
                <span key={index} className="bg-white/10 text-white rounded-full px-3 py-1">{tag}</span>
              ))}
            </div>
            <button disabled={isAnimating} className="bg-orange-500 px-8 py-4 rounded-full text-white font-semibold mt-6 hover:bg-orange-600 transition duration-300">{currentSlide.buttonText}</button>
          </div>
          <div className="absolute bottom-6 left-10 right-10">
            <div className="flex space-x-2">
              {slides.map((_, index) => (
                <div key={index} className={`h-1 rounded-full transition duration-500 ${index === currentIndex ? 'bg-orange-500 flex-1' : 'bg-white/30 flex-[0.5]'}`}></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSlider;