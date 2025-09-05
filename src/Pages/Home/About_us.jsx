import React, { useRef, useEffect } from 'react';
import About from '../../assets/about.mp4';

function About_us() {
  const aiRobotRef = useRef(null);

  useEffect(() => {
    if (aiRobotRef.current) {
      setTimeout(() => {
        aiRobotRef.current.classList.add('animate');
      }, 500);
    }
  }, []);

  return (
    <div className="w-full min-h-screen bg-black text-white py-16 px-6 sm:px-10">
      <div className="max-w-7xl mx-auto flex flex-wrap lg:flex-nowrap gap-12 lg:gap-20 items-center justify-center">
        
        {/* Left Content Section */}
        <div className="w-full lg:w-1/2 space-y-8">
          <div className="space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              About <span className="text-blue-500">UInravel</span> ✨
            </h1>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-medium leading-relaxed text-white">
              Accessible luxury travel, curated with a human touch and powered by AI.
            </h2>
            <p className="text-base sm:text-lg leading-8 text-white max-w-2xl opacity-80">
              At UInravel, we believe that luxury should be felt—not flaunted. That unforgettable travel experiences shouldn't be reserved for the few, but thoughtfully designed for the curious, the dreamers, and the explorers among us. We're here to make high-end travel not just attainable, but deeply personal.
            </p>
          </div>

          <button className="px-8 sm:px-10 py-3 sm:py-4 bg-blue-500 hover:bg-blue-600 rounded-2xl transition-colors duration-300 font-semibold text-base sm:text-lg text-white">
            Learn More About Us
          </button>

          {/* Video Section */}
          <div className="mt-12">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-auto aspect-video object-cover rounded-3xl shadow-xl border border-blue-500/20"
            >
              <source src={About} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        {/* Right AI Section */}
        <div className="w-full lg:w-1/2 flex flex-col items-center justify-center relative mt-16 lg:mt-0">
          <style jsx>{`
            @keyframes gentleFloat {
              0%, 100% { transform: translateY(0px); }
              50% { transform: translateY(-8px); }
            }

            @keyframes subtlePulse {
              0%, 100% { opacity: 0.6; }
              50% { opacity: 1; }
            }

            @keyframes slowGlow {
              0%, 100% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.2); }
              50% { box-shadow: 0 0 40px rgba(59, 130, 246, 0.4); }
            }

            .ai-robot.animate {
              animation: gentleFloat 6s ease-in-out infinite;
            }

            .ai-robot.animate .robot-core {
              animation: slowGlow 4s ease-in-out infinite;
            }

            .ai-robot.animate .pulse-dot {
              animation: subtlePulse 3s ease-in-out infinite;
            }
          `}</style>

          {/* AI Robot Container */}
          <div ref={aiRobotRef} className="ai-robot relative mb-16">
            <div className="robot-core w-64 sm:w-80 h-64 sm:h-80 bg-black border-2 border-blue-500 rounded-3xl relative shadow-xl">
              <div className="absolute inset-6 sm:inset-8 bg-black rounded-2xl border border-blue-500/50 flex items-center justify-center">
                <div className="flex space-x-8 sm:space-x-12">
                  <div className="w-4 h-4 bg-blue-500 rounded-full pulse-dot"></div>
                  <div className="w-4 h-4 bg-blue-500 rounded-full pulse-dot" style={{ animationDelay: '0.5s' }}></div>
                </div>
                <div className="absolute bottom-4 left-4 right-4 h-px bg-blue-500/30"></div>
              </div>

              {/* Corner Accents */}
              <div className="absolute top-4 left-4 w-4 h-4 border-l-2 border-t-2 border-blue-500"></div>
              <div className="absolute top-4 right-4 w-4 h-4 border-r-2 border-t-2 border-blue-500"></div>
              <div className="absolute bottom-4 left-4 w-4 h-4 border-l-2 border-b-2 border-blue-500"></div>
              <div className="absolute bottom-4 right-4 w-4 h-4 border-r-2 border-b-2 border-blue-500"></div>

              {/* Center Brand Mark */}
              <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-blue-500 rounded-full"></div>
            </div>

            {/* Minimal Orbit Ring */}
            <div className="absolute inset-0 w-72 sm:w-96 h-72 sm:h-96 border border-blue-500/20 rounded-full" style={{ transform: 'translate(-32px, -32px)' }}></div>
          </div>

          {/* AI Text Content */}
          <div className="text-center space-y-8 max-w-2xl px-4 sm:px-0">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              AI-Powered <span className="text-blue-500">Intelligence</span>
            </h2>

            <p className="text-base sm:text-xl leading-7 sm:leading-9 text-white opacity-80">
              With UInravel One, your journey plans itself through advanced AI algorithms.
              Smart automation handles the details—flights, stays, transfers—while
              personalized curation adds the soul with local gems, hidden escapes,
              and moments that feel made for you.
            </p>

            <div className="grid grid-cols-1 gap-4 text-base sm:text-lg text-white pt-8">
              <div className="flex items-center justify-center space-x-4 p-6 bg-black border border-blue-500/20 rounded-2xl">
                <div className="w-2 h-2 bg-blue-500 rounded-full pulse-dot"></div>
                <span>No spreadsheets. No stress.</span>
              </div>
              <div className="flex items-center justify-center space-x-4 p-6 bg-black border border-blue-500/20 rounded-2xl">
                <div className="w-2 h-2 bg-blue-500 rounded-full pulse-dot" style={{ animationDelay: '0.5s' }}></div>
                <span>Just seamless travel, start to finish.</span>
              </div>
              <div className="flex items-center justify-center space-x-4 p-6 bg-black border border-blue-500/20 rounded-2xl">
                <div className="w-2 h-2 bg-blue-500 rounded-full pulse-dot" style={{ animationDelay: '1s' }}></div>
                <span>Powered by cutting-edge AI technology.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About_us;