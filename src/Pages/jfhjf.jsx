// import React, { useState, useRef, useEffect } from 'react';
// import { gsap } from 'gsap';

// const ServicesSlider = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isAnimating, setIsAnimating] = useState(false);
  
//   const imageRef = useRef(null);
//   const contentRef = useRef(null);
//   const titleRef = useRef(null);
//   const descRef = useRef(null);
//   const tagsRef = useRef(null);
//   const intervalRef = useRef(null);

//   const slides = [
//     {
//       image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
//       title: "Hotel Booking Services",
//       description: "Find and book the perfect accommodation for your journey. From luxury resorts to budget hotels, we offer the best deals worldwide with instant confirmation.",
//       tags: ["Luxury Hotels", "Budget Stays", "Resorts", "Instant Booking"],
//       buttonText: "Book Hotels"
//     },
//     {
//       image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80", 
//       title: "Tour Package Booking",
//       description: "Explore carefully curated tour packages designed for unforgettable experiences. Discover new cultures, landscapes, and create memories that last forever.",
//       tags: ["Cultural Tours", "Adventure Trips", "Family Packages", "Group Tours"],
//       buttonText: "Browse Tours"
//     },
//     {
//       image: "https://images.unsplash.com/photo-1541534401786-5e0a57dff226?auto=format&fit=crop&w=800&q=80",
//       title: "Flight Reservation",
//       description: "Book domestic and international flights at the best prices. Compare airlines, flexible dates, and enjoy hassle-free booking experience.",
//       tags: ["Domestic Flights", "International", "Best Prices", "Flexible Dates"],
//       buttonText: "Search Flights"
//     }
//   ];

//   // Auto-advance slides with proper timing
//   useEffect(() => {
//     startAutoSlide();
//     return () => {
//       if (intervalRef.current) clearInterval(intervalRef.current);
//     };
//   }, []);

//   const startAutoSlide = () => {
//     intervalRef.current = setInterval(() => {
//       nextSlide();
//     }, 6000); // 6 seconds total (2 seconds display + 4 seconds for next transition)
//   };

//   const stopAutoSlide = () => {
//     if (intervalRef.current) {
//       clearInterval(intervalRef.current);
//     }
//   };

//   const animateTransition = () => {
//     if (isAnimating) return;
//     setIsAnimating(true);

//     const tl = gsap.timeline({
//       onComplete: () => {
//         setIsAnimating(false);
//       }
//     });

//     // Phase 1: Animate content out (0.8s)
//     tl.to([titleRef.current, descRef.current, tagsRef.current], {
//       opacity: 0,
//       y: 40,
//       duration: 0.8,
//       stagger: 0.15,
//       ease: "power2.in"
//     })
    
//     // Phase 2: Animate image transition (1.2s, overlapping)
//     .to(imageRef.current, {
//       scale: 1.15,
//       opacity: 0.5,
//       duration: 1.2,
//       ease: "power2.inOut"
//     }, 0.3)
    
//     // Phase 3: Wait for content to settle (0.5s pause)
//     .set({}, {}, "+=0.5")
    
//     // Phase 4: Animate content in (1.0s)
//     .to([titleRef.current, descRef.current, tagsRef.current], {
//       opacity: 1,
//       y: 0,
//       duration: 1.0,
//       stagger: 0.2,
//       ease: "power2.out"
//     })
    
//     // Phase 5: Reset image (1.0s, overlapping)
//     .to(imageRef.current, {
//       scale: 1,
//       opacity: 1,
//       duration: 1.0,
//       ease: "power2.out"
//     }, "-=0.6");
//   };

//   const nextSlide = () => {
//     if (isAnimating) return;
//     setCurrentIndex(prev => (prev + 1) % slides.length);
//     animateTransition();
//   };

//   const prevSlide = () => {
//     if (isAnimating) return;
//     setCurrentIndex(prev => (prev - 1 + slides.length) % slides.length);
//     animateTransition();
//   };

//   const goToSlide = (index) => {
//     if (isAnimating || index === currentIndex) return;
//     setCurrentIndex(index);
//     animateTransition();
//     stopAutoSlide();
//     setTimeout(startAutoSlide, 8000); // Resume auto-play after 8 seconds
//   };

//   const currentSlide = slides[currentIndex];

//   return (
//     <div className="min-h-screen bg-black flex items-center py-8">
//       <div className="max-w-7xl mx-auto w-full px-4">
//         <div className="flex bg-gray-900 rounded-3xl overflow-hidden shadow-2xl min-h-[70vh]">
          
//           {/* Left Side - Image */}
//           <div className="flex-1 relative">
//             <div 
//               ref={imageRef}
//               className="w-full h-full bg-cover bg-center"
//               style={{
//                 backgroundImage: `url(${currentSlide.image})`,
//                 minHeight: '500px'
//               }}
//             >
//               {/* Image Overlay */}
//               <div className="absolute inset-0 bg-black/30"></div>
              
//               {/* Navigation Dots */}
//               <div className="absolute bottom-6 left-6 flex space-x-2">
//                 {slides.map((_, index) => (
//                   <button
//                     key={index}
//                     onClick={() => goToSlide(index)}
//                     className={`w-3 h-3 rounded-full transition-all duration-500 ${
//                       index === currentIndex 
//                         ? 'bg-white scale-125 shadow-lg' 
//                         : 'bg-white/50 hover:bg-white/75'
//                     }`}
//                     disabled={isAnimating}
//                   />
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* Right Side - Content */}
//           <div className="flex-1 p-12 flex flex-col justify-center text-white relative bg-gray-900">
            
//             {/* Navigation Arrows */}
//             <div className="absolute top-6 right-6 flex space-x-3">
//               <button
//                 onClick={prevSlide}
//                 disabled={isAnimating}
//                 className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
//               >
//                 <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
//                 </svg>
//               </button>
//               <button
//                 onClick={nextSlide}
//                 disabled={isAnimating}
//                 className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
//               >
//                 <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                 </svg>
//               </button>
//             </div>

