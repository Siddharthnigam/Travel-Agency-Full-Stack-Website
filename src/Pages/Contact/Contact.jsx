import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugin
gsap.registerPlugin(ScrollTrigger);

function ContactUs() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const formRef = useRef(null);
  const infoRef = useRef(null);
  const mapRef = useRef(null);
  const galleryRef = useRef(null);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    destination: '',
    travelDate: '',
    travelers: '',
    budget: '',
    message: ''
  });

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Floating background animations
      gsap.to(".float-1", {
        y: -30,
        x: 20,
        rotation: 5,
        duration: 6,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut"
      });

      gsap.to(".float-2", {
        y: 25,
        x: -15,
        rotation: -8,
        duration: 8,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut"
      });

      gsap.to(".float-3", {
        y: -20,
        x: 30,
        scale: 1.1,
        duration: 7,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut"
      });

      gsap.to(".float-4", {
        y: 35,
        x: -25,
        rotation: 10,
        duration: 9,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut"
      });

      gsap.to(".float-5", {
        y: -25,
        x: 15,
        rotation: -5,
        duration: 10,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut"
      });

      gsap.to(".float-6", {
        y: 30,
        x: -20,
        scale: 0.9,
        duration: 11,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut"
      });

      // Particle-like animations
      gsap.to(".particle-1", {
        y: -100,
        opacity: 0.3,
        duration: 4,
        repeat: -1,
        ease: "power2.out"
      });

      gsap.to(".particle-2", {
        y: -120,
        opacity: 0.4,
        duration: 5,
        repeat: -1,
        ease: "power2.out",
        delay: 1
      });

      gsap.to(".particle-3", {
        y: -80,
        opacity: 0.2,
        duration: 3.5,
        repeat: -1,
        ease: "power2.out",
        delay: 2
      });

      // Gallery hover animations
      gsap.set(".gallery-img", {
        scale: 1,
        filter: "grayscale(0.3)"
      });

      // Main content animations
      gsap.from(headingRef.current, {
        opacity: 0,
        y: 80,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 80%"
        }
      });

      gsap.from(formRef.current, {
        opacity: 0,
        x: -100,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: formRef.current,
          start: "top 80%"
        }
      });

      gsap.from(infoRef.current, {
        opacity: 0,
        x: 100,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: infoRef.current,
          start: "top 80%"
        }
      });

      gsap.from(galleryRef.current.children, {
        opacity: 0,
        y: 50,
        scale: 0.8,
        duration: 0.8,
        stagger: 0.2,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: galleryRef.current,
          start: "top 80%"
        }
      });

      gsap.from(mapRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: mapRef.current,
          start: "top 80%"
        }
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry! We will contact you soon.');
  };

  return (
    <section 
      ref={sectionRef}
      id="contact" 
      className="min-h-screen bg-black relative overflow-hidden py-20 px-6"
    >
      {/* Enhanced Animated Background Images */}
      <div className="float-1 absolute top-10 left-10 w-32 h-32 rounded-full overflow-hidden opacity-20 blur-sm">
        <img 
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" 
          alt="Beach paradise" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="float-2 absolute top-40 right-20 w-40 h-40 rounded-full overflow-hidden opacity-15 blur-sm">
        <img 
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" 
          alt="Mountain peaks" 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="float-3 absolute bottom-40 left-20 w-36 h-36 rounded-full overflow-hidden opacity-25 blur-sm">
        <img 
          src="https://images.unsplash.com/photo-1539635278303-d4002c07eae3?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" 
          alt="City skyline" 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="float-4 absolute bottom-20 right-1/4 w-28 h-28 rounded-full overflow-hidden opacity-30 blur-sm">
        <img 
          src="https://images.unsplash.com/photo-1501436513145-30f24e19fcc4?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" 
          alt="Forest landscape" 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="float-5 absolute top-1/3 left-1/3 w-24 h-24 rounded-full overflow-hidden opacity-18 blur-sm">
        <img 
          src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" 
          alt="Bagan temples" 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="float-6 absolute top-2/3 right-1/3 w-35 h-35 rounded-full overflow-hidden opacity-22 blur-sm">
        <img 
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" 
          alt="Restaurant dining" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Particle Effects */}
      <div className="particle-1 absolute top-1/4 left-1/3 w-4 h-4 bg-blue-400 rounded-full opacity-60"></div>
      <div className="particle-2 absolute top-1/2 right-1/4 w-3 h-3 bg-blue-500 rounded-full opacity-40"></div>
      <div className="particle-3 absolute bottom-1/3 left-1/4 w-5 h-5 bg-blue-300 rounded-full opacity-50"></div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: 'radial-gradient(circle, #3b82f6 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div ref={headingRef} className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Us</span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Ready to start your adventure? Get in touch with our travel experts and let us create your perfect journey
          </p>
        </div>

        {/* Travel Gallery Section */}
        <div ref={galleryRef} className="mb-20">
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            Experience <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Amazing Destinations</span>
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="gallery-img group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl h-48 bg-white/5 backdrop-blur-sm border border-white/10">
                <img 
                  src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                  alt="Paris Eiffel Tower" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h4 className="text-white font-bold text-sm mb-1">Paris, France</h4>
                  <p className="text-white/80 text-xs">Romantic getaway</p>
                </div>
              </div>
            </div>

            <div className="gallery-img group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl h-48 bg-white/5 backdrop-blur-sm border border-white/10">
                <img 
                  src="https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                  alt="Santorini Greece" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h4 className="text-white font-bold text-sm mb-1">Santorini, Greece</h4>
                  <p className="text-white/80 text-xs">Island paradise</p>
                </div>
              </div>
            </div>

            <div className="gallery-img group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl h-48 bg-white/5 backdrop-blur-sm border border-white/10">
                <img 
                  src="https://images.unsplash.com/photo-1518684079-3c830dcef090?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                  alt="Dubai skyline" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h4 className="text-white font-bold text-sm mb-1">Dubai, UAE</h4>
                  <p className="text-white/80 text-xs">Modern luxury</p>
                </div>
              </div>
            </div>

            <div className="gallery-img group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl h-48 bg-white/5 backdrop-blur-sm border border-white/10">
                <img 
                  src="https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                  alt="Travel planning" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h4 className="text-white font-bold text-sm mb-1">Bali, Indonesia</h4>
                  <p className="text-white/80 text-xs">Tropical escape</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          {/* Contact Form */}
          <div ref={formRef} className="relative">
            {/* Decorative background image for form */}
            <div className="absolute inset-0 rounded-3xl overflow-hidden opacity-10">
              <img 
                src="https://images.unsplash.com/photo-1556075798-4825dfaaf498?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Office background" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6">
                Plan Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Dream Trip</span>
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-300 font-medium mb-2">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors backdrop-blur-sm"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 font-medium mb-2">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors backdrop-blur-sm"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-300 font-medium mb-2">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors backdrop-blur-sm"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 font-medium mb-2">Preferred Destination</label>
                    <select
                      name="destination"
                      value={formData.destination}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-blue-400 transition-colors backdrop-blur-sm"
                    >
                      <option value="">Select a destination</option>
                      <option value="europe">Europe</option>
                      <option value="asia">Asia</option>
                      <option value="africa">Africa</option>
                      <option value="america">America</option>
                      <option value="australia">Australia & Oceania</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-300 font-medium mb-2">Travel Date</label>
                    <input
                      type="date"
                      name="travelDate"
                      value={formData.travelDate}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-blue-400 transition-colors backdrop-blur-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 font-medium mb-2">Number of Travelers</label>
                    <select
                      name="travelers"
                      value={formData.travelers}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-blue-400 transition-colors backdrop-blur-sm"
                    >
                      <option value="">Select travelers</option>
                      <option value="1">1 Person</option>
                      <option value="2">2 People</option>
                      <option value="3-5">3-5 People</option>
                      <option value="6-10">6-10 People</option>
                      <option value="10+">10+ People</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-gray-300 font-medium mb-2">Budget Range</label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-blue-400 transition-colors backdrop-blur-sm"
                  >
                    <option value="">Select budget range</option>
                    <option value="under-1000">Under $1,000</option>
                    <option value="1000-3000">$1,000 - $3,000</option>
                    <option value="3000-5000">$3,000 - $5,000</option>
                    <option value="5000-10000">$5,000 - $10,000</option>
                    <option value="over-10000">Over $10,000</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-300 font-medium mb-2">Tell us about your dream trip</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors backdrop-blur-sm resize-none"
                    placeholder="Describe your ideal vacation, special requirements, or any questions you have..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-400 to-blue-600 text-white font-semibold py-4 px-8 rounded-lg hover:shadow-2xl hover:shadow-blue-500/25 transform hover:scale-105 transition-all duration-300"
                >
                  Send My Travel Request
                </button>
              </form>
            </div>
          </div>

          {/* Contact Information with Image Background */}
          <div ref={infoRef} className="space-y-8">
            {/* Hero Contact Image */}
            <div className="relative rounded-3xl overflow-hidden h-64 mb-8">
              <img 
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Travel consultation" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-2xl font-bold text-white mb-2">
                  Let's Plan Your <span className="text-blue-400">Next Adventure</span>
                </h3>
                <p className="text-white/90">Our expert consultants are ready to help you create unforgettable memories</p>
              </div>
            </div>

            {/* Contact Cards */}
            <div className="space-y-6">
              <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white">Our Location</h4>
                    <p className="text-gray-300">Visit our office</p>
                  </div>
                </div>
                <p className="text-gray-300 ml-16">
                  123 Travel Street, Adventure City<br />
                  New York, NY 10001, USA
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white">Phone Numbers</h4>
                    <p className="text-gray-300">Call us anytime</p>
                  </div>
                </div>
                <div className="text-gray-300 ml-16 space-y-1">
                  <p>Main: +1 (555) 123-4567</p>
                  <p>Emergency: +1 (555) 999-8888</p>
                  <p>WhatsApp: +1 (555) 777-6666</p>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white">Email Addresses</h4>
                    <p className="text-gray-300">Drop us a line</p>
                  </div>
                </div>
                <div className="text-gray-300 ml-16 space-y-1">
                  <p>info@travelagency.com</p>
                  <p>booking@travelagency.com</p>
                  <p>support@travelagency.com</p>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white">Business Hours</h4>
                    <p className="text-gray-300">When we're available</p>
                  </div>
                </div>
                <div className="text-gray-300 ml-16 space-y-1">
                  <p>Mon - Fri: 9:00 AM - 6:00 PM</p>
                  <p>Saturday: 10:00 AM - 4:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Map Section with Background */}
        <div ref={mapRef} className="relative bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 mb-16">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            Find Us on the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Map</span>
          </h3>
          
          <div className="relative bg-gray-800 rounded-2xl h-64 flex items-center justify-center overflow-hidden">
            {/* Background map image */}
            <div className="absolute inset-0">
              <img 
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="City map" 
                className="w-full h-full object-cover opacity-20"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/50 to-purple-900/50"></div>
            <div className="text-center z-10">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                </svg>
              </div>
              <p className="text-white font-semibold mb-2">Visit Our Office</p>
              <p className="text-gray-300 text-sm">123 Travel Street, Adventure City, NY 10001</p>
            </div>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-white mb-8">
            Follow Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Adventures</span>
          </h3>
          <div className="flex justify-center space-x-6">
            <a href="#" className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-300 border border-white/20">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
              </svg>
            </a>
            <a href="#" className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-300 border border-white/20">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2z"/>
              </svg>
            </a>
            <a href="#" className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-300 border border-white/20">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"/>
              </svg>
            </a>
            <a href="#" className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-300 border border-white/20">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
