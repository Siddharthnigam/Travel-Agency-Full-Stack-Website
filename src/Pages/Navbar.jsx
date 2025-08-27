import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Handle scroll effect for dynamic behavior
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Active link styling function
  const getActiveClass = ({ isActive }) => {
    const baseClasses = "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ease-out";
    return isActive 
      ? `${baseClasses} bg-white/40 text-white` 
      : `${baseClasses} text-white/90 hover:text-white hover:bg-white/30`;
  };

  const getActiveClassMobile = ({ isActive }) => {
    const baseClasses = "flex items-center px-4 py-3 rounded-2xl text-base font-medium transition-all duration-300";
    return isActive
      ? `${baseClasses} bg-white/30 text-white border border-white/30`
      : `${baseClasses} text-white/90 hover:text-white hover:bg-white/20`;
  };

  return (
    <nav className="pt-6 px-4 z-50 relative">
      <div className="max-w-5xl mx-auto">
        {/* Dynamic Island Container */}
        <div 
          className={`
            flex justify-between items-center
            bg-[#2a2823]/90 backdrop-blur-xl border border-white/25
            rounded-full px-8 py-4 shadow-2xl
            transition-all duration-500 ease-out
            ${isScrolled ? 'scale-95 shadow-black/40' : 'scale-100'}
            ${isMenuOpen ? 'rounded-3xl pb-6' : 'rounded-full'}
          `}
        >
          {/* Logo/Brand */}
          <div className="flex-shrink-0">
            <NavLink to="/" className="text-xl font-bold text-white hover:text-gray-200 transition-colors duration-300">
              Travel Agency
            </NavLink>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center">
            <div className="flex items-center space-x-1 bg-white/15 rounded-full p-1 backdrop-blur-sm border border-white/20">
              <NavLink to="/" className={getActiveClass}>
                Home
              </NavLink>
              <NavLink to="/about" className={getActiveClass}>
                About
              </NavLink>
              <NavLink to="/services" className={getActiveClass}>
                Services
              </NavLink>
              <NavLink to="/packages" className={getActiveClass}>
                Packages
              </NavLink>
              <NavLink 
                to="/booking" 
                className="bg-white/30 hover:bg-white/40 text-white px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ease-out backdrop-blur-sm border border-white/30"
              >
                Booking
              </NavLink>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-gray-200 hover:bg-white/20 p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
              aria-label="Toggle menu"
            >
              <svg 
                className={`h-5 w-5 transform transition-transform duration-300 ${isMenuOpen ? 'rotate-45' : ''}`} 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`
          md:hidden mt-2 transition-all duration-500 ease-out transform origin-top
          ${isMenuOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0 pointer-events-none'}
        `}>
          <div className="bg-[#2a2823]/95 backdrop-blur-xl border border-white/25 rounded-3xl px-6 py-4 shadow-2xl">
            <div className="space-y-2">
              <NavLink to="/" className={getActiveClassMobile}>
                <span className="w-2 h-2 bg-white/60 rounded-full mr-3"></span>
                Home
              </NavLink>
              <NavLink to="/about" className={getActiveClassMobile}>
                <span className="w-2 h-2 bg-white/40 rounded-full mr-3"></span>
                About
              </NavLink>
              <NavLink to="/services" className={getActiveClassMobile}>
                <span className="w-2 h-2 bg-white/40 rounded-full mr-3"></span>
                Services
              </NavLink>
              <NavLink to="/packages" className={getActiveClassMobile}>
                <span className="w-2 h-2 bg-white/40 rounded-full mr-3"></span>
                Packages
              </NavLink>
              <NavLink to="/booking" className={getActiveClassMobile}>
                <span className="w-2 h-2 bg-white/80 rounded-full mr-3"></span>
                Booking
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