//             {/* Content */}
//             <div className="space-y-6">
//               <h1 
//                 ref={titleRef}
//                 className="text-4xl lg:text-5xl font-bold leading-tight text-white"
//               >
//                 {currentSlide.title}
//               </h1>
              
//               <p 
//                 ref={descRef}
//                 className="text-lg text-gray-300 leading-relaxed"
//               >
//                 {currentSlide.description}
//               </p>
              
//               <div 
//                 ref={tagsRef}
//                 className="flex flex-wrap gap-2"
//               >
//                 {currentSlide.tags.map((tag, index) => (
//                   <span 
//                     key={index}
//                     className="px-3 py-1 bg-white/10 text-white rounded-full text-sm font-medium border border-white/20 hover:bg-white/20 transition-colors duration-300"
//                   >
//                     {tag}
//                   </span>
//                 ))}
//               </div>
              
//               <button 
//                 disabled={isAnimating}
//                 className="mt-6 bg-orange-500 hover:bg-orange-600 disabled:bg-orange-400 disabled:cursor-not-allowed text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
//               >
//                 {currentSlide.buttonText}
//               </button>
//             </div>

//             {/* Progress Indicator */}
//             <div className="absolute bottom-6 left-12 right-12">
//               <div className="flex space-x-1">
//                 {slides.map((_, index) => (
//                   <div 
//                     key={index}
//                     className={`h-1 rounded-full transition-all duration-500 ${
//                       index === currentIndex 
//                         ? 'bg-orange-500 flex-[3]' 
//                         : 'bg-white/20 flex-1'
//                     }`}
//                   />
//                 ))}
//               </div>
//             </div>

//             {/* Auto-play indicator */}
//             {/* <div className="absolute top-6 left-6">
//               <div className="flex items-center space-x-2 text-xs text-white/60">
//                 <div className={`w-2 h-2 rounded-full ${isAnimating ? 'bg-orange-500' : 'bg-white/40'} animate-pulse`}></div>
//                 <span>Auto-advancing in {isAnimating ? 'transition...' : '6s'}</span>
//               </div>
//             </div> */}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ServicesSlider;


// import React, { useEffect, useRef } from 'react';
// import { gsap } from 'gsap';
// import videoFile from '../../assets/earth.mp4';

// const WhatsAppAgencyBento = () => {
//   const containerRef = useRef(null);
//   const boxRefs = useRef([]);

//   useEffect(() => {
//     // 3D Box Animations
//     const animateBoxes = () => {
//       boxRefs.current.forEach((box, index) => {
//         if (!box) return;

//         // Create unique animation for each box
//         const tl = gsap.timeline({ repeat: -1, yoyo: true });

//         switch (index) {
//           case 0: // Expert Setup - Pulse effect
//             tl.to(box, {
//               scale: 1.05,
//               rotationX: 5,
//               rotationY: 5,
//               duration: 2,
//               ease: "power2.inOut"
//             });
//             break;

//           case 1: // 24/7 Management - 3D rotation
//             tl.to(box, {
//               rotationX: 10,
//               rotationY: 15,
//               scale: 1.02,
//               duration: 3,
//               ease: "sine.inOut"
//             });
//             break;

//           case 2: // Client Success - Floating effect
//             tl.to(box, {
//               y: -10,
//               rotationZ: 2,
//               scale: 1.03,
//               duration: 2.5,
//               ease: "power1.inOut"
//             });
//             break;

//           case 3: // Custom Bots - 3D flip
//             tl.to(box, {
//               rotationY: 360,
//               scale: 1.1,
//               duration: 4,
//               ease: "power2.inOut"
//             });
//             break;

//           case 4: // API Setup - Wobble effect
//             tl.to(box, {
//               rotationX: 8,
//               rotationZ: -3,
//               scale: 1.05,
//               duration: 2.2,
//               ease: "elastic.inOut(1, 0.5)"
//             });
//             break;

//           case 6: // Lead Generation - Bounce 3D
//             tl.to(box, {
//               y: -15,
//               rotationX: 10,
//               scale: 1.08,
//               duration: 1.8,
//               ease: "bounce.inOut"
//             });
//             break;

//           case 7: // ROI Tracking - Spin effect
//             tl.to(box, {
//               rotationZ: 360,
//               rotationY: 180,
//               scale: 1.04,
//               duration: 5,
//               ease: "power1.inOut"
//             });
//             break;

//           case 8: // Success Rate - Tilt effect
//             tl.to(box, {
//               rotationX: -8,
//               rotationY: 8,
//               scale: 1.06,
//               duration: 2.8,
//               ease: "sine.inOut"
//             });
//             break;

//           case 9: // Strategy & Consulting - Complex 3D
//             tl.to(box, {
//               rotationX: 15,
//               rotationY: -15,
//               rotationZ: 5,
//               scale: 1.07,
//               duration: 3.5,
//               ease: "power2.inOut"
//             });
//             break;

//           case 10: // Full Service - Wave effect
//             tl.to(box, {
//               y: -12,
//               rotationX: 6,
//               scale: 1.03,
//               duration: 2.3,
//               ease: "sine.inOut"
//             });
//             break;

//           default:
//             // Default gentle animation for remaining boxes
//             tl.to(box, {
//               scale: 1.02,
//               rotationY: 5,
//               duration: 2,
//               ease: "power1.inOut"
//             });
//         }

//         // Add random delay to avoid synchronization
//         tl.delay(Math.random() * 2);
//       });
//     };

//     // Hover effects for all boxes
//     const addHoverEffects = () => {
//       boxRefs.current.forEach((box, index) => {
//         if (!box) return;

//         const onMouseEnter = () => {
//           gsap.to(box, {
//             scale: 1.15,
//             rotationX: 15,
//             rotationY: 15,
//             z: 50,
//             duration: 0.4,
//             ease: "power2.out",
//             transformOrigin: "center center",
//             boxShadow: "0 25px 50px rgba(37, 211, 102, 0.3)"
//           });
//         };

