import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Testimonials = () => {
  const marquee1Ref = useRef(null);
  const marquee2Ref = useRef(null);

  const testimonials1 = [
    {
      id: 1,
      name: "Sarah Johnson",
      location: "New York, USA",
      rating: 5,
      text: "Seamless experience.",
      image: "https://images.unsplash.com/photo-1494790108755-2616c0763c65?auto=format&fit=crop&w=150&q=80"
    },
    {
      id: 2,
      name: "Michael Chen",
      location: "Toronto, Canada",
      rating: 5,
      text: "Unforgettable honeymoon.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      location: "Madrid, Spain",
      rating: 5,
      text: "Personalized service.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80"
    },
    {
      id: 4,
      name: "David Wilson",
      location: "London, UK",
      rating: 5,
      text: "Outstanding guides.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
    },
    {
      id: 5,
      name: "Lisa Thompson",
      location: "Sydney, Australia",
      rating: 5,
      text: "Phenomenal planning.",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80"
    }
  ];

  const testimonials2 = [
    {
      id: 6,
      name: "James Anderson",
      location: "Los Angeles, USA",
      rating: 5,
      text: "VIP treatment.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80"
    },
    {
      id: 7,
      name: "Sophie Martin",
      location: "Paris, France",
      rating: 5,
      text: "Dream vacation.",
      image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?auto=format&fit=crop&w=150&q=80"
    },
    {
      id: 8,
      name: "Alex Kumar",
      location: "Mumbai, India",
      rating: 5,
      text: "Creative planning.",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&q=80"
    },
    {
      id: 9,
      name: "Maria Garcia",
      location: "Barcelona, Spain",
      rating: 5,
      text: "Authentic experiences.",
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&q=80"
    },
    {
      id: 10,
      name: "Robert Kim",
      location: "Seoul, South Korea",
      rating: 5,
      text: "Flawless logistics.",
      image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?auto=format&fit=crop&w=150&q=80"
    }
  ];

  useEffect(() => {
    const marquee1 = marquee1Ref.current;
    gsap.set(marquee1, { x: '-100%' });
    gsap.to(marquee1, {
      x: '0%',
      duration: 25,
      ease: 'none',
      repeat: -1
    });

    const marquee2 = marquee2Ref.current;
    gsap.set(marquee2, { x: '0%' });
    gsap.to(marquee2, {
      x: '-100%',
      duration: 30,
      ease: 'none',
      repeat: -1
    });
  }, []);

  const TestimonialCard = ({ testimonial, reverse = false }) => (
    <div className={`flex-shrink-0 w-[80vw] sm:w-80 md:w-96 mx-4 ${reverse ? 'transform scale-x-[-1]' : ''}`}>
      <div className={`bg-white/10 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-white/20 shadow-2xl hover:bg-white/15 transition-all duration-300 hover:scale-105 ${reverse ? 'transform scale-x-[-1]' : ''}`}>
        <div className="flex justify-center mb-4">
          {[...Array(testimonial.rating)].map((_, i) => (
            <svg key={i} className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        <p className="text-white text-center text-base sm:text-lg leading-relaxed mb-6 font-light">
          "{testimonial.text}"
        </p>
        <div className="flex items-center justify-center space-x-4">
          <img
            src={testimonial.image}
            alt={testimonial.name}
            className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover border-2 border-white/30"
          />
          <div className="text-center">
            <h4 className="text-white font-semibold text-base sm:text-lg">{testimonial.name}</h4>
            <p className="text-gray-400 text-sm">{testimonial.location}</p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-black overflow-hidden px-4 sm:px-6">
      {/* Add custom scrollbar styles */}
      <style jsx global>{`
        .scrollbar-hide {
          -ms-overflow-style: none;  /* Internet Explorer 10+ */
          scrollbar-width: none;  /* Firefox */
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;  /* Safari and Chrome */
        }
      `}</style>
      
      <div className="mb-10 text-center">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-4">
          What Our <span className="text-blue-500">Travelers</span> Say
        </h1>
        <div className="w-24 sm:w-32 h-1 bg-blue-500 mx-auto"></div>
      </div>

      {/* First Marquee Row */}
      <div className="relative mb-6 overflow-hidden">
        <div ref={marquee1Ref} className="flex whitespace-nowrap">
          {[...testimonials1, ...testimonials1].map((testimonial, index) => (
            <TestimonialCard key={`${testimonial.id}-${index}`} testimonial={testimonial} />
          ))}
        </div>
      </div>

      {/* Second Marquee Row */}
      <div className="relative mb-6 overflow-hidden">
        <div ref={marquee2Ref} className="flex whitespace-nowrap">
          {[...testimonials2, ...testimonials2].map((testimonial, index) => (
            <TestimonialCard key={`${testimonial.id}-${index}`} testimonial={testimonial} reverse={false} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
