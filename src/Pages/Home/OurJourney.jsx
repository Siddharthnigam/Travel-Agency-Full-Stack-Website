import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Earth from '../../assets/earth.mp4';

gsap.registerPlugin(ScrollTrigger);

function OurJourney() {
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const contentRef = useRef(null);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const statsRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    const container = containerRef.current;
    const content = contentRef.current;
    const title = titleRef.current;
    const description = descriptionRef.current;
    const stats = statsRef.current;

    // Initial setup
    gsap.set(video, { 
      scale: 0.4, 
      borderRadius: '20px',
      filter: 'blur(0px)'
    });
    gsap.set([title, description, stats], { opacity: 0, y: 50 });

    // Scroll animation timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top center",
        end: "bottom center",
        scrub: 1,
        onUpdate: (self) => {
          const progress = self.progress;
          
          // Video scaling and blur effect
          gsap.to(video, {
            scale: 0.4 + (progress * 0.6), // Scale from 0.4 to 1
            borderRadius: `${20 - (progress * 20)}px`, // Round corners disappear
            filter: `blur(${progress * 3}px)`, // Blur increases with scroll
            duration: 0.3,
            ease: "power2.out"
          });

          // Content opacity
          gsap.to(content, {
            opacity: Math.min(progress * 2, 1), // Fade in content
            duration: 0.5,
            ease: "power2.out"
          });
        }
      }
    });

    // Content stagger animation
    ScrollTrigger.create({
      trigger: container,
      start: "top center",
      end: "center center",
      onEnter: () => {
        gsap.to([title, description, stats], {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.3,
          ease: "power2.out"
        });
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="min-h-screen bg-black py-20">
      <div 
        ref={containerRef} 
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Video Background */}
        <video
          ref={videoRef}
          src={Earth}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            transformOrigin: 'center center'
          }}
        />

        {/* Content Overlay */}
        <div 
          ref={contentRef}
          className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto"
          style={{ opacity: 0 }}
        >
          <div className="backdrop-blur-sm bg-black/50 rounded-3xl p-12 border border-white/20">
            
            {/* Main Title */}
            <h1 
              ref={titleRef}
              className="text-5xl lg:text-7xl font-bold mb-8 leading-tight"
            >
              Our Story as a <span className="text-blue-400">Travel Agency</span>
            </h1>

            {/* Description */}
            <div ref={descriptionRef} className="space-y-6">
              <p className="text-xl lg:text-2xl text-gray-200 leading-relaxed max-w-4xl mx-auto">
                For over <span className="text-orange-400 font-semibold">15 years</span>, we have been dedicated to crafting unforgettable journeys that connect travelers with the world's most breathtaking destinations.
              </p>
              
              <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
                From humble beginnings as a small local agency, we've grown into a trusted partner for adventurers, families, and business travelers across the globe. Our passion for exploration and commitment to exceptional service has taken us on an incredible journey of our own.
              </p>

              <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
                Today, we're proud to offer personalized travel experiences that go beyond ordinary tourism. We create memories, forge connections, and open doors to cultures and landscapes that inspire and transform.
              </p>
            </div>

            {/* Stats */}
            <div ref={statsRef} className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-12">
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-orange-400 mb-2">50,000+</div>
                <div className="text-sm text-gray-300 uppercase tracking-wider">Happy Travelers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-blue-400 mb-2">120+</div>
                <div className="text-sm text-gray-300 uppercase tracking-wider">Destinations</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-orange-400 mb-2">15</div>
                <div className="text-sm text-gray-300 uppercase tracking-wider">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-blue-400 mb-2">4.9★</div>
                <div className="text-sm text-gray-300 uppercase tracking-wider">Customer Rating</div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="mt-12">
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                Discover Our Journey
              </button>
            </div>
          </div>
        </div>

        {/* Gradient Overlay for Better Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/40 pointer-events-none"></div>
      </div>
    </div>
  );
}

export default OurJourney;