//         const onMouseLeave = () => {
//           gsap.to(box, {
//             scale: 1,
//             rotationX: 0,
//             rotationY: 0,
//             z: 0,
//             duration: 0.6,
//             ease: "power2.out",
//             boxShadow: "0 10px 20px rgba(255, 255, 255, 0.1)"
//           });
//         };

//         box.addEventListener('mouseenter', onMouseEnter);
//         box.addEventListener('mouseleave', onMouseLeave);

//         // Cleanup
//         return () => {
//           box.removeEventListener('mouseenter', onMouseEnter);
//           box.removeEventListener('mouseleave', onMouseLeave);
//         };
//       });
//     };

//     // Intersection Observer for scroll-triggered animations
//     const addScrollAnimations = () => {
//       const observer = new IntersectionObserver((entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             const box = entry.target;
//             gsap.fromTo(box, {
//               opacity: 0,
//               y: 50,
//               rotationX: -30,
//               scale: 0.8
//             }, {
//               opacity: 1,
//               y: 0,
//               rotationX: 0,
//               scale: 1,
//               duration: 0.8,
//               ease: "back.out(1.7)",
//               delay: Math.random() * 0.5
//             });
//           }
//         });
//       }, { threshold: 0.1 });

//       boxRefs.current.forEach(box => {
//         if (box) observer.observe(box);
//       });
//     };

//     // Initialize animations
//     setTimeout(() => {
//       animateBoxes();
//       addHoverEffects();
//       addScrollAnimations();
//     }, 100);

//     // Cleanup
//     return () => {
//       boxRefs.current.forEach(box => {
//         if (box) {
//           gsap.killTweensOf(box);
//         }
//       });
//     };
//   }, []);

//   const addToRefs = (el) => {
//     if (el && !boxRefs.current.includes(el)) {
//       boxRefs.current.push(el);
//     }
//   };

//   return (
//     <div 
//       ref={containerRef}
//       style={{
//         backgroundColor: '#000000',
//         minHeight: '100vh',
//         padding: '20px',
//         fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
//         color: 'white',
//         perspective: '1000px' // Enable 3D perspective
//       }}
//     >
//       {/* Header */}
//       <div style={{
//         display: 'flex',
//         justifyContent: 'space-between',
//         alignItems: 'center',
//         marginBottom: '30px',
//         flexWrap: 'wrap',
//         gap: '15px'
//       }}>
//         <h1 style={{
//           fontSize: 'clamp(20px, 5vw, 28px)',
//           fontWeight: '600',
//           margin: 0
//         }}>WhatsApp Chatbot Agency</h1>
//       </div>

//       {/* Main Grid - Responsive */}
//       <div style={{
//         display: 'grid',
//         gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
//         gap: '20px',
//         maxWidth: '1200px',
//         margin: '0 auto'
//       }}>
//         {/* Left Column */}
//         <div style={{ display: 'grid', gap: '20px' }}>
//           {/* Expert Setup */}
//           <div 
//             ref={addToRefs}
//             style={{
//               backgroundColor: '#1c1c1e',
//               borderRadius: '25px',
//               padding: '20px',
//               display: 'flex',
//               alignItems: 'center',
//               gap: '10px',
//               border: '1px solid #333',
//               backdropFilter: 'blur(20px)',
//               minHeight: '70px',
//               transformStyle: 'preserve-3d',
//               cursor: 'pointer',
//               transition: 'all 0.3s ease'
//             }}
//           >
//             <span style={{ fontSize: 'clamp(14px, 4vw, 18px)', fontWeight: '600' }}>Expert Setup</span>
//             <div style={{
//               width: '24px',
//               height: '24px',
//               backgroundColor: '#25d366',
//               borderRadius: '50%',
//               display: 'flex',
//               alignItems: 'center',
//               justifyContent: 'center',
//               flexShrink: 0
//             }}>
//               ✅
//             </div>
//           </div>

//           {/* 24/7 Management */}
//           <div 
//             ref={addToRefs}
//             style={{
//               backgroundColor: '#1c1c1e',
//               borderRadius: '25px',
//               padding: '20px',
//               position: 'relative',
//               overflow: 'hidden',
//               minHeight: '150px',
//               border: '1px solid #333',
//               backdropFilter: 'blur(20px)',
//               transformStyle: 'preserve-3d',
//               cursor: 'pointer'
//             }}
//           >
//             <div 
//               style={{
//                 position: 'absolute',
//                 top: '15px',
//                 right: '15px',
//                 width: 'clamp(40px, 8vw, 60px)',
//                 height: 'clamp(40px, 8vw, 60px)',
//                 background: 'linear-gradient(135deg, #25d366, #128c7e)',
//                 borderRadius: '15px',
//                 animation: 'rotateLeft 3s linear infinite',
//                 display: 'flex',
//                 alignItems: 'center',
//                 justifyContent: 'center',
//                 fontSize: 'clamp(16px, 4vw, 24px)'
//               }}
//             >
//               🔄
//             </div>
//             <div style={{
//               position: 'absolute',
//               bottom: '15px',
//               left: '15px',
//               display: 'flex',
//               alignItems: 'center',
//               gap: '8px',
//               flexWrap: 'wrap'
//             }}>
//               <span style={{ color: '#25d366', fontSize: 'clamp(16px, 4vw, 20px)' }}>🕒</span>
//               <span style={{ fontWeight: '600', fontSize: 'clamp(12px, 3vw, 16px)' }}>24/7 Management</span>
//             </div>
//           </div>

//           {/* Client Success */}
//           <div 
//             ref={addToRefs}
//             style={{
//               backgroundColor: '#1c1c1e',
//               borderRadius: '25px',
//               padding: '20px',
//               textAlign: 'left',
//               border: '1px solid #333',
//               backdropFilter: 'blur(20px)',
//               minHeight: '120px',
//               transformStyle: 'preserve-3d',
//               cursor: 'pointer'
//             }}
//           >
//             <div style={{
//               fontSize: 'clamp(16px, 4vw, 24px)',
//               fontWeight: '300',
//               lineHeight: '1.3',
//               marginBottom: '15px'
//             }}>
//               "Increased our<br />
//               conversions by<br />
//               300% with their<br />
//               WhatsApp bot"
//             </div>
//             <div style={{
//               fontSize: 'clamp(10px, 2.5vw, 12px)',
//               color: '#888',
//               marginTop: '10px'
//             }}>
//               Client testimonial
//             </div>
//           </div>
//         </div>

