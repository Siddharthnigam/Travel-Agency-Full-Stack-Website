import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugin
gsap.registerPlugin(ScrollTrigger);

function About() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const contentRef = useRef(null);
  const imageRef = useRef(null);
  const statsRef = useRef(null);
  const featuresRef = useRef(null);
  const timelineRef = useRef(null);
  const valuesRef = useRef(null);
  const carouselRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Background animated elements
      gsap.to(".dark-orb-1", {
        x: 100,
        y: -50,
        duration: 8,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut"
      });

      gsap.to(".dark-orb-2", {
        x: -80,
        y: 60,
        rotation: 360,
        duration: 12,
        repeat: -1,
        ease: "none"
      });

      gsap.to(".dark-orb-3", {
        scale: 1.5,
        y: -80,
        duration: 10,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut"
      });

      gsap.to(".dark-orb-4", {
        x: 150,
        rotation: -180,
        duration: 15,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut"
      });

      // Image carousel animation
      const images = carouselRef.current.children;
      gsap.set(images, { opacity: 0, scale: 0.8 });
      gsap.set(images[0], { opacity: 1, scale: 1 });

      let currentImage = 0;
      const totalImages = images.length;

      const imageCarousel = () => {
        const current = images[currentImage];
        const next = images[(currentImage + 1) % totalImages];

        gsap.to(current, {
          opacity: 0,
          scale: 0.8,
          rotationY: -90,
          duration: 1,
          ease: "power2.inOut"
        });

        gsap.fromTo(next, {
          opacity: 0,
          scale: 0.8,
          rotationY: 90
        }, {
          opacity: 1,
          scale: 1,
          rotationY: 0,
          duration: 1,
          ease: "power2.inOut",
          delay: 0.5
        });

        currentImage = (currentImage + 1) % totalImages;
      };

      // Start image carousel
      const carouselInterval = setInterval(imageCarousel, 4000);

      // Main heading animation
      gsap.from(headingRef.current, {
        opacity: 0,
        y: 60,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      });

      // Content animation - staggered paragraphs
      gsap.from(contentRef.current.children, {
        opacity: 0,
        x: -80,
        duration: 1,
        stagger: 0.3,
        ease: "power2.out",
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse"
        }
      });

      // Image animation - slide in from right
      gsap.from(imageRef.current, {
        opacity: 0,
        x: 100,
        scale: 0.8,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      });

      // Stats counter animation
      gsap.from(statsRef.current.children, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.2,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: statsRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse"
        }
      });

      // Features animation
      gsap.from(featuresRef.current.children, {
        opacity: 0,
        y: 40,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: featuresRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      });

      // Timeline animation
      gsap.from(timelineRef.current.children, {
        opacity: 0,
        x: -50,
        duration: 0.8,
        stagger: 0.3,
        ease: "power2.out",
        scrollTrigger: {
          trigger: timelineRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      });

      // Values animation
      gsap.from(valuesRef.current.children, {
        opacity: 0,
        rotationY: 90,
        duration: 1,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: valuesRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      });

      // Cleanup
      return () => {
        clearInterval(carouselInterval);
      };

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const travelImages = [
    "https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1539635278303-d4002c07eae3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1501436513145-30f24e19fcc4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  ];

  return (
    <section 
      ref={sectionRef}
      id="about" 
      className="min-h-screen bg-black relative overflow-hidden py-20 px-6"
    >
      {/* Dark Animated Background Elements */}
      <div className="dark-orb-1 absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-gray-800 to-gray-900 rounded-full opacity-30 blur-xl"></div>
      <div className="dark-orb-2 absolute top-20 right-20 w-48 h-48 bg-gradient-to-br from-slate-800 to-slate-900 rounded-full opacity-25 blur-2xl"></div>
      <div className="dark-orb-3 absolute bottom-32 left-1/4 w-24 h-24 bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-full opacity-35 blur-lg"></div>
      <div className="dark-orb-4 absolute bottom-20 right-1/3 w-40 h-40 bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-full opacity-20 blur-xl"></div>
      
      {/* Additional moving dark elements */}
      <div className="absolute top-1/3 left-1/3 w-16 h-16 bg-gray-700 rounded-full opacity-10 blur-md animate-pulse"></div>
      <div className="absolute top-2/3 right-1/4 w-20 h-20 bg-slate-700 rounded-full opacity-15 blur-lg animate-pulse delay-1000"></div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-3">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: 'radial-gradient(circle, #374151 1px, transparent 1px)',
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div ref={headingRef} className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Our Agency</span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Creating unforgettable journeys and magical moments for over a decade
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Content */}
          <div ref={contentRef} className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-white mb-4">
                Your Dream <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Destination</span> Awaits
              </h3>
              
              <p className="text-lg text-gray-300 leading-relaxed">
                Founded in 2014, we are a passionate team of travel enthusiasts dedicated to crafting 
                extraordinary experiences around the globe. From exotic tropical paradises to bustling 
                metropolitan adventures, we specialize in creating personalized itineraries that exceed expectations.
              </p>

              <p className="text-lg text-gray-300 leading-relaxed">
                Our expert travel consultants work closely with you to understand your unique preferences, 
                ensuring every detail of your journey is perfectly tailored. Whether you're seeking a 
                romantic getaway, family adventure, or corporate retreat, we make your travel dreams come true.
              </p>

              <p className="text-lg text-gray-300 leading-relaxed">
                With partnerships across 6 continents and access to exclusive experiences, we offer 
                unparalleled service and insider knowledge that transforms ordinary trips into extraordinary memories.
              </p>
            </div>

            {/* Feature List */}
            <div ref={featuresRef} className="grid md:grid-cols-2 gap-4 mt-8">
              <div className="flex items-center space-x-3 p-4 bg-white/5 rounded-lg backdrop-blur-sm border border-white/10">
                <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                <span className="text-white font-medium">Expert Travel Consultants</span>
              </div>
              <div className="flex items-center space-x-3 p-4 bg-white/5 rounded-lg backdrop-blur-sm border border-white/10">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span className="text-white font-medium">24/7 Customer Support</span>
              </div>
              <div className="flex items-center space-x-3 p-4 bg-white/5 rounded-lg backdrop-blur-sm border border-white/10">
                <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                <span className="text-white font-medium">Customized Itineraries</span>
              </div>
              <div className="flex items-center space-x-3 p-4 bg-white/5 rounded-lg backdrop-blur-sm border border-white/10">
                <div className="w-3 h-3 bg-blue-300 rounded-full"></div>
                <span className="text-white font-medium">Best Price Guarantee</span>
              </div>
            </div>
          </div>

          {/* Right Image Carousel */}
          <div ref={imageRef} className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[600px]">
              <div ref={carouselRef} className="relative w-full h-full">
                {travelImages.map((image, index) => (
                  <img 
                    key={index}
                    src={image} 
                    alt={`Travel destination ${index + 1}`} 
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                ))}
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
              
              {/* Overlay Content */}
              <div className="absolute bottom-8 left-8 right-8">
                <h4 className="text-2xl font-bold text-white mb-2">Explore the World</h4>
                <p className="text-white/90">Discover breathtaking destinations with our expert guidance</p>
              </div>
            </div>

            {/* Decorative border */}
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-blue-600 rounded-2xl opacity-20 blur-lg -z-10"></div>
          </div>
        </div>

        {/* Statistics Section */}
        <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          <div className="text-center p-6 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10">
            <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 mb-2">50K+</div>
            <div className="text-gray-300 font-medium">Happy Travelers</div>
          </div>
          <div className="text-center p-6 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10">
            <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 mb-2">200+</div>
            <div className="text-gray-300 font-medium">Destinations</div>
          </div>
          <div className="text-center p-6 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10">
            <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 mb-2">10+</div>
            <div className="text-gray-300 font-medium">Years Experience</div>
          </div>
          <div className="text-center p-6 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10">
            <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 mb-2">99%</div>
            <div className="text-gray-300 font-medium">Satisfaction Rate</div>
          </div>
        </div>

        {/* Our Journey Timeline */}
        <div className="mb-20">
          <h3 className="text-4xl font-bold text-white text-center mb-12">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Journey</span>
          </h3>
          <div ref={timelineRef} className="space-y-8">
            <div className="flex items-center space-x-6">
              <div className="w-4 h-4 bg-blue-400 rounded-full flex-shrink-0"></div>
              <div className="bg-white/5 p-6 rounded-lg backdrop-blur-sm border border-white/10 flex-1">
                <h4 className="text-xl font-bold text-white mb-2">2014 - Founded</h4>
                <p className="text-gray-300">Started as a small travel consultancy with a passion for creating unique experiences.</p>
              </div>
            </div>

            <div className="flex items-center space-x-6">
              <div className="w-4 h-4 bg-blue-500 rounded-full flex-shrink-0"></div>
              <div className="bg-white/5 p-6 rounded-lg backdrop-blur-sm border border-white/10 flex-1">
                <h4 className="text-xl font-bold text-white mb-2">2017 - Expansion</h4>
                <p className="text-gray-300">Expanded operations to cover 50+ destinations across Asia and Europe.</p>
              </div>
            </div>

            <div className="flex items-center space-x-6">
              <div className="w-4 h-4 bg-blue-600 rounded-full flex-shrink-0"></div>
              <div className="bg-white/5 p-6 rounded-lg backdrop-blur-sm border border-white/10 flex-1">
                <h4 className="text-xl font-bold text-white mb-2">2020 - Digital Transformation</h4>
                <p className="text-gray-300">Launched our comprehensive online booking platform and mobile app.</p>
              </div>
            </div>

            <div className="flex items-center space-x-6">
              <div className="w-4 h-4 bg-blue-400 rounded-full flex-shrink-0"></div>
              <div className="bg-white/5 p-6 rounded-lg backdrop-blur-sm border border-white/10 flex-1">
                <h4 className="text-xl font-bold text-white mb-2">2024 - Global Recognition</h4>
                <p className="text-gray-300">Awarded "Best Travel Agency" by International Tourism Board for excellence in service.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Our Values */}
        <div className="mb-20">
          <h3 className="text-4xl font-bold text-white text-center mb-12">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Core Values</span>
          </h3>
          <div ref={valuesRef} className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/5 p-8 rounded-xl backdrop-blur-sm border border-white/10 text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h4 className="text-2xl font-bold text-white mb-4">Passion</h4>
              <p className="text-gray-300">We are genuinely passionate about travel and creating extraordinary experiences for our clients.</p>
            </div>

            <div className="bg-white/5 p-8 rounded-xl backdrop-blur-sm border border-white/10 text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h4 className="text-2xl font-bold text-white mb-4">Trust</h4>
              <p className="text-gray-300">Building lasting relationships through transparency, reliability, and consistent service excellence.</p>
            </div>

            <div className="bg-white/5 p-8 rounded-xl backdrop-blur-sm border border-white/10 text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="text-2xl font-bold text-white mb-4">Innovation</h4>
              <p className="text-gray-300">Continuously evolving our services and embracing new technologies to enhance travel experiences.</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-400 to-blue-600 text-white font-semibold rounded-full hover:shadow-2xl hover:shadow-blue-500/25 transform hover:scale-105 transition-all duration-300"
          >
            <span>Start Your Journey</span>
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

export default About;