//         {/* Center Column */}
//         <div style={{ display: 'grid', gap: '20px' }}>
//           {/* Top Row */}
//           <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
//             {/* Custom Bots */}
//             <div 
//               ref={addToRefs}
//               style={{
//                 backgroundColor: '#1c1c1e',
//                 borderRadius: '25px',
//                 padding: '15px',
//                 display: 'flex',
//                 flexDirection: 'column',
//                 alignItems: 'center',
//                 gap: '10px',
//                 border: '1px solid #333',
//                 backdropFilter: 'blur(20px)',
//                 minHeight: '120px',
//                 transformStyle: 'preserve-3d',
//                 cursor: 'pointer'
//               }}
//             >
//               <div style={{
//                 width: 'clamp(40px, 8vw, 60px)',
//                 height: 'clamp(40px, 8vw, 60px)',
//                 border: '2px solid #25d366',
//                 borderRadius: '15px',
//                 display: 'flex',
//                 alignItems: 'center',
//                 justifyContent: 'center',
//                 fontSize: 'clamp(12px, 3vw, 16px)',
//                 fontWeight: '600',
//                 color: '#25d366'
//               }}>
//                 AI
//               </div>
//               <div style={{ textAlign: 'center' }}>
//                 <div style={{ fontWeight: '600', marginBottom: '2px', fontSize: 'clamp(12px, 3vw, 14px)' }}>Custom Bots</div>
//                 <div style={{ fontSize: 'clamp(10px, 2.5vw, 12px)', color: '#888' }}>For Your Business</div>
//               </div>
//             </div>

//             {/* API Integration */}
//             <div 
//               ref={addToRefs}
//               style={{
//                 backgroundColor: '#1c1c1e',
//                 borderRadius: '25px',
//                 padding: '15px',
//                 display: 'flex',
//                 alignItems: 'center',
//                 justifyContent: 'center',
//                 gap: '10px',
//                 border: '1px solid #333',
//                 backdropFilter: 'blur(20px)',
//                 minHeight: '120px',
//                 transformStyle: 'preserve-3d',
//                 cursor: 'pointer'
//               }}
//             >
//               <div style={{
//                 width: 'clamp(30px, 6vw, 50px)',
//                 height: 'clamp(25px, 5vw, 40px)',
//                 backgroundColor: '#25d366',
//                 borderRadius: '8px',
//                 display: 'flex',
//                 alignItems: 'center',
//                 justifyContent: 'center',
//                 fontSize: 'clamp(14px, 3.5vw, 20px)'
//               }}>
//                 🔗
//               </div>
//               <div style={{
//                 fontSize: 'clamp(14px, 3.5vw, 18px)',
//                 fontWeight: '700',
//                 textAlign: 'center'
//               }}>
//                 API Setup
//               </div>
//             </div>
//           </div>

//           {/* Center Video Display */}
//           <div style={{
//             backgroundColor: '#1c1c1e',
//             borderRadius: '30px',
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'center',
//             position: 'relative',
//             minHeight: 'clamp(200px, 40vw, 300px)',
//             overflow: 'hidden',
//             border: '1px solid #333',
//             backdropFilter: 'blur(20px)'
//           }}>
//             <video
//               autoPlay
//               loop
//               muted
//               playsInline
//               style={{
//                 width: '100%',
//                 height: '100%',
//                 objectFit: 'cover',
//                 borderRadius: '15px'
//               }}
//               onError={(e) => {
//                 e.target.style.display = 'none';
//                 e.target.nextElementSibling.style.display = 'flex';
//               }}
//             >
//               <source src={videoFile} type="video/mp4" />
//             </video>
            
//             {/* Fallback content */}
//             <div style={{
//               width: 'clamp(100px, 30vw, 200px)',
//               height: 'clamp(100px, 30vw, 200px)',
//               position: 'absolute',
//               display: 'none',
//               alignItems: 'center',
//               justifyContent: 'center',
//               backgroundColor: '#25d366',
//               borderRadius: '50%',
//               top: '50%',
//               left: '50%',
//               transform: 'translate(-50%, -50%)'
//             }}>
//               <div style={{
//                 fontSize: 'clamp(24px, 8vw, 48px)',
//                 color: 'white'
//               }}>
//                 💬
//               </div>
//             </div>
            
//             {/* Overlay text */}
//             <div style={{
//               position: 'absolute',
//               bottom: '15px',
//               left: '15px',
//               backgroundColor: 'rgba(0,0,0,0.8)',
//               padding: '8px 12px',
//               borderRadius: '15px',
//               fontSize: 'clamp(10px, 2.5vw, 14px)',
//               fontWeight: '600',
//               border: '1px solid #333'
//             }}>
//               WhatsApp Bot in Action
//             </div>
//           </div>

//           {/* Bottom Row */}
//           <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))', gap: '20px' }}>
//             {/* Lead Generation */}
//             <div 
//               ref={addToRefs}
//               style={{
//                 backgroundColor: '#1c1c1e',
//                 borderRadius: '25px',
//                 padding: '15px',
//                 border: '1px solid #333',
//                 backdropFilter: 'blur(20px)',
//                 minHeight: '100px',
//                 transformStyle: 'preserve-3d',
//                 cursor: 'pointer'
//               }}
//             >
//               <div style={{ marginBottom: '10px', textAlign: 'center' }}>
//                 <div style={{ fontWeight: '600', fontSize: 'clamp(12px, 3vw, 14px)' }}>Lead</div>
//                 <div style={{ fontSize: 'clamp(10px, 2.5vw, 12px)', color: '#888' }}>Generation</div>
//               </div>
//               <div style={{ color: '#25d366', fontSize: 'clamp(14px, 3.5vw, 18px)', textAlign: 'center' }}>🎯</div>
//               <div style={{ marginTop: '10px', fontSize: 'clamp(10px, 2.5vw, 12px)', fontWeight: '600', textAlign: 'center' }}>Automated</div>
//             </div>

//             {/* ROI Tracking */}
//             <div 
//               ref={addToRefs}
//               style={{
//                 backgroundColor: '#1c1c1e',
//                 borderRadius: '25px',
//                 padding: '15px',
//                 textAlign: 'center',
//                 border: '1px solid #333',
//                 backdropFilter: 'blur(20px)',
//                 minHeight: '100px',
//                 display: 'flex',
//                 flexDirection: 'column',
//                 justifyContent: 'center',
//                 transformStyle: 'preserve-3d',
//                 cursor: 'pointer'
//               }}
//             >
//               <div style={{
//                 width: 'clamp(30px, 6vw, 50px)',
//                 height: 'clamp(30px, 6vw, 50px)',
//                 backgroundColor: '#25d366',
//                 borderRadius: '50%',
//                 margin: '0 auto 10px',
//                 display: 'flex',
//                 alignItems: 'center',
//                 justifyContent: 'center',
//                 fontSize: 'clamp(14px, 3.5vw, 20px)'
//               }}>
//                 📈
//               </div>
//               <div style={{ fontWeight: '600', fontSize: 'clamp(12px, 3vw, 14px)' }}>ROI Tracking</div>
//             </div>

//             {/* Success Rate */}
//             <div 
//               ref={addToRefs}
//               style={{
//                 backgroundColor: '#1c1c1e',
//                 borderRadius: '25px',
//                 padding: '15px',
//                 textAlign: 'center',
//                 display: 'flex',
//                 flexDirection: 'column',
//                 justifyContent: 'center',
//                 border: '1px solid #333',
//                 backdropFilter: 'blur(20px)',
//                 minHeight: '100px',
//                 transformStyle: 'preserve-3d',
//                 cursor: 'pointer'
//               }}
//             >
//               <div style={{
//                 fontSize: 'clamp(18px, 5vw, 24px)',
//                 fontWeight: '700',
//                 marginBottom: '5px',
//                 color: '#25d366'
//               }}>
//                 98%
//               </div>
//               <div style={{ fontSize: 'clamp(10px, 2.5vw, 12px)', marginTop: '5px', color: '#888' }}>Success Rate</div>
//             </div>
//           </div>
//         </div>

//         {/* Right Column */}
//         <div style={{ display: 'grid', gap: '20px' }}>
//           {/* Strategy & Consulting */}
//           <div 
//             ref={addToRefs}
//             style={{
//               backgroundColor: '#1c1c1e',
//               borderRadius: '25px',
//               padding: '20px',
//               textAlign: 'center',
//               border: '1px solid #333',
//               backdropFilter: 'blur(20px)',
//               minHeight: '100px',
//               transformStyle: 'preserve-3d',
//               cursor: 'pointer'
//             }}
//           >
//             <div 
//               style={{
//                 width: 'clamp(40px, 8vw, 60px)',
//                 height: 'clamp(40px, 8vw, 60px)',
//                 background: 'conic-gradient(from 0deg, #25d366, #128c7e, #075e54, #34b7f1)',
//                 borderRadius: '50%',
//                 margin: '0 auto 15px',
//                 animation: 'rotateRight 4s linear infinite'
//               }}
//             />
//             <div style={{ fontWeight: '600', fontSize: 'clamp(10px, 2.5vw, 12px)', color: '#888' }}>Strategy & Consulting</div>
//           </div>

//           {/* Full Service Management */}
//           <div 
//             ref={addToRefs}
//             style={{
//               backgroundColor: '#1c1c1e',
//               borderRadius: '25px',
//               padding: '20px',
//               textAlign: 'center',
//               border: '1px solid #333',
//               backdropFilter: 'blur(20px)',
//               minHeight: '120px',
//               transformStyle: 'preserve-3d',
//               cursor: 'pointer'
//             }}
//           >
//             <div style={{
//               fontSize: 'clamp(12px, 3vw, 14px)',
//               color: '#888',
//               marginBottom: '15px'
//             }}>
//               Full Service<br />Management
//             </div>
//             <div style={{
//               width: '40px',
//               height: '40px',
//               backgroundColor: '#25d366',
//               borderRadius: '50%',
//               margin: '0 auto',
//               display: 'flex',
//               alignItems: 'center',
//               justifyContent: 'center',
//               fontSize: 'clamp(12px, 3vw, 18px)'
//             }}>
//               🎯
//             </div>
//           </div>

//           {/* Compliance and Training */}
//           <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
//             <div 
//               ref={addToRefs}
//               style={{
//                 backgroundColor: '#1c1c1e',
//                 borderRadius: '25px',
//                 padding: '15px',
//                 textAlign: 'center',
//                 border: '1px solid #333',
//                 backdropFilter: 'blur(20px)',
//                 minHeight: '100px',
//                 transformStyle: 'preserve-3d',
//                 cursor: 'pointer'
//               }}
//             >
//               <div style={{
//                 width: 'clamp(25px, 5vw, 40px)',
//                 height: 'clamp(25px, 5vw, 40px)',
//                 backgroundColor: '#25d366',
//                 borderRadius: '8px',
//                 margin: '0 auto 8px',
//                 display: 'flex',
//                 alignItems: 'center',
//                 justifyContent: 'center',
//                 fontSize: 'clamp(12px, 3vw, 18px)'
//               }}>
//                 ✅
//               </div>
//               <div style={{ fontSize: 'clamp(10px, 2.5vw, 12px)', fontWeight: '600' }}>WhatsApp Compliance</div>
//             </div>

//             <div 
//               ref={addToRefs}
//               style={{
//                 backgroundColor: '#1c1c1e',
//                 borderRadius: '25px',
//                 padding: '15px',
//                 textAlign: 'center',
//                 border: '1px solid #333',
//                 backdropFilter: 'blur(20px)',
//                 minHeight: '100px',
//                 transformStyle: 'preserve-3d',
//                 cursor: 'pointer'
//               }}
//             >
//               <div style={{
//                 width: 'clamp(25px, 5vw, 40px)',
//                 height: 'clamp(25px, 5vw, 40px)',
//                 backgroundColor: '#128c7e',
//                 borderRadius: '8px',
//                 margin: '0 auto 8px',
//                 display: 'flex',
//                 alignItems: 'center',
//                 justifyContent: 'center',
//                 fontSize: 'clamp(12px, 3vw, 18px)'
//               }}>
//                 🎓
//               </div>
//               <div style={{ fontSize: 'clamp(10px, 2.5vw, 12px)', fontWeight: '600' }}>Team Training</div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* CSS Animations */}
//       <style jsx>{`
//         @keyframes rotateLeft {
//           from { transform: rotate(0deg); }
//           to { transform: rotate(-360deg); }
//         }
        
//         @keyframes rotateRight {
//           from { transform: rotate(0deg); }
//           to { transform: rotate(360deg); }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default WhatsAppAgencyBento;


// import React, { useState } from 'react';
// import Think from '../../assets/man.png';

// function Us() {
//   const [hoveredBox, setHoveredBox] = useState(null);

//   const boxes = [
//     { 
//       id: 1, 
//       text: "24/7 Customer Support", 
//       description: "Round-the-clock assistance available via phone, chat, and email. Our dedicated support team ensures you're never alone during your journey.",
//       icon: "🎧",
//       top: "12%", 
//       left: "5%" 
//     },
//     { 
//       id: 2, 
//       text: "Best Price Guarantee", 
//       description: "Find a better deal elsewhere? We'll match it plus give you an additional 5% discount. Your savings are our commitment.",
//       icon: "💰",
//       top: "20%", 
//       right: "8%" 
//     },
//     { 
//       id: 3, 
//       text: "Expert Local Guides", 
//       description: "Native guides with 10+ years experience who know hidden gems, local customs, and speak your language fluently.",
//       icon: "👨‍🎓",
//       top: "38%", 
//       left: "3%" 
//     },
//     { 
//       id: 4, 
//       text: "Customized Itineraries", 
//       description: "Every trip is uniquely crafted based on your interests, budget, and travel style. No cookie-cutter packages here.",
//       icon: "🗺️",
//       top: "55%", 
//       right: "6%" 
//     },
//     { 
//       id: 5, 
//       text: "Safety First Priority", 
//       description: "Comprehensive travel insurance, emergency contacts, and real-time safety monitoring throughout your journey.",
//       icon: "🛡️",
//       top: "75%", 
//       left: "8%" 
//     },
//     { 
//       id: 6, 
//       text: "Instant Booking", 
//       description: "Book your dream trip in under 3 minutes with our streamlined process. Instant confirmation and digital tickets delivered immediately.",
//       icon: "⚡",
//       top: "85%", 
//       right: "18%" 
//     },
//     { 
//       id: 7, 
//       text: "Zero Hidden Costs", 
//       description: "What you see is what you pay. No surprise fees, no hidden charges. Complete transparency in all our pricing.",
//       icon: "✨",
//       top: "30%", 
//       left: "62%" 
//     },
//     { 
//       id: 8, 
//       text: "Flexible Cancellation", 
//       description: "Free cancellation up to 24 hours before departure. Plans change, and we understand that. Your money, your choice.",
//       icon: "🔄",
//       top: "58%", 
//       left: "62%" 
//     },
//     { 
//       id: 9, 
//       text: "Trusted by 50,000+ Travelers", 
//       description: "Join thousands of satisfied customers who've experienced our exceptional service. 4.9/5 star rating speaks for itself.",
//       icon: "⭐",
//       top: "28%", 
//       right: "62%" 
//     },
//     { 
//       id: 10, 
//       text: "Memorable Experiences", 
//       description: "We don't just book trips, we create lifelong memories. Exclusive access to unique activities and once-in-a-lifetime moments.",
//       icon: "🎭",
//       top: "58%", 
//       right: "65%" 
//     }
//   ];

//   const decorativeItems = [
//     { id: 1, type: 'circle', size: 'w-6 h-6', top: '8%', left: '25%', color: 'bg-orange-500', animation: 'animate-pulse' },
//     { id: 2, type: 'triangle', size: 'w-8 h-8', top: '14%', right: '35%', color: 'border-blue-500', animation: 'animate-bounce' },
//     { id: 3, type: 'circle', size: 'w-4 h-4', top: '28%', left: '15%', color: 'bg-white', animation: 'animate-ping' },
//     { id: 4, type: 'square', size: 'w-5 h-5', top: '45%', right: '25%', color: 'bg-orange-400', animation: 'animate-pulse' },
//     { id: 5, type: 'circle', size: 'w-3 h-3', bottom: '20%', left: '20%', color: 'bg-blue-400', animation: 'animate-bounce' },
//     { id: 6, type: 'diamond', size: 'w-10 h-10', top: '65%', left: '12%', color: 'border-orange-300', animation: 'animate-spin' },
//     { id: 7, type: 'circle', size: 'w-7 h-7', top: '50%', right: '15%', color: 'bg-white', animation: 'animate-pulse' },
//     { id: 8, type: 'triangle', size: 'w-6 h-6', bottom: '12%', right: '12%', color: 'border-blue-400', animation: 'animate-bounce' },
//     { id: 9, type: 'circle', size: 'w-5 h-5', top: '82%', left: '65%', color: 'bg-orange-600', animation: 'animate-ping' },
//     { id: 10, type: 'square', size: 'w-4 h-4', top: '35%', left: '88%', color: 'bg-blue-500', animation: 'animate-pulse' }
//   ];

//   const renderDecorativeItem = (item) => {
//     const baseClasses = `absolute ${item.size} opacity-60 ${item.animation}`;
    
//     switch (item.type) {
//       case 'circle':
//         return `${baseClasses} ${item.color} rounded-full`;
//       case 'square':
//         return `${baseClasses} ${item.color} rounded-md`;
//       case 'triangle':
//         return `${baseClasses} border-4 ${item.color} border-transparent border-t-current`;
//       case 'diamond':
//         return `${baseClasses} ${item.color} border-2 transform rotate-45`;
//       default:
//         return `${baseClasses} ${item.color} rounded-full`;
//     }
//   };

//   return (
//     <div className="min-h-screen w-full bg-black relative overflow-hidden">
      
//       {/* Page Heading */}
//       <div className="absolute top-16 w-full z-20">
//         <h1 className="text-5xl lg:text-6xl font-bold text-white text-center">
//           Why Choose <span className="text-blue-500">Us</span>?
//         </h1>
//         <div className="w-32 h-1 bg-orange-500 mx-auto mt-4"></div>
//         <p className="text-center text-gray-400 mt-6 text-lg max-w-2xl mx-auto px-4">
//           Discover what makes us the preferred choice for over 50,000 travelers worldwide
//         </p>
//       </div>

//       {/* Centered Image */}
//       <div className="flex items-end justify-center h-screen">
//         <img 
//           src={Think} 
//           alt="Thinking person" 
//           className="h-[65vh] max-h-[550px] w-auto object-contain z-10 opacity-80 drop-shadow-2xl"
//         />
//       </div>

//       {/* Enhanced Floating Boxes with Detailed Content */}
//       {boxes.map((box) => (
//         <div
//           key={box.id}
//           className={`absolute bg-white/15 backdrop-blur-lg border border-white/25 rounded-2xl p-5 shadow-2xl cursor-pointer transition-all duration-500 z-15 group ${
//             hoveredBox === box.id 
//               ? 'scale-110 bg-white/25 shadow-orange-500/30 border-orange-500/40' 
//               : 'hover:scale-105 hover:bg-white/25 hover:shadow-orange-500/20 hover:border-orange-500/30'
//           }`}
//           style={{
//             top: box.top,
//             left: box.left,
//             right: box.right,
//             maxWidth: hoveredBox === box.id ? '280px' : '200px',
//             minWidth: '170px'
//           }}
//           onMouseEnter={() => setHoveredBox(box.id)}
//           onMouseLeave={() => setHoveredBox(null)}
//         >
//           {/* Icon */}
//           <div className="text-2xl mb-3 opacity-80">
//             {box.icon}
//           </div>
          
//           {/* Title */}
//           <h3 className="text-white font-semibold text-base mb-3 leading-tight group-hover:text-orange-200 transition-colors duration-300">
//             {box.text}
//           </h3>
          
//           {/* Description - Shows on hover */}
//           <p className={`text-gray-300 text-sm leading-relaxed mb-3 transition-all duration-300 ${
//             hoveredBox === box.id ? 'opacity-100 max-h-24' : 'opacity-0 max-h-0 overflow-hidden'
//           }`}>
//             {box.description}
//           </p>
          
//           <div className="w-8 h-1 bg-orange-500 rounded group-hover:w-12 transition-all duration-300"></div>
          
//           {/* Box Number Indicator */}
//           <div className="absolute -top-3 -right-3 w-6 h-6 bg-orange-500/90 rounded-full flex items-center justify-center text-white text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//             {box.id}
//           </div>
//         </div>
//       ))}

//       {/* 10 Decorative Elements */}
//       {decorativeItems.map((item) => (
//         <div
//           key={item.id}
//           className={renderDecorativeItem(item)}
//           style={{
//             top: item.top,
//             left: item.left,
//             right: item.right,
//             bottom: item.bottom,
//             animationDelay: `${Math.random() * 2}s`
//           }}
//         />
//       ))}

//       {/* Subtle Grid Pattern */}
//       <div 
//         className="absolute inset-0 opacity-5"
//         style={{
//           backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
//           backgroundSize: '60px 60px'
//         }}
//       />

//       {/* Gradient Overlay for Depth */}
//       <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-transparent to-orange-900/10 pointer-events-none"></div>
//     </div>
//   );
// }

// export default Us;

// import React, { useState, useEffect, useRef } from 'react';


// const TourPackagesSection = () => {
//   // Animated text state
//   const [currentWordIndex, setCurrentWordIndex] = useState(0);
//   const spanRef = useRef(null);
  
//   const words = ['Marvelous', 'Incredible', 'Wonderful'];

//   // Animated text effect
//   useEffect(() => {
//     const interval = setInterval(() => {
//       if (spanRef.current) {
//         // Fade out current word
//         spanRef.current.style.opacity = '0';
//         spanRef.current.style.transform = 'translateY(-10px)';
        
//         setTimeout(() => {
//           // Change word
//           setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
          
//           // Fade in new word
//           spanRef.current.style.transform = 'translateY(10px)';
//           setTimeout(() => {
//             spanRef.current.style.opacity = '1';
//             spanRef.current.style.transform = 'translateY(0)';
//           }, 50);
//         }, 250);
//       }
//     }, 2000);

//     return () => clearInterval(interval);
//   }, []);

//   const tourPackages = [
//     {
//       title: "Golden Triangle Tour",
//       duration: "7 Days",
//       destinations: ["Delhi", "Agra", "Jaipur"],
//       description: "Explore the famous Golden Triangle of India covering historic monuments and cultural landmarks.",
//       price: "₹89,999",
//       backgroundImage: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
//       icon: (
//         <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
//         </svg>
//       )
//     },
//     {
//       title: "Kerala Backwaters",
//       duration: "5 Days",
//       destinations: ["Alleppey", "Kumarakom", "Kochi"],
//       description: "Experience tranquil backwaters with luxury houseboat stays and Ayurvedic treatments.",
//       price: "₹67,999",
//       backgroundImage: "https://wallpaperaccess.com/full/1635218.jpg",
//       icon: (
//         <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12l2 2 4-4M3 4h18l-2 13H5L3 4z" />
//         </svg>
//       )
//     },
//     {
//       title: "Rajasthan Heritage Tour",
//       duration: "8 Days", 
//       destinations: ["Jaipur", "Udaipur", "Jodhpur", "Jaisalmer"],
//       description: "Royal palaces, majestic forts, and desert camps in the land of kings.",
//       price: "₹99,999",
//       backgroundImage: "https://holidify.com/images/attr_wiki/compressed/attr_wiki_206.jpg",
//       icon: (
//         <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
//         </svg>
//       )
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-transparent py-16">

//       <div className="max-w-full mx-auto px-16">
        
//         {/* Header Section with Animated Text */}
//         <div className="mb-12">
//           <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
//             Explore Our{' '}
//             <span 
//               ref={spanRef}
//               className="text-blue-500 inline-block min-w-[180px] transition-all duration-300 ease-in-out"
//               style={{
//                 transformOrigin: 'center'
//               }}
//             >
//               {words[currentWordIndex]}
//             </span>{' '}
//             Tour Packages🧳
//           </h1>
//         </div>

//         {/* Navigation Tabs */}
//         <div className="flex flex-wrap gap-4 mb-12">
//           <button className="px-6 py-3 bg-transparent border-2 border-blue-500 text-blue-500 rounded-lg font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300">
//             Golden Triangle
//           </button>
//           <button className="px-6 py-3 bg-blue-500 text-white rounded-lg font-semibold flex items-center gap-2">
//             Premium <span className="bg-blue-600 text-xs px-2 py-1 rounded">New</span>
//           </button>
//           <button className="px-6 py-3 bg-transparent text-white border-2 border-gray-700 rounded-lg font-semibold hover:border-blue-500 hover:text-blue-500 transition-all duration-300">
//             Heritage Tours
//           </button>
//           <button className="px-6 py-3 bg-transparent text-white border-2 border-gray-700 rounded-lg font-semibold flex items-center gap-2 hover:border-blue-500 hover:text-blue-500 transition-all duration-300">
//             Beach Destinations <span className="bg-blue-500 text-xs px-2 py-1 rounded">New</span>
//           </button>
//           <button className="px-6 py-3 bg-transparent text-white border-2 border-gray-700 rounded-lg font-semibold flex items-center gap-2 hover:border-blue-500 hover:text-blue-500 transition-all duration-300">
//             Adventure Tours <span className="bg-blue-500 text-xs px-2 py-1 rounded">New</span>
//           </button>
//         </div>

//         {/* Tour Packages Grid */}
//         <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          
//           {/* Main Feature Card */}
//           <div className="lg:col-span-1 lg:row-span-3 bg-gradient-to-br from-teal-600 to-teal-800 rounded-3xl p-8 text-white relative overflow-hidden min-h-[300px] flex flex-col justify-between">
//             <div>
//               <h2 className="text-3xl font-bold mb-6">Our Best Tour Packages</h2>
//               <p className="text-teal-100 text-lg leading-relaxed mb-8">
//                 Designed for travelers seeking authentic experiences to explore incredible destinations across India with expert guidance and premium services.
//               </p>
//             </div>
            
//             <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg self-start">
//               View All Packages
//             </button>
            
//             {/* Decorative Elements */}
//             <div className="absolute -right-10 -bottom-10 w-32 h-32 bg-teal-500/20 rounded-full"></div>
//             <div className="absolute -left-5 -top-5 w-20 h-20 bg-teal-400/20 rounded-full"></div>
//           </div>

//           {/* Tour Package Cards with Background Images */}
//           {tourPackages.map((pkg, index) => (
//             <div 
//               key={index} 
//               className="relative rounded-3xl overflow-hidden min-h-[400px] flex flex-col group hover:transform hover:scale-105 transition-all duration-500"
//             >
//               {/* Background Image with Blur */}
//               <div 
//                 className="absolute inset-0 bg-cover bg-center transform group-hover:scale-110 transition-transform duration-700"
//                 style={{
//                   backgroundImage: `url(${pkg.backgroundImage})`,
//                   filter: 'blur(1px)'
//                 }}
//               />
              
//               {/* Overlay with Gradient and Backdrop Blur */}
//               <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30 backdrop-blur-[2px]" />
              
//               {/* Content Container */}
//               <div className="relative z-10 p-8 text-white flex flex-col h-full">
                
//                 {/* Icon and Stats */}
//                 <div className="flex items-start justify-between mb-6">
//                   <div className="flex flex-col gap-3">
//                     <div className="flex items-center gap-2 text-white/90">
//                       <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
//                         <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
//                       </svg>
//                       <span className="text-sm font-medium">{pkg.duration}</span>
//                     </div>
//                     <div className="flex items-center gap-2 text-white/90">
//                       <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
//                         <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
//                       </svg>
//                       <span className="text-sm font-medium">{pkg.destinations.length} Destinations</span>
//                     </div>
//                   </div>
//                   <div className="p-3 bg-white/20 backdrop-blur-sm rounded-2xl border border-white/30 shadow-lg">
//                     {pkg.icon}
//                   </div>
//                 </div>

//                 {/* Content */}
//                 <div className="flex-1">
//                   <h3 className="text-2xl font-bold mb-4 text-white drop-shadow-lg">{pkg.title}</h3>
                  
//                   <div className="flex flex-wrap gap-2 mb-6">
//                     {pkg.destinations.map((dest, idx) => (
//                       <span key={idx} className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white rounded-full text-xs font-medium border border-white/30 shadow-sm">
//                         {dest}
//                       </span>
//                     ))}
//                   </div>
                  
//                   <p className="text-white/90 text-sm leading-relaxed mb-6 drop-shadow-sm">
//                     {pkg.description}
//                   </p>
//                 </div>

//                 {/* Price and Action */}
//                 <div className="flex items-center justify-between pt-6 border-t border-white/20">
//                   <div>
//                     <span className="text-blue-400 text-2xl font-bold drop-shadow-lg">{pkg.price}</span>
//                     <span className="text-white/80 text-sm ml-1">per person</span>
//                   </div>
//                   <button className="bg-blue-500/90 backdrop-blur-sm hover:bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 border border-blue-400/30 shadow-lg hover:shadow-xl">
//                     Book Now
//                   </button>
//                 </div>
//               </div>

//               {/* Subtle Shine Effect on Hover */}
//               <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TourPackagesSection;
